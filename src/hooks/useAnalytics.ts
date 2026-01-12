/**
 * https://raghunathchava.com
 * Analytics Hook for Raghunath Chava Marketing Website
 *
 * This hook provides analytics tracking functionality with silent failure handling.
 * Supports event tracking, page views, conversions, and user properties.
 *
 * Requirements: 7.1, 7.2, 7.3
 */

import React, { useCallback } from "react";
import type {
  AnalyticsEvent,
  UserProperties,
  UseAnalyticsReturn,
  UTMParams,
} from "@/types/analytics";

/**
 * Analytics configuration
 */
interface AnalyticsConfig {
  /** Google Analytics 4 Measurement ID */
  ga4MeasurementId?: string;
  /** Google Tag Manager Container ID */
  gtmContainerId?: string;
  /** Debug mode flag */
  debug?: boolean;
  /** Disable analytics in development */
  disableInDev?: boolean;
}

/**
 * Default analytics configuration
 */
const defaultConfig: AnalyticsConfig = {
  ga4MeasurementId: import.meta.env.VITE_GA4_MEASUREMENT_ID,
  gtmContainerId: import.meta.env.VITE_GTM_CONTAINER_ID,
  debug: import.meta.env.DEV,
  disableInDev: false,
};

/**
 * Check if analytics is available and enabled
 */
function isAnalyticsEnabled(config: AnalyticsConfig): boolean {
  // Disable in development if configured
  if (config.disableInDev && import.meta.env.DEV) {
    return false;
  }

  // Check if gtag is available (Google Analytics)
  if (typeof window !== "undefined" && window.gtag) {
    return true;
  }

  // Check if dataLayer is available (Google Tag Manager)
  if (typeof window !== "undefined" && window.dataLayer) {
    return true;
  }

  return false;
}

// Global type declarations for analytics
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * Send event to Google Analytics via gtag
 */
function sendToGoogleAnalytics(
  eventName: string,
  parameters: Record<string, unknown>,
  config: AnalyticsConfig,
): void {
  if (typeof window === "undefined" || !window.gtag) {
    return;
  }

  if (config.debug) {
    console.log("[Analytics] GA4 Event:", eventName, parameters);
  }

  window.gtag("event", eventName, {
    ...parameters,
    // Add measurement ID if available
    ...(config.ga4MeasurementId && { send_to: config.ga4MeasurementId }),
  });
}

/**
 * Send event to Google Tag Manager via dataLayer
 */
function sendToGoogleTagManager(
  eventName: string,
  parameters: Record<string, unknown>,
  config: AnalyticsConfig,
): void {
  if (typeof window === "undefined" || !window.dataLayer) {
    return;
  }

  if (config.debug) {
    console.log("[Analytics] GTM Event:", eventName, parameters);
  }

  window.dataLayer.push({
    event: eventName,
    ...parameters,
  });
}

/**
 * Send analytics event with silent failure handling
 */
function sendAnalyticsEvent(
  eventName: string,
  parameters: Record<string, unknown>,
  config: AnalyticsConfig,
): void {
  try {
    if (!isAnalyticsEnabled(config)) {
      if (config.debug) {
        console.log(
          "[Analytics] Disabled - Event not sent:",
          eventName,
          parameters,
        );
      }
      return;
    }

    // Send to Google Analytics
    sendToGoogleAnalytics(eventName, parameters, config);

    // Send to Google Tag Manager
    sendToGoogleTagManager(eventName, parameters, config);
  } catch (error) {
    // Silent failure - analytics errors should not impact user experience
    if (config.debug) {
      console.warn("[Analytics] Event failed:", eventName, error);
    }
    // In production, we silently ignore analytics errors
  }
}

/**
 * Analytics hook with tracking functionality
 */
export function useAnalytics(
  config: AnalyticsConfig = defaultConfig,
): UseAnalyticsReturn {
  const trackEvent = useCallback(
    (event: AnalyticsEvent) => {
      const parameters = {
        event_category: event.category,
        ...event.properties,
      };

      sendAnalyticsEvent(event.name, parameters, config);
    },
    [config],
  );

  const trackPageView = useCallback(
    (path: string, title: string) => {
      const parameters = {
        page_title: title,
        page_location:
          typeof window !== "undefined" ? window.location.href : path,
        page_path: path,
      };

      sendAnalyticsEvent("page_view", parameters, config);
    },
    [config],
  );

  const trackConversion = useCallback(
    (conversionId: string, value?: number) => {
      const parameters = {
        event_category: "conversion",
        conversion_id: conversionId,
        value: value,
        currency: "USD",
      };

      sendAnalyticsEvent("conversion", parameters, config);
    },
    [config],
  );

  const setUserProperties = useCallback(
    (properties: Partial<UserProperties>) => {
      try {
        if (!isAnalyticsEnabled(config)) {
          return;
        }

        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("config", config.ga4MeasurementId, {
            user_properties: properties,
          });
        }

        if (config.debug) {
          console.log("[Analytics] User Properties Set:", properties);
        }
      } catch (error) {
        if (config.debug) {
          console.warn("[Analytics] Set user properties failed:", error);
        }
      }
    },
    [config],
  );

  const getUTMParams = useCallback((): UTMParams | null => {
    if (typeof window === "undefined") {
      return null;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const utmParams: UTMParams = {};

    const utm_source = urlParams.get("utm_source");
    const utm_medium = urlParams.get("utm_medium");
    const utm_campaign = urlParams.get("utm_campaign");
    const utm_content = urlParams.get("utm_content");
    const utm_term = urlParams.get("utm_term");

    if (utm_source) utmParams.utm_source = utm_source;
    if (utm_medium) utmParams.utm_medium = utm_medium;
    if (utm_campaign) utmParams.utm_campaign = utm_campaign;
    if (utm_content) utmParams.utm_content = utm_content;
    if (utm_term) utmParams.utm_term = utm_term;

    return Object.keys(utmParams).length > 0 ? utmParams : null;
  }, []);

  return {
    trackEvent,
    trackPageView,
    trackConversion,
    setUserProperties,
    getUTMParams,
    isEnabled: isAnalyticsEnabled(config),
  };
}

/**
 * Hook for tracking page views automatically
 */
export function usePageTracking(path: string, title: string): void {
  const { trackPageView } = useAnalytics();

  // Track page view on mount and when path/title changes
  React.useEffect(() => {
    trackPageView(path, title);
  }, [path, title, trackPageView]);
}

/**
 * Higher-order component for automatic page tracking
 */
export function withPageTracking<P extends object>(
  Component: React.ComponentType<P>,
  getPageInfo: (props: P) => { path: string; title: string },
): React.ComponentType<P> {
  return function TrackedComponent(props: P) {
    const { path, title } = getPageInfo(props);
    usePageTracking(path, title);
    return React.createElement(Component, props);
  };
}

export default useAnalytics;

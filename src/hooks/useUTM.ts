/**
 * https://raghunathchava.com
 * UTM Parameter Handling Hook for Raghunath Chava Marketing Website
 *
 * This hook provides UTM parameter parsing, storage, and attribution tracking.
 * Supports localStorage persistence for multi-touch attribution.
 *
 * Requirements: 5.3, 7.4
 */

import { useCallback, useEffect, useState } from "react";
import type { UTMParams, CampaignTemplate } from "@/types/analytics";
import { utmTaxonomy, campaignTemplates } from "@/data/utm";

/**
 * UTM storage keys for localStorage
 */
const UTM_STORAGE_KEYS = {
  FIRST_TOUCH: "saraise_utm_first_touch",
  LAST_TOUCH: "saraise_utm_last_touch",
  SESSION_UTM: "saraise_utm_session",
  ATTRIBUTION_HISTORY: "saraise_utm_history",
} as const;

/**
 * UTM attribution entry
 */
interface UTMAttribution {
  utm: UTMParams;
  timestamp: number;
  sessionId: string;
  pageUrl: string;
}

/**
 * Return type for useUTM hook
 */
interface UseUTMReturn {
  /** Current UTM parameters from URL */
  currentUTM: UTMParams | null;
  /** First touch UTM parameters */
  firstTouchUTM: UTMParams | null;
  /** Last touch UTM parameters */
  lastTouchUTM: UTMParams | null;
  /** Session UTM parameters */
  sessionUTM: UTMParams | null;
  /** Full attribution history */
  attributionHistory: UTMAttribution[];
  /** Parse UTM parameters from URL */
  parseUTMFromURL: (url?: string) => UTMParams | null;
  /** Store UTM parameters */
  storeUTM: (utm: UTMParams, touchType: "first" | "last" | "session") => void;
  /** Clear all stored UTM data */
  clearUTMData: () => void;
  /** Get campaign template by UTM parameters */
  getCampaignTemplate: (utm: UTMParams) => CampaignTemplate | null;
  /** Validate UTM parameters against taxonomy */
  validateUTM: (utm: UTMParams) => { isValid: boolean; errors: string[] };
}

/**
 * Generate session ID
 */
function generateSessionId(): string {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Get current session ID from sessionStorage
 */
function getSessionId(): string {
  if (typeof window === "undefined") {
    return generateSessionId();
  }

  let sessionId = sessionStorage.getItem("saraise_session_id");
  if (!sessionId) {
    sessionId = generateSessionId();
    sessionStorage.setItem("saraise_session_id", sessionId);
  }
  return sessionId;
}

/**
 * Parse UTM parameters from URL string
 */
function parseUTMParameters(url: string): UTMParams | null {
  try {
    const urlObj = new URL(url);
    const params = urlObj.searchParams;

    const utm: UTMParams = {};
    const utmSource = params.get("utm_source");
    const utmMedium = params.get("utm_medium");
    const utmCampaign = params.get("utm_campaign");
    const utmContent = params.get("utm_content");
    const utmTerm = params.get("utm_term");

    if (utmSource) utm.utm_source = utmSource;
    if (utmMedium) utm.utm_medium = utmMedium;
    if (utmCampaign) utm.utm_campaign = utmCampaign;
    if (utmContent) utm.utm_content = utmContent;
    if (utmTerm) utm.utm_term = utmTerm;

    return Object.keys(utm).length > 0 ? utm : null;
  } catch (error) {
    console.warn("[UTM] Failed to parse URL:", url, error);
    return null;
  }
}

/**
 * Load UTM data from localStorage
 */
function loadUTMFromStorage(key: string): UTMParams | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.warn("[UTM] Failed to load from storage:", key, error);
    return null;
  }
}

/**
 * Save UTM data to localStorage
 */
function saveUTMToStorage(key: string, utm: UTMParams): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    localStorage.setItem(key, JSON.stringify(utm));
  } catch (error) {
    console.warn("[UTM] Failed to save to storage:", key, error);
  }
}

/**
 * Load attribution history from localStorage
 */
function loadAttributionHistory(): UTMAttribution[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const stored = localStorage.getItem(UTM_STORAGE_KEYS.ATTRIBUTION_HISTORY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.warn("[UTM] Failed to load attribution history:", error);
    return [];
  }
}

/**
 * Save attribution history to localStorage
 */
function saveAttributionHistory(history: UTMAttribution[]): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    // Keep only last 50 entries to prevent storage bloat
    const trimmedHistory = history.slice(-50);
    localStorage.setItem(
      UTM_STORAGE_KEYS.ATTRIBUTION_HISTORY,
      JSON.stringify(trimmedHistory),
    );
  } catch (error) {
    console.warn("[UTM] Failed to save attribution history:", error);
  }
}

/**
 * UTM parameter handling hook
 */
export function useUTM(): UseUTMReturn {
  const [currentUTM, setCurrentUTM] = useState<UTMParams | null>(null);
  const [firstTouchUTM, setFirstTouchUTM] = useState<UTMParams | null>(null);
  const [lastTouchUTM, setLastTouchUTM] = useState<UTMParams | null>(null);
  const [sessionUTM, setSessionUTM] = useState<UTMParams | null>(null);
  const [attributionHistory, setAttributionHistory] = useState<
    UTMAttribution[]
  >([]);

  // Parse UTM parameters from current URL
  const parseUTMFromURL = useCallback((url?: string): UTMParams | null => {
    const targetUrl =
      url || (typeof window !== "undefined" ? window.location.href : "");
    return parseUTMParameters(targetUrl);
  }, []);

  // Store UTM parameters
  const storeUTM = useCallback(
    (utm: UTMParams, touchType: "first" | "last" | "session") => {
      const storageKey =
        touchType === "first"
          ? UTM_STORAGE_KEYS.FIRST_TOUCH
          : touchType === "last"
            ? UTM_STORAGE_KEYS.LAST_TOUCH
            : UTM_STORAGE_KEYS.SESSION_UTM;

      saveUTMToStorage(storageKey, utm);

      // Update state
      if (touchType === "first") {
        setFirstTouchUTM(utm);
      } else if (touchType === "last") {
        setLastTouchUTM(utm);
      } else {
        setSessionUTM(utm);
      }

      // Add to attribution history
      const attribution: UTMAttribution = {
        utm,
        timestamp: Date.now(),
        sessionId: getSessionId(),
        pageUrl: typeof window !== "undefined" ? window.location.href : "",
      };

      const newHistory = [...attributionHistory, attribution];
      setAttributionHistory(newHistory);
      saveAttributionHistory(newHistory);
    },
    [attributionHistory],
  );

  // Clear all UTM data
  const clearUTMData = useCallback(() => {
    if (typeof window === "undefined") {
      return;
    }

    Object.values(UTM_STORAGE_KEYS).forEach((key) => {
      localStorage.removeItem(key);
    });

    setCurrentUTM(null);
    setFirstTouchUTM(null);
    setLastTouchUTM(null);
    setSessionUTM(null);
    setAttributionHistory([]);
  }, []);

  // Get campaign template by UTM parameters
  const getCampaignTemplate = useCallback(
    (utm: UTMParams): CampaignTemplate | null => {
      return (
        campaignTemplates.find(
          (template) =>
            template.source === utm.utm_source &&
            template.medium === utm.utm_medium &&
            (!utm.utm_campaign || template.name.includes(utm.utm_campaign)),
        ) || null
      );
    },
    [],
  );

  // Validate UTM parameters against taxonomy
  const validateUTM = useCallback((utm: UTMParams) => {
    const errors: string[] = [];

    // Validate source
    if (utm.utm_source && !utmTaxonomy.sources.includes(utm.utm_source)) {
      errors.push(`Invalid utm_source: ${utm.utm_source}`);
    }

    // Validate medium
    if (utm.utm_medium && !utmTaxonomy.mediums.includes(utm.utm_medium)) {
      errors.push(`Invalid utm_medium: ${utm.utm_medium}`);
    }

    // Validate campaign format (if specified in taxonomy)
    if (utm.utm_campaign && utmTaxonomy.campaignPattern) {
      const pattern = new RegExp(utmTaxonomy.campaignPattern);
      if (!pattern.test(utm.utm_campaign)) {
        errors.push(`Invalid utm_campaign format: ${utm.utm_campaign}`);
      }
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }, []);

  // Initialize UTM data on mount
  useEffect(() => {
    // Load stored UTM data
    const storedFirstTouch = loadUTMFromStorage(UTM_STORAGE_KEYS.FIRST_TOUCH);
    const storedLastTouch = loadUTMFromStorage(UTM_STORAGE_KEYS.LAST_TOUCH);
    const storedSessionUTM = loadUTMFromStorage(UTM_STORAGE_KEYS.SESSION_UTM);
    const storedHistory = loadAttributionHistory();

    setFirstTouchUTM(storedFirstTouch);
    setLastTouchUTM(storedLastTouch);
    setSessionUTM(storedSessionUTM);
    setAttributionHistory(storedHistory);

    // Parse current URL for UTM parameters
    const currentUrlUTM = parseUTMFromURL();
    setCurrentUTM(currentUrlUTM);

    if (currentUrlUTM) {
      // Store as last touch
      storeUTM(currentUrlUTM, "last");

      // Store as first touch if none exists
      if (!storedFirstTouch) {
        storeUTM(currentUrlUTM, "first");
      }

      // Store as session UTM (overwrites previous session UTM)
      storeUTM(currentUrlUTM, "session");
    }
  }, [parseUTMFromURL, storeUTM]);

  return {
    currentUTM,
    firstTouchUTM,
    lastTouchUTM,
    sessionUTM,
    attributionHistory,
    parseUTMFromURL,
    storeUTM,
    clearUTMData,
    getCampaignTemplate,
    validateUTM,
  };
}

/**
 * Hook for tracking UTM parameters on page navigation
 */
export function useUTMTracking(): void {
  const { parseUTMFromURL, storeUTM } = useUTM();

  useEffect(() => {
    const handleLocationChange = () => {
      const utm = parseUTMFromURL();
      if (utm) {
        storeUTM(utm, "last");
      }
    };

    // Listen for popstate events (back/forward navigation)
    window.addEventListener("popstate", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, [parseUTMFromURL, storeUTM]);
}

export default useUTM;

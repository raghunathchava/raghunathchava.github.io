/**
 * https://raghunathchava.com
 * Funnel Tracking Hook for Raghunath Chava Marketing Website
 *
 * Automatically tracks funnel stage progression based on route.
 * Maps routes to funnel stages and tracks progression between stages.
 *
 * Requirements: 7.1, 7.3
 */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAnalytics } from "./useAnalytics";
import type { FunnelStage } from "@/types/analytics";

const funnelStageMap: Record<string, FunnelStage> = {
  "/": "awareness",
  "/product": "interest",
  "/product/features": "consideration",
  "/product/modules": "consideration",
  "/product/architecture": "interest",
  "/product/integrations": "consideration",
  "/product/ai-ready": "interest",
  "/solutions": "interest",
  "/solutions/manufacturing": "consideration",
  "/solutions/healthcare": "consideration",
  "/solutions/retail": "consideration",
  "/solutions/professional-services": "consideration",
  "/solutions/hospitality": "consideration",
  "/pricing": "intent",
  "/enterprise": "intent",
  "/enterprise/security": "evaluation",
  "/enterprise/compliance": "evaluation",
  "/enterprise/governance": "evaluation",
  "/enterprise/scalability": "evaluation",
  "/enterprise/integrations": "evaluation",
  "/enterprise/support": "evaluation",
  "/company/contact": "evaluation",
  "/subscribe": "purchase",
};

/**
 * Hook for automatic funnel stage tracking
 */
export function useFunnelTracking() {
  const location = useLocation();
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    const stage = funnelStageMap[location.pathname] || "awareness";

    // Track current stage
    trackEvent({
      name: `funnel_${stage}`,
      category: "conversion",
      properties: {
        stage,
        path: location.pathname,
        timestamp: Date.now(),
      },
    });

    // Store in sessionStorage for multi-touch attribution
    if (typeof window !== "undefined") {
      const funnelHistory =
        JSON.parse(sessionStorage.getItem("funnel_history") || "[]") || [];
      const lastStage = funnelHistory[funnelHistory.length - 1]?.stage;

      // Track progression if stage changed
      if (lastStage && lastStage !== stage) {
        trackEvent({
          name: "funnel_progression",
          category: "conversion",
          properties: {
            fromStage: lastStage,
            toStage: stage,
            path: location.pathname,
          },
        });
      }

      // Update funnel history
      funnelHistory.push({
        stage,
        path: location.pathname,
        timestamp: Date.now(),
      });
      sessionStorage.setItem("funnel_history", JSON.stringify(funnelHistory));
    }
  }, [location.pathname, trackEvent]);
}

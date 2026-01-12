/**
 * https://raghunathchava.com
 * UTM Persistence Hook
 *
 * Captures and persists UTM parameters for multi-touch attribution.
 *
 * Requirements: 4.2
 */
import { useEffect } from "react";
import { useAnalytics } from "./useAnalytics";
import type { UTMParams } from "@/types/analytics";

/**
 * Hook for capturing and persisting UTM parameters
 */
export function useUTMPersistence() {
  const { getUTMParams } = useAnalytics();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const utmParams = getUTMParams();

    if (utmParams) {
      // Store last-touch UTM in sessionStorage
      sessionStorage.setItem("last_touch_utm", JSON.stringify(utmParams));

      // Store first-touch UTM in localStorage (if not exists)
      const firstTouchUTM = localStorage.getItem("first_touch_utm");
      if (!firstTouchUTM) {
        localStorage.setItem("first_touch_utm", JSON.stringify(utmParams));
      }

      // Also store in session for current session tracking
      sessionStorage.setItem("current_utm", JSON.stringify(utmParams));
    }
  }, [getUTMParams]);
}

/**
 * Get first-touch UTM parameters
 */
export function getFirstTouchUTM(): UTMParams | null {
  if (typeof window === "undefined") return null;

  const stored = localStorage.getItem("first_touch_utm");
  if (!stored) return null;

  try {
    return JSON.parse(stored) as UTMParams;
  } catch {
    return null;
  }
}

/**
 * Get last-touch UTM parameters
 */
export function getLastTouchUTM(): UTMParams | null {
  if (typeof window === "undefined") return null;

  const stored = sessionStorage.getItem("last_touch_utm");
  if (!stored) return null;

  try {
    return JSON.parse(stored) as UTMParams;
  } catch {
    return null;
  }
}

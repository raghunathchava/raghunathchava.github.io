/**
 * https://raghunathchava.com
 * Page Wrapper Component
 *
 * Wraps pages with funnel tracking and UTM persistence.
 *
 * Requirements: 4.1, 4.2
 */
import { useFunnelTracking } from "@/hooks/useFunnelTracking";
import { useUTMPersistence } from "@/hooks/useUTMPersistence";

interface PageWrapperProps {
  children: React.ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  useFunnelTracking();
  useUTMPersistence();
  return <>{children}</>;
}

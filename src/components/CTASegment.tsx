/**
 * https://raghunathchava.com
 * CTA Segment Component with ICP-Specific CTAs and Analytics Tracking
 *
 * Requirements: 2.1, 6.1
 */
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useAnalytics } from "@/hooks/useAnalytics";
import type { CTAConfig, ICP } from "@/types/components";
import { cn } from "@/lib/utils";

interface CTASegmentProps {
  icp: ICP | ICP[];
  primaryCTA: CTAConfig;
  secondaryCTA?: CTAConfig;
  layout?: "horizontal" | "vertical" | "grid";
  className?: string;
}

export function CTASegment({
  icp: _icp,
  primaryCTA,
  secondaryCTA,
  layout = "horizontal",
  className,
}: CTASegmentProps) {
  const { trackEvent } = useAnalytics();

  const handleCTAClick = (cta: CTAConfig) => {
    const properties: Record<string, string | number | boolean> = {
      elementId: cta.trackingId,
      elementType: "button",
      elementText: cta.label,
      targetUrl: cta.href,
      trackingId: cta.trackingId,
    };
    if (cta.icpTarget) {
      properties.icpTarget = cta.icpTarget;
    }
    trackEvent({
      name: "cta_click",
      category: "conversion",
      properties,
    });
  };

  const renderCTA = (cta: CTAConfig, isPrimary: boolean) => {
    const baseClasses =
      "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all hover:-translate-y-1";
    const variantClasses = {
      primary:
        "bg-gradient-to-r from-deepBlue to-teal text-white hover:shadow-xl",
      secondary: "bg-secondary border border-border hover:bg-secondary/80",
      ghost: "bg-transparent hover:bg-secondary",
      outline:
        "border-2 border-deepBlue text-deepBlue hover:bg-deepBlue hover:text-white",
    };

    if (cta.external) {
      return (
        <a
          href={cta.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleCTAClick(cta)}
          className={cn(
            baseClasses,
            variantClasses[cta.variant],
            cta.disabled && "opacity-50 cursor-not-allowed pointer-events-none",
          )}
        >
          <span>{cta.label}</span>
          {isPrimary && <ArrowRight className="w-5 h-5" />}
        </a>
      );
    }

    return (
      <Link
        to={cta.href}
        onClick={() => handleCTAClick(cta)}
        className={cn(
          baseClasses,
          variantClasses[cta.variant],
          cta.disabled && "opacity-50 cursor-not-allowed pointer-events-none",
        )}
      >
        <span>{cta.label}</span>
        {isPrimary && <ArrowRight className="w-5 h-5" />}
      </Link>
    );
  };

  const layoutClasses = {
    horizontal: "flex flex-col sm:flex-row gap-4",
    vertical: "flex flex-col gap-4",
    grid: "grid grid-cols-2 gap-4",
  };

  return (
    <div className={cn(layoutClasses[layout], className)}>
      {renderCTA(primaryCTA, true)}
      {secondaryCTA && renderCTA(secondaryCTA, false)}
    </div>
  );
}

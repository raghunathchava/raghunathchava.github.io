/**
 * https://raghunathchava.com
 * AI Readiness Section Component
 *
 * Showcases AI capabilities and future-proofing messaging.
 *
 * Requirements: 2.1, 8.1
 */
import { Brain, Zap, TrendingUp } from "lucide-react";
import { CTASegment } from "./CTASegment";
import type { CTAConfig } from "@/types/components";
import { aiCapabilities, futureProofReasons } from "@/data/aiReadiness";

interface AIReadinessSectionProps {
  variant?: "home" | "dedicated";
  showCTAs?: boolean;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain,
  Zap,
  TrendingUp,
};

export function AIReadinessSection({
  variant: _variant = "home",
  showCTAs = true,
}: AIReadinessSectionProps) {
  const primaryCTA: CTAConfig = {
    label: "Learn About AI Agents",
    href: "/product/ai-ready",
    variant: "primary",
    trackingId: "cta_ai_readiness_learn",
    icpTarget: "cto",
  };

  const secondaryCTA: CTAConfig = {
    label: "View Roadmap",
    href: "/resources/roadmap",
    variant: "secondary",
    trackingId: "cta_ai_readiness_roadmap",
    icpTarget: "vp-engineering",
  };

  return (
    <section
      id="ai-ready"
      className="py-24 bg-gradient-to-br from-deepBlue/5 via-transparent to-teal/5"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-deepBlue/10 border border-deepBlue/20 rounded-full text-sm font-medium mb-6">
            <Brain className="w-4 h-4" />
            Future-Proof Your Business
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-deepBlue to-teal bg-clip-text text-transparent">
            Built for the AI-Driven Future
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Raghunath Chava is designed for AI agents to operate autonomously. Automate
            business operations, reduce manual work, and prepare for the
            autonomous future.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {aiCapabilities.map((capability) => {
            const Icon = iconMap[capability.icon] || Brain;
            return (
              <div
                key={capability.title}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="p-2 bg-deepBlue/10 rounded-lg">
                    <Icon className="w-6 h-6 text-deepBlue" />
                  </div>
                  <h3 className="text-xl font-bold">{capability.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  {capability.description}
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-green-600">
                    {capability.outcome}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-card border border-border rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">
            Why Raghunath Chava is Future-Proof
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {futureProofReasons.map((reason, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-2">{reason.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {showCTAs && (
          <div className="mt-12 text-center">
            <CTASegment
              icp={["cto", "ceo", "vp-engineering"]}
              primaryCTA={primaryCTA}
              secondaryCTA={secondaryCTA}
              layout="horizontal"
            />
          </div>
        )}
      </div>
    </section>
  );
}

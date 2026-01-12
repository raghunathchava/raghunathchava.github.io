/**
 * https://raghunathchava.com
 * Investor Narrative Section Component
 *
 * Displays market opportunity, competitive moat, and expansion paths.
 *
 * Requirements: 2.1, 3.1
 */
import { TrendingUp, Shield, Rocket, ArrowRight } from "lucide-react";
import { CTASegment } from "./CTASegment";
import type { CTAConfig } from "@/types/components";
import {
  marketSize,
  whyNow,
  competitiveMoat,
  adoptionWedge,
  expansionPaths,
} from "@/data/investorNarrative";

interface InvestorNarrativeSectionProps {
  variant?: "home" | "dedicated";
  showMetrics?: boolean;
}

export function InvestorNarrativeSection({
  variant = "home",
  showMetrics = true,
}: InvestorNarrativeSectionProps) {
  const primaryCTA: CTAConfig = {
    label: "View Investment Deck",
    href: "/resources/investor-deck",
    variant: "primary",
    trackingId: "cta_investor_deck",
    icpTarget: "ceo",
  };

  const secondaryCTA: CTAConfig = {
    label: "Contact Investors",
    href: "/company/contact?type=investor",
    variant: "secondary",
    trackingId: "cta_investor_contact",
    icpTarget: "ceo",
  };

  return (
    <section
      id="investor-narrative"
      className="py-24 bg-background/20 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-deepBlue to-teal bg-clip-text text-transparent">
            The AI-Ready ERP Platform Capturing the $50B Market
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Open-source adoption wedge, modular expansion, AI agent ecosystem.
            Built for the autonomous future.
          </p>
        </div>

        {showMetrics && (
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {marketSize.map((market, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center"
              >
                <div className="text-3xl font-extrabold bg-gradient-to-r from-deepBlue to-teal bg-clip-text text-transparent mb-2">
                  {market.size}
                </div>
                <div className="text-sm font-semibold text-foreground mb-1">
                  {market.market}
                </div>
                <div className="text-xs text-muted-foreground">
                  {market.growth}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="space-y-12">
          {/* Why Now */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Rocket className="w-6 h-6 text-deepBlue" />
              Why Now
            </h3>
            <ul className="space-y-2">
              {whyNow.map((reason, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="text-deepBlue font-bold mt-1">•</span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Competitive Moat */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Shield className="w-6 h-6 text-deepBlue" />
              Competitive Moat
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {competitiveMoat.map((moat, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-semibold text-foreground">
                    {moat.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {moat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Adoption Wedge */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-deepBlue" />
              Adoption Wedge
            </h3>
            <p className="text-muted-foreground mb-4">
              {adoptionWedge.description}
            </p>
            <ul className="space-y-2">
              {adoptionWedge.benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <ArrowRight className="w-4 h-4 mt-1 text-deepBlue flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Expansion Paths */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Expansion Paths</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {expansionPaths.map((path, index) => (
                <div
                  key={index}
                  className="border border-border rounded-lg p-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-semibold text-muted-foreground">
                      {path.from}
                    </span>
                    <ArrowRight className="w-4 h-4 text-deepBlue" />
                    <span className="text-sm font-semibold text-foreground">
                      {path.to}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {path.description}
                  </p>
                  {path.revenue && (
                    <p className="text-xs font-semibold text-deepBlue">
                      {path.revenue}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {variant === "dedicated" && (
          <div className="mt-12 text-center">
            <CTASegment
              icp={["ceo", "cfo"]}
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

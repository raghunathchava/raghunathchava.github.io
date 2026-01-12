/**
 * https://raghunathchava.com
 * Pricing Component with Tiers and Billing Toggle
 *
 * Requirements: 2.5
 */
import { useState, useId } from "react";
import { Check } from "lucide-react";
import type { PricingPlan, BillingCycle, PriceValue } from "@/types/components";
import { useAnalytics } from "@/hooks/useAnalytics";

const plans: PricingPlan[] = [
  {
    name: "Free",
    description: "Self-hosted open-source",
    price: {
      monthly: "free",
      annual: "free",
    },
    features: [
      "Complete ERP suite (Foundation + Core modules)",
      "Unlimited users",
      "Community support",
      "Full source code access",
      "Self-hosted deployment",
      "All 22 Foundation modules",
      "All 21 Core modules",
    ],
    cta: {
      label: "Get Started Free",
      href: "https://subscribe.saraise.com",
      variant: "primary",
      trackingId: "cta_pricing_free",
      icpTarget: "developer",
      external: true,
    },
    highlighted: false,
    targetICP: ["developer", "cto"],
  },
  {
    name: "Professional",
    description: "For growing businesses with premium support",
    price: {
      monthly: 299,
      annual: 2990, // ~17% discount
    },
    features: [
      "Everything in Free",
      "Priority email support",
      "99.9% uptime SLA",
      "Automated backups",
      "Industry modules (up to 5)",
      "Advanced reporting",
      "API rate limits: 10K requests/day",
    ],
    cta: {
      label: "Start Free Trial",
      href: "https://subscribe.saraise.com?plan=professional",
      variant: "primary",
      trackingId: "cta_pricing_professional",
      icpTarget: "vp-engineering",
      external: true,
    },
    highlighted: true,
    badge: "Most Popular",
    targetICP: ["vp-engineering", "coo"],
  },
  {
    name: "Enterprise",
    description: "For large organizations with custom requirements",
    price: {
      monthly: "custom",
      annual: "custom",
    },
    features: [
      "Everything in Professional",
      "Dedicated support engineer",
      "99.99% uptime SLA",
      "15-minute response time",
      "Unlimited industry modules",
      "Custom integrations",
      "SLA-backed performance guarantees",
      "On-premise deployment option",
      "SOC 2 Type II compliance",
      "Custom training and onboarding",
    ],
    cta: {
      label: "Contact Sales",
      href: "/contact?type=enterprise",
      variant: "primary",
      trackingId: "cta_pricing_enterprise",
      icpTarget: "cfo",
    },
    highlighted: false,
    targetICP: ["cfo", "ceo", "ciso"],
  },
];

const moduleAddons = [
  {
    name: "Manufacturing Module",
    category: "industry" as const,
    industry: "manufacturing",
    price: 99,
    description: "Production planning, shop floor control, quality management",
  },
  {
    name: "Healthcare Module",
    category: "industry" as const,
    industry: "healthcare",
    price: 149,
    description: "Patient management, clinical workflows, HIPAA compliance",
  },
  {
    name: "Retail & POS Module",
    category: "industry" as const,
    industry: "retail",
    price: 79,
    description: "Point of sale, inventory management, merchandising",
  },
];

function formatPrice(price: PriceValue, cycle: BillingCycle): string {
  if (price === "free") return "Free";
  if (price === "custom") return "Custom";
  if (cycle === "annual" && typeof price === "number") {
    return `$${price.toLocaleString()}/year`;
  }
  return `$${price.toLocaleString()}/month`;
}

function getEffectivePrice(plan: PricingPlan, cycle: BillingCycle): PriceValue {
  return cycle === "annual" ? plan.price.annual : plan.price.monthly;
}

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");
  const { trackEvent } = useAnalytics();
  const pricingSectionId = useId();

  const handleBillingToggle = (cycle: BillingCycle) => {
    setBillingCycle(cycle);
    trackEvent({
      name: "pricing_billing_toggle",
      category: "engagement",
      properties: { cycle },
    });
  };

  const handleCTAClick = (plan: PricingPlan) => {
    trackEvent({
      name: "pricing_cta_click",
      category: "conversion",
      properties: {
        plan: plan.name,
        billing_cycle: billingCycle,
        tracking_id: plan.cta.trackingId,
      },
    });
  };

  return (
    <section
      id={pricingSectionId}
      className="py-24 bg-background/20 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-deepBlue to-teal bg-clip-text text-transparent">
            Simple & Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Choose what works for your business. Start free, scale as you grow.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span
              className={`text-sm font-medium ${
                billingCycle === "monthly"
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              Monthly
            </span>
            <button
              type="button"
              onClick={() =>
                handleBillingToggle(
                  billingCycle === "monthly" ? "annual" : "monthly",
                )
              }
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-deepBlue focus:ring-offset-2"
              role="switch"
              aria-checked={billingCycle === "annual"}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === "annual" ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`text-sm font-medium ${
                billingCycle === "annual"
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              Annual
            </span>
            {billingCycle === "annual" && (
              <span className="ml-2 px-2 py-1 text-xs font-semibold bg-green/20 text-green rounded-full">
                Save 17%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan) => {
            const price = getEffectivePrice(plan, billingCycle);
            const formattedPrice = formatPrice(price, billingCycle);

            return (
              <div
                key={plan.name}
                className={`relative bg-card border-2 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  plan.highlighted
                    ? "border-deepBlue bg-gradient-to-br from-deepBlue/5 to-teal/5 scale-105"
                    : "border-border"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-deepBlue to-teal text-white rounded-full text-xs font-bold uppercase tracking-wider">
                    {plan.badge}
                  </div>
                )}

                <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6 text-sm">
                  {plan.description}
                </p>

                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-extrabold bg-gradient-to-r from-deepBlue to-teal bg-clip-text text-transparent">
                    {formattedPrice}
                  </span>
                </div>

                {billingCycle === "annual" && typeof price === "number" && (
                  <p className="text-sm text-muted-foreground mb-6">
                    ${Math.round(price / 12).toLocaleString()}/month billed
                    annually
                  </p>
                )}

                <ul className="space-y-4 mb-8 min-h-[300px]">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.cta.href}
                  target={plan.cta.external ? "_blank" : undefined}
                  rel={plan.cta.external ? "noopener noreferrer" : undefined}
                  onClick={() => handleCTAClick(plan)}
                  className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-deepBlue to-teal text-white hover:shadow-lg hover:-translate-y-0.5"
                      : "bg-secondary border border-border hover:bg-secondary/80"
                  }`}
                >
                  {plan.cta.label}
                </a>
              </div>
            );
          })}
        </div>

        {/* Module Add-ons Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Industry Module Add-ons</h3>
            <p className="text-muted-foreground">
              Add industry-specific modules to your plan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {moduleAddons.map((addon) => (
              <div
                key={addon.name}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-1">
                    {addon.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {addon.description}
                  </p>
                </div>
                <div className="text-2xl font-bold text-deepBlue mb-4">
                  ${addon.price}/month
                </div>
                <button
                  type="button"
                  className="w-full px-4 py-2 text-sm font-medium border border-border rounded-lg hover:bg-secondary transition-colors"
                >
                  Add to Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

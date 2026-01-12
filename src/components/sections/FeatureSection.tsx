/**
 * https://raghunathchava.com
 * FeatureSection Component with Feature → Capability → Outcome hierarchy
 *
 * Requirements: 2.3
 */
import { ArrowRight, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Feature, FeatureSectionLayout } from "@/types/components";

interface FeatureSectionProps {
  /** Section title */
  title?: string;
  /** Section description */
  description?: string;
  /** Features to display */
  features: Feature[];
  /** Layout variant */
  layout: FeatureSectionLayout;
  /** Optional background variant */
  background?: "default" | "muted" | "gradient";
  /** Optional section ID for anchoring */
  id?: string;
}

export function FeatureSection({
  title,
  description,
  features,
  layout,
  background = "default",
  id,
}: FeatureSectionProps) {
  const backgroundClasses = {
    default: "bg-background/20 backdrop-blur-sm",
    muted: "bg-secondary/20 backdrop-blur-sm",
    gradient: "bg-gradient-to-br from-deepBlue/5 via-transparent to-teal/5",
  };

  const renderFeature = (feature: Feature, index: number) => {
    // For now, use CheckCircle as default icon since dynamic imports are complex
    const FeatureIcon = CheckCircle;

    switch (layout) {
      case "grid":
        return (
          <div
            key={index}
            className="group p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 p-2 bg-deepBlue/10 rounded-lg group-hover:bg-deepBlue/20 transition-colors">
                <FeatureIcon className="w-6 h-6 text-deepBlue" />
              </div>
              <div className="flex-1 space-y-3">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-deepBlue transition-colors">
                  {feature.title}
                </h3>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    Capability
                  </p>
                  <p className="text-muted-foreground">{feature.capability}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    Business Outcome
                  </p>
                  <p className="text-foreground font-medium">
                    {feature.outcome}
                  </p>
                </div>
                {feature.link && (
                  <a
                    href={feature.link}
                    className="inline-flex items-center gap-2 text-sm text-deepBlue hover:text-teal transition-colors group/link"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            </div>
          </div>
        );

      case "alternating":
        return (
          <div
            key={index}
            className={cn(
              "grid lg:grid-cols-2 gap-12 items-center",
              index % 2 === 1 && "lg:grid-flow-col-dense",
            )}
          >
            <div
              className={cn("space-y-6", index % 2 === 1 && "lg:col-start-2")}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-deepBlue/10 rounded-lg">
                  <FeatureIcon className="w-6 h-6 text-deepBlue" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  {feature.title}
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                    What it enables
                  </p>
                  <p className="text-lg text-muted-foreground">
                    {feature.capability}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                    Business impact
                  </p>
                  <p className="text-xl font-semibold text-foreground">
                    {feature.outcome}
                  </p>
                </div>
              </div>

              {feature.link && (
                <a
                  href={feature.link}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-deepBlue text-white rounded-lg font-semibold hover:bg-deepBlue/90 transition-colors group"
                >
                  Explore feature
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              )}
            </div>

            {feature.image && (
              <div
                className={cn("relative", index % 2 === 1 && "lg:col-start-1")}
              >
                <div className="aspect-video bg-secondary/50 rounded-lg border border-border overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal/20 rounded-full blur-2xl -z-10" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-deepBlue/20 rounded-full blur-2xl -z-10" />
              </div>
            )}
          </div>
        );

      case "cards":
        return (
          <div
            key={index}
            className="group relative bg-card border border-border rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-deepBlue/5 to-teal/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative space-y-6">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-deepBlue/10 rounded-xl group-hover:bg-deepBlue/20 transition-colors">
                  <FeatureIcon className="w-8 h-8 text-deepBlue" />
                </div>
                {feature.link && (
                  <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-deepBlue transition-colors" />
                )}
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-deepBlue transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.capability}
                </p>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Outcome
                </p>
                <p className="text-lg font-semibold text-foreground">
                  {feature.outcome}
                </p>
              </div>
            </div>
          </div>
        );

      case "list":
        return (
          <div
            key={index}
            className="flex items-start gap-6 p-6 bg-card border border-border rounded-lg hover:bg-secondary/20 transition-colors"
          >
            <div className="flex-shrink-0 p-2 bg-deepBlue/10 rounded-lg">
              <FeatureIcon className="w-6 h-6 text-deepBlue" />
            </div>
            <div className="flex-1 space-y-3">
              <h3 className="text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">
                    Capability
                  </p>
                  <p className="text-muted-foreground">{feature.capability}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">
                    Outcome
                  </p>
                  <p className="text-foreground font-medium">
                    {feature.outcome}
                  </p>
                </div>
              </div>
              {feature.link && (
                <a
                  href={feature.link}
                  className="inline-flex items-center gap-2 text-sm text-deepBlue hover:text-teal transition-colors group"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id={id} className={cn("py-24", backgroundClasses[background])}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {(title || description) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-deepBlue to-teal bg-clip-text text-transparent">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Features */}
        <div
          className={cn(
            "space-y-12",
            layout === "grid" &&
              "grid md:grid-cols-2 lg:grid-cols-3 gap-8 space-y-0",
            layout === "cards" &&
              "grid md:grid-cols-2 lg:grid-cols-3 gap-8 space-y-0",
            layout === "list" && "space-y-6",
          )}
        >
          {features.map((feature, index) => renderFeature(feature, index))}
        </div>
      </div>
    </section>
  );
}

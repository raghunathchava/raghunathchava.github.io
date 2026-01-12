/**
 * https://raghunathchava.com
 * Social Proof Component for Raghunath Chava Marketing Website
 *
 * Displays customer logos, testimonials, statistics, and case studies.
 * Supports multiple variants for different use cases.
 *
 * Requirements: 4.1, 6.1
 */
import { Quote } from "lucide-react";
import { TestimonialCarousel } from "./TestimonialCarousel";
import { CaseStudyCard } from "./CaseStudyCard";
import { ManufacturingLogo } from "./logos/ManufacturingLogo";
import { HealthcareLogo } from "./logos/HealthcareLogo";
import type { SocialProofProps } from "@/types/components";

export function SocialProof({
  variant,
  logos,
  testimonials,
  stats,
  caseStudies,
  title,
  description,
}: SocialProofProps) {
  const renderLogos = () => {
    if (!logos || logos.length === 0) return null;

    const getLogoSVG = (logoName: string) => {
      if (logoName.toLowerCase().includes("manufacturing")) {
        return <ManufacturingLogo className="w-16 h-16" />;
      }
      if (logoName.toLowerCase().includes("healthcare")) {
        return <HealthcareLogo className="w-16 h-16" />;
      }
      return null;
    };

    return (
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity">
        {logos.map((logo) => {
          const logoSVG = getLogoSVG(logo.name);
          return (
            <a
              key={logo.name}
              href={logo.caseStudyLink || "#"}
              className="flex items-center justify-center"
              aria-label={`${logo.name} logo`}
            >
              {logoSVG || (
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all"
                />
              )}
            </a>
          );
        })}
      </div>
    );
  };

  const renderTestimonials = () => {
    if (!testimonials || testimonials.length === 0) return null;

    if (testimonials.length === 1) {
      const testimonial = testimonials[0];
      if (!testimonial) return null;
      return (
        <div className="bg-card border border-border rounded-2xl p-8">
          <Quote className="w-8 h-8 text-deepBlue mb-4" />
          <p className="text-lg text-foreground mb-6 italic">
            "{testimonial.quote}"
          </p>
          <div className="flex items-center gap-4">
            {testimonial.avatar && (
              <img
                src={testimonial.avatar}
                alt={testimonial.author || "Customer"}
                className="w-12 h-12 rounded-full"
              />
            )}
            <div>
              {testimonial.author && (
                <p className="font-semibold text-foreground">
                  {testimonial.author}
                </p>
              )}
              <p className="text-sm text-muted-foreground">
                {testimonial.title}
                {testimonial.industry &&
                  `, ${testimonial.industry.charAt(0).toUpperCase() + testimonial.industry.slice(1)} Industry`}
              </p>
            </div>
          </div>
        </div>
      );
    }

    // Use TestimonialCarousel for multiple testimonials
    return <TestimonialCarousel testimonials={testimonials} />;
  };

  const renderStats = () => {
    if (!stats || stats.length === 0) return null;

    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center p-6 bg-card border border-border rounded-xl"
          >
            <div className="text-4xl font-extrabold bg-gradient-to-r from-deepBlue to-teal bg-clip-text text-transparent mb-2">
              {stat.value}
            </div>
            <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              {stat.label}
            </div>
            {stat.description && (
              <div className="text-xs text-muted-foreground mt-2">
                {stat.description}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderCaseStudies = () => {
    if (!caseStudies || caseStudies.length === 0) return null;

    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {caseStudies.map((caseStudy, index) => (
          <CaseStudyCard key={index} caseStudy={caseStudy} variant="compact" />
        ))}
      </div>
    );
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {(title || description) && (
          <div className="text-center mb-12">
            {title && <h2 className="text-3xl font-bold mb-4">{title}</h2>}
            {description && (
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}

        {variant === "logos" && renderLogos()}
        {variant === "testimonials" && renderTestimonials()}
        {variant === "stats" && renderStats()}
        {variant === "case-studies" && renderCaseStudies()}
        {variant === "combined" && (
          <div className="space-y-16">
            {/* Commented out: Trusted by Industry Leaders section
            {logos && logos.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-6 text-center">
                  Trusted by Industry Leaders
                </h3>
                {renderLogos()}
              </div>
            )}
            */}
            {stats && stats.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-6 text-center">
                  By the Numbers
                </h3>
                {renderStats()}
              </div>
            )}
            {testimonials && testimonials.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-6 text-center">
                  What Our Customers Say
                </h3>
                {renderTestimonials()}
              </div>
            )}
            {caseStudies && caseStudies.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-6 text-center">
                  Success Stories
                </h3>
                {renderCaseStudies()}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

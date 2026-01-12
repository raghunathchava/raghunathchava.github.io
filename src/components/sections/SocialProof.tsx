/**
 * https://raghunathchava.com
 * SocialProof Component with multiple variants
 *
 * Requirements: 6.3
 */
import { Star, Quote, TrendingUp, Users, Building, Award } from "lucide-react";
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

    return (
      <div className="space-y-8">
        {title && (
          <div className="text-center">
            <h3 className="text-lg font-semibold text-muted-foreground mb-2">
              {title}
            </h3>
            {description && (
              <p className="text-muted-foreground">{description}</p>
            )}
          </div>
        )}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              {logo.caseStudyLink ? (
                <a
                  href={logo.caseStudyLink}
                  className="block w-full h-12 flex items-center justify-center"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-w-full max-h-full object-contain"
                  />
                </a>
              ) : (
                <div className="w-full h-12 flex items-center justify-center">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderTestimonials = () => {
    if (!testimonials || testimonials.length === 0) return null;

    return (
      <div className="space-y-12">
        {title && (
          <div className="text-center">
            <h3 className="text-3xl font-bold text-foreground mb-4">{title}</h3>
            {description && (
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <Quote className="w-8 h-8 text-deepBlue flex-shrink-0 mt-1" />
                <div className="space-y-4">
                  <blockquote className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    {testimonial.avatar && (
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    )}
                    <div>
                      {testimonial.author && (
                        <div className="font-semibold text-foreground">
                          {testimonial.author}
                        </div>
                      )}
                      <div className="text-sm text-muted-foreground">
                        {testimonial.title}
                        {testimonial.industry &&
                          `, ${testimonial.industry.charAt(0).toUpperCase() + testimonial.industry.slice(1)} Industry`}
                      </div>
                    </div>
                  </div>
                  {testimonial.logo && (
                    <div className="pt-2 border-t border-border">
                      <img
                        src={testimonial.logo}
                        alt={testimonial.company}
                        className="h-6 object-contain grayscale opacity-60"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderStats = () => {
    if (!stats || stats.length === 0) return null;

    return (
      <div className="space-y-12">
        {title && (
          <div className="text-center">
            <h3 className="text-3xl font-bold text-foreground mb-4">{title}</h3>
            {description && (
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const getStatIcon = () => {
              if (stat.icon) {
                switch (stat.icon) {
                  case "Users":
                    return Users;
                  case "Building":
                    return Building;
                  case "TrendingUp":
                    return TrendingUp;
                  case "Award":
                    return Award;
                  default:
                    return TrendingUp;
                }
              }
              return TrendingUp;
            };

            const StatIcon = getStatIcon();

            return (
              <div
                key={index}
                className="text-center p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-deepBlue/10 rounded-full">
                    <StatIcon className="w-6 h-6 text-deepBlue" />
                  </div>
                </div>
                <div className="text-4xl font-extrabold text-foreground mb-2 bg-gradient-to-r from-deepBlue to-teal bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                {stat.description && (
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderCaseStudies = () => {
    if (!caseStudies || caseStudies.length === 0) return null;

    return (
      <div className="space-y-12">
        {title && (
          <div className="text-center">
            <h3 className="text-3xl font-bold text-foreground mb-4">{title}</h3>
            {description && (
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {caseStudy.image && (
                <div className="aspect-video bg-secondary/50 overflow-hidden">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6 space-y-4">
                <div>
                  <div className="text-sm font-medium text-deepBlue uppercase tracking-wider mb-2">
                    {caseStudy.industry}
                  </div>
                  <h4 className="text-xl font-bold text-foreground group-hover:text-deepBlue transition-colors">
                    {caseStudy.company}
                  </h4>
                  <h5 className="text-lg font-semibold text-muted-foreground">
                    {caseStudy.title}
                  </h5>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {caseStudy.summary}
                </p>

                {caseStudy.results && caseStudy.results.length > 0 && (
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                    {caseStudy.results
                      .slice(0, 2)
                      .map((result, resultIndex) => (
                        <div key={resultIndex} className="text-center">
                          <div className="text-2xl font-bold text-deepBlue">
                            {result.value}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {result.label}
                          </div>
                        </div>
                      ))}
                  </div>
                )}

                <a
                  href={caseStudy.link}
                  className="inline-flex items-center gap-2 text-deepBlue hover:text-teal transition-colors font-medium"
                >
                  Read full case study
                  <Star className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderCombined = () => {
    return (
      <div className="space-y-16">
        {/* Stats Section */}
        {stats && stats.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              Trusted by thousands
            </h3>
            {renderStats()}
          </div>
        )}

        {/* Logos Section */}
        {logos && logos.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-center text-muted-foreground mb-8">
              Powering businesses worldwide
            </h3>
            {renderLogos()}
          </div>
        )}

        {/* Featured Testimonial */}
        {testimonials && testimonials.length > 0 && testimonials[0] && (
          <div className="bg-secondary/20 rounded-2xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Quote className="w-12 h-12 text-deepBlue mx-auto" />
              <blockquote className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed">
                "{testimonials[0].quote}"
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                {testimonials[0].avatar && (
                  <img
                    src={testimonials[0].avatar}
                    alt={testimonials[0].author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}
                <div className="text-left">
                  {testimonials[0].author && (
                    <div className="font-semibold text-foreground">
                      {testimonials[0].author}
                    </div>
                  )}
                  <div className="text-muted-foreground">
                    {testimonials[0].title}
                    {testimonials[0].industry &&
                      `, ${testimonials[0].industry.charAt(0).toUpperCase() + testimonials[0].industry.slice(1)} Industry`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {variant === "logos" && renderLogos()}
        {variant === "testimonials" && renderTestimonials()}
        {variant === "stats" && renderStats()}
        {variant === "case-studies" && renderCaseStudies()}
        {variant === "combined" && renderCombined()}
      </div>
    </section>
  );
}

/**
 * https://raghunathchava.com
 */
import { DollarSign, Settings, Zap, Shield, Rocket, Globe } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Massive Cost Savings",
    description:
      "Self-hosting is free. No per-user fees, no mandatory support contracts.",
  },
  {
    icon: Settings,
    title: "Full Control & Customization",
    description:
      "Modify source code, integrate with existing systems, and deploy anywhere you want.",
  },
  {
    icon: Zap,
    title: "Modern Technology Stack",
    description:
      "Built with Django 5.0.6, Django REST Framework 3.15.1, React 18, and PostgreSQL 17. No legacy code, no vendor lock-in.",
  },
  {
    icon: Shield,
    title: "No Vendor Lock-in",
    description:
      "Own your data forever. Export anytime, switch providers, or self-host permanently.",
  },
  {
    icon: Rocket,
    title: "Deploy Anywhere",
    description:
      "Cloud, on-premise, hybrid, or edge. Docker containers make deployment simple.",
  },
  {
    icon: Globe,
    title: "Community Driven",
    description:
      "Early community forming — join us as a founding contributor and shape the future.",
  },
];

export function WhyOpenSource() {
  return (
    <section
      id="why-opensource"
      className="py-24 bg-background/20 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-deepBlue to-teal bg-clip-text text-transparent">
            Why Open-Source ERP?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The modern approach to enterprise software
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="bg-card border border-border rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }} // Dynamic delay - must use inline style
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold/10 to-teal/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-gold" />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

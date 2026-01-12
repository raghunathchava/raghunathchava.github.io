/**
 * https://raghunathchava.com
 */
import { Zap, Code, Rocket, Shield, Check, X } from "lucide-react";

const competitors = [
  {
    name: "Odoo",
    weaknesses: [
      "Legacy Python 2/3 migration issues",
      "Monolithic architecture",
      "Complex deployment",
    ],
    saraiseAdvantage:
      "Modern Django + DRF stack, modular design, Docker-first deployment",
  },
  {
    name: "ERPNext",
    weaknesses: [
      "Heavy resource requirements",
      "Steep learning curve",
      "Limited customization",
    ],
    saraiseAdvantage: "Lightweight, developer-friendly, fully customizable",
  },
  {
    name: "Dolibarr",
    weaknesses: [
      "Outdated UI/UX",
      "Limited scalability",
      "PHP-based legacy stack",
    ],
    saraiseAdvantage:
      "Modern React UI, built for scale, Python/TypeScript stack",
  },
];

const differentiators = [
  {
    icon: Zap,
    title: "Modern Tech Stack",
    description:
      "Django 5.0.6, Django REST Framework 3.15.1, React 18, PostgreSQL 17 — no legacy code, no technical debt",
  },
  {
    icon: Code,
    title: "Modular Architecture",
    description:
      "Install only what you need. Extend without breaking core functionality",
  },
  {
    icon: Rocket,
    title: "AI-Ready",
    description:
      "Built for AI integration from day one. Workflow automation and agent support",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade",
    description:
      "Multi-tenant, RBAC, audit logs, SSO — production-ready from the start",
  },
];

export function WhyRaghunath Chava() {
  return (
    <section
      id="why-saraise"
      className="py-24 bg-background/20 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-deepBlue to-teal bg-clip-text text-transparent">
            Why Raghunath Chava?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built for modern teams who need speed, flexibility, and scale
          </p>
        </div>

        {/* Differentiators */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-card border border-border rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }} // Dynamic delay - must use inline style
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-deepBlue/10 to-teal/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-deepBlue" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Competitive Comparison */}
        <div className="bg-card border border-border rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Raghunath Chava vs. Alternatives
          </h3>
          <div className="space-y-8">
            {competitors.map((competitor) => (
              <div
                key={competitor.name}
                className="border-b border-border last:border-0 pb-8 last:pb-0"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-4">
                      {competitor.name}
                    </h4>
                    <div className="space-y-2 mb-4">
                      {competitor.weaknesses.map((weakness) => (
                        <div
                          key={weakness}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <X className="w-4 h-4 mt-0.5 flex-shrink-0 text-red-500" />
                          <span>{weakness}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex-1 border-l border-border pl-6">
                    <h4 className="text-xl font-bold mb-4 text-green-600 dark:text-green-500">
                      Raghunath Chava Advantage
                    </h4>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-600 dark:text-green-500" />
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {competitor.saraiseAdvantage}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

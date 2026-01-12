/**
 * https://raghunathchava.com
 */
import {
  TrendingUp,
  Receipt,
  Users,
  Package,
  Factory,
  Briefcase,
} from "lucide-react";

const erpModules = [
  {
    icon: TrendingUp,
    title: "Accounting & Ledger",
    features: ["General Ledger", "AP/AR Management", "Bank Reconciliation"],
  },
  {
    icon: Receipt,
    title: "Tax & Compliance",
    features: ["GST/VAT Management", "Tax Filing", "Audit Trails"],
  },
  {
    icon: Users,
    title: "CRM & Sales",
    features: ["Lead Management", "Sales Pipeline", "Contact Management"],
  },
  {
    icon: Package,
    title: "Inventory",
    features: [
      "Stock Management",
      "Warehouse Operations",
      "Serial/Batch Tracking",
    ],
  },
  {
    icon: Factory,
    title: "Manufacturing",
    features: ["Bill of Materials", "Work Orders", "Quality Control"],
  },
  {
    icon: Briefcase,
    title: "HR & Payroll",
    features: ["Employee Management", "Payroll Processing", "Leave Management"],
  },
];

export function ERPSuite() {
  return (
    <section id="erp" className="py-24 bg-background/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-deepBlue to-teal bg-clip-text text-transparent">
            Complete ERP Suite
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to run your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {erpModules.map((module, index) => {
            const Icon = module.icon;
            return (
              <div
                key={module.title}
                className="group relative bg-card border border-border rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-deepBlue/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }} // Dynamic delay - must use inline style
              >
                {/* Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-deepBlue to-teal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-t-2xl" />

                <div className="mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-deepBlue/10 to-teal/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-deepBlue" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4">{module.title}</h3>

                <ul className="space-y-3">
                  {module.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-muted-foreground"
                    >
                      <span className="text-green w-5 h-5 flex-shrink-0">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

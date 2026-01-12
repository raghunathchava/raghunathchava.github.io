/**
 * https://raghunathchava.com
 * Info Card Component
 *
 * Reusable card component for consistent page layouts
 */
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface InfoCardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  cta?: {
    label: string;
    href: string;
    external?: boolean;
  };
  className?: string;
}

export function InfoCard({
  icon: Icon,
  title,
  description,
  cta,
  className,
}: InfoCardProps) {
  const Component = cta?.external ? "a" : "a";
  const props = cta?.external
    ? { href: cta.href, target: "_blank", rel: "noopener noreferrer" }
    : { href: cta?.href || "#" };

  return (
    <div
      className={cn(
        "bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1",
        cta && "cursor-pointer",
        className,
      )}
    >
      {Icon && (
        <div className="mb-4 flex justify-center">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-deepBlue/10 to-teal/10 flex items-center justify-center">
            <Icon className="w-8 h-8 text-deepBlue" />
          </div>
        </div>
      )}
      <h3 className="text-xl font-bold mb-3 text-center">{title}</h3>
      <p className="text-muted-foreground leading-relaxed text-sm text-center mb-4">
        {description}
      </p>
      {cta && (
        <div className="text-center">
          <Component
            {...props}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-deepBlue hover:text-teal transition-colors"
          >
            {cta.label}
          </Component>
        </div>
      )}
    </div>
  );
}

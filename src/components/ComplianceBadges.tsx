/**
 * https://raghunathchava.com
 * Compliance Badges Component
 *
 * Displays compliance certifications with icons and links.
 *
 * Requirements: 3.1
 */
import { Shield, CheckCircle, Lock, FileCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export interface ComplianceCert {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  link?: string;
  status?: "certified" | "aligned" | "ready";
}

const certifications: ComplianceCert[] = [
  {
    name: "SOC 2 Type II",
    icon: Shield,
    description:
      "Security controls aligned with SOC 2 Type II compliance framework",
    link: "/enterprise/compliance#soc2",
    status: "certified",
  },
  {
    name: "GDPR",
    icon: Lock,
    description: "General Data Protection Regulation compliant",
    link: "/enterprise/compliance#gdpr",
    status: "certified",
  },
  {
    name: "HIPAA",
    icon: FileCheck,
    description: "Health Insurance Portability and Accountability Act ready",
    link: "/enterprise/compliance#hipaa",
    status: "ready",
  },
  {
    name: "ISO 27001",
    icon: CheckCircle,
    description: "Information security management aligned with ISO 27001",
    link: "/enterprise/compliance#iso27001",
    status: "aligned",
  },
];

interface ComplianceBadgesProps {
  certifications?: ComplianceCert[];
  layout?: "grid" | "carousel";
  className?: string;
}

export function ComplianceBadges({
  certifications: customCerts,
  layout = "grid",
  className,
}: ComplianceBadgesProps) {
  const certs = customCerts || certifications;

  const statusColors = {
    certified: "bg-green-500/20 text-green-600 border-green-500/30",
    aligned: "bg-blue-500/20 text-blue-600 border-blue-500/30",
    ready: "bg-yellow-500/20 text-yellow-600 border-yellow-500/30",
  };

  const renderCert = (cert: ComplianceCert) => {
    const Icon = cert.icon;

    if (cert.link) {
      return (
        <Link
          key={cert.name}
          to={cert.link}
          className={cn(
            "bg-card border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer",
            cert.status && statusColors[cert.status],
          )}
        >
          <div className="flex items-start gap-4">
            <div className="p-2 bg-deepBlue/10 rounded-lg flex-shrink-0">
              <Icon className="w-6 h-6 text-deepBlue" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h4 className="font-bold text-foreground">{cert.name}</h4>
                {cert.status && (
                  <span
                    className={cn(
                      "px-2 py-0.5 rounded-full text-xs font-semibold border",
                      statusColors[cert.status],
                    )}
                  >
                    {cert.status === "certified"
                      ? "Certified"
                      : cert.status === "aligned"
                        ? "Aligned"
                        : "Ready"}
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                {cert.description}
              </p>
            </div>
          </div>
        </Link>
      );
    }

    return (
      <div
        key={cert.name}
        className={cn(
          "bg-card border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1",
          cert.status && statusColors[cert.status],
        )}
      >
        <div className="flex items-start gap-4">
          <div className="p-2 bg-deepBlue/10 rounded-lg flex-shrink-0">
            <Icon className="w-6 h-6 text-deepBlue" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h4 className="font-bold text-foreground">{cert.name}</h4>
              {cert.status && (
                <span
                  className={cn(
                    "px-2 py-0.5 rounded-full text-xs font-semibold border",
                    statusColors[cert.status],
                  )}
                >
                  {cert.status === "certified"
                    ? "Certified"
                    : cert.status === "aligned"
                      ? "Aligned"
                      : "Ready"}
                </span>
              )}
            </div>
            <p className="text-sm text-muted-foreground">{cert.description}</p>
          </div>
        </div>
      </div>
    );
  };

  if (layout === "carousel") {
    // Simple grid for now, can be enhanced with carousel library later
    return (
      <div
        className={cn("grid md:grid-cols-2 lg:grid-cols-4 gap-6", className)}
      >
        {certs.map(renderCert)}
      </div>
    );
  }

  return (
    <div className={cn("grid md:grid-cols-2 lg:grid-cols-4 gap-6", className)}>
      {certs.map(renderCert)}
    </div>
  );
}

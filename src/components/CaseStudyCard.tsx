/**
 * https://raghunathchava.com
 * Case Study Card Component
 *
 * Displays case study preview cards with results and links.
 *
 * Requirements: 3.1
 */
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/types/components";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  variant?: "compact" | "detailed";
}

export function CaseStudyCard({
  caseStudy,
  variant = "compact",
}: CaseStudyCardProps) {
  const isExternal = caseStudy.link.startsWith("http");

  if (variant === "detailed") {
    if (isExternal) {
      return (
        <a
          href={caseStudy.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 block"
        >
          {caseStudy.image && (
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
          )}
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-secondary rounded-md text-xs font-semibold uppercase">
              {caseStudy.industry}
            </span>
            <span className="text-sm text-muted-foreground">
              {caseStudy.company}
            </span>
          </div>
          <h3 className="text-2xl font-bold mb-3">{caseStudy.title}</h3>
          <p className="text-muted-foreground mb-6">{caseStudy.summary}</p>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {caseStudy.results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-extrabold text-deepBlue mb-1">
                  {result.value}
                </div>
                <div className="text-xs text-muted-foreground">
                  {result.label}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 text-deepBlue font-semibold">
            <span>Read Full Case Study</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </a>
      );
    }

    return (
      <Link
        to={caseStudy.link}
        className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 block"
      >
        {caseStudy.image && (
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            className="w-full h-48 object-cover rounded-lg mb-6"
          />
        )}
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 bg-secondary rounded-md text-xs font-semibold uppercase">
            {caseStudy.industry}
          </span>
          <span className="text-sm text-muted-foreground">
            {caseStudy.company}
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-3">{caseStudy.title}</h3>
        <p className="text-muted-foreground mb-6">{caseStudy.summary}</p>
        <div className="grid grid-cols-3 gap-4 mb-6">
          {caseStudy.results.map((result, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-extrabold text-deepBlue mb-1">
                {result.value}
              </div>
              <div className="text-xs text-muted-foreground">
                {result.label}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 text-deepBlue font-semibold">
          <span>Read Full Case Study</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </Link>
    );
  }

  // Compact variant
  if (isExternal) {
    return (
      <a
        href={caseStudy.link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 block"
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2 py-1 bg-secondary rounded-md text-xs font-semibold uppercase">
            {caseStudy.industry}
          </span>
          <span className="text-xs text-muted-foreground">
            {caseStudy.company}
          </span>
        </div>
        <h4 className="text-lg font-bold mb-2">{caseStudy.title}</h4>
        <p className="text-sm text-muted-foreground mb-4">
          {caseStudy.summary}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {caseStudy.results.map((result, index) => (
            <div
              key={index}
              className="px-3 py-1 bg-secondary rounded-md text-xs"
            >
              <span className="font-semibold">{result.value}</span>{" "}
              {result.label}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 text-sm text-deepBlue font-semibold">
          <span>Read More</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </a>
    );
  }

  return (
    <Link
      to={caseStudy.link}
      className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 block"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="px-2 py-1 bg-secondary rounded-md text-xs font-semibold uppercase">
          {caseStudy.industry}
        </span>
        <span className="text-xs text-muted-foreground">
          {caseStudy.company}
        </span>
      </div>
      <h4 className="text-lg font-bold mb-2">{caseStudy.title}</h4>
      <p className="text-sm text-muted-foreground mb-4">{caseStudy.summary}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {caseStudy.results.map((result, index) => (
          <div
            key={index}
            className="px-3 py-1 bg-secondary rounded-md text-xs"
          >
            <span className="font-semibold">{result.value}</span> {result.label}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 text-sm text-deepBlue font-semibold">
        <span>Read More</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </Link>
  );
}

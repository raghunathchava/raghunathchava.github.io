/**
 * https://raghunathchava.com
 * Personal Branding Hero Component
 */
import { Link } from "react-router-dom";
import { ArrowRight, Download, Mail, Linkedin, Github } from "lucide-react";
import { useAnalytics } from "@/hooks/useAnalytics";

interface HeroProps {
  variant?: "home" | "about" | "enterprise" | "product" | "solution";
}

export function Hero(_props: HeroProps = {}) {
  const { trackEvent } = useAnalytics();

  const handleCTAClick = (action: string) => {
    trackEvent({
      name: "hero_cta_click",
      category: "engagement",
      properties: { action },
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 p-8 sm:p-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
            <span>🔓</span>
            <span>
              Senior Director — Automation, AI, Architecture &amp; Innovation | Hitachi Digital Services
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Raghunath Chava
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-light">
            I turn GenAI and automation from pilots into operating capability.
          </p>

          {/* Description */}
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Engineering-led technology executive, 27 years, accountable for enterprise technology direction — architecture, standards, org capability, and P&amp;L. Control-plane architecture, evidence-backed execution, runtime governance, and unit economics that survive a CFO and an auditor in the same room.
            </p>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              I set the strategy <span className="text-foreground font-medium">and</span> ship the architecture — equally at home defining a multi-year technology agenda for a board and reviewing the pull request that implements it.
            </p>
          </div>

          {/* Key Highlights - executive impact */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-4">
            <div className="p-4 rounded-lg bg-card border border-border">
              <div className="text-2xl font-bold text-foreground">Governed</div>
              <div className="text-sm text-muted-foreground">
                Evidence on every execution, confidence-gated AI, audit-ready by design
              </div>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <div className="text-2xl font-bold text-foreground">Built</div>
              <div className="text-sm text-muted-foreground">
                An eleven-platform automation and AI estate in Python, TypeScript, and Rust
              </div>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <div className="text-2xl font-bold text-foreground">Proven</div>
              <div className="text-sm text-muted-foreground">
                ≥90% coverage and mutation score, strict typing, zero-bypass quality gates
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link
              to="/about"
              onClick={() => handleCTAClick("learn_more")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="/Profile.pdf"
              download="Raghunath-Chava-Resume.pdf"
              type="application/pdf"
              onClick={() => handleCTAClick("download_resume")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
            <a
              href="mailto:info@raghunathchava.com"
              onClick={() => handleCTAClick("contact")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
            >
              <Mail className="w-4 h-4" />
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 pt-8">
            <a
              href="https://www.linkedin.com/in/raghunathchava"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleCTAClick("linkedin")}
              className="p-3 rounded-full bg-card border border-border hover:bg-muted transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/raghunathchava"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleCTAClick("github")}
              className="p-3 rounded-full bg-card border border-border hover:bg-muted transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:info@raghunathchava.com"
              onClick={() => handleCTAClick("email")}
              className="p-3 rounded-full bg-card border border-border hover:bg-muted transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

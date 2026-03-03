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
              Chief of Innovation, Automation, Transformation, Architecture & AI Practice | Hitachi Digital Services
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
            Transforming enterprise IT into governed, AI-driven execution — strategy, architecture, and delivery.
          </p>

          {/* Description */}
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              I lead the design and delivery of enterprise AI automation platforms that turn manual operations into controlled, auditable execution systems. Accountable for architecture, governance, and measurable outcomes — from board-level risk posture to production-grade reliability.
            </p>
          </div>

          {/* Key Highlights - executive impact */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-4">
            <div className="p-4 rounded-lg bg-card border border-border">
              <div className="text-2xl font-bold text-foreground">Governed</div>
              <div className="text-sm text-muted-foreground">
                ISO-aligned, evidence-first, audit-ready
              </div>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <div className="text-2xl font-bold text-foreground">Scale</div>
              <div className="text-sm text-muted-foreground">
                34 AI agents, 75 workflows, 30+ integrations
              </div>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <div className="text-2xl font-bold text-foreground">Accountable</div>
              <div className="text-sm text-muted-foreground">
                Full ownership from strategy to production
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
              download
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

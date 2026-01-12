/**
 * https://raghunathchava.com
 * Personal Branding Hero Component
 */
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Mail, Linkedin, Github } from "lucide-react";
import { useAnalytics } from "@/hooks/useAnalytics";

interface HeroProps {
  variant?: "home" | "about";
}

export function Hero({ variant = "home" }: HeroProps = {}) {
  const { trackEvent } = useAnalytics();

  const handleCTAClick = (action: string) => {
    trackEvent("hero_cta_click", { action });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
            <span>🔓</span>
            <span>Sr Director – GenAI Platform Operations | Founder, BuildWorks.AI</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Raghunath Chava
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-light">
            Leading Production-Grade GenAI Platform Operations
          </p>

          {/* Description */}
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              I lead production-grade GenAI platform operations with full ownership of reliability, 
              LLMOps, Responsible AI enforcement, and financial governance.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground/80 leading-relaxed">
              With 27+ years across enterprise platforms, cloud, AIOps, FinOps, and regulated environments, 
              I specialize in converting GenAI from experimentation into stable, governable, and scalable 
              enterprise infrastructure.
            </p>
          </div>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-4">
            <div className="p-4 rounded-lg bg-card border border-border">
              <div className="text-2xl font-bold text-foreground">99.9%+</div>
              <div className="text-sm text-muted-foreground">Platform Uptime</div>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <div className="text-2xl font-bold text-foreground">27+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <div className="text-2xl font-bold text-foreground">2</div>
              <div className="text-sm text-muted-foreground">Open-Source Platforms</div>
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

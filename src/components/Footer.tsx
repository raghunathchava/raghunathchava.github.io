/**
 * https://raghunathchava.com
 * Personal Portfolio Footer
 */
import { Link } from "react-router-dom";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background/20 backdrop-blur-sm border-t border-border py-16 mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h4 className="text-2xl font-bold">Raghunath Chava</h4>
            <p className="text-sm text-muted-foreground max-w-sm">
              Sr Director – GenAI Platform Operations | LLMOps | Responsible AI | 
              Multi-Tenant AI Platforms | Founder, BuildWorks.AI
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.linkedin.com/in/raghunathchava"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/raghunathchava"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:raghunath.chava@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h5 className="font-bold mb-4">Navigation</h5>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/experience"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="font-bold mb-4">Contact</h5>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:raghunath.chava@gmail.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  raghunath.chava@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Hyderabad, Telangana, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; 2025 Raghunath Chava.{" "}
              <a href="https://raghunathchava.com" className="hover:underline">
                https://raghunathchava.com
              </a>
            </p>
            <p className="text-sm text-muted-foreground">
              Founder & Chief of AI at{" "}
              <a
                href="https://buildworks.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                BuildWorks.AI
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

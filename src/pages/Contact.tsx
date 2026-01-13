/**
 * https://raghunathchava.com
 * Contact Page
 */
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { SEO } from "../components/seo/SEO";
import { getPageSEO } from "../data/seo";
import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";

const seo = getPageSEO("/contact");

export function Contact() {
  return (
    <>
      <SEO {...seo} />
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Get In Touch
              </h1>
              <p className="text-xl text-muted-foreground">
                Interested in discussing GenAI platform operations, LLMOps, or Responsible AI? 
                Let's connect.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">Email</h3>
                      <a
                        href="mailto:info@raghunathchava.com"
                        className="text-primary hover:underline"
                      >
                        info@raghunathchava.com
                      </a>
                      <p className="text-sm text-muted-foreground mt-2">
                        For inquiries, collaborations, and speaking opportunities
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">Phone</h3>
                      <a
                        href="tel:+919666953366"
                        className="text-primary hover:underline"
                      >
                        +91 96669 53366
                      </a>
                      <p className="text-sm text-muted-foreground mt-2">
                        Available for calls and consultations
                      </p>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">Location</h3>
                      <p className="text-foreground">Hyderabad, Telangana, India</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Open to remote collaboration
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Linkedin className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">Connect</h3>
                      <div className="flex items-center gap-4">
                        <a
                          href="https://www.linkedin.com/in/raghunathchava"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          LinkedIn
                        </a>
                        <a
                          href="https://github.com/raghunathchava"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          GitHub
                        </a>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Connect on professional networks
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're interested in GenAI platform operations, LLMOps, Responsible AI, 
                or enterprise AI governance, I'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:info@raghunathchava.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Send Email
                </a>
                <a
                  href="https://www.linkedin.com/in/raghunathchava"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

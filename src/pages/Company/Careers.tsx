/**
 * https://raghunathchava.com
 * Company Careers Page
 *
 * Redirects to BuildWorks.AI careers page
 */
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { SEO } from "@/components/seo/SEO";
import { getPageSEO } from "@/data/seo";
import { ExternalLink, Briefcase } from "lucide-react";

const seo = getPageSEO("/company/careers");

export function CompanyCareers() {
  useEffect(() => {
    // Redirect to BuildWorks.AI careers page
    window.location.href = "https://buildworks.ai";
  }, []);

  return (
    <>
      <SEO {...seo} />
      <Navigation />
      <main className="min-h-screen bg-background/20 backdrop-blur-sm text-foreground flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-deepBlue/10 to-teal/10 flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-8 h-8 text-deepBlue" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-deepBlue to-teal bg-clip-text text-transparent">
              Careers at BuildWorks.AI
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Join our growing team and help build the future of enterprise AI.
            </p>
            <p className="text-muted-foreground mb-8">
              Redirecting to BuildWorks.AI careers page...
            </p>
            <a
              href="https://buildworks.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-deepBlue to-teal text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Visit BuildWorks.AI Careers
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

/**
 * https://raghunathchava.com
 * Resources Hub Page
 */
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/seo/SEO";
import { getPageSEO } from "@/data/seo";

const seo = getPageSEO("/resources");

export function ResourcesOverview() {
  return (
    <>
      <SEO {...seo} />
      <Navigation />
      <main className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Resources</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Documentation, guides, and resources to help you succeed
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <a
                href="https://docs.saraise.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 border border-border rounded-lg hover:shadow-lg transition-shadow"
              >
                <h2 className="text-2xl font-bold mb-2">Documentation</h2>
                <p className="text-muted-foreground">
                  Complete API reference, guides, and tutorials
                </p>
              </a>
              <a
                href="/resources/blog"
                className="p-6 border border-border rounded-lg hover:shadow-lg transition-shadow"
              >
                <h2 className="text-2xl font-bold mb-2">Blog</h2>
                <p className="text-muted-foreground">
                  Latest updates, insights, and best practices
                </p>
              </a>
              <a
                href="/resources/webinars"
                className="p-6 border border-border rounded-lg hover:shadow-lg transition-shadow"
              >
                <h2 className="text-2xl font-bold mb-2">Webinars</h2>
                <p className="text-muted-foreground">
                  Live sessions and recorded events
                </p>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

/**
 * https://raghunathchava.com
 * Resources Blog Page
 */
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/seo/SEO";
import { getPageSEO } from "@/data/seo";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const seo = getPageSEO("/resources/blog");

const blogPosts = [
  {
    title: "10 Benefits of Open Source ERP for Modern Businesses",
    slug: "open-source-erp-benefits",
    description:
      "Discover why open-source ERP solutions offer cost savings, flexibility, and innovation for modern businesses.",
    date: "2026-01-15",
    readTime: "8 min read",
    category: "Business",
  },
  {
    title: "Self-Hosted vs SaaS ERP: Which Deployment Model is Right for You?",
    slug: "self-hosted-vs-saas",
    description:
      "Compare self-hosted and SaaS ERP deployment models to determine the best fit for your organization.",
    date: "2026-01-10",
    readTime: "12 min read",
    category: "Technical",
  },
  {
    title: "AI Agents in ERP: The Future of Business Automation",
    slug: "ai-agents-in-erp",
    description:
      "Explore how AI agents are transforming ERP systems, automating business operations, and enabling autonomous workflows.",
    date: "2026-01-05",
    readTime: "10 min read",
    category: "AI & Automation",
  },
  {
    title: "ERP Security Best Practices for Enterprise Deployments",
    slug: "erp-security-best-practices",
    description:
      "Essential security practices for protecting your ERP system and sensitive business data in enterprise deployments.",
    date: "2025-12-28",
    readTime: "15 min read",
    category: "Security",
  },
  {
    title: "ROI Calculation: When Does ERP Pay for Itself?",
    slug: "roi-calculation",
    description:
      "Learn how to calculate ERP ROI, including direct cost savings and efficiency gains. Use our ROI calculator.",
    date: "2025-12-20",
    readTime: "9 min read",
    category: "Business",
  },
];

export function ResourcesBlog() {
  return (
    <>
      <SEO {...seo} />
      <Navigation />
      <main className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-deepBlue to-teal bg-clip-text text-transparent">
                Blog & Resources
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Latest insights, best practices, and guides to help you succeed
                with Raghunath Chava ERP
              </p>
            </div>

            <div className="space-y-8">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-deepBlue/10 text-deepBlue text-sm font-semibold rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-3">
                    <Link
                      to={`/resources/blog/${post.slug}`}
                      className="hover:text-deepBlue transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {post.description}
                  </p>
                  <Link
                    to={`/resources/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-deepBlue hover:text-teal font-semibold transition-colors"
                  >
                    Read article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-16 text-center bg-gradient-to-r from-deepBlue/10 to-teal/10 rounded-2xl p-12">
              <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter to receive the latest blog posts,
                product updates, and ERP insights.
              </p>
              <a
                href="/company/contact"
                className="inline-block px-8 py-3 bg-gradient-to-r from-deepBlue to-teal text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Subscribe to Newsletter
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

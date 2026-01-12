/**
 * https://raghunathchava.com
 * Enhanced Resources Hub Page
 */
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/seo/SEO";
import { InfoCard } from "@/components/sections/InfoCard";
import { getPageSEO } from "@/data/seo";
import { BookOpen, FileText, Video, Download } from "lucide-react";

const seo = getPageSEO("/resources");

export function ResourcesOverview() {
  const resources = [
    {
      icon: BookOpen,
      title: "Documentation",
      description:
        "Complete API reference, guides, and tutorials to help you build with Raghunath Chava.",
      cta: {
        label: "View Docs",
        href: "https://docs.saraise.com",
        external: true,
      },
    },
    {
      icon: FileText,
      title: "Blog",
      description:
        "Latest updates, insights, and best practices from the Raghunath Chava team.",
      cta: {
        label: "Read Blog",
        href: "/resources/blog",
      },
    },
    {
      icon: Video,
      title: "Webinars",
      description:
        "Live sessions and recorded events covering features, use cases, and best practices.",
      cta: {
        label: "Watch Webinars",
        href: "/resources/webinars",
      },
    },
    {
      icon: Download,
      title: "Downloads",
      description:
        "Whitepapers, case studies, and other resources available for download.",
      cta: {
        label: "Browse Downloads",
        href: "/resources#downloads",
      },
    },
  ];

  return (
    <>
      <SEO {...seo} />
      <Navigation />
      <main className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-4">Resources</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Documentation, guides, and resources to help you succeed with
                Raghunath Chava
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resources.map((resource, index) => (
                <InfoCard
                  key={index}
                  icon={resource.icon}
                  title={resource.title}
                  description={resource.description}
                  cta={resource.cta}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

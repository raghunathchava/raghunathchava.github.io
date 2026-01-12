/**
 * https://raghunathchava.com
 * Enterprise Case Studies Page
 */
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/seo/SEO";
import { SocialProof } from "@/components/sections/SocialProof";
import { getPageSEO } from "@/data/seo";
import { socialProofData } from "@/data/socialProof";

const seo = getPageSEO("/enterprise/case-studies");

export function EnterpriseCaseStudies() {
  return (
    <>
      <SEO {...seo} />
      <Navigation />
      <main className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16 text-center">
              <h1 className="text-4xl font-bold mb-4">
                Customer Success Stories
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See how organizations across industries are transforming their
                operations with Raghunath Chava. From logistics and manufacturing to IT
                services and hospitality, discover real results and measurable
                impact.
              </p>
            </div>
            <SocialProof
              variant="case-studies"
              caseStudies={socialProofData.caseStudies}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

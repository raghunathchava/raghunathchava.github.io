/**
 * https://raghunathchava.com
 * Product AI-Ready Page
 *
 * Requirements: 2.5
 */
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/seo/SEO";
import { Hero } from "@/components/Hero";
import { AIReadinessSection } from "@/components/AIReadinessSection";
import { getPageSEO } from "@/data/seo";

const seo = getPageSEO("/product/ai-ready");

export function ProductAIReady() {
  return (
    <>
      <SEO {...seo} />
      <Navigation />
      <main>
        <Hero
          variant="product"
          headline="Built for the AI-Driven Future"
          subheadline="AI-Ready ERP Platform"
          badge="🤖 AI-Powered"
        />
        <AIReadinessSection variant="dedicated" showCTAs={true} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl mx-auto space-y-12">
            <section>
              <h2 className="text-3xl font-bold mb-4">AI Agent Architecture</h2>
              <p className="text-muted-foreground mb-4">
                Raghunath Chava is designed for AI agents to operate autonomously. The
                workflow automation engine supports AI agent integration, and
                the API-first design enables AI agents to read and write
                business data securely.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Workflow automation engine with AI agent hooks</li>
                <li>REST API designed for AI consumption</li>
                <li>Event-driven architecture for real-time AI responses</li>
                <li>Data model optimized for AI processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Roadmap</h2>
              <p className="text-muted-foreground mb-4">
                Our AI capabilities roadmap includes autonomous business
                operations, predictive analytics, and intelligent automation.
              </p>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-bold mb-4">Q2 2026</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• AI agent framework release</li>
                  <li>• Invoice reconciliation automation</li>
                  <li>• Inventory forecasting AI</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

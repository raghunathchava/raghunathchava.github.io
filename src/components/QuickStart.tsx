/**
 * https://raghunathchava.com
 * Quick Start Component with Analytics Tracking
 *
 * Requirements: 1.3
 */
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { useAnalytics } from "@/hooks/useAnalytics";

const codeBlock = `$ git clone https://github.com/buildworksai/saraise-application
$ cd saraise-application
$ docker-compose up

✅ Raghunath Chava running on http://localhost:8000`;

const requirements = [
  "Docker & Docker Compose",
  "4GB RAM minimum",
  "PostgreSQL 17+ (included in Docker)",
];

export function QuickStart() {
  const [copied, setCopied] = useState(false);
  const { trackEvent } = useAnalytics();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeBlock);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);

    // Track copy event
    trackEvent({
      name: "code_copy",
      category: "engagement",
      properties: {
        elementId: "quick_start_code",
        elementType: "code_block",
        elementText: "Quick Start Code",
      },
    });
  };

  return (
    <section
      id="quick-start"
      className="py-24 bg-gradient-to-br from-deepBlue/5 via-transparent to-teal/5"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
            Get Started in Minutes
          </h2>
          <p className="text-xl text-muted-foreground mb-16">
            Docker makes deployment simple
          </p>

          {/* Code Block */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden mb-8 shadow-xl">
            <div className="flex items-center justify-between px-6 py-4 bg-secondary border-b border-border">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Terminal
              </span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold border border-border rounded-md hover:bg-background transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy
                  </>
                )}
              </button>
            </div>
            <pre className="p-6 overflow-x-auto text-sm font-mono leading-relaxed">
              <code>{codeBlock}</code>
            </pre>
          </div>

          {/* Requirements */}
          <div className="bg-card border border-border rounded-2xl p-8 text-left max-w-lg mx-auto">
            <h4 className="text-lg font-bold mb-4">Requirements:</h4>
            <ul className="space-y-2">
              {requirements.map((req) => (
                <li
                  key={req}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <span className="text-deepBlue font-bold">•</span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * https://raghunathchava.com
 */
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

export function TermsOfService() {
  return (
    <div className="min-h-screen bg-background/20 backdrop-blur-sm text-foreground">
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 max-w-4xl">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 bg-gradient-to-r from-deepBlue to-teal bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-muted-foreground mb-8">
            Last Updated: January 2025
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using Raghunath Chava website, software, documentation, or
              services provided by BuildFlow Consultancy Private Limited ("we,"
              "our," or "us"), you agree to be bound by these Terms of Service
              ("Terms"). If you do not agree to these Terms, you may not use our
              services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              2. Description of Service
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Raghunath Chava is an open-source ERP software platform. We provide:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Open-source software code available on GitHub</li>
              <li>Documentation and user guides</li>
              <li>Website and marketing materials</li>
              <li>Community support through GitHub Discussions</li>
              <li>Cloud hosting services (when available)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">3. Use Restrictions</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Use Raghunath Chava for any illegal or unauthorized purpose</li>
              <li>
                Violate any laws in your jurisdiction (including copyright laws)
              </li>
              <li>Transmit any viruses, worms, or malicious code</li>
              <li>
                Attempt to gain unauthorized access to our systems or networks
              </li>
              <li>
                Interfere with or disrupt the integrity or performance of our
                services
              </li>
              <li>
                Remove, alter, or obscure any proprietary notices or labels
              </li>
              <li>
                Use Raghunath Chava to compete with our commercial offerings in a manner
                that violates these Terms
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              4. Intellectual Property
            </h2>
            <h3 className="text-xl font-semibold mb-3">
              4.1 Our Intellectual Property
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Raghunath Chava name, logo, trademarks, and website content (excluding
              open-source code) are the property of BuildFlow Consultancy
              Private Limited. You may not use our trademarks without prior
              written permission.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">
              4.2 Your Contributions
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              By contributing code, documentation, or other materials to
              Raghunath Chava, you grant us a perpetual, worldwide, non-exclusive,
              royalty-free right to use, modify, and distribute
              your contributions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              6. Self-Hosted Instances
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you self-host Raghunath Chava, you are responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Compliance with all applicable laws and regulations</li>
              <li>Data security and privacy protection</li>
              <li>Backup and disaster recovery</li>
              <li>User access management and authentication</li>
              <li>Any modifications or customizations you make</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We are not liable for any issues, data loss, or security breaches
              in self-hosted instances.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              6. Cloud Hosting Services
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you use our cloud hosting services (when available), additional
              terms will apply, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Service level agreements (SLAs)</li>
              <li>Billing and payment terms</li>
              <li>Data retention and deletion policies</li>
              <li>Acceptable use policies</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Cloud hosting services are subject to separate terms and
              conditions that will be provided at the time of signup.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">7. Disclaimers</h2>
            <h3 className="text-xl font-semibold mb-3">7.1 No Warranty</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Raghunath Chava IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES
              OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
              TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
              PURPOSE, OR NON-INFRINGEMENT.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">
              7.2 No Guarantee
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We do not guarantee that Raghunath Chava will be error-free, secure, or
              available at all times. We reserve the right to modify, suspend,
              or discontinue any part of our services at any time.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              8. Limitation of Liability
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE
              FOR:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                Any indirect, incidental, special, consequential, or punitive
                damages
              </li>
              <li>Loss of profits, revenue, data, or business opportunities</li>
              <li>Damages resulting from use or inability to use Raghunath Chava</li>
              <li>
                Damages resulting from unauthorized access or data breaches in
                self-hosted instances
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Our total liability shall not exceed the amount you paid us (if
              any) in the 12 months preceding the claim.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">9. Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to indemnify, defend, and hold harmless BuildFlow
              Consultancy Private Limited and its officers, directors,
              employees, and agents from any claims, damages, losses,
              liabilities, and expenses (including legal fees) arising from your
              use of Raghunath Chava, violation of these Terms, or infringement of any
              rights of another party.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">10. Termination</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may terminate or suspend your access to our services
              immediately, without prior notice, for any reason, including
              breach of these Terms.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Upon termination, your right to use our services will cease
              immediately. Provisions that by their nature should survive
              termination (including disclaimers, limitations of liability, and
              indemnification) shall survive.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              11. Governing Law and Jurisdiction
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with
              the laws of India, without regard to its conflict of law
              provisions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Any disputes arising from these Terms shall be subject to the
              exclusive jurisdiction of the courts in Hyderabad, Telangana,
              India.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">13. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms at any time. We will
              notify you of material changes by posting the updated Terms on
              this page and updating the "Last Updated" date. Your continued use
              of our services after such changes constitutes acceptance of the
              modified Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">14. Severability</h2>
            <p className="text-muted-foreground leading-relaxed">
              If any provision of these Terms is found to be unenforceable or
              invalid, that provision shall be limited or eliminated to the
              minimum extent necessary, and the remaining provisions shall
              remain in full force and effect.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">15. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have questions about these Terms, please contact us:
            </p>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-muted-foreground mb-2">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@buildworks.ai"
                  className="text-deepBlue hover:underline"
                >
                  info@buildworks.ai
                </a>
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>Company:</strong> BuildFlow Consultancy Private Limited
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>CIN:</strong> U62099TS2025PTC201319
              </p>
              <p className="text-muted-foreground">
                <strong>Address:</strong> Hafeez Pet, Miyapur, Hyderabad-
                500049, Telangana, India
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

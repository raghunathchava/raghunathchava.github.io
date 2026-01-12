/**
 * https://raghunathchava.com
 * Enhanced Healthcare Solutions Page
 */
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/seo/SEO";
import { Hero } from "@/components/Hero";
import { InfoCard } from "@/components/sections/InfoCard";
import { getPageSEO } from "@/data/seo";
import {
  Heart,
  FileText,
  Shield,
  CreditCard,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const seo = getPageSEO("/solutions/healthcare");

export function SolutionsHealthcare() {
  const heroConfig = {
    headline: "Healthcare Management Platform",
    subheadline:
      "Patient management, clinical workflows, and HIPAA compliance for modern healthcare organizations",
    primaryCTA: {
      label: "Contact Sales",
      href: "/company/contact?type=enterprise&industry=healthcare",
      variant: "primary" as const,
      trackingId: "cta_solutions_healthcare_contact",
      icpTarget: "cfo" as const,
    },
    variant: "solution" as const,
  };

  const healthcareFeatures = [
    {
      icon: Heart,
      title: "Patient Management",
      description:
        "Comprehensive patient records with medical history, appointments, and care plans.",
      cta: {
        label: "Learn More",
        href: "/product/modules#patient-management",
      },
    },
    {
      icon: FileText,
      title: "Clinical Workflows",
      description:
        "Streamlined clinical workflows for documentation, prescriptions, and treatment plans.",
      cta: {
        label: "View Features",
        href: "/product/features",
      },
    },
    {
      icon: Shield,
      title: "HIPAA Compliance",
      description:
        "Full HIPAA compliance with data encryption, access controls, and audit logging.",
      cta: {
        label: "Compliance Details",
        href: "/enterprise/compliance#hipaa",
      },
    },
    {
      icon: CreditCard,
      title: "Billing Integration",
      description:
        "Integrated billing and insurance claims processing with automated workflows.",
      cta: {
        label: "See Integration",
        href: "/enterprise/integrations",
      },
    },
  ];

  const painPoints = [
    {
      icon: AlertTriangle,
      title: "HIPAA Compliance Challenges",
      description:
        "Ensuring HIPAA compliance across multiple systems and workflows is complex and time-consuming, with significant penalties for violations.",
      solution:
        "Raghunath Chava's healthcare modules include built-in HIPAA controls: encryption at rest and in transit, comprehensive audit logging, access controls, and Business Associate Agreement (BAA) support. All patient data is protected with row-level security.",
    },
    {
      icon: AlertTriangle,
      title: "Fragmented Patient Data",
      description:
        "Patient information scattered across multiple systems makes it difficult to provide coordinated care and increases the risk of errors.",
      solution:
        "Unified patient management with comprehensive medical history, appointments, medications, and care plans in a single system. Real-time synchronization ensures all providers have access to current information.",
    },
    {
      icon: AlertTriangle,
      title: "Inefficient Billing and Claims Processing",
      description:
        "Manual billing and insurance claims processing is slow, error-prone, and delays revenue collection.",
      solution:
        "Automated billing workflows generate invoices, process insurance claims, and handle denials. Integration with insurance systems reduces manual work by 70-80% and accelerates revenue collection.",
    },
    {
      icon: AlertTriangle,
      title: "Clinical Documentation Burden",
      description:
        "Excessive time spent on documentation reduces time available for patient care and increases provider burnout.",
      solution:
        "Streamlined clinical workflows with templates, voice-to-text integration, and automated documentation reduce documentation time by 40-50%, allowing providers to focus on patient care.",
    },
  ];

  const roiExamples = [
    {
      metric: "70-80%",
      label: "Reduction in Billing Processing Time",
      description: "Automated claims processing",
    },
    {
      metric: "40-50%",
      label: "Reduction in Documentation Time",
      description: "Streamlined clinical workflows",
    },
    {
      metric: "30-40%",
      label: "Faster Revenue Collection",
      description: "Automated billing and claims",
    },
    {
      metric: "100%",
      label: "HIPAA Compliance",
      description: "Built-in compliance controls",
    },
  ];

  return (
    <>
      <SEO {...seo} />
      <Navigation />
      <main>
        <Hero {...heroConfig} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Overview */}
            <section>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  Healthcare Solutions
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  HIPAA-compliant healthcare management with patient records,
                  clinical workflows, and billing integration. Built for
                  healthcare organizations that demand security, compliance, and
                  operational efficiency.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {healthcareFeatures.map((feature, index) => (
                  <InfoCard
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    cta={feature.cta}
                  />
                ))}
              </div>
            </section>

            {/* Pain Points and Solutions */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-center">
                Healthcare Challenges and Solutions
              </h2>
              <div className="space-y-6">
                {painPoints.map((point, index) => {
                  const Icon = point.icon;
                  return (
                    <div
                      key={index}
                      className="bg-card border border-border rounded-xl p-6"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-red-500" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2">
                            {point.title}
                          </h3>
                          <p className="text-muted-foreground mb-3">
                            {point.description}
                          </p>
                          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                            <div className="flex items-start gap-2 mb-2">
                              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <p className="text-sm font-semibold text-green-700 dark:text-green-400">
                                Raghunath Chava Solution:
                              </p>
                            </div>
                            <p className="text-sm text-muted-foreground ml-7">
                              {point.solution}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* ROI Examples */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-center">
                Proven Results for Healthcare Organizations
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {roiExamples.map((example, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-6 text-center"
                  >
                    <div className="text-3xl font-bold text-deepBlue mb-2">
                      {example.metric}
                    </div>
                    <div className="font-semibold mb-2">{example.label}</div>
                    <div className="text-sm text-muted-foreground">
                      {example.description}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Integration Scenarios */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-center">
                Healthcare Integration Scenarios
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">
                    EHR and EMR Integration
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Integrate with Electronic Health Records (EHR) and
                    Electronic Medical Records (EMR) systems for seamless data
                    exchange and coordinated care.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Bidirectional data sync with EHR/EMR systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Automated patient data updates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Unified view of patient information</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">
                    Insurance and Billing Systems
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Connect with insurance providers and billing systems for
                    automated claims processing and payment reconciliation.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Automated insurance eligibility verification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Electronic claims submission and tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Automated payment posting and reconciliation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Transform Your Healthcare Operations?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                See how Raghunath Chava's healthcare modules ensure HIPAA compliance
                while improving operational efficiency. Schedule a demo tailored
                to your healthcare organization.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/company/contact?type=enterprise&industry=healthcare"
                  className="px-6 py-3 bg-deepBlue text-white rounded-lg font-semibold hover:bg-teal transition-colors"
                >
                  Contact Healthcare Sales
                </Link>
                <Link
                  to="/enterprise/compliance#hipaa"
                  className="px-6 py-3 bg-card border border-border text-foreground rounded-lg font-semibold hover:shadow-md transition-shadow"
                >
                  Learn About HIPAA Compliance
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

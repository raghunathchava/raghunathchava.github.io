/**
 * https://raghunathchava.com
 * Experience Page - Career Timeline
 */
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { SEO } from "../components/seo/SEO";
import { getPageSEO } from "../data/seo";
import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";

const seo = getPageSEO("/experience");

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
}

const experiences: Experience[] = [
  {
    company: "BuildWorks.AI",
    role: "Founder & Chief of AI",
    period: "February 2025 - Present",
    location: "Hyderabad, Telangana, India",
    description: "Built and operate a multi-tenant, enterprise-grade GenAI platform for secure AI agent and workflow deployment with runtime governance, licensing, audit logging, and tenant isolation.",
    achievements: [
      "Operationalized end-to-end LLMOps, including model onboarding, versioning, staged rollout, rollback, and inference failover, ensuring zero-downtime upgrades",
      "Implemented GenAI observability and cost telemetry tracking latency, token usage, per-tenant consumption, throttling, and cost-per-request for real-time financial governance",
      "Enforced Responsible AI at runtime via prompt filtering, role-based model access, data boundary enforcement, and full AI audit trails for regulated enterprise adoption",
      "Delivered 99.9%+ uptime using Kubernetes autoscaling, health monitoring, and production incident, problem, and change management for AI services",
      "Architected Aistrale (Apache 2.0) - open-source GenAI governance & LLMOps control plane",
      "Built SARAISE (Apache 2.0) - enterprise AI governance fabric implementing RBAC, ABAC, RLP, SoD, and JIT access",
      "Own full financial accountability for AI infrastructure, LLM consumption economics, licensing enforcement, and margin protection",
    ],
  },
  {
    company: "Wipro Limited",
    role: "Delivery Head",
    period: "May 2021 - January 2025",
    location: "Detroit Metropolitan Area",
    description: "Directed multi-million-dollar cloud and platform modernization portfolios for large BFSI and regulated enterprises across North America.",
    achievements: [
      "Owned end-to-end platform reliability with sustained 99.95%+ uptime across mission-critical environments supporting banking, payments, and financial risk workloads",
      "Built and scaled AIOps-driven operations including predictive incident detection, event correlation, and proactive remediation, materially reducing Sev-1 incidents and unplanned outages",
      "Led enterprise-wide FinOps & TBM programs delivering 18–25% YoY run-rate cost reduction with CFO-grade cost transparency across cloud, infra, and platform services",
      "Established and governed ITIL-aligned incident, problem, change, and release management frameworks across global delivery teams",
      "Led and scaled 300+ engineers across cloud, SRE, security, network, and platform operations functions",
      "Acted as CXO-facing reliability owner for regulatory audits, SLA governance, risk posture, and operational resilience",
    ],
  },
  {
    company: "R C Agri Farms (Agri Tech)",
    role: "Founder & CTO",
    period: "August 2019 - April 2021",
    location: "India",
    description: "Built IoT and AI monitoring platform using Azure + Kubernetes (K3s) for smart farming.",
    achievements: [
      "Achieved 10× user growth and 15% cost reduction leveraging open-source stack",
      "Drove agri-automation adoption in PropTech and FinTech adjacent verticals",
    ],
  },
  {
    company: "Societe Generale Global Solution Centre",
    role: "Head of Cloud Infrastructure",
    period: "August 2015 - July 2019",
    location: "Bangalore",
    description: "Led a $50M multi-year cloud transformation program across Azure and AWS for core payment and financial risk platforms operating under strict European banking regulations.",
    achievements: [
      "Owned end-to-end cloud infrastructure reliability delivering sustained 99.9%+ uptime for high-volume transaction processing, clearing, and settlement systems",
      "Modernized legacy infrastructure through large-scale OpenStack and Docker adoption, reducing infrastructure cost by 20% while improving deployment speed, resilience, and standardization",
      "Directed a 175+ engineer organization spanning cloud engineering, virtualization, network, security, and operations across regulated BFSI environments",
      "As Deputy Head of Infrastructure (2015–2017), drove a 30% operational efficiency gain and 20% reduction in platform downtime through automation, capacity engineering, and incident/problem management discipline",
      "Served as regulatory-facing infrastructure owner supporting audit readiness, risk remediation, and compliance across payment and banking platforms",
    ],
  },
  {
    company: "Wipro",
    role: "Delivery Manager",
    period: "August 2014 - July 2015",
    location: "Bengaluru, Karnataka, India",
    description: "Managed end-to-end delivery of infra and apps solutions.",
    achievements: [
      "Increased customer satisfaction by 15%",
      "Improved proposal success rate 30% via solution design and governance alignment",
    ],
  },
  {
    company: "Wells Fargo",
    role: "Technology Manager",
    period: "July 2013 - August 2014",
    location: "Bangalore, India",
    description: "Managed technology operations for critical systems.",
    achievements: [
      "Maintained 99.9% uptime across critical systems",
      "Cut OPEX by 20%",
      "Enhanced engineering capabilities through mentorship programs",
    ],
  },
  {
    company: "IBM",
    role: "Sr Technical Services Manager",
    period: "September 2009 - July 2013",
    location: "Bangalore",
    description: "Oversaw global delivery teams and service improvement initiatives.",
    achievements: [
      "Achieved 20% service improvement and awarded SDQE honor",
      "Implemented new program framework raising alignment with strategy by 15%",
    ],
  },
  {
    company: "Hewlett-Packard",
    role: "Technical Solution Consultant",
    period: "October 2006 - September 2009",
    location: "Bangalore",
    description: "Delivered technical solutions and mission-critical services.",
    achievements: [
      "Shifted Mission Critical services to proactive model → 25% higher availability",
      "Reduced critical incidents 30%",
      "Mentored 40-person team",
    ],
  },
];

export function Experience() {
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
                Professional Experience
              </h1>
              <p className="text-xl text-muted-foreground">
                27+ years of experience across enterprise platforms, cloud, AIOps, FinOps, and regulated environments
              </p>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="relative pl-8 border-l-2 border-primary/30 pb-12 last:pb-0"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                    {/* Content */}
                    <div className="space-y-4">
                      <div>
                        <h2 className="text-2xl font-bold mb-2">{exp.role}</h2>
                        <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-2">
                          <div className="flex items-center gap-2">
                            <Briefcase className="w-4 h-4" />
                            <span className="font-semibold text-foreground">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                      {exp.achievements.length > 0 && (
                        <div className="space-y-2">
                          <h3 className="font-semibold text-foreground">Key Achievements:</h3>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

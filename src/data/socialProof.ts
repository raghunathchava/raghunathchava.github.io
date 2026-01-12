/**
 * https://raghunathchava.com
 * Social Proof Data for Raghunath Chava Marketing Website
 *
 * This file contains placeholder data for logos, testimonials, stats, and case studies.
 * Replace with real content as it becomes available.
 *
 * Requirements: 1.4
 */
import type { Logo, Testimonial, Stat, CaseStudy } from "@/types/components";

export const socialProofData = {
  logos: [
    // Placeholder - to be replaced with actual customer logos
    {
      name: "Manufacturing Co",
      src: "/assets/logos/manufacturing-co.png",
      alt: "Manufacturing Company Logo",
      caseStudyLink: "/enterprise/case-studies/manufacturing",
    },
    {
      name: "Healthcare Org",
      src: "/assets/logos/healthcare-org.png",
      alt: "Healthcare Organization Logo",
      caseStudyLink: "/enterprise/case-studies/healthcare",
    },
    // Add more logos as available
  ] as Logo[],

  testimonials: [
    {
      quote:
        "Raghunath Chava's modern stack saved us 6 months of development time. The modular architecture allowed us to customize exactly what we needed.",
      author: "",
      title: "CTO",
      company: "",
      industry: "manufacturing",
    },
    {
      quote:
        "We reduced our ERP costs by 70% while gaining more flexibility. The self-hosted option gave us complete control over our data.",
      author: "",
      title: "CFO",
      company: "",
      industry: "healthcare",
    },
    {
      quote:
        "The multi-tenant architecture with row-level security gave us confidence to scale. We've grown from 10 to 200+ tenants without any data isolation issues.",
      author: "",
      title: "VP of Engineering",
      company: "",
      industry: "technology",
    },
    {
      quote:
        "Raghunath Chava's AI-powered workflow automation reduced our manual data entry by 80%. Our team can now focus on strategic work instead of repetitive tasks.",
      author: "",
      title: "Operations Director",
      company: "",
      industry: "professional-services",
    },
  ] as Testimonial[],

  stats: [
    // {
    //   value: "10K+",
    //   label: "GitHub Stars",
    //   description: "Open source community",
    // },
    {
      value: "50+",
      label: "Companies",
      description: "Using Raghunath Chava",
    },
    {
      value: "99.99%",
      label: "Uptime SLA",
      description: "Enterprise tier",
    },
    {
      value: "60%",
      label: "Cost Reduction",
      description: "vs. proprietary ERP",
    },
  ] as Stat[],

  caseStudies: [
    {
      title: "International Shipment Management & Logistics Automation",
      company: "ParciGO",
      industry: "logistics",
      summary:
        "ParciGO, an international shipment solution provider, needed a comprehensive ERP system to manage complex cross-border logistics, customs documentation, and multi-currency transactions. Raghunath Chava's modular architecture with Inventory Management, Purchase Management, and Accounting modules enabled them to automate shipment tracking, generate customs documents, and handle multi-currency invoicing seamlessly. The self-hosted deployment option ensured complete data sovereignty for sensitive shipment information.",
      results: [
        { value: "60%", label: "Faster Document Processing" },
        { value: "45%", label: "Reduced Manual Errors" },
        { value: "5 weeks", label: "Implementation Time" },
      ],
      link: "/enterprise/case-studies/parcigo",
    },
    {
      title: "Production Planning & Supply Chain Optimization",
      company: "Leading FMCG Manufacturer",
      industry: "manufacturing",
      summary:
        "A leading Fast-Moving Consumer Goods (FMCG) manufacturer struggled with production planning inefficiencies and supply chain disruptions. By implementing Raghunath Chava's Manufacturing modules including Production Planning, Shop Floor Control, and Inventory Management, they achieved real-time visibility into production schedules, optimized raw material procurement, and reduced waste. AI-powered demand forecasting helped them align production with market demand, significantly improving operational efficiency.",
      results: [
        { value: "30%", label: "Inventory Cost Reduction" },
        { value: "25%", label: "Faster Production Cycles" },
        { value: "40%", label: "Reduced Waste" },
      ],
      link: "/enterprise/case-studies/fmcg-manufacturing",
    },
    {
      title: "Multi-Tenant SaaS Platform & Resource Management",
      company: "IT Services Organization",
      industry: "technology",
      summary:
        "An IT services organization needed a robust multi-tenant ERP platform to manage their SaaS operations, client projects, and resource allocation. Raghunath Chava's multi-tenant architecture with row-level security enabled them to serve multiple clients from a single deployment while ensuring complete data isolation. The Professional Services modules with time tracking and billing automation streamlined their operations, while the modular design allowed them to add modules as their business grew.",
      results: [
        { value: "70%", label: "Cost Reduction vs. Proprietary ERP" },
        { value: "10x", label: "Scalability Improvement" },
        { value: "35%", label: "Better Resource Utilization" },
      ],
      link: "/enterprise/case-studies/it-services",
    },
    {
      title: "Multi-Location Distribution & Inventory Management",
      company: "Bikes and Cars Distribution Company",
      industry: "retail",
      summary:
        "A major distributor of bikes and cars across multiple locations needed real-time inventory visibility and seamless order management. Raghunath Chava's Retail and Inventory Management modules provided unified inventory tracking across all locations, automated reordering based on sales patterns, and integrated POS systems for showroom operations. The real-time synchronization eliminated stockouts and overstock situations, while the comprehensive reporting enabled data-driven decision-making.",
      results: [
        { value: "95%", label: "Inventory Accuracy" },
        { value: "50%", label: "Faster Order Fulfillment" },
        { value: "28%", label: "Reduction in Carrying Costs" },
      ],
      link: "/enterprise/case-studies/automotive-distribution",
    },
    {
      title: "Guest Services & Wellness Program Management",
      company: "Luxury SPA and Wellness Resort",
      industry: "hospitality",
      summary:
        "A luxury SPA and wellness resort required an integrated system to manage guest reservations, wellness program bookings, inventory for spa products, and staff scheduling. Raghunath Chava's Hospitality modules with Property Management, Reservation System, and Inventory Management provided a unified platform. The guest management system tracked preferences and purchase history, enabling personalized service recommendations. Automated scheduling optimized staff allocation across spa services, reducing wait times and improving guest satisfaction.",
      results: [
        { value: "40%", label: "Increase in Repeat Bookings" },
        { value: "35%", label: "Reduction in No-Shows" },
        { value: "25%", label: "Improvement in Guest Satisfaction" },
      ],
      link: "/enterprise/case-studies/spa-wellness",
    },
  ] as CaseStudy[],
};

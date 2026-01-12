/**
 * https://raghunathchava.com
 * AI Readiness Data for Raghunath Chava Marketing Website
 *
 * Requirements: 2.2
 */
export interface AICapability {
  icon: string;
  title: string;
  description: string;
  outcome: string;
}

export const aiCapabilities: AICapability[] = [
  {
    icon: "Brain",
    title: "Automated Invoice Reconciliation",
    description:
      "AI agents automatically match invoices to purchase orders, reducing manual work by 80%",
    outcome: "Save 10+ hours per week on accounting tasks",
  },
  {
    icon: "TrendingUp",
    title: "Intelligent Inventory Forecasting",
    description:
      "AI agents predict demand patterns and optimize stock levels in real-time",
    outcome: "Reduce inventory costs by 25% while maintaining 99% fill rates",
  },
  {
    icon: "Zap",
    title: "AI-Powered Customer Service",
    description:
      "AI agents handle routine customer inquiries, freeing your team for complex issues",
    outcome: "Handle 60% of support tickets automatically",
  },
];

export const futureProofReasons = [
  {
    title: "Modular Architecture",
    description:
      "AI modules can be integrated without disrupting core functionality. Add AI capabilities incrementally.",
  },
  {
    title: "Open API",
    description:
      "Comprehensive REST API enables AI agents to read and write business data securely.",
  },
  {
    title: "Workflow Engine",
    description:
      "Built-in workflow automation engine supports AI-driven processes and decision-making.",
  },
  {
    title: "Data Model",
    description:
      "Data structure designed for AI consumption with clear schemas and relationships.",
  },
];

/**
 * https://raghunathchava.com
 * Enhanced Product Integrations Page
 */
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/seo/SEO";
import { getPageSEO } from "@/data/seo";
import {
  Key,
  Code,
  Zap,
  Globe2,
  Search,
  CheckCircle,
  Database,
  CreditCard,
  MessageSquare,
  BarChart3,
  ShoppingCart,
  Cloud,
  Lock,
  Webhook,
  Link2,
  FileText,
  Users,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const seo = getPageSEO("/product/integrations");

interface Integration {
  id: string;
  name: string;
  category: string;
  description: string;
  protocol: string;
  authentication: string;
  status: "available" | "coming-soon";
  useCase?: string;
  icon?: string;
}

const integrations: Integration[] = [
  // SSO & Identity
  {
    id: "azure-ad",
    name: "Azure Active Directory",
    category: "sso",
    description:
      "Enterprise SSO with SAML 2.0 and OIDC support for Microsoft Azure AD",
    protocol: "SAML 2.0, OIDC",
    authentication: "OAuth 2.0",
    status: "available",
    useCase: "Enable employees to sign in with their Microsoft work accounts",
  },
  {
    id: "google-workspace",
    name: "Google Workspace",
    category: "sso",
    description:
      "Single sign-on integration with Google Workspace for seamless authentication",
    protocol: "OIDC, SAML 2.0",
    authentication: "OAuth 2.0",
    status: "available",
    useCase: "Allow users to authenticate with Google Workspace credentials",
  },
  {
    id: "okta",
    name: "Okta",
    category: "sso",
    description:
      "Enterprise identity provider integration with Okta for centralized user management",
    protocol: "SAML 2.0, OIDC",
    authentication: "OAuth 2.0",
    status: "available",
    useCase: "Centralized identity management for large enterprises",
  },
  {
    id: "auth0",
    name: "Auth0",
    category: "sso",
    description: "Flexible authentication platform integration with Auth0",
    protocol: "OIDC, SAML 2.0",
    authentication: "OAuth 2.0",
    status: "available",
    useCase: "Custom authentication flows and social login options",
  },
  // Workflow Automation
  {
    id: "zapier",
    name: "Zapier",
    category: "workflow",
    description:
      "Connect Raghunath Chava with 5,000+ apps through Zapier workflows and automations",
    protocol: "REST API, Webhooks",
    authentication: "API Key, OAuth 2.0",
    status: "available",
    useCase: "Automate workflows between Raghunath Chava and popular business tools",
  },
  {
    id: "make",
    name: "Make (Integromat)",
    category: "workflow",
    description:
      "Advanced workflow automation with Make's visual automation platform",
    protocol: "REST API, Webhooks",
    authentication: "API Key, OAuth 2.0",
    status: "available",
    useCase: "Complex multi-step automations with conditional logic",
  },
  {
    id: "n8n",
    name: "n8n",
    category: "workflow",
    description:
      "Self-hosted workflow automation with n8n for complete control",
    protocol: "REST API, Webhooks",
    authentication: "API Key",
    status: "available",
    useCase: "Self-hosted workflow automation for data sovereignty",
  },
  {
    id: "microsoft-power-automate",
    name: "Microsoft Power Automate",
    category: "workflow",
    description: "Enterprise workflow automation with Microsoft Power Automate",
    protocol: "REST API, Webhooks",
    authentication: "OAuth 2.0",
    status: "available",
    useCase:
      "Integrate with Microsoft 365 ecosystem and automate business processes",
  },
  // Business Intelligence & Analytics
  {
    id: "power-bi",
    name: "Microsoft Power BI",
    category: "analytics",
    description:
      "Connect Raghunath Chava data to Power BI for advanced analytics and reporting",
    protocol: "REST API, OData",
    authentication: "OAuth 2.0",
    status: "available",
    useCase: "Create advanced dashboards and reports with Power BI",
  },
  {
    id: "tableau",
    name: "Tableau",
    category: "analytics",
    description: "Data visualization and analytics integration with Tableau",
    protocol: "REST API, Database Connector",
    authentication: "OAuth 2.0, API Key",
    status: "available",
    useCase: "Advanced data visualization and business intelligence",
  },
  {
    id: "looker",
    name: "Looker (Google Cloud)",
    category: "analytics",
    description: "Business intelligence and data exploration with Looker",
    protocol: "REST API, Database Connector",
    authentication: "OAuth 2.0",
    status: "available",
    useCase: "Self-service analytics and data exploration",
  },
  {
    id: "metabase",
    name: "Metabase",
    category: "analytics",
    description: "Open-source business intelligence platform integration",
    protocol: "Database Connector, REST API",
    authentication: "Database Credentials",
    status: "available",
    useCase: "Self-hosted BI with direct database access",
  },
  // Payment Processors
  {
    id: "stripe",
    name: "Stripe",
    category: "payment",
    description:
      "Payment processing integration with Stripe for invoices and subscriptions",
    protocol: "REST API, Webhooks",
    authentication: "API Key",
    status: "available",
    useCase: "Process customer payments and manage subscriptions",
  },
  {
    id: "paypal",
    name: "PayPal",
    category: "payment",
    description:
      "PayPal payment gateway integration for e-commerce and invoicing",
    protocol: "REST API, Webhooks",
    authentication: "OAuth 2.0",
    status: "available",
    useCase: "Accept PayPal payments for invoices and online orders",
  },
  {
    id: "razorpay",
    name: "Razorpay",
    category: "payment",
    description:
      "Payment gateway integration for Indian businesses with Razorpay",
    protocol: "REST API, Webhooks",
    authentication: "API Key",
    status: "available",
    useCase:
      "Payment processing for Indian market with UPI, cards, and wallets",
  },
  {
    id: "square",
    name: "Square",
    category: "payment",
    description: "Point-of-sale and payment processing with Square",
    protocol: "REST API, Webhooks",
    authentication: "OAuth 2.0",
    status: "available",
    useCase: "POS payment processing and retail operations",
  },
  // Communication & Messaging
  {
    id: "slack",
    name: "Slack",
    category: "communication",
    description:
      "Team collaboration integration with Slack for notifications and workflows",
    protocol: "REST API, Webhooks",
    authentication: "OAuth 2.0",
    status: "available",
    useCase: "Send notifications, alerts, and updates to Slack channels",
  },
  {
    id: "microsoft-teams",
    name: "Microsoft Teams",
    category: "communication",
    description: "Enterprise communication integration with Microsoft Teams",
    protocol: "REST API, Webhooks",
    authentication: "OAuth 2.0",
    status: "available",
    useCase: "Integrate ERP notifications and workflows with Teams",
  },
  {
    id: "whatsapp-business",
    name: "WhatsApp Business API",
    category: "communication",
    description: "Customer communication via WhatsApp Business API",
    protocol: "REST API, Webhooks",
    authentication: "API Key",
    status: "available",
    useCase:
      "Send order updates, invoices, and customer notifications via WhatsApp",
  },
  {
    id: "twilio",
    name: "Twilio",
    category: "communication",
    description: "SMS, voice, and messaging integration with Twilio",
    protocol: "REST API, Webhooks",
    authentication: "API Key",
    status: "available",
    useCase: "Send SMS notifications, make voice calls, and manage messaging",
  },
  {
    id: "sendgrid",
    name: "SendGrid",
    category: "communication",
    description: "Email delivery and marketing automation with SendGrid",
    protocol: "REST API, SMTP",
    authentication: "API Key",
    status: "available",
    useCase: "Transactional emails, marketing campaigns, and email delivery",
  },
  {
    id: "mailchimp",
    name: "Mailchimp",
    category: "communication",
    description: "Email marketing and automation platform integration",
    protocol: "REST API, Webhooks",
    authentication: "OAuth 2.0",
    status: "available",
    useCase: "Sync customer data and automate email marketing campaigns",
  },
  // E-commerce & Marketplaces
  {
    id: "shopify",
    name: "Shopify",
    category: "ecommerce",
    description:
      "E-commerce platform integration with Shopify for order and inventory sync",
    protocol: "REST API, GraphQL, Webhooks",
    authentication: "OAuth 2.0",
    status: "available",
    useCase: "Sync orders, inventory, and products between Raghunath Chava and Shopify",
  },
  {
    id: "woocommerce",
    name: "WooCommerce",
    category: "ecommerce",
    description: "WordPress e-commerce integration with WooCommerce",
    protocol: "REST API, Webhooks",
    authentication: "API Key",
    status: "available",
    useCase: "Connect WordPress stores with Raghunath Chava for unified operations",
  },
  {
    id: "amazon",
    name: "Amazon Marketplace",
    category: "ecommerce",
    description:
      "Amazon Seller Central integration for order and inventory management",
    protocol: "SP-API, MWS",
    authentication: "OAuth 2.0, API Key",
    status: "available",
    useCase: "Manage Amazon orders, inventory, and fulfillment from Raghunath Chava",
  },
  {
    id: "ebay",
    name: "eBay",
    category: "ecommerce",
    description:
      "eBay marketplace integration for listing and order management",
    protocol: "REST API, Webhooks",
    authentication: "OAuth 2.0",
    status: "available",
    useCase: "Sync eBay listings, orders, and inventory",
  },
  // Cloud Storage
  {
    id: "aws-s3",
    name: "AWS S3",
    category: "storage",
    description:
      "Amazon S3 cloud storage integration for document and file storage",
    protocol: "REST API (S3)",
    authentication: "AWS IAM",
    status: "available",
    useCase: "Store documents, files, and backups in AWS S3",
  },
  {
    id: "azure-blob",
    name: "Azure Blob Storage",
    category: "storage",
    description: "Microsoft Azure Blob Storage integration for file storage",
    protocol: "REST API",
    authentication: "Azure AD",
    status: "available",
    useCase: "Store documents and files in Azure Blob Storage",
  },
  {
    id: "google-cloud-storage",
    name: "Google Cloud Storage",
    category: "storage",
    description: "Google Cloud Storage integration for scalable file storage",
    protocol: "REST API",
    authentication: "OAuth 2.0",
    status: "available",
    useCase: "Store files and documents in Google Cloud Storage",
  },
  {
    id: "dropbox",
    name: "Dropbox",
    category: "storage",
    description: "Dropbox integration for file storage and collaboration",
    protocol: "REST API, Webhooks",
    authentication: "OAuth 2.0",
    status: "available",
    useCase: "Sync files and documents with Dropbox",
  },
  {
    id: "google-drive",
    name: "Google Drive",
    category: "storage",
    description: "Google Drive integration for file storage and sharing",
    protocol: "REST API, Webhooks",
    authentication: "OAuth 2.0",
    status: "available",
    useCase: "Store and share documents via Google Drive",
  },
  // Accounting & Finance
  {
    id: "quickbooks",
    name: "QuickBooks",
    category: "accounting",
    description:
      "QuickBooks accounting software integration for financial data sync",
    protocol: "REST API, Webhooks",
    authentication: "OAuth 2.0",
    status: "available",
    useCase: "Sync invoices, payments, and financial data with QuickBooks",
  },
  {
    id: "xero",
    name: "Xero",
    category: "accounting",
    description:
      "Xero accounting platform integration for financial management",
    protocol: "REST API, Webhooks",
    authentication: "OAuth 2.0",
    status: "available",
    useCase: "Integrate accounting data with Xero for financial reporting",
  },
  {
    id: "sage",
    name: "Sage",
    category: "accounting",
    description:
      "Sage accounting software integration for financial data synchronization",
    protocol: "REST API",
    authentication: "OAuth 2.0",
    status: "available",
    useCase: "Sync financial transactions and reports with Sage",
  },
  // Shipping & Logistics
  {
    id: "fedex",
    name: "FedEx",
    category: "shipping",
    description: "FedEx shipping integration for label generation and tracking",
    protocol: "REST API",
    authentication: "API Key",
    status: "available",
    useCase: "Generate shipping labels and track FedEx shipments",
  },
  {
    id: "ups",
    name: "UPS",
    category: "shipping",
    description: "UPS shipping integration for shipping labels and tracking",
    protocol: "REST API",
    authentication: "API Key",
    status: "available",
    useCase: "Create UPS shipping labels and track packages",
  },
  {
    id: "dhl",
    name: "DHL",
    category: "shipping",
    description:
      "DHL Express integration for international shipping and tracking",
    protocol: "REST API",
    authentication: "API Key",
    status: "available",
    useCase: "Manage DHL shipments and track international deliveries",
  },
  {
    id: "shipstation",
    name: "ShipStation",
    category: "shipping",
    description: "Multi-carrier shipping platform integration with ShipStation",
    protocol: "REST API, Webhooks",
    authentication: "API Key",
    status: "available",
    useCase: "Unified shipping management across multiple carriers",
  },
  // Database & Data Warehouse
  {
    id: "snowflake",
    name: "Snowflake",
    category: "data-warehouse",
    description:
      "Data warehouse integration with Snowflake for analytics and reporting",
    protocol: "SQL, REST API",
    authentication: "Database Credentials",
    status: "available",
    useCase: "Load ERP data into Snowflake for advanced analytics",
  },
  {
    id: "bigquery",
    name: "Google BigQuery",
    category: "data-warehouse",
    description: "Google BigQuery data warehouse integration for analytics",
    protocol: "REST API, SQL",
    authentication: "OAuth 2.0",
    status: "available",
    useCase: "Export data to BigQuery for data analytics and ML",
  },
  {
    id: "redshift",
    name: "Amazon Redshift",
    category: "data-warehouse",
    description: "Amazon Redshift data warehouse integration",
    protocol: "SQL, REST API",
    authentication: "AWS IAM",
    status: "available",
    useCase: "Load data into Redshift for business intelligence",
  },
  // CRM
  {
    id: "salesforce",
    name: "Salesforce",
    category: "crm",
    description: "Salesforce CRM integration for customer data synchronization",
    protocol: "REST API, SOAP API",
    authentication: "OAuth 2.0",
    status: "available",
    useCase: "Sync customer data, leads, and opportunities with Salesforce",
  },
  {
    id: "hubspot",
    name: "HubSpot",
    category: "crm",
    description: "HubSpot CRM and marketing automation integration",
    protocol: "REST API, Webhooks",
    authentication: "API Key",
    status: "available",
    useCase: "Sync contacts, deals, and marketing data with HubSpot",
  },
  {
    id: "pipedrive",
    name: "Pipedrive",
    category: "crm",
    description: "Pipedrive CRM integration for sales pipeline management",
    protocol: "REST API, Webhooks",
    authentication: "API Key",
    status: "available",
    useCase: "Sync sales pipeline and customer data with Pipedrive",
  },
];

const categories = [
  { id: "all", name: "All Integrations", icon: Link2 },
  { id: "sso", name: "SSO & Identity", icon: Key },
  { id: "workflow", name: "Workflow Automation", icon: Zap },
  { id: "analytics", name: "Analytics & BI", icon: BarChart3 },
  { id: "payment", name: "Payment Processors", icon: CreditCard },
  { id: "communication", name: "Communication", icon: MessageSquare },
  { id: "ecommerce", name: "E-commerce", icon: ShoppingCart },
  { id: "storage", name: "Cloud Storage", icon: Cloud },
  { id: "accounting", name: "Accounting", icon: FileText },
  { id: "shipping", name: "Shipping & Logistics", icon: Globe2 },
  { id: "data-warehouse", name: "Data Warehouse", icon: Database },
  { id: "crm", name: "CRM", icon: Users },
];

export function ProductIntegrations() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredIntegrations = integrations.filter((integration) => {
    const matchesSearch =
      integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      integration.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || integration.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find((c) => c.id === categoryId);
    return category?.icon || Link2;
  };

  const getStatusBadge = (status: string) => {
    if (status === "available") {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-700 dark:text-green-400">
          <CheckCircle className="w-3 h-3" />
          Available
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-700 dark:text-amber-400">
        Coming Soon
      </span>
    );
  };

  const categoryCounts = categories.map((cat) => ({
    ...cat,
    count:
      cat.id === "all"
        ? integrations.length
        : integrations.filter((i) => i.category === cat.id).length,
  }));

  return (
    <>
      <SEO {...seo} />
      <Navigation />
      <main className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-4">Integration Ecosystem</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Connect Raghunath Chava with your existing tools and systems.
                Comprehensive REST & GraphQL APIs, webhooks, and pre-built
                connectors enable seamless integration with 50+ popular
                platforms.
              </p>
            </div>

            {/* Integration Methods Overview */}
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <Code className="w-8 h-8 text-deepBlue mx-auto mb-3" />
                <h3 className="font-bold mb-2">REST & GraphQL APIs</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive APIs with full CRUD operations for all entities
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <Webhook className="w-8 h-8 text-deepBlue mx-auto mb-3" />
                <h3 className="font-bold mb-2">Webhooks</h3>
                <p className="text-sm text-muted-foreground">
                  Real-time event notifications for external systems
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <Link2 className="w-8 h-8 text-deepBlue mx-auto mb-3" />
                <h3 className="font-bold mb-2">Pre-built Connectors</h3>
                <p className="text-sm text-muted-foreground">
                  Ready-to-use integrations with popular platforms
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <Lock className="w-8 h-8 text-deepBlue mx-auto mb-3" />
                <h3 className="font-bold mb-2">Secure Authentication</h3>
                <p className="text-sm text-muted-foreground">
                  OAuth 2.0, API keys, and SAML 2.0 support
                </p>
              </div>
            </div>

            {/* Search and Filters */}
            <div className="mb-8 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search integrations by name or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-deepBlue"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categoryCounts.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                        selectedCategory === category.id
                          ? "bg-deepBlue text-white border-deepBlue"
                          : "bg-card border-border hover:bg-secondary"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="font-medium">{category.name}</span>
                      <span className="text-xs opacity-75">
                        ({category.count})
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Integration Listings */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredIntegrations.map((integration) => {
                const CategoryIcon = getCategoryIcon(integration.category);
                return (
                  <div
                    key={integration.id}
                    className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-deepBlue/10 to-teal/10 flex items-center justify-center">
                          <CategoryIcon className="w-5 h-5 text-deepBlue" />
                        </div>
                        <h3 className="text-lg font-bold">
                          {integration.name}
                        </h3>
                      </div>
                      {getStatusBadge(integration.status)}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {integration.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Code className="w-3 h-3" />
                        <span>
                          <strong>Protocol:</strong> {integration.protocol}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Lock className="w-3 h-3" />
                        <span>
                          <strong>Auth:</strong> {integration.authentication}
                        </span>
                      </div>
                    </div>
                    {integration.useCase && (
                      <div className="bg-secondary/50 rounded-lg p-3 mb-4">
                        <p className="text-xs font-semibold mb-1">Use Case:</p>
                        <p className="text-xs text-muted-foreground">
                          {integration.useCase}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Results Count */}
            <div className="text-center text-muted-foreground mb-12">
              Showing {filteredIntegrations.length} of {integrations.length}{" "}
              integrations
            </div>

            {/* Integration Capabilities */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Integration Capabilities
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card border border-border rounded-xl p-8">
                  <h3 className="text-xl font-bold mb-4">
                    API-First Architecture
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Raghunath Chava provides comprehensive REST and GraphQL APIs for all
                    entities and workflows. Every module exposes standardized
                    APIs that enable seamless integration.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>REST API with OpenAPI documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>GraphQL API for flexible queries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Full CRUD operations for all entities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Webhook support for real-time events</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-xl p-8">
                  <h3 className="text-xl font-bold mb-4">
                    Integration Platform (iPaaS)
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Built-in integration platform enables visual workflow
                    creation, connector management, and data transformation
                    without code.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Visual workflow builder for integrations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Pre-built connectors for popular platforms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Data transformation and mapping</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Error handling and retry logic</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Custom Integration */}
            <section className="mb-16">
              <div className="bg-gradient-to-br from-deepBlue/10 to-teal/10 border border-deepBlue/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">
                  Need a Custom Integration?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Don't see the integration you need? Raghunath Chava's comprehensive
                  APIs and webhook support make it easy to build custom
                  integrations. Our integration platform supports custom
                  connectors, or you can use our APIs directly.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://docs.saraise.com/api"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-deepBlue text-white rounded-lg font-semibold hover:bg-teal transition-colors"
                  >
                    View API Documentation
                  </a>
                  <Link
                    to="/company/contact?type=integration"
                    className="px-6 py-3 bg-card border border-border text-foreground rounded-lg font-semibold hover:shadow-md transition-shadow"
                  >
                    Request Custom Integration
                  </Link>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Integrate?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Connect Raghunath Chava with your existing tools and automate workflows.
                Get started with our comprehensive API documentation or request
                a demo to see integrations in action.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://docs.saraise.com/api"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-deepBlue text-white rounded-lg font-semibold hover:bg-teal transition-colors"
                >
                  API Documentation
                </a>
                <Link
                  to="/company/contact?type=demo"
                  className="px-6 py-3 bg-card border border-border text-foreground rounded-lg font-semibold hover:shadow-md transition-shadow"
                >
                  Request Demo
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

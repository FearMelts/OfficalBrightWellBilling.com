export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: "automation" | "analytics" | "integration" | "security" | "support";
  isPopular?: boolean;
  benefits: string[];
  technicalSpecs?: {
    apiEndpoints?: number;
    processingSpeed?: string;
    uptime?: string;
    scalability?: string;
  };
}

export const features: Feature[] = [
  {
    id: "automated-invoicing",
    title: "Automated Invoicing",
    description:
      "Generate and send professional invoices automatically based on your billing cycles and customer preferences.",
    icon: "FileText",
    category: "automation",
    isPopular: true,
    benefits: [
      "Reduce manual work by 80%",
      "Eliminate billing errors",
      "Faster payment collection",
      "Professional invoice templates",
      "Multi-currency support",
    ],
    technicalSpecs: {
      processingSpeed: "< 2 seconds",
      uptime: "99.9%",
      scalability: "Unlimited invoices",
    },
  },
  {
    id: "payment-processing",
    title: "Global Payment Processing",
    description:
      "Accept payments from customers worldwide with support for 150+ currencies and multiple payment methods.",
    icon: "CreditCard",
    category: "automation",
    isPopular: true,
    benefits: [
      "Accept 150+ currencies",
      "Multiple payment methods",
      "PCI DSS compliant",
      "Real-time fraud detection",
      "Instant settlement options",
    ],
    technicalSpecs: {
      processingSpeed: "< 1 second",
      uptime: "99.99%",
      scalability: "Enterprise-grade",
    },
  },
  {
    id: "recurring-billing",
    title: "Recurring Billing Engine",
    description:
      "Set up subscription billing that runs automatically, handling upgrades, downgrades, and proration.",
    icon: "RotateCcw",
    category: "automation",
    benefits: [
      "Automated subscription management",
      "Proration calculations",
      "Dunning management",
      "Customer self-service portal",
      "Revenue recognition",
    ],
    technicalSpecs: {
      processingSpeed: "< 5 seconds",
      uptime: "99.9%",
      scalability: "Millions of subscriptions",
    },
  },
  {
    id: "real-time-analytics",
    title: "Real-time Analytics",
    description:
      "Get instant insights into your revenue, customer behavior, and business performance with live dashboards.",
    icon: "BarChart3",
    category: "analytics",
    isPopular: true,
    benefits: [
      "Live revenue tracking",
      "Customer lifetime value",
      "Churn prediction",
      "Custom KPI dashboards",
      "Automated reporting",
    ],
    technicalSpecs: {
      apiEndpoints: 50,
      processingSpeed: "Real-time",
      uptime: "99.9%",
    },
  },
  {
    id: "revenue-forecasting",
    title: "AI-Powered Revenue Forecasting",
    description:
      "Predict future revenue with machine learning algorithms that analyze historical data and market trends.",
    icon: "TrendingUp",
    category: "analytics",
    benefits: [
      "Accurate revenue predictions",
      "Scenario planning",
      "Growth trend analysis",
      "Seasonal adjustments",
      "Confidence intervals",
    ],
    technicalSpecs: {
      processingSpeed: "< 10 seconds",
      scalability: "Enterprise datasets",
    },
  },
  {
    id: "tax-compliance",
    title: "Global Tax Compliance",
    description:
      "Automatically calculate and apply taxes based on customer location and local regulations worldwide.",
    icon: "Calculator",
    category: "automation",
    benefits: [
      "Automatic tax calculations",
      "Global tax compliance",
      "Real-time rate updates",
      "Tax reporting automation",
      "Audit trail maintenance",
    ],
    technicalSpecs: {
      processingSpeed: "< 1 second",
      uptime: "99.9%",
    },
  },
  {
    id: "api-integrations",
    title: "Seamless API Integrations",
    description:
      "Connect with over 500+ business tools and platforms through our comprehensive API ecosystem.",
    icon: "Zap",
    category: "integration",
    isPopular: true,
    benefits: [
      "500+ pre-built integrations",
      "RESTful API architecture",
      "Webhook support",
      "Real-time data sync",
      "Developer-friendly documentation",
    ],
    technicalSpecs: {
      apiEndpoints: 200,
      processingSpeed: "< 100ms",
      uptime: "99.99%",
    },
  },
  {
    id: "crm-integration",
    title: "CRM Integration Suite",
    description:
      "Sync customer data and billing information with popular CRM platforms like Salesforce, HubSpot, and more.",
    icon: "Users",
    category: "integration",
    benefits: [
      "Bi-directional data sync",
      "Customer lifecycle tracking",
      "Sales pipeline integration",
      "Lead-to-cash automation",
      "Custom field mapping",
    ],
    technicalSpecs: {
      processingSpeed: "< 2 seconds",
      uptime: "99.9%",
    },
  },
  {
    id: "enterprise-security",
    title: "Enterprise-Grade Security",
    description:
      "Protect your data with bank-level security, encryption, and compliance with industry standards.",
    icon: "Shield",
    category: "security",
    isPopular: true,
    benefits: [
      "SOC 2 Type II compliant",
      "End-to-end encryption",
      "Multi-factor authentication",
      "Role-based access control",
      "Regular security audits",
    ],
    technicalSpecs: {
      uptime: "99.99%",
      scalability: "Enterprise-grade",
    },
  },
  {
    id: "data-backup",
    title: "Automated Data Backup",
    description:
      "Never lose important billing data with automated backups and disaster recovery systems.",
    icon: "Database",
    category: "security",
    benefits: [
      "Real-time data backup",
      "Point-in-time recovery",
      "Geographic redundancy",
      "Automated disaster recovery",
      "99.99% data durability",
    ],
    technicalSpecs: {
      uptime: "99.99%",
      scalability: "Petabyte-scale",
    },
  },
  {
    id: "customer-portal",
    title: "Self-Service Customer Portal",
    description:
      "Empower customers to manage their accounts, view invoices, and update payment methods independently.",
    icon: "UserCheck",
    category: "support",
    benefits: [
      "Reduce support tickets by 60%",
      "Account self-management",
      "Invoice history access",
      "Payment method updates",
      "Subscription modifications",
    ],
    technicalSpecs: {
      processingSpeed: "< 1 second",
      uptime: "99.9%",
    },
  },
  {
    id: "247-support",
    title: "24/7 Expert Support",
    description:
      "Get help when you need it with round-the-clock support from billing experts and technical specialists.",
    icon: "Headphones",
    category: "support",
    isPopular: true,
    benefits: [
      "24/7 availability",
      "Expert billing consultants",
      "Multi-channel support",
      "Priority enterprise support",
      "Dedicated account managers",
    ],
    technicalSpecs: {
      uptime: "24/7/365",
    },
  },
  {
    id: "mobile-app",
    title: "Mobile Management App",
    description:
      "Manage your billing operations on the go with our native mobile apps for iOS and Android.",
    icon: "Smartphone",
    category: "support",
    benefits: [
      "Native iOS and Android apps",
      "Real-time notifications",
      "Offline data access",
      "Mobile invoice approval",
      "Customer communication tools",
    ],
    technicalSpecs: {
      processingSpeed: "< 2 seconds",
      uptime: "99.9%",
    },
  },
  {
    id: "white-label",
    title: "White-Label Solutions",
    description:
      "Customize the platform with your brand colors, logo, and domain for a seamless customer experience.",
    icon: "Palette",
    category: "integration",
    benefits: [
      "Complete brand customization",
      "Custom domain support",
      "Branded customer communications",
      "Custom CSS/styling",
      "API white-labeling",
    ],
    technicalSpecs: {
      scalability: "Multi-tenant architecture",
    },
  },
  {
    id: "dunning-management",
    title: "Smart Dunning Management",
    description:
      "Recover failed payments automatically with intelligent retry logic and customizable dunning campaigns.",
    icon: "RefreshCw",
    category: "automation",
    benefits: [
      "Automated payment retries",
      "Customizable dunning flows",
      "Customer communication templates",
      "Recovery rate optimization",
      "Detailed recovery analytics",
    ],
    technicalSpecs: {
      processingSpeed: "< 3 seconds",
      uptime: "99.9%",
    },
  },
];

export const featureCategories = [
  {
    id: "automation",
    name: "Automation",
    description:
      "Streamline your billing processes with intelligent automation",
    color: "blue",
  },
  {
    id: "analytics",
    name: "Analytics",
    description: "Make data-driven decisions with powerful insights",
    color: "green",
  },
  {
    id: "integration",
    name: "Integration",
    description: "Connect with your existing business tools seamlessly",
    color: "purple",
  },
  {
    id: "security",
    name: "Security",
    description: "Protect your data with enterprise-grade security",
    color: "red",
  },
  {
    id: "support",
    name: "Support",
    description: "Get the help you need, when you need it",
    color: "yellow",
  },
];

// Utility functions
export const getFeaturesByCategory = (category: Feature["category"]) => {
  return features.filter((feature) => feature.category === category);
};

export const getPopularFeatures = () => {
  return features.filter((feature) => feature.isPopular);
};

export const getFeatureById = (id: string) => {
  return features.find((feature) => feature.id === id);
};

export const searchFeatures = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return features.filter(
    (feature) =>
      feature.title.toLowerCase().includes(lowercaseQuery) ||
      feature.description.toLowerCase().includes(lowercaseQuery) ||
      feature.benefits.some((benefit) =>
        benefit.toLowerCase().includes(lowercaseQuery)
      )
  );
};

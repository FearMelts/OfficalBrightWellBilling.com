export interface Testimonial {
  id: string;
  name: string;
  company: string;
  position: string;
  avatar: string;
  content: string;
  rating: number;
  category: "automation" | "analytics" | "integration" | "support" | "general";
  isVideo?: boolean;
  videoUrl?: string;
  industryType:
    | "saas"
    | "ecommerce"
    | "healthcare"
    | "education"
    | "finance"
    | "manufacturing"
    | "nonprofit";
  companySize: "startup" | "small" | "medium" | "enterprise";
  useCases: string[];
  results: {
    metric: string;
    improvement: string;
    timeframe: string;
  }[];
  featured?: boolean;
  createdAt: string;
  location: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "sarah-johnson-techflow",
    name: "Sarah Johnson",
    company: "TechFlow Solutions",
    position: "Chief Financial Officer",
    avatar: "/testimonials/sarah-johnson.jpg",
    content:
      "BrightWell completely transformed our billing operations. What used to take our team 20 hours per week now happens automatically with perfect accuracy. The automated invoicing and payment processing have eliminated human errors and significantly improved our cash flow.",
    rating: 5,
    category: "automation",
    isVideo: true,
    videoUrl: "/testimonials/sarah-johnson-video.mp4",
    industryType: "saas",
    companySize: "medium",
    useCases: [
      "Automated Invoicing",
      "Payment Processing",
      "Recurring Billing",
    ],
    results: [
      {
        metric: "Manual Work Reduction",
        improvement: "75%",
        timeframe: "3 months",
      },
      {
        metric: "Billing Accuracy",
        improvement: "99.9%",
        timeframe: "Ongoing",
      },
      {
        metric: "Payment Collection Speed",
        improvement: "40% faster",
        timeframe: "6 months",
      },
    ],
    featured: true,
    createdAt: "2024-01-15",
    location: "San Francisco, CA",
  },
  {
    id: "michael-chen-cloudscale",
    name: "Michael Chen",
    company: "CloudScale Inc",
    position: "VP of Operations",
    avatar: "/testimonials/michael-chen.jpg",
    content:
      "The fraud detection capabilities saved us over $50,000 in the first quarter alone. The real-time processing and global payment support have been game-changers for our international expansion.",
    rating: 5,
    category: "automation",
    isVideo: true,
    videoUrl: "/testimonials/michael-chen-video.mp4",
    industryType: "saas",
    companySize: "enterprise",
    useCases: [
      "Global Payments",
      "Fraud Detection",
      "Multi-currency Processing",
    ],
    results: [
      {
        metric: "Fraud Prevention",
        improvement: "$50,000 saved",
        timeframe: "3 months",
      },
      {
        metric: "Transaction Speed",
        improvement: "2x faster",
        timeframe: "Immediate",
      },
      {
        metric: "Global Reach",
        improvement: "150+ countries",
        timeframe: "1 month",
      },
    ],
    featured: true,
    createdAt: "2024-02-08",
    location: "Seattle, WA",
  },
  {
    id: "emma-rodriguez-startuplabs",
    name: "Emma Rodriguez",
    company: "StartupLabs",
    position: "Founder & CEO",
    avatar: "/testimonials/emma-rodriguez.jpg",
    content:
      "As a startup, we needed a billing solution that could scale with us from day one. BrightWell's pricing model and feature set have been perfect. The analytics dashboard helps us make better business decisions.",
    rating: 5,
    category: "analytics",
    isVideo: true,
    videoUrl: "/testimonials/emma-rodriguez-video.mp4",
    industryType: "saas",
    companySize: "startup",
    useCases: ["Startup Billing", "Analytics Dashboard", "Scalable Pricing"],
    results: [
      {
        metric: "Setup Time",
        improvement: "2 hours",
        timeframe: "Day 1",
      },
      {
        metric: "Revenue Visibility",
        improvement: "100% real-time",
        timeframe: "Immediate",
      },
      {
        metric: "Customer Onboarding",
        improvement: "3x faster",
        timeframe: "2 months",
      },
    ],
    featured: true,
    createdAt: "2024-01-22",
    location: "Austin, TX",
  },
  {
    id: "david-kim-ecomgrowth",
    name: "David Kim",
    company: "EcomGrowth",
    position: "Head of Finance",
    avatar: "/testimonials/david-kim.jpg",
    content:
      "The integration with our existing e-commerce platform was seamless. Revenue forecasting has helped us plan inventory better, and the automated tax calculations have saved countless hours during tax season.",
    rating: 5,
    category: "integration",
    industryType: "ecommerce",
    companySize: "medium",
    useCases: [
      "E-commerce Integration",
      "Tax Automation",
      "Revenue Forecasting",
    ],
    results: [
      {
        metric: "Tax Compliance",
        improvement: "100% automated",
        timeframe: "1 week",
      },
      {
        metric: "Inventory Planning",
        improvement: "30% more accurate",
        timeframe: "3 months",
      },
      {
        metric: "Administrative Time",
        improvement: "60% reduction",
        timeframe: "2 months",
      },
    ],
    createdAt: "2024-02-14",
    location: "Los Angeles, CA",
  },
  {
    id: "lisa-wang-healthtech",
    name: "Dr. Lisa Wang",
    company: "HealthTech Innovations",
    position: "COO",
    avatar: "/testimonials/lisa-wang.jpg",
    content:
      "HIPAA compliance was critical for our healthcare platform. BrightWell's security features and audit trails have made our compliance reviews smooth. The customer portal has reduced patient billing inquiries by 70%.",
    rating: 5,
    category: "support",
    industryType: "healthcare",
    companySize: "medium",
    useCases: ["HIPAA Compliance", "Customer Portal", "Audit Trails"],
    results: [
      {
        metric: "Compliance Score",
        improvement: "100% HIPAA",
        timeframe: "1 month",
      },
      {
        metric: "Support Tickets",
        improvement: "70% reduction",
        timeframe: "2 months",
      },
      {
        metric: "Patient Satisfaction",
        improvement: "4.8/5 rating",
        timeframe: "3 months",
      },
    ],
    featured: true,
    createdAt: "2024-01-30",
    location: "Boston, MA",
  },
  {
    id: "james-wilson-educorp",
    name: "James Wilson",
    company: "EduCorp Learning",
    position: "Business Development Director",
    avatar: "/testimonials/james-wilson.jpg",
    content:
      "Managing tuition payments and course fees across multiple programs was complex. BrightWell's recurring billing engine handles everything automatically, and parents love the payment flexibility.",
    rating: 5,
    category: "automation",
    industryType: "education",
    companySize: "large",
    useCases: [
      "Tuition Management",
      "Recurring Billing",
      "Payment Flexibility",
    ],
    results: [
      {
        metric: "Payment Collection",
        improvement: "95% on-time",
        timeframe: "6 months",
      },
      {
        metric: "Administrative Overhead",
        improvement: "50% reduction",
        timeframe: "3 months",
      },
      {
        metric: "Parent Satisfaction",
        improvement: "4.7/5 rating",
        timeframe: "4 months",
      },
    ],
    createdAt: "2024-02-05",
    location: "Chicago, IL",
  },
  {
    id: "maria-garcia-fintech",
    name: "Maria Garcia",
    company: "FinTech Solutions",
    position: "Chief Technology Officer",
    avatar: "/testimonials/maria-garcia.jpg",
    content:
      "The API documentation is excellent, and the webhook system works flawlessly. We integrated BrightWell into our fintech platform in just two weeks. The real-time transaction monitoring is exactly what we needed.",
    rating: 5,
    category: "integration",
    industryType: "finance",
    companySize: "enterprise",
    useCases: ["API Integration", "Webhook System", "Real-time Monitoring"],
    results: [
      {
        metric: "Integration Time",
        improvement: "2 weeks",
        timeframe: "Implementation",
      },
      {
        metric: "API Response Time",
        improvement: "<100ms",
        timeframe: "Ongoing",
      },
      {
        metric: "Transaction Visibility",
        improvement: "100% real-time",
        timeframe: "Immediate",
      },
    ],
    createdAt: "2024-02-20",
    location: "New York, NY",
  },
  {
    id: "robert-smith-manufacturing",
    name: "Robert Smith",
    company: "Industrial Systems Co",
    position: "Finance Manager",
    avatar: "/testimonials/robert-smith.jpg",
    content:
      "B2B invoicing for industrial equipment requires precision. BrightWell's custom invoice templates and approval workflows have streamlined our complex billing processes. The analytics help us track profitability by project.",
    rating: 5,
    category: "analytics",
    industryType: "manufacturing",
    companySize: "large",
    useCases: ["B2B Invoicing", "Custom Templates", "Project Analytics"],
    results: [
      {
        metric: "Invoice Accuracy",
        improvement: "99.8%",
        timeframe: "4 months",
      },
      {
        metric: "Approval Time",
        improvement: "65% faster",
        timeframe: "2 months",
      },
      {
        metric: "Project Profitability Visibility",
        improvement: "100% tracked",
        timeframe: "1 month",
      },
    ],
    createdAt: "2024-01-18",
    location: "Detroit, MI",
  },
  {
    id: "jennifer-brown-nonprofit",
    name: "Jennifer Brown",
    company: "Community Care Foundation",
    position: "Operations Director",
    avatar: "/testimonials/jennifer-brown.jpg",
    content:
      "As a nonprofit, we needed affordable billing for donations and membership fees. BrightWell's nonprofit pricing and donor portal have made fundraising more efficient. The reporting helps with grant applications.",
    rating: 5,
    category: "support",
    industryType: "nonprofit",
    companySize: "small",
    useCases: ["Nonprofit Billing", "Donor Portal", "Grant Reporting"],
    results: [
      {
        metric: "Donation Processing",
        improvement: "90% automated",
        timeframe: "2 months",
      },
      {
        metric: "Donor Retention",
        improvement: "25% increase",
        timeframe: "6 months",
      },
      {
        metric: "Grant Reporting Time",
        improvement: "80% reduction",
        timeframe: "3 months",
      },
    ],
    createdAt: "2024-02-12",
    location: "Denver, CO",
  },
  {
    id: "alex-thompson-consultancy",
    name: "Alex Thompson",
    company: "Strategic Consultants Group",
    position: "Managing Partner",
    avatar: "/testimonials/alex-thompson.jpg",
    content:
      "Time tracking integration and project-based billing were exactly what our consultancy needed. Clients appreciate the detailed invoices, and we've reduced billing disputes to nearly zero.",
    rating: 5,
    category: "general",
    industryType: "saas",
    companySize: "small",
    useCases: ["Time Tracking", "Project Billing", "Detailed Invoicing"],
    results: [
      {
        metric: "Billing Disputes",
        improvement: "95% reduction",
        timeframe: "3 months",
      },
      {
        metric: "Invoice Detail",
        improvement: "100% transparency",
        timeframe: "Immediate",
      },
      {
        metric: "Client Satisfaction",
        improvement: "4.9/5 rating",
        timeframe: "4 months",
      },
    ],
    createdAt: "2024-01-25",
    location: "Portland, OR",
  },
];

// Utility functions
export const getTestimonialsByCategory = (
  category: Testimonial["category"]
) => {
  return testimonials.filter(
    (testimonial) => testimonial.category === category
  );
};

export const getFeaturedTestimonials = () => {
  return testimonials.filter((testimonial) => testimonial.featured);
};

export const getVideoTestimonials = () => {
  return testimonials.filter((testimonial) => testimonial.isVideo);
};

export const getTestimonialsByIndustry = (
  industry: Testimonial["industryType"]
) => {
  return testimonials.filter(
    (testimonial) => testimonial.industryType === industry
  );
};

export const getTestimonialsByCompanySize = (
  size: Testimonial["companySize"]
) => {
  return testimonials.filter((testimonial) => testimonial.companySize === size);
};

export const getTestimonialById = (id: string) => {
  return testimonials.find((testimonial) => testimonial.id === id);
};

export const getRandomTestimonials = (count: number = 3) => {
  const shuffled = [...testimonials].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const searchTestimonials = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return testimonials.filter(
    (testimonial) =>
      testimonial.name.toLowerCase().includes(lowercaseQuery) ||
      testimonial.company.toLowerCase().includes(lowercaseQuery) ||
      testimonial.content.toLowerCase().includes(lowercaseQuery) ||
      testimonial.useCases.some((useCase) =>
        useCase.toLowerCase().includes(lowercaseQuery)
      )
  );
};

// Industry and company size data
export const industries = [
  {
    id: "saas",
    name: "SaaS & Technology",
    count: testimonials.filter((t) => t.industryType === "saas").length,
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    count: testimonials.filter((t) => t.industryType === "ecommerce").length,
  },
  {
    id: "healthcare",
    name: "Healthcare",
    count: testimonials.filter((t) => t.industryType === "healthcare").length,
  },
  {
    id: "education",
    name: "Education",
    count: testimonials.filter((t) => t.industryType === "education").length,
  },
  {
    id: "finance",
    name: "Financial Services",
    count: testimonials.filter((t) => t.industryType === "finance").length,
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    count: testimonials.filter((t) => t.industryType === "manufacturing")
      .length,
  },
  {
    id: "nonprofit",
    name: "Non-profit",
    count: testimonials.filter((t) => t.industryType === "nonprofit").length,
  },
];

export const companySizes = [
  {
    id: "startup",
    name: "Startup (1-10 employees)",
    count: testimonials.filter((t) => t.companySize === "startup").length,
  },
  {
    id: "small",
    name: "Small (11-50 employees)",
    count: testimonials.filter((t) => t.companySize === "small").length,
  },
  {
    id: "medium",
    name: "Medium (51-200 employees)",
    count: testimonials.filter((t) => t.companySize === "medium").length,
  },
  {
    id: "enterprise",
    name: "Enterprise (200+ employees)",
    count: testimonials.filter((t) => t.companySize === "enterprise").length,
  },
];

export interface SEOConfig {
  siteName: string;
  siteUrl: string;
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  defaultKeywords: string[];
  defaultOgImage: string;
  twitterHandle: string;
  language: string;
  locale: string;
  themeColor: string;
}

export const seoConfig: SEOConfig = {
  siteName: "BrightWell Billing",
  siteUrl: "https://brightwell.com",
  defaultTitle: "BrightWell - Modern Billing Platform for Growing Businesses",
  titleTemplate: "%s | BrightWell",
  defaultDescription:
    "Automate your billing operations with BrightWell's intelligent platform. Handle subscriptions, payments, and revenue management with enterprise-grade security and real-time analytics.",
  defaultKeywords: [
    "billing software",
    "subscription billing",
    "automated billing",
    "payment processing",
    "revenue management",
    "SaaS billing",
    "recurring billing",
    "invoice automation",
    "payment analytics",
    "billing platform",
  ],
  defaultOgImage: "/og-image.jpg",
  twitterHandle: "@brightwellbilling",
  language: "en",
  locale: "en_US",
  themeColor: "#3b82f6",
};

export interface PageSEO {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  noindex?: boolean;
  nofollow?: boolean;
  schema?: Record<string, any>;
}

export function generateMetadata(pageSEO: PageSEO = {}) {
  const title = pageSEO.title
    ? seoConfig.titleTemplate.replace("%s", pageSEO.title)
    : seoConfig.defaultTitle;

  const description = pageSEO.description || seoConfig.defaultDescription;
  const keywords = [...seoConfig.defaultKeywords, ...(pageSEO.keywords || [])];
  const ogImage = pageSEO.ogImage || seoConfig.defaultOgImage;
  const canonicalUrl = pageSEO.canonicalUrl || seoConfig.siteUrl;

  return {
    title,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: "BrightWell Team" }],
    creator: "BrightWell",
    publisher: "BrightWell",
    robots: {
      index: !pageSEO.noindex,
      follow: !pageSEO.nofollow,
      googleBot: {
        index: !pageSEO.noindex,
        follow: !pageSEO.nofollow,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: pageSEO.ogType || "website",
      locale: seoConfig.locale,
      url: canonicalUrl,
      siteName: seoConfig.siteName,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: seoConfig.twitterHandle,
      site: seoConfig.twitterHandle,
    },
    alternates: {
      canonical: canonicalUrl,
    },
    other: {
      "theme-color": seoConfig.themeColor,
    },
  };
}

// Page-specific SEO configurations
export const pageSEOConfigs = {
  home: {
    title: "Modern Billing Platform for Growing Businesses",
    description:
      "Automate your billing operations with BrightWell's intelligent platform. Handle subscriptions, payments, and revenue management with enterprise-grade security.",
    keywords: [
      "billing automation",
      "subscription management",
      "payment processing",
      "revenue analytics",
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "BrightWell Billing Platform",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Modern billing platform for subscription and payment management",
      offers: {
        "@type": "Offer",
        price: "49",
        priceCurrency: "USD",
        priceValidUntil: "2024-12-31",
      },
    },
  },
  features: {
    title: "Powerful Billing Features & Automation Tools",
    description:
      "Discover BrightWell's comprehensive billing features including automated invoicing, payment processing, analytics, and more.",
    keywords: [
      "billing features",
      "automated invoicing",
      "payment automation",
      "billing analytics",
      "subscription tools",
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "BrightWell Features",
      description: "Comprehensive billing platform features",
    },
  },
  pricing: {
    title: "Transparent Pricing Plans - Start Free",
    description:
      "Choose the perfect BrightWell plan for your business. Start with our free tier and scale as you grow with transparent, predictable pricing.",
    keywords: [
      "billing pricing",
      "subscription plans",
      "free billing software",
      "transparent pricing",
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "BrightWell Billing Plans",
      description: "Flexible billing platform pricing options",
    },
  },
  about: {
    title: "About BrightWell - Simplifying Business Billing",
    description:
      "Learn about BrightWell's mission to simplify billing operations for growing businesses worldwide with innovative automation and analytics.",
    keywords: [
      "about brightwell",
      "billing company",
      "business automation",
      "fintech startup",
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "BrightWell",
      description: "Modern billing platform provider",
      url: "https://brightwell.com",
    },
  },
  contact: {
    title: "Contact BrightWell - Get Expert Billing Support",
    description:
      "Get in touch with BrightWell's billing experts. Contact us for demos, support, or questions about our billing platform.",
    keywords: [
      "contact brightwell",
      "billing support",
      "customer service",
      "sales demo",
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact BrightWell",
      description: "Get in touch with our billing experts",
    },
  },
  blog: {
    title: "Billing Insights & Best Practices Blog",
    description:
      "Stay updated with the latest billing trends, best practices, and insights from BrightWell's experts. Learn how to optimize your billing operations.",
    keywords: [
      "billing blog",
      "best practices",
      "billing insights",
      "subscription trends",
      "fintech news",
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "BrightWell Blog",
      description: "Billing insights and best practices",
    },
  },
};

// Schema.org structured data generators
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    logo: `${seoConfig.siteUrl}/logo.png`,
    description: seoConfig.defaultDescription,
    sameAs: [
      "https://twitter.com/brightwellbilling",
      "https://linkedin.com/company/brightwell",
      "https://github.com/brightwell",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-123-4567",
      contactType: "customer service",
      email: "support@brightwell.com",
    },
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    description: seoConfig.defaultDescription,
    potentialAction: {
      "@type": "SearchAction",
      target: `${seoConfig.siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateBreadcrumbSchema(
  breadcrumbs: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  author: string;
  publishedDate: string;
  modifiedDate?: string;
  image?: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: seoConfig.siteName,
      logo: {
        "@type": "ImageObject",
        url: `${seoConfig.siteUrl}/logo.png`,
      },
    },
    datePublished: article.publishedDate,
    dateModified: article.modifiedDate || article.publishedDate,
    image: article.image
      ? `${seoConfig.siteUrl}${article.image}`
      : seoConfig.defaultOgImage,
    url: article.url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url,
    },
  };
}

export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateProductSchema(product: {
  name: string;
  description: string;
  price: number;
  currency: string;
  availability: string;
  rating?: number;
  reviewCount?: number;
}) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: product.currency,
      availability: `https://schema.org/${product.availability}`,
      seller: {
        "@type": "Organization",
        name: seoConfig.siteName,
      },
    },
  };

  if (product.rating && product.reviewCount) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    };
  }

  return schema;
}

// SEO utility functions
export function generateCanonicalUrl(path: string): string {
  return `${seoConfig.siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function generateHreflangs(path: string, locales: string[] = ["en"]) {
  return locales.map((locale) => ({
    hreflang: locale,
    href: `${seoConfig.siteUrl}${locale === "en" ? "" : `/${locale}`}${path}`,
  }));
}

export function optimizeImageAlt(filename: string, context?: string): string {
  const baseName = filename.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
  const formatted = baseName.charAt(0).toUpperCase() + baseName.slice(1);

  return context ? `${formatted} - ${context}` : formatted;
}

// Performance and Core Web Vitals
export function generatePreloadLinks(
  resources: Array<{ href: string; as: string; type?: string }>
) {
  return resources.map((resource) => ({
    rel: "preload",
    href: resource.href,
    as: resource.as,
    type: resource.type,
  }));
}

export function generateDNSPrefetchLinks(domains: string[]) {
  return domains.map((domain) => ({
    rel: "dns-prefetch",
    href: domain,
  }));
}

// Social media metadata
export function generateTwitterCardMeta(card: {
  type: "summary" | "summary_large_image" | "app" | "player";
  title: string;
  description: string;
  image?: string;
}) {
  return {
    "twitter:card": card.type,
    "twitter:site": seoConfig.twitterHandle,
    "twitter:creator": seoConfig.twitterHandle,
    "twitter:title": card.title,
    "twitter:description": card.description,
    "twitter:image": card.image || seoConfig.defaultOgImage,
  };
}

export function generateOpenGraphMeta(og: {
  type: string;
  title: string;
  description: string;
  image?: string;
  url?: string;
}) {
  return {
    "og:type": og.type,
    "og:site_name": seoConfig.siteName,
    "og:title": og.title,
    "og:description": og.description,
    "og:image": og.image || seoConfig.defaultOgImage,
    "og:url": og.url || seoConfig.siteUrl,
    "og:locale": seoConfig.locale,
  };
}

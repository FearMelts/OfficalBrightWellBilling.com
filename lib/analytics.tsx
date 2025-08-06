"use client";

// Google Analytics 4 implementation
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export interface AnalyticsConfig {
  gaId?: string;
  enableDebugMode?: boolean;
  enableDevMode?: boolean;
  trackingConsent?: boolean;
}

export class AnalyticsManager {
  private static instance: AnalyticsManager;
  private config: AnalyticsConfig;
  private isInitialized = false;

  private constructor() {
    this.config = {
      gaId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
      enableDebugMode: process.env.NODE_ENV === "development",
      enableDevMode: process.env.NODE_ENV === "development",
      trackingConsent: false,
    };
  }

  static getInstance(): AnalyticsManager {
    if (!AnalyticsManager.instance) {
      AnalyticsManager.instance = new AnalyticsManager();
    }
    return AnalyticsManager.instance;
  }

  async initialize(): Promise<void> {
    if (this.isInitialized || typeof window === "undefined") {
      return;
    }

    try {
      // Initialize dataLayer
      window.dataLayer = window.dataLayer || [];

      // Load Google Analytics
      if (this.config.gaId) {
        await this.loadGoogleAnalytics();
      }

      // Configure tracking
      this.configureTracking();

      this.isInitialized = true;
      console.log("Analytics initialized successfully");
    } catch (error) {
      console.error("Failed to initialize analytics:", error);
    }
  }

  private async loadGoogleAnalytics(): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        // Create script element
        const script = document.createElement("script");
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${this.config.gaId}`;

        script.onload = () => {
          // Initialize gtag
          function gtag(...args: any[]) {
            window.dataLayer.push(args);
          }

          window.gtag = gtag;
          gtag("js", new Date());
          gtag("config", this.config.gaId, {
            debug_mode: this.config.enableDebugMode,
            send_page_view: false, // We'll handle page views manually
          });

          resolve();
        };

        script.onerror = () => {
          reject(new Error("Failed to load Google Analytics"));
        };

        document.head.appendChild(script);
      } catch (error) {
        reject(error);
      }
    });
  }

  private configureTracking(): void {
    // Track page views on route changes
    if (typeof window !== "undefined") {
      const handleRouteChange = () => {
        this.trackPageView(window.location.pathname + window.location.search);
      };

      // Listen for navigation events
      window.addEventListener("popstate", handleRouteChange);

      // Track initial page view
      this.trackPageView(window.location.pathname + window.location.search);
    }
  }

  setTrackingConsent(consent: boolean): void {
    this.config.trackingConsent = consent;

    if (window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: consent ? "granted" : "denied",
        ad_storage: consent ? "granted" : "denied",
      });
    }

    // Store consent preference
    localStorage.setItem("analytics_consent", consent.toString());
  }

  getTrackingConsent(): boolean {
    if (typeof window === "undefined") return false;

    const stored = localStorage.getItem("analytics_consent");
    return stored === "true";
  }

  trackPageView(page: string, title?: string): void {
    if (!this.isInitialized || !this.config.trackingConsent) return;

    try {
      if (window.gtag && this.config.gaId) {
        window.gtag("config", this.config.gaId, {
          page_path: page,
          page_title: title || document.title,
        });
      }

      // Custom page view tracking
      this.trackEvent("page_view", {
        page_path: page,
        page_title: title || document.title,
      });
    } catch (error) {
      console.error("Failed to track page view:", error);
    }
  }

  trackEvent(
    eventName: string,
    parameters: Record<string, any> = {},
    value?: number
  ): void {
    if (!this.isInitialized || !this.config.trackingConsent) return;

    try {
      // Google Analytics 4 event
      if (window.gtag) {
        window.gtag("event", eventName, {
          ...parameters,
          value,
        });
      }

      // Custom event tracking
      if (this.config.enableDebugMode) {
        console.log("Analytics Event:", { eventName, parameters, value });
      }
    } catch (error) {
      console.error("Failed to track event:", error);
    }
  }

  trackConversion(
    conversionName: string,
    value: number,
    currency = "USD"
  ): void {
    this.trackEvent("purchase", {
      transaction_id: `${conversionName}_${Date.now()}`,
      value,
      currency,
      items: [
        {
          item_id: conversionName,
          item_name: conversionName,
          category: "conversion",
          quantity: 1,
          price: value,
        },
      ],
    });
  }

  trackUserAction(action: string, category: string, label?: string): void {
    this.trackEvent("user_action", {
      action,
      category,
      label,
    });
  }

  identifyUser(userId: string, properties: Record<string, any> = {}): void {
    if (!this.isInitialized) return;

    try {
      if (window.gtag) {
        window.gtag("config", this.config.gaId, {
          user_id: userId,
          custom_map: properties,
        });
      }

      // Set user properties
      Object.entries(properties).forEach(([key, value]) => {
        if (window.gtag) {
          window.gtag("set", { [key]: value });
        }
      });
    } catch (error) {
      console.error("Failed to identify user:", error);
    }
  }

  trackPerformance(metric: string, value: number, unit = "ms"): void {
    this.trackEvent("performance_metric", {
      metric_name: metric,
      metric_value: value,
      metric_unit: unit,
    });
  }

  trackError(error: Error, context?: Record<string, any>): void {
    this.trackEvent("exception", {
      description: error.message,
      fatal: false,
      error_stack: error.stack,
      ...context,
    });
  }

  trackBusinessMetric(
    metric: string,
    value: number,
    category = "business"
  ): void {
    this.trackEvent("business_metric", {
      metric_name: metric,
      metric_value: value,
      metric_category: category,
    });
  }
}

// Business-specific tracking functions
export function trackBillingEvent(
  eventType:
    | "invoice_created"
    | "payment_processed"
    | "subscription_created"
    | "payment_failed",
  data: Record<string, any>
): void {
  const analytics = AnalyticsManager.getInstance();
  analytics.trackEvent(`billing_${eventType}`, {
    ...data,
    event_category: "billing",
  });
}

export function trackUserEngagement(
  action: "feature_used" | "page_visited" | "button_clicked" | "form_submitted",
  featureName: string,
  additionalData?: Record<string, any>
): void {
  const analytics = AnalyticsManager.getInstance();
  analytics.trackUserAction(action, "engagement", featureName);

  if (additionalData) {
    analytics.trackEvent("user_engagement", {
      action,
      feature: featureName,
      ...additionalData,
    });
  }
}

export function trackConversionFunnel(
  step: "awareness" | "interest" | "consideration" | "conversion" | "retention",
  source?: string,
  campaign?: string
): void {
  const analytics = AnalyticsManager.getInstance();
  analytics.trackEvent("funnel_step", {
    step,
    source,
    campaign,
    timestamp: Date.now(),
  });
}

export function trackFeatureAdoption(
  featureName: string,
  adopted: boolean,
  userSegment?: string
): void {
  const analytics = AnalyticsManager.getInstance();
  analytics.trackEvent("feature_adoption", {
    feature_name: featureName,
    adopted,
    user_segment: userSegment,
  });
}

// Conversion tracking for different goals
export function trackSignup(plan?: string, source?: string): void {
  const analytics = AnalyticsManager.getInstance();
  analytics.trackConversion("signup", 0);
  analytics.trackEvent("sign_up", {
    method: "email",
    plan,
    source,
  });
}

export function trackTrialStart(plan: string, trialDays: number): void {
  const analytics = AnalyticsManager.getInstance();
  analytics.trackEvent("trial_start", {
    plan,
    trial_days: trialDays,
    value: 0,
  });
}

export function trackPurchase(
  transactionId: string,
  value: number,
  plan: string,
  currency = "USD"
): void {
  const analytics = AnalyticsManager.getInstance();
  analytics.trackConversion("purchase", value, currency);
  analytics.trackEvent("purchase", {
    transaction_id: transactionId,
    value,
    currency,
    items: [
      {
        item_id: plan,
        item_name: `${plan} Plan`,
        category: "subscription",
        quantity: 1,
        price: value,
      },
    ],
  });
}

// Performance and technical metrics
export function trackWebVital(metric: string, value: number): void {
  const analytics = AnalyticsManager.getInstance();
  analytics.trackPerformance(metric, value);
}

export function trackAPICall(
  endpoint: string,
  method: string,
  responseTime: number,
  statusCode: number
): void {
  const analytics = AnalyticsManager.getInstance();
  analytics.trackEvent("api_call", {
    endpoint,
    method,
    response_time: responseTime,
    status_code: statusCode,
  });
}

// Consent management
export function initializeAnalyticsWithConsent(): void {
  const analytics = AnalyticsManager.getInstance();

  // Check for existing consent
  const hasConsent = analytics.getTrackingConsent();

  if (hasConsent) {
    analytics.setTrackingConsent(true);
    analytics.initialize();
  } else {
    // Show consent banner or modal
    showConsentBanner();
  }
}

function showConsentBanner(): void {
  // This would typically integrate with a consent management platform
  console.log("Show analytics consent banner");
}

// Export singleton instance
export const analytics = AnalyticsManager.getInstance();

// Initialize analytics (call this in your app initialization)
export async function initAnalytics(): Promise<void> {
  if (typeof window !== "undefined") {
    initializeAnalyticsWithConsent();
  }
}

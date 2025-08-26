"use client";

interface PerformanceMetrics {
  bundleSize: number;
  loadTime: number;
  renderTime: number;
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  cls: number; // Cumulative Layout Shift
  fid: number; // First Input Delay
}

class PerformanceMonitor {
  private metrics: Partial<PerformanceMetrics> = {};
  private observers: Map<string, PerformanceObserver> = new Map();

  constructor() {
    if (typeof window !== 'undefined') {
      this.initializeObservers();
      this.trackPageLoad();
    }
  }

  private initializeObservers() {
    // Core Web Vitals monitoring
    this.observeWebVitals();
    
    // Resource loading monitoring
    this.observeResourceTimings();
    
    // Long task monitoring
    this.observeLongTasks();
  }

  private observeWebVitals() {
    // First Contentful Paint
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            this.metrics.fcp = entry.startTime;
            this.reportMetric('FCP', entry.startTime);
          }
        });
      });
      
      observer.observe({ entryTypes: ['paint'] });
      this.observers.set('paint', observer);
    }

    // Largest Contentful Paint
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.lcp = lastEntry.startTime;
        this.reportMetric('LCP', lastEntry.startTime);
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.set('lcp', observer);
    }

    // Cumulative Layout Shift
    if ('PerformanceObserver' in window) {
      let cumulativeScore = 0;
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            cumulativeScore += (entry as any).value;
          }
        }
        this.metrics.cls = cumulativeScore;
        this.reportMetric('CLS', cumulativeScore);
      });
      
      observer.observe({ entryTypes: ['layout-shift'] });
      this.observers.set('cls', observer);
    }

    // First Input Delay
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          this.metrics.fid = (entry as any).processingStart - entry.startTime;
          this.reportMetric('FID', this.metrics.fid);
        });
      });
      
      observer.observe({ entryTypes: ['first-input'] });
      this.observers.set('fid', observer);
    }
  }

  private observeResourceTimings() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const resource = entry as PerformanceResourceTiming;
          
          // Track bundle sizes
          if (resource.name.includes('.js') || resource.name.includes('.css')) {
            const size = resource.transferSize || resource.encodedBodySize || 0;
            this.trackBundleSize(resource.name, size);
          }
          
          // Track slow resources
          const loadTime = resource.responseEnd - resource.requestStart;
          if (loadTime > 1000) { // More than 1 second
            console.warn(`Slow resource detected: ${resource.name} (${loadTime}ms)`);
          }
        });
      });
      
      observer.observe({ entryTypes: ['resource'] });
      this.observers.set('resource', observer);
    }
  }

  private observeLongTasks() {
    if ('PerformanceObserver' in window && 'PerformanceLongTaskTiming' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          console.warn(`Long task detected: ${entry.duration}ms`, entry);
          this.reportMetric('LongTask', entry.duration);
        });
      });
      
      observer.observe({ entryTypes: ['longtask'] });
      this.observers.set('longtask', observer);
    }
  }

  private trackPageLoad() {
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        // Track total page load time
        const loadTime = performance.now();
        this.metrics.loadTime = loadTime;
        this.reportMetric('PageLoad', loadTime);
        
        // Track navigation timing
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const metrics = {
            dns: navigation.domainLookupEnd - navigation.domainLookupStart,
            tcp: navigation.connectEnd - navigation.connectStart,
            ttfb: navigation.responseStart - navigation.requestStart,
            download: navigation.responseEnd - navigation.responseStart,
            domParse: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          };
          
          console.log('Navigation Timing:', metrics);
        }
      });
    }
  }

  private trackBundleSize(resource: string, size: number) {
    this.metrics.bundleSize = (this.metrics.bundleSize || 0) + size;
    console.log(`Bundle size update: ${resource} = ${(size / 1024).toFixed(2)}KB`);
  }

  private reportMetric(name: string, value: number) {
    // Report to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`Performance Metric - ${name}: ${value.toFixed(2)}ms`);
    }
    
    // In production, you could send to analytics service
    if (process.env.NODE_ENV === 'production') {
      // Example: Send to Google Analytics, DataDog, etc.
      this.sendToAnalytics(name, value);
    }
  }

  private sendToAnalytics(name: string, value: number) {
    // Example implementation for sending metrics to analytics
    if (typeof gtag !== 'undefined') {
      // Google Analytics 4
      gtag('event', 'performance_metric', {
        metric_name: name,
        metric_value: value,
        custom_parameter: 'brightwell_billing'
      });
    }
    
    // Or send to custom analytics endpoint
    if (navigator.sendBeacon) {
      const data = JSON.stringify({
        metric: name,
        value: value,
        timestamp: Date.now(),
        url: window.location.href,
        userAgent: navigator.userAgent
      });
      
      navigator.sendBeacon('/api/analytics/performance', data);
    }
  }

  public getMetrics(): Partial<PerformanceMetrics> {
    return { ...this.metrics };
  }

  public trackComponentRender(componentName: string, renderTime: number) {
    console.log(`Component Render - ${componentName}: ${renderTime.toFixed(2)}ms`);
    this.reportMetric(`ComponentRender_${componentName}`, renderTime);
  }

  public trackUserInteraction(action: string, duration: number) {
    this.reportMetric(`UserInteraction_${action}`, duration);
  }

  public getPerformanceGrade(): 'A' | 'B' | 'C' | 'D' | 'F' {
    const { fcp, lcp, cls, fid } = this.metrics;
    
    let score = 0;
    
    // FCP scoring (good: <1.8s, needs improvement: 1.8-3s, poor: >3s)
    if (fcp && fcp < 1800) score += 25;
    else if (fcp && fcp < 3000) score += 15;
    else score += 0;
    
    // LCP scoring (good: <2.5s, needs improvement: 2.5-4s, poor: >4s)
    if (lcp && lcp < 2500) score += 25;
    else if (lcp && lcp < 4000) score += 15;
    else score += 0;
    
    // CLS scoring (good: <0.1, needs improvement: 0.1-0.25, poor: >0.25)
    if (cls !== undefined && cls < 0.1) score += 25;
    else if (cls !== undefined && cls < 0.25) score += 15;
    else score += 0;
    
    // FID scoring (good: <100ms, needs improvement: 100-300ms, poor: >300ms)
    if (fid && fid < 100) score += 25;
    else if (fid && fid < 300) score += 15;
    else score += 0;
    
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  }

  public generateReport(): string {
    const grade = this.getPerformanceGrade();
    const metrics = this.getMetrics();
    
    return `
Performance Report:
Grade: ${grade}
---
First Contentful Paint: ${metrics.fcp?.toFixed(2) || 'N/A'}ms
Largest Contentful Paint: ${metrics.lcp?.toFixed(2) || 'N/A'}ms
Cumulative Layout Shift: ${metrics.cls?.toFixed(3) || 'N/A'}
First Input Delay: ${metrics.fid?.toFixed(2) || 'N/A'}ms
Total Bundle Size: ${metrics.bundleSize ? (metrics.bundleSize / 1024).toFixed(2) : 'N/A'}KB
Page Load Time: ${metrics.loadTime?.toFixed(2) || 'N/A'}ms
    `.trim();
  }

  public destroy() {
    // Clean up observers
    this.observers.forEach((observer) => {
      observer.disconnect();
    });
    this.observers.clear();
  }
}

// Singleton instance
let performanceMonitor: PerformanceMonitor | null = null;

export function getPerformanceMonitor(): PerformanceMonitor {
  if (!performanceMonitor && typeof window !== 'undefined') {
    performanceMonitor = new PerformanceMonitor();
  }
  return performanceMonitor!;
}

// React hook for component performance tracking
export function usePerformanceTracking(componentName: string) {
  const monitor = getPerformanceMonitor();
  
  return {
    trackRender: (renderTime: number) => {
      monitor?.trackComponentRender(componentName, renderTime);
    },
    trackInteraction: (action: string, duration: number) => {
      monitor?.trackUserInteraction(action, duration);
    }
  };
}

// Higher-order component for automatic performance tracking
export function withPerformanceTracking<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  componentName: string
) {
  return function PerformanceTrackedComponent(props: P) {
    const startTime = performance.now();
    
    React.useEffect(() => {
      const renderTime = performance.now() - startTime;
      getPerformanceMonitor()?.trackComponentRender(componentName, renderTime);
    }, []);
    
    return React.createElement(WrappedComponent, props);
  };
}

export default PerformanceMonitor;
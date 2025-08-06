"Use client";

import { debounce, throttle } from "lodash";
import React, { memo, startTransition, useCallback, useEffect, useMemo, useState } from "react";
import "./ultimateOptimization.css";

// Performance monitoring utilities
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number[]> = new Map();

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  startMeasure(name: string): void {
    if (typeof window !== "undefined" && window.performance) {
      performance.mark(`${name}-start`);
    }
  }

  endMeasure(name: string): number {
    if (typeof window !== "undefined" && window.performance) {
      performance.mark(`${name}-end`);
      performance.measure(name, `${name}-start`, `${name}-end`);

      const measure = performance.getEntriesByName(name, "measure")[0];
      const duration = measure.duration;

      // Store metric
      if (!this.metrics.has(name)) {
        this.metrics.set(name, []);
      }
      this.metrics.get(name)?.push(duration);

      return duration;
    }
    return 0;
  }

  getAverageTime(name: string): number {
    const times = this.metrics.get(name);
    if (!times || times.length === 0) return 0;

    return times.reduce((sum, time) => sum + time, 0) / times.length;
  }

  clearMetrics(): void {
    this.metrics.clear();
    if (typeof window !== "undefined" && window.performance) {
      performance.clearMarks();
      performance.clearMeasures();
    }
  }

  getMetrics(): Record<
    string,
    { average: number; count: number; latest: number }
  > {
    const results: Record<
      string,
      { average: number; count: number; latest: number }
    > = {};

    for (const [name, times] of this.metrics.entries()) {
      results[name] = {
        average: this.getAverageTime(name),
        count: times.length,
        latest: times[times.length - 1] || 0,
      };
    }

    return results;
  }
}

// Higher-order component for performance measurement
export function withPerformanceMonitoring<P extends object>(
  Component: React.ComponentType<P>,
  componentName: string
) {
  const WrappedComponent = memo(function PerformanceWrapper(props: P) {
    const monitor = PerformanceMonitor.getInstance();

    useMemo(() => {
      monitor.startMeasure(`${componentName}-render`);
    }, [monitor]);

    useCallback(() => {
      monitor.endMeasure(`${componentName}-render`);
    }, [monitor]);

    return <Component {...props} />;
  });

  WrappedComponent.displayName = `WithPerformanceMonitoring(${componentName})`;
  return WrappedComponent;
}

// Virtual scrolling for large lists
export function VirtualizedList<T>({
  items,
  itemHeight,
  containerHeight,
  renderItem,
  overscan = 5,
}: Readonly<{
  items: T[];
  itemHeight: number;
  containerHeight: number;
  renderItem: (item: T, index: number) => React.ReactNode;
  overscan?: number;
}>) {
  const [scrollTop, setScrollTop] = useState(0);

  const visibleRange = useMemo(() => {
    const start = Math.floor(scrollTop / itemHeight);
    const end = Math.min(
      start + Math.ceil(containerHeight / itemHeight),
      items.length - 1
    );

    return {
      start: Math.max(0, start - overscan),
      end: Math.min(items.length - 1, end + overscan),
    };
  }, [scrollTop, itemHeight, containerHeight, items.length, overscan]);

  const handleScroll = useCallback(
    throttle((e: React.UIEvent<HTMLDivElement>) => {
      setScrollTop(e.currentTarget.scrollTop);
    }, 16), // ~60fps
    []
  );

  const totalHeight = items.length * itemHeight;
  const offsetY = visibleRange.start * itemHeight;

  return (
    <div
      className="virtualized-list-container"
      style={{ height: containerHeight, overflow: "auto" }}
      onScroll={handleScroll}
    >
      <div
        className="virtualized-list-phantom"
        style={{ height: totalHeight, position: "relative" }}
      >
        <div
          className="virtualized-list-offset"
          style={{ transform: `translateY(${offsetY}px)` }}
        >
          {items
            .slice(visibleRange.start, visibleRange.end + 1)
            .map((item, index) => (
              <div
                key={visibleRange.start + index}
                className="virtualized-list-item"
                style={{ height: itemHeight }}
              >
                {renderItem(item, visibleRange.start + index)}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

// Optimized search with debouncing
export function useOptimizedSearch<T>(
  items: T[],
  searchFields: (keyof T)[],
  delay: number = 300
) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<T[]>(items);

  const debouncedSearch = useMemo(
    () =>
      debounce((searchQuery: string) => {
        if (!searchQuery.trim()) {
          setResults(items);
          return;
        }

        const filtered = items.filter((item) =>
          searchFields.some((field) => {
            const value = item[field];
            return (
              typeof value === "string" &&
              value.toLowerCase().includes(searchQuery.toLowerCase())
            );
          })
        );

        setResults(filtered);
      }, delay),
    [items, searchFields, delay]
  );

  useEffect(() => {
    debouncedSearch(query);
    return () => {
      debouncedSearch.cancel();
    };
  }, [query, debouncedSearch]);

  return {
    query,
    setQuery,
    results,
    isSearching: query.trim() !== "",
  };
}

// Code splitting with priority loading
export class ComponentLoader {
  private static readonly cache = new Map<string, Promise<any>>();
  private static readonly priorities = new Map<string, number>();

  static setPriority(componentName: string, priority: number): void {
    this.priorities.set(componentName, priority);
  }

  static async loadComponent(componentName: string): Promise<any> {
    if (this.cache.has(componentName)) {
      return this.cache.get(componentName);
    }

    const priority = this.priorities.get(componentName) || 0;

    // High priority components load immediately
    const loadPromise =
      priority > 5
        ? this.loadImmediate(componentName)
        : this.loadDeferred(componentName);

    this.cache.set(componentName, loadPromise);
    return loadPromise;
  }

  private static loadImmediate(componentName: string): Promise<any> {
    return import(`@/components/${componentName}`);
  }

  private static loadDeferred(componentName: string): Promise<any> {
    return new Promise((resolve) => {
      // Use requestIdleCallback if available, otherwise setTimeout
      if (typeof window !== "undefined" && "requestIdleCallback" in window) {
        window.requestIdleCallback(() => {
          import(`@/components/${componentName}`).then(resolve);
        });
      } else {
        setTimeout(() => {
          import(`@/components/${componentName}`).then(resolve);
        }, 0);
      }
    });
  }
}

// Memoized component factory
export function createMemoizedComponent<P extends object>(
  Component: React.ComponentType<P>,
  arePropsEqual?: (prevProps: P, nextProps: P) => boolean
) {
  return memo(Component, arePropsEqual);
}

// Bundle analyzer helper
export function analyzeBundleSize(): void {
  if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
    console.group("Bundle Analysis");

    // Analyze dynamic imports
    const dynamicImports = document.querySelectorAll('script[src*="chunks"]');
    console.log(`Dynamic chunks loaded: ${dynamicImports.length}`);

    // Analyze performance entries
    const navigationEntries = performance.getEntriesByType("navigation");
    if (navigationEntries.length > 0) {
      const nav = navigationEntries[0] as PerformanceNavigationTiming;
      console.log(
        `DOM Content Loaded: ${nav.domContentLoadedEventEnd - nav.domContentLoadedEventStart}ms`
      );
      console.log(`Load Event: ${nav.loadEventEnd - nav.loadEventStart}ms`);
    }

    console.groupEnd();
  }
}

// Web Vitals monitoring
export function measureWebVitals() {
  if (typeof window === "undefined") return;

  // Measure Largest Contentful Paint (LCP)
  new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1];
    console.log("LCP:", lastEntry.startTime);
  }).observe({ entryTypes: ["largest-contentful-paint"] });

  // Measure First Input Delay (FID)
  new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry) => {
      // Narrow type to PerformanceEventTiming for FID
      const eventEntry = entry as PerformanceEventTiming;
      console.log("FID:", eventEntry.processingStart - eventEntry.startTime);
    });
  }).observe({ entryTypes: ["first-input"] });

  // Measure Cumulative Layout Shift (CLS)
  let clsValue = 0;
  new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry: any) => {
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
      }
    });
    console.log("CLS:", clsValue);
  }).observe({ entryTypes: ["layout-shift"] });
}

// Resource loading optimization
export class ResourceOptimizer {
  private static readonly preloadedResources = new Set<string>();

  static preloadResource(
    href: string,
    type: "image" | "font" | "script" | "style"
  ): void {
    if (typeof window === "undefined" || this.preloadedResources.has(href)) {
      return;
    }

    const link = document.createElement("link");
    link.rel = "preload";
    link.href = href;
    link.as = type;

    if (type === "font") {
      link.crossOrigin = "anonymous";
    }

    document.head.appendChild(link);
    this.preloadedResources.add(href);
  }

  static prefetchResource(href: string): void {
    if (typeof window === "undefined" || this.preloadedResources.has(href)) {
      return;
    }

    const link = document.createElement("link");
    link.rel = "prefetch";
    link.href = href;

    document.head.appendChild(link);
    this.preloadedResources.add(href);
  }

  static preconnectOrigin(origin: string): void {
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = origin;
    document.head.appendChild(link);
  }
}

// Memory usage monitoring
export function monitorMemoryUsage(): void {
  if (typeof window === "undefined" || !("memory" in performance)) {
    return;
  }

  const memory = (performance as any).memory;
  console.log({
    usedJSHeapSize: `${(memory.usedJSHeapSize / 1048576).toFixed(2)} MB`,
    totalJSHeapSize: `${(memory.totalJSHeapSize / 1048576).toFixed(2)} MB`,
    jsHeapSizeLimit: `${(memory.jsHeapSizeLimit / 1048576).toFixed(2)} MB`,
  });
}

// CPU-intensive task optimization
export function runInBackground<T>(
  task: () => T,
  priority: "immediate" | "normal" | "low" = "normal"
): Promise<T> {
  return new Promise((resolve) => {
    const execute = () => {
      startTransition(() => {
        const result = task();
        resolve(result);
      });
    };

    switch (priority) {
      case "immediate":
        execute();
        break;
      case "normal":
        setTimeout(execute, 0);
        break;
      case "low":
        if (typeof window !== "undefined" && "requestIdleCallback" in window) {
          window.requestIdleCallback(() => execute());
        } else {
          setTimeout(execute, 100);
        }
        break;
    }
  });
}

// Export performance monitoring instance
export const performanceMonitor = PerformanceMonitor.getInstance();

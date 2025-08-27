"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ComponentType, ReactNode, Suspense, lazy, useEffect, useRef, useState } from "react";

// Generic loading component
export function LoadingSpinner({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <div className="flex items-center justify-center p-4">
      <motion.div
        className={`${sizeClasses[size]} border-2 border-primary/30 border-t-primary rounded-full`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

// Enhanced loading skeleton
export function LoadingSkeleton({
  width = "100%",
  height = "20px",
  className = "",
  variant = "rectangular",
}: {
  width?: string;
  height?: string;
  className?: string;
  variant?: "rectangular" | "circular" | "text";
}) {
  const baseClasses = "bg-muted animate-pulse";
  const variantClasses = {
    rectangular: "rounded-lg",
    circular: "rounded-full",
    text: "rounded",
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{ width, height }}
    />
  );
}

// Component-specific loading states
export function CardSkeleton() {
  return (
    <div className="bg-card rounded-xl p-6 border border-border">
      <LoadingSkeleton height="24px" width="60%" className="mb-4" />
      <LoadingSkeleton height="16px" width="100%" className="mb-2" />
      <LoadingSkeleton height="16px" width="80%" className="mb-4" />
      <div className="flex space-x-2">
        <LoadingSkeleton height="32px" width="80px" />
        <LoadingSkeleton height="32px" width="60px" />
      </div>
    </div>
  );
}

export function TableSkeleton() {
  return (
    <div className="space-y-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex space-x-4">
          <LoadingSkeleton height="40px" width="200px" />
          <LoadingSkeleton height="40px" width="150px" />
          <LoadingSkeleton height="40px" width="100px" />
          <LoadingSkeleton height="40px" width="80px" />
        </div>
      ))}
    </div>
  );
}

// Higher-order component for lazy loading with error boundary
export function withLazyLoading<P extends object>(
  importFunc: () => Promise<{ default: ComponentType<P> }>,
  fallback: ReactNode = <LoadingSpinner />,
  errorFallback: ReactNode = (
    <div className="text-red-500">Failed to load component</div>
  )
) {
  const LazyComponent = lazy(importFunc);

  return function LazyLoadedComponent(props: P) {
    return (
      <Suspense fallback={fallback}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
}

// Optimized lazy loaded components with better chunking
export const LazyChart = dynamic(
  () =>
    import("@/components/analytics/Chart").then((mod) => ({
      default: mod.Chart,
    })),
  {
    loading: () => <LoadingSkeleton height="300px" />,
    ssr: false,
  }
);

export const LazyVideoPlayer = dynamic(
  () =>
    import("@/components/VideoTestimonials"),
  {
    loading: () => <CardSkeleton />,
    ssr: false,
  }
);

export const LazyDataTable = dynamic(
  () =>
    import("@/components/DataTable"),
  {
    loading: () => <TableSkeleton />,
    ssr: false,
  }
);

export const LazyModernAnimations = dynamic(
  () =>
    import("@/components/ModernAnimations"),
  {
    loading: () => <LoadingSkeleton height="400px" />,
    ssr: false,
  }
);

export const LazyParticleBackground = dynamic(
  () =>
    import("@/components/ParticleBackground"),
  {
    loading: () => (
      <div className="absolute inset-0 bg-gradient-to-b from-background to-accent/5" />
    ),
    ssr: false,
  }
);

// Optimized Three.js components (heavy dependencies)
export const LazyThreeJSComponent = dynamic(
  () =>
    import("@/components/ThreeJSComponent"),
  {
    loading: () => <LoadingSkeleton height="500px" />,
    ssr: false,
  }
);

// Enhanced Intersection Observer for better performance
export function useIntersectionObserver(
  elementRef: React.RefObject<Element>,
  options: IntersectionObserverInit = {}
) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        setIsIntersecting(isVisible);
        
        // Once intersected, keep it loaded
        if (isVisible && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "100px", // Increased for better UX
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
  }, [elementRef, hasIntersected, options]);

  return { isIntersecting, hasIntersected };
}

// Lazy load content on scroll with preloading
export function LazyLoadOnScroll({
  children,
  fallback = <LoadingSpinner />,
  className = "",
  preload = false,
}: {
  children: ReactNode;
  fallback?: ReactNode;
  className?: string;
  preload?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { isIntersecting, hasIntersected } = useIntersectionObserver(ref);

  return (
    <div ref={ref} className={className}>
      {(isIntersecting || hasIntersected || preload) ? children : fallback}
    </div>
  );
}

// Progressive image loading with WebP optimization
export function ProgressiveImage({
  src,
  alt,
  width,
  height,
  className = "",
  placeholder = "blur",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  placeholder?: "blur" | "empty";
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Generate WebP version if not already WebP
  const webpSrc = src.endsWith('.webp') ? src : src.replace(/\.(jpg|jpeg|png)$/i, '.webp');

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && !error && (
        <LoadingSkeleton
          width={`${width}px`}
          height={`${height}px`}
          className="absolute inset-0"
        />
      )}

      {error ? (
        <div
          className="flex items-center justify-center bg-muted text-muted-foreground"
          style={{ width, height }}
        >
          Failed to load image
        </div>
      ) : (
        <picture>
          <source srcSet={webpSrc} type="image/webp" />
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`transition-opacity duration-300 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setIsLoaded(true)}
            onError={() => setError(true)}
            loading="lazy"
          />
        </picture>
      )}
    </div>
  );
}

// Bundle splitting utility with preloading
export function createLazyComponent<T extends ComponentType<any>>(
  componentPath: string,
  componentName?: string,
  preload = false
) {
  const LazyComponent = dynamic(
    () =>
      import(componentPath).then((mod) => ({
        default: componentName ? mod[componentName] : mod.default,
      })),
    {
      loading: () => <LoadingSpinner />,
      ssr: false,
    }
  );

  if (preload && typeof window !== 'undefined') {
    // Preload on interaction
    const handleInteraction = () => {
      import(componentPath);
      document.removeEventListener('mouseover', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };
    
    document.addEventListener('mouseover', handleInteraction, { passive: true });
    document.addEventListener('touchstart', handleInteraction, { passive: true });
  }

  return LazyComponent;
}

// Pre-load critical components with user interaction hints
export function preloadComponent(importFunc: () => Promise<any>) {
  if (typeof window !== "undefined") {
    let preloaded = false;
    
    const preload = () => {
      if (!preloaded) {
        preloaded = true;
        importFunc();
        cleanup();
      }
    };

    const cleanup = () => {
      document.removeEventListener("mouseover", preload);
      document.removeEventListener("touchstart", preload);
      document.removeEventListener("focus", preload);
    };

    // Multiple triggers for better UX
    document.addEventListener("mouseover", preload, { passive: true, once: true });
    document.addEventListener("touchstart", preload, { passive: true, once: true });
    document.addEventListener("focus", preload, { passive: true, once: true });
    
    // Auto cleanup after 10 seconds
    setTimeout(cleanup, 10000);
  }
}

// Enhanced component registry with categories
const componentRegistry: Record<string, {
  importer: () => Promise<any>;
  category: 'heavy' | 'medium' | 'light';
  preload?: boolean;
}> = {
  ContactForm: {
    importer: () => import("@/components/ContactForm"),
    category: 'medium'
  },
  VideoTestimonials: {
    importer: () => import("@/components/VideoTestimonials"),
    category: 'heavy'
  },
  ModernAnimations: {
    importer: () => import("@/components/ModernAnimations"),
    category: 'heavy'
  },
  ParticleBackground: {
    importer: () => import("@/components/ParticleBackground"),
    category: 'heavy'
  },
  ServicePages: {
    importer: () => import("@/components/ServicePages"),
    category: 'heavy'
  },
  ThreeJSComponent: {
    importer: () => import("@/components/ThreeJSComponent"),
    category: 'heavy'
  },
};

export function getDynamicComponent(componentName: string) {
  const component = componentRegistry[componentName];
  if (!component) {
    throw new Error(`Component "${componentName}" not found in registry`);
  }

  const LazyComponent = dynamic(
    () =>
      component.importer().then((mod) => ({
        default: mod.default || mod[componentName],
      })),
    {
      loading: () => <LoadingSpinner size={component.category === 'heavy' ? 'lg' : 'md'} />,
      ssr: false,
    }
  );

  // Preload heavy components on interaction
  if (component.category === 'heavy') {
    preloadComponent(component.importer);
  }

  return LazyComponent;
}

// Resource preloading utilities
export function preloadResources() {
  if (typeof window !== 'undefined') {
    // Preload critical CSS for animations
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = '/animations.css';
    document.head.appendChild(link);
    
    // Preload critical fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href = '/fonts/inter-var.woff2';
    fontLink.as = 'font';
    fontLink.type = 'font/woff2';
    fontLink.crossOrigin = 'anonymous';
    document.head.appendChild(fontLink);
  }
}

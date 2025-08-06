"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ComponentType, ReactNode, Suspense, lazy } from "react";

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

// Pre-configured lazy loaded components
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
    import("@/components/VideoTestimonials").then((mod) => ({
      default: mod.VideoTestimonials,
    })),
  {
    loading: () => <CardSkeleton />,
    ssr: false,
  }
);

export const LazyDataTable = dynamic(
  () =>
    import("@/components/DataTable").then((mod) => ({
      default: mod.DataTable,
    })),
  {
    loading: () => <TableSkeleton />,
    ssr: false,
  }
);

export const LazyModernAnimations = dynamic(
  () =>
    import("@/components/ModernAnimations").then((mod) => ({
      default: mod.ModernAnimations,
    })),
  {
    loading: () => <LoadingSkeleton height="400px" />,
    ssr: false,
  }
);

export const LazyParticleBackground = dynamic(
  () =>
    import("@/components/ParticleBackground").then((mod) => ({
      default: mod.ParticleBackground,
    })),
  {
    loading: () => (
      <div className="absolute inset-0 bg-gradient-to-b from-background to-accent/5" />
    ),
    ssr: false,
  }
);

// Intersection Observer for lazy loading on scroll
export function useIntersectionObserver(
  elementRef: React.RefObject<Element>,
  options: IntersectionObserverInit = {}
) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
  }, [elementRef, options]);

  return isIntersecting;
}

// Lazy load content on scroll
export function LazyLoadOnScroll({
  children,
  fallback = <LoadingSpinner />,
  className = "",
}: {
  children: ReactNode;
  fallback?: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(ref);

  return (
    <div ref={ref} className={className}>
      {isIntersecting ? children : fallback}
    </div>
  );
}

// Progressive image loading
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
      )}
    </div>
  );
}

// Bundle splitting utility
export function createLazyComponent<T extends ComponentType<any>>(
  componentPath: string,
  componentName?: string
) {
  return dynamic(
    () =>
      import(componentPath).then((mod) => ({
        default: componentName ? mod[componentName] : mod.default,
      })),
    {
      loading: () => <LoadingSpinner />,
      ssr: false,
    }
  );
}

// Pre-load critical components
export function preloadComponent(importFunc: () => Promise<any>) {
  if (typeof window !== "undefined") {
    // Preload on user interaction
    const preload = () => {
      importFunc();
      document.removeEventListener("mouseover", preload);
      document.removeEventListener("touchstart", preload);
    };

    document.addEventListener("mouseover", preload);
    document.addEventListener("touchstart", preload);
  }
}

// Component registry for dynamic loading
const componentRegistry: Record<string, () => Promise<any>> = {
  ContactForm: () => import("@/components/ContactForm"),
  VideoTestimonials: () => import("@/components/VideoTestimonials"),
  ModernAnimations: () => import("@/components/ModernAnimations"),
  ParticleBackground: () => import("@/components/ParticleBackground"),
  ServicePages: () => import("@/components/ServicePages"),
};

export function getDynamicComponent(componentName: string) {
  const importFunc = componentRegistry[componentName];
  if (!importFunc) {
    throw new Error(`Component "${componentName}" not found in registry`);
  }

  return dynamic(
    () =>
      importFunc().then((mod) => ({
        default: mod.default || mod[componentName],
      })),
    {
      loading: () => <LoadingSpinner />,
      ssr: false,
    }
  );
}

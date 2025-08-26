import { Variants } from "framer-motion";

// Optimized easing curves for better performance
const EASING = {
  smooth: [0.4, 0, 0.2, 1], // Cubic bezier for smooth animations
  spring: [0.6, -0.05, 0.01, 0.99], // Optimized spring
  bounce: [0.68, -0.55, 0.265, 1.55], // Subtle bounce
} as const;

// Reduced duration for better performance
const DURATIONS = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.7,
} as const;

export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 30, // Reduced from 60
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATIONS.normal,
      ease: EASING.smooth,
    },
  },
};

export const fadeInLeft: Variants = {
  initial: {
    opacity: 0,
    x: -30, // Reduced from -60
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DURATIONS.normal,
      ease: EASING.smooth,
    },
  },
};

export const fadeInRight: Variants = {
  initial: {
    opacity: 0,
    x: 30, // Reduced from 60
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DURATIONS.normal,
      ease: EASING.smooth,
    },
  },
};

export const scaleIn: Variants = {
  initial: {
    opacity: 0,
    scale: 0.9, // Less dramatic scaling
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: DURATIONS.fast,
      ease: EASING.smooth,
    },
  },
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05, // Reduced from 0.1
      delayChildren: 0.05, // Reduced from 0.1
    },
  },
};

export const slideInFromBottom: Variants = {
  initial: {
    opacity: 0,
    y: 50, // Reduced from 100
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATIONS.normal,
      ease: EASING.smooth,
    },
  },
};

export const rotateIn: Variants = {
  initial: {
    opacity: 0,
    rotate: -5, // Reduced from -10
    scale: 0.95, // Less dramatic scaling
  },
  animate: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      duration: DURATIONS.fast,
      ease: EASING.smooth,
    },
  },
};

export const morphAnimation: Variants = {
  initial: {
    pathLength: 0,
    opacity: 0,
  },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.5, ease: EASING.smooth }, // Reduced from 2
      opacity: { duration: 0.3 }, // Reduced from 0.5
    },
  },
};

export const pageTransition = {
  initial: {
    opacity: 0,
    scale: 0.98, // Less dramatic scaling
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: DURATIONS.fast,
      ease: EASING.smooth,
    },
  },
  exit: {
    opacity: 0,
    scale: 1.02, // Less dramatic scaling
    transition: {
      duration: 0.2, // Faster exit
      ease: EASING.smooth,
    },
  },
};

export const hoverScale = {
  scale: 1.02, // Reduced from 1.05
  transition: {
    duration: 0.15, // Faster hover
    ease: EASING.smooth,
  },
};

export const tapScale = {
  scale: 0.98, // Reduced from 0.95
  transition: {
    duration: 0.1, // Even faster tap
    ease: EASING.smooth,
  },
};

// New optimized variants for performance
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: DURATIONS.fast, ease: EASING.smooth }
  },
};

export const slideIn: Variants = {
  initial: { x: -20, opacity: 0 },
  animate: { 
    x: 0, 
    opacity: 1,
    transition: { duration: DURATIONS.fast, ease: EASING.smooth }
  },
};

export const quickScale: Variants = {
  initial: { scale: 0.95, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.2, ease: EASING.smooth }
  },
};

// Optimized stagger for lists
export const listContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.03, // Very fast stagger
    },
  },
};

export const listItem: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3, ease: EASING.smooth }
  },
};

// Performance-focused variants for heavy components
export const heavyComponentEntry: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { 
      duration: 0.2, // Very fast for heavy components
      ease: "linear" // Linear is most performant
    }
  },
};

// Utility for conditional animations based on reduced motion preference
export const respectsReducedMotion = (variants: Variants): Variants => {
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return {
      initial: variants.animate,
      animate: variants.animate,
    };
  }
  return variants;
};

// Animation controls for performance monitoring
export const createOptimizedVariant = (
  baseVariant: Variants,
  performanceMode: 'high' | 'balanced' | 'low' = 'balanced'
): Variants => {
  const durationMultiplier = {
    high: 0.5,
    balanced: 1,
    low: 1.5,
  }[performanceMode];

  const modifiedVariant: Variants = { ...baseVariant };
  
  Object.keys(modifiedVariant).forEach(key => {
    const state = modifiedVariant[key];
    if (state && typeof state === 'object' && 'transition' in state) {
      const transition = state.transition as any;
      if (transition && typeof transition === 'object') {
        if ('duration' in transition) {
          transition.duration = transition.duration * durationMultiplier;
        }
        if ('staggerChildren' in transition) {
          transition.staggerChildren = transition.staggerChildren * durationMultiplier;
        }
      }
    }
  });

  return modifiedVariant;
};

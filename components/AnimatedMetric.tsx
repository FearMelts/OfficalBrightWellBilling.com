"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedMetricProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedMetric({
  value,
  label,
  prefix = "",
  suffix = "",
  duration = 2,
  className = "",
}: Readonly<AnimatedMetricProps>) {
  const [isVisible, setIsVisible] = useState(false);
  const spring = useSpring(0, { stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) => {
    if (current < 1) return `${prefix}0${suffix}`;
    return `${prefix}${Math.floor(current).toLocaleString()}${suffix}`;
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(
      `metric-${label.replace(/\s+/g, "-")}`
    );
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [label]);

  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => {
        spring.set(value);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [isVisible, value, spring]);

  return (
    <motion.div
      id={`metric-${label.replace(/\s+/g, "-")}`}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={
        isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
      }
      transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
      className={`text-center ${className}`}
    >
      <motion.div
        className="text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.span>{display}</motion.span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-sm md:text-base text-muted-foreground font-medium"
      >
        {label}
      </motion.p>

      {/* Animated background glow */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={
          isVisible ? { scale: 1, opacity: 0.1 } : { scale: 0, opacity: 0 }
        }
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl blur-2xl -z-10"
      />
    </motion.div>
  );
}

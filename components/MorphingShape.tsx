"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const morphingPaths = [
  "M20,20 Q50,10 80,20 T140,20 Q170,30 200,20 T280,20 Q310,10 340,20",
  "M20,40 Q50,20 80,40 T140,40 Q170,50 200,40 T280,40 Q310,20 340,40",
  "M20,30 Q50,50 80,30 T140,30 Q170,10 200,30 T280,30 Q310,50 340,30",
  "M20,35 Q50,15 80,35 T140,35 Q170,45 200,35 T280,35 Q310,25 340,35",
];

export function MorphingShape() {
  const [currentPath, setCurrentPath] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPath((prev) => (prev + 1) % morphingPaths.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-32 overflow-hidden">
      <svg
        width="360"
        height="80"
        viewBox="0 0 360 80"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <linearGradient id="morphGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>

        <motion.path
          d={morphingPaths[currentPath]}
          stroke="url(#morphGradient)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={false}
          animate={{ d: morphingPaths[currentPath] }}
          transition={{
            duration: 1.5,
            ease: [0.645, 0.045, 0.355, 1],
          }}
        />

        {/* Animated dots along the path */}
        {[0, 0.25, 0.5, 0.75, 1].map((offset) => (
          <motion.circle
            key={offset}
            r="3"
            fill="url(#morphGradient)"
            initial={{ pathOffset: offset }}
            animate={{ pathOffset: offset }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <animateMotion
              dur="4s"
              repeatCount="indefinite"
              begin={`${offset * 0.8}s`}
            >
              <mpath href={`#path-${currentPath}`} />
            </animateMotion>
          </motion.circle>
        ))}

        {/* Hidden paths for motion */}
        {morphingPaths.map((path, index) => (
          <path key={path} id={`path-${index}`} d={path} className="hidden" />
        ))}
      </svg>

      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-cyan-500/10 blur-xl"></div>
    </div>
  );
}

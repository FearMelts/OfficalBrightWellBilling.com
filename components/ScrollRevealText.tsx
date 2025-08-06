"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function ScrollRevealText({
  text,
  className = "",
  delay = 0,
}: Readonly<ScrollRevealTextProps>) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  const words = text.split(" ");

  return (
    <div className={className}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          animate={
            isVisible
              ? { opacity: 1, y: 0, rotateX: 0 }
              : { opacity: 0, y: 50, rotateX: -90 }
          }
          transition={{
            duration: 0.8,
            delay: index * 0.1,
            ease: [0.215, 0.61, 0.355, 1],
          }}
          className="inline-block mr-2 transform-gpu"
          style={
            {
              transform: "perspective(1000px)",
              transformOrigin: "50% 100%",
            } as any
          }
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

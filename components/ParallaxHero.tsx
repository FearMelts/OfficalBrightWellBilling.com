// components/ParallaxHero.tsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ParallaxHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <motion.div ref={ref} style={{ y }}>
      {/* Hero content */}
    </motion.div>
  );
}

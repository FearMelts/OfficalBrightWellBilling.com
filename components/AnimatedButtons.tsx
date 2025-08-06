"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Play } from "lucide-react";

export function AnimatedButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <motion.button
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{ scale: 0.95 }}
        className="group bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center space-x-2 shadow-lg relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <span className="relative z-10">Start Free Trial</span>
        <motion.div
          className="relative z-10"
          animate={{ x: [0, 4, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <ArrowRight className="w-5 h-5" />
        </motion.div>
      </motion.button>

      <motion.button
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{ scale: 0.95 }}
        className="group bg-secondary/50 backdrop-blur-sm text-foreground px-8 py-4 rounded-xl font-semibold border border-border/50 hover:border-primary/50 transition-all duration-300 flex items-center space-x-2"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <Play className="w-5 h-5 text-primary" />
        </motion.div>
        <span>Watch Demo</span>
      </motion.button>

      <motion.button
        whileHover={{
          scale: 1.05,
          rotate: [0, -5, 5, 0],
        }}
        whileTap={{ scale: 0.95 }}
        className="hidden md:flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-300"
      >
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <Download className="w-5 h-5" />
        </motion.div>
        <span>Download Brochure</span>
      </motion.button>
    </div>
  );
}

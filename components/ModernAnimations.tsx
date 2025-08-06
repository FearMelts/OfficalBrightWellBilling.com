"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function ModernAnimations() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-accent/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 brightwell-gradient bg-clip-text text-transparent">
            Modern Animation Showcase
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience cutting-edge animations that bring your interface to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Morphing Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              transition: { duration: 0.3 },
            }}
            className="group bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-primary/20 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <motion.div
              variants={floatingVariants}
              animate="float"
              className="relative z-10"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl mb-4" />
              <h3 className="text-xl font-semibold mb-3">Morphing Elements</h3>
              <p className="text-muted-foreground">
                Smooth shape transformations and fluid transitions
              </p>
            </motion.div>
          </motion.div>

          {/* Particle System */}
          <motion.div
            variants={itemVariants}
            className="group bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-primary/20 transition-all duration-300 relative overflow-hidden"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 180 }}
              transition={{ duration: 0.5 }}
              className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl mb-4 relative"
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={`particle-{i}`}
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{
                    scale: 1,
                    opacity: 1,
                    x: Math.cos((i * 60 * Math.PI) / 180) * 30,
                    y: Math.sin((i * 60 * Math.PI) / 180) * 30,
                  }}
                  transition={{ delay: i * 0.1 }}
                  className="absolute top-1/2 left-1/2 w-2 h-2 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2"
                />
              ))}
            </motion.div>
            <h3 className="text-xl font-semibold mb-3">Particle Systems</h3>
            <p className="text-muted-foreground">
              Dynamic particle interactions and physics
            </p>
          </motion.div>

          {/* Wave Animation */}
          <motion.div
            variants={itemVariants}
            className="group bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-primary/20 transition-all duration-300 relative overflow-hidden"
          >
            <div className="w-12 h-12 mb-4 relative">
              {Array.from({ length: 4 }).map((_, i) => (
                <motion.div
                  key={`wave-{i}`}
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [1, 0, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-xl"
                />
              ))}
            </div>
            <h3 className="text-xl font-semibold mb-3">Wave Animations</h3>
            <p className="text-muted-foreground">
              Ripple effects and wave propagation
            </p>
          </motion.div>

          {/* 3D Transform */}
          <motion.div
            variants={itemVariants}
            whileHover={{
              rotateX: 15,
              rotateY: 15,
              scale: 1.05,
            }}
            transition={{ duration: 0.3 }}
            className="group bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-primary/20 transition-all duration-300 relative"
            style={{ transformPerspective: "preserve-3d" }}
          >
            <motion.div
              whileHover={{ z: 50 }}
              className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-3">3D Transforms</h3>
            <p className="text-muted-foreground">
              Depth and perspective animations
            </p>
          </motion.div>

          {/* Magnetic Effect */}
          <motion.div
            variants={itemVariants}
            whileHover="magnetize"
            className="group bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-primary/20 transition-all duration-300 relative cursor-pointer"
          >
            <motion.div
              variants={{
                magnetize: {
                  x: [0, 10, -10, 0],
                  y: [0, -5, 5, 0],
                  transition: { duration: 0.5 },
                },
              }}
              className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-3">Magnetic Effects</h3>
            <p className="text-muted-foreground">Interactive hover magnetism</p>
          </motion.div>

          {/* Elastic Animation */}
          <motion.div
            variants={itemVariants}
            whileHover={{
              scale: 1.1,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 10,
              },
            }}
            className="group bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-primary/20 transition-all duration-300 relative"
          >
            <motion.div
              whileHover={{
                scale: [1, 1.2, 0.9, 1.1, 1],
                rotate: [0, 10, -10, 5, 0],
              }}
              transition={{ duration: 0.8 }}
              className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-3">Elastic Springs</h3>
            <p className="text-muted-foreground">
              Bouncy spring-based animations
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface ParticleBackgroundProps {
  disabled?: boolean;
  maxParticles?: number;
  enableConnections?: boolean;
}

export function ParticleBackground({ 
  disabled = false, 
  maxParticles = 50, // Reduced default from 100
  enableConnections = true 
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLowPerformanceDevice, setIsLowPerformanceDevice] = useState(false);

  // Detect low performance devices
  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isSlowDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
    const hasLowMemory = (navigator as any).deviceMemory && (navigator as any).deviceMemory < 4;
    
    setIsLowPerformanceDevice(isMobile || isSlowDevice || hasLowMemory);
  }, []);

  useEffect(() => {
    if (disabled || isLowPerformanceDevice) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const particles: Particle[] = [];
    let lastTime = 0;
    const targetFPS = 30; // Reduced from 60 for better performance
    const frameInterval = 1000 / targetFPS;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      life: number;
      maxLife: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * 0.3; // Reduced speed
        this.vy = (Math.random() - 0.5) * 0.3;
        this.size = Math.random() * 1.5 + 0.5; // Smaller particles
        this.opacity = Math.random() * 0.4 + 0.1; // Reduced opacity
        this.color = Math.random() > 0.5 ? "#8b5cf6" : "#06b6d4";
        this.maxLife = 300 + Math.random() * 200; // Particle lifetime
        this.life = 0;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life++;

        // Fade out over lifetime
        this.opacity = Math.max(0, (1 - this.life / this.maxLife) * 0.4);

        // Bounce off edges
        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;

        // Keep particles in bounds
        this.x = Math.max(0, Math.min(canvas!.width, this.x));
        this.y = Math.max(0, Math.min(canvas!.height, this.y));
      }

      draw() {
        if (this.opacity <= 0) return;
        
        ctx!.save();
        ctx!.globalAlpha = this.opacity;
        ctx!.fillStyle = this.color;
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.restore();
      }

      isDead() {
        return this.life >= this.maxLife;
      }
    }

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // Limit DPR for performance
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      
      ctx.scale(dpr, dpr);
    };

    const initParticles = () => {
      particles.length = 0;
      const particleCount = Math.min(
        maxParticles,
        Math.floor((canvas.width * canvas.height) / 20000) // Increased divisor for fewer particles
      );

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const drawConnections = (
      particles: Particle[],
      ctx: CanvasRenderingContext2D
    ) => {
      if (!enableConnections) return;

      // Limit connections for performance
      const maxConnections = Math.min(particles.length, 20);
      
      for (let i = 0; i < maxConnections; i++) {
        const particle = particles[i];
        if (particle.opacity <= 0) continue;

        for (let j = i + 1; j < Math.min(i + 5, particles.length); j++) { // Limit inner loop
          const otherParticle = particles[j];
          if (otherParticle.opacity <= 0) continue;

          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          drawConnectionIfClose(particle, otherParticle, distance, ctx);
        }
      }
    };

    const drawConnectionIfClose = (
      p1: Particle,
      p2: Particle,
      distance: number,
      ctx: CanvasRenderingContext2D
    ) => {
      if (distance < 100) { // Reduced connection distance
        ctx.save();
        ctx.globalAlpha = Math.min(p1.opacity, p2.opacity) * ((100 - distance) / 100) * 0.05; // Reduced opacity
        ctx.strokeStyle = "#8b5cf6";
        ctx.lineWidth = 0.5; // Thinner lines
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
        ctx.restore();
      }
    };

    const animate = (currentTime: number) => {
      if (currentTime - lastTime < frameInterval) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }
      lastTime = currentTime;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        particle.update();
        
        if (particle.isDead()) {
          particles.splice(i, 1);
        } else {
          particle.draw();
        }
      }

      // Add new particles to maintain count
      while (particles.length < Math.min(maxParticles, 30)) {
        particles.push(new Particle());
      }

      // Draw connections with performance throttling
      if (enableConnections && particles.length > 5) {
        drawConnections(particles, ctx);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate(0);

    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
        animate(0);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [disabled, isLowPerformanceDevice, maxParticles, enableConnections]);

  // Don't render on low performance devices or when disabled
  if (disabled || isLowPerformanceDevice) {
    return (
      <div 
        className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-background via-background/80 to-accent/5"
        style={{ mixBlendMode: "screen" } as React.CSSProperties}
      />
    );
  }

  return (
    <motion.canvas
      ref={canvasRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }} // Reduced from 2
      className="fixed inset-0 pointer-events-none z-0"
      style={{ 
        mixBlendMode: "screen",
        willChange: "auto" // Remove will-change for better performance
      } as React.CSSProperties}
    />
  );
}

export default ParticleBackground;

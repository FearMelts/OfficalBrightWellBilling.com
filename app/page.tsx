"use client";

/**
 * BrightWell Billing - Complete Homepage with All Components
 * Professional medical billing platform with dark theme and comprehensive sections
 * Optimized for performance with lazy loading and code splitting
 */
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Award,
  BarChart3,
  CheckCircle,
  CreditCard,
  FileText,
  Headphones,
  Lock,
  Shield,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import dynamic from "next/dynamic";
import React, { useRef } from "react";
import dynamic from "next/dynamic";
import { LazyLoadOnScroll } from "@/lib/performance/lazyLoading";

});


const LazyContactForm = dynamic(() => import("../components/ContactForm").then(mod => ({ default: mod.ContactForm })), {
  loading: () => <div className="h-96 bg-card/50 animate-pulse rounded-xl" />,
  ssr: false,
});

const LazyServicePages = dynamic(() => import("../components/ServicePages").then(mod => ({ default: mod.ServicePages })), {
  loading: () => <div className="h-96 bg-card/50 animate-pulse rounded-xl" />,
  ssr: false,
});

const LazyVideoTestimonials = dynamic(() => import("../components/VideoTestimonials").then(mod => ({ default: mod.VideoTestimonials })), {
  loading: () => <div className="h-96 bg-card/50 animate-pulse rounded-xl" />,
  ssr: false,
});

// Optimized motion variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 }, // Reduced from 30
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Reduced from 0.8
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Reduced from 0.2
      delayChildren: 0.1, // Reduced from 0.3
    },
  },
};

const scaleOnHover = {
  hover: {
    scale: 1.02, // Reduced from 1.05
    transition: { duration: 0.2 },
  },
};

const slideIn = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

/**
 * Data interfaces for type safety
 */
interface Stat {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface Testimonial {
  name: string;
  quote: string;
  position: string;
  company: string;
  rating: number;
}

/**
 * Static data for components
 */
const stats: Stat[] = [
  { label: "Claims Processed", value: "25M+", icon: FileText },
  { label: "Providers Served", value: "5,000+", icon: Users },
  { label: "Revenue Increase", value: "45%", icon: TrendingUp },
  { label: "Claim Success Rate", value: "98.5%", icon: CheckCircle },
];

const features: Feature[] = [
  {
    title: "Streamlined Billing",
    description:
      "Efficient processes to ensure timely and accurate billing with automated workflows and real-time tracking.",
    icon: Zap,
  },
  {
    title: "Compliance Assurance",
    description:
      "Stay compliant with the latest healthcare regulations including HIPAA, ICD-10, and billing standards.",
    icon: Shield,
  },
  {
    title: "Revenue Optimization",
    description:
      "Advanced analytics and reporting to maximize your revenue potential and minimize claim denials.",
    icon: BarChart3,
  },
  {
    title: "Seamless Integration",
    description:
      "Easy integration with existing practice management systems and EHR platforms for smooth operations.",
    icon: CreditCard,
  },
  {
    title: "Dedicated Support",
    description:
      "Expert support team available 24/7 to handle all your billing inquiries and provide personalized assistance.",
    icon: Headphones,
  },
  {
    title: "Data Security",
    description:
      "Bank-level security measures to protect sensitive patient information and ensure complete data privacy.",
    icon: Lock,
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Dr. Sarah Johnson",
    quote:
      "BrightWell transformed our billing process completely. Our revenue increased by 40% in just 3 months, and our staff can now focus on patient care instead of paperwork.",
    position: "Chief Medical Officer",
    company: "Metro Health Group",
    rating: 5,
  },
  {
    name: "Michael Chen",
    quote:
      "The automation and accuracy we gained with BrightWell allowed us to expand our practice without hiring additional billing staff. It's been a game-changer.",
    position: "Practice Manager",
    company: "Sunrise Family Practice",
    rating: 5,
  },
  {
    name: "Dr. Emily Rodriguez",
    quote:
      "Our denial rate dropped to less than 2% since partnering with BrightWell. The accuracy and speed of their billing process is outstanding.",
    position: "Medical Director",
    company: "Advanced Care Clinic",
    rating: 5,
  },
];

/**
 * Reusable AnimatedCounter component
 */
const AnimatedCounter = ({ value }: { value: string }) => {
  return <span className="text-3xl font-bold text-white">{value}</span>;
};

/**
 * Main homepage component with optimized performance
 */
export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ y, opacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            BrightWell Billing
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Advanced billing system with cutting-edge animations and performance optimization for modern businesses.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.button
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold flex items-center gap-2 hover:bg-primary/90 transition-colors"
              variants={fadeInUp}
              whileHover={scaleOnHover.hover}
              whileTap={{ scale: 0.98 }}
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              className="px-8 py-4 border border-border rounded-lg font-semibold hover:bg-accent transition-colors"
              variants={fadeInUp}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="py-20 px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to streamline your billing process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors"
                variants={fadeInUp}
                whileHover={scaleOnHover.hover}
                custom={index}
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}

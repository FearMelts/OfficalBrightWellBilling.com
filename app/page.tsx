/**
 * BrightWell Billing - Complete Homepage with All Components
 * Professional medical billing platform with dark theme and comprehensive sections
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
import React, { useRef } from "react";

// Import all components
import { BlogSection } from "../components/BlogSection";
import { ContactForm } from "../components/ContactForm";
import { ServicePages } from "../components/ServicePages";
import { VideoTestimonials } from "../components/VideoTestimonials";

/**
 * Animation variants for consistent motion design
 */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const scaleOnHover = {
  hover: {
    scale: 1.05,
    y: -5,
    transition: { duration: 0.3 },
  },
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
 * Main Home component for BrightWell medical billing platform
 */
export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-900">
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">BrightWell</span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                Home
              </a>
              <a
                href="#solutions"
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                Solutions
              </a>
              <a
                href="#services"
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                Services
              </a>
              <a
                href="#testimonials"
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#insights"
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                Insights
              </a>
              <a
                href="#contact"
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                Contact
              </a>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-lg font-semibold"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-24 pb-16 px-4 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600">
                Illuminate Your
              </span>
              <br />
              <span className="text-white">Medical Revenue</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              Transform your healthcare practice with automated billing
              processes, revenue optimization strategies, and unwavering
              commitment to regulatory compliance. Focus on patient care while
              we handle your finances.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl text-lg font-semibold border border-slate-600"
              >
                Schedule Demo
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <AnimatedCounter value={stat.value} />
                <div className="text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive medical billing services designed to optimize your
              revenue cycle and streamline your practice operations.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                whileHover={scaleOnHover}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Pages Component */}
      <section id="services">
        <ServicePages />
      </section>

      {/* Video Testimonials Component */}
      <section id="testimonials">
        <VideoTestimonials />
      </section>

      {/* Analytics & Compliance Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Analytics
              </span>{" "}
              & Compliance
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Stay ahead with cutting-edge analytics and maintain the highest
              security and compliance standards.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Enterprise-Grade Security
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">
                    HIPAA Compliant Infrastructure
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">
                    SOC 2 Type II Certified
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">
                    ICD-10/11 Coding Standards
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">Bank-Level Encryption</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <div className="bg-slate-700/50 p-4 rounded-xl border border-slate-600">
                <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-sm text-slate-300">HIPAA</div>
              </div>
              <div className="bg-slate-700/50 p-4 rounded-xl border border-slate-600">
                <Award className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-sm text-slate-300">SOC 2</div>
              </div>
              <div className="bg-slate-700/50 p-4 rounded-xl border border-slate-600">
                <Lock className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-sm text-slate-300">AES-256</div>
              </div>
              <div className="bg-slate-700/50 p-4 rounded-xl border border-slate-600">
                <FileText className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-sm text-slate-300">ICD-11</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Client{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Reviews
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Hear from healthcare providers who have transformed their
              practices with BrightWell's medical billing solutions.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.name}
                variants={fadeInUp}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-slate-400">
                    {testimonial.position}, {testimonial.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Section Component */}
      <section id="insights">
        <BlogSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get In{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Touch
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to transform your medical billing? Contact us today for a
              free consultation and discover how we can optimize your revenue
              cycle.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            ></motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-900 border-t border-slate-700">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">BrightWell</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Empowering healthcare providers to focus on patient care while
                we expertly manage all billing and financial processes.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a
                  href="#home"
                  className="block text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Home
                </a>
                <a
                  href="#solutions"
                  className="block text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Solutions
                </a>
                <a
                  href="#services"
                  className="block text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Services
                </a>
                <a
                  href="#testimonials"
                  className="block text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Testimonials
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <div className="space-y-2">
                <div className="text-slate-400">Medical Billing</div>
                <div className="text-slate-400">Revenue Optimization</div>
                <div className="text-slate-400">Compliance Assurance</div>
                <div className="text-slate-400">24/7 Support</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2">
                <div className="text-slate-400">1-800-BILLING</div>
                <div className="text-slate-400">hello@brightwell.com</div>
                <div className="text-slate-400">24/7 Support Available</div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-700 text-center text-slate-500">
            <p>
              &copy; 2024 BrightWell Billing. All rights reserved. | HIPAA
              Compliant | SOC 2 Certified
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client";

import { fadeInUp, staggerContainer } from "@/lib/motionConfig";
import { motion } from "framer-motion";
import { BarChart, Clock, Rocket, Shield, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Process thousands of transactions per second with sub-millisecond response times.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-grade encryption and compliance with SOC 2, GDPR, and PCI DSS standards.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Rocket,
    title: "Advanced Analytics",
    description:
      "Real-time insights and predictive analytics to optimize your billing strategy.",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Seamless collaboration tools for your finance and operations teams.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: BarChart,
    title: "Revenue Optimization",
    description:
      "AI-powered recommendations to maximize revenue and reduce churn.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Clock,
    title: "Automated Workflows",
    description:
      "Intelligent automation for invoicing, reminders, and payment processing.",
    color: "from-indigo-500 to-purple-500",
  },
];

export function FeatureGrid() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-accent/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-6 brightwell-gradient bg-clip-text text-transparent"
          >
            Powerful Features
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Everything you need to streamline your billing operations and scale
            your business.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="group relative"
            >
              <div className="relative h-full bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-primary/20 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
          >
            <span>Explore All Features</span>
            <Rocket className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

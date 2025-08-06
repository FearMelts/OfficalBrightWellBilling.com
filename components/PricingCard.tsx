"use client";

import { fadeInUp } from "@/lib/motionConfig";
import { motion } from "framer-motion";
import { ArrowRight, Check, Star } from "lucide-react";

const plans = [
  {
    name: "Startup",
    price: "$49",
    period: "/month",
    description: "Perfect for growing businesses",
    popular: false,
    features: [
      "Up to 1,000 transactions/month",
      "Basic analytics dashboard",
      "Email support",
      "Standard integrations",
      "2 team members",
    ],
  },
  {
    name: "Professional",
    price: "$149",
    period: "/month",
    description: "Most popular choice",
    popular: true,
    features: [
      "Up to 10,000 transactions/month",
      "Advanced analytics & reporting",
      "Priority support",
      "Premium integrations",
      "10 team members",
      "Custom workflows",
      "API access",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations",
    popular: false,
    features: [
      "Unlimited transactions",
      "White-label solution",
      "Dedicated account manager",
      "Custom integrations",
      "Unlimited team members",
      "Advanced security features",
      "SLA guarantee",
      "On-premise deployment",
    ],
  },
];

export function PricingCard() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/5 to-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 brightwell-gradient bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include our
            core features with no hidden fees.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className={`relative group ${
                plan.popular
                  ? "ring-2 ring-primary shadow-2xl scale-105"
                  : "border border-border/50"
              } rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center space-x-1">
                    <span className="text-4xl font-bold text-primary">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={feature}>
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + featureIndex * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <div className="flex-shrink-0 w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </motion.div>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border"
                  }`}
                >
                  <span>
                    {plan.name === "Enterprise"
                      ? "Contact Sales"
                      : "Get Started"}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>

              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none"></div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">
            All plans include 14-day free trial • No credit card required
          </p>
          <p className="text-sm text-muted-foreground">
            Need something custom?{" "}
            <button className="text-primary hover:underline">
              Contact our sales team
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

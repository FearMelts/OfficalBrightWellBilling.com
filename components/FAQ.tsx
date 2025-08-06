"use client";

import { fadeInUp, staggerContainer } from "@/lib/motionConfig";
import { motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How does the billing system handle different payment methods?",
    answer:
      "Our system supports all major payment methods including credit cards, ACH transfers, PayPal, Apple Pay, Google Pay, and cryptocurrency. We automatically handle currency conversion and comply with international payment regulations.",
  },
  {
    question: "Can I customize invoices and billing templates?",
    answer:
      "Absolutely! You can fully customize your invoices with your brand colors, logo, and messaging. We provide a drag-and-drop template builder with dozens of professional templates to choose from.",
  },
  {
    question: "What security measures are in place for sensitive data?",
    answer:
      "We use bank-grade encryption (AES-256), PCI DSS Level 1 compliance, SOC 2 Type II certification, and maintain strict data privacy standards. All data is encrypted both in transit and at rest.",
  },
  {
    question: "How does the automated workflow system work?",
    answer:
      "Our AI-powered workflows can automatically send invoices, payment reminders, late notices, and thank you messages. You can set up custom triggers based on payment status, customer behavior, or time-based events.",
  },
  {
    question: "Is there an API for integrations?",
    answer:
      "Yes, we provide a comprehensive RESTful API with webhooks, SDKs for popular programming languages, and pre-built integrations with over 100 business tools including Salesforce, QuickBooks, and Slack.",
  },
  {
    question: "What kind of analytics and reporting is available?",
    answer:
      "Our advanced analytics dashboard provides real-time insights into revenue trends, customer behavior, payment success rates, churn analysis, and predictive forecasting. Export data in multiple formats or use our API for custom reporting.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-accent/5">
      <div className="max-w-4xl mx-auto">
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
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-muted-foreground"
          >
            Everything you need to know about our billing system
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              variants={fadeInUp}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden hover:border-primary/20 transition-colors"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-accent/50 transition-colors"
                whileHover={{ x: 4 }}
              >
                <span className="text-lg font-semibold text-foreground pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-primary" />
                  ) : (
                    <Plus className="w-5 h-5 text-muted-foreground" />
                  )}
                </motion.div>
              </motion.button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Still have questions? We're here to help.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

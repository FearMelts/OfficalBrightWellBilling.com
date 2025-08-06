"use client";

import { fadeInUp, staggerContainer } from "@/lib/motionConfig";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Automated Billing Systems",
    excerpt:
      "Discover how AI and machine learning are revolutionizing billing automation and customer experience.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    author: "Sarah Chen",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Technology",
    tags: ["AI", "Automation", "Billing"],
  },
  {
    id: 2,
    title: "Building Scalable Payment Infrastructure",
    excerpt:
      "Learn the essential patterns and practices for creating payment systems that grow with your business.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
    author: "Marcus Rodriguez",
    date: "2024-01-12",
    readTime: "8 min read",
    category: "Architecture",
    tags: ["Payments", "Infrastructure", "Scalability"],
  },
  {
    id: 3,
    title: "Security Best Practices for Financial Data",
    excerpt:
      "Comprehensive guide to protecting sensitive financial information in modern applications.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
    author: "Emily Watson",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Security",
    tags: ["Security", "Compliance", "Data Protection"],
  },
  {
    id: 4,
    title: "Optimizing Subscription Management UX",
    excerpt:
      "Design patterns and strategies for creating intuitive subscription management experiences.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    author: "David Kim",
    date: "2024-01-08",
    readTime: "7 min read",
    category: "UX Design",
    tags: ["UX", "Subscriptions", "Design"],
  },
];

export function BlogSection() {
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
            Latest Insights
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Stay updated with the latest trends, best practices, and innovations
            in billing technology
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="group bg-card/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/50 hover:border-primary/20 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute top-4 left-4"
                >
                  <span className="px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                    {post.category}
                  </span>
                </motion.div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center space-x-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3 h-3" />
                  </motion.button>
                </div>

                <div className="flex flex-wrap gap-1 mt-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-secondary/50 text-secondary-foreground rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

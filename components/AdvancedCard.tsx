"use client";

import { fadeInUp } from "@/lib/motionConfig";
import { motion } from "framer-motion";
import { ChevronRight, Heart, Share2, Star } from "lucide-react";
import { useState } from "react";

interface AdvancedCardProps {
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  rating?: number;
  liked?: boolean;
  onLike?: () => void;
  onShare?: () => void;
  className?: string;
}

export function AdvancedCard({
  title,
  description,
  image,
  tags = [],
  rating = 0,
  liked = false,
  onLike,
  onShare,
  className = "",
}: Readonly<AdvancedCardProps>) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(liked);

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike?.();
  };

  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      whileHover={{
        scale: 1.05,
        rotate: 360,
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`group relative bg-card/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/50 hover:border-primary/20 transition-all duration-300 ${className}`}
    >
      {/* Background Gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"
      />

      {/* Image Section */}
      {image && (
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
          />
        </div>
      )}

      {/* Content */}
      <div className="relative p-6">
        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        )}

        {/* Title */}
        <motion.h3
          className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors"
          layout
        >
          {title}
        </motion.h3>

        {/* Description */}
        <motion.p className="text-muted-foreground leading-relaxed mb-6" layout>
          {description}
        </motion.p>

        {/* Rating */}
        {rating > 0 && (
          <div className="flex items-center space-x-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={`star-{i}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <Star
                  className={`w-4 h-4 ${
                    i < rating
                      ? "text-yellow-400 fill-current"
                      : "text-muted-foreground"
                  }`}
                />
              </motion.div>
            ))}
            <span className="text-sm text-muted-foreground ml-2">
              {rating}/5
            </span>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <span>Learn More</span>
            <motion.div
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronRight className="w-4 h-4" />
            </motion.div>
          </motion.button>

          <div className="flex items-center space-x-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleLike}
              className={`p-2 rounded-full transition-colors ${
                isLiked
                  ? "text-red-500 bg-red-500/10"
                  : "text-muted-foreground hover:text-red-500 hover:bg-red-500/10"
              }`}
            >
              <motion.div
                animate={{ scale: isLiked ? [1, 1.3, 1] : 1 }}
                transition={{ duration: 0.3 }}
              >
                <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
              </motion.div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onShare}
              className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            >
              <Share2 className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Hover Indicator */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary to-primary origin-left"
      />
    </motion.div>
  );
}

export default AdvancedCard;

/**
 * Interactive video testimonials component with video players and controls
 * Features customer success stories with video content and engagement metrics
 */
"use client";

import { motion } from "framer-motion";
import { useState } from "react"; // Removed useRef, useEffect
// import { Button } from "./ui/button"; // <-- If missing, ensure this file exists
import { Button } from "@/components/ui/button";
import {
  Award,
  Calendar,
  MapPin,
  Maximize2,
  MessageCircle,
  Pause,
  Play,
  Quote,
  Share2,
  Star,
  Stethoscope,
  ThumbsUp,
  TrendingUp,
  Users,
  Volume2,
  VolumeX,
} from "lucide-react";
import { Badge } from "./ui/badge";

/**
 * Video testimonial data structure
 */
interface VideoTestimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  location: string;
  specialty: string;
  videoUrl: string;
  posterImage: string;
  quote: string;
  metrics: {
    revenueIncrease: string;
    claimsAccuracy: string;
    timesSaved: string;
  };
  results: string[];
  rating: number;
  duration: string;
  dateRecorded: string;
  featured: boolean;
  likes: number;
  comments: number;
}

/**
 * Sample video testimonials data
 */
const videoTestimonials: VideoTestimonial[] = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    title: "Chief Medical Officer",
    company: "Metro Health Group",
    location: "Atlanta, GA",
    specialty: "Family Medicine",
    videoUrl:
      "https://pub-cdn.sider.ai/u/U05XH919WYG/web-coder/687b5cca00bcf77ebb7774ef/resource/42ff39eb-5d4c-49bd-ba1d-39fa62eaeb5c.jpg", // Placeholder
    posterImage:
      "https://pub-cdn.sider.ai/u/U05XH919WYG/web-coder/687b5cca00bcf77ebb7774ef/resource/4f12a7e0-8ead-418b-bc17-4cfe51f71f4b.jpg",
    quote:
      "BrightWell transformed our billing process completely. Our revenue increased by 40% in just 3 months, and our staff can now focus on patient care instead of paperwork.",
    metrics: {
      revenueIncrease: "40%",
      claimsAccuracy: "98.5%",
      timesSaved: "15 hours/week",
    },
    results: [
      "Reduced claim denials by 85%",
      "Improved cash flow consistency",
      "Eliminated billing backlogs",
      "Enhanced patient satisfaction scores",
    ],
    rating: 5,
    duration: "3:24",
    dateRecorded: "2024-01-10",
    featured: true,
    likes: 127,
    comments: 23,
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    title: "Practice Owner",
    company: "Sunrise Family Practice",
    location: "San Francisco, CA",
    specialty: "Internal Medicine",
    videoUrl:
      "https://pub-cdn.sider.ai/u/U05XH919WYG/web-coder/687b5cca00bcf77ebb7774ef/resource/497b0220-0f81-4ea5-b00a-e90614bbc68c.jpg",
    posterImage:
      "https://pub-cdn.sider.ai/u/U05XH919WYG/web-coder/687b5cca00bcf77ebb7774ef/resource/51b6dc63-e1e2-484b-90d8-9313ed62a117.jpg",
    quote:
      "The automation and accuracy we gained with BrightWell allowed us to expand our practice without hiring additional billing staff. It's been a game-changer for our bottom line.",
    metrics: {
      revenueIncrease: "35%",
      claimsAccuracy: "97.8%",
      timesSaved: "20 hours/week",
    },
    results: [
      "Expanded patient capacity by 30%",
      "Reduced overhead costs by $50K annually",
      "Achieved same-day claims processing",
      "Improved work-life balance for staff",
    ],
    rating: 5,
    duration: "2:47",
    dateRecorded: "2024-01-05",
    featured: true,
    likes: 95,
    comments: 18,
  },
  {
    id: "3",
    name: "Lisa Rodriguez, RN",
    title: "Practice Manager",
    company: "Wellness Center Plus",
    location: "Houston, TX",
    specialty: "Multi-Specialty Clinic",
    videoUrl:
      "https://pub-cdn.sider.ai/u/U05XH919WYG/web-coder/687b5cca00bcf77ebb7774ef/resource/531a799c-d3b6-4204-9447-07d9ed31ad37.jpg",
    posterImage:
      "https://pub-cdn.sider.ai/u/U05XH919WYG/web-coder/687b5cca00bcf77ebb7774ef/resource/b4d1f70e-9a7c-4809-af59-238e4f7515ae.jpg",
    quote:
      "The support team at BrightWell is incredible. They're always ready to assist us, and their expertise has been invaluable to our practice growth.",
    metrics: {
      revenueIncrease: "28%",
      claimsAccuracy: "96.9%",
      timesSaved: "12 hours/week",
    },
    results: [
      "Streamlined multi-specialty billing",
      "Reduced administrative burden",
      "Improved patient scheduling efficiency",
      "Enhanced revenue cycle visibility",
    ],
    rating: 5,
    duration: "4:12",
    dateRecorded: "2023-12-28",
    featured: false,
    likes: 76,
    comments: 14,
  },
  {
    id: "4",
    name: "Dr. James Wilson",
    title: "Medical Director",
    company: "Advanced Care Clinic",
    location: "Denver, CO",
    specialty: "Orthopedic Surgery",
    videoUrl:
      "https://pub-cdn.sider.ai/u/U05XH919WYG/web-coder/687b5cca00bcf77ebb7774ef/resource/c5cf9b53-907b-41b0-be98-8d04124721f6.jpg",
    posterImage:
      "https://pub-cdn.sider.ai/u/U05XH919WYG/web-coder/687b5cca00bcf77ebb7774ef/resource/057a8ca0-9923-44aa-9004-d8355147aea6.jpg",
    quote:
      "Our denial rate dropped to less than 2% since partnering with BrightWell. The accuracy and speed of their billing process is outstanding.",
    metrics: {
      revenueIncrease: "45%",
      claimsAccuracy: "99.1%",
      timesSaved: "25 hours/week",
    },
    results: [
      "Achieved industry-leading claim acceptance",
      "Reduced appeal processing time by 80%",
      "Increased surgical scheduling capacity",
      "Enhanced patient financial counseling",
    ],
    rating: 5,
    duration: "3:56",
    dateRecorded: "2023-12-20",
    featured: false,
    likes: 152,
    comments: 31,
  },
];

/**
 * Animation variants
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
  hover: {
    y: -10,
    scale: 1.02,
    transition: { duration: 0.3 },
  },
};

/**
 * Main video testimonials component
 */
export function VideoTestimonials() {
  const [selectedTestimonial, setSelectedTestimonial] =
    useState<VideoTestimonial | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Featured",
    "Family Medicine",
    "Internal Medicine",
    "Surgery",
    "Multi-Specialty",
  ];

  const filteredTestimonials = videoTestimonials.filter((testimonial) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Featured") return testimonial.featured;
    return testimonial.specialty.includes(activeCategory);
  });

  const featuredTestimonials = videoTestimonials.filter((t) => t.featured);

  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/40 dark:from-slate-900 dark:via-blue-950/30 dark:to-cyan-950/40 transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6"
          >
            <Play className="w-8 h-8 text-white ml-1" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Success{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-600 to-red-500">
              Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Hear directly from healthcare providers who transformed their
            practices with our medical billing solutions.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg"
                  : "bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Featured Video Section */}
        {featuredTestimonials.length > 0 && activeCategory === "All" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-r from-purple-500 via-pink-600 to-red-500 rounded-3xl p-1 shadow-2xl">
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white mb-4">
                      ⭐ Featured Success Story
                    </Badge>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                      {featuredTestimonials[0].name}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                      {featuredTestimonials[0].title} at{" "}
                      {featuredTestimonials[0].company}
                    </p>
                    <blockquote className="text-xl italic text-gray-700 dark:text-gray-300 mb-8 relative">
                      <Quote className="w-8 h-8 text-purple-500 absolute -top-2 -left-4" />
                      {featuredTestimonials[0].quote}
                    </blockquote>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-6 mb-8">
                      {Object.entries(featuredTestimonials[0].metrics).map(
                        ([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                              {value}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-500 capitalize">
                              {key.replace(/([A-Z])/g, " $1").trim()}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Video Player */}
                  <div className="relative">
                    <VideoPlayer
                      testimonial={featuredTestimonials[0]}
                      isLarge={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredTestimonials.map((testimonial) => (
            <TestimonialVideoCard
              key={testimonial.id}
              testimonial={testimonial}
              onClick={() => setSelectedTestimonial(testimonial)}
            />
          ))}
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-12">
            Proven Results Across All Specialties
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                label: "Average Revenue Increase",
                value: "37%",
                icon: TrendingUp,
              },
              { label: "Claim Acceptance Rate", value: "98.1%", icon: Award },
              { label: "Happy Practices", value: "500+", icon: Users },
              { label: "Hours Saved Weekly", value: "18", icon: Calendar },
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      {selectedTestimonial && (
        <VideoModal
          testimonial={selectedTestimonial}
          onClose={() => setSelectedTestimonial(null)}
        />
      )}
    </section>
  );
}

/**
 * Video testimonial card component
 */
function TestimonialVideoCard({
  testimonial,
  onClick,
}: Readonly<{
  testimonial: VideoTestimonial;
  onClick: () => void;
}>) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group border border-slate-200 dark:border-slate-700"
      onClick={onClick}
    >
      {/* Video Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={testimonial.posterImage}
          alt={`${testimonial.name} testimonial`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />

        {/* Play Button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm">
            <Play className="w-6 h-6 text-purple-600 ml-1" />
          </div>
        </motion.div>

        {/* Duration */}
        <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {testimonial.duration}
        </div>

        {/* Featured Badge */}
        {testimonial.featured && (
          <Badge className="absolute top-3 left-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white">
            Featured
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star
                key={`${testimonial.id}-star-${i}`}
                className="w-4 h-4 text-yellow-400 fill-yellow-400"
              />
            ))}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {new Date(testimonial.dateRecorded).toLocaleDateString()}
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
          {testimonial.name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          {testimonial.title} • {testimonial.company}
        </p>
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 mb-4">
          <MapPin className="w-4 h-4" />
          {testimonial.location}
          <span>•</span>
          <Stethoscope className="w-4 h-4" />
          {testimonial.specialty}
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
          {testimonial.quote}
        </p>

        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="text-center bg-purple-50 dark:bg-purple-900/30 rounded-lg p-2">
            <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
              {testimonial.metrics.revenueIncrease}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">
              Revenue
            </div>
          </div>
          <div className="text-center bg-blue-50 dark:bg-blue-900/30 rounded-lg p-2">
            <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
              {testimonial.metrics.claimsAccuracy}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">
              Accuracy
            </div>
          </div>
          <div className="text-center bg-green-50 dark:bg-green-900/30 rounded-lg p-2">
            <div className="text-lg font-bold text-green-600 dark:text-green-400">
              {testimonial.metrics.timesSaved}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">
              Saved
            </div>
          </div>
        </div>

        {/* Engagement */}
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-500">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <ThumbsUp className="w-4 h-4" />
              {testimonial.likes}
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle className="w-4 h-4" />
              {testimonial.comments}
            </div>
          </div>
          <Share2 className="w-4 h-4 hover:text-purple-600 dark:hover:text-purple-400 cursor-pointer transition-colors" />
        </div>
      </div>
    </motion.div>
  );
}

/**
 * Video player component with controls
 */
function VideoPlayer({
  testimonial,
  isLarge = false,
}: Readonly<{
  testimonial: VideoTestimonial;
  isLarge?: boolean;
}>) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div
      className={`relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl`}
    >
      <img
        src={testimonial.posterImage}
        alt={`${testimonial.name} testimonial`}
        className="w-full h-full object-cover"
      />

      {/* Play/Pause Overlay */}
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm"
        >
          {isPlaying ? (
            <Pause className="w-8 h-8 text-purple-600" />
          ) : (
            <Play className="w-8 h-8 text-purple-600 ml-1" />
          )}
        </motion.button>
      </div>

      {/* Video Controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="hover:text-purple-400 transition-colors"
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5 ml-0.5" />
              )}
            </button>
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="hover:text-purple-400 transition-colors"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </button>
            <span className="text-sm">{testimonial.duration}</span>
          </div>

          <button
            className="hover:text-purple-400 transition-colors"
            title="Fullscreen"
          >
            <Maximize2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * Video modal component for full-screen viewing
 */
function VideoModal({
  testimonial,
  onClose,
}: Readonly<{
  testimonial: VideoTestimonial;
  onClose: () => void;
}>) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white dark:bg-slate-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {testimonial.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {testimonial.title} • {testimonial.company}
              </p>
            </div>
            <Button
              variant="ghost"
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              ✕
            </Button>
          </div>

          {/* Video */}
          <div className="mb-8">
            <VideoPlayer testimonial={testimonial} isLarge={true} />
          </div>

          {/* Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Key Results
              </h3>
              <ul className="space-y-2">
                {testimonial.results.map((result, idx) => (
                  <li
                    key={`${testimonial.id}-modal-result-${idx}`}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                  >
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    {result}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Practice Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {testimonial.location}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Stethoscope className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {testimonial.specialty}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Recorded{" "}
                    {new Date(testimonial.dateRecorded).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
export default VideoTestimonials;

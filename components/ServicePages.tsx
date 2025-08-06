/**
 * BRIGHTWELL MEDICAL BILLING - ULTRA ADVANCED SERVICE PAGES
 * GODMODE: Complete enterprise service pages with every possible feature
 */

import { AnimatePresence, motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import {
  AlertTriangle,
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  Calculator,
  CheckCircle,
  CheckSquare,
  Clock,
  Cpu,
  DollarSign,
  ExternalLink,
  Eye,
  FileText,
  Headphones,
  Heart,
  Layers,
  Mail,
  MessageCircle,
  Phone,
  PlayCircle,
  Plus,
  Rocket,
  Settings,
  Share2,
  Shield,
  Sparkles,
  Star,
  Target,
  Wifi,
  Zap
} from 'lucide-react';
import React, { memo, useCallback, useMemo, useRef, useState } from 'react';

// ============================================================================
// ENHANCED DATA STRUCTURES & INTERFACES
// ============================================================================

interface UltraServiceFeature {
  id: string;
  name: string;
  description: string;
  technicalDetails: string;
  benefits: string[];
  requirements: string[];
  integrations: string[];
  pricing: {
    starter: number;
    professional: number;
    enterprise: number;
  };
  availability: 'available' | 'beta' | 'coming-soon' | 'enterprise-only';
  popularity: number; // 1-100
  complexity: 'low' | 'medium' | 'high' | 'expert';
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  estimatedSetupTime: string;
  roi: number; // percentage
  satisfactionScore: number; // 1-5
}

interface UltraServiceDetail {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: React.ComponentType<{ className?: string }>;
  heroImage: string;
  videoDemo: string;
  interactiveDemo: string;
  features: UltraServiceFeature[];
  benefits: string[];
  technicalSpecs: {
    [key: string]: string | number;
  };
  pricing: {
    starter: {
      price: number;
      description: string;
      features: string[];
      limits: { [key: string]: string | number };
      popular: boolean;
    };
    professional: {
      price: number;
      description: string;
      features: string[];
      limits: { [key: string]: string | number };
      popular: boolean;
    };
    enterprise: {
      price: string | number;
      description: string;
      features: string[];
      limits: { [key: string]: string | number };
      popular: boolean;
    };
  };
  implementation: {
    timeline: string;
    phases: {
      name: string;
      description: string;
      duration: string;
      deliverables: string[];
      milestones: string[];
    }[];
    requirements: string[];
    support: string[];
  };
  caseStudies: {
    id: string;
    client: string;
    industry: string;
    challenge: string;
    solution: string;
    results: {
      metric: string;
      value: string;
      improvement: string;
    }[];
    testimonial: string;
    clientLogo: string;
  }[];
  faqs: {
    question: string;
    answer: string;
    category: string;
    popularity: number;
  }[];
  metrics: {
    accuracy: string;
    efficiency: string;
    satisfaction: string;
    reliability: string;
    security: string;
  };
  certifications: string[];
  compliance: string[];
  integrations: {
    name: string;
    type: 'native' | 'api' | 'webhook' | 'plugin';
    complexity: 'easy' | 'medium' | 'advanced';
    setupTime: string;
    logo: string;
  }[];
  addOns: {
    name: string;
    description: string;
    price: number;
    features: string[];
  }[];
  competitors: {
    name: string;
    comparison: { [key: string]: 'better' | 'same' | 'worse' };
  }[];
  roadmap: {
    quarter: string;
    features: string[];
    status: 'planned' | 'in-development' | 'testing' | 'released';
  }[];
}

// ============================================================================
// ULTRA ENHANCED SERVICE DATA
// ============================================================================

const ultraServiceDetails: UltraServiceDetail[] = [
  {
    id: 'ai-powered-billing',
    title: "AI-Powered Billing Automation",
    shortDescription: "Revolutionary AI that processes claims with 99.8% accuracy and optimizes workflows in real-time.",
    fullDescription: "Our AI-Powered Billing Automation represents the pinnacle of medical billing technology. Using advanced machine learning algorithms trained on millions of medical records, our system not only processes claims with unprecedented accuracy but continuously learns and adapts to optimize your specific billing patterns.",
    icon: Cpu,
    heroImage: "/api/placeholder/800/400",
    videoDemo: "/api/placeholder/800/400",
    interactiveDemo: "/demos/ai-billing",
    features: [
      {
        id: 'smart-claim-generation',
        name: 'Smart Claim Generation',
        description: 'AI automatically generates claims from clinical notes',
        technicalDetails: 'Uses NLP and machine learning to extract billing codes from unstructured clinical data',
        benefits: ['99.8% accuracy', 'Reduces claim generation time by 95%', 'Eliminates manual coding errors'],
        requirements: ['EHR integration', 'Clinical documentation'],
        integrations: ['Epic', 'Cerner', 'AllScripts', 'Athenahealth'],
        pricing: { starter: 299, professional: 599, enterprise: 1299 },
        availability: 'available',
        popularity: 95,
        complexity: 'medium',
        category: 'automation',
        icon: Zap,
        color: 'from-blue-500 to-cyan-500',
        estimatedSetupTime: '2-3 days',
        roi: 340,
        satisfactionScore: 4.9
      },
      {
        id: 'predictive-denial-prevention',
        name: 'Predictive Denial Prevention',
        description: 'AI predicts and prevents claim denials before submission',
        technicalDetails: 'Advanced algorithms analyze historical patterns and payer requirements',
        benefits: ['Reduces denials by 87%', 'Improves first-pass rate', 'Saves appeal costs'],
        requirements: ['Historical claim data', 'Payer connectivity'],
        integrations: ['Medicare', 'Medicaid', 'Major insurance providers'],
        pricing: { starter: 199, professional: 399, enterprise: 799 },
        availability: 'available',
        popularity: 92,
        complexity: 'high',
        category: 'prevention',
        icon: Shield,
        color: 'from-green-500 to-emerald-500',
        estimatedSetupTime: '1-2 weeks',
        roi: 420,
        satisfactionScore: 4.8
      },
      {
        id: 'intelligent-workflow-optimization',
        name: 'Intelligent Workflow Optimization',
        description: 'AI continuously optimizes billing workflows for maximum efficiency',
        technicalDetails: 'Machine learning algorithms analyze workflow patterns and suggest optimizations',
        benefits: ['Increases efficiency by 65%', 'Reduces processing time', 'Optimizes resource allocation'],
        requirements: ['Workflow data', 'Staff usage patterns'],
        integrations: ['Practice management systems', 'EHR platforms'],
        pricing: { starter: 399, professional: 799, enterprise: 1599 },
        availability: 'available',
        popularity: 88,
        complexity: 'high',
        category: 'optimization',
        icon: Target,
        color: 'from-purple-500 to-pink-500',
        estimatedSetupTime: '1-3 weeks',
        roi: 280,
        satisfactionScore: 4.7
      }
    ],
    benefits: [
      "99.8% claim accuracy rate with continuous learning",
      "95% reduction in manual coding time",
      "87% decrease in claim denials",
      "340% average ROI within 6 months",
      "Real-time workflow optimization",
      "24/7 automated processing capabilities"
    ],
    technicalSpecs: {
      "Processing Speed": "2.3 seconds per claim",
      "Accuracy Rate": "99.8%",
      "Supported Formats": "X12, FHIR, HL7",
      "API Calls/Month": "Unlimited",
      "Data Retention": "7 years",
      "Uptime SLA": "99.9%",
      "Security": "HIPAA, SOC2, ISO27001"
    },
    pricing: {
      starter: {
        price: 599,
        description: "Perfect for solo practices and small clinics",
        features: [
          "AI claim generation for up to 1,000 claims/month",
          "Basic denial prevention",
          "Standard integrations",
          "Email support",
          "Monthly analytics reports"
        ],
        limits: {
          "Claims per month": 1000,
          "Users": 3,
          "Integrations": 2,
          "Support": "Email only"
        },
        popular: false
      },
      professional: {
        price: 1299,
        description: "Ideal for growing practices with multiple providers",
        features: [
          "AI claim generation for up to 5,000 claims/month",
          "Advanced denial prevention",
          "Workflow optimization",
          "All integrations included",
          "Phone & email support",
          "Weekly analytics reports",
          "Custom reporting dashboard"
        ],
        limits: {
          "Claims per month": 5000,
          "Users": 15,
          "Integrations": "Unlimited",
          "Support": "Phone & Email"
        },
        popular: true
      },
      enterprise: {
        price: "Custom",
        description: "Comprehensive solution for large practices and health systems",
        features: [
          "Unlimited AI claim processing",
          "Predictive analytics",
          "Custom AI model training",
          "Dedicated account manager",
          "24/7 priority support",
          "Real-time analytics",
          "API access",
          "White-label options"
        ],
        limits: {
          "Claims per month": "Unlimited",
          "Users": "Unlimited",
          "Integrations": "Unlimited + Custom",
          "Support": "Dedicated team"
        },
        popular: false
      }
    },
    implementation: {
      timeline: "2-6 weeks",
      phases: [
        {
          name: "Discovery & Assessment",
          description: "Comprehensive analysis of current billing processes and AI training data collection",
          duration: "1 week",
          deliverables: ["Current state assessment", "AI training dataset", "Integration requirements"],
          milestones: ["Data collection complete", "AI model selected", "Integration plan approved"]
        },
        {
          name: "AI Model Training & Integration",
          description: "Custom AI model training on your data and system integration setup",
          duration: "2-3 weeks",
          deliverables: ["Trained AI model", "System integration", "Testing environment"],
          milestones: ["AI model trained", "Integration complete", "Testing passed"]
        },
        {
          name: "Training & Go-Live",
          description: "Staff training and production deployment with monitoring",
          duration: "1-2 weeks",
          deliverables: ["Staff training", "Production deployment", "Monitoring setup"],
          milestones: ["Staff certified", "System live", "Performance validated"]
        }
      ],
      requirements: [
        "EHR system with API access",
        "Historical claims data (minimum 6 months)",
        "Dedicated project manager",
        "IT support for integration",
        "Staff availability for training"
      ],
      support: [
        "Dedicated implementation specialist",
        "24/7 technical support during rollout",
        "Weekly progress reviews",
        "Post-launch optimization sessions",
        "Ongoing AI model updates"
      ]
    },
    caseStudies: [
      {
        id: 'metro-health-ai',
        client: "Metro Health Group",
        industry: "Multi-specialty practice",
        challenge: "Processing 15,000 claims monthly with 18% denial rate and 45-day collection cycle",
        solution: "Implemented AI-powered billing automation with predictive denial prevention",
        results: [
          { metric: "Denial Rate", value: "2.1%", improvement: "88% reduction" },
          { metric: "Processing Speed", value: "2.3 sec/claim", improvement: "94% faster" },
          { metric: "Collection Cycle", value: "21 days", improvement: "53% improvement" },
          { metric: "Staff Efficiency", value: "+340%", improvement: "3.4x increase" }
        ],
        testimonial: "The AI system has revolutionized our billing operations. We've seen unprecedented accuracy and efficiency gains.",
        clientLogo: "/api/placeholder/100/100"
      }
    ],
    faqs: [
      {
        question: "How accurate is the AI compared to manual coding?",
        answer: "Our AI achieves 99.8% accuracy compared to 94-96% for manual coding, with continuous improvement through machine learning.",
        category: "accuracy",
        popularity: 95
      },
      {
        question: "How long does it take to train the AI on our data?",
        answer: "Initial training takes 2-3 weeks using your historical data. The AI continues learning and improving with each processed claim.",
        category: "implementation",
        popularity: 88
      },
      {
        question: "Can the AI handle complex specialty coding?",
        answer: "Yes, our AI is trained on specialty-specific datasets and can handle complex procedures across all medical specialties.",
        category: "features",
        popularity: 82
      }
    ],
    metrics: {
      accuracy: "99.8%",
      efficiency: "95% faster processing",
      satisfaction: "4.9/5 client rating",
      reliability: "99.9% uptime",
      security: "HIPAA + SOC2 certified"
    },
    certifications: ["HIPAA Compliant", "SOC2 Type II", "ISO 27001", "HITECH Act"],
    compliance: ["Medicare", "Medicaid", "Commercial Payers", "ICD-11 Ready"],
    integrations: [
      { name: "Epic", type: "native", complexity: "easy", setupTime: "2-3 days", logo: "/api/placeholder/100/50" },
      { name: "Cerner", type: "native", complexity: "easy", setupTime: "2-3 days", logo: "/api/placeholder/100/50" },
      { name: "AllScripts", type: "api", complexity: "medium", setupTime: "1 week", logo: "/api/placeholder/100/50" },
      { name: "athenahealth", type: "native", complexity: "easy", setupTime: "1-2 days", logo: "/api/placeholder/100/50" }
    ],
    addOns: [
      {
        name: "Advanced Analytics Package",
        description: "Real-time dashboards and predictive insights",
        price: 299,
        features: ["Real-time dashboards", "Predictive analytics", "Custom reports", "API access"]
      },
      {
        name: "Multi-language Support",
        description: "Support for Spanish, French, and other languages",
        price: 199,
        features: ["47 languages supported", "Localized interfaces", "Cultural compliance", "Regional coding"]
      }
    ],
    competitors: [
      {
        name: "Traditional Billing Services",
        comparison: {
          "Accuracy": "better",
          "Speed": "better",
          "Cost": "better",
          "Scalability": "better",
          "Innovation": "better"
        }
      }
    ],
    roadmap: [
      {
        quarter: "Q2 2024",
        features: ["Voice-to-code AI", "Blockchain audit trails", "Advanced ML models"],
        status: "in-development"
      },
      {
        quarter: "Q3 2024",
        features: ["Quantum encryption", "AR billing interface", "Global compliance"],
        status: "planned"
      }
    ]
  }
  // Additional ultra services would continue here...
];

// ============================================================================
// ADVANCED ANIMATION VARIANTS
// ============================================================================

const ultraAnimations = {
  serviceCard: {
    hidden: { 
      opacity: 0, 
      y: 100, 
      scale: 0.8, 
      rotateX: -20,
      filter: 'blur(10px)' 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      rotateX: 0,
      filter: 'blur(0px)',
      transition: { 
        duration: 0.8, 
        ease: [0.23, 1, 0.32, 1],
        staggerChildren: 0.1 
      }
    },
    hover: {
      y: -20,
      scale: 1.03,
      rotateX: 5,
      rotateY: 5,
      boxShadow: '0 30px 60px -12px rgba(0,0,0,0.4)',
      transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] }
    }
  },
  
  featureExpand: {
    collapsed: { 
      height: 0, 
      opacity: 0,
      marginTop: 0,
      marginBottom: 0
    },
    expanded: { 
      height: 'auto', 
      opacity: 1,
      marginTop: 16,
      marginBottom: 16,
      transition: { 
        duration: 0.5,
        ease: [0.04, 0.62, 0.23, 0.98]
      }
    }
  },

  pricingCard: {
    rest: { 
      scale: 1,
      rotateY: 0,
      z: 0,
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
    },
    hover: { 
      scale: 1.05,
      rotateY: 5,
      z: 50,
      boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
      transition: { duration: 0.3 }
    },
    popular: {
      scale: 1.08,
      z: 30,
      boxShadow: '0 25px 50px rgba(59,130,246,0.3)',
      border: '2px solid rgb(59,130,246)'
    }
  },

  morphingIcon: {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
      borderRadius: ['25%', '50%', '25%'],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  },

  liquidButton: {
    rest: { 
      borderRadius: '12px',
      background: 'linear-gradient(135deg, rgb(59,130,246), rgb(99,102,241))'
    },
    hover: { 
      borderRadius: '20px',
      background: 'linear-gradient(135deg, rgb(99,102,241), rgb(139,92,246))',
      scale: 1.05,
      boxShadow: '0 10px 30px rgba(99,102,241,0.4)',
      transition: { duration: 0.3, ease: 'easeOut' }
    },
    tap: { 
      scale: 0.95,
      borderRadius: '8px',
      transition: { duration: 0.1 }
    }
  }
};

// Complexity color variants for feature badges
const colorVariants: Record<string, string> = {
  low: 'bg-green-500/20 text-green-300',
  medium: 'bg-cyan-500/20 text-cyan-300',
  high: 'bg-blue-500/20 text-blue-300',
  expert: 'bg-purple-500/20 text-purple-300'
};

// ============================================================================
// ADVANCED UI COMPONENTS
// ============================================================================

/**
 * Ultra Service Card with 3D effects and interactive elements
 */
const UltraServiceCard = memo(({ 
  service, 
  index, 
  viewMode, 
  onSelect 
}: { 
  service: UltraServiceDetail; 
  index: number;
  viewMode: 'grid' | 'list';
  onSelect: (service: UltraServiceDetail) => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-100, 100], [5, -5]);
  const rotateY = useTransform(mouseX, [-100, 100], [-5, 5]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  }, [mouseX, mouseY]);

  const IconComponent = service.icon;

  if (viewMode === 'list') {
    return (
      <motion.div
        ref={cardRef}
        className="bg-slate-800/30 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 mb-4"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: index * 0.1 }}
        whileHover={{ scale: 1.02, backgroundColor: 'rgba(30, 41, 59, 0.5)' }}
      >
        <div className="flex items-start gap-6">
          <motion.div 
            className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0"
            variants={ultraAnimations.morphingIcon}
            animate="animate"
          >
            <IconComponent className="w-8 h-8 text-white" />
          </motion.div>
          
          <div className="flex-1">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-2xl font-bold text-slate-100">{service.title}</h3>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < Math.floor(parseFloat(service.metrics.satisfaction)) ? 'text-blue-400 fill-blue-400' : 'text-slate-600'}`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-slate-400">{service.metrics.satisfaction}</span>
              </div>
            </div>
            
            <p className="text-slate-400 mb-4 leading-relaxed">{service.shortDescription}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-sm text-slate-500">Starting from</span>
                <span className="text-2xl font-bold text-cyan-400">${service.pricing.starter.price}/mo</span>
              </div>
              
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-xl font-semibold"
                variants={ultraAnimations.liquidButton}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                onClick={() => onSelect(service)}
              >
                Learn More <ArrowRight className="w-4 h-4 ml-2 inline" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={cardRef}
      className="relative group cursor-pointer"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={ultraAnimations.serviceCard}
      custom={index}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      onClick={() => onSelect(service)}
    >
      <motion.div
        className="relative bg-slate-800/30 backdrop-blur-xl rounded-3xl border border-slate-700/50 overflow-hidden h-full"
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        variants={ultraAnimations.serviceCard}
        whileHover="hover"
      >
        {/* Holographic background effect */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              'linear-gradient(45deg, transparent 30%, rgba(59,130,246,0.5) 50%, transparent 70%)',
              'linear-gradient(135deg, transparent 30%, rgba(99,102,241,0.5) 50%, transparent 70%)',
              'linear-gradient(225deg, transparent 30%, rgba(139,92,246,0.5) 50%, transparent 70%)',
              'linear-gradient(315deg, transparent 30%, rgba(59,130,246,0.5) 50%, transparent 70%)'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        <div className="relative z-10 p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <motion.div 
              className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg"
              variants={ultraAnimations.morphingIcon}
              animate="animate"
            >
              <IconComponent className="w-8 h-8 text-white" />
            </motion.div>
            
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 ${i < Math.floor(parseFloat(service.metrics.satisfaction)) ? 'text-blue-400 fill-blue-400' : 'text-slate-600'}`} 
                />
              ))}
            </div>
          </div>

          {/* Title and Description */}
          <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-300">
            {service.title}
          </h3>
          
          <p className="text-slate-400 mb-6 leading-relaxed line-clamp-3">
            {service.shortDescription}
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {Object.entries(service.metrics).slice(0, 3).map(([key, value], metricIndex) => (
              <motion.div
                key={key}
                className="text-center bg-slate-900/50 rounded-xl p-3"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(15, 23, 42, 0.8)' }}
                animate={isHovered ? { y: [-2, 2, -2] } : {}}
                transition={{ duration: 2, repeat: Infinity, delay: metricIndex * 0.2 }}
              >
                <div className="text-lg font-bold text-cyan-400">{value}</div>
                <div className="text-xs text-slate-500 capitalize">{key}</div>
              </motion.div>
            ))}
          </div>

          {/* Features Preview */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-semibold text-slate-300">Key Features</span>
            </div>
            <div className="space-y-2">
              {service.features.slice(0, 3).map((feature, featureIndex) => (
                <motion.div
                  key={feature.id}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: (index * 0.1) + (featureIndex * 0.05) }}
                >
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-sm text-slate-400">{feature.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-sm text-slate-500">Starting from</span>
              <div className="text-3xl font-bold text-cyan-400">
                ${service.pricing.starter.price}<span className="text-lg text-slate-500">/mo</span>
              </div>
            </div>
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg"
              variants={ultraAnimations.liquidButton}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              View Details
            </motion.button>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <motion.button
                className="flex items-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PlayCircle className="w-4 h-4" />
                Demo
              </motion.button>
              <motion.button
                className="flex items-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BookOpen className="w-4 h-4" />
                Docs
              </motion.button>
            </div>
            <div className="flex items-center gap-2">
              <motion.button
                className="text-slate-400 hover:text-red-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Heart className="w-4 h-4" />
              </motion.button>
              <motion.button
                className="text-slate-400 hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Share2 className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent pointer-events-none rounded-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
});

/**
 * Advanced Feature Card Component
 */
const AdvancedFeatureCard = memo(({ feature, index }: { feature: UltraServiceFeature; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = feature.icon;

  return (
    <motion.div
      className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02, backgroundColor: 'rgba(30, 41, 59, 0.7)' }}
    >
      <div className="flex items-start gap-4 mb-4">
        <motion.div 
          className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center`}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <IconComponent className="w-6 h-6 text-white" />
        </motion.div>
        
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <h4 className="text-xl font-bold text-slate-100">{feature.name}</h4>
            <div className="flex items-center gap-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${colorVariants[feature.complexity]}`}>
                {feature.complexity}
              </span>
              <span className="text-sm text-slate-400">{feature.satisfactionScore}/5</span>
            </div>
          </div>
          
          <p className="text-slate-400 mb-3">{feature.description}</p>
          
          <div className="flex items-center justify-between">
            <span className="text-cyan-400 font-semibold">
              ${feature.pricing.starter}+/mo
            </span>
            
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isExpanded ? 'Show Less' : 'Learn More'}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            variants={ultraAnimations.featureExpand}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            className="border-t border-slate-700/50 pt-4"
          >
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-slate-200 mb-2">Technical Details</h5>
                <p className="text-sm text-slate-400">{feature.technicalDetails}</p>
              </div>
              
              <div>
                <h5 className="font-semibold text-slate-200 mb-2">Key Benefits</h5>
                <ul className="space-y-1">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-400">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold text-slate-200 mb-2">Integrations</h5>
                <div className="flex flex-wrap gap-2">
                  {feature.integrations.map((integration, idx) => (
                    <span key={idx} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-lg">
                      {integration}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});

/**
 * FAQ Item Component
 */
const FAQItem = memo(({ faq, index }: { faq: { question: string; answer: string; category: string; popularity: number }; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <motion.button
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ backgroundColor: 'rgba(51, 65, 85, 0.3)' }}
      >
        <span className="font-semibold text-slate-200">{faq.question}</span>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight className="w-5 h-5 text-slate-400 transform rotate-90" />
        </motion.div>
      </motion.button>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4">
              <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});

/**
 * Advanced Service Detail Page with comprehensive information
 */
const ServiceDetailPage = memo(({ 
  service, 
  onBack 
}: { 
  service: UltraServiceDetail; 
  onBack: () => void;
}) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPlan, setSelectedPlan] = useState('professional');
  const [showPricingCalculator, setShowPricingCalculator] = useState(false);
  const [calculatorInputs, setCalculatorInputs] = useState({
    practiceSize: 'medium',
    monthlyVolume: 1000,
    currentCosts: 5000,
    desiredROI: 200
  });

  const IconComponent = service.icon;
  const tabs = [
    { id: 'overview', label: 'Overview', icon: Eye },
    { id: 'features', label: 'Features', icon: Layers },
    { id: 'pricing', label: 'Pricing', icon: DollarSign },
    { id: 'implementation', label: 'Implementation', icon: Rocket },
    { id: 'integrations', label: 'Integrations', icon: Wifi },
    { id: 'case-studies', label: 'Case Studies', icon: Award },
    { id: 'support', label: 'Support', icon: Headphones }
  ];

  const calculateROI = useMemo(() => {
    const monthlySavings = calculatorInputs.currentCosts * 0.3; // 30% average savings
    const planCost = service.pricing[selectedPlan as keyof typeof service.pricing].price as number || 1000;
    const netSavings = monthlySavings - planCost;
    const annualROI = (netSavings * 12 / (planCost * 12)) * 100;
    return Math.round(annualROI);
  }, [calculatorInputs, selectedPlan, service.pricing]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950/30 to-slate-900">
      {/* Hero Section */}
      <div className="relative py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.button
            onClick={onBack}
            className="mb-8 flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Services
          </motion.button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                  variants={ultraAnimations.morphingIcon}
                  animate="animate"
                >
                  <IconComponent className="w-10 h-10 text-white" />
                </motion.div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    {service.certifications.slice(0, 2).map((cert, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/20 text-white text-xs rounded-full">
                        {cert}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                    <span className="text-white/80 text-sm ml-2">{service.metrics.satisfaction}</span>
                  </div>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {service.title}
              </h1>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {service.fullDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg"
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255,255,255,0.2)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <PlayCircle className="w-5 h-5 mr-2 inline" />
                  Watch Demo
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-64 object-cover rounded-2xl shadow-2xl"
                />
                
                {/* Floating metrics */}
                <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                  <div className="text-2xl font-bold text-blue-600">{service.metrics.accuracy}</div>
                  <div className="text-sm text-gray-600">Accuracy Rate</div>
                </div>
                
                <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                  <div className="text-2xl font-bold text-green-600">{service.metrics.efficiency}</div>
                  <div className="text-sm text-gray-600">Efficiency Gain</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 font-medium whitespace-nowrap transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'text-blue-400 border-b-2 border-blue-400 bg-blue-400/10'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <TabIcon className="w-4 h-4" />
                  {tab.label}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="space-y-12">
                  {/* Benefits Grid */}
                  <div>
                    <h3 className="text-3xl font-bold text-slate-100 mb-8">Key Benefits</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {service.benefits.map((benefit, index) => (
                        <motion.div
                          key={index}
                          className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.02, backgroundColor: 'rgba(30, 41, 59, 0.7)' }}
                        >
                          <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
                          <p className="text-slate-300 leading-relaxed">{benefit}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technical Specifications */}
                  <div>
                    <h3 className="text-3xl font-bold text-slate-100 mb-8">Technical Specifications</h3>
                    <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                        {Object.entries(service.technicalSpecs).map(([key, value], index) => (
                          <motion.div
                            key={key}
                            className="flex items-center justify-between p-6 border-b border-slate-700/50 last:border-b-0 md:odd:border-r md:odd:border-slate-700/50"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <span className="text-slate-400 font-medium">{key}</span>
                            <span className="text-slate-100 font-semibold">{value}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Case Study Preview */}
                  {service.caseStudies.length > 0 && (
                    <div>
                      <h3 className="text-3xl font-bold text-slate-100 mb-8">Featured Case Study</h3>
                      <motion.div
                        className="bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50"
                        whileHover={{ scale: 1.01 }}
                      >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          <div>
                            <div className="flex items-center gap-4 mb-6">
                              <img
                                src={service.caseStudies[0].clientLogo}
                                alt={service.caseStudies[0].client}
                                className="w-12 h-12 rounded-xl object-cover bg-white p-2"
                              />
                              <div>
                                <h4 className="text-2xl font-bold text-slate-100">
                                  {service.caseStudies[0].client}
                                </h4>
                                <p className="text-slate-400">{service.caseStudies[0].industry}</p>
                              </div>
                            </div>
                            
                            <div className="space-y-4">
                              <div>
                                <h5 className="font-semibold text-slate-200 mb-2">Challenge</h5>
                                <p className="text-slate-400">{service.caseStudies[0].challenge}</p>
                              </div>
                              <div>
                                <h5 className="font-semibold text-slate-200 mb-2">Solution</h5>
                                <p className="text-slate-400">{service.caseStudies[0].solution}</p>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h5 className="font-semibold text-slate-200 mb-4">Results</h5>
                            <div className="grid grid-cols-2 gap-4">
                              {service.caseStudies[0].results.map((result, idx) => (
                                <motion.div
                                  key={idx}
                                  className="text-center bg-slate-800/50 rounded-xl p-4"
                                  whileHover={{ scale: 1.05 }}
                                >
                                  <div className="text-2xl font-bold text-green-400 mb-1">
                                    {result.value}
                                  </div>
                                  <div className="text-xs text-slate-500 mb-2">{result.metric}</div>
                                  <div className="text-xs text-green-400">{result.improvement}</div>
                                </motion.div>
                              ))}
                            </div>
                            
                            <blockquote className="mt-6 p-4 bg-slate-900/50 rounded-xl border-l-4 border-blue-400">
                              <p className="text-slate-300 italic mb-2">"{service.caseStudies[0].testimonial}"</p>
                            </blockquote>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  )}
                </div>
              )}

              {/* Features Tab */}
              {activeTab === 'features' && (
                <div className="space-y-8">
                  <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-slate-100 mb-4">
                      Advanced Features & Capabilities
                    </h3>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                      Explore the comprehensive feature set that makes our solution the industry leader.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {service.features.map((feature, index) => (
                      <AdvancedFeatureCard key={feature.id} feature={feature} index={index} />
                    ))}
                  </div>
                </div>
              )}

              {/* Pricing Tab */}
              {activeTab === 'pricing' && (
                <div className="space-y-12">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-slate-100 mb-4">
                      Choose Your Perfect Plan
                    </h3>
                    <p className="text-xl text-slate-400 mb-8">
                      Flexible pricing options designed to scale with your practice
                    </p>
                    
                    <motion.button
                      onClick={() => setShowPricingCalculator(!showPricingCalculator)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold mb-8"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Calculator className="w-4 h-4 mr-2 inline" />
                      {showPricingCalculator ? 'Hide' : 'Show'} ROI Calculator
                    </motion.button>
                  </div>

                  {/* ROI Calculator */}
                  <AnimatePresence>
                    {showPricingCalculator && (
                      <motion.div
                        className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 mb-12"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h4 className="text-2xl font-bold text-slate-100 mb-6">ROI Calculator</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                          <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                              Practice Size
                            </label>
                            <select
                              value={calculatorInputs.practiceSize}
                              onChange={(e) => setCalculatorInputs(prev => ({
                                ...prev,
                                practiceSize: e.target.value
                              }))}
                              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-slate-100"
                              aria-label="Select practice size"
                            >
                              <option value="small">Small (1-5 providers)</option>
                              <option value="medium">Medium (6-15 providers)</option>
                              <option value="large">Large (16+ providers)</option>
                            </select>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                              Monthly Claims Volume
                            </label>
                            <input
                              type="number"
                              value={calculatorInputs.monthlyVolume}
                              onChange={(e) => setCalculatorInputs(prev => ({
                                ...prev,
                                monthlyVolume: parseInt(e.target.value) || 0
                              }))}
                              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-slate-100"
                              placeholder="1000"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                              Current Monthly Costs ($)
                            </label>
                            <input
                              type="number"
                              value={calculatorInputs.currentCosts}
                              onChange={(e) => setCalculatorInputs(prev => ({
                                ...prev,
                                currentCosts: parseInt(e.target.value) || 0
                              }))}
                              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-slate-100"
                              placeholder="5000"
                            />
                          </div>
                          
                          <div className="flex flex-col justify-end">
                            <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-center">
                              <div className="text-2xl font-bold text-green-400">
                                {calculateROI}%
                              </div>
                              <div className="text-sm text-green-300">Expected ROI</div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Pricing Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {Object.entries(service.pricing).map(([planKey, plan], index) => (
                      <motion.div
                        key={planKey}
                        className={`relative bg-slate-800/50 backdrop-blur-xl rounded-2xl border p-8 ${
                          plan.popular 
                            ? 'border-blue-500 ring-2 ring-blue-500/20 scale-105' 
                            : 'border-slate-700/50'
                        }`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={plan.popular ? "popular" : { opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        variants={ultraAnimations.pricingCard}
                        whileHover="hover"
                      >
                        {plan.popular && (
                          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                            Most Popular
                          </div>
                        )}
                        
                        <div className="text-center mb-8">
                          <h4 className="text-2xl font-bold text-slate-100 mb-2 capitalize">
                            {planKey}
                          </h4>
                          <div className="text-4xl font-bold text-blue-400 mb-2">
                            {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
                            {typeof plan.price === 'number' && (
                              <span className="text-lg text-slate-500">/month</span>
                            )}
                          </div>
                          <p className="text-slate-400">{plan.description}</p>
                        </div>
                        
                        <ul className="space-y-3 mb-8">
                          {plan.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-start gap-3"
                            >
                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: (index * 0.1) + (featureIndex * 0.05) }}
                                className="flex items-start gap-3 w-full"
                              >
                                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-300 text-sm">{feature}</span>
                              </motion.div>
                            </li>
                          ))}
                        </ul>
                        
                        <motion.button
                          className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                            plan.popular
                              ? 'bg-blue-500 hover:bg-blue-600 text-white'
                              : 'bg-slate-700 hover:bg-slate-600 text-slate-200'
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setSelectedPlan(planKey)}
                        >
                          {selectedPlan === planKey ? 'Selected' : 'Choose Plan'}
                        </motion.button>
                      </motion.div>
                    ))}
                  </div>

                  {/* Add-ons */}
                  {service.addOns.length > 0 && (
                    <div>
                      <h4 className="text-2xl font-bold text-slate-100 mb-8">Available Add-ons</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {service.addOns.map((addon, index) => (
                          <motion.div
                            key={index}
                            className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                          >
                            <div className="flex items-start justify-between mb-4">
                              <h5 className="text-xl font-bold text-slate-100">{addon.name}</h5>
                              <span className="text-2xl font-bold text-blue-400">
                                ${addon.price}<span className="text-sm text-slate-500">/mo</span>
                              </span>
                            </div>
                            <p className="text-slate-400 mb-4">{addon.description}</p>
                            <ul className="space-y-2">
                              {addon.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center gap-2 text-sm text-slate-300">
                                  <Plus className="w-3 h-3 text-green-400" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Implementation Tab */}
              {activeTab === 'implementation' && (
                <div className="space-y-12">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-slate-100 mb-4">
                      Implementation Roadmap
                    </h3>
                    <p className="text-xl text-slate-400 mb-8">
                      Our proven implementation process ensures a smooth transition
                    </p>
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-6 py-2">
                      <Clock className="w-4 h-4 text-blue-400" />
                      <span className="text-blue-300 font-medium">
                        Typical Timeline: {service.implementation.timeline}
                      </span>
                    </div>
                  </div>

                  {/* Implementation Phases */}
                  <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500"></div>

                    <div className="space-y-12">
                      {service.implementation.phases.map((phase, index) => (
                        <motion.div
                          key={index}
                          className="relative flex items-start gap-8"
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 }}
                        >
                          <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                            {index + 1}
                          </div>

                          <div className="flex-1 bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50">
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="text-2xl font-bold text-slate-100">{phase.name}</h4>
                              <span className="bg-blue-500/20 border border-blue-500/30 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                                {phase.duration}
                              </span>
                            </div>

                            <p className="text-slate-400 mb-6 leading-relaxed">{phase.description}</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <h5 className="font-semibold text-slate-200 mb-3 flex items-center gap-2">
                                  <FileText className="w-4 h-4 text-blue-400" />
                                  Deliverables
                                </h5>
                                <ul className="space-y-2">
                                  {phase.deliverables.map((deliverable, deliverableIndex) => (
                                    <li key={deliverableIndex} className="flex items-center gap-2 text-sm text-slate-300">
                                      <CheckCircle className="w-3 h-3 text-green-400" />
                                      {deliverable}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h5 className="font-semibold text-slate-200 mb-3 flex items-center gap-2">
                                  <Target className="w-4 h-4 text-green-400" />
                                  Milestones
                                </h5>
                                <ul className="space-y-2">
                                  {phase.milestones.map((milestone, milestoneIndex) => (
                                    <li key={milestoneIndex} className="flex items-center gap-2 text-sm text-slate-300">
                                      <Award className="w-3 h-3 text-blue-400" /> {/* changed from text-yellow-400 */}
                                      {milestone}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Requirements & Support */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <motion.div
                      className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <h4 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-2">
                        <Settings className="w-6 h-6 text-blue-400" />
                        Requirements
                      </h4>
                      <ul className="space-y-3">
                        {service.implementation.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-3 text-slate-300">
                            <CheckSquare className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    <motion.div
                      className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <h4 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-2">
                        <Headphones className="w-6 h-6 text-green-400" />
                        Support Included
                      </h4>
                      <ul className="space-y-3">
                        {service.implementation.support.map((support, index) => (
                          <li key={index} className="flex items-start gap-3 text-slate-300">
                            <Shield className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            {support}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>
              )}

              {/* Integrations Tab */}
              {activeTab === 'integrations' && (
                <div className="space-y-12">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-slate-100 mb-4">
                      Seamless Integrations
                    </h3>
                    <p className="text-xl text-slate-400 mb-8">
                      Connect with your existing systems effortlessly
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {service.integrations.map((integration, index) => (
                      <motion.div
                        key={index}
                        className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, borderColor: 'rgba(59, 130, 246, 0.5)' }}
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <img
                            src={integration.logo}
                            alt={integration.name}
                            className="w-12 h-12 rounded-lg object-cover bg-white p-2"
                          />
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-slate-100 mb-1">
                              {integration.name}
                            </h4>
                            <div className="flex items-center gap-2">
                              <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                                integration.type === 'native' ? 'bg-green-500/20 text-green-300' :
                                integration.type === 'api' ? 'bg-blue-500/20 text-blue-300' :
                                integration.type === 'webhook' ? 'bg-purple-500/20 text-purple-300' :
                                'bg-orange-500/20 text-orange-300'
                              }`}>
                                {integration.type.toUpperCase()}
                              </span>
                              <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                                integration.complexity === 'easy' ? 'bg-green-500/20 text-green-300' :
                                integration.complexity === 'medium' ? 'bg-cyan-500/20 text-cyan-300' :
                                'bg-blue-500/20 text-blue-300'
                              }`}>
                                {integration.complexity}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm text-slate-400">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {integration.setupTime}
                          </div>
                          <ExternalLink className="w-4 h-4 hover:text-blue-400 cursor-pointer transition-colors" />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Integration Benefits */}
                  <div className="bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50">
                    <h4 className="text-2xl font-bold text-slate-100 mb-6 text-center">
                      Why Our Integrations Stand Out
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <Zap className="w-8 h-8 text-blue-400" />
                        </div>
                        <h5 className="font-semibold text-slate-200 mb-2">Lightning Fast</h5>
                        <p className="text-slate-400 text-sm">
                          Real-time data synchronization with sub-second latency
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <Shield className="w-8 h-8 text-green-400" />
                        </div>
                        <h5 className="font-semibold text-slate-200 mb-2">Secure</h5>
                        <p className="text-slate-400 text-sm">
                          End-to-end encryption with enterprise-grade security
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <Layers className="w-8 h-8 text-purple-400" />
                        </div>
                        <h5 className="font-semibold text-slate-200 mb-2">Scalable</h5>
                        <p className="text-slate-400 text-sm">
                          Handles millions of transactions without performance loss
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Case Studies Tab */}
              {activeTab === 'case-studies' && (
                <div className="space-y-12">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-slate-100 mb-4">
                      Success Stories
                    </h3>
                    <p className="text-xl text-slate-400 mb-8">
                      Real results from real customers
                    </p>
                  </div>

                  <div className="space-y-8">
                    {service.caseStudies.map((caseStudy, index) => (
                      <motion.div
                        key={caseStudy.id}
                        className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                      >
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                          <div className="lg:col-span-2 p-8">
                            <div className="flex items-center gap-4 mb-6">
                              <img
                                src={caseStudy.clientLogo}
                                alt={caseStudy.client}
                                className="w-16 h-16 rounded-xl object-cover bg-white p-3"
                              />
                              <div>
                                <h4 className="text-2xl font-bold text-slate-100">
                                  {caseStudy.client}
                                </h4>
                                <p className="text-slate-400">{caseStudy.industry}</p>
                              </div>
                            </div>

                            <div className="space-y-6">
                              <div>
                                <h5 className="font-semibold text-slate-200 mb-3 flex items-center gap-2">
                                  <AlertTriangle className="w-4 h-4 text-blue-400" /> {/* changed from text-red-400 */}
                                  Challenge
                                </h5>
                                <p className="text-slate-400 leading-relaxed">
                                  {caseStudy.challenge}
                                </p>
                              </div>

                              <div>
                                <h5 className="font-semibold text-slate-200 mb-3 flex items-center gap-2">
                                  <Rocket className="w-4 h-4 text-blue-400" />
                                  Solution
                                </h5>
                                <p className="text-slate-400 leading-relaxed">
                                  {caseStudy.solution}
                                </p>
                              </div>

                              <blockquote className="bg-slate-900/50 rounded-xl p-4 border-l-4 border-blue-400">
                                <p className="text-slate-300 italic">
                                  "{caseStudy.testimonial}"
                                </p>
                              </blockquote>
                            </div>
                          </div>

                          <div className="bg-slate-900/50 p-8">
                            <h5 className="font-semibold text-slate-200 mb-6 flex items-center gap-2">
                              <BarChart3 className="w-4 h-4 text-green-400" />
                              Results
                            </h5>
                            <div className="space-y-4">
                              {caseStudy.results.map((result, resultIndex) => (
                                <motion.div
                                  key={resultIndex}
                                  className="bg-slate-800/50 rounded-xl p-4 text-center"
                                  whileHover={{ scale: 1.05 }}
                                >
                                  <div className="text-3xl font-bold text-green-400 mb-1">
                                    {result.value}
                                  </div>
                                  <div className="text-sm text-slate-500 mb-2">
                                    {result.metric}
                                  </div>
                                  <div className="text-xs text-green-300 font-medium">
                                    {result.improvement}
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Support Tab */}
              {activeTab === 'support' && (
                <div className="space-y-12">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-slate-100 mb-4">
                      Comprehensive Support
                    </h3>
                    <p className="text-xl text-slate-400 mb-8">
                      We're here to help you succeed every step of the way
                    </p>
                  </div>

                  {/* FAQ Section */}
                  <div>
                    <h4 className="text-2xl font-bold text-slate-100 mb-8">
                      Frequently Asked Questions
                    </h4>
                    <div className="space-y-4">
                      {service.faqs.map((faq, index) => (
                        <FAQItem key={index} faq={faq} index={index} />
                      ))}
                    </div>
                  </div>

                  {/* Support Channels */}
                  <div>
                    <h4 className="text-2xl font-bold text-slate-100 mb-8">
                      Get Help When You Need It
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {[
                        {
                          icon: MessageCircle,
                          title: "Live Chat",
                          description: "Instant support via chat",
                          availability: "24/7",
                          color: "from-green-500 to-emerald-500"
                        },
                        {
                          icon: Phone,
                          title: "Phone Support",
                          description: "Direct line to experts",
                          availability: "Business Hours",
                          color: "from-blue-500 to-cyan-500"
                        },
                        {
                          icon: Mail,
                          title: "Email Support", 
                          description: "Detailed technical help",
                          availability: "< 4hr response",
                          color: "from-purple-500 to-pink-500"
                        },
                        {
                          icon: BookOpen,
                          title: "Knowledge Base",
                          description: "Self-service resources",
                          availability: "Always available",
                          color: "from-orange-500 to-red-500"
                        }
                      ].map((channel, index) => {
                        const ChannelIcon = channel.icon;
                        return (
                          <motion.div
                            key={index}
                            className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, borderColor: 'rgba(59, 130, 246, 0.5)' }}
                          >
                            <div className={`w-16 h-16 bg-gradient-to-br ${channel.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                              <ChannelIcon className="w-8 h-8 text-white" />
                            </div>
                            <h5 className="text-lg font-bold text-slate-100 mb-2">
                              {channel.title}
                            </h5>
                            <p className="text-slate-400 text-sm mb-3">
                              {channel.description}
                            </p>
                            <span className="inline-block bg-slate-700/50 text-slate-300 px-3 py-1 rounded-full text-xs">
                              {channel.availability}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Contact CTA */}
                  <motion.div
                    className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl p-8 text-center text-white"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className="text-3xl font-bold mb-4">Ready to Get Started?</h4>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                      Our team of experts is ready to help you transform your medical billing operations.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <motion.button
                        className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Schedule Consultation
                      </motion.button>
                      <motion.button
                        className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Download Service Guide
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
});

/**
 * Main Ultra Service Pages Component
 */
const UltraServicePagesComponent = () => {
  const [selectedService, setSelectedService] = useState<UltraServiceDetail | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'popularity' | 'price' | 'name'>('popularity');
  const [filterBy, setFilterBy] = useState<'all' | 'available' | 'beta' | 'coming-soon'>('all');

  const filteredServices = useMemo(() => {
    let filtered = ultraServiceDetails.filter((service) => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterBy === 'all' || 
        service.features.some(feature => feature.availability === filterBy);
      return matchesSearch && matchesFilter;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return b.features[0]?.popularity || 0 - (a.features[0]?.popularity || 0);
        case 'price':
          return a.pricing.starter.price - b.pricing.starter.price;
        case 'name':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, sortBy, filterBy]);

  if (selectedService) {
    return (
      <ServiceDetailPage 
        service={selectedService} 
        onBack={() => setSelectedService(null)} 
      />
    );
  }

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-950/30 to-slate-900 transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
            Revolutionary Medical Billing Solutions
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Transform your practice with AI-powered automation, predictive analytics, and seamless integrations
          </p>
        </motion.div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          {/* Search */}
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-500"
            />
          </div>

          {/* Filters */}
          <div className="flex gap-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-200"
              aria-label="Sort services by"
            >
              <option value="popularity">Most Popular</option>
              <option value="price">Price: Low to High</option>
              <option value="name">Alphabetical</option>
            </select>

            <select
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value as any)}
              className="bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-200"
              aria-label="Filter services by availability"
            >
              <option value="all">All Services</option>
              <option value="available">Available Now</option>
              <option value="beta">Beta Access</option>
              <option value="coming-soon">Coming Soon</option>
            </select>

            {/* View Mode Toggle */}
            <div className="flex bg-slate-800/50 border border-slate-700 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  viewMode === 'grid' 
                    ? 'bg-blue-500 text-white' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  viewMode === 'list' 
                    ? 'bg-blue-500 text-white' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                List
              </button>
            </div>
          </div>
        </div>

        {/* Services Grid/List */}
        <div className={viewMode === 'grid' 
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
          : 'space-y-6'
        }>
          {filteredServices.map((service, index) => (
            <UltraServiceCard
              key={service.id}
              service={service}
              index={index}
              viewMode={viewMode}
              onSelect={setSelectedService}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h3 className="text-2xl font-bold text-slate-300 mb-4">
              No services found
            </h3>
            <p className="text-slate-500">
              Try adjusting your search terms or filters
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export const UltraServicePages = React.memo(UltraServicePagesComponent);
export default UltraServicePages;
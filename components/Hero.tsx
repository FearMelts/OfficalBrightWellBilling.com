import React from "react";

const heroData = {
  hero: {
    title: "Illuminate Your Medical Revenue",
    description:
      "Transform your healthcare practice with our comprehensive medical billing solutions. Maximize revenue, ensure compliance, and focus on what matters most - patient care.",
    actions: ["Get Started Today", "Schedule Demo"],
  },
  key_metrics: [
    {
      value: "2.5M+",
      description: "Claims Processed",
    },
    {
      value: "1,200+",
      description: "Healthcare Providers",
    },
    {
      value: "37%",
      description: "Average Revenue Increase",
    },
    {
      value: "98.1%",
      description: "Claim Success Rate",
    },
  ],
  solutions: [
    {
      title: "Streamlined Billing",
      description:
        "Efficient processes to ensure timely and accurate billing with automated workflows and real-time tracking.",
    },
    {
      title: "Compliance Assurance",
      description:
        "Stay compliant with the latest healthcare regulations including HIPAA, ICD-10, and billing standards.",
    },
    {
      title: "Dedicated Support",
      description:
        "Expert support team available 24/7 to handle all your billing inquiries and provide personalized assistance.",
    },
    {
      title: "Revenue Optimization",
      description:
        "Advanced analytics and reporting to maximize your revenue potential and minimize claim denials.",
    },
    {
      title: "Seamless Integration",
      description:
        "Easy integration with existing practice management systems and EHR platforms for smooth operations.",
    },
    {
      title: "Data Security",
      description:
        "Bank-level security measures to protect sensitive patient information and ensure complete data privacy.",
    },
  ],
  services: [
    {
      title: "Streamlined Billing Solutions",
      description:
        "Efficient processes to ensure timely and accurate billing with automated workflows.",
      metrics: [
        {
          value: "99.2%",
          description: "Accuracy",
        },
        {
          value: "75% faster",
          description: "Efficiency",
        },
        {
          value: "98% client satisfaction",
          description: "Satisfaction",
        },
      ],
      rating: "Top Rated Service",
    },
    {
      title: "Compliance Assurance",
      description:
        "Stay compliant with the latest healthcare regulations including HIPAA, ICD-10, and billing standards.",
      metrics: [
        {
          value: "100% compliance rate",
          description: "Accuracy",
        },
        {
          value: "90% fewer violations",
          description: "Efficiency",
        },
        {
          value: "96% audit success rate",
          description: "Satisfaction",
        },
      ],
      rating: "Top Rated Service",
    },
    {
      title: "Dedicated Support Services",
      description:
        "Expert support team available 24/7 to handle all your billing inquiries and provide personalized assistance.",
      metrics: [
        {
          value: "30-second avg response",
          description: "Accuracy",
        },
        {
          value: "99.8% uptime",
          description: "Efficiency",
        },
        {
          value: "97% satisfaction rate",
          description: "Satisfaction",
        },
      ],
      rating: "Top Rated Service",
    },
  ],
  cta: {
    title: "Ready to Transform Your Billing?",
    description:
      "Let our experts analyze your current billing processes and recommend the perfect solution for your practice.",
    actions: ["Schedule Consultation", "Download Service Guide"],
  },
  success_stories: [
    {
      name: "Dr. Sarah Johnson",
      title: "Chief Medical Officer",
      company: "Metro Health Group",
      testimonial:
        "BrightWell transformed our billing process completely. Our revenue increased by 40% in just 3 months, and our staff can now focus on patient care instead of paperwork.",
      metrics: [
        {
          value: "40%",
          description: "Revenue Increase",
        },
        {
          value: "98.5%",
          description: "Claims Accuracy",
        },
        {
          value: "15 hours/week",
          description: "Times Saved",
        },
      ],
    },
    {
      date: "1/9/2024",
      name: "Dr. Sarah Johnson",
      title: "Chief Medical Officer",
      company: "Metro Health Group",
      location: "Atlanta, GA",
      specialty: "Family Medicine",
      testimonial:
        "BrightWell transformed our billing process completely. Our revenue increased by 40% in just 3 months, and our staff can now focus on patient care instead of paperwork.",
      metrics: [
        {
          value: "40%",
          description: "Revenue",
        },
        {
          value: "98.5%",
          description: "Accuracy",
        },
        {
          value: "15 hours/week",
          description: "Saved",
        },
      ],
    },
    {
      date: "1/4/2024",
      name: "Dr. Michael Chen",
      title: "Practice Owner",
      company: "Sunrise Family Practice",
      location: "San Francisco, CA",
      specialty: "Internal Medicine",
      testimonial:
        "The automation and accuracy we gained with BrightWell allowed us to expand our practice without hiring additional billing staff. It's been a game-changer for our bottom line.",
      metrics: [
        {
          value: "35%",
          description: "Revenue",
        },
        {
          value: "97.8%",
          description: "Accuracy",
        },
        {
          value: "20 hours/week",
          description: "Saved",
        },
      ],
    },
    {
      date: "12/27/2023",
      name: "Lisa Rodriguez, RN",
      title: "Practice Manager",
      company: "Wellness Center Plus",
      location: "Houston, TX",
      specialty: "Multi-Specialty Clinic",
      testimonial:
        "The support team at BrightWell is incredible. They're always ready to assist us, and their expertise has been invaluable to our practice growth.",
      metrics: [
        {
          value: "28%",
          description: "Revenue",
        },
        {
          value: "96.9%",
          description: "Accuracy",
        },
        {
          value: "12 hours/week",
          description: "Saved",
        },
      ],
    },
    {
      date: "12/19/2023",
      name: "Dr. James Wilson",
      title: "Medical Director",
      company: "Advanced Care Clinic",
      location: "Denver, CO",
      specialty: "Orthopedic Surgery",
      testimonial:
        "Our denial rate dropped to less than 2% since partnering with BrightWell. The accuracy and speed of their billing process is outstanding.",
      metrics: [
        {
          value: "45%",
          description: "Revenue",
        },
        {
          value: "99.1%",
          description: "Accuracy",
        },
        {
          value: "25 hours/week",
          description: "Saved",
        },
      ],
    },
  ],
  overall_results: {
    metrics: [
      {
        value: "37%",
        description: "Average Revenue Increase",
      },
      {
        value: "98.1%",
        description: "Claim Acceptance Rate",
      },
      {
        value: "500+",
        description: "Happy Practices",
      },
      {
        value: "18",
        description: "Hours Saved Weekly",
      },
    ],
  },
  testimonials: [
    {
      author_initials: "DSJ",
      testimonial:
        "BrightWell transformed our billing process completely! Our revenue increased by 40% in just 3 months.",
      name: "Dr. Sarah Johnson",
      title: "Chief Medical Officer",
      company: "Metro Health Group",
    },
    {
      author_initials: "MC",
      testimonial:
        "Our claims are processed faster and with greater accuracy. The team is incredibly responsive and professional.",
      name: "Mike Chen",
      title: "Practice Manager",
      company: "Sunrise Family Practice",
    },
    {
      author_initials: "LR",
      testimonial:
        "The support team is always ready to assist us. Their expertise has been invaluable to our practice growth.",
      name: "Lisa Rodriguez",
      title: "Healthcare Provider",
      company: "Wellness Center Plus",
    },
    {
      author_initials: "DJW",
      testimonial:
        "Outstanding service and remarkable results. Our denial rate dropped to less than 2% since partnering with BrightWell.",
      name: "Dr. James Wilson",
      title: "Medical Director",
      company: "Advanced Care Clinic",
    },
  ],
  insights: [
    {
      category: "Compliance",
      date: "1/14/2024",
      duration: "8 min read",
      title: "Understanding Medical Billing Compliance in 2024",
      description:
        "Navigate the latest HIPAA requirements and billing regulations that affect your practice revenue.",
      author: "Dr. Sarah Mitchell, CPC",
    },
    {
      category: "Technology",
      date: "1/11/2024",
      duration: "6 min read",
      title: "AI in Medical Billing: Reducing Claim Denials by 85%",
      description:
        "Discover how artificial intelligence is revolutionizing medical billing accuracy and efficiency.",
      author: "Michael Chen, MBA",
    },
    {
      category: "Strategy",
      date: "1/9/2024",
      duration: "12 min read",
      title: "Maximizing Revenue: 15 Billing Optimization Strategies",
      description:
        "Proven strategies to increase your practice revenue and reduce administrative overhead.",
      author: "Jennifer Rodriguez, RN, CCS",
    },
    {
      category: "Telehealth",
      date: "1/7/2024",
      duration: "10 min read",
      title: "Telehealth Billing: Essential Guidelines for 2024",
      description:
        "Complete guide to telehealth billing codes, reimbursement rates, and compliance requirements.",
      author: "Dr. Robert Kim, MD, MBA",
    },
    {
      category: "Small Practice",
      date: "1/4/2024",
      duration: "7 min read",
      title: "Small Practice Success: Billing Tips for Independent Providers",
      description:
        "Practical advice for small practices to streamline billing and improve cash flow.",
      author: "Lisa Thompson, CPA",
    },
    {
      category: "Coding",
      date: "1/2/2024",
      duration: "15 min read",
      title: "ICD-11 Transition: What Healthcare Providers Need to Know",
      description:
        "Prepare your practice for the upcoming ICD-11 implementation with our comprehensive guide.",
      author: "Dr. Amanda Foster, RHIA",
    },
  ],
  contact: {
    title: "Get In Touch",
    description:
      "Ready to transform your medical billing? Contact us today for a free consultation and discover how we can optimize your revenue cycle.",
    phone_support: {
      description: "Speak directly with our billing specialists",
      number: "1-800-BILLING (1-800-245-5464)",
      availability: "Available 24/7 for urgent matters",
    },
    email_support: {
      description: "Send us detailed questions and documentation",
      email: "support@brightwell.com",
      response_time: "Response within 4 hours",
    },
    practice_visit: {
      description: "On-site consultation and setup assistance",
      availability: "Available in major metropolitan areas",
    },
    office_locations: {
      description: "Visit our regional offices for in-person support",
      number_of_locations: "12 locations nationwide",
      hours: "Mon-Fri 8AM-6PM local time",
    },
  },
  contact_form: {
    fields: [
      "First Name",
      "Last Name",
      "Email Address",
      "Phone Number",
      "Practice Type",
      "Practice Size",
      "Current Billing System (Optional)",
      "How Can We Help You?",
    ],
    priority: "Select priority level",
  },
  footer: {
    description:
      "Illuminating your path to optimized medical revenue through expert billing solutions.",
    contact_phone: "(555) 123-4567",
    contact_email: "hello@brightwell.com",
    address: "Healthcare District, TX",
    copyright: "© 2024 BrightWell Medical Billing. All rights reserved.",
  },
  navigation: ["Home", "Services", "Success Stories", "Insights", "Contact"],
  services_list: [
    "Revenue Cycle Management",
    "Claims Processing",
    "Compliance Monitoring",
    "Analytics & Reporting",
  ],
  company_list: ["About Us", "Careers", "News & Updates", "Case Studies"],
};

const Hero: React.FC = () => (
  <section>
    <h1>{heroData.hero.title}</h1>
    <p>{heroData.hero.description}</p>
    {/* Add more rendering logic as needed */}
  </section>
);

export default Hero;
export { heroData };

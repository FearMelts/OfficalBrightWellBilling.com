import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { motion } from 'framer-motion';
import { AlertCircle, ArrowLeft, CheckCircle, Clock, Code2, FileText, Layers, Lightbulb, RefreshCcw, Settings, Sparkles, Target, Terminal } from "lucide-react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

/**
 * Metadata configuration for the BrightWell Billing application.
 * Used by Next.js for SEO, social sharing, and site verification.
 */
export const metadata: Metadata = {
  title: {
    default: "BrightWell Billing - Enterprise Billing Solutions",
    template: "%s | BrightWell Billing",
  },
  description:
    "Advanced billing system with cutting-edge animations and performance optimization for modern businesses.",
  keywords: [
    "billing",
    "invoicing",
    "payments",
    "stripe",
    "saas",
    "subscription",
  ],
  authors: [{ name: "BrightWell Team" }],
  creator: "BrightWell Systems",
  publisher: "BrightWell Systems",
  metadataBase: new URL("https://brightwell-billing.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brightwell-billing.com",
    title: "BrightWell Billing - Enterprise Billing Solutions",
    description:
      "Advanced billing system with cutting-edge animations and performance optimization for modern businesses.",
    siteName: "BrightWell Billing",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BrightWell Billing Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BrightWell Billing - Enterprise Billing Solutions",
    description:
      "Advanced billing system with cutting-edge animations and performance optimization for modern businesses.",
    images: ["/og-image.jpg"],
    creator: "@brightwellbilling",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

/**
 * The root layout component for the BrightWell Billing application.
 * Wraps all pages with theme provider, global styles, and toaster notifications.
 *
 * @param children - React children nodes to be rendered inside the layout.
 * @returns The HTML structure for the application.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8b5cf6" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen bg-background">
            {children}
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
// Phase data type definition
interface PhaseData {
  id: number;
  title: string;
  objective: string;
  description: string;
  icon: any;
  duration: string;
  prerequisites: string[];
  tasks: {
    category: string;
    items: string[];
  }[];
  tools: string[];
  deliverables: string[];
  codeSnippets: {
    [x: string]: Key | null | undefined;
    title: string;
    language: string;
    code: string;
  }[];
  folderStructure?: string[];
  milestone?: string;
  personalNotes?: string[];
}

/**
 * Complete phase data with all tasks filled in
 */
const phaseData: Record<number, PhaseData> = {
  1: {
    id: 1,
    title: 'Project Setup',
    objective: 'Establish rock-solid foundation with TypeScript, tooling, and development environment',
    description: 'Complete project initialization with strict configurations, linting, and CI/CD pipeline setup.',
    icon: Settings,
    duration: '1-2 days',
    prerequisites: [
      'Node.js 18+ installed',
      'Git configured',
      'Code editor with TypeScript support',
      'Basic understanding of React and TypeScript'
    ],
    tasks: [
      {
        category: 'Project Initialization',
        items: [
          'Initialize React project with Vite + TypeScript template using `npm create vite@latest grok4-project --template react-ts`',
          'Configure package.json with proper project metadata, scripts, and author information',
          'Set up .gitignore with comprehensive exclusions: node_modules, .env files, build artifacts, IDE files',
          'Initialize git repository and create initial commit with message "feat: initial project setup"',
          'Create .nvmrc file specifying Node.js version (18.17.0 or higher)',
          'Set up package-lock.json verification in CI to prevent dependency drift'
        ]
      },
      {
        category: 'TypeScript Configuration',
        items: [
          'Configure tsconfig.json with strict mode: "strict": true, "noUncheckedIndexedAccess": true',
          'Enable path mapping for absolute imports: "@/*": ["./src/*"]',
          'Set target to ES2022 and module to ESNext for modern browser support',
          'Configure incremental compilation and composite projects for faster builds',
          'Add types for Node.js, React, and Vite in devDependencies',
          'Create types/index.ts for global type definitions and interfaces'
        ]
      },
      {
        category: 'Linting and Code Quality',
        items: [
          'Install ESLint with @typescript-eslint/parser and @typescript-eslint/eslint-plugin',
          'Configure .eslintrc.json with React, TypeScript, and accessibility rules',
          'Add eslint-plugin-react-hooks for React hooks linting',
          'Install Prettier with .prettierrc configuration: 2-space indents, single quotes, trailing commas',
          'Add .eslintignore and .prettierignore files to exclude build and config files',
          'Configure VS Code settings.json for auto-format on save and lint on type'
        ]
      },
      {
        category: 'Development Environment',
        items: [
          'Set up Husky for Git hooks: pre-commit linting and type checking',
          'Configure lint-staged to run prettier and eslint on staged files only',
          'Install and configure Tailwind CSS with PostCSS and autoprefixer',
          'Create tailwind.config.js with custom theme, colors, and utility classes',
          'Set up absolute imports in vite.config.ts with path resolution',
          'Configure environment variables with .env.example template'
        ]
      },
      {
        category: 'Project Structure',
        items: [
          'Create organized folder structure: /src/components, /src/pages, /src/types, /src/utils, /src/hooks',
          'Set up /src/components/ui for reusable UI components',
          'Create /src/assets for static files and images',
          'Add /src/styles for global styles and Tailwind imports',
          'Set up /public directory with favicon and manifest files',
          'Create /docs folder for project documentation and guides'
        ]
      }
    ],
    tools: ['Vite', 'TypeScript', 'ESLint', 'Prettier', 'Husky', 'Tailwind CSS', 'PostCSS'],
    deliverables: [
      'Fully configured development environment with zero build errors',
      'Complete tooling setup with automated code quality checks',
      'Comprehensive README.md with setup and contribution guidelines',
      'Clean, organized project structure with proper import paths',
      'Git repository with initial commit and proper .gitignore'
    ],
    codeSnippets: [
      {
        title: 'tsconfig.json Configuration',
        language: 'json',
        code: `{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": false,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}`
      },
      {
        title: 'Package.json Scripts',
        language: 'json',
        code: `{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "lint:fix": "eslint . --ext ts,tsx --fix",
    "preview": "vite preview",
    "type-check": "tsc --noEmit",
    "format": "prettier --write 'src/**/*.{ts,tsx,js,jsx,json,css,md}'",
    "format:check": "prettier --check 'src/**/*.{ts,tsx,js,jsx,json,css,md}'"
  }
}`
      }
    ],
    folderStructure: [
      'src/',
      '├── components/',
      '│   ├── ui/',
      '│   └── common/',
      '├── pages/',
      '├── hooks/',
      '├── utils/',
      '├── types/',
      '├── styles/',
      '└── assets/',
      'public/',
      'docs/',
      '.husky/',
      'tests/'
    ]
  },

  2: {
    id: 2,
    title: 'Basic Layout & Routing',
    objective: 'Implement core navigation structure and responsive layout foundation',
    description: 'Build the fundamental page structure, routing system, and responsive layout components.',
    icon: Layers,
    duration: '2-3 days',
    prerequisites: [
      'Phase 1 completed successfully',
      'Development environment fully operational',
      'Basic understanding of React Router',
      'Familiarity with responsive design principles'
    ],
    tasks: [
      {
        category: 'Routing Setup',
        items: [
          'Install React Router DOM v6 with `npm install react-router-dom @types/react-router-dom`',
          'Create main App component with BrowserRouter wrapper and route configuration',
          'Set up route structure: /, /phases, /phase/:id, /resources, /documentation',
          'Implement 404 error page with helpful navigation links and search functionality',
          'Add route guards for protected content and authentication if needed',
          'Configure basename for deployment to subdirectories if required'
        ]
      },
      {
        category: 'Layout Components',
        items: [
          'Create responsive Header component with navigation menu and mobile hamburger',
          'Build Footer component with project links, version info, and contact details',
          'Implement Layout wrapper component for consistent page structure and spacing',
          'Create Sidebar component for phase navigation with sticky positioning',
          'Add Breadcrumb component for navigation context and user orientation',
          'Build LoadingSpinner component for route transitions and async operations'
        ]
      },
      {
        category: 'Navigation System',
        items: [
          'Implement active link highlighting with React Router\'s NavLink component',
          'Add keyboard navigation support with proper focus management',
          'Create mobile-responsive navigation with slide-out menu and overlay',
          'Set up navigation state management for menu open/close states',
          'Add smooth scroll behavior for in-page navigation links',
          'Implement skip-to-content link for accessibility compliance'
        ]
      },
      {
        category: 'Page Structure',
        items: [
          'Create HomePage component with hero section and phase overview',
          'Build PhasesPage with filterable and searchable phase list',
          'Implement PhaseDetailPage with comprehensive phase information',
          'Create ResourcesPage with categorized development resources',
          'Add DocumentationPage with API references and guides',
          'Set up proper page titles and meta descriptions for SEO'
        ]
      }
    ],
    tools: ['React Router DOM', 'Framer Motion', 'Tailwind CSS', 'React Helmet Async'],
    deliverables: [
      'Complete routing system with all pages connected and functional',
      'Responsive navigation working on mobile, tablet, and desktop',
      'Accessible layout components with proper ARIA labels',
      'SEO-optimized page structure with meta tags and titles'
    ],
    codeSnippets: [
      {
        title: 'App Router Configuration',
        language: 'tsx',
        code: `import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { HomePage } from '@/pages/HomePage';
import { PhasesPage } from '@/pages/PhasesPage';
import { PhaseDetailPage } from '@/pages/PhaseDetailPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/phases" element={<PhasesPage />} />
          <Route path="/phase/:id" element={<PhaseDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}`
      }
    ],
    folderStructure: [
      'src/pages/',
      '├── HomePage.tsx',
      '├── PhasesPage.tsx',
      '├── PhaseDetailPage.tsx',
      '├── ResourcesPage.tsx',
      '└── NotFoundPage.tsx'
    ]
  },

  3: {
    id: 3,
    title: 'Core Components & Content',
    objective: 'Develop reusable UI components and implement primary content sections',
    description: 'Build comprehensive component library and populate all content with production-ready copy.',
    icon: Code2,
    duration: '4-5 days',
    prerequisites: [
      'Phases 1-2 completed successfully',
      'Routing system fully functional',
      'Design system understanding',
      'Component architecture planning'
    ],
    tasks: [
      {
        category: 'UI Component Library',
        items: [
          'Create Button component with variants: primary, secondary, outline, ghost, and danger',
          'Build Input, Textarea, and Select form components with validation states',
          'Implement Card component with elevation levels, hover states, and content variants',
          'Create Modal/Dialog component with focus trap, escape handling, and backdrop click',
          'Build Accordion/Collapsible component with smooth animations and keyboard navigation',
          'Implement Tooltip component with smart positioning and delay controls'
        ]
      },
      {
        category: 'Content Components',
        items: [
          'Create PhaseCard component for phase overview display with status indicators',
          'Build TaskList component with checkbox functionality and progress tracking',
          'Implement CodeBlock component with syntax highlighting and copy functionality',
          'Create ProgressBar component for phase completion and overall project status',
          'Build Timeline component for project milestones and phase progression',
          'Add ResourceCard component for documentation and tool listings'
        ]
      },
      {
        category: 'Content Population',
        items: [
          'Write comprehensive homepage content with mission statement and value propositions',
          'Create detailed phase descriptions with complete task lists (no placeholders)',
          'Add professional copy for all UI components and error states',
          'Write comprehensive documentation for component usage and API',
          'Create resource descriptions with proper categorization and tagging',
          'Add proper meta descriptions and SEO content for all pages'
        ]
      },
      {
        category: 'TypeScript Integration',
        items: [
          'Define comprehensive TypeScript interfaces for all component props',
          'Create type definitions for phase data, tasks, and project structure',
          'Add proper generic types for reusable components like lists and cards',
          'Implement strict null checking and undefined handling throughout',
          'Create utility types for common patterns like status, priority, and size',
          'Add JSDoc comments for all public interfaces and component props'
        ]
      }
    ],
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Hook Form'],
    deliverables: [
      'Complete component library with TypeScript interfaces and documentation',
      'All pages populated with production-ready content (zero placeholders)',
      'Comprehensive component documentation with usage examples',
      'Consistent design system implementation across all components'
    ],
    codeSnippets: [
      {
        title: 'Button Component with Variants',
        language: 'tsx',
        code: `interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  loading = false,
  children,
  className = '',
  ...props 
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
    ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
        
  return (
    <button
      className={\`\${baseClasses} \${variants[variant]} \${sizes[size]} \${className}\`}
      disabled={loading}
      {...props}
    >
      {loading && <Spinner className="mr-2 h-4 w-4" />}
      {children}
    </button>
}`
      }
    ],
    milestone: 'DEPLOYMENT CHECKPOINT: Upload to production server after Phase 3 completion',
    personalNotes: [
      'This phase represents the first major milestone where the project becomes visually complete',
      'After completing Phase 3, the website should be fully functional for basic use',
      'Consider creating a staging deployment to test all components and content',
      'Document any component design decisions for future reference and team onboarding'
    ]
  },

  4: {
    id: 4,
    title: 'Responsive Design & UI Enhancements',
    objective: 'Perfect mobile experience and add sophisticated UI interactions',
    description: 'Optimize for all screen sizes and implement advanced animations and micro-interactions.',
    icon: Sparkles,
    duration: '3-4 days',
    prerequisites: [
      'Phase 3 completed with all components functional',
      'Understanding of responsive design principles',
      'Familiarity with CSS Grid and Flexbox',
      'Basic animation and interaction knowledge'
    ],
    tasks: [
      {
        category: 'Responsive Implementation',
        items: [
          'Implement comprehensive responsive breakpoint system: sm (640px), md (768px), lg (1024px), xl (1280px)',
          'Optimize mobile navigation with touch-friendly targets (minimum 44px)',
          'Create responsive grid layouts that adapt from 1 to 4 columns based on screen size',
          'Implement responsive typography scaling with clamp() functions for fluid text',
          'Add responsive spacing system using Tailwind\'s responsive prefixes',
          'Ensure all interactive elements meet accessibility size requirements on mobile'
        ]
      },
      {
        category: 'Animation System',
        items: [
          'Create centralized animation variants library using Framer Motion',
          'Implement smooth page transitions with enter/exit animations',
          'Add micro-interactions for hover states, button clicks, and focus indicators',
          'Create loading animations for async operations and route changes',
          'Implement scroll-triggered animations with intersection observer',
          'Add reduced-motion support respecting user preferences'
        ]
      },
      {
        category: 'Performance Optimization',
        items: [
          'Implement lazy loading for images and heavy components below the fold',
          'Add proper image optimization with responsive sizes and WebP format',
          'Optimize animation performance using transform and opacity properties',
          'Implement virtual scrolling for long lists and large datasets',
          'Add proper loading states and skeleton screens for better perceived performance',
          'Optimize bundle size by code splitting and dynamic imports'
        ]
      },
      {
        category: 'Accessibility Enhancements',
        items: [
          'Implement comprehensive keyboard navigation for all interactive elements',
          'Add proper focus management with focus trap for modals and menus',
          'Create high contrast mode support with proper color combinations',
          'Add screen reader announcements for dynamic content changes',
          'Implement proper heading hierarchy and landmark regions',
          'Test with screen readers and keyboard-only navigation'
        ]
      }
    ],
    tools: ['Framer Motion', 'Intersection Observer API', 'CSS Container Queries', 'React Error Boundary'],
    deliverables: [
      'Fully responsive design tested across all major breakpoints and devices',
      'Smooth animations and micro-interactions enhancing user experience',
      'Perfect mobile experience with touch-optimized interactions',
      'Comprehensive accessibility implementation meeting WCAG 2.1 AA standards'
    ],
    codeSnippets: [
      {
        title: 'Responsive Animation Variants',
        language: 'tsx',
        code: `const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.25, 0, 1]
    }
  },
  hover: {
    y: -4,
    scale: 1.02,
    transition: {
      duration: 0.2
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};`
      }
    ]
  },

  5: {
    id: 5,
    title: 'Testing & Optimization',
    objective: 'Ensure bulletproof quality through comprehensive testing and performance optimization',
    description: 'Implement testing suite, accessibility audits, and performance optimization strategies.',
    icon: CheckCircle,
    duration: '3-4 days',
    prerequisites: [
      'All previous phases completed successfully',
      'Understanding of testing methodologies',
      'Familiarity with performance optimization',
      'Basic knowledge of CI/CD pipelines'
    ],
    tasks: [
      {
        category: 'Testing Implementation',
        items: [
          'Set up Jest and React Testing Library with proper TypeScript configuration',
          'Write unit tests for all utility functions and custom hooks',
          'Create component tests for all UI components with user interaction scenarios',
          'Implement integration tests for critical user flows and page navigation',
          'Add snapshot tests for components to prevent unintended visual regressions',
          'Set up test coverage reporting with minimum 90% coverage requirement'
        ]
      },
      {
        category: 'End-to-End Testing',
        items: [
          'Install and configure Cypress or Playwright for E2E testing',
          'Create test scenarios for complete user journeys through the application',
          'Add tests for responsive behavior across different device sizes',
          'Implement tests for accessibility features and keyboard navigation',
          'Create visual regression tests to catch unintended UI changes',
          'Set up parallel test execution for faster CI pipeline runs'
        ]
      },
      {
        category: 'Performance Optimization',
        items: [
          'Run Lighthouse audits and optimize for 90+ scores in all categories',
          'Implement Core Web Vitals tracking and optimization (LCP, FID, CLS)',
          'Add bundle analyzer to identify and eliminate unused code',
          'Optimize images with proper formats, sizes, and loading strategies',
          'Implement service worker for caching and offline functionality',
          'Add performance monitoring with Real User Monitoring (RUM) integration'
        ]
      },
      {
        category: 'Quality Assurance',
        items: [
          'Set up automated accessibility testing with axe-core integration',
          'Implement cross-browser testing for Chrome, Firefox, Safari, and Edge',
          'Add security scanning for dependencies and potential vulnerabilities',
          'Create comprehensive error boundary implementation with logging',
          'Set up monitoring and alerting for production errors and performance',
          'Add comprehensive logging for debugging and user behavior analysis'
        ]
      }
    ],
    tools: ['Jest', 'React Testing Library', 'Cypress', 'Lighthouse', 'axe-core', 'Bundle Analyzer'],
    deliverables: [
      'Complete testing suite with high coverage and reliable test scenarios',
      'Accessibility compliance meeting WCAG 2.1 AA standards',
      'Optimized performance with 90+ Lighthouse scores across all metrics',
      'Comprehensive SEO implementation with proper meta tags and structure'
    ],
    codeSnippets: [
      {
        title: 'Component Test Example',
        language: 'tsx',
        code: `import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { PhaseCard } from '@/components/PhaseCard';
import { mockPhaseData } from '@/tests/mocks';

describe('PhaseCard Component', () => {
  it('renders phase information correctly', () => {
    render(<PhaseCard phase={mockPhaseData} />);
    
    expect(screen.getByText(mockPhaseData.title)).toBeInTheDocument();
    expect(screen.getByText(mockPhaseData.description)).toBeInTheDocument();
    expect(screen.getByLabelText('Phase status')).toHaveTextContent(mockPhaseData.status);
  });

  it('handles expand/collapse interaction', async () => {
    render(<PhaseCard phase={mockPhaseData} />);
    
    const expandButton = screen.getByRole('button', { name: /expand phase details/i });
    fireEvent.click(expandButton);
    
    await waitFor(() => {
      expect(screen.getByText('Task List')).toBeVisible();
    });
  });

  it('meets accessibility requirements', () => {
    render(<PhaseCard phase={mockPhaseData} />);
    
    expect(screen.getByRole('article')).toHaveAttribute('aria-labelledby');
    expect(screen.getByRole('button')).toHaveAttribute('aria-expanded');
  });
});`
      }
    ]
  },

  6: {
    id: 6,
    title: 'Advanced Features & Infinite Upgrades',
    objective: 'Implement advanced functionality and establish framework for continuous AI-led improvements',
    description: 'Add sophisticated features and create architecture for unlimited future enhancements.',
    icon: RefreshCcw,
    duration: 'Ongoing',
    prerequisites: [
      'All previous phases completed and tested',
      'Production deployment successful',
      'Team onboarding completed',
      'Understanding of scalable architecture patterns'
    ],
    tasks: [
      {
        category: 'Advanced State Management',
        items: [
          'Implement Zustand or Redux Toolkit for complex state management',
          'Add persistent state management for user preferences and progress',
          'Create optimistic updates for better user experience during async operations',
          'Implement undo/redo functionality for user actions',
          'Add real-time collaboration features with WebSocket integration',
          'Create state synchronization across multiple browser tabs'
        ]
      },
      {
        category: 'Content Management System',
        items: [
          'Integrate headless CMS (Contentful, Strapi) for dynamic content management',
          'Add content versioning and rollback capabilities',
          'Implement content preview and draft functionality',
          'Create multi-language support with internationalization (i18n)',
          'Add content search and filtering capabilities',
          'Implement content analytics and usage tracking'
        ]
      },
      {
        category: 'AI Integration Framework',
        items: [
          'Create plugin architecture for AI-powered feature additions',
          'Implement content generation APIs for automated documentation',
          'Add intelligent content suggestions and recommendations',
          'Create automated testing generation based on component changes',
          'Implement smart code refactoring suggestions',
          'Add AI-powered accessibility auditing and suggestions'
        ]
      },
      {
        category: 'Analytics and Monitoring',
        items: [
          'Implement comprehensive user analytics with privacy compliance',
          'Add performance monitoring with alerting and automated responses',
          'Create A/B testing framework for feature experimentation',
          'Implement error tracking with automated issue creation',
          'Add user feedback collection and analysis system',
          'Create automated performance regression detection'
        ]
      },
      {
        category: 'Deployment and DevOps',
        items: [
          'Set up multi-environment deployment pipeline (dev, staging, prod)',
          'Implement blue-green deployment strategy for zero-downtime updates',
          'Add automated rollback capabilities based on health checks',
          'Create infrastructure as code with Terraform or CDK',
          'Implement automated security scanning and vulnerability management',
          'Add comprehensive backup and disaster recovery procedures'
        ]
      }
    ],
    tools: ['Zustand', 'Socket.io', 'Contentful', 'Workbox', 'React Query', 'Storybook'],
    deliverables: [
      'Advanced feature set ready for enterprise-scale usage',
      'Scalable architecture supporting unlimited future enhancements',
      'Comprehensive monitoring and analytics providing actionable insights',
      'AI integration framework enabling continuous automated improvements'
    ],
    codeSnippets: [
      {
        title: 'AI Integration Plugin Architecture',
        language: 'tsx',
        code: `interface AIPlugin {
  name: string;
  version: string;
  capabilities: AICapability[];
  execute: (context: AIContext) => Promise<AIResult>;
}

class AIPluginManager {
  private plugins: Map<string, AIPlugin> = new Map();
  
  register(plugin: AIPlugin): void {
    this.plugins.set(plugin.name, plugin);
  }
  
  async executePlugin(name: string, context: AIContext): Promise<AIResult> {
    const plugin = this.plugins.get(name);
    if (!plugin) {
      throw new Error(\`Plugin \${name} not found\`);
    }
    
    return await plugin.execute(context);
  }
  
  getAvailableCapabilities(): AICapability[] {
    return Array.from(this.plugins.values())
      .flatMap(plugin => plugin.capabilities);
  }
}`
      }
    ],
    personalNotes: [
      'This phase represents the evolution from a static website to a dynamic, AI-powered platform',
      'Focus on creating extensible architecture that can accommodate future AI capabilities',
      'Document all integration points for future AI assistant modifications',
      'Consider creating a plugin marketplace for community-contributed enhancements'
    ]
  }
};

/**
 * Phase Detail Page Component
 */
function PhaseDetailPage() {
  const { id } = useParams<{ id: string }>();
  const phaseId = Number(id);
  const phase = phaseData[phaseId];
  const milestone = phase?.milestone;

  // Show "Phase Not Found" if phase is undefined
  if (!phase) {
    useEffect(() => {
      console.log("Phase Detail Page Component mounted");
      return () => {
        console.log("Phase Detail Page Component unmounted");
      };
    }, []);
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-100 mb-4">Phase Not Found</h1>
          <Link to="/" className="text-blue-400 hover:text-blue-300">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = phase.icon || Settings;


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-slate-800/50 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Link
            to="/"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Overview
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <IconComponent className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-100">
                Phase {phase.id}: {phase.title}
              </h1>
              <p className="text-slate-400">{phase.objective}</p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Duration: {phase.duration}
            </div>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-800/50 rounded-2xl p-6"
            >
              <h2 className="text-xl font-bold text-slate-100 mb-4">Overview</h2>
              <p className="text-slate-300 leading-relaxed">{phase.description}</p>
            </motion.div>

            {/* Prerequisites */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-slate-800/50 rounded-2xl p-6"
            >
              <h2 className="text-xl font-bold text-slate-100 mb-4 flex items-center">
                <AlertCircle className="w-5 h-5 mr-2 text-yellow-400" />
                Prerequisites
              </h2>
              <ul className="space-y-2">
                {phase.prerequisites.map((prereq, index) => (
                  <li key={index} className="flex items-start gap-2 text-slate-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    {prereq}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Tasks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-slate-800/50 rounded-2xl p-6"
            >
              <h2 className="text-xl font-bold text-slate-100 mb-6 flex items-center">
                <Target className="w-5 h-5 mr-2 text-blue-400" />
                Implementation Tasks
              </h2>

              <div className="space-y-6">
                {phase.tasks.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h3 className="text-lg font-semibold text-slate-200 mb-4">
                      {category.category}
                    </h3>
                    <div className="space-y-3">
                      {category.items.map((task, taskIndex) => (
                        <div key={taskIndex} className="flex items-start gap-3 p-3 bg-slate-900/50 rounded-lg">
                          <div className="w-5 h-5 border-2 border-slate-500 rounded mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300 text-sm leading-relaxed">{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Code Snippets */}
            {phase.codeSnippets && phase.codeSnippets.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-slate-800/50 rounded-2xl p-6"
              >
                <h2 className="text-xl font-bold text-slate-100 mb-6 flex items-center">
                  <Terminal className="w-5 h-5 mr-2 text-green-400" />
                  Code Examples
                </h2>

                <div className="space-y-6">
                  {phase.codeSnippets.map((snippet) => (
                    <div key={snippet.id} className="bg-slate-900 rounded-lg overflow-hidden">
                      <div className="bg-slate-800 px-4 py-2 border-b border-slate-700">
                        <h4 className="text-sm font-medium text-slate-200">{snippet.title}</h4>
                      </div>
                      <pre className="p-4 overflow-x-auto">
                        <code className="text-sm text-slate-300">{snippet.code}</code>
                      </pre>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Folder Structure */}
            {phase.folderStructure && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-slate-800/50 rounded-2xl p-6"
              >
                <h2 className="text-xl font-bold text-slate-100 mb-4 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-purple-400" />
                  Project Structure
                </h2>
                <pre className="text-sm text-slate-300 font-mono">
                  {phase.folderStructure.join('\n')}
                </pre>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-slate-800/50 rounded-2xl p-6"
            >
              <h3 className="text-lg font-bold text-slate-100 mb-4">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {phase.tools.map(tool => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-blue-900/30 text-blue-300 text-xs font-medium rounded-full border border-blue-700/50"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Deliverables */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-slate-800/50 rounded-2xl p-6"
            >
              <h3 className="text-lg font-bold text-slate-100 mb-4">Deliverables</h3>
              <div className="space-y-2">
                {phase.deliverables.map((deliverable) => (
                  <div key={deliverable} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{deliverable}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Milestone */}
            {milestone && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-yellow-900/20 border border-yellow-700/50 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-yellow-300 mb-2 flex items-center">
                  <Lightbulb className="w-5 h-5 mr-2" />
                  Important Milestone
                </h3>
                <p className="text-yellow-200 text-sm">{phase.milestone}</p>
              </motion.div>
            )}

            {/* Personal Notes */}
            {phase.personalNotes && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-purple-900/20 border border-purple-700/50 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-purple-300 mb-4">Personal Notes</h3>
                <div className="space-y-2">
                  {phase.personalNotes.map((note) => (
                    <p key={note} className="text-purple-200 text-sm leading-relaxed">
                      • {note}
                    </p>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
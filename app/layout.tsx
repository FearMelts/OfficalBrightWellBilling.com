import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Optimized font loading with display swap for better performance
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

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


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Optimized favicon and icons */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8b5cf6" />
        
        {/* Performance optimization hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        
        {/* Critical CSS inlining hint */}
        <meta name="color-scheme" content="dark light" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="relative min-h-screen bg-background">
            {children}
            <Toaster />
          </div>
        </ThemeProvider>
        
        {/* Performance monitoring script */}
        {process.env.NODE_ENV === 'development' && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                // Development performance monitoring
                if (typeof window !== 'undefined') {
                  window.addEventListener('load', () => {
                    console.log('Page loaded, initializing performance monitoring...');
                    import('/lib/performance/monitor.js').then(module => {
                      module.getPerformanceMonitor();
                    });
                  });
                }
              `,
            }}
          />
        )}
      </body>
    </html>
  );
}
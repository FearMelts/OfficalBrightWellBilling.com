import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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

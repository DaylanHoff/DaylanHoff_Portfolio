import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StructuredData } from "./structured-data";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Daylan Hoff - Cloud & Platform Engineer",
    template: "%s | Daylan Hoff"
  },
  description: "Salt Lake City-based Senior DevOps Engineer with six years of engineering experience. AWS, EKS, Kubernetes, Helm, Argo CD, CI/CD, and secure full-stack applications.",
  keywords: [
    "Daylan Hoff",
    "DevOps Engineer",
    "Platform Engineer",
    "Kubernetes",
    "Amazon EKS",
    "Helm",
    "Argo CD",
    "Salt Lake City",
    "C# Developer",
    ".NET Developer",
    "AWS Solutions",
    "Privacy Advocate",
    "Software Engineer",
    "Cloud Infrastructure",
    "DevOps Automation",
    "Privacy-First Development",
    "Technology Leader",
    "Full Stack Developer",
    "CI/CD Pipeline",
    "Infrastructure as Code"
  ],
  authors: [{ name: "Daylan Hoff", url: "https://daylanhoff.com" }],
  creator: "Daylan Hoff",
  publisher: "Daylan Hoff",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://daylanhoff.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://daylanhoff.com",
    siteName: "Daylan Hoff Portfolio",
    title: "Daylan Hoff - Cloud & Platform Engineer",
    description: "AWS and Kubernetes platforms, reliable CI/CD, and secure full-stack applications. Senior DevOps Engineer based in Salt Lake City, Utah.",
    images: [
      {
        url: "https://daylanhoff.com/images/metadata.png",
        secureUrl: "https://daylanhoff.com/images/metadata.png",
        width: 1200,
        height: 630,
        alt: "Daylan Hoff - Cloud & Platform Engineer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@DaylanHoff",
    title: "Daylan Hoff - DevOps Engineer & Privacy Advocate",
    description: "DevOps Engineer specializing in C#/.NET, AWS, and privacy-first application development. Building secure, scalable solutions with modern DevOps practices.",
    images: [
      {
        url: "https://daylanhoff.com/images/metadata.png",
        alt: "Daylan Hoff - DevOps Engineer & Privacy Advocate",
      },
    ],
    creator: "@DaylanHoff",
  },
  other: {
    "theme-color": "#000000",
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
    // Add other verification codes as needed
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

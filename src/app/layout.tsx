import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ScrollProgress } from "@/components/scroll-progress";
import { ScrollToTop } from "@/components/scroll-to-top";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mentorbase.io";
const SITE_NAME = "MentorBase";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFBFC" },
    { media: "(prefers-color-scheme: dark)", color: "#0B1120" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "MentorBase - All-in-One Coaching Institute Management Platform",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Manage students, teachers, attendance, exams, finances, and SMS notifications for your coaching institute. Self-service, multi-tenant, and mobile-ready. Built for coaching centers in Bangladesh.",
  keywords: [
    "coaching management",
    "coaching management software",
    "institute management",
    "student management system",
    "attendance tracking software",
    "coaching center software",
    "coaching institute management",
    "student enrollment software",
    "exam management system",
    "SMS notification system",
    "student ID card generator",
    "biometric attendance",
    "education management",
    "coaching center Bangladesh",
    "tuition management software",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

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

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "MentorBase - All-in-One Coaching Institute Management Platform",
    description:
      "Manage students, teachers, attendance, exams, finances, and SMS notifications for your coaching institute. Self-service, multi-tenant, and mobile-ready.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "MentorBase - Coaching Institute Management Platform Dashboard",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "MentorBase - All-in-One Coaching Institute Management Platform",
    description:
      "Manage students, teachers, attendance, exams, finances, and SMS for your coaching institute. No technical skills required.",
    images: ["/images/og-image.png"],
    creator: "@mentorbase_io",
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  manifest: "/site.webmanifest",

  category: "education",

  other: {
    "google-site-verification": "YOUR_GOOGLE_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} font-sans antialiased`}>
        <ThemeProvider>
          <SmoothScroll />
          <ScrollProgress />
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}

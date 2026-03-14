import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ScrollProgress } from "@/components/scroll-progress";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coaching Management - All-in-One Institute Management Platform",
  description:
    "Manage students, teachers, attendance, exams, finances, and SMS notifications for your coaching institute. Self-service, multi-tenant, and mobile-ready.",
  keywords: [
    "coaching management",
    "institute management",
    "student management",
    "attendance tracking",
    "coaching center software",
    "Bangladesh",
  ],
  openGraph: {
    title: "Coaching Management - All-in-One Institute Management Platform",
    description:
      "Manage students, teachers, attendance, exams, finances, and SMS notifications for your coaching institute.",
    images: ["/images/og-image.png"],
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
        </ThemeProvider>
      </body>
    </html>
  );
}

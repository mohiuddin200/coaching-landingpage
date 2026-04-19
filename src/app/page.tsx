import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { SocialProof } from "@/components/sections/social-proof";
import { Features } from "@/components/sections/features";
import { AppPreview } from "@/components/sections/app-preview";
import { VideoDemo } from "@/components/sections/video-demo";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Benefits } from "@/components/sections/benefits";
import { Roadmap } from "@/components/sections/roadmap";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mentorbase.io";

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MentorBase",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.svg`,
  description:
    "All-in-one cloud platform for coaching institutes. Manage students, teachers, attendance, exams, finances, and SMS notifications.",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    availableLanguage: ["English", "Bengali"],
  },
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "MentorBase",
  url: SITE_URL,
  description:
    "All-in-one coaching institute management platform. Manage students, teachers, attendance, exams, finances, and SMS notifications.",
  publisher: {
    "@type": "Organization",
    name: "MentorBase",
  },
};

const jsonLdSoftwareApp = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "MentorBase",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  url: SITE_URL,
  description:
    "All-in-one cloud platform that lets coaching institutes manage students, teachers, attendance, exams, finances, SMS notifications, and ID cards.",
  offers: [
    {
      "@type": "Offer",
      name: "Starter",
      price: "500",
      priceCurrency: "BDT",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Professional",
      price: "1500",
      priceCurrency: "BDT",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Enterprise",
      price: "3000",
      priceCurrency: "BDT",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
    },
  ],
  featureList: [
    "Student Management",
    "Teacher Management",
    "Attendance Tracking",
    "Biometric Device Integration",
    "Exam Management",
    "Finance & Accounting",
    "SMS Notifications",
    "Student ID Card Generation",
    "Role-Based Access Control",
    "Multi-Tenant Architecture",
  ],
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Coaching Management?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It's a cloud-based platform designed specifically for coaching institutes and tutorial centers. It replaces paper registers, spreadsheets, and multiple apps with one unified system for managing students, teachers, attendance, exams, finances, and SMS notifications.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need any technical skills?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not at all. Everything is designed with a simple interface. If you can use a smartphone, you can manage your institute with this software. No coding, no setup hassle — just sign up and start.",
      },
    },
    {
      "@type": "Question",
      name: "How does biometric attendance work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Connect your STELLER or TIPSOI biometric device. The system automatically syncs attendance data every 5 minutes. Students punch in, and parents get an SMS notification instantly.",
      },
    },
    {
      "@type": "Question",
      name: "Can I send SMS to parents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The system integrates with MRAM SMS gateway. You can send attendance alerts, exam reminders, and result notifications automatically in Bengali or English.",
      },
    },
    {
      "@type": "Question",
      name: "Is my data secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Each institute's data is completely isolated in a multi-tenant architecture. We use role-based access control so team members only see what they're authorized to access.",
      },
    },
    {
      "@type": "Question",
      name: "Can multiple people manage the institute?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can invite team members as Organization Admins, Finance Managers, or Academic Coordinators — each with appropriate access levels.",
      },
    },
    {
      "@type": "Question",
      name: "Does it work on mobile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The entire application is responsive and works beautifully on phones, tablets, and desktops.",
      },
    },
    {
      "@type": "Question",
      name: "What about existing students?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can add existing students easily. The system auto-generates ID numbers and can handle bulk data entry.",
      },
    },
  ],
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
  ],
};

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdOrganization),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdWebSite),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdSoftwareApp),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdFaq),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdBreadcrumb),
        }}
      />

      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <AppPreview />
        <VideoDemo />
        <HowItWorks />
        <Benefits />
        <Roadmap />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

"use client";

import {
  LayoutDashboard,
  Users,
  CreditCard,
  CalendarCheck,
  ClipboardList,
  Wallet,
  MessageSquare,
  Shield,
} from "lucide-react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

const features = [
  {
    icon: LayoutDashboard,
    title: "Smart Dashboard",
    description:
      "Get a bird's-eye view of your entire institute. Track students, revenue, attendance trends, and upcoming events — all updated in real-time.",
    color: "from-emerald-600 to-teal-500",
    bgColor: "bg-emerald-600/10",
    textColor: "text-emerald-600",
  },
  {
    icon: Users,
    title: "Student Management",
    description:
      "Enroll students in 3 simple steps. Track their entire journey — from admission to graduation. Manage profiles, assign batches, and track everything.",
    color: "from-emerald-500 to-teal-400",
    bgColor: "bg-emerald-500/10",
    textColor: "text-emerald-500",
  },
  {
    icon: CreditCard,
    title: "Student ID Cards",
    description:
      "Generate professional, print-ready ID cards instantly. Download one or bulk-generate hundreds. Complete with barcodes, QR codes, and your institute branding.",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500/10",
    textColor: "text-emerald-500",
  },
  {
    icon: CalendarCheck,
    title: "Attendance Tracking",
    description:
      "Mark attendance with a single click, or let biometric devices do it automatically. Parents get SMS alerts. You get detailed analytics.",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-500/10",
    textColor: "text-amber-500",
  },
  {
    icon: ClipboardList,
    title: "Exam Management",
    description:
      "Create exams, enter results, auto-calculate grades, and notify parents via SMS. Track every student's performance over time.",
    color: "from-rose-500 to-pink-500",
    bgColor: "bg-rose-500/10",
    textColor: "text-rose-500",
  },
  {
    icon: Wallet,
    title: "Finance & Accounting",
    description:
      "Track student fees, teacher salaries, and organizational expenses. Auto-detect overdue payments. See your financial health at a glance.",
    color: "from-amber-600 to-amber-500",
    bgColor: "bg-amber-600/10",
    textColor: "text-amber-600",
  },
  {
    icon: MessageSquare,
    title: "SMS Notifications",
    description:
      "Keep parents in the loop automatically. Attendance alerts, exam reminders, and result notifications — all sent via SMS in Bengali or English.",
    color: "from-amber-500 to-yellow-500",
    bgColor: "bg-amber-500/10",
    textColor: "text-amber-500",
  },
  {
    icon: Shield,
    title: "Role-Based Access",
    description:
      "Give your team the access they need — and nothing more. Admins, finance managers, and academic coordinators each see only what's relevant.",
    color: "from-slate-500 to-gray-600",
    bgColor: "bg-slate-500/10",
    textColor: "text-slate-500",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Features
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary tracking-tight mb-4">
              Everything You Need,{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Nothing You Don&apos;t
              </span>
            </h2>
            <p className="text-lg text-text-secondary">
              Replace spreadsheets, SMS apps, payment trackers, and paper
              registers with one unified platform.
            </p>
          </div>
        </ScrollReveal>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <ScrollReveal
                key={feature.title}
                delay={i * 0.08}
                direction={i % 2 === 0 ? "up" : "up"}
              >
                <div className="group relative p-6 rounded-2xl bg-surface border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 h-full">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.bgColor} mb-4`}
                  >
                    <Icon size={24} className={feature.textColor} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Gradient line at bottom on hover */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${feature.color} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

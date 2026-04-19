"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  CreditCard,
  CalendarCheck,
  ClipboardList,
  Wallet,
  MessageSquare,
  Smartphone,
  X,
} from "lucide-react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { BrowserFrame } from "@/components/ui/device-frame";

const screenshots = [
  {
    id: "dashboard",
    title: "Dashboard Overview",
    icon: LayoutDashboard,
    gradient: "from-indigo-400 to-purple-500",
    url: "app.mentorbase.io/dashboard",
  },
  {
    id: "students",
    title: "Student List",
    icon: Users,
    gradient: "from-blue-400 to-cyan-500",
    url: "app.mentorbase.io/students",
  },
  {
    id: "id-card",
    title: "Student ID Card",
    icon: CreditCard,
    gradient: "from-emerald-400 to-teal-500",
    url: "app.mentorbase.io/id-cards",
  },
  {
    id: "attendance",
    title: "Attendance Marking",
    icon: CalendarCheck,
    gradient: "from-amber-400 to-orange-500",
    url: "app.mentorbase.io/attendance",
  },
  {
    id: "exams",
    title: "Exam Results",
    icon: ClipboardList,
    gradient: "from-rose-400 to-pink-500",
    url: "app.mentorbase.io/exams",
  },
  {
    id: "finance",
    title: "Finance Dashboard",
    icon: Wallet,
    gradient: "from-violet-400 to-purple-500",
    url: "app.mentorbase.io/finance",
  },
  {
    id: "sms",
    title: "SMS Settings",
    icon: MessageSquare,
    gradient: "from-sky-400 to-blue-500",
    url: "app.mentorbase.io/sms",
  },
  {
    id: "mobile",
    title: "Mobile View",
    icon: Smartphone,
    gradient: "from-slate-400 to-gray-500",
    url: "app.mentorbase.io",
  },
];

export function AppPreview() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const activeScreenshot = screenshots.find((s) => s.id === lightbox);

  return (
    <section id="screenshots" className="py-24 bg-surface/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              App Preview
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary tracking-tight mb-4">
              See What&apos;s{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Inside
              </span>
            </h2>
            <p className="text-lg text-text-secondary">
              A quick look at the screens you&apos;ll use every day to manage your institute.
            </p>
          </div>
        </ScrollReveal>

        {/* Screenshot Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {screenshots.map((screenshot, i) => {
            const Icon = screenshot.icon;
            return (
              <ScrollReveal key={screenshot.id} delay={i * 0.06}>
                <button
                  onClick={() => setLightbox(screenshot.id)}
                  className="w-full text-left group"
                >
                  <BrowserFrame url={screenshot.url} className="transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                    <div
                      className={`aspect-[4/3] bg-gradient-to-br ${screenshot.gradient} opacity-10 flex items-center justify-center relative`}
                    >
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <Icon
                          size={32}
                          className="text-text-muted/40 mb-2"
                        />
                        <span className="text-xs text-text-muted/60 font-medium">
                          Screenshot Placeholder
                        </span>
                      </div>
                    </div>
                  </BrowserFrame>
                  <p className="mt-3 text-sm font-semibold text-text-primary text-center group-hover:text-primary transition-colors">
                    {screenshot.title}
                  </p>
                </button>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && activeScreenshot && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
            >
              <X size={28} />
            </button>
            <BrowserFrame url={activeScreenshot.url}>
              <div
                className={`aspect-video bg-gradient-to-br ${activeScreenshot.gradient} opacity-10 flex items-center justify-center relative`}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <activeScreenshot.icon
                    size={64}
                    className="text-text-muted/40 mb-3"
                  />
                  <p className="text-text-muted/60 font-medium">
                    {activeScreenshot.title}
                  </p>
                  <p className="text-text-muted/40 text-sm mt-1">
                    Replace with actual screenshot
                  </p>
                </div>
              </div>
            </BrowserFrame>
          </div>
        </div>
      )}
    </section>
  );
}

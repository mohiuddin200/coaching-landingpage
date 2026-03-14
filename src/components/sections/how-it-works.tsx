"use client";

import { Building2, BookOpen, UserPlus, Rocket } from "lucide-react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

const steps = [
  {
    number: "01",
    icon: Building2,
    title: "Create Your Institute",
    description:
      "Sign up and set up your organization profile, logo, and preferences in minutes.",
    color: "bg-indigo-500",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "Configure Classes",
    description:
      "Add your class levels, subjects, batches, and schedules. The system adapts to your structure.",
    color: "bg-blue-500",
  },
  {
    number: "03",
    icon: UserPlus,
    title: "Enroll Everyone",
    description:
      "Add students and teachers with comprehensive profiles. Assign them to classes and batches.",
    color: "bg-emerald-500",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Let It Run",
    description:
      "Mark attendance, conduct exams, track payments, send SMS — all from one dashboard. It just works.",
    color: "bg-violet-500",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-surface/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              How It Works
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary tracking-tight mb-4">
              Up and Running in{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                4 Simple Steps
              </span>
            </h2>
            <p className="text-lg text-text-secondary">
              Get your institute digitized in minutes, not months.
            </p>
          </div>
        </ScrollReveal>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line — centered on icons */}
          <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-16">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isEven = i % 2 === 0;

              return (
                <ScrollReveal
                  key={step.number}
                  delay={i * 0.15}
                  direction={isEven ? "left" : "right"}
                >
                  <div className="relative grid grid-cols-[1fr_64px_1fr] items-center gap-0 md:gap-8">
                    {/* Left content (shows for even steps on md+) */}
                    <div
                      className={`hidden md:block ${
                        isEven ? "text-right pr-4" : ""
                      }`}
                    >
                      {isEven && (
                        <div className="inline-block">
                          <span className="text-xs font-bold text-primary tracking-widest">
                            STEP {step.number}
                          </span>
                          <h3 className="text-xl font-bold text-text-primary mt-1 mb-2">
                            {step.title}
                          </h3>
                          <p className="text-text-secondary text-sm leading-relaxed max-w-sm ml-auto">
                            {step.description}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Center icon — always on the line */}
                    <div className="relative z-10 flex justify-center">
                      <div
                        className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center shadow-lg`}
                      >
                        <Icon size={28} className="text-white" />
                      </div>
                    </div>

                    {/* Right content (shows for odd steps on md+) */}
                    <div
                      className={`hidden md:block ${
                        !isEven ? "pl-4" : ""
                      }`}
                    >
                      {!isEven && (
                        <div className="inline-block">
                          <span className="text-xs font-bold text-primary tracking-widest">
                            STEP {step.number}
                          </span>
                          <h3 className="text-xl font-bold text-text-primary mt-1 mb-2">
                            {step.title}
                          </h3>
                          <p className="text-text-secondary text-sm leading-relaxed max-w-sm">
                            {step.description}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Mobile: content below icon (visible only on small screens) */}
                    <div className="md:hidden col-span-3 mt-4 text-center">
                      <span className="text-xs font-bold text-primary tracking-widest">
                        STEP {step.number}
                      </span>
                      <h3 className="text-xl font-bold text-text-primary mt-1 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed max-w-sm mx-auto">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

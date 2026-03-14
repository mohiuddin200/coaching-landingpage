"use client";

import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Counter } from "@/components/ui/counter";

const stats = [
  { end: 5000, suffix: "+", label: "Students Managed" },
  { end: 150, suffix: "+", label: "Active Teachers" },
  { end: 250000, suffix: "+", label: "Attendance Records" },
  { end: 50000, suffix: "+", label: "SMS Sent" },
];

const logos = [
  "Sunrise Academy",
  "Elite Coaching",
  "BrightPath Institute",
  "Star Tutorial",
  "Future Leaders",
  "EduZone",
];

export function SocialProof() {
  return (
    <section className="relative py-16 border-y border-border bg-surface/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Trusted By */}
        <ScrollReveal>
          <p className="text-center text-sm font-medium text-text-muted uppercase tracking-wider mb-8">
            Trusted by coaching institutes across Bangladesh
          </p>
        </ScrollReveal>

        {/* Logo Marquee */}
        <ScrollReveal delay={0.1}>
          <div className="flex items-center justify-center gap-8 sm:gap-12 flex-wrap mb-12">
            {logos.map((name) => (
              <div
                key={name}
                className="text-text-muted/40 font-bold text-lg sm:text-xl tracking-tight hover:text-text-muted/70 transition-colors"
              >
                {name}
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Divider */}
        <div className="w-full h-px bg-border mb-12" />

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <Counter
                end={stat.end}
                suffix={stat.suffix}
                label={stat.label}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { cn } from "@/lib/utils";

type ReleaseStatus = "Released" | "Current" | "Coming Soon" | "Planned";

interface Release {
  version: string;
  title: string;
  date: string;
  status: ReleaseStatus;
  features: string[];
}

const releases: Release[] = [
  {
    version: "v1.0",
    title: "Foundation",
    date: "January 2025",
    status: "Released",
    features: [
      "Student & Teacher CRUD",
      "Class levels & sections",
      "Daily attendance marking",
      "Basic dashboard analytics",
    ],
  },
  {
    version: "v1.1",
    title: "Finance",
    date: "March 2025",
    status: "Released",
    features: [
      "Student payment tracking",
      "Fee structure management",
      "Teacher salary records",
      "Expense logging & categories",
    ],
  },
  {
    version: "v1.2",
    title: "Communication",
    date: "May 2025",
    status: "Current",
    features: [
      "MRAM SMS gateway integration",
      "Attendance SMS notifications",
      "Exam reminder SMS",
      "Result notification SMS",
    ],
  },
  {
    version: "v1.3",
    title: "Identity",
    date: "July 2025",
    status: "Coming Soon",
    features: [
      "Student ID card generation",
      "Bulk ID card download",
      "Barcode & QR code on cards",
      "Custom institute branding",
    ],
  },
  {
    version: "v1.4",
    title: "Automation",
    date: "September 2025",
    status: "Planned",
    features: [
      "Biometric device integration",
      "Auto-enrollment in classes",
      "Batch management",
      "Archive & recovery system",
    ],
  },
  {
    version: "v2.0",
    title: "Next Gen",
    date: "Q1 2026",
    status: "Planned",
    features: [
      "Mobile app (iOS & Android)",
      "Parent portal",
      "Online payment integration",
      "Advanced reporting & analytics",
    ],
  },
];

const statusStyles: Record<ReleaseStatus, string> = {
  Released: "bg-success/10 text-success border-success/20",
  Current: "bg-primary/10 text-primary border-primary/20",
  "Coming Soon": "bg-warning/10 text-warning border-warning/20",
  Planned: "bg-text-muted/10 text-text-muted border-text-muted/20",
};

const dotStyles: Record<ReleaseStatus, string> = {
  Released: "bg-success",
  Current: "bg-primary ring-4 ring-primary/20",
  "Coming Soon": "bg-warning",
  Planned: "bg-text-muted",
};

export function Roadmap() {
  return (
    <section id="roadmap" className="py-24 bg-surface/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Roadmap
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary tracking-tight mb-4">
              Where We&apos;re{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Headed
              </span>
            </h2>
            <p className="text-lg text-text-secondary">
              Our journey to building the most complete coaching management platform.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-10">
            {releases.map((release, i) => {
              const isEven = i % 2 === 0;

              return (
                <ScrollReveal
                  key={release.version}
                  delay={i * 0.1}
                  direction={isEven ? "left" : "right"}
                >
                  <div
                    className={cn(
                      "relative flex items-start gap-6",
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    )}
                  >
                    {/* Card */}
                    <div
                      className={cn(
                        "flex-1 ml-12 md:ml-0",
                        isEven ? "md:pr-10 md:text-right" : "md:pl-10"
                      )}
                    >
                      <div className="p-5 rounded-xl bg-surface border border-border hover:border-primary/20 transition-all hover:shadow-md">
                        <div
                          className={cn(
                            "flex items-center gap-3 mb-3",
                            isEven ? "md:justify-end" : ""
                          )}
                        >
                          <span className="text-xs font-bold text-primary">
                            {release.version}
                          </span>
                          <span
                            className={cn(
                              "text-[11px] font-semibold px-2.5 py-0.5 rounded-full border",
                              statusStyles[release.status]
                            )}
                          >
                            {release.status}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-text-primary mb-1">
                          {release.title}
                        </h3>
                        <p className="text-xs text-text-muted mb-3">
                          {release.date}
                        </p>
                        <ul
                          className={cn(
                            "space-y-1.5",
                            isEven ? "md:text-right" : ""
                          )}
                        >
                          {release.features.map((feature) => (
                            <li
                              key={feature}
                              className="text-sm text-text-secondary"
                            >
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Dot on timeline */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-6">
                      <div
                        className={cn(
                          "w-3.5 h-3.5 rounded-full",
                          dotStyles[release.status]
                        )}
                      />
                    </div>

                    {/* Spacer */}
                    <div className="flex-1 hidden md:block" />
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

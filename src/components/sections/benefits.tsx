"use client";

import {
  Wrench,
  Layers,
  Lock,
  Zap,
  DollarSign,
  Smartphone,
} from "lucide-react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

const benefits = [
  {
    icon: Wrench,
    title: "Self-Service",
    description:
      "No developer needed. Create, edit, and manage everything yourself through an intuitive interface.",
    gradient: "from-emerald-600 to-teal-500",
  },
  {
    icon: Layers,
    title: "All-in-One",
    description:
      "Replace spreadsheets, SMS apps, payment trackers, and paper registers with a single platform.",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    icon: Lock,
    title: "Secure",
    description:
      "Role-based access control and complete data isolation between institutes. Your data stays yours.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Zap,
    title: "Automated",
    description:
      "Biometric attendance sync, SMS alerts, auto-generated IDs, and overdue payment detection — all automatic.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: DollarSign,
    title: "Affordable",
    description:
      "Pricing designed for small to medium coaching institutes. Pay for what you need, scale when you grow.",
    gradient: "from-amber-600 to-amber-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Ready",
    description:
      "Fully responsive design that works beautifully on phones, tablets, and desktops. Manage on the go.",
    gradient: "from-rose-500 to-pink-500",
  },
];

export function Benefits() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Why Choose Us
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary tracking-tight mb-4">
              Built for{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Real Institutes
              </span>
            </h2>
            <p className="text-lg text-text-secondary">
              Designed with the unique needs of coaching centers and tutorial
              institutes in mind.
            </p>
          </div>
        </ScrollReveal>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <ScrollReveal key={benefit.title} delay={i * 0.08}>
                <div className="group relative p-6 rounded-2xl bg-surface border border-border hover:border-transparent transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden h-full">
                  {/* Background gradient on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300`}
                  />

                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.gradient} mb-4`}
                  >
                    <Icon size={24} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

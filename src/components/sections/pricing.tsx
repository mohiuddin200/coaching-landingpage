"use client";

import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { cn } from "@/lib/utils";

interface Plan {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

const plans: Plan[] = [
  {
    name: "Starter",
    description: "For small coaching centers just getting started.",
    monthlyPrice: 500,
    yearlyPrice: 5000,
    cta: "Start Free Trial",
    features: [
      "Up to 50 students",
      "2 teacher accounts",
      "Attendance tracking",
      "Basic dashboard",
      "Student profiles",
      "Email support",
    ],
  },
  {
    name: "Professional",
    description: "For growing institutes that need more power.",
    monthlyPrice: 1500,
    yearlyPrice: 15000,
    highlighted: true,
    cta: "Start Free Trial",
    features: [
      "Up to 300 students",
      "10 teacher accounts",
      "Everything in Starter",
      "Exam management",
      "Finance module",
      "SMS notifications",
      "Student ID cards",
      "Role-based access",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    description: "For large institutes with advanced needs.",
    monthlyPrice: 3000,
    yearlyPrice: 30000,
    cta: "Contact Sales",
    features: [
      "Unlimited students",
      "Unlimited teachers",
      "Everything in Professional",
      "Biometric integration",
      "Multi-branch support",
      "Custom branding",
      "API access",
      "Dedicated account manager",
      "24/7 phone support",
    ],
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Pricing
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary tracking-tight mb-4">
              Simple,{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Transparent
              </span>{" "}
              Pricing
            </h2>
            <p className="text-lg text-text-secondary">
              Start free. Upgrade when you&apos;re ready. No hidden fees.
            </p>
          </div>
        </ScrollReveal>

        {/* Toggle */}
        <ScrollReveal>
          <div className="flex items-center justify-center gap-3 mb-12">
            <span
              className={cn(
                "text-sm font-medium transition-colors",
                !yearly ? "text-text-primary" : "text-text-muted"
              )}
            >
              Monthly
            </span>
            <button
              onClick={() => setYearly(!yearly)}
              className={cn(
                "relative w-12 h-6 rounded-full transition-colors",
                yearly ? "bg-primary" : "bg-border"
              )}
            >
              <div
                className={cn(
                  "absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform",
                  yearly ? "translate-x-6.5" : "translate-x-0.5"
                )}
              />
            </button>
            <span
              className={cn(
                "text-sm font-medium transition-colors",
                yearly ? "text-text-primary" : "text-text-muted"
              )}
            >
              Yearly
              <span className="ml-1.5 text-xs text-success font-semibold">
                Save 17%
              </span>
            </span>
          </div>
        </ScrollReveal>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 0.1}>
              <div
                className={cn(
                  "relative p-6 rounded-2xl border transition-all duration-300 h-full flex flex-col",
                  plan.highlighted
                    ? "bg-surface border-primary shadow-xl shadow-primary/10 scale-[1.02]"
                    : "bg-surface border-border hover:border-primary/30 hover:shadow-lg"
                )}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-white text-xs font-bold">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-text-primary">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-text-secondary mt-1">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-black text-text-primary">
                      &#2547;{yearly ? plan.yearlyPrice.toLocaleString() : plan.monthlyPrice.toLocaleString()}
                    </span>
                    <span className="text-text-muted text-sm mb-1">
                      /{yearly ? "year" : "month"}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-text-secondary"
                    >
                      <Check
                        size={16}
                        className="text-success shrink-0 mt-0.5"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={process.env.NEXT_PUBLIC_APP_URL || "#"}
                  className={cn(
                    "flex items-center justify-center gap-2 h-11 rounded-xl font-semibold text-sm transition-all",
                    plan.highlighted
                      ? "bg-primary text-white hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25"
                      : "border-2 border-border text-text-primary hover:border-primary hover:text-primary"
                  )}
                >
                  {plan.cta}
                  <ArrowRight size={16} />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

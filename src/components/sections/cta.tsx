"use client";

import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-secondary opacity-95" />

      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-white/5" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6">
              Ready to Transform Your Institute?
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto leading-relaxed">
              Join 50+ coaching centers already using CoachHub to streamline
              their operations. Start your free trial today — no credit card
              required.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={process.env.NEXT_PUBLIC_APP_URL || "#"}
                className="inline-flex items-center gap-2 h-12 px-8 rounded-xl bg-white text-primary font-bold text-base hover:bg-white/90 transition-all hover:shadow-xl hover:scale-[1.02]"
              >
                Start Free Trial
                <ArrowRight size={18} />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 h-12 px-8 rounded-xl border-2 border-white/30 text-white font-semibold text-base hover:bg-white/10 transition-all"
              >
                Watch Demo First
              </a>
            </div>

            <p className="mt-6 text-sm text-white/50">
              Free 14-day trial &middot; No credit card &middot; Cancel anytime
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

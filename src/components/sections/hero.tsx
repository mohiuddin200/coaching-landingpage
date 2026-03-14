"use client";

import { useRef, useEffect, Suspense } from "react";
import gsap from "gsap";
import { ArrowRight, Play } from "lucide-react";
import dynamic from "next/dynamic";

const HeroScene = dynamic(
  () => import("@/components/three/hero-scene").then((mod) => ({ default: mod.HeroScene })),
  { ssr: false }
);

function HeroFallback() {
  return (
    <div
      className="absolute inset-0 -z-10"
      style={{
        background: "linear-gradient(135deg, rgba(5,150,105,0.08) 0%, rgba(13,148,136,0.08) 100%)",
      }}
    />
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const screenshotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(headlineRef.current, { opacity: 0, y: 40, duration: 0.8 })
      .from(subRef.current, { opacity: 0, y: 30, duration: 0.7 }, "-=0.4")
      .from(ctaRef.current, { opacity: 0, y: 20, duration: 0.6 }, "-=0.3")
      .from(screenshotRef.current, { opacity: 0, y: 60, scale: 0.95, duration: 1 }, "-=0.3");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* 3D Background */}
      <Suspense fallback={<HeroFallback />}>
        <HeroScene />
      </Suspense>

      {/* Light-mode readability overlay */}
      <div className="hero-light-overlay absolute inset-0 pointer-events-none" style={{ zIndex: -5 }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Now in Beta — Join 50+ Institutes
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-text-primary leading-[1.1] mb-6"
          >
            Your Institute,{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Fully Managed
            </span>
          </h1>

          {/* Subheadline */}
          <p
            ref={subRef}
            className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            From enrollment to exam results, from attendance to accounting —
            manage everything in one powerful platform.{" "}
            <span className="text-text-primary font-medium">
              No technical skills required.
            </span>
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href={process.env.NEXT_PUBLIC_APP_URL || "#"}
              className="inline-flex items-center gap-2 h-12 px-8 rounded-xl bg-primary text-white font-semibold text-base hover:bg-primary-dark transition-all hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02]"
            >
              Start Free Trial
              <ArrowRight size={18} />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 h-12 px-8 rounded-xl border-2 border-border text-text-primary font-semibold text-base hover:border-primary hover:text-primary transition-all hover:scale-[1.02]"
            >
              <Play size={16} />
              Watch Demo
            </a>
          </div>

          {/* Screenshot with perspective tilt */}
          <div
            ref={screenshotRef}
            className="relative mx-auto max-w-5xl"
          >
            {/* Glow behind */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 blur-3xl rounded-3xl -z-10 scale-95" />

            {/* Browser Frame */}
            <div
              className="browser-frame bg-surface"
              style={{
                transform: "perspective(1200px) rotateX(3deg) rotateY(-2deg)",
              }}
            >
              {/* Browser Bar */}
              <div className="browser-frame-bar">
                <div className="browser-frame-dot bg-red-400" />
                <div className="browser-frame-dot bg-yellow-400" />
                <div className="browser-frame-dot bg-green-400" />
                <div className="flex-1 ml-4">
                  <div className="h-6 w-48 rounded bg-background flex items-center px-3">
                    <span className="text-[10px] text-text-muted">app.coachhub.io/dashboard</span>
                  </div>
                </div>
              </div>

              {/* Screenshot Placeholder */}
              <div className="aspect-[16/9] bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center">
                <div className="text-center px-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-lg bg-primary/30" />
                  </div>
                  <p className="text-text-muted text-sm">Dashboard Screenshot</p>
                  <p className="text-text-muted/60 text-xs mt-1">Replace with actual screenshot</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

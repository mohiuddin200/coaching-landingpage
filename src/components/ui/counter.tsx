"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export function Counter({ end, duration = 2, suffix = "", prefix = "", label }: CounterProps) {
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = countRef.current;
    if (!el || hasAnimated) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      el.textContent = `${prefix}${end.toLocaleString()}${suffix}`;
      return;
    }

    const obj = { value: 0 };

    const anim = gsap.to(obj, {
      value: end,
      duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
      onUpdate: () => {
        el.textContent = `${prefix}${Math.round(obj.value).toLocaleString()}${suffix}`;
      },
      onComplete: () => setHasAnimated(true),
    });

    return () => {
      anim.kill();
    };
  }, [end, duration, suffix, prefix, hasAnimated]);

  return (
    <div className="text-center">
      <div className="text-3xl sm:text-4xl font-black text-text-primary">
        <span ref={countRef}>0</span>
      </div>
      <div className="text-sm text-text-muted mt-1 font-medium">{label}</div>
    </div>
  );
}

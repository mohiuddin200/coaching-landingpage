"use client";

import { useState } from "react";
import { Play, Monitor, Smartphone, CreditCard } from "lucide-react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

const miniDemos = [
  { title: "Dashboard Tour", icon: Monitor, duration: "2:30" },
  { title: "Student Enrollment", icon: Smartphone, duration: "1:45" },
  { title: "ID Card Generation", icon: CreditCard, duration: "1:15" },
];

export function VideoDemo() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="demo" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Demo
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary tracking-tight mb-4">
              See It{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                In Action
              </span>
            </h2>
            <p className="text-lg text-text-secondary">
              Watch how easy it is to manage your entire institute from one dashboard.
            </p>
          </div>
        </ScrollReveal>

        {/* Main Video */}
        <ScrollReveal>
          <div className="relative max-w-4xl mx-auto mb-12">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/15 via-secondary/15 to-primary/15 blur-3xl rounded-3xl -z-10 scale-95" />

            {/* Device Frame */}
            <div className="rounded-2xl overflow-hidden border border-border bg-surface shadow-xl">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 bg-surface border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 ml-3">
                  <div className="h-6 max-w-xs rounded-md bg-background flex items-center px-3">
                    <span className="text-[11px] text-text-muted">
                      CoachHub Demo Video
                    </span>
                  </div>
                </div>
              </div>

              {/* Video Area */}
              <div className="aspect-video bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative">
                {playing ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Replace with actual video embed */}
                    <p className="text-text-muted">
                      Video player — embed YouTube/Vimeo here
                    </p>
                  </div>
                ) : (
                  <button
                    onClick={() => setPlaying(true)}
                    className="absolute inset-0 flex flex-col items-center justify-center group cursor-pointer"
                  >
                    {/* Play Button */}
                    <div className="relative mb-4">
                      {/* Ping animation */}
                      <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                      <div className="relative w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-xl shadow-primary/30 group-hover:scale-110 transition-transform">
                        <Play size={32} className="text-white ml-1" fill="white" />
                      </div>
                    </div>
                    <p className="text-text-secondary font-medium">
                      Click to play demo
                    </p>
                    <p className="text-text-muted text-sm mt-1">3:45 minutes</p>
                  </button>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Mini Demo Thumbnails */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {miniDemos.map((demo, i) => {
            const Icon = demo.icon;
            return (
              <ScrollReveal key={demo.title} delay={i * 0.1}>
                <button className="w-full flex items-center gap-3 p-4 rounded-xl border border-border bg-surface hover:border-primary/30 hover:shadow-md transition-all group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-text-primary group-hover:text-primary transition-colors">
                      {demo.title}
                    </p>
                    <p className="text-xs text-text-muted">{demo.duration}</p>
                  </div>
                </button>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

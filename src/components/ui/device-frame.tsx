"use client";

import { cn } from "@/lib/utils";

interface DeviceFrameProps {
  children: React.ReactNode;
  className?: string;
  url?: string;
}

export function BrowserFrame({ children, className, url = "app.mentorbase.io" }: DeviceFrameProps) {
  return (
    <div className={cn("rounded-xl overflow-hidden border border-border bg-surface shadow-lg", className)}>
      {/* Browser Bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-surface border-b border-border">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 ml-3">
          <div className="h-6 max-w-xs rounded-md bg-background flex items-center px-3">
            <span className="text-[11px] text-text-muted truncate">{url}</span>
          </div>
        </div>
      </div>
      {/* Content */}
      {children}
    </div>
  );
}

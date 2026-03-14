"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is Coaching Management?",
    answer:
      "It's a cloud-based platform designed specifically for coaching institutes and tutorial centers. It replaces paper registers, spreadsheets, and multiple apps with one unified system for managing students, teachers, attendance, exams, finances, and SMS notifications.",
  },
  {
    question: "Do I need any technical skills?",
    answer:
      "Not at all. Everything is designed with a simple interface. If you can use a smartphone, you can manage your institute with this software. No coding, no setup hassle — just sign up and start.",
  },
  {
    question: "How does biometric attendance work?",
    answer:
      "Connect your STELLER or TIPSOI biometric device. The system automatically syncs attendance data every 5 minutes. Students punch in, and parents get an SMS notification instantly.",
  },
  {
    question: "Can I send SMS to parents?",
    answer:
      "Yes. The system integrates with MRAM SMS gateway. You can send attendance alerts, exam reminders, and result notifications automatically in Bengali or English. You can also configure which parent (father, mother, or both) receives the SMS.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. Each institute's data is completely isolated in a multi-tenant architecture. We use role-based access control so team members only see what they're authorized to access. No one from another institute can see your data.",
  },
  {
    question: "Can multiple people manage the institute?",
    answer:
      "Yes. You can invite team members as Organization Admins, Finance Managers, or Academic Coordinators — each with appropriate access levels. Everyone gets their own login with permissions tailored to their role.",
  },
  {
    question: "Does it work on mobile?",
    answer:
      "Yes. The entire application is responsive and works beautifully on phones, tablets, and desktops. You can manage attendance, check finances, or view reports right from your phone.",
  },
  {
    question: "What about existing students?",
    answer:
      "You can add existing students easily. The system auto-generates ID numbers and can handle bulk data entry. Students added at any point get full access to all features including ID cards, attendance tracking, and exam management.",
  },
];

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-border rounded-xl overflow-hidden transition-colors hover:border-primary/20">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
      >
        <span className="font-semibold text-text-primary text-[15px]">
          {question}
        </span>
        <ChevronDown
          size={18}
          className={cn(
            "text-text-muted shrink-0 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <p className="px-5 pb-5 text-sm text-text-secondary leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-surface/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary tracking-tight mb-4">
              Got{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Questions?
              </span>
            </h2>
            <p className="text-lg text-text-secondary">
              Here are the answers to the most common questions about CoachHub.
            </p>
          </div>
        </ScrollReveal>

        {/* FAQ List */}
        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={faq.question} delay={i * 0.05}>
              <AccordionItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

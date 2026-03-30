"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  /** Allow multiple open at once */
  multi?: boolean;
  className?: string;
}

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      className={cn("h-5 w-5 flex-shrink-0 text-coral transition-transform duration-300", open && "rotate-180")}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 7.5l5 5 5-5" />
    </svg>
  );
}

export function FAQAccordion({ items, multi = false, className }: FAQAccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());

  function toggle(index: number) {
    setOpenIndexes((prev) => {
      const next = new Set(multi ? prev : new Set<number>());
      if (prev.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }

  return (
    <dl className={cn("divide-y divide-gray-100", className)}>
      {items.map((item, i) => {
        const isOpen = openIndexes.has(i);
        const panelId = `faq-panel-${i}`;
        const triggerId = `faq-trigger-${i}`;

        return (
          <div key={i} className="py-4">
            <dt>
              <button
                id={triggerId}
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 text-left focus-ring rounded-sm"
              >
                <span className="text-body font-semibold text-brand-black">{item.question}</span>
                <ChevronDown open={isOpen} />
              </button>
            </dt>
            <dd
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              hidden={!isOpen}
              className={cn(
                "overflow-hidden transition-all duration-300",
                isOpen ? "mt-3 max-h-screen opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <p className="text-body text-brand-gray-dark leading-relaxed">{item.answer}</p>
            </dd>
          </div>
        );
      })}
    </dl>
  );
}

export default FAQAccordion;

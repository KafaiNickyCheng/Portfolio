"use client";

import { useEffect, useRef } from "react";

// How long (ms) an element must stay out of view before it resets.
// This prevents flickering when the element sits right on the threshold.
const RESET_COOLDOWN = 300;

export default function ScrollRevealProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Respect reduced-motion — if set, reveal everything immediately
    // and skip the observer entirely.
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const elements = container.querySelectorAll<HTMLElement>(".reveal");

    if (prefersReduced) {
      elements.forEach((el) => el.classList.add("visible"));
      return;
    }

    // Per-element cooldown timers so a fast scroll back-and-forth
    // doesn't cause rapid add/remove flickering.
    const resetTimers = new Map<Element, ReturnType<typeof setTimeout>>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;

          if (entry.isIntersecting) {
            // Cancel any pending reset for this element — it's back in view.
            const pending = resetTimers.get(el);
            if (pending) {
              clearTimeout(pending);
              resetTimers.delete(el);
            }
            el.classList.add("visible");
          } else {
            // Element has left the viewport. Wait for the cooldown before
            // removing "visible" so a brief scroll-wobble doesn't re-trigger.
            const timer = setTimeout(() => {
              el.classList.remove("visible");
              resetTimers.delete(el);
            }, RESET_COOLDOWN);
            resetTimers.set(el, timer);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      // Clear all pending timers on unmount
      resetTimers.forEach((timer) => clearTimeout(timer));
      resetTimers.clear();
    };
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
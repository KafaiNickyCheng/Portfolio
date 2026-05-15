"use client";

import { useEffect, useRef } from "react";

export default function ScrollRevealProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = container.querySelectorAll<HTMLElement>(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return <div ref={containerRef}>{children}</div>;
}

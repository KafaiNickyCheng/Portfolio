"use client";

import { useEffect, useRef } from "react";

export default function ParallaxOrbs() {
  const orb1 = useRef<HTMLDivElement>(null);
  const orb2 = useRef<HTMLDivElement>(null);
  const orb3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sy = window.scrollY;
          if (orb1.current) orb1.current.style.transform = `translateY(${sy * 0.3}px)`;
          if (orb2.current) orb2.current.style.transform = `translateY(${sy * -0.2}px)`;
          if (orb3.current) orb3.current.style.transform = `translateY(${sy * 0.15}px)`;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const orbBase: React.CSSProperties = {
    position: "absolute",
    borderRadius: "50%",
    filter: "blur(80px)",
    opacity: 0.25,
    willChange: "transform",
  };

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }}>
      {/* Grid lines */}
      <div
        style={{
          position: "absolute", inset: 0,
          backgroundImage: `
            linear-gradient(rgba(124,58,237,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124,58,237,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      {/* Orb 1 — top right */}
      <div
        ref={orb1}
        className="animate-float"
        style={{
          ...orbBase,
          width: 600, height: 600,
          background: "radial-gradient(circle, #7c3aed, transparent)",
          top: -100, right: -100,
          animationDelay: "0s",
        }}
      />

      {/* Orb 2 — bottom left */}
      <div
        ref={orb2}
        className="animate-float"
        style={{
          ...orbBase,
          width: 400, height: 400,
          background: "radial-gradient(circle, #4f46e5, transparent)",
          bottom: 0, left: -100,
          animationDelay: "-3s",
        }}
      />

      {/* Orb 3 — centre */}
      <div
        ref={orb3}
        className="animate-float"
        style={{
          ...orbBase,
          width: 300, height: 300,
          background: "radial-gradient(circle, #a78bfa, transparent)",
          top: "40%", left: "40%",
          animationDelay: "-6s",
        }}
      />
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import GradientText from "@/components/ui/GradientText";
import { experiences, education } from "@/data/portfolio";

const LINE_DURATION = 900;

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef     = useRef<HTMLDivElement>(null);
  const dotsRef     = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const timeline = timelineRef.current;
    const line     = lineRef.current;
    if (!timeline || !line) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      line.style.transform = "scaleY(1)";
      dotsRef.current.forEach((dot) => {
        if (dot) dot.style.opacity = "1";
      });
      return;
    }

    let rafId: number;
    let startTime: number | null = null;
    let animating = false;

    function drawLine(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const elapsed  = timestamp - startTime;
      const progress = Math.min(elapsed / LINE_DURATION, 1);
      const eased    = 1 - Math.pow(1 - progress, 3);

      if (line) line.style.transform = `scaleY(${eased})`;

      const numDots = dotsRef.current.length;
      dotsRef.current.forEach((dot, i) => {
        if (!dot) return;
        const threshold = (i + 0.5) / numDots;
        if (eased >= threshold) {
          dot.style.opacity   = "1";
          dot.style.transform = "scale(1)";
          dot.style.boxShadow = "0 0 15px var(--neon-glow)";
        }
      });

      if (progress < 1) {
        rafId = requestAnimationFrame(drawLine);
      } else {
        animating = false;
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animating) {
          animating = true;
          startTime = null;
          if (line) line.style.transform = "scaleY(0)";
          dotsRef.current.forEach((dot) => {
            if (dot) {
              dot.style.opacity   = "0";
              dot.style.transform = "scale(0)";
              dot.style.boxShadow = "none";
            }
          });
          rafId = requestAnimationFrame(drawLine);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(timeline);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section id="experience" style={{ background: "var(--bg)", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "7rem 3rem" }}>

        <SectionHeader
          label="Experience & Education"
          title={<>My <GradientText>journey</GradientText> so far</>}
        />

        <div
          ref={timelineRef}
          style={{ position: "relative", paddingLeft: "2.5rem", marginTop: "3rem" }}
        >
          {/* Animated vertical line */}
          <div
            ref={lineRef}
            style={{
              position: "absolute", left: 0, top: 0, bottom: 0, width: 1,
              background: "linear-gradient(to bottom, var(--neon), var(--neon2), transparent)",
              transform: "scaleY(0)",
              transformOrigin: "top",
            }}
          />

          {experiences.map((exp, i) => (
            <div
              key={i}
              className="reveal"
              style={{ position: "relative", marginBottom: "4rem" }}
            >
              {/* Timeline dot — revealed by rAF loop */}
              <div
                ref={(el) => { dotsRef.current[i] = el; }}
                style={{
                  position: "absolute", left: "-2.5rem",
                  width: 12, height: 12, borderRadius: "50%",
                  background: "var(--neon)",
                  marginLeft: -5.5, top: 6,
                  opacity: 0,
                  transform: "scale(0)",
                  transition: "opacity 0.25s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease",
                }}
              />

              <div style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--neon3)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                {exp.period}
              </div>

              <div style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.3rem" }}>
                {exp.role}
              </div>

              <div style={{ fontSize: "0.9rem", color: "var(--accent)", marginBottom: "1rem" }}>
                {exp.company} · {exp.location}
              </div>

              <ul style={{ listStyle: "none" }}>
                {exp.bullets.map((bullet) => (
                  <li key={bullet} style={{ fontSize: "0.92rem", color: "var(--text2)", lineHeight: 1.7, paddingLeft: "1.5rem", position: "relative", marginBottom: "0.5rem" }}>
                    <span style={{ position: "absolute", left: 0, color: "var(--neon3)" }}>▹</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education */}
        <div
          className="reveal"
          style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.1), rgba(79,70,229,0.05))", border: "1px solid var(--border2)", borderRadius: 16, padding: "2rem", marginTop: "4rem", display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap" }}
        >
          <div style={{ width: 60, height: 60, borderRadius: "50%", background: "linear-gradient(135deg, #7c3aed, #4f46e5)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6rem", flexShrink: 0 }}>
            🎓
          </div>

          <div style={{ flex: 1, minWidth: 220 }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 700, color: "var(--text)" }}>
              {education.degree}
            </h3>
            <div style={{ fontSize: "0.9rem", color: "var(--neon3)", margin: "0.2rem 0" }}>{education.university}</div>
            <div style={{ fontSize: "0.85rem", color: "var(--text2)" }}>{education.desc}</div>
          </div>

          <div style={{ flexShrink: 0, background: "var(--neon-soft)", border: "1px solid var(--border2)", borderRadius: 10, padding: "1rem 1.5rem", textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 800, color: "var(--accent)" }}>{education.gpa}</div>
            <div style={{ fontSize: "0.72rem", color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.1em" }}>GPA</div>
          </div>
        </div>
      </div>
    </section>
  );
}
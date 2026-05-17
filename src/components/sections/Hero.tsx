"use client";

import { useEffect, useRef, useState } from "react";
import ParallaxOrbs from "@/components/ui/ParallaxOrbs";
import GradientText from "@/components/ui/GradientText";
import { personal, stats } from "@/data/portfolio";
import { useTheme } from "@/context/ThemeContext";

/* ─────────────────────────────────────────────────────────────
   GlitchImage — swaps dark/light photo with a glitch transition
   when the theme changes.
───────────────────────────────────────────────────────────── */
function GlitchImage() {
  const { theme } = useTheme();

  // Track which image is "current" vs "incoming"
  const [displayed, setDisplayed] = useState<"dark" | "light">(theme);
  const [isGlitching, setIsGlitching] = useState(false);
  const [pendingTheme, setPendingTheme] = useState<"dark" | "light">(theme);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // When theme changes → trigger glitch → then swap image
  useEffect(() => {
    if (theme === displayed) return;

    setPendingTheme(theme);
    setIsGlitching(true);

    // Mid-glitch: swap the actual image
    timeoutRef.current = setTimeout(() => {
      setDisplayed(theme);
    }, 220);

    // End glitch
    const end = setTimeout(() => {
      setIsGlitching(false);
    }, 520);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      clearTimeout(end);
    };
  }, [theme]);

  const darkSrc  = "/images/DarkMode.jpg";
  const lightSrc = "/images/LightMode.png";

  return (
    <div className="hero-image-wrapper">
      {/* Glitch slice layers — only visible during glitch */}
      {isGlitching && (
        <>
          <div className="glitch-slice glitch-slice-1" style={{ backgroundImage: `url(${displayed === "dark" ? darkSrc : lightSrc})` }} />
          <div className="glitch-slice glitch-slice-2" style={{ backgroundImage: `url(${displayed === "dark" ? darkSrc : lightSrc})` }} />
          <div className="glitch-slice glitch-slice-3" style={{ backgroundImage: `url(${pendingTheme  === "dark" ? darkSrc : lightSrc})` }} />
        </>
      )}

      {/* Main image */}
      <img
        key={displayed}
        src={displayed === "dark" ? darkSrc : lightSrc}
        alt="Kafai Cheng"
        className={`hero-photo ${isGlitching ? "hero-photo-glitching" : "hero-photo-idle"}`}
        draggable={false}
      />

      {/* Ambient glow ring that matches the theme */}
      <div className="hero-image-glow" />

      {/* Scanline overlay for the tech feel */}
      <div className="hero-scanlines" />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Hero Section
───────────────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "8rem 3rem 6rem",
        position: "relative",
        overflow: "visible",
      }}
    >
      {/* Animated background */}
      <ParallaxOrbs />

      {/* ── Two-column hero layout ── */}
      <div className="hero-layout">

        {/* ── LEFT: text content ── */}
        <div className="hero-content" style={{ position: "relative", zIndex: 1 }}>

          {/* Status badge */}
          <div
            className="animate-fade-up"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "var(--neon-soft)",
              border: "1px solid var(--border2)",
              borderRadius: 100, padding: "6px 16px",
              fontSize: "0.78rem", fontWeight: 500,
              color: "var(--neon3)", letterSpacing: "0.1em", textTransform: "uppercase",
              marginBottom: "2rem",
            }}
          >
            <span
              className="animate-pulse-dot"
              style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--neon3)", display: "block" }}
            />
            {personal.status}
          </div>

          {/* Name + role */}
          <h1
            className="animate-fade-up anim-delay-100"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 7vw, 7rem)",
              fontWeight: 800,
              lineHeight: 1.3,
              letterSpacing: "-0.03em",
              marginBottom: "1.5rem",
              overflow: "visible",
            }}
          >
            <span style={{ display: "block", color: "var(--text)", paddingBottom: "0.1em" }}>
              {personal.name}
            </span>
            <GradientText>{personal.role}</GradientText>
          </h1>

          {/* Tagline */}
          <p
            className="animate-fade-up anim-delay-200"
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
              color: "var(--text2)", fontWeight: 300,
              marginBottom: "1rem",
            }}
          >
            <span style={{ color: "var(--accent)", fontWeight: 500 }}>Building Systems.</span>{" "}
            Bridging Business &amp; Tech.
          </p>

          {/* Description */}
          <p
            className="animate-fade-up anim-delay-300"
            style={{
              maxWidth: 580, fontSize: "1rem",
              color: "var(--text3)", lineHeight: 1.8,
              marginBottom: "3rem",
            }}
          >
            Full-stack engineer turned System Analyst — I design and deliver
            end-to-end business systems, translating complex operational workflows
            into working software used by hundreds of people.
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-up anim-delay-400"
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
          >
            <a
              href="/projects"
              onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
              className="btn-neon"
            >
              View My Work →
            </a>
            <a
              href="/contact"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="btn-outline"
            >
              Get In Touch
            </a>
            <a
              href="/cv.pdf"
              download="Kafai_Cheng_CV.pdf"
              className="btn-outline"
              style={{ gap: 8 }}
            >
              ↓ Download My CV
            </a>
          </div>
        </div>

        {/* ── RIGHT: glitch photo (desktop/tablet) ── */}
        <div className="hero-image-col animate-fade-up anim-delay-300">
          <GlitchImage />
        </div>
      </div>

      {/* ── Stats ── */}
      <div className="hero-stats animate-fade-up anim-delay-500">
        {stats.map((s) => (
          <div key={s.label} style={{ textAlign: "center" }}>
            <div
              className="stat-num"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2.5rem", fontWeight: 800,
                color: "var(--accent)", lineHeight: 1,
              }}
            >
              {s.num}
            </div>
            <div
              className="stat-label"
              style={{
                fontSize: "0.75rem", color: "var(--text3)",
                textTransform: "uppercase", letterSpacing: "0.1em",
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="animate-fade-up anim-delay-800"
        style={{
          position: "absolute", bottom: "2rem", left: "50%",
          transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
          color: "var(--text3)", fontSize: "0.7rem",
          letterSpacing: "0.15em", textTransform: "uppercase",
        }}
      >
        <div
          className="animate-scroll-line"
          style={{
            width: 1, height: 50,
            background: "linear-gradient(to bottom, var(--neon), transparent)",
          }}
        />
        <span>Scroll</span>
      </div>
    </section>
  );
}
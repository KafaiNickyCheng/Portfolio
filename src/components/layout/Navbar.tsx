"use client";

import { useEffect, useState } from "react";
import { personal } from "@/data/portfolio";
import ThemeToggle from "@/components/ui/ThemeContext"

const NAV_LINKS = [
  { label: "About",      id: "about" },
  { label: "Skills",     id: "skills" },
  { label: "Projects",   id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact",    id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]    = useState(false);
  const [activeSection, setActive] = useState("");
  const [menuOpen, setMenuOpen]    = useState(false);

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section tracker
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
            window.history.replaceState(null, "", `/${id}`);
          }
        },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    const hero = document.getElementById("hero");
    if (hero) {
      const heroObs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive("");
            window.history.replaceState(null, "", "/");
          }
        },
        { threshold: 0.4 }
      );
      heroObs.observe(hero);
      observers.push(heroObs);
    }

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Smooth scroll helper
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "1.25rem 3rem",
        background: scrolled
          ? "color-mix(in srgb, var(--bg) 97%, transparent)"
          : "color-mix(in srgb, var(--bg) 80%, transparent)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--border)",
        transition: "background 0.3s",
      }}
    >
      {/* Logo */}
      <a
        href="/"
        onClick={(e) => { e.preventDefault(); scrollTo("hero"); }}
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.15rem", fontWeight: 700,
          color: "var(--accent)", textDecoration: "none",
          letterSpacing: "0.05em", cursor: "pointer",
        }}
      >
        {personal.initials}.
      </a>

      {/* Desktop links + theme toggle */}
      <div className="hidden md:flex" style={{ alignItems: "center", gap: "2rem" }}>
        <ul style={{ gap: "2rem", listStyle: "none", display: "flex", alignItems: "center" }}>
          {NAV_LINKS.map(({ label, id }) => (
            <li key={id}>
              <a
                href={`/${id}`}
                onClick={(e) => { e.preventDefault(); scrollTo(id); }}
                style={{
                  color: activeSection === id ? "var(--accent)" : "var(--text2)",
                  textDecoration: "none",
                  fontSize: "0.85rem", fontWeight: 400,
                  letterSpacing: "0.08em", textTransform: "uppercase",
                  transition: "color 0.2s", cursor: "pointer",
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </div>

      {/* Mobile: theme toggle + hamburger */}
      <div
        className="mobile-nav-controls"
      >
        <ThemeToggle />
        <button
          onClick={() => setMenuOpen((o) => !o)}
          style={{
            background: "none", border: "none", cursor: "pointer",
            color: "var(--text)", fontSize: "1.4rem",
          }}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            position: "absolute", top: "100%", left: 0, right: 0,
            background: "color-mix(in srgb, var(--bg) 98%, transparent)",
            borderBottom: "1px solid var(--border)",
            padding: "1.5rem 2rem",
            display: "flex", flexDirection: "column", gap: "1.2rem",
          }}
        >
          {NAV_LINKS.map(({ label, id }) => (
            <a
              key={id}
              href={`/${id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(id);
                setMenuOpen(false);
              }}
              style={{
                color: "var(--text2)", textDecoration: "none",
                fontSize: "1rem", letterSpacing: "0.08em", textTransform: "uppercase",
              }}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { personal } from "@/data/portfolio";

const NAV_LINKS = [
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [activeSection, setActive]  = useState("");
  const [menuOpen, setMenuOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight active section via IntersectionObserver
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
            window.history.replaceState(null, "", `#${id}`);
          }
        },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "1.25rem 3rem",
        background: scrolled ? "rgba(5,4,15,0.95)" : "rgba(5,4,15,0.7)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--border)",
        transition: "background 0.3s",
      }}
    >
      {/* Logo */}
      <Link
        href="#hero"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.15rem", fontWeight: 700,
          color: "var(--accent)", textDecoration: "none",
          letterSpacing: "0.05em",
        }}
      >
        {personal.initials}.
      </Link>

      {/* Desktop links */}
      <ul
        style={{
          gap: "2rem", listStyle: "none",
        }}
        className="hidden md:flex"
      >
        {NAV_LINKS.map(({ label, href }) => {
          const id = href.replace("#", "");
          return (
            <li key={href}>
              <a
                href={href}
                style={{
                  color: activeSection === id ? "var(--accent)" : "var(--text2)",
                  textDecoration: "none",
                  fontSize: "0.85rem", fontWeight: 400,
                  letterSpacing: "0.08em", textTransform: "uppercase",
                  transition: "color 0.2s",
                }}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen((o) => !o)}
        className="md:hidden"
        style={{
          background: "none", border: "none", cursor: "pointer",
          color: "var(--text)", fontSize: "1.4rem",
        }}
        aria-label="Toggle menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            position: "absolute", top: "100%", left: 0, right: 0,
            background: "rgba(5,4,15,0.98)",
            borderBottom: "1px solid var(--border)",
            padding: "1.5rem 2rem",
            display: "flex", flexDirection: "column", gap: "1.2rem",
          }}
        >
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
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

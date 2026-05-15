"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import GradientText from "@/components/ui/GradientText";
import { skillCategories } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" style={{ background: "var(--bg)", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "7rem 3rem" }}>

        <SectionHeader
          label="Skills & Technologies"
          title={<>My <GradientText>technical</GradientText> arsenal</>}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            marginTop: "3rem",
          }}
        >
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className={`reveal reveal-delay-${(i % 3) + 1}`}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 16,
                padding: "1.8rem",
                position: "relative",
                overflow: "hidden",
                transition: "border-color 0.3s, background 0.3s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border2)";
                (e.currentTarget as HTMLDivElement).style.background = "var(--surface2)";
                const line = e.currentTarget.querySelector(".cat-line") as HTMLElement;
                if (line) line.style.transform = "scaleX(1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLDivElement).style.background = "var(--surface)";
                const line = e.currentTarget.querySelector(".cat-line") as HTMLElement;
                if (line) line.style.transform = "scaleX(0)";
              }}
            >
              {/* Bottom accent line */}
              <div
                className="cat-line"
                style={{
                  position: "absolute", bottom: 0, left: 0, right: 0, height: 2,
                  background: "linear-gradient(90deg, var(--neon), var(--neon2))",
                  transform: "scaleX(0)", transformOrigin: "left",
                  transition: "transform 0.3s",
                }}
              />

              {/* Category title */}
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.85rem", fontWeight: 700,
                  color: "var(--accent)",
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  marginBottom: "1.2rem",
                  display: "flex", alignItems: "center", gap: 8,
                }}
              >
                <span style={{ fontSize: "1.2rem" }}>{cat.icon}</span>
                {cat.title}
              </div>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {cat.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: "rgba(124,58,237,0.1)",
                      border: "1px solid rgba(124,58,237,0.2)",
                      color: "var(--text2)",
                      padding: "5px 12px",
                      borderRadius: 100,
                      fontSize: "0.8rem",
                      transition: "background 0.2s, border-color 0.2s, color 0.2s",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLSpanElement;
                      el.style.background = "var(--neon-soft)";
                      el.style.borderColor = "var(--neon3)";
                      el.style.color = "var(--text)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLSpanElement;
                      el.style.background = "rgba(124,58,237,0.1)";
                      el.style.borderColor = "rgba(124,58,237,0.2)";
                      el.style.color = "var(--text2)";
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

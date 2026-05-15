"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import GradientText from "@/components/ui/GradientText";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" style={{ background: "var(--bg2)", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "7rem 3rem" }}>

        <SectionHeader
          label="Key Projects"
          title={<>Systems I&apos;ve <GradientText>designed &amp; built</GradientText></>}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
            marginTop: "3rem",
          }}
        >
          {projects.map((project, i) => (
            <div
              key={project.num}
              className={`reveal reveal-delay-${(i % 3) + 1}`}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 16,
                padding: "2rem",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition: "border-color 0.35s, transform 0.35s, box-shadow 0.35s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "var(--border2)";
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 20px 60px rgba(124,58,237,0.15)";
                const glow = el.querySelector(".card-glow") as HTMLElement;
                if (glow) glow.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "var(--border)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
                const glow = el.querySelector(".card-glow") as HTMLElement;
                if (glow) glow.style.opacity = "0";
              }}
            >
              {/* Radial glow on hover */}
              <div
                className="card-glow"
                style={{
                  position: "absolute", inset: 0,
                  background: "radial-gradient(circle at top right, var(--neon-soft), transparent 60%)",
                  opacity: 0, transition: "opacity 0.3s",
                  pointerEvents: "none",
                }}
              />

              {/* Card content */}
              <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", flex: 1 }}>
                <div
                  style={{
                    fontSize: "0.7rem", fontWeight: 700,
                    letterSpacing: "0.2em", color: "var(--neon3)",
                    textTransform: "uppercase", marginBottom: "1rem",
                  }}
                >
                  {project.num} · {project.category}
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.2rem", fontWeight: 700,
                    color: "var(--text)", marginBottom: "0.8rem", lineHeight: 1.3,
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.9rem", color: "var(--text2)",
                    lineHeight: 1.7, marginBottom: "1.5rem", flex: 1,
                  }}
                >
                  {project.desc}
                </p>

                {/* Tech tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: "1.5rem" }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: "rgba(99,102,241,0.1)",
                        border: "1px solid rgba(99,102,241,0.25)",
                        color: "#a5b4fc",
                        padding: "3px 10px", borderRadius: 4,
                        fontSize: "0.72rem", fontWeight: 500,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Impact */}
                <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1rem" }}>
                  <div
                    style={{
                      fontSize: "0.72rem", color: "var(--text3)",
                      textTransform: "uppercase", letterSpacing: "0.1em",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {project.impactTitle}
                  </div>
                  <ul style={{ listStyle: "none" }}>
                    {project.impacts.map((item) => (
                      <li
                        key={item}
                        style={{
                          fontSize: "0.82rem", color: "var(--text2)",
                          paddingLeft: 14, position: "relative", marginBottom: 3,
                        }}
                      >
                        <span
                          style={{
                            position: "absolute", left: 0,
                            color: "var(--neon3)", fontSize: "0.7rem", top: 2,
                          }}
                        >
                          ▹
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

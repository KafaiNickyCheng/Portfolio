"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import GradientText from "@/components/ui/GradientText";
import { personal, highlights } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" style={{ background: "var(--bg2)", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "7rem 3rem" }}>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "5rem",
            alignItems: "center",
          }}
        >
          {/* ── Left: Text ── */}
          <div>
            <SectionHeader
              label="About Me"
              title={<>Where <GradientText>engineering meets</GradientText> business thinking</>}
            />

            {personal.bio.map((para, i) => (
              <p
                key={i}
                className="reveal"
                style={{
                  color: "var(--text2)", fontSize: "1.05rem",
                  lineHeight: 1.85, marginBottom: "1.2rem",
                }}
                dangerouslySetInnerHTML={{
                  __html: para
                    .replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--accent);font-weight:500">$1</strong>'),
                }}
              />
            ))}

            {/* Highlight cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
                marginTop: "2rem",
              }}
            >
              {highlights.map((h, i) => (
                <div
                  key={h.title}
                  className={`glass-card reveal reveal-delay-${(i % 3) + 1}`}
                  style={{ padding: "1.2rem" }}
                >
                  <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{h.icon}</div>
                  <h4
                    style={{
                      fontSize: "0.82rem", fontWeight: 600,
                      color: "var(--accent)", textTransform: "uppercase",
                      letterSpacing: "0.1em", marginBottom: "0.3rem",
                    }}
                  >
                    {h.title}
                  </h4>
                  <p style={{ fontSize: "0.88rem", color: "var(--text2)" }}>{h.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Profile card ── */}
          <div className="reveal reveal-delay-2" style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(79,70,229,0.1))",
                border: "1px solid var(--border2)",
                borderRadius: 20,
                padding: "2.5rem",
                width: "100%",
                maxWidth: 380,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Top accent line */}
              <div
                style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 2,
                  background: "linear-gradient(90deg, #7c3aed, #4f46e5, #a78bfa)",
                }}
              />

              {/* Avatar */}
              <div
                style={{
                  width: 80, height: 80, borderRadius: "50%",
                  background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-display)",
                  fontSize: "1.8rem", fontWeight: 800, color: "white",
                  marginBottom: "1.2rem",
                  boxShadow: "0 0 30px var(--neon-glow)",
                }}
              >
                {personal.initials}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.3rem", fontWeight: 700,
                  color: "var(--text)", marginBottom: "0.3rem",
                }}
              >
                {personal.name}
              </h3>
              <div style={{ fontSize: "0.82rem", color: "var(--neon3)", marginBottom: "1.5rem" }}>
                {personal.role} · {personal.subrole}
              </div>

              {[
                { icon: "📍", value: personal.location },
                { icon: "✉️", value: personal.email },
                { icon: "📞", value: personal.phone },
                { icon: "🔗", value: personal.linkedin },
                { icon: "💻", value: personal.github },
              ].map(({ icon, value }, i, arr) => (
                <div
                  key={value}
                  style={{
                    display: "flex", alignItems: "center", gap: 10,
                    fontSize: "0.85rem", color: "var(--text2)",
                    padding: "0.5rem 0",
                    borderBottom: i < arr.length - 1 ? "1px solid var(--border)" : "none",
                  }}
                >
                  <span style={{ fontSize: "1rem" }}>{icon}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

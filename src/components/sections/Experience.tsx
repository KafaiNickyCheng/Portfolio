import SectionHeader from "@/components/ui/SectionHeader";
import GradientText from "@/components/ui/GradientText";
import { experiences, education } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" style={{ background: "var(--bg)", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "7rem 3rem" }}>

        <SectionHeader
          label="Experience & Education"
          title={<>My <GradientText>journey</GradientText> so far</>}
        />

        {/* ── Timeline ── */}
        <div
          style={{
            position: "relative",
            paddingLeft: "2.5rem",
            marginTop: "3rem",
          }}
        >
          {/* Vertical line */}
          <div
            style={{
              position: "absolute", left: 0, top: 0, bottom: 0, width: 1,
              background: "linear-gradient(to bottom, var(--neon), var(--neon2), transparent)",
            }}
          />

          {experiences.map((exp, i) => (
            <div
              key={i}
              className="reveal"
              style={{ position: "relative", marginBottom: "4rem" }}
            >
              {/* Timeline dot */}
              <div
                style={{
                  position: "absolute", left: "-2.5rem",
                  width: 12, height: 12, borderRadius: "50%",
                  background: "var(--neon)",
                  marginLeft: -5.5,
                  boxShadow: "0 0 15px var(--neon-glow)",
                  top: 6,
                }}
              />

              <div
                style={{
                  fontSize: "0.78rem", fontWeight: 600,
                  color: "var(--neon3)",
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}
              >
                {exp.period}
              </div>

              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.35rem", fontWeight: 700,
                  color: "var(--text)", marginBottom: "0.3rem",
                }}
              >
                {exp.role}
              </div>

              <div style={{ fontSize: "0.9rem", color: "var(--accent)", marginBottom: "1rem" }}>
                {exp.company} · {exp.location}
              </div>

              <ul style={{ listStyle: "none" }}>
                {exp.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    style={{
                      fontSize: "0.92rem", color: "var(--text2)",
                      lineHeight: 1.7, paddingLeft: "1.5rem",
                      position: "relative", marginBottom: "0.5rem",
                    }}
                  >
                    <span style={{ position: "absolute", left: 0, color: "var(--neon3)" }}>▹</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Education ── */}
        <div
          className="reveal"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.1), rgba(79,70,229,0.05))",
            border: "1px solid var(--border2)",
            borderRadius: 16, padding: "2rem",
            marginTop: "4rem",
            display: "flex", gap: "2rem", alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: 60, height: 60, borderRadius: "50%",
              background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1.6rem", flexShrink: 0,
            }}
          >
            🎓
          </div>

          <div style={{ flex: 1, minWidth: 220 }}>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.1rem", fontWeight: 700, color: "var(--text)",
              }}
            >
              {education.degree}
            </h3>
            <div style={{ fontSize: "0.9rem", color: "var(--neon3)", margin: "0.2rem 0" }}>
              {education.university}
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--text2)" }}>
              {education.desc}
            </div>
          </div>

          <div
            style={{
              flexShrink: 0,
              background: "var(--neon-soft)",
              border: "1px solid var(--border2)",
              borderRadius: 10, padding: "1rem 1.5rem",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2rem", fontWeight: 800, color: "var(--accent)",
              }}
            >
              {education.gpa}
            </div>
            <div
              style={{
                fontSize: "0.72rem", color: "var(--text3)",
                textTransform: "uppercase", letterSpacing: "0.1em",
              }}
            >
              GPA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

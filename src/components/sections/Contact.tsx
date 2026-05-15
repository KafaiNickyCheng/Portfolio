"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import GradientText from "@/components/ui/GradientText";
import { personal } from "@/data/portfolio";

const CONTACT_LINKS = [
  { icon: "✉️", label: "Email",    value: personal.email,    href: `mailto:${personal.email}` },
  { icon: "📞", label: "Phone",    value: personal.phone,    href: `tel:${personal.phone.replace(/-/g,"")}` },
  { icon: "🔗", label: "LinkedIn", value: personal.linkedin, href: personal.linkedinUrl },
  { icon: "💻", label: "GitHub",   value: personal.github,   href: personal.githubUrl },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    // Replace with your preferred form handler (Formspree, EmailJS, etc.)
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\n${form.message}`
    );
    window.open(`mailto:${personal.email}?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const inputStyle: React.CSSProperties = {
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: 10, padding: "12px 16px",
    fontFamily: "var(--font-body)",
    fontSize: "0.95rem", color: "var(--text)",
    outline: "none", width: "100%",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  return (
    <section id="contact" style={{ background: "var(--bg2)", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "7rem 3rem" }}>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "5rem",
            alignItems: "start",
          }}
        >
          {/* ── Left: Info ── */}
          <div className="reveal">
            <SectionHeader
              label="Contact"
              title={<>Let&apos;s <GradientText>work</GradientText> together</>}
            />

            <p style={{ fontSize: "1.05rem", color: "var(--text2)", lineHeight: 1.8, marginBottom: "2.5rem" }}>
              I&apos;m actively looking for my next opportunity as a System Analyst. If you&apos;re
              looking for someone who can bridge the gap between business requirements and
              technical delivery — let&apos;s talk.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {CONTACT_LINKS.map(({ icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", gap: 14,
                    padding: "1rem 1.2rem",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: 12, textDecoration: "none",
                    transition: "border-color 0.3s, background 0.3s, transform 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = "var(--border2)";
                    el.style.background = "var(--neon-soft)";
                    el.style.transform = "translateX(6px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = "var(--border)";
                    el.style.background = "var(--surface)";
                    el.style.transform = "translateX(0)";
                  }}
                >
                  <div
                    style={{
                      width: 38, height: 38, borderRadius: 8,
                      background: "linear-gradient(135deg, var(--neon), var(--neon2))",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "1.1rem", flexShrink: 0,
                    }}
                  >
                    {icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.72rem", color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                      {label}
                    </div>
                    <div style={{ fontSize: "0.9rem", color: "var(--text)", fontWeight: 500 }}>
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="reveal reveal-delay-2" style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            {[
              { label: "Your Name",       name: "name",    type: "text",  placeholder: "John Smith" },
              { label: "Email Address",   name: "email",   type: "email", placeholder: "john@company.com" },
              { label: "Company / Role",  name: "company", type: "text",  placeholder: "Acme Corp · Hiring Manager" },
            ].map(({ label, name, type, placeholder }) => (
              <div key={name} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label
                  style={{
                    fontSize: "0.78rem", fontWeight: 600,
                    color: "var(--text2)", textTransform: "uppercase", letterSpacing: "0.1em",
                  }}
                >
                  {label}
                </label>
                <input
                  type={type}
                  name={name}
                  value={form[name as keyof typeof form]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  style={inputStyle}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--neon3)";
                    e.currentTarget.style.boxShadow = "0 0 0 3px var(--neon-soft)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>
            ))}

            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--text2)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about the opportunity..."
                style={{ ...inputStyle, resize: "none" }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "var(--neon3)";
                  e.currentTarget.style.boxShadow = "0 0 0 3px var(--neon-soft)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>

            <button
              onClick={handleSubmit}
              style={{
                background: sent
                  ? "linear-gradient(135deg, #059669, #047857)"
                  : "linear-gradient(135deg, #7c3aed, #4f46e5)",
                color: "white", border: "none",
                padding: "14px 28px", borderRadius: 10,
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem", fontWeight: 500, cursor: "pointer",
                transition: "all 0.3s", marginTop: "0.5rem",
                boxShadow: "0 0 25px var(--neon-glow)",
              }}
              onMouseEnter={(e) => {
                if (!sent) {
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 5px 40px rgba(124,58,237,0.5)";
                }
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 25px var(--neon-glow)";
              }}
            >
              {sent ? "✓ Opening Mail Client..." : "Send Message →"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

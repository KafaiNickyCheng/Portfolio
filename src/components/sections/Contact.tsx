"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import GradientText from "@/components/ui/GradientText";
import { personal } from "@/data/portfolio";
import { sendContactEmail } from "@/lib/api";

const CONTACT_LINKS = [
  { icon: "✉️", label: "Email",    value: personal.email,    href: undefined },
  { icon: "📞", label: "Phone",    value: personal.phone,    href: undefined },
  { icon: "🔗", label: "LinkedIn", value: personal.linkedin, href: personal.linkedinUrl },
  { icon: "💻", label: "GitHub",   value: personal.github,   href: personal.githubUrl },
];

type FormState = { name: string; email: string; company: string; message: string; };
type Status    = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm]     = useState<FormState>({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    // Add this helper above handleSubmit:
    const isValidEmail = (email: string) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // Inside handleSubmit, replace the basic validation block:
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in Name, Email and Message.");
      setStatus("error");
      return;
    }

    if (!isValidEmail(form.email)) {
      setError("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setError("");

    try {
      await sendContactEmail(form);
      setStatus("success");
      setForm({ name: "", email: "", company: "", message: "" });
      // Reset back to idle after 4 seconds
      setTimeout(() => setStatus("idle"), 4000);

    } catch (err: unknown) {
      setStatus("error");
      if (typeof err === "object" && err !== null && "message" in err) {
        setError((err as { message: string }).message);
      } else {
        setError("Failed to send message. Please try again.");
      }
    }
  };

  // ── Button label & color based on status
  const buttonLabel = {
    idle:    "Send Message →",
    loading: "Sending...",
    success: "✓ Message Sent!",
    error:   "Try Again →",
  }[status];

  const buttonBg = {
    idle:    "linear-gradient(135deg, #7c3aed, #4f46e5)",
    loading: "linear-gradient(135deg, #6d28d9, #4338ca)",
    success: "linear-gradient(135deg, #059669, #047857)",
    error:   "linear-gradient(135deg, #dc2626, #b91c1c)",
  }[status];

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
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "5rem", alignItems: "start",
        }}>

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
              {CONTACT_LINKS.map(({ icon, label, value, href }) => {
                const cardStyle: React.CSSProperties = {
                  display: "flex", alignItems: "center", gap: 14,
                  padding: "1rem 1.2rem",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 12, textDecoration: "none",
                  transition: "border-color 0.3s, background 0.3s, transform 0.3s",
                  cursor: href ? "pointer" : "default",
                };
                const handleEnter = (e: React.MouseEvent<HTMLElement>) => {
                  if (!href) return;
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--border2)";
                  el.style.background  = "var(--neon-soft)";
                  el.style.transform   = "translateX(6px)";
                };
                const handleLeave = (e: React.MouseEvent<HTMLElement>) => {
                  if (!href) return;
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--border)";
                  el.style.background  = "var(--surface)";
                  el.style.transform   = "translateX(0)";
                };
                const inner = (
                  <>
                    <div style={{
                      width: 38, height: 38, borderRadius: 8,
                      background: "linear-gradient(135deg, var(--neon), var(--neon2))",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "1.1rem", flexShrink: 0,
                    }}>
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
                  </>
                );
                return href ? (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    style={cardStyle} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                    {inner}
                  </a>
                ) : (
                  <div key={label} style={cardStyle} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="reveal reveal-delay-2" style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>

            {/* Error message */}
            {status === "error" && errorMsg && (
              <div style={{
                background: "rgba(220,38,38,0.1)",
                border: "1px solid rgba(220,38,38,0.3)",
                borderRadius: 10, padding: "12px 16px",
                fontSize: "0.88rem", color: "#fca5a5",
              }}>
                ⚠ {errorMsg}
              </div>
            )}

            {/* Success message */}
            {status === "success" && (
              <div style={{
                background: "rgba(5,150,105,0.1)",
                border: "1px solid rgba(5,150,105,0.3)",
                borderRadius: 10, padding: "12px 16px",
                fontSize: "0.88rem", color: "#6ee7b7",
              }}>
                ✓ Your message has been sent! I&apos;ll get back to you soon.
              </div>
            )}

            {[
              { label: "Your Name",      name: "name",    type: "text",  placeholder: "e.g. John Smith" },
              { label: "Email Address",  name: "email",   type: "email", placeholder: "e.g. john@company.com" },
              { label: "Company / Role", name: "company", type: "text",  placeholder: "e.g. Acme Corp · Hiring Manager" },
            ].map(({ label, name, type, placeholder }) => (
              <div key={name} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label style={{
                  fontSize: "0.78rem", fontWeight: 600,
                  color: "var(--text2)", textTransform: "uppercase", letterSpacing: "0.1em",
                }}>
                  {label}
                </label>
                <input
                  type={type} name={name}
                  value={form[name as keyof FormState]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  disabled={status === "loading"}
                  style={{ ...inputStyle, opacity: status === "loading" ? 0.6 : 1 }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--neon3)";
                    e.currentTarget.style.boxShadow   = "0 0 0 3px var(--neon-soft)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.boxShadow   = "none";
                  }}
                />
              </div>
            ))}

            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label style={{
                fontSize: "0.78rem", fontWeight: 600,
                color: "var(--text2)", textTransform: "uppercase", letterSpacing: "0.1em",
              }}>
                Message
              </label>
              <textarea
                name="message" rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about the opportunity..."
                disabled={status === "loading"}
                style={{ ...inputStyle, resize: "none", opacity: status === "loading" ? 0.6 : 1 }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "var(--neon3)";
                  e.currentTarget.style.boxShadow   = "0 0 0 3px var(--neon-soft)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.boxShadow   = "none";
                }}
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={status === "loading"}
              style={{
                background: buttonBg,
                color: "white", border: "none",
                padding: "14px 28px", borderRadius: 10,
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem", fontWeight: 500,
                cursor: status === "loading" ? "not-allowed" : "pointer",
                transition: "all 0.3s", marginTop: "0.5rem",
                boxShadow: "0 0 25px var(--neon-glow)",
                opacity: status === "loading" ? 0.8 : 1,
              }}
              onMouseEnter={(e) => {
                if (status !== "loading") {
                  (e.currentTarget as HTMLButtonElement).style.transform  = "translateY(-2px)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow  = "0 5px 40px rgba(124,58,237,0.5)";
                }
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 25px var(--neon-glow)";
              }}
            >
              {status === "loading" ? (
                <span style={{ display: "flex", alignItems: "center", gap: 8, justifyContent: "center" }}>
                  <span style={{
                    width: 16, height: 16, border: "2px solid rgba(255,255,255,0.3)",
                    borderTop: "2px solid white", borderRadius: "50%",
                    animation: "spin 0.8s linear infinite", display: "inline-block",
                  }} />
                  Sending...
                </span>
              ) : buttonLabel}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
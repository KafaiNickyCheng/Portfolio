interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  className?: string;
}

export default function SectionHeader({ label, title, className = "" }: SectionHeaderProps) {
  return (
    <div className={`reveal ${className}`}>
      {/* Label */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          fontSize: "0.72rem",
          fontWeight: 600,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--neon3)",
          marginBottom: "1.2rem",
        }}
      >
        <span style={{ width: 30, height: 1, background: "var(--neon3)", display: "block" }} />
        {label}
      </div>

      {/* Title */}
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2rem, 4vw, 3.2rem)",
          fontWeight: 800,
          letterSpacing: "-0.02em",
          color: "var(--text)",
          lineHeight: 1.4,
          paddingBottom: "0.4em",
          marginBottom: "1.5rem",
          overflow: "visible",   // ← add this
        }}
      >
        {title}
      </h2>
    </div>
  );
}

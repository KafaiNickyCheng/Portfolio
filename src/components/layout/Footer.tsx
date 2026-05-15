import { personal } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "3rem",
        borderTop: "1px solid var(--border)",
        fontSize: "0.82rem",
        color: "var(--text3)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <p>
        Designed &amp; built with care ·{" "}
        <span style={{ color: "var(--neon3)" }}>{personal.name}</span> · {year}
      </p>
    </footer>
  );
}

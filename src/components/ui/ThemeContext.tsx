"use client";

import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      style={{
        background:   "var(--surface2)",
        border:       "1px solid var(--border2)",
        borderRadius: 100,
        cursor:       "pointer",
        display:      "flex",
        alignItems:   "center",
        padding:      "6px 10px",
        gap:          8,
        transition:   "all 0.3s",
        flexShrink:   0,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = "var(--neon-soft)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = "var(--surface2)";
      }}
    >
      {/* Track */}
      <div style={{
        width:        42,
        height:       24,
        borderRadius: 100,
        background:   theme === "dark"
          ? "linear-gradient(135deg, var(--neon), var(--neon2))"
          : "linear-gradient(135deg, #f59e0b, #f97316)",
        position:     "relative",
        transition:   "background 0.3s",
        flexShrink:   0,
      }}>
        {/* Thumb */}
        <div style={{
          position:     "absolute",
          top:          3,
          left:         theme === "dark" ? 21 : 3,
          width:        18,
          height:       18,
          borderRadius: "50%",
          background:   "white",
          transition:   "left 0.3s",
          display:      "flex",
          alignItems:   "center",
          justifyContent: "center",
          fontSize:     "0.65rem",
        }}>
          {theme === "dark" ? "🌙" : "☀️"}
        </div>
      </div>
    </button>
  );
}
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "Kafai Cheng — System Analyst & Full-Stack Engineer",
  description:
    "Portfolio of Kafai Cheng — System Analyst with a full-stack engineering background. Building systems. Bridging business & tech.",
  keywords: [
    "System Analyst", "Full-Stack Engineer", "Vue.js", "Next.js",
    "C# .NET", "ERP Integration", "Power BI", "Thailand",
  ],
  authors: [{ name: "Kafai Cheng" }],
  openGraph: {
    title: "Kafai Cheng — System Analyst & Full-Stack Engineer",
    description: "Building Systems. Bridging Business & Tech.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
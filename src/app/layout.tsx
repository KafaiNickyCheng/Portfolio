import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}

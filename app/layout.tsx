import type { Metadata, Viewport } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Noxcipher | 3D Animated Gaming Website",
  description: "Noxcipher, a modern 3D animated gaming experience built with React and GSAP.",
  keywords: ["Noxcipher", "gaming", "3D", "React", "GSAP"],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Noxcipher | 3D Animated Gaming Website",
    description: "A modern 3D animated gaming experience.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#010103",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

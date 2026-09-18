import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Manideep Daram | Frontend & Full-Stack Developer",
    template: "%s | Manideep Daram",
  },
  description:
    "Frontend and full-stack developer building reliable web applications. Based in Hyderabad, open to remote roles across India.",
  keywords: [
    "Manideep Daram",
    "Frontend Developer",
    "Full-Stack Developer",
    "TypeScript",
    "React",
    "Vue",
    "Node.js",
    "Hyderabad",
    "Software Engineer",
  ],
  authors: [{ name: "Manideep Daram" }],
  creator: "Manideep Daram",
  openGraph: {
    title: "Manideep Daram | Frontend & Full-Stack Developer",
    description:
      "Frontend and full-stack developer building reliable web applications.",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-[#fafaf9] text-[#1c1917]`}
      >
        {children}
      </body>
    </html>
  );
}

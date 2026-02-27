import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Dang Bich Thuy | Senior Talent Acquisition Specialist",
  description:
    "Dynamic and results-driven recruiter specializing in IT and Media recruitment.",
  keywords: ["recruiter", "talent acquisition", "HR", "IT recruitment", "Vietnam"],
  authors: [{ name: "Dang Bich Thuy" }],
  openGraph: {
    title: "Dang Bich Thuy | Senior TA Specialist",
    description: "Dynamic and results-driven recruiter specializing in IT and Media recruitment.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-warm-cream text-warm-brown`}
      >
        {children}
      </body>
    </html>
  );
}

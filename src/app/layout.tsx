import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "700"],
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
        className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased bg-warm-cream text-warm-brown`}
      >
        {children}
      </body>
    </html>
  );
}

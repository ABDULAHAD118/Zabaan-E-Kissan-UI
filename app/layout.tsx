import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zabaan-E-Kisaan - AI Agriculture Assistant",
  description:
    "Zabaan-E-Kisaan is a bilingual agriculture assistant with disease detection, AI chatbot support, remote sensing by coordinates, and daily crop price updates.",
  keywords:
    "zabaan-e-kisaan, agriculture app, AI chatbot, disease detection, crop prices, remote sensing, bilingual farming app",
  authors: [{ name: "Zabaan-E-Kisaan Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Zabaan-E-Kisaan - AI Tools for Smarter Farming",
    description:
      "Detect crop diseases, ask AI in English or Urdu, analyze agricultural land through coordinates, and track daily government price updates.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zabaan-E-Kisaan - AI Agriculture Assistant",
    description:
      "Bilingual farmer assistant with disease detection, remote sensing, and crop market pricing.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

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
  title: "Programação com IA — Do Zero ao Deploy | KL Tecnologia",
  description:
    "Aprenda a criar, desenvolver e hospedar sistemas completos do zero usando IA. Mesmo sem saber programar. Entre para a lista de espera.",
  keywords: [
    "programação com IA",
    "vibe coding",
    "curso",
    "KL Tecnologia",
    "Ray Henrique",
    "deploy",
    "software com IA",
  ],
  authors: [{ name: "Ray Henrique", url: "https://linkedin.com/in/rayhenrique" }],
  creator: "KL Tecnologia",
  openGraph: {
    title: "Transforme suas ideias em software usando apenas o português.",
    description:
      "A engenharia de software desmistificada: pense, converse com a IA e publique. Entre para a lista de espera.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-black font-sans text-white">{children}</body>
    </html>
  );
}

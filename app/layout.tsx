import type { Metadata } from "next";
import { Bricolage_Grotesque, Lato } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-heading",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Kokeile – Kampanja harrastamisen itseisarvon puolesta",
  description: "'Kokeile. Entä, jos harrastaminen ei tarvitse syytä?' on kampanja, joka rohkaisee nuoria aikuisia kokeilemaan harrastuksia ilman suorituspaineita. Harrastamisen ei tarvitse olla hyödyllistä — tekemisen ilo riittää.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi" className={`${bricolage.variable} ${lato.variable}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

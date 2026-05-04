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
  title: "Liiku! – Kampanja nuorille",
  description: "Kampanja, joka kannustaa nuoria liikkumaan enemmän ja löytämään oman juttunsa.",
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

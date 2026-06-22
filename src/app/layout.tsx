import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "IlmuNabi — Sains Pertama, Iman Selamanya",
  description: "Edukasi sains interaktif anak Muslim untuk menumbuhkan rasa kagum terhadap kebesaran ciptaan Allah SWT.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${outfit.variable} font-sans antialiased bg-cream text-charcoal`}>
        {children}
      </body>
    </html>
  );
}

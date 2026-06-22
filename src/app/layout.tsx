import type { Metadata } from "next";
import { Outfit, Amiri } from "next/font/google";
import { AppProvider } from "@/context/AppContext";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const amiri = Amiri({
  subsets: ["arabic"],
  variable: "--font-amiri",
  weight: ["400", "700"],
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
      <body className={`${outfit.variable} ${amiri.variable} font-sans antialiased bg-cream text-charcoal`}>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}

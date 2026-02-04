import type { Metadata } from "next";
import { Archivo_Black } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Innerspace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={archivoBlack.variable} suppressHydrationWarning>
      <body
        className="bg-[var(--bg)] text-[#1C1C1C] antialiased"
        suppressHydrationWarning
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

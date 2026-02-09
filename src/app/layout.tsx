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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Innerspace",
  url: "https://innerspace.nz",
  description:
    "Innerspace is a progressive New Zealand web design and development studio crafting fast, accessible websites, web apps, and digital experiences.",
  // TODO: Replace with real social profile URLs.
  sameAs: [
    "https://www.instagram.com/your-handle",
    "https://www.linkedin.com/company/your-company",
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Innerspace — Web Design & Development Studio NZ",
    template: "%s | Innerspace",
  },
  description:
    "Innerspace is a progressive New Zealand web design and development studio crafting fast, accessible websites, web apps, and digital experiences.",
  metadataBase: new URL("https://innerspace.nz"),
  openGraph: {
    title: "Innerspace — Web Design & Development Studio NZ",
    description:
      "Innerspace is a progressive New Zealand web design and development studio crafting fast, accessible websites, web apps, and digital experiences.",
    url: "https://innerspace.nz",
    siteName: "Innerspace",
    locale: "en_NZ",
    type: "website",
  },
  icons: {
    icon: "/icon.svg",
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <Navbar />
        <main>{children}</main>
        <footer className="mx-auto max-w-[1440px] px-6 pb-10 pt-6 text-center text-[10px] uppercase tracking-[0.35em] text-[#7A7A7A]/70 sm:text-xs sm:tracking-[0.45em]">
          Website &amp; app design studio — New Zealand
        </footer>
      </body>
    </html>
  );
}

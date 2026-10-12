import type { Metadata, Viewport } from "next";
import { Nunito, Quicksand } from "next/font/google";
import "./globals.css";
import { AudioPlayer } from "@/components/ui/AudioPlayer";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { LiveBackground } from "@/components/ui/LiveBackground";

const nunito = Nunito({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const quicksand = Quicksand({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#fdfbf7",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tharung.me"),
  title: "Tharun G | Cybersecurity, AI/ML & Geospatial Engineer",
  description:
    "Portfolio of Tharun G — third-year CSE student at National Engineering College building security tooling, satellite-telemetry AI and geospatial systems. Explore Astrovia, SentinelAI, Orion AI, and security research.",
  keywords: [
    "Tharun G",
    "Cybersecurity Engineer",
    "AI/ML",
    "Satellite Anomaly Detection",
    "Astrovia",
    "SentinelAI",
    "Orion AI",
    "Geospatial",
    "SIEM SOAR",
    "CTF ragefrost",
    "National Engineering College",
  ],
  authors: [{ name: "Tharun G", url: "https://tharung.me" }],
  creator: "Tharun G",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tharung.me",
    title: "Tharun G | Cybersecurity, AI/ML & Geospatial Engineer",
    description:
      "Third-year CSE student at National Engineering College building security tooling, satellite-telemetry AI and geospatial systems.",
    siteName: "Cybernexus | Tharun G",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tharun G — Cybersecurity, AI/ML & Geospatial Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tharun G | Cybersecurity, AI/ML & Geospatial Engineer",
    description:
      "Third-year CSE student at National Engineering College building security tooling, satellite-telemetry AI and geospatial systems.",
    images: ["/og-image.png"],
    creator: "@TharunG2006",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tharun G",
  jobTitle: "Cybersecurity, AI/ML & Geospatial Engineer",
  description:
    "Third-year CSE student at National Engineering College building security tooling, satellite-telemetry AI and geospatial systems.",
  url: "https://tharung.me",
  email: "tarun.ganapathi2007@gmail.com",
  sameAs: [
    "https://github.com/TharunG2006",
    "https://www.linkedin.com/in/tharun-g-b5b53a260/",
    "https://github.com/AstraDev-Labs",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "National Engineering College",
  },
  knowsAbout: [
    "Cybersecurity",
    "Artificial Intelligence",
    "Machine Learning",
    "Satellite Telemetry Anomaly Detection",
    "Autonomous SIEM & SOAR",
    "Geospatial Systems & Remote Sensing",
    "Full-Stack Engineering",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${nunito.variable} ${quicksand.variable} antialiased text-foreground bg-background selection:bg-[#ffb5a7]/30 selection:text-slate-800`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[99999] focus:px-4 focus:py-2 focus:bg-[#ffb5a7] focus:text-slate-800 focus:font-bold focus:rounded-xl focus:shadow-lg"
          >
            Skip to main content
          </a>
          <LiveBackground />
          {children}
          <AudioPlayer />
        </ThemeProvider>
      </body>
    </html>
  );
}

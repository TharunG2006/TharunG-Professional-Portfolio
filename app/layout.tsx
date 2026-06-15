import type { Metadata } from "next";
import { Nunito, Quicksand } from "next/font/google";
import "./globals.css";
import { AudioPlayer } from "@/components/ui/AudioPlayer";

const nunito = Nunito({
  variable: "--font-sans",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cybernexus | Tharun G",
  description: "Interactive Cozy Portfolio",
};

import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { LiveBackground } from "@/components/ui/LiveBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body
        className={`${nunito.variable} ${quicksand.variable} antialiased text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <LiveBackground />
          {children}
          <AudioPlayer />
        </ThemeProvider>
      </body>
    </html>
  );
}

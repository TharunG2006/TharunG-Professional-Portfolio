import type { Metadata } from "next";
import { Inter, Share_Tech_Mono } from "next/font/google";
import "./globals.css";
import { AudioPlayer } from "@/components/ui/AudioPlayer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CYBERNEXUS_3D | Tharun G",
  description: "Interactive 3D Cybersecurity Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${shareTechMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <AudioPlayer />
      </body>
    </html>
  );
}

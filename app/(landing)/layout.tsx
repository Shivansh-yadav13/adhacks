import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "../globals.css";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Footer from "../components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import ParticleBackground from "../components/ParticleBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Artistry",
  description: "Generate Winning Ad Creatives with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
        >
          <div className="inset-0 -z-10">
            <ParticleBackground />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_0%,rgba(150,200,255,0.95)_0%,rgba(96,165,250,0.55)_20%,rgba(59,130,246,0.35)_40%,rgba(10,13,16,0.95)_70%)]"></div>
          </div>
          <Navbar />
          <Container>{children}</Container>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}

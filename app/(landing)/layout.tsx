import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "../globals.css";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Footer from "../components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

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
  title: "Hackads",
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
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_0%,rgba(255,255,255,0.95)_0%,rgba(127,211,255,0.55)_20%,rgba(96,170,255,0.35)_40%,rgba(10,13,16,0.95)_70%)]"></div>
          </div>
          <Navbar />
          <Container>{children}</Container>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}

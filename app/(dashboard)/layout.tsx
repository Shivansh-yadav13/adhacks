import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif, Inter } from "next/font/google";
import "../globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { Sidebar } from "../components/dashboard/Sidebar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hackads",
  description: "Generate Winning Ad Creatives with AI",
};

export default function DasboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.variable} antialiased`}
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          <div className="flex">
            <Sidebar />
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}

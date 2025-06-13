import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif, Inter } from "next/font/google";
import "../globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { Sidebar } from "../components/dashboard/Sidebar";
import { UserDataProvider } from "@/contexts/user-data-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Artistry",
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
          <UserDataProvider>
            <div className="flex">
              <Sidebar />
              {children}
            </div>
          </UserDataProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

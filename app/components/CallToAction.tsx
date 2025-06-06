import React from "react";
import Button from "./Button";
import Image from "next/image";

export default function CallToAction() {
  return (
    <div className="w-full max-w-6xl mx-auto bg-zinc-900/80 rounded-3xl shadow-2xl px-8 py-12 flex flex-col md:flex-row items-center gap-8 md:gap-0 relative overflow-hidden">
      {/* Left: Text and Buttons */}
      <div className="flex-1 flex flex-col items-start justify-center gap-6 md:pl-8">
        <Button variant="light" className="mb-2">
          Get The App
        </Button>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          AI-Powered Ad Creatives
        </h1>
        <p className="text-gray-300 text-lg max-w-md">
          Increase ROAS with AI-generated ad creatives
        </p>
        <Button className="mt-2" variant="primary">
          <span className="inline-flex items-center gap-2">Create Now</span>
        </Button>
      </div>
      {/* Right: Phone Mockup */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-[180px] h-[360px] md:w-[220px] md:h-[440px] rounded-[2.5rem] bg-gradient-to-b from-zinc-800/80 to-zinc-900/90 shadow-xl border-4 border-zinc-800 overflow-hidden flex items-center justify-center">
          <Image
            src="/hero.avif"
            alt="Ad"
            fill
            className="object-cover -scale-x-100"
            style={{ borderRadius: "2rem" }}
          />
        </div>
      </div>
      {/* Optional: Subtle purple glow at bottom right */}
      {/* <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-[radial-gradient(circle,rgba(120,80,255,0.18)_0%,transparent_70%)] pointer-events-none" /> */}
    </div>
  );
}

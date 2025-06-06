import React from "react";
import Hero from "../components/Hero";
import CreativesCarousel from "../components/CreativesCarousel";
import VerticalCarousel from "../components/VerticalCarousel";
import CallToAction from "../components/CallToAction";
import Pricing from "../components/Pricing";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="flex flex-col gap-8 font-[family-name:var(--font-geist-sans)]">
        <Hero />
        <div className="flex flex-col items-center justify-center gap-4 my-8">
          <h2 className="text-6xl font-bold">100+ Winning Creatives</h2>
          <p className="text-lg text-slate-400">
            Get Inspired from our database of 100+ Winning Creatives
          </p>
          <CreativesCarousel />
          {/* <VerticalCarousel /> */}
          <Pricing />
          <CallToAction />
        </div>
      </div>
    </div>
  );
}

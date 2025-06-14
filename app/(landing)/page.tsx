import React from "react";
import Hero from "../components/Hero";
import CreativesCarousel from "../components/CreativesCarousel";
import Pricing from "../components/Pricing";
import Demo from "../components/Demo";
// import BuyCreditsPage from "../(dashboard)/dashboard/buy-credits/page";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="flex flex-col gap-8 font-[family-name:var(--font-geist-sans)]">
        <Hero />
        <div className="flex flex-col items-center justify-center gap-20 my-8">
          <CreativesCarousel />
          <Demo />
          <Pricing />
        </div>
      </div>
    </div>
  );
}

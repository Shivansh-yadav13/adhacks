import React from "react";
import Button from "./Button";
// import BuyCreditsPage from "../(dashboard)/dashboard/buy-credits/page";

export default function Pricing() {
  return (
    <div className="w-full mx-auto bg-zinc-900/80 rounded-3xl shadow-2xl px-8 py-12 flex flex-col md:flex-row items-center gap-8 md:gap-0 relative overflow-hidden mt-12">
      {/* Left: Plan name, description, button */}
      <div className="flex-1 flex flex-col items-start justify-center gap-6 md:pl-8">
        <h2 className="text-5xl font-[var(--font-instrument-serif)] text-white">
          Pay for what you use
        </h2>
        <p className="text-gray-300 text-lg max-w-md">
          No subscription required. Pay for what you use.
        </p>
        <Button className="w-full max-w-xs mt-4" variant="primary">
          Get Started
        </Button>
      </div>
      {/* Right: Price and features */}
      <div className="flex-1 flex flex-col items-start justify-center gap-6 md:pl-8">
        <div className="text-4xl font-bold text-white mb-2">1 Credit</div>
        <div className="text-lg text-gray-300 mb-4">for 1 AI ad creative</div>
        <div className="text-gray-400 text-base flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>1 AI ad creative = 1
            credits
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            No subscription required
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            Pay as you go
          </div>
        </div>
      </div>
    </div>
  );
}

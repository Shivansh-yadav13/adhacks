"use client";
import React from "react";
import Button from "@/app/components/Button";
import { useRouter } from "next/navigation";

const pricingPlans = [
  {
    name: "Starter",
    price: 5,
    totalCredits: 20,
    id: "pdt_WxhTITUTa7gLcEv2gOkc1",
  },
  {
    name: "Pro",
    price: 10,
    totalCredits: 42,
    id: "pdt_ifCPWINqz0uIbPi37pFYT",
  },
  {
    name: "Power",
    price: 20,
    totalCredits: 90,
    id: "pdt_9tfdVBGgBRz5XTl1xBeKB",
  },
];

export default function BuyCreditsPage() {
  const router = useRouter();

  const handleBuyNow = (productId: string) => {
    router.push(`/dashboard/checkout?productId=${productId}`);
  };

  return (
    <div className="mx-auto flex flex-col items-center justify-center my-20">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-2">Buy Credits</h1>
        <p className="text-zinc-300 mb-6">
          Choose a credit package that fits your needs. Get bonus credits on
          higher plans!
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 w-full justify-center items-stretch mt-12">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className="flex-1 bg-zinc-900/80 rounded-3xl p-8 flex flex-col items-center shadow-2xl border border-zinc-800 min-w-[260px] max-w-xs mx-auto"
          >
            <h3 className="text-2xl font-semibold text-white mb-2 tracking-wide">
              {plan.name}
            </h3>
            <div className="flex flex-col items-center mb-6">
              <span className="text-6xl font-extrabold text-white mb-2 drop-shadow-lg">
                {plan.totalCredits}
              </span>
              <span className="uppercase text-zinc-400 tracking-widest text-lg mb-2">
                credits
              </span>
              <span className="text-zinc-500 text-base font-bold mb-2">
                ${plan.price}
              </span>
            </div>
            <ul className="mb-8 space-y-2 w-full">
              <li className="flex items-center gap-2 text-green-400">
                <span>✔</span>
                <span className="text-zinc-300">No subscription required</span>
              </li>
              <li className="flex items-center gap-2 text-green-400">
                <span>✔</span>
                <span className="text-zinc-300">Pay as you go</span>
              </li>
            </ul>
            <Button onClick={() => handleBuyNow(plan.id)}>Buy Now</Button>
          </div>
        ))}
      </div>
    </div>
  );
}

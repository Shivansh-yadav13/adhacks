"use client";
import React from "react";
import MasonryGrid from "@/app/components/dashboard/MasonryGrid";
import { History } from "lucide-react";
import { useUserStore } from "@/store/user-store";
import CreditsBadge from "@/app/components/dashboard/CreditsBadge";

// Sample ads for display - in real implementation, these would come from the creative store
const sampleAds = [
  {
    src: "/ads/ad2.png",
    alt: "Ad 2",
  },
  {
    src: "/ads/ad3.png",
    alt: "Ad 3",
  },
  {
    src: "/ads/ad4.png",
    alt: "Ad 4",
  },
  {
    src: "/ads/ad5.png",
    alt: "Ad 5",
  },
  {
    src: "/ads/ad6.png",
    alt: "Ad 6",
  },
  {
    src: "/ads/ad7.png",
    alt: "Ad 7",
  },
  {
    src: "/ads/ad8.png",
    alt: "Ad 8",
  },
  {
    src: "/ads/ad9.png",
    alt: "Ad 9",
  },
  {
    src: "/ads/ad10.png",
    alt: "Ad 10",
  },
  {
    src: "/ads/ad11.png",
    alt: "Ad 11",
  },
  {
    src: "/ads/ad12.png",
    alt: "Ad 12",
  },
  {
    src: "/ads/ad13.png",
    alt: "Ad 13",
  },
];

export default function HistoryPage() {
  const { user } = useUserStore();

  return (
    <div className="flex flex-col gap-4 w-full p-4 m-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold flex items-center gap-2">
          <History className="w-6 h-6" />
          History
        </h2>
        <CreditsBadge credits={user?.credits || 0} />
      </div>

      <div className="flex items-center justify-between my-4 border-t border-zinc-900 pt-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl font-semibold">Your Creatives</h3>
          <p className="text-zinc-400">
            View and manage all your generated ad creatives
          </p>
        </div>
      </div>

      <div className="border-2 border-zinc-900 bg-zinc-900 rounded-lg overflow-y-scroll h-[calc(100vh-100px)]">
        <MasonryGrid
          images={sampleAds}
          setAdImage={() => {}} // Empty function since we don't need to set ad image in history
        />
      </div>
    </div>
  );
}

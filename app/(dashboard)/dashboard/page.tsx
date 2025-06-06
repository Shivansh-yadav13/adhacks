"use client";
import React from "react";
import MasonryGrid from "@/app/components/dashboard/MasonryGrid";
import AdForm from "@/app/components/dashboard/AdForm";
import { Telescope } from "lucide-react";
import { useUserStore } from "@/store/user-store";
import CreditsBadge from "@/app/components/dashboard/CreditsBadge";

const images = [
  {
    src: "/ads/ad2.png",
    alt: "Image 1",
  },
  {
    src: "/ads/ad3.png",
    alt: "Image 1",
  },
  {
    src: "/ads/ad4.png",
    alt: "Image 1",
  },
  {
    src: "/ads/ad5.png",
    alt: "Image 1",
    width: 1000,
    height: 1000,
  },
  {
    src: "/ads/ad6.png",
    alt: "Image 1",
  },
  {
    src: "/ads/ad7.png",
    alt: "Image 1",
  },
  {
    src: "/ads/ad8.png",
    alt: "Image 1",
  },
  {
    src: "/ads/ad9.png",
    alt: "Image 1",
  },
  {
    src: "/ads/ad10.png",
    alt: "Image 1",
  },
  {
    src: "/ads/ad11.png",
    alt: "Image 1",
  },
  {
    src: "/ads/ad12.png",
    alt: "Image 1",
  },
  {
    src: "/ads/ad13.png",
    alt: "Image 1",
  },
  {
    src: "/ads/ad14.png",
    alt: "Image 1",
  },
  {
    src: "/ads/ad15.png",
    alt: "Image 1",
  },
];
export default function Dashboard() {
  const { user } = useUserStore();

  return (
    <div className="flex flex-col gap-4 w-full p-4 m-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold">Create Ad</h2>
        <CreditsBadge credits={user?.credits || 0} />
      </div>
      <AdForm />
      <div className="flex items-center justify-between my-4 border-t border-zinc-900 pt-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl font-semibold flex items-center gap-2">
            <Telescope className="w-6 h-6" />
            Explore
          </h3>
          <p className="text-zinc-400">
            Choose from 100+ winning ad creatives for your next campaign
          </p>
        </div>
      </div>
      <div className="border-2 border-zinc-900 bg-zinc-900 rounded-lg overflow-y-scroll h-[calc(100vh-100px)]">
        <MasonryGrid images={images} />
      </div>
    </div>
  );
}

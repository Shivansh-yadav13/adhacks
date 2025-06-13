"use client";
import React, { useEffect } from "react";
import { History, Download, RefreshCw } from "lucide-react";
import { useUserStore } from "@/store/user-store";
import CreditsBadge from "@/app/components/dashboard/CreditsBadge";
import { useCreativeStore } from "@/store/creative-store";
import Button from "@/app/components/Button";

export default function HistoryPage() {
  const { user } = useUserStore();
  const { creatives, fetchCreatives } = useCreativeStore();

  useEffect(() => {
    if (user) {
      if (!creatives) {
        fetchCreatives(user.id);
      }
    }
  }, [user]);

  return (
    <div className="flex flex-col gap-4 w-full p-4 m-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-semibold flex items-center gap-2">
            <History className="w-6 h-6" />
            History
          </h2>
          <Button
            variant="dark"
            onClick={() => user && fetchCreatives(user.id)}
            className="flex items-center gap-2 text-sm"
          >
            <RefreshCw className="w-5 h-5" />
            Refresh
          </Button>
        </div>
        <CreditsBadge credits={user?.credits} />
      </div>

      <div className="flex items-center justify-between my-4 border-t border-zinc-900 pt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {creatives.map((ad, index) => (
            <div key={index} className="aspect-square w-full relative group">
              <img
                src={ad}
                className="w-full h-full object-contain border-2 bg-zinc-800 border-zinc-900 rounded-lg"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg flex items-center justify-center">
                <Button
                  variant="dark"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = ad;
                    link.target = "_blank";
                    link.download = "generated-ad.png";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <Download className="w-6 h-6 text-white" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

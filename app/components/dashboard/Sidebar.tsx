"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useUserStore } from "@/store/user-store";
import {
  ImagePlus,
  History,
  LogOut,
  User,
  Coins,
  Sparkles,
  Plus,
  LayoutDashboard,
  Image as ImageIcon,
  Settings,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Button from "@/app/components/Button";

const links = [
  {
    label: "Create",
    href: "/dashboard",
    icon: ImagePlus,
  },
  {
    label: "History",
    href: "/dashboard/history",
    icon: History,
  },
];

export const Sidebar = () => {
  const { user } = useUserStore();
  const pathname = usePathname();

  console.log(user);

  return (
    <div className="sticky top-0 left-0 h-screen w-64 border-r border-zinc-900 flex flex-col p-6">
      {/* Logo and Brand */}
      <div className="flex items-center gap-3 mb-8">
        <Link
          href="/"
          className="bg-gradient-to-br from-neutral-800 via-slate-900 to-blue-900 rounded-2xl p-4 shadow-inner flex items-center justify-center"
        >
          <Sparkles className="w-4 h-4 text-white" />
        </Link>
        <h2 className="text-xl font-bold text-white">AdHacks</h2>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col flex-grow">
        <div className="space-y-2">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                href={link.href}
                key={link.label}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                  isActive
                    ? "bg-zinc-900 text-white border border-zinc-800"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{link.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Credits Section */}
        <div className="mt-auto mb-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
            <p className="text-md text-zinc-400 mb-1 flex items-center gap-2">
              <Coins className="w-4 h-4" /> Available Credits:{" "}
              {user?.credits || 0}
            </p>
            <p className="text-2xl font-bold text-white mb-3"></p>
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 text-sm"
              onClick={() => {
                // TODO: Implement add credits functionality
              }}
            >
              Add Credits
            </Button>
          </div>
        </div>

        {/* User Profile Section */}
        <div className="border-t border-zinc-900 pt-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center">
              {user?.profileUrl ? (
                <Image
                  src={user.profileUrl}
                  alt={user.name || "User"}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              ) : (
                <User className="w-5 h-5 text-zinc-400" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">
                {user?.name || "User"}
              </p>
              <p className="text-xs text-zinc-400 truncate">
                {user?.email || "user@example.com"}
              </p>
            </div>
            <button
              className="text-zinc-400 hover:text-white transition-colors duration-200"
              onClick={() => {
                /* Add logout handler */
              }}
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

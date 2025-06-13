import { Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Features",
    href: "/features",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Create",
    href: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <nav className="sticky top-8 z-50 w-fit bg-zinc-900/10 rounded-full my-8 mx-auto backdrop-blur-3xl shadow-[inset_0_2px_2px_0_rgba(255,255,255,0.2)] flex justify-between gap-8 items-center px-12 py-2">
      <div className="flex items-center text-lg font-medium">
        {navItems.slice(0, 2).map((item, idx) => (
          <React.Fragment key={item.label}>
            <Link
              className="px-2 py-1 rounded-full hover:text-white/80 transition-colors text-white"
              href={item.href}
            >
              {item.label}
            </Link>
            {idx < 1 && (
              <span className="mx-4 text-3xl text-gray-400 select-none">
                &middot;
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Link
          href="/"
          // className="bg-gradient-to-br from-neutral-800 via-slate-900 to-blue-900 rounded-2xl p-4 shadow-inner flex items-center justify-center"
        >
          <Image
            src="/adistry_logo.png"
            alt="logo"
            width={100}
            height={100}
            className="w-12 h-12 text-white"
          />
          {/* <Sparkles className="w-4 h-4 text-white" /> */}
        </Link>
      </div>
      <div className="flex items-center text-lg font-medium">
        {navItems.slice(2).map((item, idx) => (
          <React.Fragment key={item.label}>
            <Link
              className="px-2 py-1 rounded-full hover:text-white/80 transition-colors text-white"
              href={item.href}
            >
              {item.label}
            </Link>
            {idx < 1 && (
              <span className="mx-4 text-3xl text-gray-400 select-none">
                &middot;
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

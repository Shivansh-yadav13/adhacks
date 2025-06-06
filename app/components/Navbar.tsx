import { Sparkles } from "lucide-react";
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
    label: "Get Started",
    href: "/get-started",
    primary: true,
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
              <span className="mx-4 text-lg text-gray-400 select-none">
                &middot;
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Link
          href="/"
          className="bg-gradient-to-br from-neutral-800 via-slate-900 to-blue-900 rounded-2xl p-4 shadow-inner flex items-center justify-center"
        >
          <Sparkles className="w-4 h-4 text-white" />
        </Link>
      </div>
      <div className="flex items-center text-lg font-medium">
        {navItems.slice(2).map((item, idx) => (
          <React.Fragment key={item.label}>
            <Link
              className={`py-2 px-4 rounded-full hover:text-white/80 transition-colors text-white ${
                item.primary
                  ? "hover:bg-gradient-to-br hover:border border-blue-700 from-blue-400 via-blue-500 to-blue-700 text-white hover:shadow-[0_2px_8px_0_rgba(96,170,255,0.15)] hover:from-blue-500 hover:to-blue-800"
                  : ""
              }`}
              href={item.href}
            >
              {item.label}
            </Link>
            {idx < 1 && (
              <span className="mx-4 text-lg text-gray-400 select-none">
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

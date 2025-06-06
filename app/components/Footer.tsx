import React from "react";

const Footer = () => {
  return (
    <div className="bottom-8 z-50 w-fit bg-zinc-900/10 rounded-full my-8 mx-auto backdrop-blur-3xl shadow-[inset_0_2px_2px_0_rgba(255,255,255,0.2)] flex justify-between gap-8 items-center px-12 py-2">
      <p className="text-sm">
        Made with ❤️ by{" "}
        <a
          href="https://x.com/shvshydv"
          className="text-blue-500 hover:underline"
        >
          Shivansh (shvshydv)
        </a>
      </p>
    </div>
  );
};

export default Footer;

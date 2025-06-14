"use client";
import { motion } from "motion/react";
import { fadeInUp } from "@/lib/animation";
import React from "react";

const Demo = () => {
  return (
    <div id="demo" className="flex flex-col items-center justify-center gap-4">
      <motion.h1
        initial={fadeInUp.initial}
        whileInView={fadeInUp.animate}
        transition={fadeInUp.transition}
        className="text-6xl font-bold"
      >
        Watch 00:25 demo
      </motion.h1>
      <motion.p
        initial={fadeInUp.initial}
        whileInView={fadeInUp.animate}
        transition={fadeInUp.transition}
        className="text-lg text-slate-400"
      >
        See how easy it is to create a winning ad
      </motion.p>
      <motion.div
        initial={fadeInUp.initial}
        whileInView={fadeInUp.animate}
        transition={fadeInUp.transition}
        className="w-full max-w-2xl"
      >
        <iframe
          className="rounded-xl border-6 border-zinc-800 shadow-[0_0_20px_rgba(96,165,250,0.5)]"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/fRJ7JAoJz0Q?si=71N-F53XYcpE-Sk0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </motion.div>
    </div>
  );
};

export default Demo;

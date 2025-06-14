"use client";

import React from "react";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";
import { Video } from "lucide-react";
import { motion } from "motion/react";
import { fadeInUp } from "@/lib/animation";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 my-8">
      <motion.h1
        className="text-7xl text-center font-[family-name:var(--font-instrument-serif)]"
        initial={{ x: -100, opacity: 0, filter: "blur(10px)" }}
        animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{
          duration: 0.8,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        Generate Winning <br />
        Ad Creatives with AI
      </motion.h1>
      <motion.p
        className="text-center text-lg text-gray-400"
        initial={{ x: -100, opacity: 0, filter: "blur(10px)" }}
        animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{
          duration: 0.8,
          ease: [0.4, 0, 0.2, 1],
          delay: 0.2,
        }}
      >
        Use AI to generate proven ad creatives for your business.
      </motion.p>
      <div className="flex justify-center gap-4">
        <Link href="/dashboard">
          <Button>Get Started</Button>
        </Link>
        <Button
          className="flex items-center gap-2"
          variant="dark"
          onClick={() => {
            window.location.href = "#demo";
          }}
        >
          <Video /> Watch Demo
        </Button>
      </div>
      <motion.p
        initial={fadeInUp.initial}
        animate={fadeInUp.animate}
        transition={fadeInUp.transition}
        className="flex items-center justify-center gap-2 text-center text-sm text-gray-400"
      >
        Powered by{" "}
        <a href="https://openai.com" className="text-blue-500">
          <Image
            src="/openai_logo.png"
            alt="OpenAI"
            width={60}
            height={60}
            className="w-auto h-auto"
            style={{
              filter: "invert(1) brightness(2)",
            }}
          />
        </a>
      </motion.p>
      <motion.div
        initial={{ y: 100, opacity: 0, filter: "blur(10px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/hero.png"
          alt="Hero Image"
          width={620}
          height={620}
          className="w-[340px] md:w-[620px] h-auto mx-auto drop-shadow-2xl"
        />
      </motion.div>
    </div>
  );
};

export default Hero;

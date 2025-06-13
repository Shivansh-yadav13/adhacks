"use client";

import React from "react";
import Button from "./Button";
import Image from "next/image";
import { Video } from "lucide-react";
import { motion } from "motion/react";

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
        <Button>Get Started</Button>
        <Button className="flex items-center gap-2" variant="dark">
          <Video /> Watch Demo
        </Button>
      </div>
      <p className="flex items-center justify-center gap-2 text-center text-sm text-gray-400">
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
      </p>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <Image
          src="/hero.avif"
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

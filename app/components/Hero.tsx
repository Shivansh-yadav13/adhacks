import React from "react";
import Button from "./Button";
import Image from "next/image";
import { Video } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 my-8">
      <h1 className="text-7xl text-center font-[family-name:var(--font-instrument-serif)]">
        Generate Winning <br />
        Ad Creatives with AI
      </h1>
      <p className="text-center text-lg text-gray-400">
        Use AI to generate proven ad creatives for your business.
      </p>
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
      <Image
        src="/hero.avif"
        alt="Hero Image"
        width={620}
        height={620}
        className="w-[340px] md:w-[620px] h-auto mx-auto drop-shadow-2xl"
        style={{
          WebkitMaskImage:
            "radial-gradient(circle, white 70%, transparent 90%)",
          maskImage: "radial-gradient(circle, white 70%, transparent 90%)",
        }}
      />
    </div>
  );
};

export default Hero;

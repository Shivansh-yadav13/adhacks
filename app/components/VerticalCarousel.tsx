import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// List of image URLs (replace with your own paths)
const images = [
  "/ads/ad1.jpg",
  "/ads/ad1.jpg",
  "/ads/ad1.jpg",
  "/ads/ad1.jpg",
  "/ads/ad1.jpg",
  "/ads/ad1.jpg",
  "/ads/ad1.jpg",
  "/ads/ad1.jpg",
];

const CarouselRow = ({
  direction = "up",
  duration = 20,
}: {
  direction?: "up" | "down";
  duration?: number;
}) => {
  return (
    <div className="overflow-hidden h-[400px] w-full">
      <motion.div
        className="flex flex-col"
        animate={{
          y: direction === "up" ? ["0%", "-100%"] : ["-100%", "0%"],
        }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* Duplicate for seamless looping */}
        {[...images, ...images].map((src, index) => (
          <div
            key={index}
            className="w-full h-40 relative rounded-xl overflow-hidden mb-2"
          >
            <Image
              src={src}
              alt={`carousel-img-${index}`}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function VerticalCarousel() {
  return (
    <div className="py-10 flex gap-4 justify-center items-center">
      {/* Row 1: Scrolls Up */}
      <CarouselRow direction="up" duration={30} />

      {/* Row 2: Scrolls Down */}
      <CarouselRow direction="down" duration={30} />

      {/* Row 3: Scrolls Up */}
      <CarouselRow direction="up" duration={30} />
    </div>
  );
}

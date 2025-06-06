"use client";

import React from "react";
import { motion, useAnimationFrame } from "framer-motion";

const images = [
  "/ads/ad1.jpg",
  "/ads/ad1.jpg",
  "/ads/ad1.jpg",
  "/ads/ad1.jpg",
  "/ads/ad1.jpg",
  "/ads/ad1.jpg",
  "/ads/ad1.jpg",
];

// Duplicate images for seamless looping
const carouselImages = [...images, ...images];

const IMAGE_SIZE = 180; // px
const GAP = 24; // px
const TOTAL_WIDTH = carouselImages.length * (IMAGE_SIZE + GAP);

export default function CreativesCarousel() {
  const [x, setX] = React.useState(0);
  const speed = 0.5; // px per frame

  useAnimationFrame(() => {
    setX((prev) => {
      // Loop back when scrolled past half
      if (prev <= -(images.length * (IMAGE_SIZE + GAP))) {
        return 0;
      }
      return prev - speed;
    });
  });

  return (
    <div className="flex flex-col items-center justify-center gap-4 overflow-hidden w-full py-8">
      <motion.div className="flex gap-6" style={{ x }}>
        {carouselImages.map((src, idx) => (
          <div
            key={idx}
            className="bg-zinc-800 rounded-xl flex items-center justify-center"
            style={{ width: IMAGE_SIZE, height: IMAGE_SIZE }}
          >
            <img
              src={src}
              alt={`Sample ${idx + 1}`}
              className="object-cover w-full h-full rounded-xl shadow-lg"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

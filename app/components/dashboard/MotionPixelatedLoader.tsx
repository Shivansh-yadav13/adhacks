import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Color palette: dark blue, blue, black
const COLORS = [
  "#0a192f", // dark navy
  "#112240", // navy
  "#233554", // blue shade
  "#1e293b", // slate-900
  "#2563eb", // blue-600
  "#1d4ed8", // blue-700
  "#0ea5e9", // sky-500
  "#020617", // black/very dark
  "#0f172a", // dark slate
];

const GRID_SIZE = 16; // More pixels for a smoother look

function getRandomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

export default function MotionPixelatedLoader() {
  // Each pixel will have its own color and key to trigger animation
  const [pixels, setPixels] = useState(() =>
    Array.from({ length: GRID_SIZE * GRID_SIZE }, () => ({
      color: getRandomColor(),
      key: Math.random(),
    }))
  );

  // Animate: every 200ms, randomly change some pixels' color and key
  useEffect(() => {
    const interval = setInterval(() => {
      setPixels((prev) =>
        prev.map((pixel, i) =>
          Math.random() > 0.85
            ? { color: getRandomColor(), key: Math.random() }
            : pixel
        )
      );
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
        gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`,
        gap: 0,
        zIndex: 10,
      }}
    >
      {pixels.map((pixel, i) => (
        <motion.div
          key={pixel.key}
          style={{
            width: "100%",
            height: "100%",
            background: pixel.color,
          }}
          initial={{ opacity: 0.7 }}
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{
            duration: 1.2 + Math.random(),
            repeat: Infinity,
            repeatType: "reverse",
            delay: (i % GRID_SIZE) * 0.03,
          }}
        />
      ))}
    </div>
  );
}

import React, { useEffect, useState } from "react";

const GRID_SIZE = 10; // 10x10 grid
const PIXEL_SIZE = 16; // px
const COLORS = [
  "#0ea5e9", // sky-500
  "#0284c7", // sky-600
  "#0369a1", // sky-700
  "#075985", // sky-800
  "#0c4a6e", // sky-900
  "#1e3a8a", // blue-900
  "#1e40af", // blue-800
  "#1d4ed8", // blue-700
  "#2563eb", // blue-600
];

function getRandomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

export default function PixelatedLoader() {
  const [pixels, setPixels] = useState<string[][]>([]);

  // Initialize grid
  useEffect(() => {
    setPixels(
      Array.from({ length: GRID_SIZE }, () =>
        Array.from({ length: GRID_SIZE }, getRandomColor)
      )
    );
  }, []);

  // Animate pixels
  useEffect(() => {
    const interval = setInterval(() => {
      setPixels((prev) =>
        prev.map((row) =>
          row.map((color) => (Math.random() > 0.8 ? getRandomColor() : color))
        )
      );
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${GRID_SIZE}, ${PIXEL_SIZE}px)`,
        gridTemplateRows: `repeat(${GRID_SIZE}, ${PIXEL_SIZE}px)`,
        gap: 2,
        width: GRID_SIZE * PIXEL_SIZE + (GRID_SIZE - 1) * 2,
        height: GRID_SIZE * PIXEL_SIZE + (GRID_SIZE - 1) * 2,
        borderRadius: 12,
        overflow: "hidden",
        background: "#222",
      }}
    >
      {pixels.flat().map((color, i) => (
        <div
          key={i}
          style={{
            width: PIXEL_SIZE,
            height: PIXEL_SIZE,
            background: color,
            transition: "background 0.3s",
            borderRadius: 2,
          }}
        />
      ))}
    </div>
  );
}

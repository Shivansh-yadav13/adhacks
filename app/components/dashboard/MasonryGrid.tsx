"use client";

import Masonry from "react-masonry-css";
import Image from "next/image";

interface MasonryGridProps {
  images: { src: string; alt?: string }[];
}

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

export default function MasonryGrid({ images }: MasonryGridProps) {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex w-auto gap-4 p-4"
      columnClassName="masonry-column"
    >
      {images.map((img, idx) => (
        <div key={idx} className="mb-4 rounded-lg overflow-hidden shadow">
          <Image
            src={img.src}
            alt={img.alt || ""}
            width={1000}
            height={1000}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      ))}
    </Masonry>
  );
}

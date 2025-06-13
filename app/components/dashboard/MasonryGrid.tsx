"use client";

import Masonry from "react-masonry-css";
import Image from "next/image";
import axios from "axios";

interface MasonryGridProps {
  images: { src: string; alt?: string }[];
  setAdImage: (image: string | null) => void;
}

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

export default function MasonryGrid({ images, setAdImage }: MasonryGridProps) {
  const handleImageClick = async (imageUrl: string) => {
    try {
      const response = await axios.get(`${imageUrl}`, {
        responseType: "blob",
      });
      console.log("response", response);
      const blob = response.data;
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64data = reader.result as string;
        setAdImage(base64data);
      };

      reader.readAsDataURL(blob);
    } catch (error) {
      console.error("Error converting image to base64:", error);
    }
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex w-auto gap-4 p-4"
      columnClassName="masonry-column"
    >
      {images.map((img, idx) => (
        <div
          key={idx}
          className="mb-4 rounded-lg overflow-hidden shadow cursor-pointer group relative"
          onClick={() => handleImageClick(img.src)}
        >
          <Image
            src={img.src}
            alt={img.alt || ""}
            width={1000}
            height={1000}
            className="w-full h-auto object-contain rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-end p-4">
            <span className="text-white text-lg font-medium text-center">
              Click to use this Ad
            </span>
          </div>
        </div>
      ))}
    </Masonry>
  );
}

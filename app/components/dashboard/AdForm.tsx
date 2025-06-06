"use client";
import React, { useRef, useState } from "react";
import Button from "@/app/components/Button";
import { ImagePlus, BotMessageSquare, Image } from "lucide-react";

export default function AdForm() {
  const [adImage, setAdImage] = useState<string | null>(null);
  const [productImage, setProductImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState("");

  const adInputRef = useRef<HTMLInputElement>(null);
  const productInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAdImage(url);
    }
  };

  const handleProductImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setProductImage(url);
    }
  };

  return (
    <div className="flex justify-between gap-6">
      <form className="flex flex-col gap-6 w-1/2">
        <div className="w-full flex gap-6">
          <div
            className={`w-1/2 h-60 flex items-center justify-center rounded-lg border-2 ${
              adImage
                ? "border-transparent bg-zinc-800"
                : "border-dashed border-zinc-500 bg-zinc-900"
            } cursor-pointer transition`}
            onClick={() => adInputRef.current?.click()}
          >
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={adInputRef}
              onChange={handleImageChange}
            />
            {adImage ? (
              <img
                src={adImage}
                alt="Ad Image"
                className="object-cover w-full h-full rounded-lg"
              />
            ) : (
              <span className="text-zinc-500 text-sm text-center flex flex-col items-center gap-2">
                <Image className="w-6 h-6" />
                Click to upload Ad creative
              </span>
            )}
          </div>
          <div
            className={`w-1/2 h-60 flex items-center justify-center rounded-lg border-2 ${
              productImage
                ? "border-transparent bg-zinc-800"
                : "border-dashed border-zinc-500 bg-zinc-900"
            } cursor-pointer transition`}
            onClick={() => productInputRef.current?.click()}
          >
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={productInputRef}
              onChange={handleProductImageChange}
            />
            {productImage ? (
              <img
                src={productImage}
                alt="Product Image"
                className="object-cover w-full h-full rounded-lg"
              />
            ) : (
              <span className="text-zinc-500 text-sm text-center flex flex-col items-center gap-2">
                <Image className="w-6 h-6" />
                Click to upload product image
              </span>
            )}
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <label
            className="text-zinc-300 flex items-center gap-2"
            htmlFor="prompt"
          >
            Prompt
            <BotMessageSquare className="w-4 h-4" />
          </label>
          <input
            id="prompt"
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter a prompt (optional)"
            className="w-full px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center justify-between">
          <Button className="flex items-center gap-2 bg-gradient-to-br from-neutral-800 via-slate-900 to-blue-900">
            Generate
            <ImagePlus className="w-4 h-4" />
          </Button>
        </div>
      </form>
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-full h-full rounded-lg border-2 border-dashed border-zinc-600 flex items-center justify-center">
          <span className="text-zinc-500 text-sm">
            Generated Ad will appear here
          </span>
        </div>
      </div>
    </div>
  );
}

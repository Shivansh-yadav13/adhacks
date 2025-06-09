"use client";

import React, { useRef, useState } from "react";
import axios from "axios";
import Button from "@/app/components/Button";
import { ImagePlus, BotMessageSquare, Image, Download } from "lucide-react";
import { generateAdCreative } from "@/lib/openai";
import { putObjectUrl } from "@/lib/aws";
import { useUserStore } from "@/store/user-store";
import { useCreativeStore } from "@/store/creative-store";

export default function AdForm({
  adImage,
  setAdImage,
}: {
  adImage: string | null;
  setAdImage: (image: string | null) => void;
}) {
  const { user } = useUserStore();
  const { createCreative } = useCreativeStore();
  const [productImage, setProductImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState("");
  const [generatedAd, setGeneratedAd] = useState<string | null>(null);
  const adInputRef = useRef<HTMLInputElement>(null);
  const productInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        console.log(base64String);
        setAdImage(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProductImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setProductImage(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerateAd = async () => {
    if (!user) {
      return;
    }

    if (!adImage || !productImage) {
      alert("Please upload both ad creative and product image");
      return;
    }

    console.log("calling openai");

    const generatedAd = await generateAdCreative(adImage, productImage, prompt);

    if (generatedAd) {
      setGeneratedAd(URL.createObjectURL(generatedAd));
    }

    const creativeId = crypto.randomUUID();

    const awsS3Url = await putObjectUrl(user.id, creativeId, "image/png");

    try {
      const awsResponse = await axios.put(awsS3Url, generatedAd, {
        headers: {
          "Content-Type": "image/png",
        },
      });

      console.log(awsResponse.data);

      createCreative({
        id: creativeId,
        userId: user.id,
        prompt: prompt || "",
      });

      // create a creative store in zustand and store this inside it.
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-between gap-6">
      <form
        className="flex flex-col gap-6 w-1/2"
        onSubmit={(e) => {
          e.preventDefault();
          handleGenerateAd();
        }}
      >
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
                className="object-contain w-full h-full rounded-lg"
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
                className="object-contain w-full h-full rounded-lg"
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
          <Button
            className="flex items-center gap-2 bg-gradient-to-br from-neutral-800 via-slate-900 to-blue-900"
            onClick={(e) => {
              e.preventDefault();
              handleGenerateAd();
            }}
          >
            Generate
            <ImagePlus className="w-4 h-4" />
          </Button>
        </div>
      </form>
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-11/12 h-11/12 rounded-lg border-2 border-dashed border-zinc-600 flex items-center justify-center relative">
          {generatedAd ? (
            <>
              <img
                src={generatedAd}
                alt="Generated Ad"
                className="object-contain w-full h-full rounded-lg"
              />
              <Button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = generatedAd;
                  link.download = "generated-ad.png";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                variant="dark"
                className="absolute bottom-4 right-4 flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download
              </Button>
            </>
          ) : (
            <span className="text-zinc-500 text-sm">
              Generated Ad will appear here
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

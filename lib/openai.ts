import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const generateAdCreative = async (
  adImageBase64: string,
  productImageBase64: string,
  additionalPrompts?: string
) => {
  console.log("Generating Ad....");

  const prompt = `You are a professional visual editor and creative copywriter.

Task: Replace the product or main visual element in the first image (a Facebook ad creative) with the product from the second image (a standalone product photo), while:

Preserving the original design — Do not alter the layout, color scheme, theme, background, lighting, or any other design elements of the Facebook ad creative.

Adapting the ad copy — Update any text/copywriting (e.g., headline, subheadline, CTA) in the Facebook ad so it is relevant and persuasive for the new product from the second image.

Maintaining the original dimensions — Ensure the output image has the **exact same dimensions** as the first image (the Facebook ad creative). Do not crop, resize, or change the aspect ratio.

📥 Inputs:

Image 1: Facebook ad creative (layout + original product + original copy).

Image 2: Product image (the new item to be featured).

📤 Output: One seamless Facebook ad creative that:

Features the product from Image 2, replacing the original product.

Retains the style and visual structure of the original ad.

Contains new copywriting that matches the tone and purpose of the ad but is now relevant to the new product.

Preserves the exact original dimensions of the Facebook ad creative.

${
  additionalPrompts
    ? `Additional Instructions for generating the ad creative: ${additionalPrompts}`
    : ""
}
`;

  const response = await openai.responses.create({
    model: "gpt-4.1",
    input: [
      {
        role: "user",
        content: [
          {
            type: "input_text",
            text: prompt,
          },
          {
            type: "input_image",
            image_url: adImageBase64,
            detail: "low",
          },
          {
            type: "input_image",
            image_url: productImageBase64,
            detail: "low",
          },
        ],
      },
    ],
    tools: [{ type: "image_generation" }],
  });

  const imageData = response.output
    .filter((output) => output.type === "image_generation_call")
    .map((output) => output.result);

  if (imageData.length > 0) {
    const imageBase64 = imageData[0];
    if (!imageBase64) {
      return null;
    }
    const formattedBase64 = `data:image/png;base64,${imageBase64}`;
    const base64Response = await fetch(formattedBase64);
    const blob = await base64Response.blob();
    return blob;
    // return URL.createObjectURL(blob);
  }
  console.log(response.output_text);
  return null;
};

export { generateAdCreative };

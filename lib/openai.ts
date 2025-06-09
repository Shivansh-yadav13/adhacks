import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_OPENAI_API_KEY!,
  dangerouslyAllowBrowser: true,
});

const generateAdCreative = async (
  adImageBase64: string,
  productImageBase64: string,
  additionalPrompts?: string
) => {
  console.log("Generating Ad....");

  const prompt = `You are an expert visual editor.

Task: Replace the main product or object in the first image (a Facebook ad creative) with the product or object from the second image (a product photo), while keeping everything else in the first image exactly the same.

🎯 Goals:
- Do not change the style, colors, layout, lighting, background, fonts, text, or any other visual elements in the Facebook ad.
- Only swap the product/element while ensuring it matches the angle, lighting, and scale of the original.
- Maintaining the original dimensions — Ensure the output image has the exact same dimensions as the first image (the Facebook ad creative). Do not crop, resize, or change the aspect ratio.
- The final result must look like a natural, high-quality Facebook ad creative for the second product.

📥 Inputs:
Image 1: Facebook ad creative (the template to preserve).
Image 2: Product image (the element to insert).

📤 Output: One realistic image that looks exactly like the original Facebook ad but featuring the product from the second image in place of the first.

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

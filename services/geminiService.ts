import { GoogleGenAI } from "@google/genai";

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateImage(prompt: string, aspectRatio: string): Promise<string> {
  try {
    console.log(`Generating image for prompt: ${prompt} with aspect ratio: ${aspectRatio}`);
    
    const response = await ai.models.generateImages({
        model: 'imagen-4.0-generate-001',
        prompt: prompt,
        config: {
          numberOfImages: 1,
          aspectRatio: aspectRatio,
          outputMimeType: 'image/png',
        }
    });

    if (response.generatedImages && response.generatedImages.length > 0 && response.generatedImages[0].image.imageBytes) {
      const base64ImageBytes: string = response.generatedImages[0].image.imageBytes;
      const imageUrl = `data:image/png;base64,${base64ImageBytes}`;
      console.log("Image generated successfully.");
      return imageUrl;
    } else {
      console.error("No image data received from API.");
      throw new Error("Aucune image n'a été générée. Veuillez réessayer.");
    }
  } catch (error) {
    console.error("Error generating image with Gemini API:", error);
    throw new Error("Une erreur est survenue lors de la génération de l'image.");
  }
}
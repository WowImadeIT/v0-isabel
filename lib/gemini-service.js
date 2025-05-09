import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Gemini API with the API key
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || "");

/**
 * Fetches dictionary definition and synonyms for a given word using Gemini API
 * 
 * @param {string} word - The word to look up
 * @returns {Promise<{definition: string, synonyms: string[]}>} - Definition and synonyms
 */
export async function fetchWordData(word) {
  try {
    // Verify API key is present
    if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
      console.error("API key is missing! Check your .env.local file");
      throw new Error("API key is missing");
    }

    console.log("API Key:", process.env.NEXT_PUBLIC_GEMINI_API_KEY.substring(0, 8) + "...");

    // For text-only input, use the gemini-1.0-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Craft the prompt requesting structured data
    const prompt = `
      For the word "${word}", provide:
      1. A concise dictionary definition (1-2 sentences)
      2. A list of 5 common synonyms

      Format your response as a valid JSON object with the following structure:
      {
        "definition": "string containing the definition",
        "synonyms": ["list", "of", "5", "synonym", "strings"]
      }

      Only return the JSON object, with no additional text before or after.
    `;

    console.log(`Sending request to Gemini API for word: "${word}"`);
    
    // Generate content based on the prompt
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    console.log("Raw response from API:", text);

    // Parse the JSON response
    // Extract JSON from the response if needed (sometimes the model adds text around the JSON)
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    
    if (jsonMatch) {
      const jsonStr = jsonMatch[0];
      try {
        const data = JSON.parse(jsonStr);
        
        // Verify that we have the expected properties
        if (!data.definition || !Array.isArray(data.synonyms)) {
          console.error("API response missing required fields:", data);
          throw new Error("Invalid API response format");
        }
        
        return {
          definition: data.definition,
          synonyms: data.synonyms || []
        };
      } catch (parseError) {
        console.error("Failed to parse JSON:", jsonStr, parseError);
        throw new Error("Failed to parse API response");
      }
    } else {
      console.error("No JSON found in response:", text);
      throw new Error("Invalid API response format");
    }
  } catch (error) {
    console.error("Error fetching word data:", error);
    throw error;
  }
} 
'use client';

import { getGeneratedPrompt } from './answers';
import { GoogleGenAI } from '@google/genai';

/**
 * Sends the generated prompt to the Gemini API and returns the response
 * @returns {Promise<string>} The response from Gemini
 */
export async function sendPromptToGemini() {
  try {
    // Get the API key from environment variables
    const APIKEY = process.env.NEXT_PUBLIC_API_KEY;

	const ai = new GoogleGenAI({ apiKey: APIKEY });
    
    if (!APIKEY) {
      throw new Error('API_KEY is not defined in environment variables');
    }
    
    // Get the generated prompt
    const prompt = getGeneratedPrompt();
    
    if (!prompt) {
      throw new Error('No prompt generated. Please complete the questionnaire first.');
    }
    
    // Extract the generated text from the response
    const generatedText = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });
    
    // Format the response as proper markdown
    const response = generatedText.text;
    console.log('Raw Gemini response:', response);
    
    // Remove everything before and including the ```markdown element
    const markdownStartIndex = response.indexOf('```markdown');
    const formattedResponse = markdownStartIndex !== -1 
      ? response.substring(markdownStartIndex + 11).trim() // +11 to skip the ```markdown
      : response;
    
    // Ensure proper line breaks and markdown formatting
    const finalResponse = formattedResponse
      .split('\n')
      .map(line => line.trim())
      .join('\n')
      .replace(/\n{3,}/g, '\n\n'); // Replace multiple newlines with double newlines
    
    console.log('Formatted response:', finalResponse);
    return finalResponse;
  } catch (error) {
    console.error('Error sending prompt to Gemini:', error);
    throw error;
  }
} 

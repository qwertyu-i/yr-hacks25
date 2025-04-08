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
    const APIKEY = process.env.API_KEY;

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
    
    return generatedText.text;
  } catch (error) {
    console.error('Error sending prompt to Gemini:', error);
    throw error;
  }
} 

'use client';

import { getGeneratedPrompt } from './answers';

/**
 * Sends the generated prompt to the Gemini API and returns the response
 * @returns {Promise<string>} The response from Gemini
 */
export async function sendPromptToGemini() {
  try {
    // Get the API key from environment variables
    const apiKey = process.env.API_KEY;
    
    if (!apiKey) {
      throw new Error('API_KEY is not defined in environment variables');
    }
    
    // Get the generated prompt
    const prompt = getGeneratedPrompt();
    
    if (!prompt) {
      throw new Error('No prompt generated. Please complete the questionnaire first.');
    }
    
    // Prepare the request to Gemini API
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt
              }
            ]
          }
        ]
      })
    });
    
    // Check if the request was successful
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Gemini API error: ${errorData.error?.message || response.statusText}`);
    }
    
    // Parse the response
    const data = await response.json();
    
    // Extract the generated text from the response
    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!generatedText) {
      throw new Error('No text generated in the response');
    }
    
    return generatedText;
  } catch (error) {
    console.error('Error sending prompt to Gemini:', error);
    throw error;
  }
} 
'use client';

// Create a global array to store answers
let answersArray = [];

// Variable to store the generated prompt
let generatedPrompt = '';

// Function to get all answers
export function getAllAnswers() {
    return answersArray;
}

// Function to get a specific answer by index
export function getAnswer(index) {
    return answersArray[index];
}

// Function to get the count of answers
export function getAnswerCount() {
    return answersArray.length;
}

// Function to clear all answers
export function clearAnswers() {
    answersArray = [];
    generatedPrompt = '';
}

// Function to generate a prompt for Gemini based on all answers
export function generateGeminiPrompt() {
    // Get all answers
    const answers = getAllAnswers();
    
    // Create a structured prompt
    let prompt = `# Resume Information for ${answers[3] || "Position"} Role\n\n`;
    
    // Basic Information
    prompt += `## Basic Information\n\n`;
    prompt += `- **Name**: ${answers[0] || "Not provided"}\n`;
    prompt += `- **Email**: ${answers[1] || "Not provided"}\n`;
    prompt += `- **Phone**: ${answers[2] || "Not provided"}\n`;
    prompt += `- **Position Applying For**: ${answers[3] || "Not provided"}\n`;
    prompt += `- **Hard Skills**: ${answers[4] || "Not provided"}\n\n`;
    
    // Work Experience
    prompt += `## Work Experience\n\n`;
    prompt += `- **Most Recent Job**: ${answers[5] || "Not provided"}\n`;
    
    // Handle past job/volunteer experience (which might be an array)
    if (answers[6]) {
        if (Array.isArray(answers[6])) {
            prompt += `- **Time In Role**: ${answers[6].join(", ") || "Not provided"}\n`;
        } else {
            prompt += `- **Time In Role**: ${answers[6] || "Not provided"}\n`;
        }
    } else {
        prompt += `- **Time In Role**: Not provided\n`;
    }
    
    // Advanced Questions (if available)
    if (answers.length > 7) {
        prompt += `\n## Additional Information\n\n`;
        
        // Add each advanced question and answer
        for (let i = 7; i < answers.length; i++) {
            if (answers[i]) {
                // Extract question from the advanced questions array (if available)
                let questionText = `Question ${i-6}`;
                
                // Add the question and answer to the prompt
                prompt += `### ${questionText}\n\n${answers[i]}\n\n`;
            }
        }
    }
    
    // Add instructions for Gemini
    prompt += `\n## Instructions\n\n`;
    prompt += `Please create a professional markdown document that highlights the candidate's experience, skills, and qualifications for the ${answers[3] || "position"} role. Include sections for:\n\n`;
    prompt += `1. Professional Summary\n`;
    prompt += `2. Skills (both hard and soft skills)\n`;
    prompt += `3. Work Experience (with bullet points highlighting achievements)\n`;
    prompt += `4. Education (if mentioned)\n`;
    prompt += `5. Additional Qualifications\n\n`;
    prompt += `Format the document professionally and make it suitable for a resume or CV.`;
    
    // Store the generated prompt
    generatedPrompt = prompt;
    
    return prompt;
}

// Function to get the generated prompt
export function getGeneratedPrompt() {
    return generatedPrompt;
} 

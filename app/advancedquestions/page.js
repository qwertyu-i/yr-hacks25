'use client';

import { useState, useEffect } from "react";
import QuestionWindow from "../ui/question-window";
import { getAllAnswers, generateGeminiPrompt, getGeneratedPrompt } from "../utils/answers";
import Link from "next/link";

export default function AdvancedQuestionsPage() {
  const [questionIndex, setQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [advancedQuestions, setAdvancedQuestions] = useState([]);
  const [position, setPosition] = useState("");
  
  // Generate advanced questions based on the first half answers
  useEffect(() => {
    const answers = getAllAnswers();
    
    // Get relevant information from the first half
    const positionValue = answers[3] || "your position"; // Position applying for
    setPosition(positionValue);
    const hardSkills = answers[4] || "your skills"; // Hard skills
    const recentJob = answers[5] || ""; // Most recent job
    const jobDuration = answers[6] || "your time there"; // How long at the job
    
    // Create dynamic questions based on the first half answers
    let dynamicQuestions = [];
    
    // Only add job-related questions if the job field is not empty
    if (recentJob && recentJob.trim() !== "") {
      dynamicQuestions = [
        {
          question: `What soft skills did you develop at ${recentJob}?`,
          placeholder: "Ex: Leadership, Communication, Problem-solving"
        },
        {
          question: `What were some common challenges you faced at ${recentJob}?`,
          placeholder: "Ex: Meeting tight deadlines, managing team conflicts"
        },
        {
          question: `How did you apply your ${hardSkills} skills at ${recentJob}?`,
          placeholder: "Ex: Built a responsive website using React and Node.js"
        },
        {
          question: `What achievements are you most proud of from your time at ${recentJob}?`,
          placeholder: "Ex: Increased website performance by 40%"
        }
      ];
    }
    
    // Always add position-related questions
    dynamicQuestions = [
      ...dynamicQuestions,
      {
        question: `What are your strengths that would make you a good fit for the ${positionValue} role?`,
        placeholder: "Ex: Strong problem-solving abilities, attention to detail"
      },
      {
        question: `What areas are you looking to improve in for the ${positionValue} role?`,
        placeholder: "Ex: Public speaking, advanced data analysis"
      }
    ];
    
    setAdvancedQuestions(dynamicQuestions);
  }, []);

  function handleSubmit() {
    // Move to the next question or show results if we're at the end
    if (questionIndex < advancedQuestions.length - 1) {
      setQuestion(questionIndex + 1);
    } else {
      // We've reached the end of questions, show results
      setShowResults(true);
      console.log("All answers including advanced:", getAllAnswers());
      
      // Generate the prompt for Gemini
      generateGeminiPrompt();
      console.log("Generated prompt:", getGeneratedPrompt());
    }
  }

  // If we're showing results, display them
  if (showResults) {
    const answers = getAllAnswers();
    
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#282828] p-8">
        <div className="bg-[#3c3836] rounded-2xl p-8 shadow-xl w-full max-w-4xl transform transition-all duration-300 hover:shadow-2xl border-2 border-[#b8bb26]">
          <h1 className="text-3xl font-bold text-[#ebdbb2] mb-6">Your Complete Resume Information</h1>
          
          {/* Position Label */}
          <div className="mb-6 bg-[#b8bb26] text-[#282828] font-bold py-2 px-4 rounded-lg inline-block">
            <span>Position: {position}</span>
          </div>
          
          <div className="space-y-4">
            {advancedQuestions.map((q, index) => (
              <div key={index} className="border-b border-[#504945] pb-4">
                <h2 className="text-xl font-medium text-[#b8bb26]">{q.question}</h2>
                <p className="text-[#ebdbb2] mt-2">{answers[index + 7] || "Not provided"}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-end">
            <Link href="/">
              <button 
                className="bg-[#b8bb26] hover:bg-[#98971a] text-[#282828] font-medium py-2.5 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-[#b8bb26] focus:ring-opacity-50 transform transition-all duration-200 hover:shadow-md active:scale-95"
              >
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Show the current question if advanced questions are loaded
  if (advancedQuestions.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#282828]">
        <div className="bg-[#3c3836] rounded-2xl p-8 shadow-xl w-4/5 md:w-2/3 lg:w-1/2 max-w-md transform transition-all duration-300 hover:shadow-2xl border-2 border-[#b8bb26] text-center">
          <p className="text-xl text-[#ebdbb2]">Loading advanced questions...</p>
        </div>
      </div>
    );
  }

  return (
    <main>
      {/* Position Label */}
      <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-[#b8bb26] text-[#282828] font-bold py-2 px-4 rounded-lg shadow-lg">
          <span>Position: {position}</span>
        </div>
      </div>
      
      <QuestionWindow 
        question={advancedQuestions[questionIndex].question}
        placeHolder={advancedQuestions[questionIndex].placeholder}
        clickFunc={handleSubmit}
        questionId={questionIndex + 7} // Offset by 7 to account for the basic questions
      />
    </main>
  );
} 
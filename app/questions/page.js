'use client';

import { useState } from "react";
import questionList from "./questions";
import QuestionWindow from "../ui/question-window";
import { getAllAnswers } from "../utils/answers";

export default function Page()
{
	const [questionIndex, setQuestion] = useState(0);
	const [showResults, setShowResults] = useState(false);

	function handleSubmit()
	{
		// Move to the next question or show results if we're at the end
		if (questionIndex < questionList.questions.length - 1) {
			setQuestion(questionIndex + 1);
		} else {
			// We've reached the end of questions, show results
			setShowResults(true);
			console.log("All answers:", getAllAnswers());
		}
	}

	// If we're showing results, display them
	if (showResults) {
		return (
			<div className="min-h-screen flex flex-col items-center justify-center bg-[#282828] p-8">
				<div className="bg-[#3c3836] rounded-2xl p-8 shadow-xl w-full max-w-4xl transform transition-all duration-300 hover:shadow-2xl border-2 border-[#b8bb26]">
					<h1 className="text-3xl font-bold text-[#ebdbb2] mb-6">Your Resume Information</h1>
					<div className="space-y-4">
						{questionList.questions.map((q, index) => (
							<div key={index} className="border-b border-[#504945] pb-4">
								<h2 className="text-xl font-medium text-[#b8bb26]">{q.question}</h2>
								<p className="text-[#ebdbb2] mt-2">{getAllAnswers()[index] || "Not provided"}</p>
							</div>
						))}
					</div>
					<div className="mt-8 flex justify-end">
						<button 
							className="bg-[#b8bb26] hover:bg-[#98971a] text-[#282828] font-medium py-2.5 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-[#b8bb26] focus:ring-opacity-50 transform transition-all duration-200 hover:shadow-md active:scale-95"
							onClick={() => window.location.href = "/"}
						>
							Back to Home
						</button>
					</div>
				</div>
			</div>
		);
	}

	// Show the current question
	return (
		<main>
			<QuestionWindow 
				question={questionList.questions[questionIndex].question}
				placeHolder={questionList.questions[questionIndex].placeholder}
				clickFunc={handleSubmit}
				questionId={questionIndex}
			/>
		</main>
	);
}

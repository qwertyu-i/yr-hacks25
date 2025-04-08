'use client';

import QuestionWindow from "../ui/question-window";
import questionList from "./questions";
import { useState } from "react";

export default function Page()
{
	const [questionIndex, setQuestion] = useState(0);

	function handleSubmit()
	{
		console.log("going to question " + questionIndex);
		setQuestion(questionIndex + 1);
	}

	return (
		<main>
			<p>Questions</p>
			<QuestionWindow 
				question = {questionList.questions[questionIndex].question}
				placeHolder = {questionList.questions[questionIndex].placeholder}
				clickFunc={handleSubmit}
			/>
		</main>
	);
}

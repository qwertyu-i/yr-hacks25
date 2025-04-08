'use client';

import { answersArray } from '../ui/question-window';

// Function to get all answers
export function getAllAnswers() {
  return answersArray;
}

// Function to get a specific answer by question ID
export function getAnswerById(questionId) {
  return answersArray[questionId];
}

// Function to clear all answers
export function clearAnswers() {
  answersArray.length = 0;
}

// Function to get the number of answers
export function getAnswersCount() {
  return answersArray.filter(answer => answer !== undefined).length;
} 
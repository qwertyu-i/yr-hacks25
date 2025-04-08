'use client';

import { useState } from "react";

export default function QuestionWindow( { question, placeHolder, clickFunc } )
{
	return (
	<div className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black backdrop-blur-sm transition-all duration-300 ease-in-out z-50">
    	<div className="bg-white rounded-2xl p-8 shadow-xl w-full max-w-4xl transform transition-all duration-300 hover:shadow-2xl">
    		<div className="mb-8">
    			<p className="text-2xl font-light text-gray-800 tracking-wide">{question}</p>
    		</div>
    		<div className="mb-8">
    			<input
    				type="text"
    				className="w-full px-4 py-3 border-b border-gray-200 rounded-none bg-transparent focus:outline-none focus:border-blue-500 transition-all duration-200 text-gray-700 placeholder-gray-400"
    				placeholder={placeHolder}
    			/>
    		</div>
    		<div className="flex justify-end">
    			<button
    				className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transform transition-all duration-200 hover:shadow-md active:scale-95"
    				onClick={clickFunc}
    			>
    				Submit
    			</button>
    		</div>
    	</div>
    </div>
	);
}

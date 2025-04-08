'use client';

export default function QuestionWindow( { question, placeHolder, clickFunc } )
{
	return (
	<div className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-gray-100">
    	<div className="bg-white rounded-lg border-2 border-black p-8 shadow-lg w-4/5 md:w-2/3 lg:w-1/2">
    		<div className="mb-4">
    			<p className="text-lg font-semibold text-gray-800">{question}</p>
    		</div>
    		<div className="mb-4">
    			<input
    				type="text"
    				className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
    				placeholder={placeHolder}
    			/>
    		</div>
    		<div>
    			<button
    				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    				onClick={clickFunc}
    			>
    				Submit
    			</button>
    		</div>
    	</div>
    </div>
	);
}

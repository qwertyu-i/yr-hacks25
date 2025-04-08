'use client';

export default function QuestionWindow( { question, placeHolder, clickFunc } )
{
	return (
	<div className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-[#282828] backdrop-blur-sm transition-all duration-300 ease-in-out z-50">
    	<div className="bg-[#3c3836] rounded-2xl p-8 shadow-xl w-4/5 md:w-2/3 lg:w-1/2 max-w-md transform transition-all duration-300 hover:shadow-2xl border-2 border-[#b8bb26]">
    		<div className="mb-8">
    			<p className="text-2xl font-light text-[#ebdbb2] tracking-wide">{question}</p>
    		</div>
    		<div className="mb-8">
    			<input
    				type="text"
    				className="w-full px-4 py-3 border-b border-[#504945] rounded-none bg-[#3c3836] focus:outline-none focus:border-[#b8bb26] transition-all duration-200 text-[#ebdbb2] placeholder-[#928374]"
    				placeholder={placeHolder}
    			/>
    		</div>
    		<div className="flex justify-end">
    			<button
    				className="bg-[#b8bb26] hover:bg-[#98971a] text-[#282828] font-medium py-2.5 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-[#b8bb26] focus:ring-opacity-50 transform transition-all duration-200 hover:shadow-md active:scale-95"
    				onClick={clickFunc}
    			>
    				Submit
    			</button>
    		</div>
    	</div>
    </div>
	);
}
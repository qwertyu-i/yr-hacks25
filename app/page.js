'use client';

import Link from 'next/link';

export default function Page()
{
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-[#282828]">
			<div className="text-center mb-12">
				<h1 className="text-4xl font-bold text-[#ebdbb2] mb-4">Welcome to ResuMind.ai</h1>
				<p className="text-xl text-[#928374] max-w-2xl mx-auto">Your AI-powered resume builder that helps you create professional resumes in minutes.</p>
			</div>
			<Link href="/questions">
				<button className="bg-[#b8bb26] hover:bg-[#98971a] text-[#282828] font-bold py-3 px-8 rounded-full text-lg shadow-lg transform transition-all duration-200 hover:shadow-xl active:scale-95 border-2 border-[#98971a]">
					Start Building Your Resume
				</button>
			</Link>
		</div>
	);
}

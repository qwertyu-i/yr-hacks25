// Custom MDX components for styling the Gemini response
export const MDXComponents = {
  h1: (props) => (
    <h1 className="text-2xl font-bold text-[#b8bb26] mb-4" {...props} />
  ),
  h2: (props) => (
    <h2 className="text-xl font-bold text-[#b8bb26] mb-3" {...props} />
  ),
  h3: (props) => (
    <h3 className="text-lg font-bold text-[#b8bb26] mb-2" {...props} />
  ),
  p: (props) => (
    <p className="text-[#ebdbb2] mb-4" {...props} />
  ),
  ul: (props) => (
    <ul className="list-disc pl-6 mb-4 text-[#ebdbb2]" {...props} />
  ),
  ol: (props) => (
    <ol className="list-decimal pl-6 mb-4 text-[#ebdbb2]" {...props} />
  ),
  li: (props) => (
    <li className="mb-1" {...props} />
  ),
  a: (props) => (
    <a className="text-[#83a598] hover:underline" {...props} />
  ),
  blockquote: (props) => (
    <blockquote className="border-l-4 border-[#b8bb26] pl-4 italic text-[#d5c4a1] my-4" {...props} />
  ),
  code: (props) => (
    <code className="bg-[#3c3836] px-1 py-0.5 rounded text-[#8ec07c]" {...props} />
  ),
  pre: (props) => (
    <pre className="bg-[#3c3836] p-4 rounded-lg overflow-x-auto mb-4" {...props} />
  ),
  table: (props) => (
    <table className="w-full border-collapse mb-4" {...props} />
  ),
  th: (props) => (
    <th className="border border-[#504945] p-2 bg-[#3c3836] text-[#b8bb26]" {...props} />
  ),
  td: (props) => (
    <td className="border border-[#504945] p-2 text-[#ebdbb2]" {...props} />
  ),
  hr: (props) => (
    <hr className="border-t border-[#504945] my-6" {...props} />
  ),
}; 
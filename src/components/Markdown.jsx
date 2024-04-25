import { useEffect, useState } from "react";
import { marked } from "marked";

const Markdown = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    // Default markdown content
    const defaultMarkdown = `
  # Heading 1
  ## Heading 2
  [Link to Google](https://www.google.com/)
  \`Inline code\`
  \`\`\`
  // Code block
  function greet() {
    console.log("Hello, world!");
  }
  \`\`\`
  - List item 1
  - List item 2
  > Blockquote  
  ![Image](https://via.placeholder.com/150)
  **Bolded Text**
      `;
    setMarkdown(defaultMarkdown);
  }, []);

  const handleMarkdownChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="min-h-screen m-0 mx-auto px-4 py-8 bg-slate-800 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="my-2 py-2">
          <h2 className="text-xl text-center font-semibold mb-2 text-gray-100">
            Editor
          </h2>
          <textarea
            id="editor"
            className="h-[100%] w-full border border-gray-300 bg-gray-400 rounded-lg mx-3 shadow-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
            value={markdown}
            onChange={handleMarkdownChange}
          ></textarea>
        </div>
        <div className="py-2 my-2">
          <h2 className="text-xl  text-center font-semibold mb-2 text-gray-100">
            Preview
          </h2>
          <div
            id="preview"
            className=" border-2 border-gray-100 border-dashed p-2 overflow-y-auto  bg-[#363434] rounded-lg m-4 shadow-md"
            dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Markdown;

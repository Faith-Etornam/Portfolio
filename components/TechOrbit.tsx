"use client";

import { useState, useEffect } from "react";
import { Terminal } from "lucide-react";

const ServiceTerminal = () => {
  const [text, setText] = useState("");
  const fullText = `> initiating sequence...
> connecting to database... [OK]
> fetching services...

{
  "status": "online",
  "role": "Full-Stack Engineer",
  "stack": ["Django", "Next.js", "MySQL"],
  "availability": true
}
> _`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 30); 
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-9/12 mx-auto h-full min-h-75 bg-[#1e1e1e] rounded-2xl overflow-hidden font-mono text-sm border border-gray-800 shadow-2xl flex flex-col">
      <div className="bg-[#2d2d2d] px-4 py-3 flex items-center justify-between border-b border-gray-700">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors" />
        </div>
        <div className="flex items-center gap-2 text-gray-400 text-xs font-semibold tracking-wide">
          <Terminal size={12} />
          <span>faith@server: ~</span>
        </div>
        <div className="w-10" /> 
      </div>

      {/* 2. Terminal Body*/}
      <div className="p-6 text-green-400 leading-relaxed overflow-hidden">
        <pre className="whitespace-pre-wrap font-mono">
          {text.split("\n").map((line, i) => (
            <div key={i}>
              <span
                className={
                  line.startsWith(">")
                    ? "text-blue-400"
                    : line.includes(":")
                      ? "text-purple-400"
                      : "text-green-400"
                }
              >
                {line}
              </span>
            </div>
          ))}
        </pre>
      </div>

      <div className="mt-auto h-1 w-full bg-linear-to-r from-blue-500 to-purple-500 opacity-50" />
    </div>
  );
};

export default ServiceTerminal;

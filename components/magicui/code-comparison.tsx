"use client";
import { cn } from "@/lib/utils";

interface CodeComparisonProps {
  beforeCode: string;
  afterCode: string;
  language?: string;
  filename?: string;
  lightTheme?: string;
  darkTheme?: string;
  highlightColor?: string;
  className?: string;
}

export function CodeComparison({
  beforeCode,
  afterCode,
  language = "typescript",
  filename = "code.ts",
  highlightColor = "rgba(101, 117, 133, 0.16)",
  className,
}: CodeComparisonProps) {
  return (
    <div className={cn("relative bg-gray-900 rounded-lg overflow-hidden", className)}>
      {/* Header */}
      <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-gray-300 text-sm ml-2">{filename}</span>
        </div>
      </div>
      
      {/* Code Content */}
      <div className="grid grid-cols-2 divide-x divide-gray-700">
        {/* Before Code */}
        <div className="bg-gray-900">
          <div className="bg-red-900/20 px-2 py-1 text-xs text-red-300 border-b border-gray-700">
            Before
          </div>
          <pre className="p-4 text-sm text-gray-300 overflow-auto max-h-60">
            <code>{beforeCode}</code>
          </pre>
        </div>
        
        {/* After Code */}
        <div className="bg-gray-900">
          <div className="bg-green-900/20 px-2 py-1 text-xs text-green-300 border-b border-gray-700">
            After
          </div>
          <pre className="p-4 text-sm text-gray-300 overflow-auto max-h-60">
            <code>{afterCode}</code>
          </pre>
        </div>
      </div>
    </div>
  );
} 
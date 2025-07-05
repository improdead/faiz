"use client"

import { cn } from "@/lib/utils"

interface AnimatedBeamMultipleOutputDemoProps {
  className?: string
}

export default function AnimatedBeamMultipleOutputDemo({ className }: AnimatedBeamMultipleOutputDemoProps) {
  return (
    <div className={cn("relative flex items-center justify-center p-4", className)}>
      <div className="flex flex-col items-center space-y-4">
        {/* Central node */}
        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
          <div className="w-8 h-8 bg-white rounded-full"></div>
        </div>
        
        {/* Animated beams going to multiple outputs */}
        <div className="relative">
          <svg width="200" height="100" viewBox="0 0 200 100" className="overflow-visible">
            {/* Beam paths */}
            <path
              d="M100 20 L50 80"
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
            />
            <path
              d="M100 20 L100 80"
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
            <path
              d="M100 20 L150 80"
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </svg>
        </div>
        
        {/* Output nodes */}
        <div className="flex space-x-8 mt-4">
          <div className="w-8 h-8 bg-green-500 rounded-full animate-pulse"></div>
          <div className="w-8 h-8 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
          <div className="w-8 h-8 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>
      </div>
    </div>
  )
} 
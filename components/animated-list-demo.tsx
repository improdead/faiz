"use client"

import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"

interface AnimatedListDemoProps {
  className?: string
}

const notifications = [
  {
    name: "AI Model Updated",
    description: "Claude-3.5-Sonnet now available",
    time: "15m ago",
    icon: "🤖",
  },
  {
    name: "Code Generated",
    description: "Player controller script completed",
    time: "2m ago", 
    icon: "⚡",
  },
  {
    name: "Asset Optimized",
    description: "3D model reduced by 45%",
    time: "1m ago",
    icon: "🎯",
  },
  {
    name: "Debug Complete",
    description: "Fixed 3 logic errors automatically",
    time: "30s ago",
    icon: "🐛",
  },
]

export default function AnimatedListDemo({ className }: AnimatedListDemoProps) {
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleItems(prev => {
        const next = [...prev]
        if (next.length < notifications.length) {
          next.push(next.length)
        } else {
          return []
        }
        return next
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={cn("relative p-4 space-y-2", className)}>
      {notifications.map((item, index) => (
        <div
          key={index}
          className={cn(
            "flex items-center space-x-3 p-3 bg-white/5 rounded-lg border border-white/10 transition-all duration-500",
            visibleItems.includes(index) 
              ? "opacity-100 translate-x-0" 
              : "opacity-0 translate-x-8"
          )}
          style={{ 
            transitionDelay: `${index * 100}ms`,
          }}
        >
          <div className="text-2xl">{item.icon}</div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">
              {item.name}
            </p>
            <p className="text-xs text-gray-400 truncate">
              {item.description}
            </p>
          </div>
          <div className="text-xs text-gray-500">
            {item.time}
          </div>
        </div>
      ))}
    </div>
  )
} 
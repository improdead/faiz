"use client"

import { useEffect, useState, Suspense } from "react"
import { TypeAnimation } from "react-type-animation"
import dynamic from "next/dynamic"
import WaitlistForm from "@/components/waitlist-form"

// Dynamically import the ModelViewer component to avoid SSR issues
const ModelViewerScene = dynamic(() => import("@/components/model-viewer-scene"), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] w-full max-w-[600px] flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  ),
})

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <div
            className={`inline-block px-4 py-1 mb-6 bg-[#1a1a1a] border border-gray-800 rounded-full transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-sm font-medium text-blue-400/80">NEXT-GEN GAME DEVELOPMENT</span>
          </div>

          <div className="min-h-[180px] flex items-center justify-center mb-6">
            <h1
              className={`text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif" }}
            >
              <span className="block h-[1.2em] overflow-hidden">
                <TypeAnimation
                  sequence={[
                    "AI-powered creation",
                    2000,
                    "Intelligent coding",
                    2000,
                    "Seamless generation",
                    2000,
                    "Rapid prototyping",
                    2000,
                  ]}
                  wrapper="span"
                  speed={10}
                  repeat={Number.POSITIVE_INFINITY}
                />
              </span>
              {" "}
              <span className="text-gray-400">for</span> <span>game development</span>
            </h1>
          </div>

          <p
            className={`text-xl text-gray-300 mb-10 max-w-2xl transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif" }}
          >
            Accelerate your game development with VectorAI.
          </p>

          <div className="relative h-[400px] w-full max-w-[600px] mb-12">
            <div 
              className={`absolute top-0 left-0 right-0 bottom-0 w-full h-full transition-all duration-1000 delay-700 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <div className="absolute inset-0 bg-blue-500/5 rounded-2xl blur-3xl"></div>
              <Suspense
                fallback={
                  <div className="h-[400px] w-full flex items-center justify-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
                  </div>
                }
              >
                <ModelViewerScene />
              </Suspense>
            </div>
          </div>

          <div
            className={`w-full max-w-md mx-auto transition-all duration-1000 delay-900 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  )
}

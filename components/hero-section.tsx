"use client"

import { useEffect, useState, Suspense } from "react"
import { TypeAnimation } from "react-type-animation"
import dynamic from "next/dynamic"
import WaitlistForm from "@/components/waitlist-form"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url(              #'/hero-background.png')",
          backgroundPosition: 'center top 20%',
        }}
      />
      
      {/* Rest background pattern overlay */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/res-background.jpg')",
          backgroundPosition: 'center',
          mixBlendMode: 'overlay'
        }}
      />
      
      {/* Gradient Overlay for better text readability */}  
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />
      
      {/* Bottom Blur Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/90 to-transparent backdrop-blur-sm" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <div
            className={`inline-block px-4 py-1 mb-6 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-sm font-medium text-blue-400/90">NEXT-GEN GAME DEVELOPMENT</span>
          </div>

          <div className="min-h-[180px] flex items-center justify-center mb-6">
            <h1
              className={`text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl transition-all duration-1000 delay-300 text-white drop-shadow-2xl ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ 
                fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
                textShadow: "0 4px 8px rgba(0, 0, 0, 0.8)"
              }}
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
              <span className="text-gray-300">for</span> <span>game development</span>
            </h1>
          </div>

          <p
            className={`text-xl text-gray-200 mb-10 max-w-2xl transition-all duration-1000 delay-500 drop-shadow-lg ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ 
              fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)"
            }}
          >
            Accelerate your game development with VectorAI.
          </p>

          <div className="relative h-[400px] w-full max-w-[600px] mb-12 flex items-center justify-center mx-auto">
            <video
              src="/demovid.gif"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain rounded-2xl shadow-lg border border-gray-700"
            />
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
  );
}
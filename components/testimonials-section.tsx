"use client"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    }
  }, [inView])

  return (
    <section ref={ref} className="relative py-20 md:py-32 bg-black overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/res-background.jpg')",
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
      
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-6xl font-bold mb-6 text-white transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Supports all popular AI models
          </h2>
        </div>

        <div
          className={`flex justify-center transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Image 
            src="/models.png" 
            alt="Supported AI Models" 
            width={800} 
            height={400} 
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ quote, name, company }: { quote: string; name: string; company: string }) {
  return (
    <div className="bg-[#111] border border-gray-800 rounded-xl p-8 h-full flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.3)]">
      <p className="text-gray-200 mb-6 flex-grow font-light leading-relaxed"
         style={{
           fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
           fontSize: "15px",
           letterSpacing: "-0.01em"
         }}>
        "{quote}"
      </p>
      <div className="text-right">
        <div className="font-medium text-gray-300 italic"
             style={{
               fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
               fontSize: "14px",
               letterSpacing: "-0.01em"
             }}>
          — {name}
        </div>
        <div className="text-gray-400 text-sm italic"
             style={{
               fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
               fontSize: "12px"
             }}>
          {company}
        </div>
      </div>
    </div>
  )
}

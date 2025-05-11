"use client"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export default function ShowcaseSection() {
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
    <section id="showcase" ref={ref} className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            See Vector in action
          </h2>
          <p
            className={`text-xl text-blue-300 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Discover how game developers are using Vector to accelerate their workflows
          </p>
        </div>

        <div
          className={`flex justify-center mb-16 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-blue-500/20 rounded-lg blur-xl"></div>
            <Image 
              src="/demo.png" 
              alt="Vector in Action" 
              width={1000} 
              height={600} 
              className="rounded-lg shadow-2xl border border-blue-700/30 relative z-10"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ShowcaseCard
            title="Script Generation"
            description="Generate game scripts and dialogue with Vector's natural language processing tailored for game narratives."
            delay={0}
            isVisible={isVisible}
          />
          <ShowcaseCard
            title="MCP 3D Modeling"
            description="Create and optimize 3D models with Vector's advanced procedural generation capabilities and optimization suggestions."
            delay={200}
            isVisible={isVisible}
          />
        </div>
      </div>
    </section>
  )
}

function ShowcaseCard({
  title,
  description,
  delay,
  isVisible,
}: {
  title: string
  description: string
  delay: number
  isVisible: boolean
}) {
  // Custom image mapping based on title
  const getImageForTitle = (title: string) => {
    switch(title) {
      case "Script Generation":
        return "/scriptexmaple.png";
      case "MCP 3D Modeling":
        return "/3dexample.png";
      default:
        return null;
    }
  };

  const imageUrl = getImageForTitle(title);

  return (
    <div
      className={`bg-[#111] border border-blue-900/30 rounded-xl p-8 transition-all duration-700 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-blue-800/50 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="h-48 rounded-lg mb-6 overflow-hidden bg-[#111]">
        {imageUrl && (
          <Image 
            src={imageUrl}
            alt={title}
            width={400}
            height={200}
            className="w-full h-full object-contain"
          />
        )}
      </div>
      <h3 className="text-xl font-bold mb-2 text-blue-300">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
    </div>
  )
}

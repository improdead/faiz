"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

export default function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState("COMPOSER")
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
    <section id="features" ref={ref} className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2
            className={`text-5xl md:text-7xl font-bold mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif" }}
          >
            Features
          </h2>
          <p
            className={`text-xl text-blue-400 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Build games faster
          </p>
        </div>

        {/* Composer and Ask Feature */}
        <div
          className={`relative mb-20 overflow-hidden transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col md:flex-row items-stretch bg-gradient-to-br from-blue-900/50 via-purple-800/30 to-blue-900/50 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.2)]">
            <div className="md:w-1/2 p-12 flex flex-col justify-center">
              <h3 className="text-5xl font-bold mb-6 text-white">Composer and Ask</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                <span className="text-blue-400 font-semibold">Composer:</span> Generate, edit, and optimize game code with AI-powered assistance tailored to Vector Engine's node-based architecture.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                <span className="text-blue-400 font-semibold">Ask:</span> Get instant answers about game development concepts, debugging help, and optimize your workflow with natural language questions.
              </p>
            </div>
            <div className="md:w-1/2 bg-[#111] p-0">
              <div className="bg-black h-full">
                <div className="flex border-b border-blue-900/50">
                  <button 
                    onClick={() => setActiveTab("CHAT")}
                    className={`px-6 py-3 text-sm font-medium transition-colors ${activeTab === "CHAT" ? "text-blue-400 border-b border-blue-400" : "text-gray-400"}`}
                  >
                    ASK
                  </button>
                  <button 
                    onClick={() => setActiveTab("COMPOSER")}
                    className={`px-6 py-3 text-sm font-medium transition-colors ${activeTab === "COMPOSER" ? "text-blue-400 border-b border-blue-400" : "text-gray-400"}`}
                  >
                    COMPOSER
                  </button>
                </div>
                <div className="p-6 font-mono text-sm space-y-4">
                  {activeTab === "COMPOSER" ? (
                    <>
                      <p className="text-yellow-100">
                        Generate a character controller script for a 3D platformer with double jump and wall sliding
                      </p>
                      <p className="text-green-300">
                        I'll create a character controller script for a 3D platformer with double jump and wall sliding mechanics in Vector Engine. Let me generate that for you.
                      </p>
                      <div className="bg-gray-800/30 p-2 rounded text-gray-300 text-xs">
                        <span className="text-gray-500">›</span> Generating script for 3D character controller with platformer mechanics...
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="text-yellow-100">
                        How do I implement raycasting for object detection in Vector?
                      </p>
                      <p className="text-green-300">
                        In Vector Engine, you can implement raycasting using the RayCast3D node. Here's how to set it up and detect objects:
                      </p>
                      <div className="bg-gray-800/30 p-2 rounded text-gray-300 text-xs">
                        <span className="text-gray-500">1.</span> Add a RayCast3D node as a child of your character
                        <span className="text-gray-500">2.</span> Set properties: target_position, collision_mask
                        <span className="text-gray-500">3.</span> Enable it with enabled = true
                        <span className="text-gray-500">4.</span> Check is_colliding() to detect objects
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            title="Finds Context"
            description="Using custom retrieval models, Vector can understand a codebase. This reduces the need to manually add context."
            delay={0}
            isVisible={isVisible}
          />
          <FeatureCard
            title="AI-Assisted Design"
            description="Create game assets, UI elements, and visual components with intelligent design suggestions tailored to your game's style and requirements."
            delay={200}
            isVisible={isVisible}
          />
          <FeatureCard
            title="Fix Errors"
            description="Vector quickly identifies and resolves logic and runtime errors in your game code, providing intelligent solutions to keep your development flowing smoothly."
            delay={400}
            isVisible={isVisible}
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
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
  return (
    <div
      className={`bg-[#111] border border-blue-900/30 rounded-xl p-8 transition-all duration-700 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-blue-800/50 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="text-xl font-bold mb-4 font-mono text-blue-400">{title}</h3>
      <p className="text-gray-400 font-mono text-sm leading-relaxed">{description}</p>
    </div>
  )
}

"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"
import { HeroPointerHighlight } from "@/components/hero-pointer-highlight"
import { EnhancedBentoLayout } from "@/components/enhanced-bento-layout"
import { Features3DCards } from "@/components/features-3d-cards"
import { AIModelsDemo } from "@/components/ai-models-demo"
import TestimonialsSection from "@/components/testimonials-section"
import FaqSection from "@/components/faq-section"
import Footer from "@/components/footer"

export default function Home() {
  // Add scroll animation library
  useEffect(() => {
    // Add intersection observer polyfill if needed
    if (!("IntersectionObserver" in window)) {
      import("intersection-observer")
    }
    
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, [])

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <HeroPointerHighlight />
      <EnhancedBentoLayout />
      <Features3DCards />
      <div className="py-20 md:py-32 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Powered by AI
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Integrate with the world's most advanced AI models
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="md:col-span-2">
              <AIModelsDemo />
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-3">Claude 4 Integration</h3>
                <p className="text-gray-400 text-sm">Advanced reasoning and code generation capabilities</p>
              </div>
              <div className="bg-gradient-to-br from-green-900/20 to-teal-900/20 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-3">Godot Engine</h3>
                <p className="text-gray-400 text-sm">Native 3D game development support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TestimonialsSection />
      <FaqSection />
      <Footer />
    </main>
  )
}

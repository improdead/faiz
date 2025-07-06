"use client"

import { useState, useEffect } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useInView } from "react-intersection-observer"
import WaitlistForm from "@/components/waitlist-form"

export default function FaqSection() {
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
    <section id="faqs" ref={ref} className="relative py-20 md:py-32 bg-black overflow-hidden">
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70" />
      
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2
              className={`text-3xl md:text-5xl font-bold mb-6 text-white transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Answers to your
              <br />
              Common Questions
            </h2>
            <p
              className={`text-gray-400 mb-8 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Learn more about how Vector can accelerate your game development workflow.
            </p>
            <div
              className={`transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <WaitlistForm />
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Accordion type="single" collapsible className="space-y-4">
              <FaqItem
                question="Do I need to be technical to use Vector?"
                answer="No, Vector is designed to bring down the barrier to entry for game development. Whether you're a seasoned developer or a creative with no coding experience, Vector's intuitive AI interface guides you through the process, translating your ideas into functional game elements without requiring deep technical knowledge."
              />
              <FaqItem
                question="How does Vector help with game development?"
                answer="Vector uses AI to analyze your game code, assets, and architecture to provide optimization suggestions, automate repetitive tasks, and help solve complex development challenges. Our tests show Vector can speed up game development by up to 72% compared to traditional workflows."
              />
              <FaqItem
                question="What engine is Vector built on?"
                answer="Vector is built on top of the Godot Engine, utilizing its powerful node-based architecture. This allows for efficient component management and integration with existing Godot projects."
              />
              <FaqItem
                question="How does Vector's node system work?"
                answer="Vector leverages Godot's node-based system, allowing developers to work with familiar scene trees and inheritance patterns. The AI integrates seamlessly with this system to provide intelligent suggestions for node organization and optimization."
              />
              <FaqItem
                question="Does Vector work with 2D and 3D games?"
                answer="Yes, Vector supports both 2D and 3D game development workflows, working with Godot's versatile engine capabilities. This includes sprite optimization, 3D model analysis, animation rigging, and procedural generation tools."
              />
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <AccordionItem value={question} className="border border-gray-800 rounded-lg">
      <AccordionTrigger className="px-6 py-4 text-left font-medium hover:no-underline">{question}</AccordionTrigger>
      <AccordionContent className="px-6 pb-4 text-gray-400">{answer}</AccordionContent>
    </AccordionItem>
  )
}

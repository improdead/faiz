"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Check, Gamepad2, Cpu, Layers } from "lucide-react"
import { useInView } from "react-intersection-observer"
import WaitlistForm from "@/components/waitlist-form"

export default function PricingSection() {
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
    <section id="pricing" ref={ref} className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Choose your plan
          </h2>
          <div
            className={`flex flex-wrap justify-center gap-6 text-sm text-gray-400 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center">
              <Check className="h-4 w-4 mr-2 text-gray-400" />
              <span>AI features in all plans</span>
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 mr-2 text-gray-400" />
              <span>14-Day money back guarantee</span>
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 mr-2 text-gray-400" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            icon={<Gamepad2 className="h-6 w-6 text-white" />}
            name="Indie"
            price="$19"
            description="For solo developers & small teams"
            features={[
              "500 AI queries per month",
              "Basic code generation",
              "Standard asset optimization",
              "Single-user access",
            ]}
            isVisible={isVisible}
            delay={0}
          />

          <PricingCard
            icon={<Cpu className="h-6 w-6 text-white" />}
            name="Studio"
            price="$49"
            description="For established game studios"
            features={[
              "3,000 AI queries per month",
              "Advanced code generation",
              "Physics & animation optimization",
              "Multi-user access (up to 5 users)",
            ]}
            popular={true}
            isVisible={isVisible}
            delay={200}
          />

          <PricingCard
            icon={<Layers className="h-6 w-6 text-white" />}
            name="Enterprise"
            price="$99"
            description="For large game development companies"
            features={[
              "10,000 AI queries per month",
              "Custom AI model training",
              "Full engine optimization",
              "Unlimited team access & priority support",
            ]}
            isVisible={isVisible}
            delay={400}
          />
        </div>
      </div>
    </section>
  )
}

function PricingCard({
  icon,
  name,
  price,
  description,
  features,
  popular = false,
  isVisible,
  delay,
}: {
  icon: React.ReactNode
  name: string
  price: string
  description: string
  features: string[]
  popular?: boolean
  isVisible: boolean
  delay: number
}) {
  return (
    <div
      className={`relative bg-[#111] border ${
        popular ? "border-[#2563eb]" : "border-gray-800"
      } rounded-xl p-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2563eb] text-white text-sm font-medium px-4 py-1 rounded-full">
          Most popular
        </div>
      )}

      <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-full bg-[#2563eb]">{icon}</div>

      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className="text-gray-400 mb-6">{description}</p>

      <div className="mb-8">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-gray-400">/mon</span>
      </div>

      <button className="w-full py-3 px-6 mb-8 bg-[#1a1a1a] hover:bg-[#222] border border-[#333] rounded-xl text-white font-medium transition-all duration-300 shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
        Get Started
      </button>

      <div className="space-y-4">
        <h4 className="font-medium">What's included:</h4>
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <Check className="h-5 w-5 mr-3 text-gray-400 shrink-0 mt-0.5" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

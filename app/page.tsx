"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import ShowcaseSection from "@/components/showcase-section"
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
  }, [])

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ShowcaseSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FaqSection />
      <Footer />
    </main>
  )
}

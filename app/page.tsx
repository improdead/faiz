"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"
import { HeroPointerHighlight } from "@/components/hero-pointer-highlight"
import VectorInActionBento from "@/components/vector-in-action-bento"
import FeaturesBento from "@/components/features-bento";
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
      <HeroPointerHighlight />
      <VectorInActionBento />
      <FeaturesBento />
      <TestimonialsSection />
      <FaqSection />
      <Footer />
    </main>
  )
}

"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useInView } from "react-intersection-observer"
import Logo from "@/components/logo"
// Using Lucide icons instead of react-icons
import { Linkedin } from "lucide-react"

export default function Footer() {
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
    <footer ref={ref} className="py-12 md:py-20 border-t border-gray-800 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div
            className={`col-span-1 md:col-span-2 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Logo className="h-8 w-8" />
              <span className="font-bold text-xl">VECTOR</span>
            </Link>
            <div className="flex space-x-4 mt-4">
              <SocialLink href="https://www.linkedin.com/company/usevector/" aria-label="LinkedIn" icon={<Linkedin size={20} />} />
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="font-medium text-lg mb-4">Product</h3>
            <ul className="space-y-3">
              <FooterLink href="#features">Features</FooterLink>
              <FooterLink href="#showcase">Showcase</FooterLink>
              <FooterLink href="#faqs">FAQs</FooterLink>
            </ul>
          </div>

          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="font-medium text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <FooterLink href="#documentation">Documentation</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({
  href,
  "aria-label": ariaLabel,
  icon
}: {
  href: string;
  "aria-label": string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-[#111111] border border-gray-800 hover:border-gray-600 transition-colors"
    >
      <span className="sr-only">{ariaLabel}</span>
      <div className="text-gray-400 hover:text-white transition-colors">
        {icon}
      </div>
    </a>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-gray-400 hover:text-white transition-colors">
        {children}
      </Link>
    </li>
  )
}

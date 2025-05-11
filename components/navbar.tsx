"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, Download } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Logo from "@/components/logo"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [downloadText, setDownloadText] = useState("Download")
  const [mobileDownloadText, setMobileDownloadText] = useState("Download")

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state for class toggling
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleDownloadClick = () => {
    setDownloadText("Coming Soon");
    setTimeout(() => setDownloadText("Download"), 2000);
  };

  const handleMobileDownloadClick = () => {
    setMobileDownloadText("Coming Soon");
    setTimeout(() => setMobileDownloadText("Download"), 2000);
  };

  // Calculate dynamic styles based on scroll position
  const dynamicPadding = {
    paddingTop: "12px",
    paddingBottom: "12px",
  }

  const dynamicMargin = {
    marginTop: "1rem",
    marginBottom: "1rem",
    maxWidth: isScrolled
      ? "1050px"  // Adjusted from 1200px to be slightly more compressed
      : "100%",
    marginInline: "auto"  // Centers the navbar
  }

  const dynamicFontSize = {
    fontSize: "1.125rem",
  }

  const logoSizeClass = "h-7 w-7"

  const dynamicBorder = {
    boxShadow: isScrolled
      ? `0 0 20px rgba(0,0,0,0.6), 0 5px 15px rgba(0,0,0,0.4), 0 0 30px rgba(50,100,255,0.1)`
      : "none",
    borderColor: isScrolled
      ? `rgba(40,40,40,0.9)`
      : "transparent",
    borderWidth: isScrolled ? "2px" : "0px"
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-md border rounded-full"
          : "bg-transparent"
      }`}
      style={{
        ...dynamicMargin,
        ...dynamicBorder,
        fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif"
      }}
    >
      <div className={`container mx-auto ${isScrolled ? 'px-6' : 'px-4 md:px-6'}`}>
        <div className="flex items-center justify-between" style={dynamicPadding}>
          <Link href="/" className="flex items-center space-x-2">
            <Logo className={`transition-all duration-300 ${logoSizeClass}`} />
            <span
              className="font-bold transition-all duration-300"
              style={{
                ...dynamicFontSize,
                fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
              }}
            >
              Vector
            </span>
          </Link>

          <nav className={`hidden lg:flex items-center ${isScrolled ? 'space-x-6' : 'space-x-8'}`}>
            <Link
              href="#features"
              className="text-gray-300 hover:text-white transition-colors text-sm"
              style={{
                padding: '0.375rem',
                paddingLeft: isScrolled ? '0.625rem' : '0.625rem',
                paddingRight: isScrolled ? '0.625rem' : '0.625rem'
              }}>
              Features
            </Link>
            <Link
              href="#showcase"
              className="text-gray-300 hover:text-white transition-colors text-sm"
              style={{
                padding: '0.375rem',
                paddingLeft: isScrolled ? '0.625rem' : '0.625rem',
                paddingRight: isScrolled ? '0.625rem' : '0.625rem'
              }}>
              Showcase
            </Link>
            <Link
              href="#faqs"
              className="text-gray-300 hover:text-white transition-colors text-sm"
              style={{
                padding: '0.375rem',
                paddingLeft: isScrolled ? '0.625rem' : '0.625rem',
                paddingRight: isScrolled ? '0.625rem' : '0.625rem'
              }}>
              FAQs
            </Link>
            <button
              onClick={scrollToTop}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-colors ml-2 shadow-[0_0_10px_rgba(50,100,255,0.3)]"
            >
              Join Waitlist
            </button>
            <button
              onClick={handleDownloadClick}
              className="px-4 py-2 text-sm font-medium text-gray-400 bg-gray-800/50 rounded-md flex items-center space-x-1 cursor-pointer transition-all duration-300"
            >
              <Download className="h-4 w-4 mr-1" />
              {downloadText}
            </button>
          </nav>

          <Sheet>
            <SheetTrigger asChild>
              <button className="lg:hidden p-2 rounded-full bg-gray-800/50 text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-[#0a0a0a] border-r border-gray-800">
              <div className="flex flex-col space-y-6 py-6">
                <Link href="/" className="flex items-center space-x-2">
                  <Logo className="h-8 w-8" />
                  <span
                    className="font-bold text-xl"
                    style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif" }}
                  >
                    Vector
                  </span>
                </Link>
                <nav className="flex flex-col space-y-4">
                  <Link href="#features" className="text-gray-300 hover:text-white transition-colors py-2">
                    Features
                  </Link>
                  <Link href="#showcase" className="text-gray-300 hover:text-white transition-colors py-2">
                    Showcase
                  </Link>
                  <Link href="#faqs" className="text-gray-300 hover:text-white transition-colors py-2">
                    FAQs
                  </Link>
                  <button
                    onClick={scrollToTop}
                    className="py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-colors shadow-[0_0_10px_rgba(50,100,255,0.3)]"
                  >
                    Join Waitlist
                  </button>
                  <button
                    onClick={handleMobileDownloadClick}
                    className="py-2 text-gray-400 bg-gray-800/50 rounded-md flex items-center space-x-1 cursor-pointer transition-all duration-300"
                  >
                    <Download className="h-4 w-4 mr-1" />
                    {mobileDownloadText}
                  </button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}





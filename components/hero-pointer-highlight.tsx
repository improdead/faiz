"use client";

import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";

export function HeroPointerHighlight() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-background.png')",
          backgroundPosition: 'center top 20%',
        }}
      />
      
      {/* Rest background pattern overlay */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/res-background.jpg')",
          backgroundPosition: 'center',
          mixBlendMode: 'overlay'
        }}
      />
      
      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />
      
      {/* Bottom Blur Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/90 to-transparent backdrop-blur-sm" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div className="mx-auto max-w-4xl py-20">
          <div className="min-h-[180px] flex items-center justify-center mb-6">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight text-white drop-shadow-2xl"
                style={{ 
                  fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
                  textShadow: "0 4px 8px rgba(0, 0, 0, 0.8)"
                }}>
                <TypeAnimation
                  sequence={[
                    "AI-powered creation",
                    2000,
                    "Intelligent coding",
                    2000,
                    "Seamless generation",
                    2000,
                    "Rapid prototyping",
                    2000,
                  ]}
                  wrapper="span"
                  speed={10}
                  repeat={Infinity}
                  className="block h-[1.2em] overflow-hidden"
                />
              <span className="text-gray-300">for</span> <span>game development</span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto drop-shadow-lg"
             style={{ 
               fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
               textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)"
             }}>
            Accelerate your game development with VectorAI.
          </p>
          
          {/* Demo Video */}
          <div className="relative w-full max-w-3xl mx-auto mb-12 aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/TBSPWpCSG3k?autoplay=1&mute=1&loop=1&playlist=TBSPWpCSG3k&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
              title="Vector Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 
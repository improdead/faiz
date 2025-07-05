"use client";

import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { Button } from "@/components/ui/button";

export function HeroPointerHighlight() {
  return (
    <section className="py-20 md:py-32 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="mx-auto max-w-4xl py-20">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-8">
            The best way to code is to
            <PointerHighlight>
              <span className="text-blue-400">collaborate</span>
            </PointerHighlight>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Vector combines the power of AI with seamless collaboration to revolutionize your development workflow
          </p>
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
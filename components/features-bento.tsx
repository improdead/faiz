"use client"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon, ZapIcon, BrainIcon, WrenchIcon } from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import AnimatedBeamMultipleOutputDemo from "@/components/animated-beam-multiple-outputs";
import AnimatedListDemo from "@/components/animated-list-demo";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Marquee } from "@/components/magicui/marquee";

const aiFeatures = [
  {
    name: "Context Detection",
    body: "Vector automatically identifies code patterns, dependencies, and relationships within your game project.",
  },
  {
    name: "Smart Suggestions", 
    body: "Get intelligent recommendations for code optimization, asset management, and performance improvements.",
  },
  {
    name: "Error Prevention",
    body: "Proactively catch potential bugs and logic errors before they become runtime issues.",
  },
  {
    name: "Code Templates",
    body: "Access pre-built game development patterns and commonly used code structures.",
  },
  {
    name: "Asset Pipeline",
    body: "Streamline texture compression, model optimization, and audio processing workflows.",
  },
];

const featuresData = [
  {
    Icon: BrainIcon,
    name: "Finds Context",
    description: "Using custom retrieval models, Vector can understand a codebase. This reduces the need to manually add context.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]"
      >
        {aiFeatures.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-green-950/[.3] bg-green-950/[.1] hover:bg-green-950/[.2]",
              "dark:border-green-50/[.1] dark:bg-green-50/[.10] dark:hover:bg-green-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium text-green-400">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs text-gray-300">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: BellIcon,
    name: "AI-Assisted Design",
    description: "Create game assets, UI elements, and visual components with intelligent design suggestions tailored to your game's style.",
    href: "#",
    cta: "Try now",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90" />
    ),
  },
  {
    Icon: WrenchIcon,
    name: "Fix Errors",
    description: "Vector quickly identifies and resolves logic and runtime errors in your game code, providing intelligent solutions to keep your development flowing smoothly.",
    href: "#",
    cta: "Debug now",
    className: "col-span-3 lg:col-span-3",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
];

export default function FeaturesBento() {
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
    <section id="features-bento" ref={ref} className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Features
          </h2>
          <p
            className={`text-xl text-blue-400 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Build games faster with AI-powered development tools
          </p>
        </div>

        <div
          className={`transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <BentoGrid className="max-w-6xl mx-auto">
            {featuresData.map((feature, idx) => (
              <BentoCard key={idx} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  )
} 
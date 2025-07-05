"use client"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon, CodeIcon, GamepadIcon } from "lucide-react";
import Image from "next/image"

import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import AnimatedBeamMultipleOutputDemo from "@/components/animated-beam-multiple-outputs";
import AnimatedListDemo from "@/components/animated-list-demo";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Marquee } from "@/components/magicui/marquee";

const gameFiles = [
  {
    name: "PlayerController.cs",
    body: "AI-generated player movement script with advanced physics and animations for 3D platformer games.",
  },
  {
    name: "EnemyAI.cs", 
    body: "Intelligent enemy behavior system with pathfinding, state machines, and adaptive difficulty.",
  },
  {
    name: "GameManager.cs",
    body: "Complete game state management with save/load functionality and scene transitions.",
  },
  {
    name: "UIManager.cs",
    body: "Dynamic UI system with responsive layouts and accessibility features built-in.",
  },
  {
    name: "AudioManager.cs",
    body: "3D spatial audio system with dynamic music and realistic sound effects management.",
  },
];

const vectorInActionFeatures = [
  {
    Icon: CodeIcon,
    name: "Script Generation",
    description: "Generate complete game scripts and dialogue with Vector's natural language processing tailored for game narratives.",
    href: "#",
    cta: "Try it now",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="absolute -inset-1 bg-blue-500/20 rounded-lg blur-xl"></div>
          <Image 
            src="/scriptexmaple.png" 
            alt="Script Generation Example" 
            width={400} 
            height={200} 
            className="rounded-lg shadow-2xl border border-blue-700/30 relative z-10"
          />
        </div>
      </div>
    ),
  },
  {
    Icon: FileTextIcon,
    name: "Live Code Generation",
    description: "Watch Vector generate game code in real-time as you describe your requirements.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:15s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]"
      >
        {gameFiles.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-blue-950/[.3] bg-blue-950/[.1] hover:bg-blue-950/[.2]",
              "dark:border-blue-50/[.1] dark:bg-blue-50/[.10] dark:hover:bg-blue-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium text-blue-400">
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
    Icon: GamepadIcon,
    name: "3D Model Creation",
    description: "Create and optimize 3D models with Vector's advanced procedural generation and asset pipeline.",
    href: "#",
    cta: "Explore",
    className: "col-span-3 lg:col-span-3",
    background: (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="absolute -inset-1 bg-purple-500/20 rounded-lg blur-xl"></div>
          <Image 
            src="/3dexample.png" 
            alt="3D Model Creation Example" 
            width={800} 
            height={300} 
            className="rounded-lg shadow-2xl border border-purple-700/30 relative z-10"
          />
        </div>
      </div>
    ),
  },
];

export default function VectorInActionBento() {
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
    <section id="vector-in-action" ref={ref} className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            See Vector in Action
          </h2>
          <p
            className={`text-xl text-blue-300 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Discover how game developers are using Vector to accelerate their workflows
          </p>
        </div>

        <div
          className={`transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <BentoGrid className="max-w-6xl mx-auto">
            {vectorInActionFeatures.map((feature, idx) => (
              <BentoCard key={idx} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  )
} 
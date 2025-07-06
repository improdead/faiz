"use client"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon, Search, GitBranch, CodeIcon, GamepadIcon, Cpu } from "lucide-react";
import Image from "next/image";

import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { AnimatedBeamDemo } from "./animated-beam-demo";
import AnimatedListDemo from "./animated-list-demo";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Marquee } from "@/components/magicui/marquee";
import { CodeComparison } from "@/components/magicui/code-comparison";

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

const beforeCode = `import { NextRequest } from 'next/server';

export const middleware = async (req: NextRequest) => {
  let user = undefined;
  let team = undefined;
  const token = req.headers.get('token'); 

  if(req.nextUrl.pathname.startsWith('/auth')) {
    user = await getUserByToken(token);

    if(!user) {
      return NextResponse.redirect('/login');
    }
  }

  if(req.nextUrl.pathname.startsWith('/team')) {
    user = await getUserByToken(token);

    if(!user) {
      return NextResponse.redirect('/login');
    }

    const slug = req.nextUrl.query.slug;
    team = await getTeamBySlug(slug); // [!code highlight]

    if(!team) { // [!code highlight]
      return NextResponse.redirect('/'); // [!code highlight]
    } // [!code highlight]
  } // [!code highlight]

  return NextResponse.next(); // [!code highlight]
}

export const config = {
  matcher: ['/((?!_next/|_static|_vercel|[\\w-]+\\.\\w+).*)'], // [!code highlight]
};`;

const afterCode = `import { createMiddleware, type MiddlewareFunctionProps } from '@app/(auth)/auth/_middleware';
import { auth } from '@/app/(auth)/auth/_middleware'; // [!code --]
import { auth } from '@/app/(auth)/auth/_middleware'; // [!code ++]
import { team } from '@/app/(team)/team/_middleware';

const middlewares = {
  '/auth{/:path?}': auth,
  '/team{/:slug?}': [ auth, team ],
};

export const middleware = createMiddleware(middlewares); // [!code focus]

export const config = {
  matcher: ['/((?!_next/|_static|_vercel|[\\w-]+\\.\\w+).*)'],
};`;

const features = [
  {
    Icon: CodeIcon,
    name: "Code Generation",
    description: "Generate complete game scripts, player controllers, and system managers with Vector's AI-powered code assistant.",
    href: "#",
    cta: "Try it now",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:15s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]"
      >
        {gameFiles.map((file, idx) => (
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
                  {file.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs text-gray-300">{file.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: GamepadIcon,
    name: "Asset Generation",
    description: "Create sprites, textures, 3D models, and game assets with AI. Generate professional-quality assets in seconds.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="absolute -inset-1 bg-green-500/20 rounded-lg blur-xl"></div>
          <Image
            src="/asset-generation-mockup.png"
            alt="Asset Generation Mockup"
            width={500}
            height={300}
            className="rounded-lg shadow-2xl border border-green-700/30 relative z-10 opacity-90 transition-all duration-300 group-hover:opacity-100"
          />
        </div>
      </div>
    ),
  },
  {
    Icon: FileTextIcon,
    name: "Advanced Code Generation",
    description: "Transform complex game logic into clean, optimized code. Generate complete systems with advanced TypeScript patterns.",
    href: "#",
    cta: "Explore",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="absolute -inset-1 bg-purple-500/20 rounded-lg blur-xl"></div>
          <CodeComparison
            beforeCode={beforeCode}
            afterCode={afterCode}
            language="typescript"
            filename="middleware.ts"
            lightTheme="github-light"
            darkTheme="github-dark"
            highlightColor="rgba(101, 117, 133, 0.16)"
            className="h-[280px] w-[90%] transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-95 relative z-10"
          />
        </div>
      </div>
    ),
  },
  {
    Icon: Cpu,
    name: "Intelligent Engine",
    description: "Experience Vector's intelligent game engine powered by Godot with AI-driven optimization and real-time assistance.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="absolute -inset-1 bg-orange-500/20 rounded-lg blur-xl"></div>
          <div className="relative z-10">
            <Image
              src="/godot_ai_illustration.png"
              alt="Intelligent Engine with Godot"
              width={150}
              height={150}
              className="rounded-lg shadow-2xl border border-orange-700/30 opacity-80 transition-all duration-300 group-hover:opacity-100 mb-4"
            />
            <AnimatedBeamDemo />
          </div>
        </div>
      </div>
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
    <section id="features" ref={ref} className="relative py-20 md:py-32 bg-black overflow-hidden">
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
      
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-6xl font-bold mb-6 text-white transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Game Engine Features
          </h2>
          <p
            className={`text-xl text-blue-300 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Powerful AI-driven game development tools with intelligent code generation and asset creation
          </p>
        </div>

        <div
          className={`transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <BentoGrid className="max-w-6xl mx-auto">
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
        </div>
      </div>
    </section>
  );
} 
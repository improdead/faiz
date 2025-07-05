"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function Features3DCards() {
  const features = [
    {
      title: "AI-Powered Code Generation",
      description: "Generate high-quality code with advanced AI models including Claude, GPT, and Gemini.",
      icon: <AIIcon className="w-full h-full" />,
      background: "from-purple-500/10 to-blue-500/10",
    },
    {
      title: "3D Game Development",
      description: "Create immersive 3D games with integrated Godot and Unity support.",
      icon: <GameIcon className="w-full h-full" />,
      background: "from-pink-500/10 to-red-500/10",
    },
    {
      title: "Real-time Collaboration",
      description: "Work together seamlessly with your team in real-time.",
      icon: <CollaborationIcon className="w-full h-full" />,
      background: "from-blue-500/10 to-cyan-500/10",
    },
    {
      title: "Smart Code Analysis",
      description: "Advanced code analysis and optimization suggestions powered by AI.",
      icon: <AnalysisIcon className="w-full h-full" />,
      background: "from-yellow-500/10 to-orange-500/10",
    },
    {
      title: "Multi-Language Support",
      description: "Support for multiple programming languages and frameworks.",
      icon: <LanguageIcon className="w-full h-full" />,
      background: "from-green-500/10 to-teal-500/10",
    },
    {
      title: "Cloud Integration",
      description: "Seamless integration with cloud services and deployment platforms.",
      icon: <CloudIcon className="w-full h-full" />,
      background: "from-cyan-500/10 to-blue-500/10",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience the future of development with our cutting-edge features
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div className="lg:col-span-2">
            <ThreeDCardDemo
              title={features[0].title}
              description={features[0].description}
              icon={features[0].icon}
              background={features[0].background}
              className="h-full"
            />
          </div>
          <div>
            <ThreeDCardDemo
              title={features[1].title}
              description={features[1].description}
              icon={features[1].icon}
              background={features[1].background}
            />
          </div>
          <div>
            <ThreeDCardDemo
              title={features[2].title}
              description={features[2].description}
              icon={features[2].icon}
              background={features[2].background}
            />
          </div>
          <div className="lg:col-span-2">
            <ThreeDCardDemo
              title={features[3].title}
              description={features[3].description}
              icon={features[3].icon}
              background={features[3].background}
              className="h-full"
            />
          </div>
          <div className="md:col-span-2 lg:col-span-1">
            <ThreeDCardDemo
              title={features[4].title}
              description={features[4].description}
              icon={features[4].icon}
              background={features[4].background}
            />
          </div>
          <div className="md:col-span-2 lg:col-span-2">
            <ThreeDCardDemo
              title={features[5].title}
              description={features[5].description}
              icon={features[5].icon}
              background={features[5].background}
              className="h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ThreeDCardDemo({
  title,
  description,
  icon,
  background,
  className,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  background?: string;
  className?: string;
}) {
  return (
    <CardContainer className={`inter-var ${className || ''}`}>
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <div className={`h-60 w-full rounded-xl group-hover/card:shadow-xl flex items-center justify-center bg-gradient-to-br ${background || 'from-purple-500/10 to-blue-500/10'}`}>
            <div className="w-32 h-32">
              {icon}
            </div>
          </div>
        </CardItem>
        <div className="flex justify-between items-center mt-6">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:bg-white/10 transition-colors"
          >
            Learn more →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            Try now
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

// Clean Minimal SVG Icons
const AIIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="ai-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#667eea" />
        <stop offset="100%" stopColor="#764ba2" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="40" fill="url(#ai-grad)" opacity="0.1" />
    <circle cx="50" cy="50" r="25" fill="url(#ai-grad)" opacity="0.2" />
    <circle cx="50" cy="50" r="15" fill="url(#ai-grad)" />
    <circle cx="50" cy="50" r="6" fill="white" opacity="0.9" />
  </svg>
);

const GameIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="game-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f093fb" />
        <stop offset="100%" stopColor="#f5576c" />
      </linearGradient>
    </defs>
    <rect x="20" y="35" width="60" height="30" rx="15" fill="url(#game-grad)" opacity="0.2" />
    <rect x="25" y="40" width="50" height="20" rx="10" fill="url(#game-grad)" />
    <circle cx="35" cy="50" r="3" fill="white" opacity="0.8" />
    <circle cx="65" cy="50" r="3" fill="white" opacity="0.8" />
    <rect x="48" y="43" width="4" height="14" rx="2" fill="white" opacity="0.7" />
    <rect x="41" y="48" width="18" height="4" rx="2" fill="white" opacity="0.7" />
  </svg>
);

const CollaborationIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="collab-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4facfe" />
        <stop offset="100%" stopColor="#00f2fe" />
      </linearGradient>
    </defs>
    <circle cx="35" cy="35" r="12" fill="url(#collab-grad)" opacity="0.3" />
    <circle cx="65" cy="35" r="12" fill="url(#collab-grad)" opacity="0.3" />
    <circle cx="50" cy="65" r="12" fill="url(#collab-grad)" opacity="0.3" />
    <circle cx="35" cy="35" r="8" fill="url(#collab-grad)" />
    <circle cx="65" cy="35" r="8" fill="url(#collab-grad)" />
    <circle cx="50" cy="65" r="8" fill="url(#collab-grad)" />
    <line x1="43" y1="35" x2="57" y2="35" stroke="url(#collab-grad)" strokeWidth="2" />
    <line x1="43" y1="43" x2="57" y2="57" stroke="url(#collab-grad)" strokeWidth="2" />
    <line x1="57" y1="43" x2="43" y2="57" stroke="url(#collab-grad)" strokeWidth="2" />
  </svg>
);

const AnalysisIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="analysis-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fa709a" />
        <stop offset="100%" stopColor="#fee140" />
      </linearGradient>
    </defs>
    <rect x="20" y="70" width="8" height="20" rx="4" fill="url(#analysis-grad)" opacity="0.6" />
    <rect x="35" y="60" width="8" height="30" rx="4" fill="url(#analysis-grad)" opacity="0.7" />
    <rect x="50" y="50" width="8" height="40" rx="4" fill="url(#analysis-grad)" opacity="0.8" />
    <rect x="65" y="40" width="8" height="50" rx="4" fill="url(#analysis-grad)" />
    <circle cx="50" cy="25" r="8" fill="url(#analysis-grad)" opacity="0.3" />
    <circle cx="50" cy="25" r="4" fill="url(#analysis-grad)" />
  </svg>
);

const LanguageIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="lang-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a8edea" />
        <stop offset="100%" stopColor="#fed6e3" />
      </linearGradient>
    </defs>
    <rect x="20" y="20" width="60" height="40" rx="8" fill="url(#lang-grad)" opacity="0.2" />
    <rect x="25" y="25" width="50" height="30" rx="6" fill="url(#lang-grad)" opacity="0.4" />
    <rect x="30" y="30" width="40" height="20" rx="4" fill="url(#lang-grad)" />
    <text x="50" y="42" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">
      &lt;/&gt;
    </text>
    <circle cx="35" cy="70" r="6" fill="url(#lang-grad)" opacity="0.6" />
    <circle cx="50" cy="70" r="6" fill="url(#lang-grad)" opacity="0.7" />
    <circle cx="65" cy="70" r="6" fill="url(#lang-grad)" opacity="0.8" />
    <text x="35" y="73" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">JS</text>
    <text x="50" y="73" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">PY</text>
    <text x="65" y="73" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">TS</text>
  </svg>
);

const CloudIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="cloud-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#84fab0" />
        <stop offset="100%" stopColor="#8fd3f4" />
      </linearGradient>
    </defs>
    <ellipse cx="50" cy="55" rx="30" ry="8" fill="url(#cloud-grad)" opacity="0.2" />
    <ellipse cx="50" cy="45" rx="20" ry="12" fill="url(#cloud-grad)" opacity="0.4" />
    <ellipse cx="40" cy="40" rx="12" ry="10" fill="url(#cloud-grad)" opacity="0.6" />
    <ellipse cx="60" cy="40" rx="12" ry="10" fill="url(#cloud-grad)" opacity="0.6" />
    <ellipse cx="50" cy="35" rx="18" ry="12" fill="url(#cloud-grad)" />
    <circle cx="42" cy="65" r="2" fill="url(#cloud-grad)" opacity="0.8" />
    <circle cx="50" cy="70" r="2" fill="url(#cloud-grad)" opacity="0.8" />
    <circle cx="58" cy="65" r="2" fill="url(#cloud-grad)" opacity="0.8" />
    <line x1="42" y1="67" x2="42" y2="75" stroke="url(#cloud-grad)" strokeWidth="1" opacity="0.8" />
    <line x1="50" y1="72" x2="50" y2="78" stroke="url(#cloud-grad)" strokeWidth="1" opacity="0.8" />
    <line x1="58" y1="67" x2="58" y2="75" stroke="url(#cloud-grad)" strokeWidth="1" opacity="0.8" />
  </svg>
); 
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

export function EnhancedBentoLayout() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const bentoItems = [
    {
      id: 1,
      title: "Access Protection",
      description: "Create access-protected docs with visitor authentication to keep sensitive information secure.",
      icon: <SecurityIcon />,
      className: "md:col-span-1 bg-gradient-to-br from-gray-900 to-black",
      size: "large",
    },
    {
      id: 2,
      title: "Workflow Integration",
      description: "GitBook's branch-based workflow integrates seamlessly with your existing development process.",
      icon: <WorkflowIcon />,
      className: "md:col-span-2 bg-gradient-to-br from-blue-500/10 to-cyan-500/10",
      size: "wide",
    },
    {
      id: 3,
      title: "AI-Powered Writing",
      description: "Write better with AI assistance for grammar, tone, and technical documentation.",
      icon: <AIWritingIcon />,
      className: "md:col-span-1 bg-gradient-to-br from-yellow-500/10 to-orange-500/10",
      size: "tall",
    },
    {
      id: 4,
      title: "API Documentation",
      description: "Create detailed, interactive API docs that developers love to use.",
      icon: <APIIcon />,
      className: "md:col-span-2 bg-gradient-to-br from-cyan-500/10 to-blue-500/10",
      size: "wide",
    },
    {
      id: 5,
      title: "Real-time Sync",
      description: "Synchronize changes instantly across your team and platforms.",
      icon: <SyncIcon />,
      className: "md:col-span-1 bg-gradient-to-br from-purple-500/10 to-pink-500/10",
      size: "square",
    },
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Vector in Action
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            See how Vector transforms your development workflow
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {bentoItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${item.className} ${item.size === 'tall' ? 'md:row-span-2' : ''} 
                         ${item.size === 'wide' ? 'md:col-span-2' : ''} 
                         rounded-xl p-8 border border-white/10 group hover:border-white/20 
                         transition-all duration-300 hover:scale-[1.02] cursor-pointer`}
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                  {item.description}
                </p>
                <div className="mt-6">
                  <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                    Learn more →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Clean minimal icons for the bento grid
const SecurityIcon = () => (
  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  </div>
);

const WorkflowIcon = () => (
  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  </div>
);

const AIWritingIcon = () => (
  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  </div>
);

const APIIcon = () => (
  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  </div>
);

const SyncIcon = () => (
  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  </div>
); 
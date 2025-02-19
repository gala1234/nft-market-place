"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Particle {
  initialX: number;
  initialY: number;
  targetX: number;
  targetY: number;
  duration: number;
}

export const Hero = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles = [...Array(20)].map(() => ({
      initialX: Math.random() * 100,
      initialY: Math.random() * 100,
      targetX: Math.random() * 100,
      targetY: Math.random() * 100,
      duration: Math.random() * 10 + 10,
    }));
    setParticles(newParticles);
  }, []);

  const glowVariants = {
    initial: { color: "#FFE5E5" },
    animate: {
      color: ["#FFE5E5", "#FFFFFF", "#FFE5E5"],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="mb-24">
      <div className="relative rounded-3xl overflow-hidden bg-gray-50 dark:bg-gray-900 p-12 md:p-16">
        <div className="relative z-10 max-w-3xl">
          <div className="relative">
            {particles.map((particle, index) => (
              <motion.div
                key={index}
                className="absolute w-1 h-1 bg-pink-300/30 rounded-full"
                initial={{
                  left: `${particle.initialX}%`,
                  top: `${particle.initialY}%`,
                }}
                animate={{
                  left: `${particle.targetX}%`,
                  top: `${particle.targetY}%`,
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            ))}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black dark:text-white leading-tight">
              Discover Rare Digital Art and{" "}
              <motion.span
                variants={glowVariants}
                initial="initial"
                animate="animate"
                className="text-yellow-500"
              >
                Collect NFTs
              </motion.span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10">
            The most trusted marketplace for crypto collectibles and
            non-fungible tokens
          </p>
          <div className="flex flex-wrap gap-6">
            <button className="px-10 py-4 rounded-2xl highlight-bg text-black font-bold text-lg hover:opacity-90 transition-opacity">
              Start Exploring
            </button>
            <button className="px-10 py-4 rounded-2xl bg-black dark:bg-white text-white dark:text-black font-bold text-lg hover:opacity-90 transition-opacity">
              Create NFT
            </button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-yellow-fluor/10 to-transparent opacity-50"></div>
      </div>
    </section>
  );
};

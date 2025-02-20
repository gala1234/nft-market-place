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

  return (
    <section className="relative min-h-[80vh] mb-24 overflow-hidden">
      {/* Particle effect background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute h-full w-full">
          {particles.map((particle, index) => (
            <motion.div
              key={index}
              className="absolute h-1 w-1 rounded-full"
              initial={{
                x: `${particle.initialX}%`,
                y: `${particle.initialY}%`,
                opacity: 0.2,
                scale: 1,
              }}
              animate={{
                x: `${particle.targetX}%`,
                y: `${particle.targetY}%`,
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 2, 1],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-[1248px] mx-auto bg-transparent rounded-2xl flex min-h-[80vh] flex-col justify-center p-12 sm:p-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[800px] bg-dark backdrop-blur-sm rounded-3xl  space-y-6"
        >
          <div className="backdrop-blur-sm">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-left">
              <span
                className="text-gradient block"
                style={{
                  backgroundSize: "200% 200%",
                  animation: "gradient 15s ease infinite",
                  backgroundPosition: "left",
                }}
              >
                Discover Rare Digital Art
              </span>
              <span
                className="text-gradient mt-2 block"
                style={{
                  backgroundSize: "200% 200%",
                  animation: "gradient 15s ease infinite",
                  backgroundPosition: "left",
                }}
              >
                and Collect NFTs
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 text-left">
              The most trusted marketplace for crypto collectibles and
              non-fungible tokens
            </p>
            <div className="flex flex-wrap gap-6">
              <button className="px-10 py-4 rounded-2xl bg-accent text-primary font-bold text-lg">
                Start Exploring
              </button>
              <button className="px-10 py-4 rounded-2xl bg-accent text-primary font-bold text-lg">
                Create NFT
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

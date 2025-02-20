"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./buttons/Button";

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
      {/* Mobile background image */}
      <div className="md:hidden absolute inset-0 w-screen h-screen left-0">
        <Image
          src="/shapes.png"
          alt="Shapes Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="absolute left-0 w-screen h-screen object-cover"
        />
      </div>

      {/* Particle effect background - visible only on desktop */}
      <div className="hidden md:block absolute inset-0 opacity-20">
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
      <div className="relative z-10 max-w-[1248px] mx-auto rounded-2xl min-h-[80vh] p-6 sm:p-16 flex items-center">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-transparent-secondary backdrop-blur-xl rounded-3xl ">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 space-y-6 p-6"
          >
            <div className="">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-left">
                <span
                  className="text-primary block"
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
              <p className="text-xl md:text-2xl text-secondary mb-10 text-left">
                The most trusted marketplace for crypto collectibles and
                non-fungible tokens
              </p>
              <div className="flex flex-wrap gap-6">
                <Button variant="primary">Start Exploring</Button>
                <Button variant="secondary">Create NFT</Button>
              </div>
            </div>
          </motion.div>

          {/* Shapes image - visible only on desktop */}
          <div className="hidden md:block w-full md:w-1/2">
            <Image
              src="/shapes.png"
              alt="Shapes Background"
              width={500}
              height={500}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';

export const Hero = () => {
  return (
    <section className="mb-24">
      <div className="relative rounded-3xl overflow-hidden bg-gray-50 dark:bg-gray-900 p-12 md:p-16">
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black dark:text-white leading-tight">
            Discover Rare Digital Art and{" "}
            <span className="highlight-text">Collect NFTs</span>
          </h1>
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
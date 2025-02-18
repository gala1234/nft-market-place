import React from 'react';

export const TrendingCollections = () => {
  return (
    <section className="mb-24">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-bold text-black dark:text-white">
          Trending Collections
        </h2>
        <a
          href="#"
          className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-medium"
        >
          View All →
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="group relative bg-white dark:bg-gray-900 rounded-2xl p-4 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
          >
            <div className="aspect-square rounded-xl bg-gray-100 dark:bg-gray-800 mb-4 overflow-hidden">
              <div className="w-full h-full bg-gradient-primary group-hover:scale-110 transition-transform duration-500"></div>
            </div>
            <div className="flex items-center justify-between p-2">
              <div>
                <h3 className="font-bold text-black dark:text-white group-hover:text-yellow-fluor transition-colors">
                  Collection #{i + 1}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Floor: 0.5 ETH
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-green-500">+24.5%</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
import React from "react";
import { H2 } from "./texts/H2";
import { ArrowButton } from "./buttons";
import { TrendingCollectionCard } from "./cards/TrendingCollectionCard";

export const TrendingCollections = () => {
  return (
    <section className="mb-24 p-4 md:p-0">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-10">
        <H2>Trending Collections</H2>
        <ArrowButton href="/collections" text="View All" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[...Array(4)].map((_, i) => (
          <TrendingCollectionCard key={i} collectionNumber={i + 1} />
        ))}
      </div>
    </section>
  );
};

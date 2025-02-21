import React from "react";
import { H2 } from "./texts/H2";
import { ArrowButton } from "./buttons";
import { LiveAuctionsCard } from "./cards/LiveAuctionsCard";

export const LiveAuctions = () => {
  return (
    <section className="mb-16 px-4 md:px-0">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-10">
        <H2>Live Auctions</H2>
        <ArrowButton href="/live-auctions" text="View All" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <LiveAuctionsCard key={i} nftNumber={i + 1} />
        ))}
      </div>
    </section>
  );
};

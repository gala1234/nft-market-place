"use client";
import React from "react";
import { H1, P } from "@/components/texts";
import { CollectibleCard } from "@/components/cards/CollectibleCard";

export default function CollectionsPage() {
  return (
    <div className="max-w-[1248px] mx-auto px-4 md:px-0 py-16">
      <div className="mb-10">
        <H1>Your NFT Collections</H1>
        <P>Discover and manage your unique digital collectibles</P>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <CollectibleCard
            key={i}
            image="/shapes.png"
            title={`Collection #${i + 1}`}
            subtitle="By Artist Name"
            status={i % 2 === 0 ? "For Sale" : "Not Listed"}
            leftLabel="Floor Price"
            leftValue={`${(0.5 + i * 0.1).toFixed(1)} ETH`}
            rightLabel="24h Volume"
            rightValue={`${(2 + i * 0.5).toFixed(1)} ETH`}
            actionLabel="View Collection"
            onAction={() => console.log(`View collection ${i + 1}`)}
          />
        ))}
      </div>
    </div>
  );
}

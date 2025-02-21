"use client";
import React from "react";
import { H2 } from "@/components/texts/H2";
import { CollectibleCard } from "@/components/cards/CollectibleCard";

export default function CollectiblesPage() {
  return (
    <div className="max-w-[1248px] mx-auto px-6 py-24">
      <div className="mb-10">
        <H2>Your NFT Collections</H2>
        <p className="text-secondary mt-2">
          Discover and manage your unique digital collectibles
        </p>
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

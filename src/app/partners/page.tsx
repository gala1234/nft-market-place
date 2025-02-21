"use client";
import React from "react";
import { H2 } from "@/components/texts/H2";
import { CollectibleCard } from "@/components/cards/CollectibleCard";

interface Partner {
  id: number;
  name: string;
  description: string;
  logo: string;
  website: string;
  type: string;
}

const partners: Partner[] = [
  {
    id: 1,
    name: "CryptoVault",
    description:
      "Leading digital asset security provider for NFT storage and protection",
    logo: "/shapes.png", // Using placeholder image
    website: "https://example.com",
    type: "Security Partner",
  },
  {
    id: 2,
    name: "ArtBlock",
    description:
      "Premier platform for generative art and creative NFT projects",
    logo: "/shapes.png", // Using placeholder image
    website: "https://example.com",
    type: "Creative Partner",
  },
  {
    id: 3,
    name: "MetaChain",
    description:
      "Blockchain infrastructure provider ensuring fast and secure transactions",
    logo: "/shapes.png", // Using placeholder image
    website: "https://example.com",
    type: "Technology Partner",
  },
  {
    id: 4,
    name: "DigitalGallery",
    description: "Virtual exhibition space for NFT artists and collectors",
    logo: "/shapes.png", // Using placeholder image
    website: "https://example.com",
    type: "Gallery Partner",
  },
  {
    id: 5,
    name: "CryptoInsure",
    description: "Insurance solutions for digital assets and NFT collections",
    logo: "/shapes.png", // Using placeholder image
    website: "https://example.com",
    type: "Insurance Partner",
  },
  {
    id: 6,
    name: "TokenPay",
    description: "Secure payment gateway for NFT transactions",
    logo: "/shapes.png", // Using placeholder image
    website: "https://example.com",
    type: "Payment Partner",
  },
];

export default function PartnersPage() {
  return (
    <div className="max-w-[1248px] mx-auto px-6 py-24">
      <div className="mb-12">
        <H2>Our Partners</H2>
        <p className="text-secondary mt-2">
          Collaborating with industry leaders to bring you the best NFT
          experience
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {partners.map((partner) => (
          <CollectibleCard
            key={partner.id}
            image={partner.logo}
            title={partner.name}
            subtitle={partner.type}
            description={partner.description}
            actionLabel="Visit Website"
            onAction={() =>
              window.open(partner.website, "_blank", "noopener,noreferrer")
            }
          />
        ))}
      </div>
    </div>
  );
}

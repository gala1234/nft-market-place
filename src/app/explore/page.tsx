"use client";

import React, { useState } from "react";
import Image from "next/image";
import { P, H1 } from "@/components/texts";
import { SearchBar } from "@/components/SearchBar";

interface NFTCollection {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: string;
  creator: string;
}

const mockCollections: NFTCollection[] = [
  {
    id: "1",
    name: "Abstract Dimensions",
    description: "A collection of abstract digital art pieces",
    imageUrl: "/shapes.png",
    price: "2.5 ETH",
    creator: "Artist One",
  },
  {
    id: "2",
    name: "Pixel Worlds",
    description: "Pixelated landscapes and characters",
    imageUrl: "/shapes.png",
    price: "1.8 ETH",
    creator: "Artist Two",
  },
  // Add more mock collections as needed
];

const sortOptions = [
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Latest", value: "latest" },
];

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSort, setSelectedSort] = useState("latest");

  console.log({ searchQuery });

  return (
    <main className="min-h-screen py-16 px-4 md:px-0">
      <div className="max-w-[1248px] mx-auto">
        <div className="mb-8">
          <H1>Explore Collections</H1>
          <P>
            Discover unique NFT collections from talented artists around the
            world.
          </P>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="w-full md:w-96">
            <SearchBar
              className="w-full"
              onSearch={(value) => setSearchQuery(value)}
              //   value={searchQuery}
            />
          </div>
          <select
            value={selectedSort}
            onChange={(e) => setSelectedSort(e.target.value)}
            className="px-4 py-2 rounded-lg bg-secondary text-link border border-gray-200 dark:border-gray-700"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCollections.map((collection) => (
            <div
              key={collection.id}
              className="bg-secondary text-primary rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-transparent dark:border-gray-800"
            >
              <div className="relative pb-[100%]">
                <Image
                  src={collection.imageUrl}
                  alt={collection.name}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">
                  {collection.name}
                </h3>
                <p className="text-secondary mb-4">{collection.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold">
                    {collection.price}
                  </span>
                  <span className="text-secondary">{collection.creator}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

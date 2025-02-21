import React from "react";
import Image from "next/image";
import { H2, P } from "@/components/texts";

interface NFTDetails {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  creator: string;
  price: string;
  owner: string;
  createdAt: string;
  history: {
    type: string;
    from: string;
    to: string;
    price: string;
    date: string;
  }[];
}

// Mock data for demonstration
const mockNFTDetails: NFTDetails = {
  id: "1",
  title: "Abstract Digital Art #123",
  description:
    "A unique piece of digital art that explores the boundaries of creativity and technology.",
  imageUrl: "/shapes.png",
  creator: "0x1234...5678",
  price: "2.5",
  owner: "0x8765...4321",
  createdAt: "2023-12-01",
  history: [
    {
      type: "Mint",
      from: "0x0000...0000",
      to: "0x1234...5678",
      price: "1.0",
      date: "2023-12-01",
    },
    {
      type: "Transfer",
      from: "0x1234...5678",
      to: "0x8765...4321",
      price: "2.5",
      date: "2023-12-15",
    },
  ],
};

export default async function NFTDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  console.log("NFT ID:", id);

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-[1248px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Image */}
          <div className="space-y-6">
            <div className="aspect-square relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-900">
              <Image
                src={mockNFTDetails.imageUrl}
                alt={mockNFTDetails.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-primary mb-4">
                {mockNFTDetails.title}
              </h1>
              <P>{mockNFTDetails.description}</P>
            </div>

            {/* Creator and Owner Info */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-secondary">Creator</span>
                <span className="font-medium">{mockNFTDetails.creator}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-secondary">Owner</span>
                <span className="font-medium">{mockNFTDetails.owner}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-secondary">Current Price</span>
                <span className="font-bold text-xl text-primary">
                  {mockNFTDetails.price} ETH
                </span>
              </div>
            </div>

            {/* Action Button */}
            <button className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/80 transition-colors">
              Purchase NFT
            </button>

            {/* History Section */}
            <div className="space-y-4">
              <H2>Transaction History</H2>
              <div className="space-y-2">
                {mockNFTDetails.history.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-800"
                  >
                    <div className="space-y-1">
                      <div className="font-medium">{item.type}</div>
                      <div className="text-sm text-secondary">
                        From: {item.from}
                      </div>
                      <div className="text-sm text-secondary">
                        To: {item.to}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-primary">
                        {item.price} ETH
                      </div>
                      <div className="text-sm text-secondary">{item.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

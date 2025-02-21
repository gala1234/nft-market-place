import React from "react";

interface LiveAuctionsCardProps {
  nftNumber: number;
  artistName?: string;
  timeLeft?: string;
  currentBid?: string;
}

export const LiveAuctionsCard: React.FC<LiveAuctionsCardProps> = ({
  nftNumber,
  artistName = "Artist Name",
  timeLeft = "12h left",
  currentBid = "2.5 ETH",
}) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-secondary backdrop-blur-md p-6 hover:shadow-2xl hover:bg-transparent-accent transition-all duration-300 border border-white/5">
      <div className="aspect-video rounded-lg bg-gradient-secondary mb-4 group-hover:scale-105 transition-transform duration-300"></div>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-semibold text-accent">NFT #{nftNumber}</h3>
          <p className="text-sm text-secondary">By {artistName}</p>
        </div>
        <div className="px-3 py-1 rounded-full bg-transparent-accent text-accent text-sm">
          {timeLeft}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-secondary">Current Bid</p>
        <p className="font-semibold text-accent">{currentBid}</p>
      </div>
    </div>
  );
};
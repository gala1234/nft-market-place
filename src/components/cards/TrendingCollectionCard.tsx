import React from "react";

interface TrendingCollectionCardProps {
  collectionNumber: number;
  floorPrice?: string;
  percentageChange?: string;
  className?: string;
}

export const TrendingCollectionCard: React.FC<TrendingCollectionCardProps> = ({
  collectionNumber,
  floorPrice = "0.5 ETH",
  percentageChange = "+24.5%",
  className = "",
}) => {
  return (
    <div
      className={`group relative bg-transparent rounded-2xl p-4 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 ${className}`}
    >
      <div className="aspect-square rounded-xl bg-primary mb-4 overflow-hidden">
        <div className="w-full h-full bg-gradient-tertiary group-hover:scale-110 transition-transform duration-500"></div>
      </div>
      <div className="flex items-center justify-between p-2">
        <div>
          <h3 className="font-bold text-link transition-colors">
            Collection #{collectionNumber}
          </h3>
          <p className="text-sm text-secondary">Floor: {floorPrice}</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium text-accent">{percentageChange}</p>
        </div>
      </div>
    </div>
  );
};

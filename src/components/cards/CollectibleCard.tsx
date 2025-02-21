import React from "react";
import Image from "next/image";

interface CardProps {
  image?: string;
  title: string;
  subtitle?: string;
  description?: string;
  status?: string;
  leftLabel?: string;
  leftValue?: string;
  rightLabel?: string;
  rightValue?: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

export const CollectibleCard: React.FC<CardProps> = ({
  image,
  title,
  subtitle,
  description,
  status,
  leftLabel,
  leftValue,
  rightLabel,
  rightValue,
  actionLabel,
  onAction,
  className = "",
}) => {
  return (
    <div
      className={`group bg-transparent rounded-2xl p-4 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 ${className}`}
    >
      {image && (
        <div className="aspect-square rounded-xl bg-primary mb-4 overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      )}
      <div className="p-2">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-bold text-link transition-colors">{title}</h3>
            {subtitle && <p className="text-sm text-secondary">{subtitle}</p>}
          </div>
          {status && (
            <div className="px-3 py-1 rounded-full bg-transparent-accent text-accent text-sm">
              {status}
            </div>
          )}
        </div>

        {description && <p className="text-secondary mb-6">{description}</p>}

        {(leftLabel || rightLabel) && (
          <div className="flex justify-between items-center mb-3">
            {leftLabel && (
              <div>
                <p className="text-sm text-secondary">{leftLabel}</p>
                <p className="font-medium text-primary">{leftValue}</p>
              </div>
            )}
            {rightLabel && (
              <div className="text-right">
                <p className="text-sm text-secondary">{rightLabel}</p>
                <p className="font-medium text-primary">{rightValue}</p>
              </div>
            )}
          </div>
        )}

        {actionLabel && (
          <button
            className="w-full py-2 px-4 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors"
            onClick={onAction}
          >
            {actionLabel}
          </button>
        )}
      </div>
    </div>
  );
};

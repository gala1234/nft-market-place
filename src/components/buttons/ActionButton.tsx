import React from "react";

interface ActionButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  onClick,
  className = "",
}) => {
  return (
    <button
      className={`w-full py-2 px-4 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
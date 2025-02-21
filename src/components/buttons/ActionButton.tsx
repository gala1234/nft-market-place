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
      className={`w-full py-2 px-4 bg-accent text-primary font-medium rounded-lg hover:bg-accent/90 dark:bg-accent dark:text-white dark:hover:bg-accent/80 transition-colors ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
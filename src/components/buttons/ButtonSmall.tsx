import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const ButtonSmall: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-2.5 text-link bg-secondary rounded-full font-medium duration-200 hover:opacity-70 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
};

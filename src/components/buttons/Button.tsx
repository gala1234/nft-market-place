"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  onClick,
  className = "",
}) => {
  const baseStyles =
    "px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 cursor-pointer";

  const variantStyles = {
    primary: "bg-accent text-primary hover:opacity-80 ",
    secondary: "bg-primary text-link",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

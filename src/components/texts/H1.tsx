import React from "react";

interface H1Props {
  children: React.ReactNode;
  className?: string;
}

export const H1: React.FC<H1Props> = ({ children, className = "" }) => {
  return (
    <h1 className={`text-4xl font-bold mb-8 text-primary ${className}`}>
      {children}
    </h1>
  );
};
import React from "react";

interface H2Props {
  children: React.ReactNode;
  className?: string;
}

export const H2: React.FC<H2Props> = ({ children, className = "" }) => {
  return (
    <h2 className={`text-3xl font-bold mb-8 text-primary ${className}`}>
      {children}
    </h2>
  );
};

import React from "react";

interface PProps {
  children: React.ReactNode;
  className?: string;
}

export const P: React.FC<PProps> = ({ children, className = "" }) => {
  return <p className={`text-secondary mt-2 ${className}`}>{children}</p>;
};

import React from "react";
import Link from "next/link";

interface ArrowButtonProps {
  text: string;
  href: string;
  className?: string;
}

export const ArrowButton: React.FC<ArrowButtonProps> = ({
  text,
  href,
  className = "",
}) => {
  return (
    <Link
      href={href}
      className={`text-link font-medium ${className}`}
    >
      {text} →
    </Link>
  );
};
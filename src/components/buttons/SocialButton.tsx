import React from "react";
import Link from "next/link";

interface SocialButtonProps {
  platform: string;
  href: string;
  className?: string;
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  platform,
  href,
  className = "",
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-primary hover:bg-accent hover:text-white transition-all duration-300 font-medium ${className}`}
    >
      {platform}
    </Link>
  );
};
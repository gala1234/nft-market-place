import React from "react";

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  isOpen,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="md:hidden p-2 text-black dark:text-white"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <div className="w-6 h-6 relative">
        <span
          className={`absolute left-0 h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
            isOpen ? "rotate-45 translate-y-2.5" : "translate-y-0.5"
          }`}
        />
        <span
          className={`absolute left-0 h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-0" : "translate-y-2.5"
          }`}
        />
        <span
          className={`absolute left-0 h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
            isOpen ? "-rotate-45 translate-y-2.5" : "translate-y-4.5"
          }`}
        />
      </div>
    </button>
  );
};

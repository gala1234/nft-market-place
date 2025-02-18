import React from "react";
import { navigationLinks } from "./constants";
import { SearchBar } from "../SearchBar";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <div
      className={`fixed inset-0 z-40 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out md:hidden`}
    >
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      <div className="absolute right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-xl">
        <div className="flex flex-col p-6 mt-16">
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="py-3 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <div className="mb-8">
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
};

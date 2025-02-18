import React from "react";
import { navigationLinks } from "./constants";
import { SearchBar } from "../SearchBar";
import { Button } from "../buttons/Button";
import { HamburgerButton } from "../buttons/HamburgerButton";

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
      className={`fixed inset-0 transform ${isOpen ? "translate-x-0 h-screen" : "translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}
    >
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-64 bg-white/90 dark:bg-gray-900/90 shadow-xl backdrop-blur-sm">
        <div className="absolute top-4 right-4">
          <HamburgerButton isOpen={isOpen} onClick={onClose} />
        </div>
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
          <div className="my-8">
            <div className="py-3">
              <Button onClick={() => console.log("Connect wallet clicked")}>
                Connect wallet
              </Button>
            </div>
            <div className="py-3">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

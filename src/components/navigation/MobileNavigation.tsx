import React from "react";
import { navigationLinks } from "./constants";
import { SearchBar } from "../SearchBar";
import { ButtonSmall } from "../buttons/ButtonSmall";
import { HamburgerButton } from "../buttons/HamburgerButton";
import { ThemeToggle } from "../buttons/ThemeToggle";

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
      className={`fixed inset-0 transform ${
        isOpen ? "translate-x-0 h-screen" : "translate-x-full"
      } transition-transform duration-300 ease-in-out md:hidden`}
    >
      <div
        className="fixed inset-0 bg-secondary bg-opacity-50"
        onClick={onClose}
      />
      <div className="fixed right-0 top-0 h-full w-64 bg-primary shadow-xl backdrop-blur-sm">
        <div className="absolute top-4 right-4">
          <HamburgerButton isOpen={isOpen} onClick={onClose} />
        </div>
        <div className="flex flex-col p-6 mt-16">
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="py-3 text-link font-medium"
              onClick={onClose}
            >
              {link.label}
            </a>
          ))}
          <div className="my-8">
            <div className="py-3">
              <ButtonSmall
                text="Connect wallet"
                onClick={() => {
                  console.log("Connect wallet clicked");
                  onClose();
                }}
              />
            </div>
            <div className="py-3">
              <SearchBar />
            </div>
            <div
              className="py-3 flex justify-start"
              onClick={() => {
                console.log("Connect wallet clicked");
                onClose();
              }}
            >
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

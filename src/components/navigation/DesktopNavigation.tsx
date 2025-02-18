import React from "react";
import { navigationLinks } from "./constants";
import { SearchBar } from "../SearchBar";
import { Button } from "../buttons/Button";

export const DesktopNavigation = () => {
  return (
    <div className="flex justify-between w-full">
      <div className="flex items-center space-x-12">
        <div className="text-2xl font-bold text-black dark:text-white">
          NFT Market
        </div>
        <div className="flex space-x-8">
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <SearchBar className="w-72" />
        <Button onClick={() => console.log("Connect wallet clicked")}>
          Connect wallet
        </Button>
      </div>
    </div>
  );
};

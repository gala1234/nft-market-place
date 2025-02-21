import React from "react";
import Link from "next/link";
import { navigationLinks } from "./constants";
import { SearchBar } from "../SearchBar";
import { ButtonSmall } from "../buttons/ButtonSmall";
import { ThemeToggle } from "../buttons/ThemeToggle";

export const DesktopNavigation = () => {
  return (
    <div className="flex justify-between w-full">
      <div className="flex items-center space-x-12">
        <Link href={"/"} className="text-2xl font-bold text-primary">
          NFT Market
        </Link>
        <div className="flex space-x-8">
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-link font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <SearchBar className="w-72" />
        <ThemeToggle />
        <ButtonSmall
          text="Connect wallet"
          onClick={() => console.log("Connect wallet clicked")}
        />
      </div>
    </div>
  );
};

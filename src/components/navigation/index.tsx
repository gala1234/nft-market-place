"use client";
import React, { useState, useEffect } from "react";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";
import { HamburgerButton } from "../buttons/HamburgerButton";

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/55 dark:bg-black/55 backdrop-blur-md py-4 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-[1248px] mx-auto px-4 flex justify-between items-center">
        {isMobile ? (
          <div className="flex justify-between items-center w-full px-4">
            <div className="text-2xl font-bold text-black dark:text-white">
              NFT Market
            </div>
            <HamburgerButton
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
            <MobileNavigation
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            />
          </div>
        ) : (
          <DesktopNavigation />
        )}
      </div>
    </nav>
  );
};

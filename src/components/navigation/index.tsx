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
    <nav className="flex justify-between items-center mb-12 bg-white dark:bg-black py-4 border-b border-gray-100 dark:border-gray-800">
      {!isMobile && <DesktopNavigation />}
      {isMobile && (
        <>
          <div className="text-2xl font-bold text-black dark:text-white">
            NFT Market
          </div>
          <div className="fixed top-10 right-4 z-50">
            <HamburgerButton
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
          <MobileNavigation
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        </>
      )}
    </nav>
  );
};

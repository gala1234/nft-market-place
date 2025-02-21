"use client";

import React from "react";
import Link from "next/link";
import { SocialButton } from "@/components/buttons";
import { footerLinks, socialLinks } from "@/constants/footerLinks";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-transparent-secondary backdrop-blur-xl border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-[1248px] mx-auto p-4 md:p-0 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="text-2xl font-bold text-primary">NFT Market</div>
            <p className="text-secondary text-sm max-w-xs">
              The world&apos;s largest digital marketplace for crypto
              collectibles and non-fungible tokens.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <SocialButton
                  key={social.name}
                  platform={social.name}
                  {...social}
                  className="text-sm bg-transparent-accent hover:bg-accent hover:text-white transition-all duration-300 px-4 py-2 rounded-full"
                />
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-6">
              <h3 className="text-lg font-bold text-primary">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-link">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright Section */}
        <div className="pt-8 border-t border-gray-100 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-secondary text-sm">
              © {currentYear} NFT Market. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-link">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-link">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

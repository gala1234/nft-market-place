"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { footerLinks, socialLinks } from "@/constants/footerLinks";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-transparent-secondary backdrop-blur-xl border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-[1248px] mx-auto px-6 py-12">
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
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                  aria-label={social.name}
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={24}
                    height={24}
                  />
                </a>
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

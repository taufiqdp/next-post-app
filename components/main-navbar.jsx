"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#0e0e11] border-b border-b-gray-600 text-gray-300 fixed top-0 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold">Logo</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 font-semibold">
              <Link
                href="/feed"
                className="px-3 py-2 rounded-3xl text-gray-300 hover:bg-gray-100 hover:text-[#0e0e11]"
              >
                Feed
              </Link>
              <Link
                href="/new-post"
                className="px-3 py-2 rounded-3xl text-gray-300 hover:bg-gray-100 hover:text-[#0e0e11]"
              >
                New Post
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/feed"
              className="block px-3 py-2 rounded-md text-base font-medium"
            >
              Feed
            </Link>
            <Link
              href="/new-post"
              className="block px-3 py-2 rounded-md text-base font-medium"
            >
              New Post
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

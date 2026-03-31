"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "@/components/icons";
import { NAV_ITEMS } from "@/constants/navigation";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md p-4 border-b-2 border-gray-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo/Name with Subtitle */}
        <Link href="/" className="group">
          <div className="flex flex-col">
            <h1 className="text-xl font-black text-black tracking-tighter group-hover:text-blue-600 transition-colors">
              Dheyan Pino
            </h1>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1">
          {NAV_ITEMS.map(({ name, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "px-4 py-2 font-bold text-sm rounded-xl transition-all duration-200",
                  isActive
                    ? "bg-gray-100 text-black shadow-inner"
                    : "text-gray-500 hover:text-black hover:bg-gray-50"
                )}
              >
                {name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-xl bg-gray-50 text-black border-2 border-gray-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-1 bg-white p-4 rounded-2xl shadow-2xl border-2 border-gray-50 animate-in slide-in-from-top-4 duration-300">
          {NAV_ITEMS.map(({ name, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "block w-full text-left px-4 py-3 font-bold text-lg rounded-xl transition-all",
                  isActive
                    ? "bg-black text-white"
                    : "text-gray-600 hover:bg-gray-50 hover:text-black"
                )}
                onClick={() => setIsOpen(false)}
              >
                {name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};

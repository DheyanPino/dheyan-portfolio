"use client";
import React from "react";
import { Coffee } from "@/components/icons";

export const ThemeToggle = () => {
  return (
    <button className="p-2 rounded-full border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,0.8)] bg-white hover:bg-gray-100 transition-all">
      <Coffee className="w-6 h-6" />
    </button>
  );
};

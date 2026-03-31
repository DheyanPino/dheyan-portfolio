"use client";
import React from "react";
import Image from "next/image";
import { Coffee, Code } from "@/components/icons";
import { Button } from "@/ui/button";

interface HeroBannerProps {
  scrollToSection: (slug: string) => void;
}

export const HeroBanner = ({ scrollToSection }: HeroBannerProps) => (
  <section
    id="hero"
    className="min-h-[70vh] flex items-center justify-center py-20 md:py-32 text-center bg-blue-200 border-b-4 border-black"
  >
    <div className="max-w-4xl mx-auto px-4">
      <Image
        src="/media/profile.jpg"
        alt="Dheyan's Profile Picture"
        width={160}
        height={160}
        className="w-40 h-40 rounded-full object-cover mx-auto mb-10 border-8 border-black shadow-[10px_10px_0px_rgba(0,0,0,0.8)] ring-4 ring-white"
        priority
      />
      <h2 className="text-5xl md:text-7xl font-extrabold text-indigo-900 mb-6 drop-shadow-xl">
        Hi! I’m <span className="text-red-600">Dheyan</span>, a Frontend
        Fun-gineer!
      </h2>
      <p className="text-xl md:text-3xl font-semibold text-gray-700 mb-10">
        I bring joy to the web with colorful, responsive, and highly interactive
        user interfaces.
      </p>
      <Button
        size="xl"
        variant="primary"
        onClick={() => scrollToSection("portfolio")}
      >
        See My Colorful Work!
      </Button>
      <div className="mt-12 flex justify-center space-x-8">
        <Coffee className="w-12 h-12 text-orange-500 animate-bounce stroke-2" />
        <Code className="w-12 h-12 text-green-500 animate-spin-slow stroke-2" />
      </div>
    </div>
  </section>
);

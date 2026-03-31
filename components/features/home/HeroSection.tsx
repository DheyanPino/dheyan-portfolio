import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Coffee, Code } from "@/components/icons";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center py-20 px-4 text-center bg-gradient-to-b from-blue-50 to-white dark:from-sky-950 dark:to-gray-950">
        <div className="max-w-4xl mx-auto">
          <Image
            src="/media/profile.jpg"
            alt="Dheyan Pino"
            width={192}
            height={192}
            className="w-48 h-48 rounded-full object-cover mx-auto mb-10 border-8 border-white dark:border-gray-800 shadow-2xl ring-4 ring-blue-100 dark:ring-sky-900"
            priority
          />
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-gray-50 mb-6 tracking-tight">
            Hi! I’m <span className="text-blue-600 dark:text-blue-400">Dheyan</span>, a Frontend
            Fun-gineer!
          </h1>
          <p className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            I specialize in crafting colorful, responsive, and highly interactive
            user interfaces that make the web a more joyful place to be.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/projects">
              <Button size="xl" variant="primary">
                View My Projects
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="xl" variant="yellow">
                Get in Touch
              </Button>
            </Link>
          </div>
          <div className="mt-16 flex justify-center gap-12 opacity-50">
            <Coffee className="w-12 h-12 text-orange-500 animate-bounce" />
            <Code className="w-12 h-12 text-blue-500 animate-pulse" />
          </div>
        </div>
      </section>
  );
}

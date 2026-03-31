"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Coffee, Code, ChevronRight } from "@/components/icons";
import { Button } from "@/ui/button";
import { PORTFOLIO_PROJECTS } from "@/constants/project";
import { ProjectCard } from "@/components/common/ProjectCards";

export default function HomePage() {
  // Get only the first 2 projects for the "Recent" section
  const recentProjects = PORTFOLIO_PROJECTS.slice(0, 2);

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex flex-col items-center justify-center py-20 px-4 text-center bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <Image
            src="/media/profile.jpg"
            alt="Dheyan Pino"
            width={192}
            height={192}
            className="w-48 h-48 rounded-full object-cover mx-auto mb-10 border-8 border-white shadow-2xl ring-4 ring-blue-100"
            priority
          />
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Hi! I’m <span className="text-blue-600">Dheyan</span>, a Frontend
            Fun-gineer!
          </h1>
          <p className="text-xl md:text-2xl font-medium text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
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
          <div className="mt-16 flex justify-center space-x-12 opacity-50">
            <Coffee className="w-12 h-12 text-orange-500 animate-bounce" />
            <Code className="w-12 h-12 text-blue-500 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-black text-black mb-2">Recent Work</h2>
            <p className="text-lg text-gray-500">A selection of my latest digital masterpieces.</p>
          </div>
          <Link href="/projects" className="hidden md:flex items-center text-blue-600 font-bold hover:underline">
            View All Projects <ChevronRight className="w-5 h-5 ml-1" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {recentProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link href="/projects">
            <Button variant="secondary" className="w-full">
              View All Projects
            </Button>
          </Link>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="bg-black py-20 text-white rounded-[3rem] mx-4 overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
            Have a brilliant idea? <br />
            Let&apos;s turn it into a vibrant reality!
          </h2>
          <Link href="/contact">
            <Button size="xl" variant="yellow" className="!rounded-full px-12">
              Start a Conversation
            </Button>
          </Link>
        </div>
        {/* Background Decorative element */}
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-30"></div>
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-pink-600 rounded-full blur-[100px] opacity-30"></div>
      </section>
    </div>
  );
}

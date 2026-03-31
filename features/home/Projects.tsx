"use client";
import React from "react";
import { PORTFOLIO_PROJECTS } from "@/constants/project";
import { ProjectCard } from "@/components/common/ProjectCards";

export const Projects = () => (
  <section id="portfolio" className="py-20 bg-pink-100 border-b-4 border-black">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-extrabold text-red-700 text-center mb-12 border-b-4 border-dashed border-black pb-4">
        ✨ My Featured Masterpieces ✨
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {PORTFOLIO_PROJECTS.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <div className="text-center mt-12">
        <p className="text-xl font-semibold text-gray-700 p-4 bg-white inline-block rounded-xl border-4 border-dashed border-gray-400">
          Want to collaborate? Let&apos;s turn your static ideas into dynamic digital
          art!
        </p>
      </div>
    </div>
  </section>
);

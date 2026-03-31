import React from "react";
import { ProjectsSection } from "@/components/features/projects/ProjectsSection";

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-5xl md:text-6xl font-black text-black dark:text-gray-50 tracking-tight">My Projects</h1>
        <p className="text-xl text-gray-500 dark:text-gray-400 font-medium">A collection of my work showcasing my skills and experience in web development.</p>
      </div>
      <ProjectsSection />
    </div>
  );
}

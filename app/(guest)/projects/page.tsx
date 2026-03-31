"use client";
import React, { useState, useMemo } from "react";
import { Search } from "@/components/icons";
import { PORTFOLIO_PROJECTS } from "@/constants/project";
import { ProjectCard } from "@/components/common/ProjectCards";

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<"All" | "Website" | "Web App">("All");

  const categories: ("All" | "Website" | "Web App")[] = ["All", "Website", "Web App"];

  const filteredProjects = useMemo(() => {
    return PORTFOLIO_PROJECTS.filter((p) => {
      const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || 
                          p.tech.some(t => t.toLowerCase().includes(search.toLowerCase()));
      const matchesCategory = activeCategory === "All" || p.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-5xl md:text-6xl font-black text-black tracking-tight">My Projects</h1>
        <p className="text-xl text-gray-500 font-medium">A collection of my work showcasing my skills and experience in web development.</p>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        {/* Search Bar */}
        <div className="relative group">
           <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-black transition-colors" />
           <input 
             type="text" 
             placeholder="Search projects..."
             value={search}
             onChange={(e) => setSearch(e.target.value)}
             className="w-full pl-12 pr-4 py-4 rounded-2xl border-4 border-gray-50 bg-white shadow-xl focus:outline-none focus:border-black transition-all font-bold text-lg"
           />
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap items-center justify-center gap-3">
           {categories.map((cat) => (
             <button
               key={cat}
               onClick={() => setActiveCategory(cat)}
               className={`px-6 py-2 rounded-xl text-sm font-black transition-all border-4 shadow-md active:shadow-none active:translate-y-1
                 ${activeCategory === cat 
                   ? "bg-black text-white border-black" 
                   : "bg-white text-gray-500 border-gray-50 hover:border-gray-200"}`}
             >
               {cat === "All" ? "All" : cat + "s"}
             </button>
           ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-2xl font-black text-gray-400">No projects found for your search.</p>
        </div>
      )}
    </div>
  );
}

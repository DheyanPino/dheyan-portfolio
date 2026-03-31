"use client";
import React, { useState, useMemo } from "react";
import { Search } from "@/components/icons";
import { PORTFOLIO_PROJECTS } from "@/constants/project";
import { ProjectCard } from "@/components/common/ProjectCards";

export function ProjectsSection() {
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
    <>
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Search Bar */}
        <div className="relative group">
           <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-black dark:group-focus-within:text-white transition-colors" />
           <input 
             type="text" 
             placeholder="Search projects..."
             value={search}
             onChange={(e) => setSearch(e.target.value)}
             className="w-full pl-12 pr-4 py-4 rounded-2xl border-4 border-gray-50 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-xl focus:outline-none focus:border-black dark:focus:border-gray-500 transition-all font-bold text-lg text-black dark:text-white"
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
                   ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white" 
                   : "bg-white text-gray-500 border-gray-50 hover:border-gray-200 dark:bg-gray-900 dark:border-gray-800 dark:text-gray-400 dark:hover:border-gray-700"}`}
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
    </>
  );
}

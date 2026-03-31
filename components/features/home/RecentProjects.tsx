import React from "react";
import Link from "next/link";
import { ChevronRight } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/common/ProjectCards";
import { PORTFOLIO_PROJECTS } from "@/constants/project";

export function RecentProjects({
  dateFilter
}: {
  dateFilter?: string[];
}) {
  let recentProjects = PORTFOLIO_PROJECTS.slice(0, 2);
  
  if (dateFilter && dateFilter.length > 0) {
    const filterYear = dateFilter[0];
    recentProjects = PORTFOLIO_PROJECTS.filter(p => p.title.includes(filterYear)).slice(0, 2);
  }

  return (
    <section className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl font-black text-black dark:text-gray-50 mb-2">Recent Work</h2>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            {dateFilter && dateFilter.length > 0 
                ? `Showing work from ${dateFilter.join("/")}`
                : "A selection of my latest digital masterpieces."}
          </p>
        </div>
        <Link href="/projects" className="hidden md:flex items-center text-blue-600 dark:text-blue-400 font-bold hover:underline">
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
  );
}

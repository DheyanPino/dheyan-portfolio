import React from "react";
import { Cpu } from "@/components/icons";

export interface Project {
  title: string;
  description: string;
  link: string;
  isExternal: boolean;
  icon: React.ElementType;
  color: string;
  tech: string[];
  category: "Website" | "Web App";
  image?: string;
}

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    title: "FCFS Scheduling Simulator",
    description: "An interactive, visual simulator for the First-Come, First-Served (FCFS) CPU scheduling algorithm. Features a dynamic Gantt chart and real-time metric calculations.",
    link: "/projects/fcfs",
    isExternal: false,
    icon: Cpu,
    color: "bg-purple-600",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    category: "Web App",
  },
];

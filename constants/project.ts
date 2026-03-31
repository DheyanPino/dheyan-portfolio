import React from "react";
import { Cpu, Globe } from "@/components/icons";

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
    title: "Beyond AI Marketing Solution",
    description: "Beyond AI Marketing Solutions helps businesses grow with AI-powered social media management, strategic planning, and content creation—delivering smarter campaigns, measurable results, and seamless growth so clients can focus on what matters most.",
    link: "#",
    isExternal: true,
    icon: Globe,
    color: "bg-indigo-600",
    tech: ["NextJS", "ShadCN", "TailwindCSS"],
    category: "Website",
  },
  {
    title: "West Island Digital",
    description: "A professional website built to support women solopreneurs by showcasing Fractional Chief Digital Officer services that help create new revenue streams, automate business processes, and achieve sustainable growth without burnout.",
    link: "#",
    isExternal: true,
    icon: Globe,
    color: "bg-teal-600",
    tech: ["WordPress", "Divi", "PHP", "JavaScript"],
    category: "Website",
  },
  {
    title: "Sola Finance",
    description: "Developed a professional website for Sola Finance, showcasing mortgage services and Vicky Nikova's expertise. Built to inspire client trust, highlight tailored solutions, and guide first-time buyers and property investors with clarity.",
    link: "#",
    isExternal: true,
    icon: Globe,
    color: "bg-yellow-600",
    tech: ["WordPress", "ElementorPro", "PHP", "JavaScript"],
    category: "Website",
  },
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

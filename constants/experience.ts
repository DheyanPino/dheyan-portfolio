import React from "react";
import { Code, Cpu, Smartphone, Globe } from "@/components/icons";

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
  icon: React.ElementType;
}

export const WORK_EXPERIENCE: Experience[] = [
  {
    company: "Freelance / Self-Employed",
    role: "Full Stack Developer",
    duration: "2022 - Present",
    description: "Developing scalable, user-centric web applications for local and international clients. Focused on performance, accessibility, and modern tech stacks like Next.js and Tailwind CSS.",
    icon: Code,
  },
  {
    company: "Tech Solutions Inc.",
    role: "Frontend Developer Intern",
    duration: "2021 - 2022",
    description: "Assisted in building responsive UI components and integrating APIs for enterprise-grade management systems.",
    icon: Globe,
  },
];

export const TECH_STACK = [
  { name: "React", icon: Code, color: "text-blue-500" },
  { name: "Next.js", icon: Globe, color: "text-black" },
  { name: "TypeScript", icon: Cpu, color: "text-blue-600" },
  { name: "Tailwind CSS", icon: Smartphone, color: "text-teal-500" },
  { name: "Node.js", icon: Code, color: "text-green-600" },
  { name: "PostgreSQL", icon: Cpu, color: "text-indigo-600" },
];

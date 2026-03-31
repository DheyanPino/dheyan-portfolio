import React from "react";
import { type Project } from "@/constants/project";
import { Globe, ExternalLink } from "@/components/icons";
import { Button } from "@/ui/button";

export const ProjectCard: React.FC<Project> = ({
  title,
  description,
  link,
  isExternal,
  icon: Icon,
  color,
  tech,
  category,
}) => (
  <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl border-4 border-gray-50 flex flex-col group h-full">
    {/* Image Placeholder / Icon Area */}
    <div className={`h-64 ${color} relative flex items-center justify-center overflow-hidden`}>
      <div className="p-6 bg-white/20 backdrop-blur-md rounded-full border-4 border-white/30 shadow-2xl transform group-hover:scale-110 transition-transform duration-500">
        <Icon className="w-16 h-16 text-white drop-shadow-lg" />
      </div>
      <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/30 backdrop-blur-md border border-white/40 text-white text-xs font-black uppercase tracking-widest rounded-full shadow-lg">
        {category}
      </div>
    </div>

    {/* Content Area */}
    <div className="p-8 space-y-6 flex flex-col flex-grow">
      <h3 className="text-3xl font-black text-black leading-tight group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 font-medium leading-relaxed line-clamp-4">
        {description}
      </p>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-2 pt-2">
        {tech.map((t, i) => (
          <span
            key={i}
            className="text-[10px] font-black px-3 py-1 bg-gray-100 text-gray-700 rounded-full border border-gray-200 uppercase tracking-tighter"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="pt-6 mt-auto">
        <a
          href={link}
          target={isExternal ? "_blank" : "_self"}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="inline-block w-full"
        >
          <Button variant="secondary" className="w-full !rounded-xl text-md font-black flex items-center justify-center space-x-2 group/btn">
            <Globe className="w-5 h-5" />
            <span>Website</span>
            <ExternalLink className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
          </Button>
        </a>
      </div>
    </div>
  </div>
);

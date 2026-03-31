import React from "react";
import { HeroSection } from "@/components/features/home/HeroSection";
import { RecentProjects } from "@/components/features/home/RecentProjects";
import { QuickCTA } from "@/components/features/home/QuickCTA";

export default function HomePage() {
  return (
    <div className="space-y-20 pb-20">
      <HeroSection />
      <RecentProjects />
      <QuickCTA />
    </div>
  );
}

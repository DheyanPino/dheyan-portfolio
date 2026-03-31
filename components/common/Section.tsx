import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export const Section = ({ id, className, children }: SectionProps) => (
  <section
    id={id}
    className={cn("py-20 border-b-4 border-black", className)}
  >
    <div className="max-w-7xl mx-auto px-4">{children}</div>
  </section>
);

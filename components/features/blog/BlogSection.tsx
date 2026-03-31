import React from "react";
import { Coffee } from "@/components/icons";

export function BlogSection() {
  return (
    <>
      <div className="bg-white dark:bg-gray-950 p-12 rounded-[2.5rem] shadow-xl border-4 border-gray-50 dark:border-gray-900 space-y-6 max-w-lg mx-auto transform hover:scale-[1.02] transition-transform">
        <div className="flex justify-center">
           <div className="p-5 bg-yellow-100 dark:bg-yellow-900/30 rounded-full">
              <Coffee className="w-12 h-12 text-yellow-600 dark:text-yellow-500 animate-bounce" />
           </div>
        </div>
        <div className="space-y-2">
           <h2 className="text-2xl font-black text-black dark:text-white">No blog posts available yet.</h2>
           <p className="text-gray-500 dark:text-gray-400 font-bold">Check back soon for exciting new content!</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-30 select-none pointer-events-none">
         {[1, 2, 3].map(i => (
           <div key={i} className="h-40 bg-gray-100 dark:bg-gray-800 rounded-3xl border-4 border-dashed border-gray-200 dark:border-gray-700"></div>
         ))}
      </div>
    </>
  );
}

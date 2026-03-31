"use client";
import React from "react";
import { Coffee } from "@/components/icons";

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-32 text-center space-y-12">
      <div className="space-y-4">
        <h1 className="text-5xl md:text-6xl font-black text-black tracking-tight">Blogs</h1>
        <p className="text-xl text-gray-500 font-medium">Welcome to the blog section! Stay tuned for updates, articles, and insights.</p>
      </div>

      <div className="bg-white p-12 rounded-[2.5rem] shadow-xl border-4 border-gray-50 space-y-6 max-w-lg mx-auto transform hover:scale-[1.02] transition-transform">
        <div className="flex justify-center">
           <div className="p-5 bg-yellow-100 rounded-full">
              <Coffee className="w-12 h-12 text-yellow-600 animate-bounce" />
           </div>
        </div>
        <div className="space-y-2">
           <h2 className="text-2xl font-black text-black">No blog posts available yet.</h2>
           <p className="text-gray-500 font-bold">Check back soon for exciting new content!</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-30 select-none pointer-events-none">
         {[1, 2, 3].map(i => (
           <div key={i} className="h-40 bg-gray-100 rounded-3xl border-4 border-dashed border-gray-200"></div>
         ))}
      </div>
    </div>
  );
}

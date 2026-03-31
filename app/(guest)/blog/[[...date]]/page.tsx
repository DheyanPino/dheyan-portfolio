import React from "react";
import { BlogSection } from "@/components/features/blog/BlogSection";

// Note: This is an optional catch-all segment that routes both `/blog` and `/blog/2023/10`
export default async function BlogArchivePage({
  params,
}: {
  params: Promise<{ date?: string[] }>;
}) {
  const resolvedParams = await params;
  const dateFilter = resolvedParams.date || [];

  return (
    <div className="max-w-4xl mx-auto px-4 py-32 text-center space-y-12">
      <div className="space-y-4">
        <h1 className="text-5xl md:text-6xl font-black text-black dark:text-gray-50 tracking-tight">Blogs</h1>
        <p className="text-xl text-gray-500 dark:text-gray-400 font-medium">
            {dateFilter.length > 0 
                ? `Showing posts from ${dateFilter.join("/")}`
                : "Welcome to the blog section! Stay tuned for updates."}
        </p>
      </div>

      <BlogSection />
    </div>
  );
}

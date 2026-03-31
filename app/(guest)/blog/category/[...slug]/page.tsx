import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function CategoryCatchAllPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const resolvedParams = await params;
  const slugArray = resolvedParams.slug;

  return (
    <div className="max-w-4xl mx-auto px-4 py-32 text-center space-y-12">
      <div className="space-y-4">
        <h1 className="text-5xl md:text-6xl font-black text-black dark:text-gray-50 tracking-tight">
          Category Filtering
        </h1>
        <p className="text-xl text-gray-500 dark:text-gray-400 font-medium">
          You are viewing categories: <span className="text-blue-600 dark:text-blue-400 font-bold">{slugArray.join(" > ")}</span>
        </p>
      </div>

      <div className="bg-white dark:bg-gray-950 p-12 rounded-[2.5rem] shadow-xl border-4 border-gray-50 dark:border-gray-900 max-w-2xl mx-auto">
        <h2 className="text-2xl font-black text-black dark:text-white mb-4">Catch-All Route Active</h2>
        <p className="text-gray-500 dark:text-gray-400">
          This route handles deep paths like <code>/blog/category/tech/frontend</code> flawlessly.
        </p>
        <div className="mt-8 flex justify-center">
            <Link href="/blog">
              <Button size="lg" variant="primary">Back to Blog</Button>
            </Link>
        </div>
      </div>
    </div>
  );
}

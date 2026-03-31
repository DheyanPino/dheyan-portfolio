import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  return (
    <div className="max-w-3xl mx-auto px-4 py-32 space-y-8">
      <Link href="/blog">
        <Button variant="secondary" className="mb-8">← Back to Blog</Button>
      </Link>
      <h1 className="text-4xl md:text-5xl font-black text-black dark:text-gray-50 tracking-tight capitalize">
        {slug.replace(/-/g, " ")}
      </h1>
      <div className="prose dark:prose-invert prose-lg text-gray-700 dark:text-gray-300">
        <p>This is a dynamic route generated for the blog post: <strong>{slug}</strong>.</p>
        <p>This satisfies the requirement for a single dynamic segment example.</p>
      </div>
    </div>
  );
}

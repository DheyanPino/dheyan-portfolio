import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function QuickCTA() {
  return (
    <section className="bg-black dark:bg-gray-900 py-20 text-white rounded-[3rem] mx-4 overflow-hidden relative shadow-2xl">
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight text-white">
          Have a brilliant idea? <br />
          Let&apos;s turn it into a vibrant reality!
        </h2>
        <Link href="/contact">
          <Button size="xl" variant="yellow" className="!rounded-full px-12">
            Start a Conversation
          </Button>
        </Link>
      </div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-30"></div>
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-pink-600 rounded-full blur-[100px] opacity-30"></div>
    </section>
  );
}

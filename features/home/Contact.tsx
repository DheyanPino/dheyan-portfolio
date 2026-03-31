"use client";
import React from "react";
import { Button } from "@/ui/button";

export const Contact = () => (
  <section id="contact" className="py-20 bg-indigo-100 border-b-4 border-black">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-900 mb-8 border-b-4 border-dashed border-black pb-4">
        📬 Let&apos;s Chat! 📬
      </h2>
      <p className="text-2xl font-semibold text-gray-700 mb-10">
        Have a question or a project idea? I&apos;m always open to discussing new
        opportunities!
      </p>
      <div className="bg-white p-8 rounded-3xl shadow-[10px_10px_0px_rgba(0,0,0,0.8)] border-4 border-black">
         <p className="text-xl mb-6">Send me a digital carrier pigeon at:</p>
         <a 
           href="mailto:hello@dheyan.me" 
           className="text-3xl md:text-4xl font-black text-pink-600 hover:text-pink-500 transition-colors break-all"
         >
           hello@dheyan.me
         </a>
      </div>
      <div className="mt-12">
        <Button size="lg" variant="secondary" onClick={() => window.open('https://linkedin.com', '_blank')}>
          Connect on LinkedIn
        </Button>
      </div>
    </div>
  </section>
);

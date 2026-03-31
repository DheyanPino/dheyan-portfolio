"use client";
import React from "react";
import { SKILLS } from "@/constants/skills";

export const Skills = () => {
  const { icon: Icon, title, items, color } = SKILLS;
  
  return (
    <section id="about" className="py-20 bg-yellow-100 border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-800 text-center mb-12 border-b-4 border-dashed border-black pb-4">
          ✏️ About Me: The Digital Artist ✏️
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-xl text-gray-700 bg-white p-8 rounded-3xl shadow-[8px_8px_0px_rgba(0,0,0,0.8)] border-4 border-black">
            <p>
              I&apos;m Dheyan, a developer who believes in the power of playful design.
              My background in creating engaging UIs means I don&apos;t just write
              code—I craft delightful user experiences. If an app isn&apos;t fun to
              use, I haven&apos;t done my job!
            </p>
            <p>
              I specialize in the frontend ecosystem but I&apos;m truly passionate
              about modern tools like <b>React</b> and <b>Tailwind CSS</b>,
              allowing me to build lightning-fast, aesthetically pleasing
              interfaces quickly.
            </p>
            <p className="font-bold text-pink-600">
              Let&apos;s turn your next brilliant idea into a vibrant, clickable
              reality!
            </p>
          </div>
          <div
            className={`p-6 ${color} rounded-3xl transform hover:scale-[1.03] transition duration-300 shadow-[6px_6px_0px_rgba(0,0,0,0.8)] border-4 border-black`}
          >
            <div className="flex items-center space-x-3 mb-4 text-black">
              <Icon className="w-8 h-8 stroke-4" />
              <h3 className="text-2xl font-extrabold">{title}</h3>
            </div>
            <ul className="space-y-2 text-lg text-gray-800">
              {items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-xl mr-2">⭐</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

"use client";
import React from "react";
import Image from "next/image";
import {
  User,
  Github,
  Twitter,
  Facebook,
  Mail,
  Phone,
  MapPin,
  Cpu
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import { TECH_STACK } from "@/constants/experience";

export function AboutSection() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20 space-y-16">
      {/* Header Profile Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 bg-white p-10 rounded-[2.5rem] shadow-xl border-4 border-gray-50 dark:bg-gray-900 dark:border-gray-800">
        <Image
          src="/media/profile.jpg"
          alt="Dheyan Pino"
          width={256}
          height={256}
          className="w-48 h-48 md:w-64 md:h-64 rounded-3xl object-cover shadow-2xl border-4 border-white dark:border-gray-800"
          priority
        />
        <div className="text-center md:text-left space-y-4">
          <div className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-bold uppercase tracking-widest">
            Available for Work
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-gray-50">Dheyan Pino</h1>
          <p className="text-2xl font-bold text-gray-600 dark:text-gray-400">Software Developer</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-6 pt-4">
            <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 font-medium">
              <MapPin className="w-5 h-5 text-red-500" />
              <span>Cebu, Philippines</span>
            </div>
          </div>
        </div>
      </div>

      {/* About Description Card (Image 2 Style) */}
      <div className="bg-white dark:bg-gray-900 p-10 md:p-14 rounded-[2.5rem] shadow-xl border-4 border-gray-50 dark:border-gray-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <User className="w-64 h-64 -mr-20 -mt-20 dark:text-white" />
        </div>

        <div className="relative z-10 space-y-10">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-black dark:bg-gray-800 rounded-2xl">
              <User className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-black text-black dark:text-white">About</h2>
          </div>

          <div className="prose prose-xl text-gray-700 dark:text-gray-300 max-w-none space-y-6 font-medium leading-relaxed">
            <p>
              Hi there, I&apos;m <span className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded font-bold text-black dark:text-white border border-gray-200 dark:border-gray-700">Dheyan</span>.
              I&apos;m a Software Developer who believes in the power of playful design.
            </p>
            <p>
              My background in creating engaging UIs means I don&apos;t just write code—I craft delightful user experiences.
            </p>
            <p>
              If an app isn&apos;t fun to use, I haven&apos;t done my job!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 pt-10 border-t border-gray-100 dark:border-gray-800">
            <div className="space-y-6">
              <h3 className="text-xl font-black text-black dark:text-white uppercase tracking-wider">Socials</h3>
              <div className="space-y-4">
                <a href="https://github.com/DheyanPino" className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors font-bold group">
                  <div className="p-2 rounded-xl group-hover:bg-gray-100 dark:group-hover:bg-gray-800 transition-colors"><Github className="w-5 h-5" /></div>
                  <span>GitHub</span>
                </a>
                <a href="https://www.roblox.com/users/1034044682/profile" className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors font-bold group">
                  <div className="p-2 rounded-xl group-hover:bg-blue-50 dark:group-hover:bg-blue-900 transition-colors"><Twitter className="w-5 h-5" /></div>
                  <span>Twitter</span>
                </a>
                <a href="https://www.facebook.com/dheyanpino123" className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors font-bold group">
                  <div className="p-2 rounded-xl group-hover:bg-blue-100 dark:group-hover:bg-blue-900 transition-colors"><Facebook className="w-5 h-5" /></div>
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-black text-black dark:text-white uppercase tracking-wider">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 font-bold">
                  <div className="p-2 rounded-xl bg-gray-50 dark:bg-gray-800"><Mail className="w-5 h-5 text-blue-500" /></div>
                  <span>dheyanpino@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 font-bold">
                  <div className="p-2 rounded-xl bg-gray-50 dark:bg-gray-800"><Phone className="w-5 h-5 text-green-500" /></div>
                  <span>+63 910 544 0988</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 font-bold">
                  <div className="p-2 rounded-xl bg-gray-50 dark:bg-gray-800"><MapPin className="w-5 h-5 text-red-500" /></div>
                  <span>Cebu, Philippines</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 text-center md:text-left">
            <a href="/dheyan-resume.pdf" download="Dheyan-Pino-Resume.pdf">
              <Button size="lg" variant="primary" className="!rounded-2xl px-10 shadow-lg cursor-pointer">
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Experience & Skills Section */}
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="bg-white dark:bg-gray-900 p-10 rounded-[2.5rem] shadow-xl border-4 border-gray-50 dark:border-gray-800 space-y-8">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-teal-600 dark:bg-teal-700 rounded-2xl">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-black text-black dark:text-white">Tech Stack</h2>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {TECH_STACK.map((tech, i) => (
              <div key={i} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border-2 border-gray-100 dark:border-gray-700 flex items-center space-x-3 group hover:border-black dark:hover:border-gray-500 transition-all">
                <div className={`p-2 bg-white dark:bg-gray-900 rounded-xl shadow-sm ${tech.color}`}>
                  <tech.icon className="w-6 h-6" />
                </div>
                <span className="font-black text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white">{tech.name}</span>
              </div>
            ))}
          </div>
          <div className="p-6 bg-blue-50 dark:bg-blue-900/30 rounded-3xl border-2 border-blue-100 dark:border-blue-900 flex items-center justify-between group">
            <div>
              <p className="text-blue-900 dark:text-blue-200 font-black">Want my full CV?</p>
              <p className="text-blue-700 dark:text-blue-400 text-sm font-bold">Check out the detailed PDF.</p>
            </div>
            <a href="/dheyan-resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="sm" className="!rounded-xl group-hover:scale-105 transition-transform cursor-pointer">
                Open PDF
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

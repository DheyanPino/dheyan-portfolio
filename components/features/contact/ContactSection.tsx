"use client";
import React from "react";
import {
   Mail,
   Phone,
   Github,
   Twitter,
   Facebook
} from "@/components/icons";
import { Button } from "@/components/ui/button";

// Small helper for the "Connect" card icon
const LinkIcon = (props: React.SVGProps<SVGSVGElement>) => (
   <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
);

export function ContactSection() {
   return (
      <div className="max-w-7xl mx-auto px-4 py-20 space-y-20">
         <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-black text-black dark:text-gray-50 tracking-tight tracking-tighter">Let&apos;s get in touch!</h1>
            <p className="text-xl text-gray-500 dark:text-gray-400 font-medium tracking-tight">You can reach me at the following</p>
         </div>

         <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Info Cards */}
            <div className="lg:col-span-5 space-y-6">
               {/* Email Card */}
               <div className="bg-[#212121] dark:bg-black p-8 rounded-[2rem] text-white space-y-4 border-b-8 border-black dark:border-gray-800 shadow-xl">
                  <div className="flex items-center space-x-3 opacity-90">
                     <Mail className="w-6 h-6" />
                     <span className="text-lg font-bold">Email</span>
                  </div>
                  <p className="text-2xl md:text-3xl font-black tracking-tight break-all">dheyanpino@gmail.com</p>
                  <div className="flex items-center space-x-2 text-gray-400 text-sm font-bold">
                     <div className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                     </div>
                     <span>I usually email you back within an hour.</span>
                  </div>
               </div>

               {/* Phone Card */}
               <div className="bg-[#212121] dark:bg-black p-8 rounded-[2rem] text-white space-y-4 border-b-8 border-black dark:border-gray-800 shadow-xl">
                  <div className="flex items-center space-x-3 opacity-90">
                     <Phone className="w-6 h-6" />
                     <span className="text-lg font-bold">Phone</span>
                  </div>
                  <p className="text-2xl md:text-3xl font-black tracking-tight">+63 910 544 0988</p>
                  <div className="flex items-center space-x-2 text-gray-400 text-sm font-bold">
                     <div className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                     </div>
                     <span>I&apos;m available weekdays and WJV inn</span>
                  </div>
               </div>

               {/* Connect Card */}
               <div className="bg-[#212121] dark:bg-black p-8 rounded-[2rem] text-white space-y-6 border-b-8 border-black dark:border-gray-800 shadow-xl">
                  <div className="flex items-center space-x-3 opacity-90">
                     <div className="p-2 bg-white/10 rounded-lg">
                        <LinkIcon className="w-5 h-5 text-white" />
                     </div>
                     <span className="text-lg font-bold">Connect with me</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                     {[
                        { icon: Github, href: "https://github.com/DheyanPino" },
                        { icon: Twitter, href: "https://www.roblox.com/users/1034044682/profile" },
                        { icon: Facebook, href: "https://www.facebook.com/dheyanpino123" },
                     ].map((social, i) => (
                        <a
                           key={i}
                           href={social.href}
                           className="aspect-square bg-white/5 border-2 border-white/10 rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all group"
                        >
                           <social.icon className="w-6 h-6 opacity-40 group-hover:opacity-100 transition-opacity" />
                        </a>
                     ))}
                  </div>
               </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 bg-white dark:bg-gray-900 p-10 md:p-14 rounded-[3rem] shadow-2xl border-4 border-gray-50 dark:border-gray-800 space-y-10">
               <div className="space-y-4">
                  <h2 className="text-3xl font-black text-black dark:text-white tracking-tight">Let&apos;s get in touch</h2>
                  <p className="text-gray-500 dark:text-gray-400 font-medium">Feel free to reach out for any inquiries or collaborations.</p>
               </div>

               <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="space-y-2">
                        <label className="text-sm font-black text-gray-500 dark:text-gray-400 uppercase tracking-widest pl-1">First Name</label>
                        <input
                           type="text"
                           placeholder="John"
                           className="w-full p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border-2 border-gray-100 dark:border-gray-700 focus:outline-none focus:border-black dark:focus:border-gray-500 focus:bg-white dark:focus:bg-gray-900 transition-all font-bold placeholder-gray-300 dark:placeholder-gray-600 text-black dark:text-white"
                        />
                     </div>
                     <div className="space-y-2">
                        <label className="text-sm font-black text-gray-500 dark:text-gray-400 uppercase tracking-widest pl-1">Last Name</label>
                        <input
                           type="text"
                           placeholder="Doe"
                           className="w-full p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border-2 border-gray-100 dark:border-gray-700 focus:outline-none focus:border-black dark:focus:border-gray-500 focus:bg-white dark:focus:bg-gray-900 transition-all font-bold placeholder-gray-300 dark:placeholder-gray-600 text-black dark:text-white"
                        />
                     </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-sm font-black text-gray-500 dark:text-gray-400 uppercase tracking-widest pl-1">Email</label>
                     <input
                        type="email"
                        placeholder="john.doe@example.com"
                        className="w-full p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border-2 border-gray-100 dark:border-gray-700 focus:outline-none focus:border-black dark:focus:border-gray-500 focus:bg-white dark:focus:bg-gray-900 transition-all font-bold placeholder-gray-300 dark:placeholder-gray-600 text-black dark:text-white"
                     />
                  </div>

                  <div className="space-y-2">
                     <div className="flex justify-between items-center pr-1">
                        <label className="text-sm font-black text-gray-500 dark:text-gray-400 uppercase tracking-widest pl-1">How can I help you?</label>
                        <span className="text-xs text-gray-300 dark:text-gray-600 font-bold">Max 500 characters</span>
                     </div>
                     <textarea
                        rows={5}
                        placeholder="Write your message here..."
                        className="w-full p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border-2 border-gray-100 dark:border-gray-700 focus:outline-none focus:border-black dark:focus:border-gray-500 focus:bg-white dark:focus:bg-gray-900 transition-all font-bold placeholder-gray-300 dark:placeholder-gray-600 text-black dark:text-white resize-none"
                     ></textarea>
                  </div>

                  <div className="pt-4">
                     <Button size="xl" className="w-full !rounded-2xl shadow-xl hover:shadow-2xl transition-all">Submit</Button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}

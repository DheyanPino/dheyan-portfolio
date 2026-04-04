import React from "react";
import Link from "next/link";
import { MapPin } from "@/components/icons";

export const Footer = () => (
  <footer className="bg-white text-gray-800 p-12 border-t-2 border-gray-100 mt-20">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      {/* Profile Column */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-black">Dheyan Pino</h3>
        <div className="flex items-center text-gray-500 space-x-2">
          <MapPin className="w-5 h-5 text-green-600" />
          <span>Cebu, Philippines</span>
        </div>
      </div>

      {/* Pages Column */}
      <div className="space-y-4">
        <h4 className="text-lg font-bold text-black">Pages</h4>
        <ul className="space-y-2">
          <li><Link href="/" className="hover:text-black transition-colors">Home</Link></li>
          <li><Link href="/projects" className="hover:text-black transition-colors">Projects</Link></li>
          <li><Link href="/about" className="hover:text-black transition-colors">About</Link></li>
          <li><Link href="/contact" className="hover:text-black transition-colors">Contact</Link></li>
        </ul>
      </div>

      {/* Resources Column */}
      <div className="space-y-4">
        <h4 className="text-lg font-bold text-black">Resources</h4>
        <ul className="space-y-2 text-gray-600">
          <li><a href="#" className="hover:text-black transition-colors">GitHub Boilerplates</a></li>
          <li><a href="#" className="hover:text-black transition-colors">CodePen Examples</a></li>
          <li><a href="#" className="hover:text-black transition-colors">MDN Web Docs</a></li>
        </ul>
      </div>

      {/* Connect Column */}
      <div className="space-y-4">
        <h4 className="text-lg font-bold text-black">Connect</h4>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-center space-x-2">
            <Link href="#" className="hover:text-black transition-colors">GitHub</Link>
          </li>
          <li className="flex items-center space-x-2">
            <Link href="#" className="hover:text-black transition-colors">Twitter</Link>
          </li>
          <li className="flex items-center space-x-2">
            <Link href="#" className="hover:text-black transition-colors">Facebook</Link>
          </li>
        </ul>
      </div>
    </div>

    <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-100 text-center text-gray-500 text-sm">
      <p>&copy; 2026 Dheyan Pino. All rights reserved.</p>
    </div>
  </footer>
);

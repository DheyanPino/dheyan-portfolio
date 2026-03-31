"use client";
import React from "react";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

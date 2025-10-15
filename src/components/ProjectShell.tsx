"use client";
import { Header } from "./Header";
import { FooterSection } from "./FooterSection";
import { ReactNode } from "react";

export function ProjectShell({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[#111111] text-white min-h-screen relative overflow-x-hidden">
      {/* Header fijo */}
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="max-w-[1100px] mx-auto px-4 md:px-0">
          <Header />
        </div>
      </div>

      <main className="max-w-[1100px] mx-auto px-4 md:px-0 pt-20 md:pt-28">
        {children}
      </main>

      <section className="w-full">
        <FooterSection />
      </section>
    </div>
  );
}

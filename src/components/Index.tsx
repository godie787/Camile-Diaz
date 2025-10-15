"use client";
import { Header } from "./Header";
import Image from "next/image";
import section1 from "../../public/images/section1.png";
import { ProjectsSection2 } from "./ProjectsSection2";
import { AboutSection } from "./AboutSection";
import { FooterSection } from "./FooterSection";

export const Index = () => {
  return (
    <div className="bg-[#111111] text-white min-h-screen relative overflow-x-hidden">
      {/* Header fijo */}
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="max-w-[1100px] mx-auto px-4 md:px-0">
          <Header />
        </div>
      </div>

      {/* Contenido principal */}
      <main className="max-w-[1100px] mx-auto px-4 md:px-0 pt-20 md:pt-28">
        {/* Sección 1 */}
        <section className="w-full flex items-center justify-center min-h-[55svh] sm:min-h-[65svh] md:min-h-svh mb-4 md:mb-[150px]">
          <Image
            src={section1}
            alt="ID Camile Díaz"
            className="w-full h-auto rounded-md"
            priority
            sizes="(min-width: 1100px) 1100px, 100vw"
            placeholder="blur"
          />
        </section>

        {/* Sección 3 - Presentación */}
        <section className="w-full min-h-[auto] md:min-h-[auto] mb-6 md:mb-[150px]">
          <AboutSection />
        </section>

        {/* Sección 2 */}
        <section className="w-full min-h-[85svh] md:min-h-svh">
          <ProjectsSection2 />
        </section>
      </main>

      {/* Footer fuera del main para ocupar todo el ancho del fondo */}
      <section className="w-full">
        <FooterSection />
      </section>
    </div>
  );
};

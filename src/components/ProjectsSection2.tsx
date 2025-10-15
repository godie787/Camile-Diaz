"use client";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/app/data/projects";

export const ProjectsSection2 = () => {
  return (
    <section className="py-20 px-4">
      <h2 className="text-white text-lg mb-6 font-semibold uppercase tracking-wide">
        Proyectos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard
            key={p.slug}
            image={p.cover}
            title={p.title}
            link={`/projects/${p.slug}`}
          />
        ))}

        {/* Si quieres repetir CHOC'IL como en tu ejemplo: */}
        {/* <ProjectCard image={projects.find(p=>p.slug==="chocil")!.cover} title="CHOC'IL" link="/projects/chocil" /> */}
      </div>
    </section>
  );
};

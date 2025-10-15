"use client";
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/app/data/projects";

export const ProjectsSection2 = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-20 px-4"
    >
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
      </div>
    </motion.section>
  );
};

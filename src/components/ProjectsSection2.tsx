"use client";
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/app/data/projects";
import { useState } from "react";

export const ProjectsSection2 = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null); 

  const handleSelectCard = (index: number) => {
    if (selectedCard === index) {
      setSelectedCard(null);
    } else {
      setSelectedCard(index); 
    }
  };

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
        {projects.map((p, index) => (
          <ProjectCard
            key={p.slug}
            index={index}
            image={p.cover}
            title={p.title}
            hoverLabel={p.hoverLabel}
            link={p.externalUrl ?? `/projects/${p.slug}`}
            external={Boolean(p.externalUrl)}
            onSelectCard={handleSelectCard}
            selectedCard={selectedCard || -1}
          />
        ))}
      </div>
    </motion.section>
  );
};

"use client";
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/app/data/projects";
import { useState } from "react";

const cardTransforms = [
  "md:rotate-[-7deg] md:translate-x-6 md:translate-y-2",
  "md:rotate-[7deg] md:-translate-x-6 md:translate-y-10",
  "md:rotate-[-7deg] md:translate-x-10 md:-translate-y-10",
  "md:rotate-[7deg] md:-translate-x-8 md:-translate-y-2",
];

export const ProjectsSection2 = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleSelectCard = (index: number) => {
    if (selectedCard === index) {
      setSelectedCard(null);
    } else {
      setSelectedCard(index);
    }
  };

  const handleHoverCard = (index: number | null) => {
    setHoveredCard(index);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-20 px-4 overflow-visible"
    >
      <h2 className="text-white text-lg mb-6 font-semibold uppercase tracking-wide">
        Proyectos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 md:gap-0 overflow-visible">
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
            onHoverCard={handleHoverCard}
            selectedCard={selectedCard ?? -1}
            hoveredCard={hoveredCard ?? -1}
            className={cardTransforms[index % cardTransforms.length]}
          />
        ))}
      </div>
    </motion.section>
  );
};

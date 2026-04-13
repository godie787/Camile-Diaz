"use client";
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/app/data/projects";
import { useState } from "react";

const getCardTransform = (index: number) => {
  const row = Math.floor(index / 2);
  const isLeft = index % 2 === 0;

  const rotation = isLeft
    ? "sm:rotate-[-5deg] md:rotate-[-7deg]"
    : "sm:rotate-[5deg] md:rotate-[7deg]";
  const horizontal = isLeft
    ? "sm:translate-x-3 md:translate-x-6"
    : "sm:-translate-x-3 md:-translate-x-6";

  // Esto sí cierra el hueco real entre filas
  const overlapByRow =
    row === 0
      ? ""
      : row === 1
        ? "sm:-mt-8 md:-mt-10"
        : row === 2
          ? "sm:-mt-12 md:-mt-14"
          : row === 3
            ? "sm:-mt-16 md:-mt-18"
            : "sm:-mt-20 md:-mt-22";

  return `${rotation} ${horizontal} ${overlapByRow}`;
};

export const ProjectsSection2 = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleSelectCard = (index: number) => {
    setSelectedCard(selectedCard === index ? null : index);
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-0 overflow-visible">
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
            className={getCardTransform(index)}
          />
        ))}
      </div>
    </motion.section>
  );
};

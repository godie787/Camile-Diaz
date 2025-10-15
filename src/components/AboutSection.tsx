"use client";
import { motion } from "framer-motion";
import { secondaryColor } from "../consts";

export const AboutSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full flex items-center justify-center mb-[150px] px-4 md:px-0"
    >
      <div className="max-w-3xl text-left leading-relaxed">
        <p
          className="
            text-[1.1rem] sm:text-[1.3rem] md:text-[2.3rem]
            font-normal
            leading-snug sm:leading-normal md:leading-relaxed
          "
          style={{ color: secondaryColor }}
        >
          <span className="text-white font-semibold">
            Hi!! me llamo Camile, soy estudiante <br /> de diseño,{" "}
          </span>
          expreso mi creatividad en <br /> lo visual. Crear me hace feliz por lo que <br />
          busco plasmar una parte de mi <br /> esencia en cada proyecto :)
        </p>
      </div>
    </motion.section>
  );
};

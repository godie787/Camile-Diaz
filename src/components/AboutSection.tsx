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
            Hola, soy Camile, Diseñadora Gráfica.<br />{" "}
          </span>
          Expreso mi creatividad a través<br /> del lenguaje visual y me apasiona crear proyectos con sentido. Busco plasmar una parte de mi esencia en cada trabajo <br></br>que desarrollo. <br />
        </p>
      </div>
    </motion.section>
  );
};

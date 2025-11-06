import Image from "next/image";
import { motion } from "framer-motion";

interface SoftwareItem {
  src: string;
  alt: string;
  name: string;
}

const softwareItems: SoftwareItem[] = [
  {
    src: "/images/softwares/photoshop.png",
    alt: "Photoshop",
    name: "Photoshop",
  },
  {
    src: "/images/softwares/photoshop-lightroom.png",
    alt: "Photoshop Lightroom",
    name: "Photoshop Lightroom",
  },
  {
    src: "/images/softwares/indesign.png",
    alt: "InDesign",
    name: "InDesign",
  },
  {
    src: "/images/softwares/illustrator.png",
    alt: "Illustrator",
    name: "Illustrator",
  },

  {
    src: "/images/softwares/figma-icon list.png",
    alt: "Figma",
    name: "Figma",
  },

  {
    src: "/images/softwares/nomad sculpt icon.ico",
    alt: "Nomad Sculpt",
    name: "Nomad Sculpt",
  },
  {
    src: "/images/softwares/procreate-icon list.png",
    alt: "Procreate",
    name: "Procreate",
  },
  {
    src: "/images/softwares/capcut-icon.png",
    alt: "CapCut",
    name: "CapCut",
  },
];

export const SoftwareSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full flex flex-wrap justify-center gap-6 my-8 md:my-60"
    >
      {softwareItems.map((software, index) => (
        <div key={index} className="relative group">
          <Image
            src={software.src}
            alt={software.alt}
            className="w-[40px] sm:w-[60px] md:w-[90px] lg:w-[90px] object-contain rounded-md transition-all duration-300"
            width={100}
            height={100}
          />
        </div>
      ))}
    </motion.section>
  );
};

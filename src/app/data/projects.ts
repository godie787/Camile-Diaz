import { StaticImageData } from "next/image";
import eterna1 from "../../../public/images/eterna/eterna-section2.png";
import eterna2 from "../../../public/images/eterna/eterna-section3.png";
import eterna3 from "../../../public/images/eterna/eterna-section4.png";

import chocil1 from "../../../public/images/Choc'il-section2.png";
import chocil2 from "../../../public/images/chocil/Choc'il-large.png";

import hoodie1 from "../../../public/images/hoodieKimetsu.png";
import hoodie2 from "../../../public/images/hoodie/hoodieKimetsuLarge.png";

export type Project = {
  slug: string;
  title: string;
  description: string;
  cover: StaticImageData;
  images: StaticImageData[];
  meta: {
    industry: string; // Industria
    client: string; // Cliente
    service: string; // Servicio
    date: string; // Fecha
  };
};

export const projects: Project[] = [
  {
    slug: "eterna",
    title: "ETERNA",
    description:
      "Eterna, es una marca de ropa que representa un equilibrio entre calidad, sostenibilidad y estilo, creada para personas locales de Cabildo entre los 18 a 50 años, interesados en la ropa americana-europea de calidad y en darle un segundo uso a prendas en perfecto estado.",
    cover: eterna1,
    images: [eterna3, eterna2],
    meta: {
      industry: "Ropa y moda",
      client: "Personas comunes",
      service: "Diseño de Marca",
      date: "Marzo 2025",
    },
  },
  {
    slug: "chocil",
    title: "CHOC'IL",
    description:
      "Choc'il: landing con catálogo, realce de producto y módulos de testimonios.",
    cover: chocil1,
    images: [chocil2],
    meta: {
      industry: "Alimentos",
      client: "Emprendimiento local",
      service: "Landing & Catálogo",
      date: "2025",
    },
  },
  {
    slug: "hoodie-kimetsu-no-yaiba",
    title: "HOODIE KIMETSU NO YAIBA",
    description:
      "Polerón personalizado inspirado en Kimetsu no Yaiba. Render de prenda y detalles.",
    cover: hoodie1,
    images: [hoodie2],
    meta: {
      industry: "Indumentaria",
      client: "Pedido personalizado",
      service: "Diseño de prenda",
      date: "2024",
    },
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);

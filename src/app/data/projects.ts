import { StaticImageData } from "next/image";
import eterna1 from "../../../public/images/eterna/eterna-section2.png";
import eterna2 from "../../../public/images/eterna/eterna-section3.png";
import eterna3 from "../../../public/images/eterna/eterna-section4.png";

import chocil1 from "../../../public/images/Choc'il-section2.png";
import chocil2 from "../../../public/images/chocil/Choc'il-large.png";

import hoodie1 from "../../../public/images/hoodieKimetsu.png";
import hoodie2 from "../../../public/images/hoodie/hoodieKimetsuLarge.png";

import catalogoPortada from "../../../public/images/catalogo/portada.png";
import catalogo1 from "../../../public/images/catalogo/catalogoLarge.png";

import personajePortada from "../../../public/images/personaje/portada.png";
import personaje1 from "../../../public/images/personaje/personajeLarge.png";

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
    title: "Eterna",
    description:
      "Eterna es una marca de indumentaria que refleja equilibrio entre calidad, sostenibilidad y estilo. Dirigida a personas de Cabildo entre 18 y 50 años, combina estética americana-europea con una propuesta consciente de reutilización textil. El proyecto abarcó el desarrollo de identidad visual, naming y dirección de arte de la marca.",
    cover: eterna1,
    images: [eterna3, eterna2],
    meta: {
      industry: "Moda y confección",
      client: "Público general",
      service: "Diseño de marca e identidad visual",
      date: "Marzo 2025",
    },
  },
  {
    slug: "xock'il",
    title: "Xock'il",
    description: `Xock'il es una marca de chocolate artesanal inspirada en la cultura maya. Su nombre, que significa “cacao” en lengua maya, rinde homenaje a un alimento considerado sagrado por Quetzalcóatl. 
La propuesta combina identidad cultural y bienestar, ofreciendo una alternativa saludable al chocolate tradicional. Desarrollé el diseño de packaging y la línea visual del producto, destacando la conexión entre tradición, pureza y experiencia sensorial.
La marca presenta tres variedades: Xock'il con leche, Xock'il Original 85% y Xock'il Blanco.`,
    cover: chocil1,
    images: [chocil2],
    meta: {
      industry: "Alimentos y chocolatería",
      client: "Emprendimiento local",
      service: "Diseño de packaging e identidad visual",
      date: "Marzo 2023",
    },
  },
  {
    slug: "hoodie-kimetsu-no-yaiba",
    title: "Hoodie Kimetsu no Yaiba",
    description: `Diseño de polerón personalizado inspirado en el universo de *Kimetsu no Yaiba* (Luna Superior). 
El proyecto incluyó la conceptualización gráfica, renderizado del producto, diseño de etiqueta y empaque. 
La propuesta se ejecutó en una mezcla textil 60% algodón y 40% poliéster, con impresión en papel transfer inkjet.`,
    cover: hoodie1,
    images: [hoodie2],
    meta: {
      industry: "Moda y confección",
      client: "Encargo personalizado",
      service: "Diseño textil y dirección de arte",
      date: "Octubre 2025",
    },
  },
  {
    slug: "catalogo-ceramista",
    title: "Catálogo Ceramista",
    description: `Diseño editorial para la artista y ceramista porteña Nicole García. 
El catálogo reúne una selección curada de sus obras, organizadas cronológicamente, con un enfoque en la composición visual y la narrativa del oficio cerámico. 
El resultado equilibra la estética editorial con la identidad artesanal de la autora.`,
    cover: catalogoPortada,
    images: [catalogo1],
    meta: {
      industry: "Editorial y arte",
      client: "Emprendimiento local",
      service: "Diseño editorial y dirección de arte",
      date: "Agosto 2025",
    },
  },
  {
    slug: "disenio-de-personaje",
    title: "Diseño de Personaje",
    description: `Proyecto personal de ilustración y modelado 3D. 
Consistió en el diseño conceptual de un personaje infantil con temática “fiesta en la piscina”, explorando color, forma y expresión para transmitir frescura y alegría. 
Incluyó desarrollo de bocetos, modelado y render final.`,
    cover: personajePortada,
    images: [personaje1],
    meta: {
      industry: "Animación y modelado 3D",
      client: "Proyecto personal",
      service: "Diseño conceptual y modelado 3D",
      date: "Octubre 2024",
    },
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);

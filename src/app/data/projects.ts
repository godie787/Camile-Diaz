import { StaticImageData } from "next/image";
import eterna1 from "../../../public/images/eterna/eterna-section2.jpg";
import eterna2 from "../../../public/images/eterna/eterna-section3.png";
import eterna3 from "../../../public/images/eterna/eterna-section4.png";

import chocil1 from "../../../public/images/chocil/Choc'il-section2.png";
import chocil2 from "../../../public/images/chocil/Choc'il-large.png";

import hoodie1 from "../../../public/images/hoodie/hoodieKimetsu.png";
import hoodie2 from "../../../public/images/hoodie/hoodieKimetsuLarge.png";

import catalogoPortada from "../../../public/images/catalogo/portada.png";
import catalogo1 from "../../../public/images/catalogo/catalogoLarge.png";

import personajePortada from "../../../public/images/personaje/portada.png";
import personaje1 from "../../../public/images/personaje/personajeLarge.png";

import libretaPortada from "../../../public/images/libreta/portada.png";
import libreta1 from "../../../public/images/libreta/imagen1.jpg";

import tattoosPortada from "../../../public/images/tattos/portada.png";
import tattoos1 from "../../../public/images/tattos/imagen1.png";
import ncgPortada from "../../../public/images/ncg/portada NCG.png";

export type Project = {
  slug: string;
  title: string;
  description: string;
  cover: StaticImageData;
  images: StaticImageData[];
  hoverLabel?: string;
  externalUrl?: string;
  meta: {
    industry: string;
    client: string;
    service: string;
    date: string;
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
    slug: "libreta",
    title: "Libreta Patrimonial",
    description: `Diseño, confección y realización del Taller Patrimonial de Stickers en el Museo de Concón. El proyecto incluyó el desarrollo del material complementario y la dirección del taller “Stickers con temática patrimonial: Batalla de Concón”, enfocado a público infantil.`,
    cover: libretaPortada,
    images: [libreta1],
    meta: {
      industry: "Editorial, ilustración",
      client: "Museo de Concón",
      service: "Diseño gráfico",
      date: "Mayo 2024",
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
    slug: "ncg",
    title: "NCG",
    description:
      "Proyecto desarrollado para New Capital Group. Esta tarjeta redirige directamente al sitio externo del proyecto.",
    cover: ncgPortada,
    images: [],
    hoverLabel: "(new capital group)",
    externalUrl: "https://prtfolioaudiovisual.framer.website/",
    meta: {
      industry: "Audiovisual y marca",
      client: "New Capital Group",
      service: "Portafolio audiovisual",
      date: "2025",
    },
  },
  {
    slug: "tattoos",
    title: "Tatuajes",
    description: `Diseños personalizados y de autor para tatuajes, desarrollados con enfoque artístico y conceptual.`,
    cover: tattoosPortada,
    images: [tattoos1],
    meta: {
      industry: "Tatuajes, ilustración",
      client: "Clientes varios",
      service: "Diseño de tatuajes",
      date: "2024 - Presente",
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

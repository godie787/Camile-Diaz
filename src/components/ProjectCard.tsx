"use client";
import Image, { StaticImageData } from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

type ProjectCardProps = {
  image: StaticImageData;
  title: string;
  link?: string; // <- ruta /projects/...
};

export const ProjectCard = ({ image, title, link }: ProjectCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (link) router.push(link);
  };

  return (
    <div
      className="relative group overflow-hidden rounded-md shadow-lg cursor-pointer outline-none"
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleClick()}
      aria-label={`Abrir proyecto ${title}`}
    >
      <Image src={image} alt={title} className="w-full h-full object-cover" />

      {/* Overlay visible SOLO al hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
          <div />
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">{title}</span>
            <div className="w-10 h-10 bg-white/30 hover:bg-white/40 transition rounded-md grid place-items-center">
              <ArrowUpRight size={24} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

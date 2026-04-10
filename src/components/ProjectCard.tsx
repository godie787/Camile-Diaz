"use client";
import Image, { StaticImageData } from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { LoadingOverlay } from "./shared/LoadingOverlay";

type ProjectCardProps = {
  image: StaticImageData;
  title: string;
  hoverLabel?: string;
  link?: string;
  external?: boolean;
  index: number;
  onSelectCard: (index: number) => void;
  selectedCard: number;
};

export const ProjectCard = ({
  image,
  title,
  hoverLabel,
  link,
  external = false,
  index,
  onSelectCard,
  selectedCard,
}: ProjectCardProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (link) {
      setIsLoading(true);
      setTimeout(() => {
        if (external) {
          window.location.href = link;
          return;
        }

        router.push(link);
      }, 400);
    }
  };

  const handleTouchStart = () => {
    onSelectCard(index);
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    if (selectedCard !== index) {
      setIsHovered(false);
    }
  };

  useEffect(() => {
    if (selectedCard === index) {
      setIsHovered(true);
    } else {
      setIsHovered(false);
    }
  }, [selectedCard, index]);

  return (
    <>
      <div
        className="relative group overflow-hidden rounded-md shadow-lg cursor-pointer outline-none"
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleClick()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={`Abrir proyecto ${title}`}
      >
        <Image src={image} alt={title} className="w-full h-full object-cover" />

        <div
          className={`absolute inset-0 ${
            isHovered ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300`}
        >
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
            <div />
            <div className="flex items-center justify-between">
              <div>
                <span className="text-lg font-semibold">{title}</span>
                {hoverLabel ? (
                  <div className="text-sm text-white/80">{hoverLabel}</div>
                ) : null}
              </div>
              <div className="w-10 h-10 bg-white/30 hover:bg-white/40 transition rounded-md grid place-items-center">
                <ArrowUpRight size={24} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <LoadingOverlay isLoading={isLoading} mode="spinner" />
    </>
  );
};

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
  onHoverCard: (index: number | null) => void;
  selectedCard: number;
  hoveredCard: number;
  className?: string;
};

export const ProjectCard = ({
  image,
  title,
  hoverLabel,
  link,
  external = false,
  index,
  onSelectCard,
  onHoverCard,
  selectedCard,
  hoveredCard,
  className = "",
}: ProjectCardProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isActive = hoveredCard === index || selectedCard === index;

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

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHoverCard(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHoverCard(null);
  };

  useEffect(() => {
    if (selectedCard === index) {
      setIsHovered(true);
    } else if (hoveredCard !== index) {
      setIsHovered(false);
    }
  }, [selectedCard, hoveredCard, index]);

  return (
    <>
      <div
        className={`
          relative group overflow-hidden rounded-[30px] shadow-lg cursor-pointer outline-none
          aspect-square w-full transition-all duration-300 ease-out
          ${className}
          ${isActive ? "md:scale-105 md:shadow-2xl" : "md:scale-100"}
        `}
        style={{ zIndex: isActive ? 100 : undefined }}
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleClick();
          }
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label={`Abrir proyecto ${title}`}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 50vw, 100vw"
        />

        <div
          className={`absolute inset-0 ${
            isHovered ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300`}
        >
          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
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

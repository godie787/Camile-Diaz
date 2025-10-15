import Image from "next/image";
import { notFound } from "next/navigation";
import { ProjectShell } from "@/components/ProjectShell";
import { getProjectBySlug } from "@/app/data/projects";

type Props = { params: { slug: string } };

export default function ProjectDetailPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) return notFound();

  const { title, description, images, meta } = project;

  return (
    <ProjectShell>
      <section className="mb-10 px-6 pt-10 md:pt-16">
        {/* 1️⃣ Mayor separación superior */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>

        {/* 2️⃣ Descripción más grande + margen inferior mayor */}
        <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-32 max-w-[75ch]">
          {description}
        </p>

        {/* 3️⃣ Etiquetas con tipografía más grande y más espacio entre bloques */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-14">
          <div>
            <div className="text-white/50 text-sm md:text-base mb-1">
              Industria
            </div>
            <div className="text-white font-medium text-base md:text-lg">
              {meta.industry}
            </div>
          </div>
          <div>
            <div className="text-white/50 text-sm md:text-base mb-1">
              Cliente
            </div>
            <div className="text-white font-medium text-base md:text-lg">
              {meta.client}
            </div>
          </div>
          <div>
            <div className="text-white/50 text-sm md:text-base mb-1">
              Servicio
            </div>
            <div className="text-white font-medium text-base md:text-lg">
              {meta.service}
            </div>
          </div>
          <div>
            <div className="text-white/50 text-sm md:text-base mb-1">Fecha</div>
            <div className="text-white font-medium text-base md:text-lg">
              {meta.date}
            </div>
          </div>
        </div>

        {/* Imágenes */}
        <div className="space-y-8">
          {images.map((img, idx) => (
            <div key={idx} className="rounded-md overflow-hidden">
              <Image
                src={img}
                alt={`${title} - imagen ${idx + 1}`}
                className="w-full h-auto object-cover"
                priority={idx === 0}
                sizes="(min-width: 1100px) 1100px, 100vw"
                placeholder="blur"
              />
            </div>
          ))}
        </div>
      </section>
    </ProjectShell>
  );
}

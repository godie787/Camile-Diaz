// src/app/projects/[slug]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import { ProjectShell } from "@/components/ProjectShell";
import { getProjectBySlug } from "@/app/data/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);
  if (!project) return notFound();

  const { title, description, images, meta } = project;

  return (
    <ProjectShell>
      <section className="mb-10 px-6 pt-10 md:pt-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>

        <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-32 max-w-[75ch]">
          {description}
        </p>

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
          {images.map((src, idx) => (
            <div
              key={idx}
              className="rounded-md overflow-hidden relative w-full aspect-[16/9]"
            >
              <Image
                src={src} // p.ej. "/proyectos/uno.jpg" en /public
                alt={`${title} - imagen ${idx + 1}`}
                fill // usamos fill para no requerir width/height fijos
                sizes="(min-width: 1100px) 1100px, 100vw"
                className="object-cover"
                priority={idx === 0}
              />
            </div>
          ))}
        </div>
      </section>
    </ProjectShell>
  );
}

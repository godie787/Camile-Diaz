"use client";
import Image from "next/image";
import footerBg from "../../public/images/footerBg.png";

export const FooterSection = () => {
  return (
    <section className="relative w-full py-20">
      <Image
        src={footerBg}
        alt="Fondo Footer"
        fill
        className="object-cover object-center"
        priority
      />

      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center px-6">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 py-12 text-black">
          {/* Columna 1 */}
          <div className="space-y-6 text-sm md:text-base">
            <div>
              <span className="block font-semibold uppercase">Contacto</span>
            </div>
            <div>
              <p>Chile, Valparaíso</p>
            </div>
            <div>
              <p>Portafolio actualizado 2025</p>
            </div>
          </div>

          {/* Columna 2 */}
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg md:text-xl font-medium border-b border-black pb-1">
              camile.diaz.araya@gmail.com
            </p>
          </div>

          {/* Columna 3 */}
          <div className="space-y-6 text-sm md:text-base text-right">
            <div>
              <p>Redes sociales</p>
            </div>
            <div>
              <p>(Aquí puedes poner más info)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

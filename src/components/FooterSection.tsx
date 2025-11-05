"use client";
import Image from "next/image";
import footerBg from "../../public/images/footerBg.png";
import { FaLinkedin } from "react-icons/fa"; // Asegúrate de tener react-icons instalado

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
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-16 py-12 text-black">
          {/* Columna 1 */}
          <div className="space-y-6 text-sm md:text-base text-center px-6">
            <div>
              <span className="block font-semibold text-lg text-gray-800">
                Contacto
              </span>
            </div>
            <div>
              <p className="text-sm md:text-base">Chile, Valparaíso</p>
            </div>
            <div>
              <p className="text-sm md:text-base">
                Portafolio actualizado 2025
              </p>
            </div>
          </div>

          {/* Columna 2 */}
          <div className="flex flex-col items-center justify-center px-6">
            <p className="text-lg md:text-xl font-medium border-b border-black pb-1 cursor-pointer hover:text-gray-600">
              <a href="mailto:camile.diaz.araya@gmail.com">
                camile.diaz.araya@gmail.com
              </a>
            </p>
          </div>

          {/* Columna 3 */}
          <div className="space-y-6 text-sm md:text-base text-center px-6">
            <div>
              <p className="font-semibold text-lg text-gray-800">
                Redes sociales
              </p>
            </div>
            <div className="flex justify-center gap-3">
              <a
                href="https://www.linkedin.com/in/camile-d%C3%ADaz-araya-b1611b397/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm md:text-base text-gray-800 hover:text-gray-600"
              >
                <FaLinkedin className="text-xl" />
                <span className="ml-2">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full text-center py-6 mt-8 text-sm text-gray-700">
          <p className="text-sm md:text-base">
            Sitio web creado por{" "}
            <a
              href="https://www.linkedin.com/in/diego-jorquera"
              className="text-gray-800 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Diego Jorquera
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

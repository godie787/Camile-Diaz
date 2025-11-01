"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import { principalColor, secondaryColor, headerTitle } from "@/consts";

export const Header = () => {
  const handleMenuClick = () => {
    console.log("Abrir menú lateral...");
  };

  return (
    <header
      className="w-full text-white flex items-center justify-between px-6 py-5"
      style={{ backgroundColor: "transparent" }}
    >
      {/* Botón clickeable que redirige al inicio */}
      <Link
        href="/"
        className="text-xl font-semibold hover:opacity-80 transition"
        style={{ color: secondaryColor }}
      >
        {headerTitle}
      </Link>

      <Menu
        size={32}
        strokeWidth={2}
        onClick={handleMenuClick}
        className="cursor-pointer hover:opacity-80 transition"
        color={secondaryColor}
      />
    </header>
  );
};

"use client";

import Image from "next/image";
import { Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type LoadingOverlayProps = {
  isLoading: boolean;
  mode?: "spinner" | "gif" | "image";
  src?: string;
  alt?: string;
  backgroundOpacity?: string;
};

export const LoadingOverlay = ({
  isLoading,
  mode = "spinner",
  src,
  alt = "Cargando...",
  backgroundOpacity = "bg-black/60",
}: LoadingOverlayProps) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className={`fixed inset-0 z-[9999] flex items-center justify-center ${backgroundOpacity} backdrop-blur-sm`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {mode === "spinner" && (
            <Loader2 className="w-14 h-14 text-white animate-spin" />
          )}

          {mode === "gif" && src && (
            <Image
              src={src}
              alt={alt}
              width={120}
              height={120}
              className="object-contain"
            />
          )}

          {mode === "image" && src && (
            <Image
              src={src}
              alt={alt}
              width={100}
              height={100}
              className="rounded-xl object-cover shadow-lg"
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

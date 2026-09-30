"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl"
    >
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <Link href="#" aria-label="KL Tecnologia — início" className="flex items-center gap-2.5">
          <span
            aria-hidden="true"
            className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-[11px] font-extrabold tracking-tighter text-black"
          >
            KL
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-white">
            KL Tecnologia
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="#jornada"
            className="hidden text-sm text-[#A1A1AA] transition-colors hover:text-white sm:block"
          >
            Como funciona
          </Link>
          <Link
            href="#autor"
            className="hidden text-sm text-[#A1A1AA] transition-colors hover:text-white sm:block"
          >
            Mentoria
          </Link>
          <motion.a
            href="#lista"
            aria-label="Entrar na lista de espera"
            whileTap={{ scale: 0.98 }}
            className="inline-flex h-9 items-center rounded-full border border-white/15 bg-white/[0.04] px-4 text-sm font-medium text-white transition-colors hover:border-white/25 hover:bg-white/[0.08]"
          >
            Entrar na Lista
          </motion.a>
        </div>
      </nav>
    </motion.header>
  );
}

"use client";

import { motion } from "framer-motion";
import { Check, Code2, Sparkles } from "lucide-react";
import { EmailForm } from "./EmailForm";
import { VibeCodingMockup } from "./VibeCodingMockup";

export function HeroSection() {
  return (
    <section
      id="lista"
      aria-labelledby="hero-title"
      className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24"
    >
      {/* Fundo: grid + glows */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="bg-grid-subtle mask-fade-y absolute inset-0" />
        <div className="absolute left-1/2 top-[-220px] h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-[#0070F3]/15 blur-[140px]" />
        <div className="absolute left-1/2 top-[120px] h-[240px] w-[520px] -translate-x-1/2 rounded-full bg-[#7928CA]/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-[#A1A1AA] backdrop-blur-xl">
              <Sparkles className="h-3.5 w-3.5 text-[#0070F3]" aria-hidden="true" />
              Lista de espera aberta · Programação com IA
            </span>
          </motion.div>

          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-6 text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-6xl"
          >
            Transforme suas ideias em software usando apenas o português.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#A1A1AA] sm:text-lg"
          >
            Aprenda a criar, desenvolver e hospedar sistemas completos do zero
            usando IA. Mesmo sem saber programar. Entre para a lista de espera.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-8"
          >
            <EmailForm id="email-hero" buttonText="Garantir Vaga" align="center" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-[#71717A]"
          >
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
              Sem código
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
              Sem setup complicado
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Code2 className="h-3.5 w-3.5 text-[#0070F3]" aria-hidden="true" />
              100% em português
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14 sm:mt-20"
        >
          <VibeCodingMockup />
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Hourglass, Zap, X, Check } from "lucide-react";
import { SectionReveal, StaggerContainer, StaggerItem } from "./SectionReveal";

export function ProblemSection() {
  return (
    <section
      aria-labelledby="problem-title"
      className="relative border-t border-white/10 bg-[#0A0A0A] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#0070F3] uppercase">
            A quebra de paradigma
          </p>
          <h2
            id="problem-title"
            className="mt-4 text-3xl font-bold tracking-[-0.02em] text-white sm:text-5xl"
          >
            O mercado não espera você aprender sintaxe.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#A1A1AA] sm:text-lg">
            Você tem a regra do negócio na cabeça, mas trava na barreira
            técnica. A IA derrubou essa barreira — quem sabe conversar, agora
            sabe construir.
          </p>
        </SectionReveal>

        <StaggerContainer className="mt-12 grid gap-5 md:grid-cols-2">
          <StaggerItem>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="h-full rounded-2xl border border-white/10 bg-black p-8 transition-colors hover:border-white/20"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                <Hourglass className="h-5 w-5 text-[#71717A]" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-white">Tempo perdido</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#A1A1AA]">
                O jeito antigo de tirar ideias do papel:
              </p>
              <ul className="mt-5 space-y-3 text-sm text-[#A1A1AA]">
                {[
                  "Meses aprendendo sintaxe antes do primeiro projeto",
                  "Dependência total de desenvolvedores caros",
                  "Ideias que morrem na planilha",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400/80" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </StaggerItem>

          <StaggerItem>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="relative h-full overflow-hidden rounded-2xl border border-[#0070F3]/25 bg-gradient-to-b from-[#0070F3]/[0.08] to-black p-8 transition-colors hover:border-[#0070F3]/40"
            >
              <div
                aria-hidden="true"
                className="absolute -top-20 right-[-60px] h-48 w-48 rounded-full bg-[#0070F3]/20 blur-[80px]"
              />
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#0070F3] shadow-[0_0_24px_-4px_rgba(0,112,243,0.6)]">
                <Zap className="h-5 w-5 text-white" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-white">Velocidade de execução</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#A1A1AA]">
                O novo paradigma com IA:
              </p>
              <ul className="mt-5 space-y-3 text-sm text-white/90">
                {[
                  "Descreva a ideia em português, receba o sistema",
                  "Itere conversando — sem travar em erro de código",
                  "Publique na nuvem no mesmo dia",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Brain, MessagesSquare, Rocket } from "lucide-react";
import { SectionReveal, StaggerContainer, StaggerItem } from "./SectionReveal";

const STEPS = [
  {
    n: "01",
    icon: Brain,
    title: "Pense",
    desc: "Estruture a regra do seu negócio. Você aprende a transformar uma ideia solta em um escopo claro que a IA entende de primeira.",
    tag: "visão → escopo",
  },
  {
    n: "02",
    icon: MessagesSquare,
    title: "Dialogue",
    desc: "Use prompts validados para a IA escrever o código. Copie, ajuste e itere conversando — sem decorar sintaxe.",
    tag: "prompt → código",
  },
  {
    n: "03",
    icon: Rocket,
    title: "Publique",
    desc: "Faça o deploy automático na nuvem. Seu sistema no ar, com link próprio, pronto para vender ou operar.",
    tag: "código → nuvem",
  },
];

export function ProcessSection() {
  return (
    <section
      id="jornada"
      aria-labelledby="process-title"
      className="relative border-t border-white/10 bg-black py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="bg-grid-subtle absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,black,transparent)]"
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#0070F3] uppercase">
            A jornada
          </p>
          <h2
            id="process-title"
            className="mt-4 text-3xl font-bold tracking-[-0.02em] text-white sm:text-5xl"
          >
            Da ideia ao ar em 3 passos.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#A1A1AA] sm:text-lg">
            Um método direto, sem enrolação, feito para quem nunca programou.
          </p>
        </SectionReveal>

        <StaggerContainer className="mt-12 grid gap-5 md:grid-cols-3">
          {STEPS.map((s) => (
            <StaggerItem key={s.n}>
              <motion.article
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A] p-7 transition-colors hover:border-white/20"
              >
                <div className="flex items-start justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-colors group-hover:border-[#0070F3]/40">
                    <s.icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-sm text-[#52525B]">{s.n}</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#A1A1AA]">{s.desc}</p>
                <span className="mt-5 inline-block rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-[#71717A]">
                  {s.tag}
                </span>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

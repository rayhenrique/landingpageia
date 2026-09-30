"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, Globe, Layers } from "lucide-react";
import { SectionReveal, StaggerContainer, StaggerItem } from "./SectionReveal";

const PROJECTS = [
  {
    icon: Globe,
    title: "Landing pages de alta conversão",
    desc: "Páginas rápidas, elegantes e otimizadas para capturar leads e vender todos os dias.",
    bullets: ["Copy + design + formulário", "Publicada em minutos"],
  },
  {
    icon: BarChart3,
    title: "Dashboards de gestão",
    desc: "Painéis com gráficos, filtros e métricas para enxergar seu negócio em tempo real.",
    bullets: ["Gráficos e KPIs", "Dados organizados"],
  },
  {
    icon: Layers,
    title: "SaaS simples",
    desc: "Sistemas completos com login, banco de dados e pagamentos para validar sua startup.",
    bullets: ["Login + banco de dados", "Pronto para cobrar"],
  },
];

function SpotlightCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: -400, y: -400 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
      onMouseLeave={() => setPos({ x: -400, y: -400 })}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={`group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A] p-7 transition-colors hover:border-white/20 ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(420px circle at ${pos.x}px ${pos.y}px, rgba(0,112,243,0.12), transparent 65%)`,
        }}
      />
      <div className="relative">{children}</div>
    </motion.div>
  );
}

export function ShowcaseSection() {
  return (
    <section
      aria-labelledby="showcase-title"
      className="border-t border-white/10 bg-[#0A0A0A] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#0070F3] uppercase">
            Resultado real
          </p>
          <h2
            id="showcase-title"
            className="mt-4 text-3xl font-bold tracking-[-0.02em] text-white sm:text-5xl"
          >
            O que você será capaz de criar
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#A1A1AA] sm:text-lg">
            Não é teoria. Ao final, você publica projetos de verdade.
          </p>
        </SectionReveal>

        <StaggerContainer className="mt-12 grid gap-5 md:grid-cols-3">
          {PROJECTS.map((p) => (
            <StaggerItem key={p.title}>
              <SpotlightCard>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                  <p.icon className="h-5 w-5 text-white" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-white">
                  {p.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#A1A1AA]">{p.desc}</p>
                <ul className="mt-5 space-y-2">
                  {p.bullets.map((b) => (
                    <li
                      key={b}
                      className="inline-block rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-[#A1A1AA] not-last:mr-2"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

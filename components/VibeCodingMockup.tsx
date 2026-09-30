"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BarChart3, Loader2, Sparkles, Terminal } from "lucide-react";

const FULL_PROMPT = "Crie um painel de vendas com gráficos...";
const STAGE_LABELS = ["Prompt", "Gerando código", "Deploy preview"];
const STAGE_DURATION = 3400;

const CODE_LINES = [
  { w: "92%", c: "bg-[#0070F3]/70" },
  { w: "78%", c: "bg-violet-500/60" },
  { w: "85%", c: "bg-white/25" },
  { w: "64%", c: "bg-[#0070F3]/50" },
  { w: "88%", c: "bg-white/20" },
  { w: "71%", c: "bg-violet-400/50" },
  { w: "80%", c: "bg-white/15" },
  { w: "58%", c: "bg-[#0070F3]/40" },
];

const CHART_BARS = [38, 62, 48, 78, 56, 92, 70];

export function VibeCodingMockup() {
  const [stage, setStage] = useState(0);
  const [typed, setTyped] = useState("");

  // Ciclo contínuo Prompt -> Código -> UI
  useEffect(() => {
    const t = setInterval(() => {
      setStage((s) => (s + 1) % 3);
    }, STAGE_DURATION);
    return () => clearInterval(t);
  }, []);

  // Efeito de digitação no estágio 0
  useEffect(() => {
    if (stage !== 0) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reset intencional do typewriter a cada ciclo
    setTyped("");
    let i = 0;
    const typing = setInterval(() => {
      i += 1;
      setTyped(FULL_PROMPT.slice(0, i));
      if (i >= FULL_PROMPT.length) clearInterval(typing);
    }, 42);
    return () => clearInterval(typing);
  }, [stage]);

  return (
    <div className="relative mx-auto w-full max-w-[580px]">
      {/* Glow de fundo */}
      <div
        aria-hidden="true"
        className="absolute -inset-8 rounded-[32px] bg-gradient-to-br from-[#0070F3]/20 via-[#7928CA]/15 to-transparent blur-2xl"
      />

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A]/90 shadow-[0_20px_80px_-20px_rgba(0,112,243,0.35)] backdrop-blur-xl">
        {/* Barra da janela */}
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            </span>
            <span className="ml-2 hidden font-mono text-xs text-[#71717A] sm:block">
              vibe-coding — IA
            </span>
          </div>
          <div
            aria-live="polite"
            className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-[#A1A1AA]"
          >
            <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0070F3] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#0070F3]" />
            </span>
            {STAGE_LABELS[stage]}
          </div>
        </div>

        {/* Área de conteúdo — altura fixa p/ evitar shift */}
        <div className="relative h-[330px] p-4 sm:h-[350px] sm:p-5">
          <AnimatePresence mode="wait">
            {stage === 0 && (
              <motion.div
                key="prompt"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="flex h-full flex-col justify-center"
              >
                <div className="rounded-xl border border-[#0070F3]/25 bg-[#0070F3]/[0.07] p-4">
                  <div className="mb-2.5 flex items-center gap-2 text-xs font-medium text-[#7AB8FF]">
                    <Terminal className="h-3.5 w-3.5" aria-hidden="true" />
                    Seu prompt em português
                  </div>
                  <p className="min-h-[48px] font-mono text-[15px] leading-relaxed text-white sm:text-base">
                    {typed}
                    <span aria-hidden="true" className="animate-caret ml-0.5 inline-block h-[18px] w-[8px] translate-y-[3px] bg-[#0070F3]" />
                  </p>
                </div>
                <div className="mt-3 flex items-center gap-2 text-xs text-[#71717A]">
                  <Sparkles className="h-3.5 w-3.5 text-[#7928CA]" aria-hidden="true" />
                  A IA entende a regra do seu negócio, não sintaxe.
                </div>
              </motion.div>
            )}

            {stage === 1 && (
              <motion.div
                key="code"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="flex h-full flex-col justify-center"
              >
                <div className="mb-3 flex items-center gap-2 text-xs font-medium text-[#A1A1AA]">
                  <Loader2 className="h-3.5 w-3.5 animate-spin text-[#0070F3]" aria-hidden="true" />
                  IA escrevendo o código...
                </div>
                <div className="space-y-2.5 rounded-xl border border-white/10 bg-black/60 p-4">
                  {CODE_LINES.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.09, duration: 0.3 }}
                      style={{ width: line.w }}
                      className={`animate-shimmer h-2.5 rounded-full ${line.c}`}
                    />
                  ))}
                </div>
                <div className="mt-3 flex gap-1.5" aria-hidden="true">
                  <span className="rounded border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] text-[#71717A]">
                    next.js
                  </span>
                  <span className="rounded border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] text-[#71717A]">
                    tailwind
                  </span>
                  <span className="rounded border border-[#0070F3]/30 bg-[#0070F3]/10 px-2 py-0.5 font-mono text-[10px] text-[#7AB8FF]">
                    deploy auto
                  </span>
                </div>
              </motion.div>
            )}

            {stage === 2 && (
              <motion.div
                key="ui"
                initial={{ opacity: 0, scale: 0.97, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                transition={{ duration: 0.4 }}
                className="flex h-full flex-col"
              >
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[#0070F3] to-[#7928CA]">
                      <BarChart3 className="h-4 w-4 text-white" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-[13px] font-semibold leading-none text-white">
                        Painel de Vendas
                      </p>
                      <p className="mt-1 text-[11px] leading-none text-emerald-400">
                        ● Publicado na nuvem
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[10px] font-medium text-[#A1A1AA]">
                    sua-app.vercel.app
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { k: "Receita", v: "R$ 48,2k" },
                    { k: "Pedidos", v: "1.284" },
                    { k: "Conversão", v: "4,8%" },
                  ].map((kpi, i) => (
                    <motion.div
                      key={kpi.k}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + i * 0.1 }}
                      className="rounded-lg border border-white/10 bg-white/[0.03] p-2.5"
                    >
                      <p className="text-[10px] text-[#71717A]">{kpi.k}</p>
                      <p className="mt-0.5 text-sm font-bold tracking-tight text-white">
                        {kpi.v}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-2.5 flex flex-1 items-end justify-between gap-1.5 rounded-lg border border-white/10 bg-white/[0.02] p-3">
                  {CHART_BARS.map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 4 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 0.25 + i * 0.07, duration: 0.5, ease: "easeOut" }}
                      style={{ minHeight: 8 }}
                      className={`w-full rounded-sm ${
                        i === 5
                          ? "bg-gradient-to-t from-[#0070F3] to-[#79B8FF]"
                          : "bg-white/15"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Progresso do ciclo */}
        <div className="flex items-center justify-between border-t border-white/10 px-4 py-3">
          <div className="flex gap-1.5" role="tablist" aria-label="Etapas da demonstração">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                role="tab"
                aria-selected={stage === i}
                aria-label={`Etapa ${i + 1}: ${STAGE_LABELS[i]}`}
                onClick={() => setStage(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  stage === i ? "w-8 bg-[#0070F3]" : "w-3 bg-white/15 hover:bg-white/25"
                }`}
              />
            ))}
          </div>
          <span className="font-mono text-[11px] text-[#71717A]">
            {stage + 1} / 3
          </span>
        </div>
      </div>
    </div>
  );
}

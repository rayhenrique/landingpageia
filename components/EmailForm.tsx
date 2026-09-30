"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

type EmailFormProps = {
  id: string;
  buttonText?: string;
  source?: string;
  align?: "center" | "left";
};

export function EmailForm({ id, buttonText = "Garantir Vaga", align = "center" }: EmailFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status !== "idle") return;
    setStatus("loading");
    // Simula captura — troque por integração real (Resend, ConvertKit, etc.)
    setTimeout(() => setStatus("success"), 900);
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        role="status"
        aria-live="polite"
        className={`flex items-center gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-5 py-4 text-left ${
          align === "center" ? "mx-auto max-w-md" : "max-w-md"
        }`}
      >
        <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" aria-hidden="true" />
        <div>
          <p className="text-sm font-semibold text-white">Você está na lista!</p>
          <p className="text-sm text-[#A1A1AA]">
            Verifique seu e-mail para confirmar sua vaga na espera.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Formulário de captura de e-mail para lista de espera"
      className={`w-full max-w-md ${align === "center" ? "mx-auto" : ""}`}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:rounded-full sm:border sm:border-white/10 sm:bg-white/[0.04] sm:p-1.5 sm:pl-5 sm:backdrop-blur-xl sm:focus-within:border-white/20 sm:focus-within:ring-2 sm:focus-within:ring-[#0070F3]/40">
        <label htmlFor={id} className="sr-only">
          Seu melhor e-mail
        </label>
        <input
          id={id}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="seu melhor e-mail"
          aria-label="Seu melhor e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-5 text-[15px] text-white placeholder:text-[#71717A] focus:border-[#0070F3]/60 focus:outline-none focus:ring-2 focus:ring-[#0070F3]/40 sm:h-11 sm:border-0 sm:bg-transparent sm:px-0 sm:focus:ring-0"
        />
        <motion.button
          type="submit"
          aria-label="Garantir vaga na lista de espera"
          whileTap={{ scale: 0.98 }}
          disabled={status === "loading"}
          className="btn-glow inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#0070F3] px-6 text-sm font-semibold whitespace-nowrap text-white hover:bg-[#1a82ff] disabled:cursor-wait disabled:opacity-70 sm:h-11 sm:rounded-full"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Enviando...
            </>
          ) : (
            <>
              {buttonText}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </>
          )}
        </motion.button>
      </div>
      <p className={`mt-3 text-xs text-[#71717A] ${align === "center" ? "text-center" : "text-left"}`}>
        Sem spam. Apenas o convite de lançamento.
      </p>
    </form>
  );
}

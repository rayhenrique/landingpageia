"use client";

import { Globe, Mail, MessageCircle } from "lucide-react";
import { LinkedInIcon } from "./LinkedInIcon";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  YoutubeIcon,
} from "./BrandIcons";
import { CONTACT } from "./contact";
import { EmailForm } from "./EmailForm";
import { SectionReveal } from "./SectionReveal";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black">
      {/* CTA Final */}
      <section
        id="captura-final"
        aria-labelledby="final-cta-title"
        className="relative overflow-hidden py-20 sm:py-28"
      >
        <div aria-hidden="true" className="absolute inset-0">
          <div className="bg-grid-subtle absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
          <div className="absolute left-1/2 top-1/2 h-[300px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0070F3]/12 blur-[130px]" />
        </div>

        <div className="relative mx-auto max-w-2xl px-5 text-center sm:px-8">
          <SectionReveal>
            <h2
              id="final-cta-title"
              className="text-3xl font-bold leading-tight tracking-[-0.02em] text-white sm:text-5xl"
            >
              Sua próxima grande ideia está a um prompt de distância.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-[#A1A1AA]">
              Entre para a lista de espera do curso Programação com IA — Do
              Zero ao Deploy — e seja avisado no lançamento.
            </p>
            <div className="mt-8">
              <EmailForm id="email-footer" buttonText="Garantir Vaga" align="center" />
            </div>
            <p className="mt-5 text-sm text-[#71717A]">
              Prefere falar direto?{" "}
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Chamar no WhatsApp ${CONTACT.whatsappDisplay}`}
                className="font-medium text-white underline decoration-white/20 underline-offset-4 transition-colors hover:decoration-white/50"
              >
                Chame no WhatsApp {CONTACT.whatsappDisplay}
              </a>
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Contato + redes */}
      <div className="border-t border-white/10">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-[11px] font-extrabold tracking-tighter text-black"
              >
                KL
              </span>
              <p className="text-[15px] font-semibold tracking-tight text-white">
                KL Tecnologia
              </p>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#71717A]">
              Programação com IA — Do Zero ao Deploy. Com Ray Henrique.
            </p>
            <nav
              aria-label="Redes sociais"
              className="mt-5 flex items-center gap-2.5"
            >
              <a
                href="https://instagram.com/rayhenrique"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram (abre em nova aba)"
                title="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#A1A1AA] transition-colors hover:border-white/25 hover:text-white"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://facebook.com/rayhenrique"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook (abre em nova aba)"
                title="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#A1A1AA] transition-colors hover:border-white/25 hover:text-white"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://youtube.com.br/rayhenrique"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube (abre em nova aba)"
                title="YouTube"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#A1A1AA] transition-colors hover:border-white/25 hover:text-white"
              >
                <YoutubeIcon />
              </a>
              <a
                href="https://github.com/rayhenrique"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub (abre em nova aba)"
                title="GitHub"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#A1A1AA] transition-colors hover:border-white/25 hover:text-white"
              >
                <GithubIcon />
              </a>
              <a
                href="https://linkedin.com/in/rayhenrique"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn (abre em nova aba)"
                title="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#A1A1AA] transition-colors hover:border-white/25 hover:text-white"
              >
                <LinkedInIcon />
              </a>
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-[#71717A] uppercase">
              Contato direto
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={CONTACT.emailHref}
                  aria-label={`E-mail ${CONTACT.email}`}
                  className="inline-flex items-center gap-2 text-[#A1A1AA] transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 text-[#0070F3]" aria-hidden="true" />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`WhatsApp ${CONTACT.whatsappDisplay}`}
                  className="inline-flex items-center gap-2 text-[#A1A1AA] transition-colors hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                  {CONTACT.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.siteHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Site ${CONTACT.siteDisplay}`}
                  className="inline-flex items-center gap-2 text-[#A1A1AA] transition-colors hover:text-white"
                >
                  <Globe className="h-4 w-4 text-[#0070F3]" aria-hidden="true" />
                  {CONTACT.siteDisplay}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-[#71717A] uppercase">
              Navegação
            </p>
            <nav aria-label="Links do rodapé" className="mt-4 flex flex-col gap-3 text-sm">
              <a
                href="#jornada"
                className="text-[#A1A1AA] transition-colors hover:text-white"
              >
                Como funciona
              </a>
              <a
                href="#autor"
                className="text-[#A1A1AA] transition-colors hover:text-white"
              >
                Ray Henrique
              </a>
              <a
                href="#lista"
                className="text-[#A1A1AA] transition-colors hover:text-white"
              >
                Entrar na lista
              </a>
              <span className="flex gap-4 pt-1">
                <a
                  href="#"
                  aria-label="Política de privacidade"
                  className="text-[#71717A] transition-colors hover:text-white"
                >
                  Privacidade
                </a>
                <a
                  href="#"
                  aria-label="Termos de uso"
                  className="text-[#71717A] transition-colors hover:text-white"
                >
                  Termos
                </a>
              </span>
            </nav>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-6 sm:flex-row sm:px-8">
          <p className="text-sm text-[#71717A]">
            © {year} KL Tecnologia. Todos os direitos reservados.
          </p>
          <p className="text-xs text-[#52525B]">
            {CONTACT.email} · {CONTACT.siteDisplay}
          </p>
        </div>
      </div>
    </footer>
  );
}

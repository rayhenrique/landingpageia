"use client";

import { BadgeCheck, Globe, Mail, MessageCircle } from "lucide-react";
import { LinkedInIcon } from "./LinkedInIcon";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  YoutubeIcon,
} from "./BrandIcons";
import { CONTACT } from "./contact";
import { SectionReveal } from "./SectionReveal";

export function AuthorSection() {
  return (
    <section
      id="autor"
      aria-labelledby="author-title"
      className="border-t border-white/10 bg-black py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionReveal>
          <div className="grid items-center gap-10 rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 sm:p-12 md:grid-cols-[auto_1fr] md:gap-14">
            {/* Foto / avatar */}
            <div className="mx-auto md:mx-0">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 rounded-full bg-gradient-to-br from-[#0070F3]/30 to-[#7928CA]/30 blur-xl"
                />
                <div
                  role="img"
                  aria-label="Foto de Ray Henrique"
                  className="relative flex h-36 w-36 items-center justify-center rounded-full border border-white/15 bg-gradient-to-b from-[#1a1a1a] to-black text-4xl font-bold tracking-tighter text-white grayscale sm:h-44 sm:w-44"
                >
                  RH
                </div>
                <span className="absolute -right-1 -bottom-1 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[#0A0A0A]">
                  <BadgeCheck className="h-5 w-5 text-[#0070F3]" aria-hidden="true" />
                </span>
              </div>
            </div>

            <div className="text-center md:text-left">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#0070F3] uppercase">
                Quem vai guiar sua jornada?
              </p>
              <h2
                id="author-title"
                className="mt-3 text-3xl font-bold tracking-[-0.02em] text-white sm:text-4xl"
              >
                Ray Henrique
                <span className="mt-1 block text-base font-medium text-[#A1A1AA]">
                  Fundador da KL Tecnologia
                </span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-[#A1A1AA] md:mx-0">
                Anos de mercado conectando tecnologia a problemas reais de
                negócio. Ray traduz a engenharia de software para a linguagem
                do empreendedor — e agora usa IA para colocar o poder do Vale
                do Silício nas suas mãos, mesmo que você nunca tenha escrito
                uma linha de código.
              </p>

              {/* Contato direto */}
              <div className="mt-6 flex flex-col gap-2.5 text-sm md:items-start items-center">
                <a
                  href={CONTACT.emailHref}
                  aria-label={`Enviar e-mail para ${CONTACT.email}`}
                  className="inline-flex items-center gap-2 text-[#A1A1AA] transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 text-[#0070F3]" aria-hidden="true" />
                  {CONTACT.email}
                </a>
                <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 md:justify-start">
                  <a
                    href={CONTACT.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Conversar no WhatsApp ${CONTACT.whatsappDisplay}`}
                    className="inline-flex items-center gap-2 text-[#A1A1AA] transition-colors hover:text-white"
                  >
                    <MessageCircle className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                    {CONTACT.whatsappDisplay}
                  </a>
                  <a
                    href={CONTACT.siteHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visitar site ${CONTACT.siteDisplay}`}
                    className="inline-flex items-center gap-2 text-[#A1A1AA] transition-colors hover:text-white"
                  >
                    <Globe className="h-4 w-4 text-[#0070F3]" aria-hidden="true" />
                    {CONTACT.siteDisplay}
                  </a>
                </div>
              </div>

              {/* Redes sociais */}
              <nav
                aria-label="Redes sociais de Ray Henrique"
                className="mt-6 flex flex-wrap items-center justify-center gap-2.5 md:justify-start"
              >
                <a
                  href="https://linkedin.com/in/rayhenrique"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn de Ray Henrique (abre em nova aba)"
                  className="inline-flex h-10 items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 text-sm font-medium text-white transition-colors hover:border-white/25 hover:bg-white/[0.08]"
                >
                  <LinkedInIcon />
                  /in/rayhenrique
                </a>
                <a
                  href="https://instagram.com/rayhenrique"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram de Ray Henrique (abre em nova aba)"
                  title="Instagram"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-[#A1A1AA] transition-colors hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://facebook.com/rayhenrique"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook de Ray Henrique (abre em nova aba)"
                  title="Facebook"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-[#A1A1AA] transition-colors hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://youtube.com.br/rayhenrique"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube de Ray Henrique (abre em nova aba)"
                  title="YouTube"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-[#A1A1AA] transition-colors hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
                >
                  <YoutubeIcon />
                </a>
                <a
                  href="https://github.com/rayhenrique"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub de Ray Henrique (abre em nova aba)"
                  title="GitHub"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-[#A1A1AA] transition-colors hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
                >
                  <GithubIcon />
                </a>
              </nav>
              <p className="mt-4 text-xs text-[#71717A]">
                KL Tecnologia · Software que resolve negócio
              </p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

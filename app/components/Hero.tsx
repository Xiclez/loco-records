"use client";

import { motion } from "framer-motion";
import { RELEASES } from "../data/content";
import { Cover } from "./ui/Section";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero({ ready }: { ready: boolean }) {
  const latest = RELEASES.find((r) => r.latest) ?? RELEASES[0];

  return (
    <section id="top" className="scan overflow-hidden border-b border-line">
      <div className="relative z-10 mx-auto flex max-w-[1320px] flex-col gap-8 px-5 pb-10 pt-8 sm:gap-10 sm:px-8 sm:pb-12 sm:pt-14">
        {/* HUD superior */}
        <div className="flex flex-wrap justify-between gap-3 text-[9px] uppercase tracking-[0.3em] text-muted sm:text-[10px]">
          <span className="flex items-center gap-2">
            <span className="blink inline-block h-[7px] w-[7px] rounded-full bg-accent" aria-hidden="true" />
            SIGNAL // CUU-MX
          </span>
          <span className="hidden sm:inline">28.63° N · 106.08° W</span>
          <span className="hidden md:inline">CAT. LCR001 → LCR0[##]</span>
        </div>

        {/* Logotipo */}
        <div className="flex flex-col gap-2">
          <motion.h1
            initial={{ opacity: 0, filter: "blur(14px)" }}
            animate={ready ? { opacity: 1, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.9, ease }}
            className="font-display font-bold leading-[0.8] tracking-[-0.065em] text-[clamp(112px,23vw,340px)]"
          >
            <span className="glitch" data-text="LOCO">
              LOCO
            </span>
            <span className="sr-only"> Records</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : {}}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-3 text-[11px] uppercase tracking-[0.1em] sm:text-[clamp(14px,1.6vw,20px)] sm:tracking-[0.12em]"
            aria-label="Loading Collective, ahora Records"
          >
            <span className="text-accent">LO</span>
            <span className="text-dim line-through">ADING</span> <span className="text-accent">CO</span>
            <span className="text-dim line-through">LLECTIVE</span> <span className="text-muted">→</span> RECORDS
          </motion.p>
        </div>

        {/* Copy + último lanzamiento */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55, duration: 0.6, ease }}
          className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-10"
        >
          <div className="flex max-w-[560px] flex-col gap-6 sm:gap-7">
            <p className="text-[13px] leading-[1.7] text-soft sm:text-[15px]">
              <span className="text-accent">&gt;</span> Sello y colectivo de música electrónica desde Chihuahua, México. Techno, tech
              house, melodic y psytrance hechos en el desierto, sonando en todas partes.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#releases"
                className="inline-flex min-h-13 items-center justify-center gap-3 bg-accent px-7 text-[11px] font-bold uppercase tracking-[0.3em] text-bg sm:border sm:border-fg sm:bg-transparent sm:font-normal sm:text-fg sm:transition-colors sm:hover:bg-fg sm:hover:text-bg"
              >
                ▶ Escuchar lo nuevo
              </a>
              <a
                href="#artists"
                className="hidden min-h-13 items-center justify-center border border-line px-7 text-[11px] uppercase tracking-[0.3em] text-soft transition-colors hover:border-fg sm:inline-flex"
              >
                Ver artistas
              </a>
            </div>
          </div>

          <a
            href="#releases"
            className="group flex gap-4 border border-line bg-bg/70 p-3 sm:gap-5 sm:p-4 lg:w-[400px] lg:flex-none"
          >
            <div className="w-24 flex-none sm:w-32">
              <Cover pattern={latest.pattern} url={latest.coverUrl} alt={`Portada de ${latest.title}`}>
                <span className="absolute left-2 top-2 text-[8px] tracking-[0.2em] text-muted sm:text-[9px]">{latest.cat}</span>
              </Cover>
            </div>
            <div className="flex min-w-0 flex-col justify-between gap-2">
              <span className="self-start bg-accent px-2 py-1 text-[8px] font-bold tracking-[0.25em] text-bg sm:text-[9px]">
                LATEST RELEASE
              </span>
              <div className="flex flex-col gap-1">
                <span className="font-display text-lg font-bold tracking-[-0.02em] sm:text-[22px]">{latest.title}</span>
                <span className="text-[11px] text-muted sm:text-xs">{latest.artist}</span>
              </div>
              <span className="hidden text-[10px] tracking-[0.25em] text-soft sm:block">BEATPORT · SPOTIFY · TRAXSOURCE</span>
            </div>
          </a>
        </motion.div>

        {/* HUD inferior */}
        <div className="hidden items-end justify-between gap-4 text-[10px] tracking-[0.3em] text-muted sm:flex">
          <span>SCROLL_TO_LOAD ↓</span>
          <div className="flex flex-col items-end gap-1.5">
            <div className="barcode h-7 w-[140px]" aria-hidden="true" />
            <span>ID · LOCO-CUU-2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}

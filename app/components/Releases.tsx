"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FILTERS, RELEASES, type Genre } from "../data/content";
import { Cover, Section, SectionHeader } from "./ui/Section";

export default function Releases() {
  const [filter, setFilter] = useState<Genre | "ALL">("ALL");

  const list = useMemo(() => (filter === "ALL" ? RELEASES : RELEASES.filter((r) => r.genre === filter)), [filter]);

  return (
    <Section id="releases" innerClassName="flex flex-col gap-10">
      <SectionHeader tag="02 // NEW RELEASES" title="Catálogo">
        {/* Filtros: scroll horizontal en móvil */}
        <div className="-mx-5 w-[calc(100%+2.5rem)] overflow-x-auto px-5 sm:mx-0 sm:w-auto sm:px-0" role="group" aria-label="Filtrar por género">
          <div className="flex gap-2 text-[11px] tracking-[0.2em]">
            {FILTERS.map((f) => {
              const active = filter === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFilter(f.id)}
                  aria-pressed={active}
                  className={`min-h-10 shrink-0 whitespace-nowrap border px-4 transition-colors ${
                    active ? "border-fg bg-fg text-bg" : "border-line text-soft hover:border-fg"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>
      </SectionHeader>

      <motion.ul layout className="grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-6 sm:gap-y-8 lg:grid-cols-3 xl:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {list.map((r) => {
            const href = r.links.beatport ?? r.links.traxsource ?? r.links.spotify;
            return (
              <motion.li
                layout
                key={r.cat + r.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <a
                  href={href ?? "#releases"}
                  target={href ? "_blank" : undefined}
                  rel={href ? "noopener noreferrer" : undefined}
                  className="group flex flex-col gap-2.5 sm:gap-3.5"
                >
                  <Cover pattern={r.pattern} url={r.coverUrl} alt={`Portada de ${r.title}`}>
                    <span className="absolute left-2 top-2 text-[8px] tracking-[0.2em] text-muted sm:left-3 sm:top-3 sm:text-[10px]">
                      {r.cat}
                    </span>
                    <span className="absolute bottom-2 right-2 hidden font-display text-[28px] font-bold tracking-[-0.04em] text-[#2e2e2e] sm:block">
                      LOCO
                    </span>
                  </Cover>
                  <div className="hidden justify-between gap-3 text-[10px] tracking-[0.2em] text-muted sm:flex">
                    <span>{r.genreLabel ?? r.genre}</span>
                    <span>{r.date}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-display text-[15px] font-bold leading-tight tracking-[-0.02em] sm:text-[22px]">{r.title}</span>
                    <span className="text-[10px] text-soft sm:text-xs">{r.artist}</span>
                  </div>
                </a>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </motion.ul>

      {list.length === 0 && (
        <p className="text-sm text-muted">Aún no hay lanzamientos de este género en el catálogo. Prueba con ALL.</p>
      )}

      <div className="flex flex-col gap-5 border border-dashed border-[#333] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="flex flex-col gap-1.5">
          <span className="text-[10px] tracking-[0.3em] text-muted">SERIE // COMPILADO</span>
          <span className="font-display text-2xl font-bold sm:text-[28px]">This Is Loco Vol. 1</span>
          <span className="text-xs text-soft">15 artistas · 68–140 BPM · el compilado que ya llevaba el nombre</span>
        </div>
        <a
          href="https://www.beatport.com/label/loading-collective/118281"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center border border-fg px-6 text-[11px] tracking-[0.3em] transition-colors hover:bg-fg hover:text-bg"
        >
          CATÁLOGO COMPLETO →
        </a>
      </div>
    </Section>
  );
}

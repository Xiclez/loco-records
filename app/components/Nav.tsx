"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#releases", label: "Releases" },
  { href: "#artists", label: "Artists" },
  { href: "#events", label: "Events" },
  { href: "#news", label: "News" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"ES" | "EN">("ES");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1320px] items-center justify-between gap-4 px-5 py-3 sm:px-8 sm:py-4" aria-label="Principal">
        <a href="#top" className="flex items-baseline gap-2.5" aria-label="LOCO Records, inicio">
          <span className="font-display text-[22px] font-bold tracking-[-0.04em] sm:text-[26px]">LOCO</span>
          <span className="hidden text-[10px] tracking-[0.3em] text-muted sm:inline">RECORDS</span>
        </a>

        <ul className="hidden items-center gap-7 text-[11px] uppercase tracking-[0.25em] lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-accent">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() => setLang((l) => (l === "ES" ? "EN" : "ES"))}
            className="hidden min-h-11 px-1 text-[11px] tracking-[0.2em] text-muted sm:inline-flex sm:items-center"
            aria-label={`Idioma: ${lang}. Cambiar idioma`}
          >
            <span className={lang === "ES" ? "text-fg" : ""}>ES</span>&nbsp;/&nbsp;
            <span className={lang === "EN" ? "text-fg" : ""}>EN</span>
          </button>
          <a
            href="#demos"
            className="hidden min-h-11 items-center bg-accent px-5 text-[11px] font-bold uppercase tracking-[0.25em] text-bg transition-opacity hover:opacity-85 sm:inline-flex"
          >
            Enviar demo →
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="grid h-11 w-11 place-items-center border border-line lg:hidden"
            aria-label="Abrir menú"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <Menu size={18} strokeWidth={1.5} />
          </button>
        </div>
      </nav>
    </header>

      {/* Fuera del header: backdrop-filter crearía un containing block para el fixed */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex flex-col bg-bg px-5 py-3 lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menú"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-[22px] font-bold tracking-[-0.04em]">LOCO</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid h-11 w-11 place-items-center border border-line"
                aria-label="Cerrar menú"
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>
            <ul className="mt-10 flex flex-col border-t border-line">
              {LINKS.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                  className="border-b border-line"
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between py-5 font-display text-4xl font-bold tracking-[-0.03em]"
                  >
                    {l.label}
                    <span className="text-[10px] tracking-[0.3em] text-muted">0{i + 1}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-auto flex flex-col gap-4 pb-4">
              <a
                href="#demos"
                onClick={() => setOpen(false)}
                className="flex min-h-13 items-center justify-center bg-accent text-[11px] font-bold tracking-[0.3em] text-bg"
              >
                ENVIAR DEMO →
              </a>
              <button
                type="button"
                onClick={() => setLang((l) => (l === "ES" ? "EN" : "ES"))}
                className="min-h-11 text-[11px] tracking-[0.2em] text-muted"
              >
                <span className={lang === "ES" ? "text-fg" : ""}>ES</span> / <span className={lang === "EN" ? "text-fg" : ""}>EN</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

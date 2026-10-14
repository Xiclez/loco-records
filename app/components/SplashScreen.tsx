"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BOOT_LOGS: [string, string?][] = [
  ["INITIALIZING LOADING_COLLECTIVE.SYS", "OK"],
  ["MOUNTING CATALOG LCR001 → LCR0[##]", "OK"],
  ["SYNCING ROSTER: CHIHUAHUA / GDL / MX", "OK"],
  ["LOADING GENRES: TECHNO · TECH_HOUSE · PSY", "OK"],
  ["CALIBRATING BPM RANGE 68 – 140", "LOCKED"],
  ["LINKING DISTRO: TRIPLEPOINT", "OK"],
  ["REBRAND PROTOCOL: LO·ADING CO·LLECTIVE → LOCO"],
  ["COMPRESSING NAME"],
];

type Phase = "boot" | "load" | "collapse" | "done";

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [lines, setLines] = useState(0);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<Phase>("boot");

  // Usuarios con reduced-motion: splash corto y sin animaciones.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const t = setTimeout(onComplete, 600);
      return () => clearTimeout(t);
    }
  }, [onComplete]);

  // Fase 1: logs
  useEffect(() => {
    if (phase !== "boot") return;
    const id = setInterval(() => setLines((n) => Math.min(n + 1, BOOT_LOGS.length)), 140);
    return () => clearInterval(id);
  }, [phase]);

  useEffect(() => {
    if (phase === "boot" && lines >= BOOT_LOGS.length) {
      const t = setTimeout(() => setPhase("load"), 150);
      return () => clearTimeout(t);
    }
  }, [lines, phase]);

  // Fase 2: barra
  useEffect(() => {
    if (phase !== "load") return;
    const id = setInterval(
      () => setProgress((p) => Math.min(100, p + 8 + Math.floor(Math.random() * 14))),
      90,
    );
    return () => clearInterval(id);
  }, [phase]);

  useEffect(() => {
    if (phase === "load" && progress >= 100) {
      const t = setTimeout(() => setPhase("collapse"), 200);
      return () => clearTimeout(t);
    }
  }, [progress, phase]);

  // Fase 3: colapso → salida
  useEffect(() => {
    if (phase !== "collapse") return;
    const t = setTimeout(() => setPhase("done"), 1500);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase === "done") onComplete();
  }, [phase, onComplete]);

  const collapsed = phase === "collapse" || phase === "done";

  return (
    <motion.div
      role="status"
      aria-label="Cargando LOCO Records"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(16px)", scale: 1.04 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[90] flex flex-col justify-between overflow-hidden bg-bg px-5 py-6 sm:px-10 sm:py-10 lg:px-14 lg:py-12"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.045) 1px,transparent 1px)",
        backgroundSize: "44px 44px",
      }}
    >
      <div className="flex justify-between gap-4 text-[10px] tracking-[0.3em] text-muted sm:text-[11px]">
        <span>LOCO_OS v1.0 // BOOT</span>
        <span className="hidden sm:inline">CUU-MX · 28.63° N · 106.08° W</span>
      </div>

      <div className="flex flex-col-reverse gap-10 lg:flex-row lg:items-end lg:gap-14">
        <ul className="flex flex-col gap-1.5 text-[10px] leading-relaxed text-muted sm:text-[11px] lg:w-[420px] lg:flex-none">
          {BOOT_LOGS.slice(0, lines).map(([text, status], i) => {
            const isRebrand = text.startsWith("REBRAND");
            const isLast = i === BOOT_LOGS.length - 1;
            return (
              <li key={text} className={isRebrand ? "text-accent" : undefined}>
                &gt; {text} …{" "}
                {status && <span className="text-fg">[{status}]</span>}
                {isLast && <span className="blink text-accent">█</span>}
              </li>
            );
          })}
        </ul>

        <div className="flex min-w-0 flex-1 flex-col gap-5">
          <div
            className={`font-display font-bold leading-[0.9] whitespace-nowrap text-[clamp(56px,13vw,150px)] transition-[letter-spacing] duration-700 ${
              collapsed ? "collapsed tracking-[-0.06em]" : "tracking-[-0.02em]"
            }`}
            aria-hidden="true"
          >
            <span>LO</span>
            <span className="cut cut-a">ADING</span>
            <br />
            <span>CO</span>
            <span className="cut cut-b">LLECTIVE</span>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: collapsed ? 1 : 0 }}
            transition={{ duration: 0.6, delay: collapsed ? 0.6 : 0 }}
            className="text-xs tracking-[0.5em] text-accent sm:text-sm"
          >
            RECORDS ▸ CHIHUAHUA, MX
          </motion.p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between text-[10px] tracking-[0.3em] text-muted sm:text-[11px]">
          <span>LOADING {String(progress).padStart(3, "0")}%</span>
          <button
            type="button"
            onClick={onComplete}
            className="min-h-11 px-2 tracking-[0.3em] text-muted transition-colors hover:text-fg"
          >
            SKIP ▸
          </button>
        </div>
        <div className="h-1.5 border border-line bg-[#1a1a1a]">
          <div className="h-full bg-accent transition-[width] duration-100" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </motion.div>
  );
}

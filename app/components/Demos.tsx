"use client";

import { useState, type FormEvent } from "react";
import { Section } from "./ui/Section";

type Status = "idle" | "sending" | "sent" | "error";

const inputCls =
  "min-h-12 border border-[#333] bg-bg px-3.5 font-mono text-sm text-fg placeholder:text-muted focus:border-accent focus:outline-none";

export default function Demos() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const link = String(data.get("link") ?? "");
    if (!/soundcloud\.com\//i.test(link)) {
      setError("El link debe ser de SoundCloud (privado). Ejemplo: https://soundcloud.com/tu-alias/s-xxxx");
      setStatus("error");
      return;
    }
    setError("");
    setStatus("sending");
    // TODO: conectar a EmailJS / Formspree / API route. Por ahora simula el envío.
    await new Promise((r) => setTimeout(r, 900));
    setStatus("sent");
    form.reset();
  }

  return (
    <Section id="demos" innerClassName="grid gap-10 lg:grid-cols-2 lg:gap-16">
      <div className="flex flex-col gap-6">
        <span className="text-[10px] tracking-[0.3em] text-accent sm:text-[11px]">[ 06 // DEMOS ]</span>
        <h2 className="font-display text-[40px] font-bold leading-[0.95] tracking-[-0.04em] sm:text-[56px] lg:text-[72px]">
          ¿Haces música?
          <br />
          <span className="text-muted">Mándala.</span>
        </h2>
        <p className="max-w-[520px] text-sm leading-[1.8] text-soft">
          Escuchamos todo lo que llega. Envía un link privado de SoundCloud (no archivos adjuntos) con tracks terminados y
          masterizados. Si encaja con el sello, te escribimos en [## DÍAS].
        </p>
      </div>

      <form onSubmit={onSubmit} className="flex flex-col gap-4 border border-line bg-panel p-5 sm:p-7">
        <label className="flex flex-col gap-2 text-[10px] tracking-[0.25em] text-muted">
          NOMBRE ARTÍSTICO
          <input name="alias" type="text" required placeholder="Tu alias" className={inputCls} autoComplete="nickname" />
        </label>
        <label className="flex flex-col gap-2 text-[10px] tracking-[0.25em] text-muted">
          EMAIL
          <input name="email" type="email" required placeholder="tu@correo.com" className={inputCls} autoComplete="email" />
        </label>
        <label className="flex flex-col gap-2 text-[10px] tracking-[0.25em] text-muted">
          LINK PRIVADO (SOUNDCLOUD)
          <input
            name="link"
            type="url"
            required
            placeholder="https://soundcloud.com/…/s-xxxx"
            className={inputCls}
            aria-invalid={status === "error"}
            aria-describedby="demo-status"
          />
        </label>
        <label className="flex flex-col gap-2 text-[10px] tracking-[0.25em] text-muted">
          GÉNERO
          <select name="genre" className={inputCls} defaultValue="">
            <option value="" disabled>
              Elige uno
            </option>
            <option>Techno</option>
            <option>Tech House</option>
            <option>Melodic</option>
            <option>Psytrance</option>
            <option>Otro</option>
          </select>
        </label>
        <button
          type="submit"
          disabled={status === "sending"}
          className="min-h-13 bg-accent font-mono text-xs font-bold tracking-[0.3em] text-bg transition-opacity hover:opacity-85 disabled:opacity-60"
        >
          {status === "sending" ? "TRANSMITIENDO…" : "TRANSMITIR DEMO →"}
        </button>
        <p id="demo-status" role="status" className="min-h-5 text-xs">
          {status === "sent" && <span className="text-accent">Demo transmitido. Te escribimos si encaja con el sello.</span>}
          {status === "error" && <span className="text-[#ff6b61]">{error}</span>}
        </p>
      </form>
    </Section>
  );
}

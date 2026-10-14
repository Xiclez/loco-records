"use client";

import { useState, type FormEvent } from "react";

export default function Newsletter() {
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: conectar a Mailchimp / Brevo / Resend.
    setDone(true);
    e.currentTarget.reset();
  }

  return (
    <section className="border-b border-line">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-6 px-5 py-12 sm:px-8 sm:py-14 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="font-display text-[28px] font-bold tracking-[-0.02em] sm:text-[32px]">Entra a la lista.</h2>
          <p className="text-[13px] text-soft">Lanzamientos, fechas y preventas antes que nadie. Cero spam.</p>
        </div>
        <form onSubmit={onSubmit} className="flex w-full flex-col gap-2 sm:flex-row sm:gap-0 lg:max-w-[520px]">
          <label htmlFor="nl-email" className="sr-only">
            Email
          </label>
          <input
            id="nl-email"
            type="email"
            required
            placeholder="tu@correo.com"
            autoComplete="email"
            className="min-h-13 flex-1 border border-[#333] bg-bg px-4 font-mono text-sm text-fg placeholder:text-muted focus:border-accent focus:outline-none"
          />
          <button
            type="submit"
            className="min-h-13 bg-fg px-6 font-mono text-[11px] font-bold tracking-[0.3em] text-bg transition-colors hover:bg-accent"
          >
            {done ? "SUSCRITO ✓" : "SUSCRIBIR"}
          </button>
        </form>
      </div>
    </section>
  );
}

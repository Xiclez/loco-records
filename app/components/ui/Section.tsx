import type { ReactNode } from "react";

export function Section({
  id,
  children,
  className = "",
  innerClassName = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <section id={id} className={`border-b border-line ${className}`}>
      <div className={`mx-auto max-w-[1320px] px-5 py-16 sm:px-8 sm:py-20 lg:py-24 ${innerClassName}`}>{children}</div>
    </section>
  );
}

export function SectionHeader({ tag, title, children }: { tag: string; title: ReactNode; children?: ReactNode }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-6">
      <div className="flex flex-col gap-4">
        <span className="text-[10px] tracking-[0.3em] text-accent sm:text-[11px]">[ {tag} ]</span>
        <h2 className="font-display text-[44px] font-bold leading-[0.95] tracking-[-0.04em] sm:text-[56px] lg:text-[72px]">{title}</h2>
      </div>
      {children}
    </div>
  );
}

export function Cover({ pattern, url, alt, children }: { pattern: number; url?: string; alt: string; children?: ReactNode }) {
  return (
    <div className={`relative aspect-square overflow-hidden border border-line transition-colors group-hover:border-accent ${url ? "" : `cv-${pattern}`}`}>
      {url ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={url} alt={alt} className="h-full w-full object-cover" loading="lazy" />
      ) : null}
      {children}
    </div>
  );
}

import { NEWS } from "../data/content";
import { Section, SectionHeader } from "./ui/Section";

export default function News() {
  return (
    <Section id="news" innerClassName="flex flex-col gap-10">
      <SectionHeader tag="05 // NEWS" title="Transmisiones">
        <a href="#news" className="text-[11px] tracking-[0.3em] text-soft transition-colors hover:text-accent">
          TODAS LAS NOTAS →
        </a>
      </SectionHeader>

      {/* Carrusel con snap en móvil, grid en desktop */}
      <ul className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 lg:grid-cols-3">
        {NEWS.map((n) => (
          <li key={n.title} className="w-[82%] flex-none snap-start sm:w-auto">
            <a href={n.href ?? "#news"} className="group flex h-full flex-col gap-4 border border-line bg-panel p-4 transition-colors hover:border-[#444] sm:p-5">
              {n.imageUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={n.imageUrl} alt="" className="aspect-video w-full object-cover" loading="lazy" />
              ) : (
                <div className="ph flex aspect-video items-end p-3 text-[10px] tracking-[0.2em] text-muted">[IMAGEN]</div>
              )}
              <div className="flex justify-between text-[10px] tracking-[0.2em]">
                <span className="text-accent">{n.cat}</span>
                <span className="text-muted">{n.date}</span>
              </div>
              <h3 className="font-display text-xl font-bold leading-tight group-hover:text-accent sm:text-[22px]">{n.title}</h3>
              <p className="text-[13px] leading-relaxed text-soft">{n.excerpt}</p>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

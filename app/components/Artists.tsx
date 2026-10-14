import { ARTISTS, type Artist } from "../data/content";
import { Section, SectionHeader } from "./ui/Section";

function Photo({ a, className }: { a: Artist; className: string }) {
  if (a.photoUrl) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={a.photoUrl} alt={a.name} className={`object-cover grayscale ${className}`} loading="lazy" />;
  }
  return <div className={`ph ${className}`} aria-hidden="true" />;
}

export default function Artists() {
  return (
    <Section id="artists" innerClassName="flex flex-col gap-10">
      <SectionHeader tag="03 // ARTISTS" title="Roster" />

      {/* Móvil: lista compacta */}
      <ul className="flex flex-col border-t border-line sm:hidden">
        {ARTISTS.map((a) => (
          <li key={a.id} className="border-b border-line">
            <a href={a.href ?? "#artists"} className="flex min-h-16 items-center gap-3.5 py-2">
              <Photo a={a} className="h-11 w-11 flex-none" />
              <span className="flex flex-1 flex-col gap-0.5">
                <span className="font-display text-lg font-bold">{a.name}</span>
                <span className="text-[9px] tracking-[0.2em] text-muted">
                  {a.city} · {a.genre}
                </span>
              </span>
              <span className="text-accent" aria-hidden="true">↗</span>
            </a>
          </li>
        ))}
      </ul>

      {/* Tablet / desktop: grid con fotos */}
      <ul className="hidden grid-cols-2 gap-px border border-line bg-line sm:grid lg:grid-cols-3 xl:grid-cols-4">
        {ARTISTS.map((a) => (
          <li key={a.id} className="bg-bg">
            <a href={a.href ?? "#artists"} className="group flex h-full flex-col gap-4 p-4">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Photo a={a} className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]" />
                <div className="absolute inset-x-3 bottom-3 flex justify-between text-[10px] tracking-[0.2em] text-muted">
                  <span>{a.photoUrl ? "" : "[FOTO]"}</span>
                  <span>{a.id}</span>
                </div>
              </div>
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-display text-2xl font-bold tracking-[-0.02em] transition-colors group-hover:text-accent">{a.name}</span>
                <span className="text-accent" aria-hidden="true">↗</span>
              </div>
              <div className="flex justify-between text-[10px] tracking-[0.2em] text-muted">
                <span>{a.city}</span>
                <span>{a.genre}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

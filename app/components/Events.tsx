import { EVENTS } from "../data/content";
import { Section, SectionHeader } from "./ui/Section";

export default function Events() {
  return (
    <Section id="events" innerClassName="flex flex-col gap-10">
      <SectionHeader tag="04 // EVENTS" title="Próximas fechas" />
      <ul className="flex flex-col border-t border-line">
        {EVENTS.map((e, i) => (
          <li
            key={i}
            className="grid grid-cols-[auto_1fr] items-center gap-x-5 gap-y-3 border-b border-line py-6 sm:py-7 md:grid-cols-[120px_1fr_220px_auto] md:gap-6"
          >
            <span className="font-display text-2xl font-bold sm:text-[32px]">{e.date}</span>
            <div className="flex min-w-0 flex-col gap-1.5">
              <span className="font-display text-lg font-bold sm:text-[22px]">{e.name}</span>
              <span className="text-xs text-muted">{e.lineup}</span>
            </div>
            <span className="col-span-2 text-[10px] tracking-[0.2em] text-soft md:col-span-1 md:text-[11px]">{e.venue}</span>
            <a
              href={e.ticketsUrl ?? "#events"}
              className="col-span-2 inline-flex min-h-11 items-center justify-center border border-fg px-5 text-[11px] tracking-[0.25em] transition-colors hover:bg-fg hover:text-bg md:col-span-1"
            >
              TICKETS →
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

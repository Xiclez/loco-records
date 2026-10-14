import { BOOKING_EMAIL, SOCIALS } from "../data/content";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto flex max-w-[1320px] flex-col gap-10 px-5 pb-8 pt-12 sm:gap-12 sm:px-8 sm:pb-10 sm:pt-16">
        <div
          className="select-none font-display font-bold leading-[0.8] tracking-[-0.065em] text-[#141414] text-[clamp(96px,18vw,260px)]"
          aria-hidden="true"
        >
          LOCO
        </div>
        <div className="flex flex-col gap-8 text-[11px] tracking-[0.2em] md:flex-row md:justify-between">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 uppercase">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-1.5 text-muted md:text-right">
            <span>BOOKING · {BOOKING_EMAIL}</span>
            <span>DISTRIBUIDO POR TRIPLEPOINT</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-t border-line pt-6 text-[9px] tracking-[0.2em] text-muted sm:flex-row sm:justify-between sm:text-[10px]">
          <span>© {new Date().getFullYear()} LOCO RECORDS · FORMERLY LOADING COLLECTIVE</span>
          <span>CHIHUAHUA, MX</span>
        </div>
      </div>
    </footer>
  );
}

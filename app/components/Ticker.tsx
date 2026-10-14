const TEXT = "Techno ✕ Tech House ✕ Melodic ✕ Psytrance ✕ Made in Chihuahua ✕ This Is Loco ✕ ";

export default function Ticker() {
  return (
    <div className="overflow-hidden border-b border-line bg-accent py-3 text-bg sm:py-3.5" aria-hidden="true">
      <div className="ticker font-display text-base font-bold uppercase tracking-[0.04em] whitespace-nowrap sm:text-lg">
        <span className="pr-12">{TEXT.repeat(2)}</span>
        <span className="pr-12">{TEXT.repeat(2)}</span>
      </div>
    </div>
  );
}

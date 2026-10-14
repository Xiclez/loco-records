import { STATS } from "../data/content";
import { Section } from "./ui/Section";

export default function About() {
  return (
    <Section id="about" innerClassName="grid gap-12 lg:grid-cols-2 lg:gap-16">
      <div className="flex flex-col gap-6">
        <span className="text-[10px] tracking-[0.3em] text-accent sm:text-[11px]">[ 01 // ABOUT ]</span>
        <h2 className="font-display text-[40px] font-bold leading-[0.95] tracking-[-0.04em] sm:text-[56px] lg:text-[72px]">
          Primero fuimos colectivo.
          <br />
          Luego, sello.
          <br />
          <span className="text-muted">Siempre, LOCO.</span>
        </h2>
      </div>

      <div className="flex flex-col gap-7">
        <p className="text-sm leading-[1.8] text-soft sm:text-[15px]">
          LOCO es la contracción de <span className="text-fg">LO</span>ading <span className="text-fg">CO</span>llective.
          Empezamos como colectivo, productora y agencia de booking en Chihuahua. El sello llegó como el paso natural: sacar de
          la pista la música que se hace aquí y ponerla en las tiendas y plataformas del mundo.
        </p>
        <p className="text-sm leading-[1.8] text-soft sm:text-[15px]">
          Publicamos techno, tech house, melodic y psytrance de artistas del norte de México y de todo el país, con distribución
          internacional. Mismo equipo, mismo catálogo, nuevo nombre.
        </p>
        <dl className="grid grid-cols-3 gap-px border border-line bg-line">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col-reverse gap-1.5 bg-bg p-4 sm:p-5">
              <dt className="text-[9px] tracking-[0.2em] text-muted sm:text-[10px]">{s.label}</dt>
              <dd className="font-display text-2xl font-bold sm:text-4xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}

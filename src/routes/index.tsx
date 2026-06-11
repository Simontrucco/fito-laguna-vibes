import { createFileRoute } from "@tanstack/react-router";
import canImg from "@/assets/fito-can.png";
import canGolden from "@/assets/can-golden.png";
import canPale from "@/assets/can-pale.png";
import canRed from "@/assets/can-red.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fito Laguna — Cerveza Artesanal" },
      { name: "description", content: "Cerveza artesanal fresca y veraniega. Lager ligera, cítrica y refrescante." },
    ],
  }),
  component: Index,
});

const Wave = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 1440 120" className={className} preserveAspectRatio="none" aria-hidden="true">
    <path
      d="M0,64 C240,120 480,0 720,40 C960,80 1200,120 1440,60 L1440,120 L0,120 Z"
      fill="currentColor"
    />
  </svg>
);

const Sun = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
    <g stroke="currentColor" strokeWidth="3" strokeLinecap="round">
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * Math.PI * 2) / 12;
        const x1 = 50 + Math.cos(a) * 38;
        const y1 = 50 + Math.sin(a) * 38;
        const x2 = 50 + Math.cos(a) * 48;
        const y2 = 50 + Math.sin(a) * 48;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
      })}
    </g>
    <circle cx="50" cy="50" r="22" fill="currentColor" />
  </svg>
);

const Palm = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 120 120" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M60 110 C60 80 56 50 50 30" />
    <path d="M50 30 C30 20 18 30 14 42 C28 36 42 38 50 46" />
    <path d="M50 30 C70 18 88 26 96 40 C82 36 66 40 56 50" />
    <path d="M50 30 C44 14 30 8 16 12 C24 22 36 30 50 36" />
    <path d="M50 30 C58 12 76 6 92 14 C82 24 68 30 54 34" />
  </svg>
);

/**
 * Fish logo that morphs to characterize a beer style.
 * - golden: sunny, floral fish with petal-like fins
 * - pale:   hoppy fish with citrus slice eye and hop-leaf tail
 * - red:    caramel/red fish with warm stripes and a curled tail
 */
const FishStyled = ({
  variant,
  className = "",
}: {
  variant: "golden" | "pale" | "red";
  className?: string;
}) => {
  const palette = {
    golden: { body: "var(--sun)", accent: "var(--coral)", deep: "var(--deep-sea)" },
    pale:   { body: "var(--coral)", accent: "var(--fish)", deep: "var(--deep-sea)" },
    red:    { body: "oklch(0.55 0.17 30)", accent: "var(--sun)", deep: "var(--deep-sea)" },
  }[variant];

  return (
    <svg viewBox="0 0 200 140" className={className} aria-hidden="true">
      {/* tail */}
      {variant === "red" ? (
        <path d="M170 70 C195 40 200 60 195 70 C200 80 195 100 170 70 Z" fill={palette.body} stroke={palette.deep} strokeWidth="3" strokeLinejoin="round" />
      ) : variant === "pale" ? (
        <path d="M170 70 L200 45 L195 70 L200 95 Z" fill={palette.accent} stroke={palette.deep} strokeWidth="3" strokeLinejoin="round" />
      ) : (
        <g stroke={palette.deep} strokeWidth="3" strokeLinejoin="round">
          <path d="M170 70 L198 50 L192 70 L198 90 Z" fill={palette.body} />
          <circle cx="195" cy="50" r="4" fill={palette.accent} />
          <circle cx="195" cy="90" r="4" fill={palette.accent} />
        </g>
      )}

      {/* body */}
      <path
        d="M30 70 C50 30 130 30 170 70 C130 110 50 110 30 70 Z"
        fill={palette.body}
        stroke={palette.deep}
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* style-specific body decorations */}
      {variant === "golden" && (
        <g stroke={palette.deep} strokeWidth="2" fill={palette.accent}>
          {/* floral petals along the back */}
          <circle cx="80" cy="48" r="6" />
          <circle cx="105" cy="42" r="6" />
          <circle cx="130" cy="48" r="6" />
          <circle cx="80" cy="48" r="2" fill={palette.deep} />
          <circle cx="105" cy="42" r="2" fill={palette.deep} />
          <circle cx="130" cy="48" r="2" fill={palette.deep} />
        </g>
      )}
      {variant === "pale" && (
        <g fill="none" stroke={palette.deep} strokeWidth="2" strokeLinecap="round">
          {/* hop cone scales */}
          <path d="M70 60 q6 -8 12 0" />
          <path d="M88 56 q6 -8 12 0" />
          <path d="M106 56 q6 -8 12 0" />
          <path d="M124 60 q6 -8 12 0" />
          <path d="M70 80 q6 8 12 0" />
          <path d="M88 84 q6 8 12 0" />
          <path d="M106 84 q6 8 12 0" />
          <path d="M124 80 q6 8 12 0" />
        </g>
      )}
      {variant === "red" && (
        <g fill="none" stroke={palette.deep} strokeWidth="2.5" strokeLinecap="round" opacity="0.55">
          {/* caramel stripes */}
          <path d="M70 55 q4 15 0 30" />
          <path d="M95 50 q4 20 0 40" />
          <path d="M120 52 q4 18 0 36" />
        </g>
      )}

      {/* top fin */}
      <path
        d={
          variant === "golden"
            ? "M85 38 Q105 18 130 38 Q120 30 110 36 Q100 28 95 36 Z"
            : variant === "pale"
            ? "M90 38 L100 18 L108 32 L118 20 L125 38 Z"
            : "M90 40 Q110 22 130 40 Z"
        }
        fill={palette.accent}
        stroke={palette.deep}
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* bottom fin */}
      <path
        d="M85 100 Q105 118 130 100 Z"
        fill={palette.accent}
        stroke={palette.deep}
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* eye */}
      {variant === "pale" ? (
        <g>
          {/* citrus slice eye */}
          <circle cx="55" cy="65" r="9" fill="#fff8e0" stroke={palette.deep} strokeWidth="2" />
          <g stroke={palette.deep} strokeWidth="1.5">
            <line x1="55" y1="56" x2="55" y2="74" />
            <line x1="46" y1="65" x2="64" y2="65" />
            <line x1="49" y1="59" x2="61" y2="71" />
            <line x1="61" y1="59" x2="49" y2="71" />
          </g>
        </g>
      ) : (
        <>
          <circle cx="55" cy="65" r="8" fill="#fff" stroke={palette.deep} strokeWidth="2" />
          <circle cx="55" cy="65" r="3.5" fill={palette.deep} />
        </>
      )}

      {/* gill */}
      <path d="M72 60 Q66 70 72 82" fill="none" stroke={palette.deep} strokeWidth="2" strokeLinecap="round" />

      {/* mouth: bubbles for golden (floral aroma), hop leaf for pale, foam swirl for red */}
      {variant === "golden" && (
        <g fill={palette.accent} stroke={palette.deep} strokeWidth="1.5">
          <circle cx="22" cy="60" r="3" />
          <circle cx="14" cy="52" r="2" />
          <circle cx="18" cy="70" r="2.5" />
        </g>
      )}
      {variant === "pale" && (
        <path d="M30 70 q-10 -4 -14 -12 q8 2 14 8 q-2 -8 4 -14 q4 8 0 16 q8 -2 14 0 q-8 4 -18 6 Z" fill={palette.body} stroke={palette.deep} strokeWidth="2" strokeLinejoin="round" />
      )}
      {variant === "red" && (
        <g fill="none" stroke={palette.deep} strokeWidth="2" strokeLinecap="round">
          <path d="M22 62 q-6 -2 -8 -8" />
          <path d="M20 72 q-8 2 -10 8" />
        </g>
      )}

      {/* hat — same color as the fish body */}
      <g stroke={palette.deep} strokeWidth="3" strokeLinejoin="round">
        <ellipse cx="55" cy="40" rx="26" ry="4" fill={palette.body} />
        <path d="M42 40 L42 18 Q42 12 48 12 L62 12 Q68 12 68 18 L68 40 Z" fill={palette.body} />
        <path d="M42 30 L68 30" stroke={palette.accent} strokeWidth="3" />
      </g>
    </svg>
  );
};


function Index() {
  const flavors = [
    { name: "Golden Ale", note: "Fuertes notas florales y frutales", abv: "4.2%", color: "var(--lagoon)", variant: "golden" as const, img: canGolden },
    { name: "Irish Red", note: "Color rojizo y notas a caramelo con el mas suave y limpio final", abv: "4.5%", color: "oklch(0.62 0.16 28)", variant: "red" as const, img: canRed },
    { name: "Pale Ale", note: "Aromas cítricos y frutales con un moderado amargor y un final seco", abv: "5.0%", color: "var(--fish)", variant: "pale" as const, img: canPale },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      {/* NAV */}
      <header className="relative z-20">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <a href="#" className="flex items-center gap-2 font-display text-2xl text-secondary">
            <span className="text-coral">Fito</span>
            <span>Laguna</span>
          </a>
          <ul className="hidden gap-8 text-sm font-bold uppercase tracking-wide text-deep-sea md:flex">
            <li><a href="#historia" className="hover:text-coral">Historia</a></li>
            <li><a href="#sabores" className="hover:text-coral">Sabores</a></li>
            <li><a href="#donde" className="hover:text-coral">Dónde</a></li>
          </ul>
          <a href="#donde" className="rounded-full bg-coral px-5 py-2 text-sm font-black uppercase tracking-wider text-primary-foreground shadow-[4px_4px_0_var(--deep-sea)] transition hover:translate-y-[2px] hover:shadow-[2px_2px_0_var(--deep-sea)]">
            Probar
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative px-6 pb-24 pt-8">
        {/* decorative */}
        <Sun className="absolute right-[8%] top-12 h-32 w-32 text-sun animate-spin-slow" />
        <Palm className="absolute left-[4%] top-24 h-28 w-28 -rotate-12 text-fish/70" />
        <Palm className="absolute right-[14%] bottom-10 h-24 w-24 rotate-12 text-fish/60" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div className="relative z-10">
            <span className="inline-block rounded-full border-2 border-deep-sea bg-card px-4 py-1 text-xs font-black uppercase tracking-[0.2em] text-deep-sea">
              CERVEZA ARTESANAL
            </span>
            <h1 className="mt-6 font-display text-6xl leading-[0.95] md:text-8xl">
              <span className="block text-coral">Fito</span>
              <span className="block text-secondary">Laguna</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-deep-sea">
              El verano embotellado. Una lager artesanal ligera, cítrica y refrescante,
              nacida a la orilla de la laguna y hecha para tardes que no quieren terminar.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#sabores" className="rounded-full bg-secondary px-7 py-3 font-black uppercase tracking-wider text-secondary-foreground shadow-[6px_6px_0_var(--deep-sea)] transition hover:translate-y-[3px] hover:shadow-[3px_3px_0_var(--deep-sea)]">
                Ver sabores
              </a>
              <a href="#historia" className="rounded-full border-2 border-deep-sea px-7 py-3 font-black uppercase tracking-wider text-deep-sea transition hover:bg-deep-sea hover:text-card">
                Nuestra historia
              </a>
            </div>

            <div className="mt-12 flex items-center gap-8 text-sm font-bold text-deep-sea">
              <div><div className="font-display text-3xl text-coral">4.8%</div>ABV</div>
              <div className="h-10 w-px bg-deep-sea/30" />
              <div><div className="font-display text-3xl text-secondary">100%</div>Artesanal</div>
              <div className="h-10 w-px bg-deep-sea/30" />
              <div><div className="font-display text-3xl text-fish">∞</div>Verano</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -translate-x-6 translate-y-6 rounded-[3rem] bg-secondary/30" />
            <img
              src={canImg}
              alt="Lata de Fito Laguna cerveza artesanal"
              width={1024}
              height={1024}
              className="relative animate-bob rounded-[3rem]"
            />
          </div>
        </div>
      </section>

      {/* WAVE TRANSITION */}
      <Wave className="block h-20 w-full text-secondary" />

      {/* HISTORIA */}
      <section id="historia" className="bg-secondary px-6 py-24 text-secondary-foreground">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-5">
          <h2 className="md:col-span-2 text-5xl md:text-6xl leading-none">
            Nacida en la <span className="text-sun">laguna</span>.
          </h2>
          <div className="md:col-span-3 space-y-5 text-lg leading-relaxed">
            <p>
              Fito Laguna empezó como una excusa para alargar el verano. Una receta paciente,
              fermentada despacio, lupulada con cariño y embarcada en lata para que viaje contigo
              al río, al muelle, a la playa o al balcón.
            </p>
            <p>
              Sin prisa, sin filtros innecesarios, sin pose. Solo agua, malta, lúpulo, levadura
              y horas de sol. Una cerveza que sabe a vacaciones aunque sea martes.
            </p>
          </div>
        </div>
      </section>

      <Wave className="block h-20 w-full rotate-180 text-secondary" />

      {/* SABORES */}
      <section id="sabores" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-coral">La familia</p>
            <h2 className="mt-3 text-5xl md:text-7xl">Tres maneras de tomar el sol.</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {flavors.map((f, i) => (
              <article
                key={f.name}
                className="group relative rounded-[2rem] border-2 border-deep-sea bg-card p-8 shadow-[8px_8px_0_var(--deep-sea)] transition hover:-translate-y-2"
                style={{ rotate: `${(i - 1) * 1.5}deg` }}
              >
                <div className="mb-6 flex h-56 items-center justify-center overflow-hidden rounded-[1.5rem]" style={{ backgroundColor: f.color }}>
                  <img src={f.img} alt={`Lata Fito Laguna ${f.name}`} className="h-full w-auto object-contain drop-shadow-[4px_4px_0_var(--deep-sea)]" />
                </div>
                <h3 className="text-3xl text-secondary">{f.name}</h3>
                <p className="mt-2 text-deep-sea/80">{f.note}</p>
                <div className="mt-6 flex items-center justify-between border-t-2 border-dashed border-deep-sea/30 pt-4">
                  <span className="text-xs font-black uppercase tracking-widest text-deep-sea/60">Alc. Vol.</span>
                  <span className="font-display text-2xl text-coral">{f.abv}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DONDE / CTA */}
      <section id="donde" className="relative overflow-hidden bg-coral px-6 py-28 text-primary-foreground">
        <Palm className="absolute -left-6 top-8 h-40 w-40 -rotate-12 text-card/20" />
        <Palm className="absolute -right-6 bottom-8 h-40 w-40 rotate-12 text-card/20" />
        <Sun className="absolute right-1/4 top-12 h-20 w-20 text-sun" />

        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-5xl md:text-7xl leading-none">
            Tu próxima tarde te está esperando.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg">
            Encuéntranos en bares, almacenes y tiendas seleccionadas. O escríbenos para llevar
            Fito Laguna a tu próxima reunión.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="mailto:hola@fitolaguna.com" className="rounded-full bg-card px-8 py-4 font-black uppercase tracking-wider text-deep-sea shadow-[6px_6px_0_var(--deep-sea)] transition hover:translate-y-[3px] hover:shadow-[3px_3px_0_var(--deep-sea)]">
              hola@fitolaguna.com
            </a>
            <a href="#" className="rounded-full border-2 border-card px-8 py-4 font-black uppercase tracking-wider text-card transition hover:bg-card hover:text-coral">
              Puntos de venta
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-deep-sea px-6 py-12 text-card/80">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <div className="font-display text-2xl text-card">
            <span className="text-coral">Fito</span> Laguna
          </div>
          <p className="text-sm">Disfruta con moderación · +18 · © {new Date().getFullYear()}</p>
          <div className="flex gap-4 text-sm font-bold uppercase tracking-wider">
            <a href="#" className="hover:text-sun">Instagram</a>
            <a href="#" className="hover:text-sun">TikTok</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

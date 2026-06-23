import { createFileRoute } from "@tanstack/react-router";

import { useState, useRef } from "react";

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



function Index() {

// Estado para controlar qué cerveza está seleccionada

const [selectedBeer, setSelectedBeer] = useState<string | null>(null);


// Referencia para hacer scroll suave a la minisección de detalles

const detailsRef = useRef<HTMLDivElement>(null);



const flavors = [

{

id: "golden",

name: "Golden Ale",

note: "Fuertes notas florales y frutales",

abv: "4.2%",

color: "var(--lagoon)",

img: canGolden,

details: {

taste: "Refrescante, ligera y peligrosamente fácil de tomar. Una entrada limpia en boca con un sutil dulzor maltoso. Perfecta para un día entero bajo el sol.",

ingredients: "Maltas pálidas seleccionadas, lúpulos nobles alemanes con sutiles notas florales, y agua pura de vertiente.",

pairing: "Mariscos frescos, tacos de pescado o simplemente arena en los pies."

}

},

{

id: "red",

name: "Irish Red",

note: "Color rojizo y notas a caramelo con el mas suave y limpio final",

abv: "4.5%",

color: "oklch(0.62 0.16 28)",

img: canRed,

details: {

taste: "Balance perfecto entre el dulzor del caramelo y un final seco ligeramente tostado. En boca es sedosa, con un cuerpo medio y un característico color rojizo cobrizo que evoca los atardeceres de playa.",

ingredients: "Combinación de maltas de caramelo y cebada tostada, lúpulos británicos balanceados y levadura de alta fermentación.",

pairing: "Hamburguesas caseras, carnes ahumadas o fogatas nocturnas con amigos."

}

},

{

id: "pale",

name: "Pale Ale",

note: "Aromas cítricos y frutales con un moderado amargor y un final seco",

abv: "5.0%",

color: "var(--fish)",

img: canPale,

details: {

taste: "Una explosión cítrica y resinosa en nariz. En boca presenta un amargor moderado pero firme, con notas a pomelo y pino que limpian el paladar de forma refrescante y dejan un final seco y tropical.",

ingredients: "Lúpulos americanos (Cascade y Citra) añadidos en etapas tardías, malta base y un toque de trigo para la retención de espuma.",

pairing: "Comida picante, pizzas gourmet o música en vivo al aire libre."

}

},

];



const handleSelectBeer = (id: string) => {

setSelectedBeer(id);

// Esperar a que se renderice el componente de abajo y hacer scroll suave

setTimeout(() => {

detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });

}, 100);

};



const activeBeerData = flavors.find((f) => f.id === selectedBeer);



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

<button

key={f.name}

onClick={() => handleSelectBeer(f.id)}

className={`group relative rounded-[2rem] border-2 text-left bg-card p-8 shadow-[8px_8px_0_var(--deep-sea)] transition-all duration-300 hover:-translate-y-2 cursor-pointer ${

selectedBeer === f.id ? 'ring-4 ring-coral scale-[1.02]' : ''

}`}

style={{ rotate: `${(i - 1) * 1.5}deg` }}

>

<div className="mb-6 flex h-56 items-center justify-center transition-transform duration-300 group-hover:scale-105">

<img src={f.img} alt={`Lata Fito Laguna ${f.name}`} className="h-full w-auto object-contain drop-shadow-[4px_6px_0_var(--deep-sea)]" />

</div>

<h3 className="text-3xl text-secondary">{f.name}</h3>

<p className="mt-2 text-deep-sea/80">{f.note}</p>

<div className="mt-6 flex items-center justify-between border-t-2 border-dashed border-deep-sea/30 pt-4">

<span className="text-xs font-black uppercase tracking-widest text-deep-sea/60">Alc. Vol.</span>

<span className="font-display text-2xl text-coral">{f.abv}</span>

</div>

</button>

))}

</div>



{/* MINISECCIÓN DE DETALLES (INTERACTIVA DINÁMICA) */}

{activeBeerData && (

<div

ref={detailsRef}

className="mt-16 mx-auto max-w-4xl rounded-[2.5rem] border-2 border-deep-sea bg-card p-8 md:p-12 shadow-[10px_10px_0_var(--deep-sea)] animate-fade-in transition-all duration-500 relative overflow-hidden"

>

<div className="absolute top-4 right-4 md:top-6 md:right-6">

<button

onClick={() => setSelectedBeer(null)}

className="rounded-full border-2 border-deep-sea p-2 hover:bg-coral hover:text-white transition-colors duration-200"

aria-label="Cerrar detalles"

>

✕

</button>

</div>



<div className="grid md:grid-cols-3 gap-8 items-center">

<div className="flex justify-center h-64 md:h-80">

<img

src={activeBeerData.img}

alt={`Lata ${activeBeerData.name}`}

className="h-full w-auto object-contain drop-shadow-[4px_8px_0_var(--deep-sea)] animate-bob"

/>

</div>


<div className="md:col-span-2 space-y-6">

<div>

<span className="inline-block text-xs font-black uppercase tracking-[0.2em] text-coral mb-1">Detalles del Estilo</span>

<h3 className="text-4xl md:text-5xl font-display text-secondary">{activeBeerData.name}</h3>

</div>



<div className="space-y-4 text-deep-sea">

<div>

<h4 className="font-black text-sm uppercase tracking-wider text-secondary">Sabores y Sensaciones:</h4>

<p className="mt-1 font-medium leading-relaxed opacity-90">{activeBeerData.details.taste}</p>

</div>



<div>

<h4 className="font-black text-sm uppercase tracking-wider text-secondary">Ingredientes Clave:</h4>

<p className="mt-1 font-medium leading-relaxed opacity-90">{activeBeerData.details.ingredients}</p>

</div>



<div>

<h4 className="font-black text-sm uppercase tracking-wider text-secondary">Maridaje Ideal:</h4>

<p className="mt-1 font-medium leading-relaxed opacity-90">{activeBeerData.details.pairing}</p>

</div>

</div>

</div>

</div>

</div>

)}

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

<a href="https://www.instagram.com/fitolaguna/" target="_blank" rel="noopener noreferrer" className="hover:text-sun transition-colors duration-200">Instagram</a>

</div>

</div>

</footer>

</div>

);

} 


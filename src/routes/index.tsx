import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { LogoStrip } from "@/components/site/LogoStrip";
import heroPortrait from "@/assets/hero-portrait.jpg";
import editorialWatch from "@/assets/editorial-watch.jpg";
import editorialAthlete from "@/assets/editorial-athlete.jpg";
import editorialEntertainer from "@/assets/editorial-entertainer.jpg";
import editorialFounder from "@/assets/editorial-founder.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meridian & Co. — Turn high performance into lifelong wealth" },
      { name: "description", content: "Strategic advisory for young, high earners with careers that peak early and a long retirement horizon." },
      { property: "og:title", content: "Meridian & Co." },
      { property: "og:description", content: "Turn your high performance into lifelong wealth." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="bg-paper text-ink">
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden bg-ink text-paper">
        <Header />
        <div className="absolute inset-0">
          <img
            src={heroPortrait}
            alt="Editorial portrait at golden hour"
            className="h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-[1400px] flex-col justify-end px-6 pb-16 pt-40 md:px-10 md:pb-24 md:pt-44">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-8">
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-flame" />
                <span className="eyebrow text-iron">Vol. 01 · Strategic Advisory</span>
              </div>
              <h1 className="display-xl mt-8 max-w-5xl">
                Turn your high performance into{" "}
                <span className="font-serif-italic font-normal text-iron">lifelong</span> wealth.
              </h1>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-iron md:text-lg">
                Strategic advisory for young, high earners with careers that peak early —
                and a long retirement horizon ahead.
              </p>

              <ul className="mt-10 max-w-xl space-y-3 text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-px w-6 shrink-0 bg-flame" />
                  Specialised post-career, legacy, and lifestyle planning
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-px w-6 shrink-0 bg-flame" />
                  Wealth Management Solutions through our regulated partner
                </li>
              </ul>

              <div className="mt-12 flex flex-wrap items-center gap-6">
                <Link
                  to="/"
                  className="group inline-flex items-center gap-3 bg-flame px-7 py-4 text-sm font-medium uppercase tracking-eyebrow text-flame-foreground transition-transform hover:translate-y-[-2px]"
                >
                  Schedule A Discovery Call
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <Link to="/services" className="text-sm underline-offset-4 hover:underline">
                  Or explore the practice
                </Link>
              </div>
            </div>

            <aside className="hidden md:col-span-4 md:flex md:items-end md:justify-end">
              <div className="border-l border-iron/30 pl-6">
                <p className="eyebrow text-iron">A note</p>
                <p className="mt-4 max-w-[18rem] font-serif-italic text-lg leading-snug text-paper">
                  "The earlier you begin, the steeper your growth curve."
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-ink/10 bg-iron-soft py-8">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="mb-4 flex items-center justify-between text-xs">
            <span className="eyebrow text-ink/60">As featured in</span>
            <span className="eyebrow text-ink/60 hidden md:block">— Industry trust</span>
          </div>
          <LogoStrip tone="light" />
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="bg-paper py-28 md:py-40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid items-end gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="eyebrow text-flame">Who We Serve</p>
              <h2 className="display-lg mt-6">
                We help professional athletes, entertainers, and tech entrepreneurs turn{" "}
                <span className="font-serif-italic font-normal">fast careers</span> into long-term wealth.
              </h2>
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <p className="text-base text-muted-foreground">
                A practice built for the generation that earns at the front, and lives the rest.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-12 md:gap-8">
            <AudienceCard
              index="01"
              tag="Athletes"
              title="A 10-year career demands a 60-year plan."
              body="We specialise in post-career life for the generation that peaks at 30."
              image={editorialAthlete}
              className="md:col-span-5 md:row-span-2"
              tall
            />
            <AudienceCard
              index="02"
              tag="Entertainers"
              title="From the studio to a legacy that outlasts the spotlight."
              body="Long-form planning for short-form fame."
              image={editorialEntertainer}
              className="md:col-span-7"
            />
            <AudienceCard
              index="03"
              tag="Tech Entrepreneurs"
              title="An exit is the beginning."
              body="Turn liquidity events into compounding generational wealth."
              image={editorialFounder}
              className="md:col-span-7"
            />
          </div>

          <div className="mt-14 flex justify-end">
            <Link
              to="/services"
              className="group inline-flex items-center gap-3 border-b border-ink pb-1 text-sm font-medium uppercase tracking-eyebrow"
            >
              Explore Our Services
              <span className="text-flame transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* PRINCIPLE */}
      <section className="relative overflow-hidden bg-ink py-28 text-paper md:py-40">
        <div className="grain absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="eyebrow text-flame">The Principle</p>
              <h2 className="display-lg mt-6 text-paper">
                Starting early lets your money{" "}
                <span className="font-serif-italic font-normal text-iron">work longer.</span>
              </h2>
              <p className="mt-8 max-w-md text-iron leading-relaxed">
                Einstein called compounding the 8th wonder of the world, and for good reason.
                For someone retiring at 35 rather than 65, the difference is not incremental.
                It is generational.
              </p>
              <Link
                to="/services"
                className="mt-10 inline-flex items-center gap-3 text-sm font-medium uppercase tracking-eyebrow text-flame hover:text-paper transition-colors"
              >
                Explore How We Structure Wealth →
              </Link>
            </div>

            <div className="md:col-span-7">
              <CompoundingChart />
              <p className="mt-4 text-xs text-iron/60">
                Hypothetical illustration. 7% annual return assumption. For illustrative purposes only.
              </p>
            </div>
          </div>

          <div className="mt-24 border-l-2 border-flame pl-6 md:max-w-3xl md:pl-10">
            <p className="font-serif-italic text-3xl leading-snug md:text-5xl">
              "The earlier you begin, the steeper your growth curve."
            </p>
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="bg-iron-soft py-28 md:py-40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid gap-16 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-7">
              <h2 className="display-lg">
                Your elite earnings deserve an{" "}
                <span className="font-serif-italic font-normal">elite plan.</span>
              </h2>
              <div className="mt-10 space-y-6 text-base leading-relaxed text-ink/80 md:max-w-xl">
                <p>Traditional wealth management serves the average. That's never been you.</p>
                <p>
                  To support your unique career, we bring deep experience across professional sports,
                  entertainment, and finance, while our regulated partner merges its wealth management
                  expertise with an understanding of what it means to work and live across the world.
                </p>
              </div>
              <Link
                to="/about"
                className="mt-12 inline-flex items-center gap-3 border-b border-ink pb-1 text-sm font-medium uppercase tracking-eyebrow"
              >
                Who We Are <span className="text-flame">→</span>
              </Link>
            </div>

            <div className="md:col-span-5">
              <div className="aspect-[4/5] overflow-hidden bg-ink">
                <img
                  src={editorialWatch}
                  alt="Editorial detail"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-ink/50">
                <span className="eyebrow">Plate 02</span>
                <span>Precision · Patience · Performance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOR YOUR FUTURE */}
      <section className="relative overflow-hidden bg-ink py-32 text-paper md:py-48">
        <div className="absolute -right-24 top-1/2 hidden h-[140%] w-[55%] -translate-y-1/2 rotate-2 bg-flame md:block" aria-hidden />
        <div className="relative mx-auto grid max-w-[1400px] gap-16 px-6 md:grid-cols-12 md:px-10">
          <div className="md:col-span-7">
            <p className="eyebrow text-flame">For Your Future</p>
            <h2 className="display-lg mt-6 text-paper">
              For your future beyond the{" "}
              <span className="font-serif-italic font-normal">spotlight.</span>
            </h2>
            <p className="mt-8 max-w-xl leading-relaxed text-iron">
              The applause will quiet. The schedules will soften. What remains is the life you
              designed when the world was still watching. We help you build it now — patiently,
              precisely, with the discipline that made you exceptional in the first place.
            </p>
            <Link
              to="/"
              className="mt-12 inline-flex items-center gap-3 bg-paper px-7 py-4 text-sm font-medium uppercase tracking-eyebrow text-ink transition-transform hover:translate-y-[-2px]"
            >
              Request More Information <span>→</span>
            </Link>
          </div>
          <div className="relative hidden md:col-span-5 md:block">
            <div className="relative ml-auto aspect-[3/4] w-[80%] overflow-hidden border-8 border-paper">
              <img src={editorialFounder} alt="" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function AudienceCard({
  index,
  tag,
  title,
  body,
  image,
  className = "",
  tall = false,
}: {
  index: string;
  tag: string;
  title: string;
  body: string;
  image: string;
  className?: string;
  tall?: boolean;
}) {
  return (
    <article
      className={`group relative overflow-hidden bg-ink text-paper ${tall ? "min-h-[560px]" : "min-h-[340px]"} ${className}`}
    >
      <img
        src={image}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
      <div className="relative flex h-full flex-col justify-between p-8 md:p-10">
        <div className="flex items-center justify-between">
          <span className="eyebrow text-flame">{index}</span>
          <span className="eyebrow text-iron">{tag}</span>
        </div>
        <div>
          <h3 className="display-md max-w-md">{title}</h3>
          <p className="mt-4 max-w-md text-sm text-iron">{body}</p>
        </div>
      </div>
    </article>
  );
}

function CompoundingChart() {
  // SVG line chart: 25 vs 30 starting age, 7% return, 40 years.
  // Visually striking, not data-perfect.
  const w = 720;
  const h = 360;
  const pad = { l: 40, r: 20, t: 30, b: 40 };
  const years = 40;
  const r = 0.07;
  const monthly = 1;
  const seriesA: [number, number][] = []; // age 25
  const seriesB: [number, number][] = []; // age 30
  for (let y = 0; y <= years; y++) {
    seriesA.push([y, monthly * Math.pow(1 + r, y)]);
  }
  for (let y = 0; y <= years - 5; y++) {
    seriesB.push([y + 5, monthly * Math.pow(1 + r, y)]);
  }
  const max = Math.max(...seriesA.map((p) => p[1]));
  const x = (yr: number) => pad.l + (yr / years) * (w - pad.l - pad.r);
  const y = (v: number) => h - pad.b - (v / max) * (h - pad.t - pad.b);
  const path = (s: [number, number][]) =>
    s.map((p, i) => `${i === 0 ? "M" : "L"}${x(p[0]).toFixed(1)},${y(p[1]).toFixed(1)}`).join(" ");
  const areaA = `${path(seriesA)} L${x(years)},${h - pad.b} L${x(0)},${h - pad.b} Z`;

  return (
    <div className="rounded-sm border border-iron/20 bg-ink/40 p-4 md:p-6">
      <div className="mb-4 flex items-end justify-between text-xs text-iron">
        <div>
          <p className="eyebrow text-iron/70">Portfolio Value</p>
          <p className="mt-1 font-serif-italic text-base text-paper">Compounding over 40 years</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2"><span className="inline-block h-2 w-2 bg-flame" /> Starting at 25</span>
          <span className="flex items-center gap-2"><span className="inline-block h-2 w-2 bg-iron" /> Starting at 30</span>
        </div>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} className="h-auto w-full">
        <defs>
          <linearGradient id="flameFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#F95024" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#F95024" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* grid */}
        {[0, 0.25, 0.5, 0.75, 1].map((t) => (
          <line key={t} x1={pad.l} x2={w - pad.r} y1={pad.t + t * (h - pad.t - pad.b)} y2={pad.t + t * (h - pad.t - pad.b)} stroke="rgba(205,197,186,0.12)" />
        ))}
        {/* x labels */}
        {[0, 10, 20, 30, 40].map((yr) => (
          <text key={yr} x={x(yr)} y={h - 14} fill="rgba(205,197,186,0.6)" fontSize="10" textAnchor="middle">
            Year {yr}
          </text>
        ))}
        <path d={areaA} fill="url(#flameFill)" />
        <path d={path(seriesB)} stroke="#CDC5BA" strokeWidth="1.6" fill="none" strokeDasharray="4 4" />
        <path d={path(seriesA)} stroke="#F95024" strokeWidth="2.4" fill="none" />
        {/* end markers */}
        <circle cx={x(years)} cy={y(seriesA[seriesA.length - 1][1])} r="5" fill="#F95024" />
        <circle cx={x(years)} cy={y(seriesB[seriesB.length - 1][1])} r="4" fill="#CDC5BA" />
      </svg>
    </div>
  );
}

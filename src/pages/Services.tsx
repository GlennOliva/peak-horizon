import { Link } from "react-router-dom";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import editorialEntertainer from "@/assets/editorial-entertainer.jpg";

const services = [
  {
    no: "01",
    eyebrow: "Wealth Management & Planning",
    title: "An intelligent wealth engine, run by our regulated partner.",
    body: "Wealth Management & Planning is the means of actively growing, protecting, and structuring your wealth for the long-term, from the strategy and advice of a licensed Independent Wealth Manager. Operated entirely by our regulated partner's experienced finance team — choose how much to hand off, or stay involved with.",
    items: ["Expert Strategy, Recommendations, and Management","Access to unique, institutional-grade opportunities","Negotiation power for lower banking fees","Discretionary Portfolio Management","Investment Advisory","Asset Allocation & Holistic Planning","External Asset Management","Specialised Fund Access","Due Diligence","Asset Protection","Tax Optimisation","Currency Protection"],
  },
  {
    no: "02",
    eyebrow: "Retirement Planning",
    title: "A 60-year retirement, not a 20-year one.",
    body: "As a young, high earner, your retirement isn't a traditional 20-year plan — it's a 60-year one. Through our regulated partner's sole, regulated operations, receive retirement strategies built to sustain your lifestyle and support your dependents for years to come.",
    items: ["Retirement Strategy","Discretionary Portfolio Management","Investment Advisory","External Asset Management","Specialised Fund Access"],
  },
  {
    no: "03",
    eyebrow: "Lifestyle Services",
    title: "Your lifestyle matters, we support it intentionally.",
    body: "Wealth management is ultimately a means for your lifestyle. Additional services we offer exclusively to clients include post-career planning — your next chapter shouldn't wait for the end — and concierge-style lifestyle access for the moments in between.",
    items: ["Post-career Planning", "Lifestyle Management & Access"],
  },
  {
    no: "04",
    eyebrow: "Philanthropy",
    title: "Leave the world fairer, freer, and more inspired.",
    body: "Considered giving, structured for impact and longevity.",
    items: ["Giving Strategy","Impact Measurement","Tax Optimisation","Asset Donations","Endowments","Vetting & Due Diligence"],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-paper text-ink">
      <section className="relative bg-ink text-paper">
        <Header />
        <div className="mx-auto max-w-[1400px] px-6 pb-24 pt-44 md:px-10 md:pb-40 md:pt-56">
          <p className="eyebrow text-flame">The Practice</p>
          <h1 className="display-xl mt-8 max-w-5xl">
            An intelligent wealth ecosystem that's{" "}
            <span className="font-serif-italic font-normal text-iron">built for you.</span>
          </h1>
          <p className="mt-10 max-w-xl text-iron text-lg leading-relaxed">
            Four pillars. One coherent strategy. Calibrated to careers that earn at the front and live across the rest.
          </p>
        </div>
      </section>

      {services.map((s, i) => (
        <section key={s.no} className={`${i % 2 === 0 ? "bg-paper" : "bg-iron-soft"} py-28 md:py-36`}>
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="grid gap-16 md:grid-cols-12">
              <div className="md:col-span-5">
                <div className="flex items-baseline gap-4">
                  <span className="font-serif-italic text-5xl text-flame">{s.no}</span>
                  <span className="eyebrow text-ink/60">{s.eyebrow}</span>
                </div>
                <h2 className="display-lg mt-6">{s.title}</h2>
                <p className="mt-8 max-w-md leading-relaxed text-ink/75">{s.body}</p>
              </div>

              <div className="md:col-span-7">
                <ul className="grid grid-cols-1 gap-px overflow-hidden border-y border-ink/10 sm:grid-cols-2">
                  {s.items.map((it, idx) => (
                    <li key={it} className="group flex items-center justify-between border-b border-ink/10 bg-paper/0 px-1 py-5 transition-colors hover:bg-ink hover:text-paper">
                      <span className="flex items-center gap-4">
                        <span className="font-serif-italic text-xs text-flame">{String(idx + 1).padStart(2, "0")}</span>
                        <span className="text-sm md:text-base">{it}</span>
                      </span>
                      <span className="text-flame opacity-0 transition-opacity group-hover:opacity-100">→</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="relative overflow-hidden bg-ink py-32 text-paper md:py-44">
        <div className="absolute inset-0">
          <img src={editorialEntertainer} alt="" loading="lazy" className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
          <p className="font-serif-italic text-3xl leading-snug text-iron md:max-w-3xl md:text-5xl">
            "Wealth, when handled with care, becomes the quiet architecture of a life."
          </p>
          <Link to="/" className="mt-12 inline-flex items-center gap-3 bg-flame px-7 py-4 text-sm font-medium uppercase tracking-eyebrow text-flame-foreground transition-transform hover:translate-y-[-2px]">
            Schedule A Discovery Call <span>→</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

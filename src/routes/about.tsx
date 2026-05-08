import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { LogoStrip } from "@/components/site/LogoStrip";
import editorialFounder from "@/assets/editorial-founder.jpg";
import editorialWatch from "@/assets/editorial-watch.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Meridian & Co." },
      { name: "description", content: "Three decades at the intersection of elite sport, entertainment, and finance." },
      { property: "og:title", content: "About — Meridian & Co." },
      { property: "og:description", content: "We understand your unique career, and serve it with excellence." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="bg-paper text-ink">
      <section className="relative bg-ink text-paper">
        <Header />
        <div className="mx-auto max-w-[1400px] px-6 pb-24 pt-44 md:px-10 md:pb-32 md:pt-56">
          <p className="eyebrow text-flame">About the Practice</p>
          <h1 className="display-xl mt-8 max-w-5xl">
            We understand your unique career, and serve it with{" "}
            <span className="font-serif-italic font-normal text-iron">excellence.</span>
          </h1>
          <p className="mt-8 max-w-xl text-iron text-lg">Our background:</p>
        </div>
      </section>

      <section className="bg-paper py-28 md:py-40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="overflow-hidden bg-ink">
                <img src={editorialFounder} alt="Founder" loading="lazy" className="h-full w-full object-cover aspect-[4/5]" />
              </div>
              <p className="mt-4 eyebrow text-ink/50">Founder · Plate 01</p>
            </div>
            <div className="md:col-span-7">
              <p className="eyebrow text-flame">Founder</p>
              <h2 className="display-lg mt-6">
                Being in-between elite sports, entertainment, and{" "}
                <span className="font-serif-italic font-normal">finance.</span>
              </h2>
              <div className="mt-10 space-y-6 leading-relaxed text-ink/80">
                <p>
                  For over 30 years, our founder has worked closely with some of the world's top
                  high-profile athletes through various notable global organisations.
                </p>
                <p>
                  The unique careers of pro athletes, professionals in entertainment, and entrepreneurs
                  around the world demand a full focus on "the now," but often at a cost.
                </p>
                <p>
                  A common blind spot is a lack of planning for their unique financial future, and the
                  various ripple effects that follow. The firm was built to bridge that specific gap,
                  helping you secure long-term financial independence and a future with meaning.
                </p>
                <p className="border-l-2 border-flame pl-5 font-serif-italic text-xl text-ink">
                  Serving as Founder, providing advisory for post-career and legacy planning, lifestyle,
                  and philanthropy. Also a licensed representative of the regulated partner firm — the
                  sole provider of all regulated wealth management services.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-24 border-t border-ink/10 pt-10">
            <p className="eyebrow text-ink/60">Notable organisations</p>
            <div className="mt-6">
              <LogoStrip tone="light" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-iron py-28 md:py-40">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 md:grid-cols-12 md:px-10">
          <div className="md:col-span-7">
            <h2 className="display-lg">
              A practice shaped by the lives it{" "}
              <span className="font-serif-italic font-normal">serves.</span>
            </h2>
            <p className="mt-8 max-w-xl text-ink/80">
              Our team has stood backstage, in locker rooms, and at term sheets. The result is
              advisory that listens before it advises — and structures wealth around the life you
              actually intend to live.
            </p>
            <Link to="/services" className="mt-12 inline-flex items-center gap-3 border-b border-ink pb-1 text-sm font-medium uppercase tracking-eyebrow">
              See the Practice <span className="text-flame">→</span>
            </Link>
          </div>
          <div className="md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden">
              <img src={editorialWatch} alt="" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

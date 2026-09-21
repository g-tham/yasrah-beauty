import Link from '../components/SiteLink'
import PlaceholderImage from '../components/PlaceholderImage'
import Reveal from '../components/Reveal'

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[82vh] overflow-hidden bg-smoke text-bone">
        <PlaceholderImage label="Hero bridal editorial" className="absolute inset-0" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/45 via-black/15 to-transparent" />
        <div className="relative z-10 mx-auto flex min-h-[82vh] max-w-7xl items-end px-5 pb-14 pt-24 lg:px-8 lg:pb-20">
          <div className="max-w-4xl">
            <p className="hero-kicker eyebrow text-bone/70">Bridal Artistry · Clinical Aesthetics</p>
            <h1 className="hero-title display-title mt-4">Beauty, authentically yours.</h1>
            <p className="hero-copy mt-6 max-w-xl text-sm leading-7 text-bone/80 sm:text-base">A refined beauty experience designed to make every client feel embraced, valued and celebrated in their own unique essence.</p>
            <div className="hero-actions mt-9 flex flex-wrap gap-3">
              <Link to="/inquire" className="btn-light">Inquire Now</Link>
              <Link to="/services/bridal" className="btn-light">Explore Services</Link>
            </div>
          </div>
        </div>
      </section>

      <Reveal>
        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-28">
          <div><p className="eyebrow text-ink/45">The Yasrah Standard</p></div>
          <div>
            <h2 className="section-title">Where beauty becomes an expression of authenticity.</h2>
            <p className="body-copy mt-7 max-w-2xl">Modern, timeless and client-centred — Yasrah Beauty combines refined artistry with intentional care across bridal services and clinical aesthetics.</p>
          </div>
        </section>
      </Reveal>

      <section className="bg-smoke text-bone">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <Reveal>
            <div className="mb-10 flex items-end justify-between gap-8">
              <div>
                <p className="eyebrow text-bone/45">Signature Services</p>
                <h2 className="mt-4 font-display text-5xl sm:text-6xl">Two worlds. One philosophy.</h2>
              </div>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <Link to="/services/bridal" className="luxury-card group block">
                <PlaceholderImage label="Bridal makeup & hair" className="aspect-[4/5]" />
                <div className="mt-5 flex items-center justify-between gap-5">
                  <div><p className="eyebrow text-bone/45">01</p><h3 className="mt-2 font-display text-4xl">Bridal Makeup & Hair</h3></div>
                  <span className="text-2xl transition group-hover:translate-x-1">→</span>
                </div>
              </Link>
            </Reveal>
            <Reveal>
              <Link to="/services/clinical" className="luxury-card group block md:mt-16">
                <PlaceholderImage label="Clinical aesthetics" className="aspect-[4/5]" />
                <div className="mt-5 flex items-center justify-between gap-5">
                  <div><p className="eyebrow text-bone/45">02</p><h3 className="mt-2 font-display text-4xl">Clinical Aesthetics</h3></div>
                  <span className="text-2xl transition group-hover:translate-x-1">→</span>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <Reveal>
        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <PlaceholderImage label="About Yasrah Beauty" className="aspect-[5/6]" />
            <div className="lg:pl-12">
              <p className="eyebrow text-ink/45">Our Philosophy</p>
              <h2 className="section-title mt-4">Dark feminine. Timeless. Intentional.</h2>
              <p className="body-copy mt-6">The Yasrah Beauty experience is built around trust, integrity, transparency, authenticity, respect and compassion — with every detail centred on the client.</p>
              <Link to="/about" className="btn-outline mt-8">Discover Yasrah</Link>
            </div>
          </div>
        </section>
      </Reveal>

      <section className="border-t border-ink/10 bg-white/30">
        <div className="mx-auto max-w-7xl px-5 py-16 text-center lg:px-8 lg:py-20">
          <p className="eyebrow text-ink/45">Ready when you are</p>
          <h2 className="mt-4 font-display text-5xl sm:text-6xl">Begin your Yasrah Beauty experience.</h2>
          <Link to="/inquire" className="btn-dark mt-8">Inquire Now</Link>
        </div>
      </section>
    </>
  )
}

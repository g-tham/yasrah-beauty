import Link from '../components/SiteLink'
import PlaceholderImage from '../components/PlaceholderImage'
import Reveal from '../components/Reveal'

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[68vh] sm:min-h-[76vh] lg:min-h-[82vh] overflow-hidden bg-smoke text-bone">
        <PlaceholderImage label="Hero bridal editorial" className="mobile-hero-image absolute inset-0" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/45 via-black/15 to-transparent" />
        <div className="relative z-10 mx-auto flex min-h-[68vh] sm:min-h-[76vh] lg:min-h-[82vh] max-w-7xl items-end px-5 pb-10 pt-20 sm:pb-14 sm:pt-24 lg:px-8 lg:pb-20">
          <div className="max-w-4xl">
            <p className="hero-kicker eyebrow text-bone/70">Bridal Artistry · Clinical Aesthetics</p>
            <h1 className="hero-title display-title mt-4">Beauty, authentically yours.</h1>
            <p className="hero-copy mt-6 max-w-xl text-sm leading-7 text-bone/80 sm:text-base">Bridal makeup, hair and clinical aesthetics with a focus on thoughtful, personalized care.</p>
            <div className="hero-actions mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link to="/inquire" className="btn-light w-full sm:w-auto">Inquire Now</Link>
              <Link to="/services/bridal" className="btn-light w-full sm:w-auto">Explore Bridal</Link>
              <Link to="/services/clinical" className="btn-light w-full sm:w-auto">Explore Aesthetics</Link>
            </div>
          </div>
        </div>
      </section>

      <Reveal>
        <section className="border-b border-ink/10 bg-[#ded9d2]">
          <div className="mx-auto max-w-6xl px-5 py-12 text-center sm:py-16 lg:px-8 lg:py-24">
            <blockquote className="mx-auto max-w-5xl font-display text-3xl leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
              “YOU ARE LOVE, TO FEEL LOVE, TO SEE LOVE, TO BE LOVE”
            </blockquote>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mx-auto max-w-7xl px-5 py-14 sm:py-16 lg:px-8 lg:py-28">
          <div className="max-w-3xl lg:ml-auto">
            <h2 className="section-title">Bridal artistry and clinical aesthetics, with care at the centre.</h2>
            <p className="body-copy mt-7 max-w-2xl">Yasrah Beauty offers bridal makeup and hair alongside clinical aesthetic treatments, with each service shaped around the client.</p>
          </div>
        </section>
      </Reveal>

      <section className="bg-smoke text-bone">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:py-16 lg:px-8 lg:py-28">
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <Link to="/services/bridal" className="luxury-card group block">
                <PlaceholderImage label="Bridal makeup & hair" className="aspect-[5/4] sm:aspect-[4/5]" />
                <div className="mt-5 flex items-center justify-between gap-5">
                  <div><p className="eyebrow text-bone/45">01</p><h3 className="mt-2 font-display text-3xl sm:text-4xl">Bridal Makeup & Hair</h3></div>
                  <span className="text-2xl transition group-hover:translate-x-1">→</span>
                </div>
              </Link>
            </Reveal>
            <Reveal>
              <Link to="/services/clinical" className="luxury-card group block md:mt-16">
                <PlaceholderImage label="Clinical aesthetics" className="aspect-[5/4] sm:aspect-[4/5]" />
                <div className="mt-5 flex items-center justify-between gap-5">
                  <div><p className="eyebrow text-bone/45">02</p><h3 className="mt-2 font-display text-3xl sm:text-4xl">Clinical Aesthetics</h3></div>
                  <span className="text-2xl transition group-hover:translate-x-1">→</span>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <Reveal>
        <section className="mx-auto max-w-7xl px-5 py-14 sm:py-16 lg:px-8 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <PlaceholderImage label="About Yasrah Beauty" className="aspect-[5/4] sm:aspect-[5/6]" />
            <div className="lg:pl-8 lg:pt-24">
              <h2 className="section-title">What matters to us.</h2>
              <p className="body-copy mt-6">Trust, transparency, authenticity, respect and compassion guide how Yasrah Beauty works with every client.</p>
              <Link to="/about" className="btn-outline mt-8 w-full sm:w-auto">Discover Yasrah</Link>
            </div>
          </div>
        </section>
      </Reveal>

      <section className="border-t border-ink/10 bg-white/30">
        <div className="mx-auto max-w-7xl px-5 py-14 text-center lg:px-8 lg:py-20">
          <h2 className="font-display text-4xl sm:text-6xl">Ready to get started?</h2>
          <Link to="/inquire" className="btn-dark mt-8 w-full sm:w-auto">Inquire Now</Link>
        </div>
      </section>
    </>
  )
}

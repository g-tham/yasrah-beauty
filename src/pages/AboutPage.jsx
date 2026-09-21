import Link from '../components/SiteLink'
import PageHero from '../components/PageHero'
import PlaceholderImage from '../components/PlaceholderImage'
import Reveal from '../components/Reveal'

const values = ['Trustworthy','Loyal','Client-centricity','Integrity','Innovation','Collaboration','Transparency','Authenticity','Respect','Compassion']

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Yasrah Beauty" title="A beauty experience rooted in authenticity." body="Yasrah Beauty is a professional beauty aesthetics company built around intentional service, refined artistry and client-centred care." />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-28">
        <Reveal><PlaceholderImage label="Yasrah Beauty portrait placeholder" className="aspect-[4/5]" /></Reveal>
        <Reveal className="lg:pt-12">
          <p className="eyebrow text-ink/45">Our Purpose</p>
          <h2 className="section-title mt-4">Beauty should feel like you.</h2>
          <p className="body-copy mt-6">The mission of Yasrah Beauty is to create a space where every individual feels embraced, valued and celebrated for their unique essence.</p>
          <p className="body-copy mt-4">Its vision is to set a standard where beauty becomes an expression of authenticity — not something that replaces it.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/services" className="btn-dark">Explore Services</Link>
            <Link to="/inquire" className="btn-outline">Inquire Now</Link>
          </div>
        </Reveal>
      </section>

      <section className="bg-smoke text-bone">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr]">
            <div><p className="eyebrow text-bone/45">Our Values</p></div>
            <div><h2 className="font-display text-5xl leading-none sm:text-6xl">The standard behind every client experience.</h2></div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-3 lg:grid-cols-5">
            {values.map((value, i) => (
              <div key={value} className="border-t border-bone/20 pt-4">
                <span className="text-[10px] text-bone/35">{String(i+1).padStart(2,'0')}</span>
                <div className="mt-2 font-display text-2xl">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="surface p-8 sm:p-10">
            <p className="eyebrow text-ink/45">What We Do</p>
            <h3 className="mt-4 font-display text-4xl">Professional beauty aesthetics.</h3>
            <p className="body-copy mt-5">Yasrah Beauty currently centres its website experience around Bridal Makeup & Hair and Clinical Aesthetics, with Waxing & Threading reserved for a later build.</p>
          </div>
          <div className="surface p-8 sm:p-10">
            <p className="eyebrow text-ink/45">Meet The Artist</p>
            <h3 className="mt-4 font-display text-4xl">Profile coming soon.</h3>
            <p className="body-copy mt-5">This space is intentionally reserved for the approved founder or artist biography and portrait once Yasrah Beauty is ready to add them.</p>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-white/30">
        <div className="mx-auto max-w-5xl px-5 py-16 text-center lg:px-8 lg:py-20">
          <p className="eyebrow text-ink/45">You are love</p>
          <p className="mt-5 font-display text-4xl italic sm:text-5xl">“To feel love, to see love, to be love.”</p>
        </div>
      </section>
    </>
  )
}

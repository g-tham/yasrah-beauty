import Link from '../components/SiteLink'
import PageHero from '../components/PageHero'
import PlaceholderImage from '../components/PlaceholderImage'
import Reveal from '../components/Reveal'

const clinicalTreatments = ['Laser Hair Removal','Laser Skin Rejuvenation','Microneedling','Dermaplaning','Radio Frequency']

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Beauty, considered from every angle." body="Explore Yasrah Beauty’s current service categories: Bridal Makeup & Hair and Clinical Aesthetics. Waxing & Threading is reserved for a later phase of the website." />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <article className="group">
              <Link to="/services/bridal" className="block">
                <PlaceholderImage label="Bridal Makeup & Hair" className="aspect-[5/6]" />
                <div className="mt-6 flex items-end justify-between gap-6">
                  <div>
                    <p className="eyebrow text-ink/40">01 · Bridal</p>
                    <h2 className="mt-2 font-display text-4xl sm:text-5xl">Bridal Makeup & Hair</h2>
                    <p className="body-copy mt-4 max-w-xl">A dedicated bridal experience with a structured inquiry, consultation, contract and final-timeline process.</p>
                  </div>
                  <span className="pb-2 text-2xl transition group-hover:translate-x-1">→</span>
                </div>
              </Link>
            </article>
          </Reveal>

          <Reveal className="lg:mt-20">
            <article className="group">
              <Link to="/services/clinical" className="block">
                <PlaceholderImage label="Clinical Aesthetics" className="aspect-[5/6]" />
                <div className="mt-6 flex items-end justify-between gap-6">
                  <div>
                    <p className="eyebrow text-ink/40">02 · Clinical Aesthetics</p>
                    <h2 className="mt-2 font-display text-4xl sm:text-5xl">Where science meets holistic practice.</h2>
                    <p className="body-copy mt-4 max-w-xl">Treatment information, pricing, pre-care, post-care and contraindication guidance are organized into a dedicated clinical experience.</p>
                  </div>
                  <span className="pb-2 text-2xl transition group-hover:translate-x-1">→</span>
                </div>
              </Link>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="bg-smoke text-bone">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow text-bone/45">Clinical Menu</p>
              <h2 className="mt-4 font-display text-5xl">Treatments in the guidelines.</h2>
            </div>
            <div className="grid gap-px bg-bone/15 sm:grid-cols-2">
              {clinicalTreatments.map((name, i) => (
                <div key={name} className="bg-smoke p-6">
                  <span className="text-[10px] text-bone/35">{String(i+1).padStart(2,'0')}</span>
                  <div className="mt-2 font-display text-2xl">{name}</div>
                  {(name === 'Dermaplaning' || name === 'Radio Frequency') && <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-bone/40">Details coming later</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="surface grid gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow text-ink/45">Future Service</p>
            <h3 className="mt-3 font-display text-4xl">Waxing & Threading</h3>
            <p className="body-copy mt-4 max-w-2xl">The original brief notes this service for a later build, so the full page is intentionally not published yet.</p>
          </div>
          <Link to="/inquire" className="btn-dark">Inquire Now</Link>
        </div>
      </section>
    </>
  )
}

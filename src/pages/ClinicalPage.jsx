import { useState } from 'react'
import Link from '../components/SiteLink'
import PageHero from '../components/PageHero'

const treatments = [
  {
    name: 'Laser Hair Removal',
    summary: 'A cosmetic procedure using concentrated light energy to target unwanted hair at the follicle for progressive, long-lasting hair reduction.',
    pricing: ['Small body part (2 zones) — $75','Large body part (2 zones) — $150','2 small body parts — $130','1 small & 1 large body part — $200','2 large body parts — $250','Full body — $450'],
    benefits: ['Long-lasting hair reduction','Targeted precision','Less routine shaving or waxing','Smoother-feeling skin over time','Customizable treatment settings'],
  },
  {
    name: 'Laser Skin Rejuvenation',
    summary: 'A non-invasive treatment using targeted light energy to support collagen and elastin production, with the goal of improving texture, tone and overall radiance.',
    pricing: ['Small body part / zone — $100','Large body part / zone — $160','Spot treatment — $75'],
    benefits: ['Supports collagen and elastin production','Softens the look of fine lines','Improves tone and texture','Minimizes the appearance of pores','Progressive, natural-looking results'],
  },
  {
    name: 'Microneedling',
    summary: 'A skincare treatment using a specialized device with fine needles to create controlled micro-injuries that stimulate the skin’s natural repair response.',
    pricing: ['Face — $150','Chest — $160','Neck — $135','Hands — $120','Spot treatment (2 small spots) — $100','I FEEL RICH package — $400','TRIPLE THREAT package — $350','Add-on body part — $75'],
    benefits: ['Improves overall skin texture and tone','Helps reduce the appearance of fine lines','Supports the appearance of acne scar improvement','Minimizes the look of enlarged pores','Promotes firmer, smoother-looking skin'],
  },
  {
    name: 'Dermaplaning',
    summary: 'A non-invasive exfoliation treatment that gently removes dead skin cells and fine facial hair from the skin’s surface, helping the complexion look smoother, brighter and more refreshed.',
    comingSoon: true,
  },
  {
    name: 'Radio Frequency',
    summary: 'A non-invasive aesthetic treatment that uses controlled radiofrequency energy to gently heat deeper layers of the skin, with the goal of supporting collagen production and improving firmness, texture and overall skin appearance.',
    comingSoon: true,
  },
]

function Treatment({ t }) {
  const [open, setOpen] = useState(false)
  return (
    <article className="border-t border-ink/15 py-6 sm:py-8">
      <button onClick={() => setOpen(!open)} className="group flex w-full items-center justify-between gap-5 py-1 text-left">
        <div><h2 className="font-display text-3xl sm:text-5xl">{t.name}</h2></div>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/15 text-xl transition group-hover:border-ink/35">{open ? '−' : '+'}</span>
      </button>
      {t.summary && <p className="body-copy mt-4 max-w-3xl">{t.summary}</p>}
      {open && (
        t.comingSoon ? (
          <div className="mt-6 border-t border-ink/10 pt-6">
            <p className="body-copy">Coming soon.</p>
          </div>
        ) : (
          <div className="mt-6 grid gap-7 border-t border-ink/10 pt-6 md:grid-cols-2 md:gap-10">
            <div><p className="eyebrow text-ink/45">Benefits</p><ul className="mt-4 space-y-3 text-sm leading-6 text-ink/70">{t.benefits.map(x => <li key={x} className="border-b border-ink/10 pb-3">{x}</li>)}</ul></div>
            <div><p className="eyebrow text-ink/45">Pricing</p><ul className="mt-4 space-y-3 text-sm leading-6 text-ink/70">{t.pricing.map(x => <li key={x} className="border-b border-ink/10 pb-3">{x}</li>)}</ul></div>
          </div>
        )
      )}
    </article>
  )
}

export default function ClinicalPage() {
  return (
    <>
      <PageHero title="Clinical Aesthetics" body="Laser hair removal, skin rejuvenation and microneedling, with more treatments coming soon." />
      <section className="mx-auto max-w-6xl px-5 py-12 sm:py-16 lg:px-8 lg:py-24">
        {treatments.map(t => <Treatment key={t.name} t={t} />)}
        <div className="mt-8"><Link to="/inquire" className="btn-dark w-full sm:w-auto">Start an Inquiry</Link></div>
      </section>
    </>
  )
}

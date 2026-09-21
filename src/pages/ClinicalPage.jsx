import { useState } from 'react'
import { Link } from 'react-router-dom'
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
]

function Treatment({ t }) {
  const [open, setOpen] = useState(false)
  return (
    <article className="border-t border-ink/15 py-8">
      <button onClick={() => setOpen(!open)} className="flex w-full items-start justify-between gap-6 text-left">
        <div><p className="eyebrow text-ink/40">Treatment</p><h2 className="mt-2 font-display text-4xl sm:text-5xl">{t.name}</h2></div>
        <span className="mt-4 text-2xl">{open ? '−' : '+'}</span>
      </button>
      <p className="body-copy mt-5 max-w-3xl">{t.summary}</p>
      {open && (
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <div><p className="eyebrow text-ink/45">Benefits</p><ul className="mt-4 space-y-3 text-sm leading-6 text-ink/70">{t.benefits.map(x => <li key={x} className="border-b border-ink/10 pb-3">{x}</li>)}</ul></div>
          <div><p className="eyebrow text-ink/45">Pricing</p><ul className="mt-4 space-y-3 text-sm leading-6 text-ink/70">{t.pricing.map(x => <li key={x} className="border-b border-ink/10 pb-3">{x}</li>)}</ul></div>
        </div>
      )}
    </article>
  )
}

export default function ClinicalPage() {
  return (
    <>
      <PageHero eyebrow="Clinical Aesthetics" title="Where science meets holistic practice." body="Thoughtfully selected aesthetic treatments with a focus on education, care and an elevated client experience." />
      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-24">
        {treatments.map(t => <Treatment key={t.name} t={t} />)}
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {['Dermaplaning','Radio Frequency'].map(name => <div key={name} className="surface p-7"><p className="eyebrow text-ink/40">Coming Soon</p><h3 className="mt-3 font-display text-3xl">{name}</h3><p className="body-copy mt-3">Service details were not yet provided in the website guidelines.</p></div>)}
        </div>
        <div className="mt-10 bg-ink p-6 text-sm leading-6 text-bone/75">Important: clinical treatment copy, claims, contraindications, pre-care and post-care should be reviewed by the treating professional before this site is published. The current build follows the supplied Yasrah Beauty document and intentionally does not add outside medical guidance.</div>
        <div className="mt-8"><Link to="/inquire" className="btn-dark">Start an Inquiry</Link></div>
      </section>
    </>
  )
}

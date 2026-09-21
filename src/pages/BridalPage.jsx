import Link from '../components/SiteLink'
import PlaceholderImage from '../components/PlaceholderImage'

const steps = [
  ['Inquire','Complete the online bridal intake form to share your date and service needs.'],
  ['Consult','Yasrah Beauty will reach out by email to arrange a virtual consultation, finalize your quote and review contract details.'],
  ['Secure Your Date','Receive and complete your Yasrah Beauty contract. Your date is secured once the signed contract and retainer are received.'],
  ['Final Details','Receive the final invoice, timeline and calendar information, and pay the non-refundable 25% retainer.'],
]

export default function BridalPage() {
  return (
    <>
      <section className="relative min-h-[64vh] sm:min-h-[70vh] lg:min-h-[72vh] overflow-hidden bg-ink text-bone">
        <PlaceholderImage label="Luxury bridal hero" className="mobile-hero-image absolute inset-0" />
        <div className="absolute inset-0 z-[1] bg-black/45" />
        <div className="relative z-10 mx-auto flex min-h-[64vh] sm:min-h-[70vh] lg:min-h-[72vh] max-w-7xl items-end px-5 pb-10 sm:pb-14 lg:px-8 lg:pb-20">
          <div className="max-w-3xl"><p className="eyebrow text-bone/55">Bridal Makeup & Hair</p><h1 className="display-title mt-4">Bridal makeup & hair, tailored to you.</h1><Link to="/inquire" className="btn-light mt-8 w-full sm:w-auto">Start Your Inquiry</Link></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:py-16 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <h2 className="section-title">How booking works.</h2>
        </div>
        <div className="mt-10 grid gap-px bg-ink/10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([title, text], index) => (
            <div key={title} className="bg-bone p-6 sm:p-8">
              <div className="text-[10px] uppercase tracking-[0.24em] text-ink/35">0{index+1}</div>
              <h3 className="mt-5 font-display text-3xl">{title}</h3>
              <p className="body-copy mt-4">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-smoke text-bone">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-12 sm:py-16 md:grid-cols-3 lg:px-8 lg:py-28">
          {[1,2,3].map(n => <PlaceholderImage key={n} label={`Bridal portfolio ${n}`} className={`aspect-[5/4] sm:aspect-[4/5] ${n===2 ? 'md:mt-14' : ''}`} />)}
        </div>
      </section>
    </>
  )
}

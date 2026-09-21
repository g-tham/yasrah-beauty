import { useState } from 'react'
import PageHero from '../components/PageHero'

export default function InquiryPage() {
  const [sent, setSent] = useState(false)
  const submit = (e) => { e.preventDefault(); setSent(true) }
  return (
    <>
      <PageHero eyebrow="Inquire Now" title="Tell us what you’re envisioning." body="This is a front-end demo form. It can later be connected to email, a CRM, a booking platform or a form service." />
      <section className="mx-auto max-w-4xl px-5 py-14 sm:py-20 lg:px-8">
        {sent ? (
          <div className="surface p-7 text-center sm:p-10"><h2 className="font-display text-4xl">Thank you.</h2><p className="body-copy mt-4">Demo submitted — this form does not send data anywhere yet.</p></div>
        ) : (
          <form onSubmit={submit} className="grid gap-5 sm:gap-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="text-xs uppercase tracking-[0.14em]">Name<input required className="mt-2 w-full border border-ink/20 bg-transparent px-4 py-3 normal-case tracking-normal outline-none focus:border-ink" /></label>
              <label className="text-xs uppercase tracking-[0.14em]">Email<input required type="email" className="mt-2 w-full border border-ink/20 bg-transparent px-4 py-3 normal-case tracking-normal outline-none focus:border-ink" /></label>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="text-xs uppercase tracking-[0.14em]">Service<select className="mt-2 w-full border border-ink/20 bg-transparent px-4 py-3 normal-case tracking-normal outline-none focus:border-ink"><option>Bridal Makeup & Hair</option><option>Clinical Aesthetics</option><option>Other</option></select></label>
              <label className="text-xs uppercase tracking-[0.14em]">Preferred Date<input type="date" className="mt-2 w-full border border-ink/20 bg-transparent px-4 py-3 normal-case tracking-normal outline-none focus:border-ink" /></label>
            </div>
            <label className="text-xs uppercase tracking-[0.14em]">Tell us more<textarea rows="6" className="mt-2 w-full border border-ink/20 bg-transparent px-4 py-3 normal-case tracking-normal outline-none focus:border-ink" placeholder="Event details, treatment interest, questions…" /></label>
            <button className="btn-dark w-full sm:w-fit" type="submit">Submit Inquiry</button>
          </form>
        )}
      </section>
    </>
  )
}

import Link from '../components/SiteLink'
import PageHero from '../components/PageHero'

const policySections = [
  {
    number: '01',
    title: 'Client Cancellation',
    body: 'This booking arrangement cannot be changed once the contract has been signed. Appointments canceled up to 30 days before the occasion will not be eligible for a refund on full payment.',
  },
  {
    number: '02',
    title: 'Artist Cancellation',
    body: 'If the Artist cancels this agreement for any purpose other than the stated breach of terms in the following contract or is unable to perform the Services for any reason and is unable to find a replacement Artist, the retainer paid will be fully refunded within two weeks.',
  },
  {
    number: '03',
    title: 'Liability',
    body: 'Client agrees that the refund of 100% of the deposit is the only liability to the Artist, company, employees and agents and indemnifies for any kind of harm, claim, loss, costs, damage, injury or product reaction to any person or property arising, either directly or indirectly, from the Artist’s performance, or any other reason whatsoever.',
  },
  {
    number: '04',
    title: 'Client Conduct',
    body: 'Clients shall not use social media or any other form of communication, whether physical or electronic, to cause harm to the Artist/Company. This includes, but is not limited to, online bullying, character assassination, defamation, or the spreading of hate. Should such conduct occur, the Client acknowledges and agrees that the Artist/Company reserves the right to pursue appropriate legal action.',
  },
  {
    number: '05',
    title: 'Written Notice',
    body: 'All cancellations must be submitted in written form by email.',
  },
]

export default function PoliciesPage() {
  return (
    <>
      <PageHero
        eyebrow="Client Policies"
        title="Clear expectations. Thoughtful care."
        body="Policies designed to keep every booking clear, respectful and seamless."
      />

      <section className="mx-auto max-w-6xl px-5 py-12 sm:py-16 lg:px-8 lg:py-20">
        <div className="surface p-6 sm:p-8">
          <p className="eyebrow text-ink/45">A Note From Yasrah Beauty</p>
          <p className="body-copy mt-4 max-w-4xl">
            These are a few policies that you will find in your Yasrah Beauty Bridal contract.
            These are in place to protect Yasrah Beauty and our artists. If you have any questions
            or concerns, please feel free to reach out.
          </p>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/25">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <div>
              <p className="eyebrow text-ink/45">Bridal Policy</p>
              <h2 className="mt-4 font-display text-4xl leading-none sm:text-5xl">Cancellation Policy</h2>

            </div>

            <div className="border-t border-ink/15 lg:border-t-0">
              {policySections.map((section) => (
                <div key={section.number} className="grid gap-3 border-b border-ink/10 py-6 sm:grid-cols-[64px_1fr] sm:gap-6 sm:py-7">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-ink/35">{section.number}</div>
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl">{section.title}</h3>
                    <p className="body-copy mt-3">{section.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="surface p-6 sm:p-8">
            <p className="eyebrow text-ink/40">Additional Policies</p>
            <h3 className="mt-3 font-display text-3xl">Coming soon.</h3>
            <p className="body-copy mt-4">
              Additional Yasrah Beauty policies will be added here as they are finalized.
            </p>
          </div>

          <div className="surface flex flex-col justify-between p-6 sm:p-8">
            <div>
              <p className="eyebrow text-ink/40">Complete Policy Document</p>
              <h3 className="mt-3 font-display text-3xl">Full policies PDF.</h3>
              <p className="body-copy mt-4">The complete policy document will be available once finalized.</p>
            </div>
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="mt-7 inline-flex cursor-not-allowed items-center justify-center border border-ink/10 bg-ink/5 px-6 py-3.5 text-xs uppercase tracking-[0.2em] text-ink/30"
            >
              Full Policies PDF — Coming Soon
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-ink/10 pt-9 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow text-ink/40">Questions about a policy?</p>
            <h3 className="mt-3 font-display text-3xl sm:text-4xl">We’re here to help.</h3>
          </div>
          <Link to="/inquire" className="btn-dark w-full sm:w-auto">Inquire Now</Link>
        </div>
      </section>
    </>
  )
}

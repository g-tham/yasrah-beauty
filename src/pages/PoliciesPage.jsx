import PageHero from '../components/PageHero'

export default function PoliciesPage() {
  return (
    <>
      <PageHero eyebrow="Policies" title="Clear expectations. Thoughtful care." body="These are a few policies found in the Yasrah Beauty bridal contract. They are in place to protect Yasrah Beauty and its artists. Questions or concerns are always welcome." />
      <section className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
        <div className="border-t border-ink/15 py-8">
          <p className="eyebrow text-ink/45">Bridal</p>
          <h2 className="mt-3 font-display text-4xl">Cancellations</h2>
          <div className="body-copy mt-6 space-y-4">
            <p>This booking arrangement cannot be changed once the contract has been signed. Appointments canceled up to 30 days before the occasion will not be eligible for a refund on full payment.</p>
            <p>If the Artist cancels this agreement for any purpose other than a stated breach of terms, or is unable to perform the Services and cannot find a replacement Artist, the retainer paid will be fully refunded within two weeks.</p>
            <p>Clients shall not use social media or any other form of communication, whether physical or electronic, to cause harm to the Artist/Company. This includes online bullying, character assassination, defamation or the spreading of hate. Yasrah Beauty reserves the right to pursue appropriate legal action.</p>
            <p>All cancellations must be submitted in written form by email.</p>
          </div>
        </div>
      </section>
    </>
  )
}

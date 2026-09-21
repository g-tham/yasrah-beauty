import Link from '../components/SiteLink'
import PageHero from '../components/PageHero'
import PlaceholderImage from '../components/PlaceholderImage'
import Reveal from '../components/Reveal'

const sizes = ['aspect-[4/5]','aspect-square','aspect-[3/4]','aspect-[5/6]','aspect-square','aspect-[4/5]','aspect-[3/4]','aspect-square','aspect-[5/6]']

export default function PortfolioPage() {
  return (
    <>
      <PageHero title="Portfolio" body="Coming soon." />

      <section className="bg-smoke py-10 text-bone sm:py-16 lg:py-24">
        <div className="mx-auto columns-1 max-w-7xl gap-3 px-5 sm:columns-2 md:columns-3 lg:px-8">
          {Array.from({length:9}).map((_, i) => (
            <Reveal key={i} className="mb-3 break-inside-avoid">
              <PlaceholderImage label={`Portfolio placeholder ${i+1}`} className={sizes[i]} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:py-16 lg:px-8 lg:py-28">
        <div className="grid gap-8 md:grid-cols-3">
          {['Bridal','Beauty Details','Full Gallery'].map((title) => (
            <div key={title} className="border-t border-ink/15 pt-5">
              <h3 className="font-display text-3xl">{title}</h3>
              <p className="body-copy mt-3">Coming soon.</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-8 border-t border-ink/10 pt-10 sm:flex-row sm:items-center">
          <div><h3 className="font-display text-3xl sm:text-4xl">Ready to book?</h3></div>
          <Link to="/inquire" className="btn-dark w-full sm:w-auto">Inquire Now</Link>
        </div>
      </section>
    </>
  )
}

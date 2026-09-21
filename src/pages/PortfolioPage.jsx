import Link from '../components/SiteLink'
import PageHero from '../components/PageHero'
import PlaceholderImage from '../components/PlaceholderImage'
import Reveal from '../components/Reveal'

const sizes = ['aspect-[4/5]','aspect-square','aspect-[3/4]','aspect-[5/6]','aspect-square','aspect-[4/5]','aspect-[3/4]','aspect-square','aspect-[5/6]']

export default function PortfolioPage() {
  return (
    <>
      <PageHero eyebrow="Portfolio" title="The Yasrah Beauty edit." body="This page is designed as an editorial gallery for Yasrah Beauty’s final photography. The current images are intentional placeholders until the approved portfolio is supplied." />

      <section className="mx-auto max-w-7xl px-5 py-12 sm:py-16 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div><p className="eyebrow text-ink/45">Portfolio Direction</p></div>
          <div><h2 className="font-display text-4xl leading-none sm:text-6xl">Moody, refined imagery with the work as the focal point.</h2></div>
        </div>
      </section>

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
          {[
            ['Bridal Portfolio','Reserved for approved bridal makeup and hair imagery.'],
            ['Beauty Details','Reserved for close-up artistry and detail photography.'],
            ['Full Gallery','Coming soon.']
          ].map(([title, body], i) => (
            <div key={title} className="border-t border-ink/15 pt-5">
              <div className="text-[10px] text-ink/35">0{i+1}</div>
              <h3 className="mt-3 font-display text-3xl">{title}</h3>
              <p className="body-copy mt-3">{body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-8 border-t border-ink/10 pt-10 sm:flex-row sm:items-center">
          <div><p className="eyebrow text-ink/45">Like the direction?</p><h3 className="mt-3 font-display text-3xl sm:text-4xl">Begin your Yasrah Beauty inquiry.</h3></div>
          <Link to="/inquire" className="btn-dark w-full sm:w-auto">Inquire Now</Link>
        </div>
      </section>
    </>
  )
}

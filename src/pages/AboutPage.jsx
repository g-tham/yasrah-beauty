import Link from '../components/SiteLink'
import PageHero from '../components/PageHero'
import PlaceholderImage from '../components/PlaceholderImage'
import Reveal from '../components/Reveal'

const values = ['Trustworthy','Loyal','Client-centricity','Integrity','Innovation','Collaboration','Transparency','Authenticity','Respect','Compassion']

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Yasrah Beauty." body="Bridal makeup, hair and clinical aesthetics with a focus on thoughtful, personalized care." />

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-28">
        <Reveal className="order-2 lg:order-1"><PlaceholderImage label="Yasrah Beauty portrait placeholder" className="aspect-[5/4] sm:aspect-[4/5]" /></Reveal>
        <Reveal className="order-1 lg:order-2 lg:pt-12">
          <h2 className="section-title">Beauty should feel like you.</h2>
          <p className="body-copy mt-6">The mission of Yasrah Beauty is to create a space where every individual feels embraced, valued and celebrated for their unique essence.</p>
          <p className="body-copy mt-4">Its vision is to set a standard where beauty becomes an expression of authenticity — not something that replaces it.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/inquire" className="btn-outline w-full sm:w-auto">Inquire Now</Link>
          </div>
        </Reveal>
      </section>

      <section className="bg-smoke text-bone">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:py-16 lg:px-8 lg:py-24">
          <div className="text-center">
            <p className="eyebrow text-bone/45">Our Values</p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-3 lg:grid-cols-5">
            {values.map((value) => (
              <div key={value} className="border-t border-bone/20 pt-5 text-center">
                <div className="font-display text-2xl">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:py-16 lg:px-8 lg:py-28">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="surface p-6 sm:p-10">
            <h3 className="font-display text-4xl">What we do.</h3>
            <p className="body-copy mt-5">Yasrah Beauty currently centres its website experience around Bridal Makeup & Hair and Clinical Aesthetics, with Waxing & Threading coming soon.</p>
          </div>
          <div className="surface p-8 sm:p-10">
            <h3 className="font-display text-4xl">Meet the artist.</h3>
            <p className="body-copy mt-5">Profile coming soon.</p>
          </div>
        </div>
      </section>
    </>
  )
}

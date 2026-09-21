import PageHero from '../components/PageHero'
import PlaceholderImage from '../components/PlaceholderImage'

const values = ['Trustworthy','Loyal','Client-centricity','Integrity','Innovation','Collaboration','Transparency','Authenticity','Respect','Compassion']

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="A beauty experience rooted in authenticity." body="Yasrah Beauty is a professional beauty aesthetics company centred on intentional service, refined artistry and meaningful client care." />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
        <PlaceholderImage label="Brand portrait placeholder" className="aspect-[4/5]" />
        <div className="lg:pt-14">
          <p className="eyebrow text-ink/45">Mission</p>
          <p className="mt-4 font-display text-4xl leading-tight">Where every individual feels embraced, valued and celebrated for their unique essence.</p>
          <p className="eyebrow mt-12 text-ink/45">Vision</p>
          <p className="mt-4 font-display text-4xl leading-tight">Setting a standard where beauty is an expression of your authenticity.</p>
        </div>
      </section>
      <section className="bg-smoke text-bone">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <p className="eyebrow text-bone/45">Our Values</p>
          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-3 lg:grid-cols-5">
            {values.map((value, i) => <div key={value} className="border-t border-bone/20 pt-4"><span className="text-[10px] text-bone/35">0{i+1}</span><div className="mt-2 font-display text-2xl">{value}</div></div>)}
          </div>
        </div>
      </section>
    </>
  )
}

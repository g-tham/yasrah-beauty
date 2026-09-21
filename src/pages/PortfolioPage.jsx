import PageHero from '../components/PageHero'
import PlaceholderImage from '../components/PlaceholderImage'

export default function PortfolioPage() {
  return (
    <>
      <PageHero eyebrow="Portfolio" title="The Yasrah Beauty edit." body="A future home for bridal transformations, beauty details and elevated editorial work." />
      <section className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-5 py-20 md:grid-cols-3 lg:px-8">
        {Array.from({length:9}).map((_, i) => <PlaceholderImage key={i} label={`Portfolio image ${i+1}`} className={`${i%3===1 ? 'aspect-[3/4]' : 'aspect-square'}`} />)}
      </section>
    </>
  )
}

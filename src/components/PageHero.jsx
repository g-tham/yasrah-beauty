export default function PageHero({ eyebrow, title, body }) {
  return (
    <section className="page-hero border-b border-ink/10 bg-bone">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:py-20 lg:px-8 lg:py-32">
        <p className="eyebrow text-ink/50">{eyebrow}</p>
        <h1 className="mt-4 max-w-5xl section-title sm:mt-5">{title}</h1>
        {body && <p className="body-copy mt-5 max-w-2xl sm:mt-7">{body}</p>}
      </div>
    </section>
  )
}

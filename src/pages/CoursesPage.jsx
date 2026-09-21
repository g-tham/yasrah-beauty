import Link from '../components/SiteLink'
import PlaceholderImage from '../components/PlaceholderImage'

export default function CoursesPage() {
  return (
    <>
      <section className="relative min-h-[68vh] overflow-hidden bg-ink text-bone">
        <PlaceholderImage label="Education editorial placeholder" className="absolute inset-0" />
        <div className="absolute inset-0 z-[1] bg-black/55" />
        <div className="relative z-10 mx-auto flex min-h-[68vh] max-w-7xl items-end px-5 pb-14 lg:px-8 lg:pb-20">
          <div className="max-w-4xl">
            <p className="eyebrow text-bone/55">Yasrah Beauty Education</p>
            <h1 className="display-title mt-4">Courses are coming soon.</h1>
            <p className="mt-6 max-w-xl text-sm leading-7 text-bone/75 sm:text-base">Coming soon.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div><p className="eyebrow text-ink/45">Future Education</p></div>
          <div>
            <h2 className="section-title">A polished home for Yasrah Beauty education.</h2>
            <p className="body-copy mt-6 max-w-2xl">Coming soon.</p>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {['Course title placeholder','Curriculum placeholder','Enrollment placeholder'].map((title, i) => (
            <div key={title} className="surface min-h-64 p-7">
              <div className="text-[10px] text-ink/35">0{i+1}</div>
              <p className="eyebrow mt-10 text-ink/35">Coming Soon</p>
              <h3 className="mt-3 font-display text-3xl">{title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-smoke text-bone">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-16 sm:flex-row sm:items-center lg:px-8 lg:py-20">
          <div>
            <p className="eyebrow text-bone/45">Questions?</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">Get in touch with Yasrah Beauty.</h2>
          </div>
          <Link to="/inquire" className="btn-light">Inquire Now</Link>
        </div>
      </section>
    </>
  )
}

import PlaceholderImage from '../components/PlaceholderImage'

export default function CoursesPage() {
  return (
    <section className="relative min-h-[72vh] overflow-hidden bg-ink text-bone">
      <PlaceholderImage label="Education editorial placeholder" className="mobile-hero-image absolute inset-0" />
      <div className="absolute inset-0 z-[1] bg-black/55" />
      <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-7xl items-end px-5 pb-14 lg:px-8 lg:pb-20">
        <div className="max-w-3xl">
          <h1 className="display-title">Courses coming soon.</h1>
        </div>
      </div>
    </section>
  )
}

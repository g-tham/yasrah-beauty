import SiteLink from './SiteLink'

export default function Footer() {
  return (
    <footer className="bg-ink text-bone">
      <div className="border-b border-bone/10">
        <div className="mx-auto max-w-7xl px-5 py-8 text-center lg:px-8 lg:py-10">
          <p className="eyebrow text-bone/35">Yasrah Beauty</p>
          <p className="mx-auto mt-3 max-w-4xl font-display text-2xl leading-tight text-bone/85 sm:text-3xl lg:text-4xl">
            “YOU ARE LOVE, TO FEEL LOVE, TO SEE LOVE, TO BE LOVE”
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <SiteLink to="/" className="font-display text-3xl tracking-[0.16em]">YASRAH BEAUTY</SiteLink>
            <p className="mt-5 max-w-lg text-sm leading-7 text-bone/55">Bridal artistry and clinical aesthetics, shaped by authenticity, care and intentional beauty.</p>
          </div>
          <div className="space-y-3 text-sm text-bone/70">
            <div className="eyebrow !text-bone/45">Explore</div>
            <SiteLink className="block hover:text-bone" to="/about">About</SiteLink>
            <SiteLink className="block hover:text-bone" to="/services">Services</SiteLink>
            <SiteLink className="block hover:text-bone" to="/services/bridal">Bridal</SiteLink>
            <SiteLink className="block hover:text-bone" to="/services/clinical">Clinical Aesthetics</SiteLink>
            <SiteLink className="block hover:text-bone" to="/portfolio">Portfolio</SiteLink>
            <span className="block cursor-not-allowed text-bone/30" aria-disabled="true">Courses</span>
          </div>
          <div className="space-y-3 text-sm text-bone/70">
            <div className="eyebrow !text-bone/45">Client Care</div>
            <SiteLink className="block hover:text-bone" to="/inquire">Inquire Now</SiteLink>
            <SiteLink className="block hover:text-bone" to="/faq">FAQ</SiteLink>
            <SiteLink className="block hover:text-bone" to="/policies">Policies</SiteLink>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-2 border-t border-bone/15 pt-6 text-[10px] uppercase tracking-[0.2em] text-bone/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Yasrah Beauty. All rights reserved.</span>
          <span>Built by R3Synergy Inc.</span>
        </div>
      </div>
    </footer>
  )
}

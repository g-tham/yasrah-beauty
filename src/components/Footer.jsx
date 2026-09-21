import SiteLink from './SiteLink'

export default function Footer() {
  return (
    <footer className="bg-ink text-bone">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <SiteLink to="/" className="font-display text-3xl tracking-[0.16em]">YASRAH BEAUTY</SiteLink>
            <p className="mt-5 max-w-xl font-display text-2xl italic text-bone/80">“You are love, to feel love, to see love, to be love.”</p>
          </div>
          <div className="space-y-3 text-sm text-bone/70">
            <div className="eyebrow !text-bone/45">Explore</div>
            <SiteLink className="block hover:text-bone" to="/about">About</SiteLink>
            <SiteLink className="block hover:text-bone" to="/services">Services</SiteLink>
            <SiteLink className="block hover:text-bone" to="/services/bridal">Bridal</SiteLink>
            <SiteLink className="block hover:text-bone" to="/services/clinical">Clinical Aesthetics</SiteLink>
            <SiteLink className="block hover:text-bone" to="/portfolio">Portfolio</SiteLink>
            <SiteLink className="block hover:text-bone" to="/courses">Courses</SiteLink>
          </div>
          <div className="space-y-3 text-sm text-bone/70">
            <div className="eyebrow !text-bone/45">Client Care</div>
            <SiteLink className="block hover:text-bone" to="/inquire">Inquire Now</SiteLink>
            <SiteLink className="block hover:text-bone" to="/faq">FAQ</SiteLink>
            <SiteLink className="block hover:text-bone" to="/policies">Policies</SiteLink>
          </div>
        </div>
        <div className="mt-14 border-t border-bone/15 pt-6 text-[10px] uppercase tracking-[0.2em] text-bone/45">© {new Date().getFullYear()} Yasrah Beauty. All rights reserved.</div>
      </div>
    </footer>
  )
}

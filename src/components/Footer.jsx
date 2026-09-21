const BASE = import.meta.env.BASE_URL || '/yasrah-beauty/'
const href = (route) => `${BASE}#${route}`

export default function Footer() {
  return (
    <footer className="bg-ink text-bone">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href={BASE} className="font-display text-3xl tracking-[0.16em]">YASRAH BEAUTY</a>
            <p className="mt-5 max-w-xl font-display text-2xl italic text-bone/80">“You are love, to feel love, to see love, to be love.”</p>
          </div>
          <div className="space-y-3 text-sm text-bone/70">
            <div className="eyebrow !text-bone/45">Explore</div>
            <a className="block hover:text-bone" href={href('/about')}>About</a>
            <a className="block hover:text-bone" href={href('/services')}>Services</a>
            <a className="block hover:text-bone" href={href('/services/bridal')}>Bridal</a>
            <a className="block hover:text-bone" href={href('/services/clinical')}>Clinical Aesthetics</a>
            <a className="block hover:text-bone" href={href('/portfolio')}>Portfolio</a>
            <a className="block hover:text-bone" href={href('/courses')}>Courses</a>
          </div>
          <div className="space-y-3 text-sm text-bone/70">
            <div className="eyebrow !text-bone/45">Client Care</div>
            <a className="block hover:text-bone" href={href('/inquire')}>Inquire Now</a>
            <a className="block hover:text-bone" href={href('/faq')}>FAQ</a>
            <a className="block hover:text-bone" href={href('/policies')}>Policies</a>
          </div>
        </div>
        <div className="mt-14 border-t border-bone/15 pt-6 text-[10px] uppercase tracking-[0.2em] text-bone/45">© {new Date().getFullYear()} Yasrah Beauty. All rights reserved.</div>
      </div>
    </footer>
  )
}

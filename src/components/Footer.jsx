import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-ink text-bone">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="font-display text-3xl tracking-[0.16em]">YASRAH BEAUTY</div>
            <p className="mt-5 max-w-xl font-display text-2xl italic text-bone/80">“You are love, to feel love, to see love, to be love.”</p>
          </div>
          <div className="space-y-3 text-sm text-bone/70">
            <div className="eyebrow !text-bone/45">Explore</div>
            <Link className="block hover:text-bone" to="/about">About</Link>
            <Link className="block hover:text-bone" to="/services/bridal">Bridal</Link>
            <Link className="block hover:text-bone" to="/services/clinical">Clinical Aesthetics</Link>
            <Link className="block hover:text-bone" to="/portfolio">Portfolio</Link>
          </div>
          <div className="space-y-3 text-sm text-bone/70">
            <div className="eyebrow !text-bone/45">Client Care</div>
            <Link className="block hover:text-bone" to="/inquire">Inquire Now</Link>
            <Link className="block hover:text-bone" to="/faq">FAQ</Link>
            <Link className="block hover:text-bone" to="/policies">Policies</Link>
          </div>
        </div>
        <div className="mt-14 border-t border-bone/15 pt-6 text-[10px] uppercase tracking-[0.2em] text-bone/45">© {new Date().getFullYear()} Yasrah Beauty. All rights reserved.</div>
      </div>
    </footer>
  )
}

import { useNavigate } from 'react-router-dom'

const BASE = import.meta.env.BASE_URL || '/yasrah-beauty/'

function InternalLink({ to, children, className = '' }) {
  const navigate = useNavigate()

  return (
    <a
      href={`${BASE}#${to}`}
      onClick={(event) => {
        event.preventDefault()
        navigate(to)
      }}
      className={className}
    >
      {children}
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="bg-ink text-bone">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <InternalLink to="/" className="font-display text-3xl tracking-[0.16em]">YASRAH BEAUTY</InternalLink>
            <p className="mt-5 max-w-xl font-display text-2xl italic text-bone/80">“You are love, to feel love, to see love, to be love.”</p>
          </div>
          <div className="space-y-3 text-sm text-bone/70">
            <div className="eyebrow !text-bone/45">Explore</div>
            <InternalLink className="block hover:text-bone" to="/about">About</InternalLink>
            <InternalLink className="block hover:text-bone" to="/services">Services</InternalLink>
            <InternalLink className="block hover:text-bone" to="/services/bridal">Bridal</InternalLink>
            <InternalLink className="block hover:text-bone" to="/services/clinical">Clinical Aesthetics</InternalLink>
            <InternalLink className="block hover:text-bone" to="/portfolio">Portfolio</InternalLink>
            <InternalLink className="block hover:text-bone" to="/courses">Courses</InternalLink>
          </div>
          <div className="space-y-3 text-sm text-bone/70">
            <div className="eyebrow !text-bone/45">Client Care</div>
            <InternalLink className="block hover:text-bone" to="/inquire">Inquire Now</InternalLink>
            <InternalLink className="block hover:text-bone" to="/faq">FAQ</InternalLink>
            <InternalLink className="block hover:text-bone" to="/policies">Policies</InternalLink>
          </div>
        </div>
        <div className="mt-14 border-t border-bone/15 pt-6 text-[10px] uppercase tracking-[0.2em] text-bone/45">© {new Date().getFullYear()} Yasrah Beauty. All rights reserved.</div>
      </div>
    </footer>
  )
}

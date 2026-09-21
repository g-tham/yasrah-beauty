import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const BASE = import.meta.env.BASE_URL || '/yasrah-beauty/'

function InternalLink({ to, children, className = '', onClick }) {
  const navigate = useNavigate()

  const handleClick = (event) => {
    event.preventDefault()
    navigate(to)
    onClick?.()
  }

  return (
    <a
      href={`${BASE}#${to}`}
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()

  const navClass = (path) =>
    `text-[11px] uppercase tracking-[0.18em] transition ${location.pathname === path ? 'text-ink' : 'text-ink/60 hover:text-ink'}`

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-bone/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <InternalLink to="/" className="font-display text-2xl tracking-[0.16em]">YASRAH BEAUTY</InternalLink>

        <nav className="hidden items-center gap-7 lg:flex">
          <InternalLink to="/" className={navClass('/')}>Home</InternalLink>

          <div className="relative" onMouseEnter={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)}>
            <div className="flex items-center gap-1.5">
              <InternalLink to="/about" className={navClass('/about')}>About</InternalLink>
              <button onClick={() => setAboutOpen(v => !v)} className="text-[10px] text-ink/45" aria-label="Open About menu">⌄</button>
            </div>
            {aboutOpen && (
              <div className="absolute left-1/2 top-full w-48 -translate-x-1/2 pt-5">
                <div className="border border-ink/10 bg-bone p-3 shadow-soft">
                  <InternalLink to="/about" className="block px-3 py-2 text-xs hover:bg-white/40">About Yasrah</InternalLink>
                  <InternalLink to="/faq" className="block px-3 py-2 text-xs hover:bg-white/40">FAQ</InternalLink>
                  <InternalLink to="/policies" className="block px-3 py-2 text-xs hover:bg-white/40">Policies</InternalLink>
                </div>
              </div>
            )}
          </div>

          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <div className="flex items-center gap-1.5">
              <InternalLink to="/services" className={navClass('/services')}>Services</InternalLink>
              <button onClick={() => setServicesOpen(v => !v)} className="text-[10px] text-ink/45" aria-label="Open Services menu">⌄</button>
            </div>
            {servicesOpen && (
              <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-5">
                <div className="border border-ink/10 bg-bone p-3 shadow-soft">
                  <InternalLink to="/services" className="block px-3 py-2 text-xs hover:bg-white/40">All Services</InternalLink>
                  <InternalLink to="/services/bridal" className="block px-3 py-2 text-xs hover:bg-white/40">Bridal Makeup & Hair</InternalLink>
                  <InternalLink to="/services/clinical" className="block px-3 py-2 text-xs hover:bg-white/40">Clinical Aesthetics</InternalLink>
                  <div className="px-3 py-2 text-xs text-ink/35">Waxing & Threading · Later</div>
                </div>
              </div>
            )}
          </div>

          <InternalLink to="/portfolio" className={navClass('/portfolio')}>Portfolio</InternalLink>
          <InternalLink to="/courses" className={navClass('/courses')}>Courses</InternalLink>
          <InternalLink to="/inquire" className="btn-dark !px-5 !py-3">Inquire Now</InternalLink>
        </nav>

        <button onClick={() => setOpen(v => !v)} className="lg:hidden text-xs uppercase tracking-[0.2em]">{open ? 'Close' : 'Menu'}</button>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-bone px-5 py-6 lg:hidden">
          <div className="grid gap-4">
            <InternalLink to="/" onClick={() => setOpen(false)}>Home</InternalLink>
            <InternalLink to="/about" onClick={() => setOpen(false)}>About</InternalLink>
            <div className="ml-4 grid gap-3 border-l border-ink/10 pl-4 text-sm text-ink/60">
              <InternalLink to="/faq" onClick={() => setOpen(false)}>FAQ</InternalLink>
              <InternalLink to="/policies" onClick={() => setOpen(false)}>Policies</InternalLink>
            </div>
            <InternalLink to="/services" onClick={() => setOpen(false)}>Services</InternalLink>
            <div className="ml-4 grid gap-3 border-l border-ink/10 pl-4 text-sm text-ink/60">
              <InternalLink to="/services/bridal" onClick={() => setOpen(false)}>Bridal Makeup & Hair</InternalLink>
              <InternalLink to="/services/clinical" onClick={() => setOpen(false)}>Clinical Aesthetics</InternalLink>
            </div>
            <InternalLink to="/portfolio" onClick={() => setOpen(false)}>Portfolio</InternalLink>
            <InternalLink to="/courses" onClick={() => setOpen(false)}>Courses</InternalLink>
            <InternalLink to="/inquire" onClick={() => setOpen(false)} className="btn-dark mt-2 w-full">Inquire Now</InternalLink>
          </div>
        </div>
      )}
    </header>
  )
}

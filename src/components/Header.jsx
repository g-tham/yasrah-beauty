import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import SiteLink from './SiteLink'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()

  const navClass = (path) =>
    `text-[11px] uppercase tracking-[0.18em] transition ${location.pathname === path ? 'text-ink' : 'text-ink/60 hover:text-ink'}`

  const closeMobile = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-bone/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <SiteLink to="/" className="font-display text-2xl tracking-[0.16em]">YASRAH BEAUTY</SiteLink>

        <nav className="hidden items-center gap-7 lg:flex">
          <SiteLink to="/" className={navClass('/')}>Home</SiteLink>

          <div className="relative" onMouseEnter={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)}>
            <div className="flex items-center gap-1.5">
              <SiteLink to="/about" className={navClass('/about')}>About</SiteLink>
              <button onClick={() => setAboutOpen(v => !v)} className="text-[10px] text-ink/45" aria-label="Open About menu">⌄</button>
            </div>
            {aboutOpen && (
              <div className="absolute left-1/2 top-full w-48 -translate-x-1/2 pt-5">
                <div className="border border-ink/10 bg-bone p-3 shadow-soft">
                  <SiteLink to="/about" className="block px-3 py-2 text-xs hover:bg-white/40">About Yasrah</SiteLink>
                  <SiteLink to="/faq" className="block px-3 py-2 text-xs hover:bg-white/40">FAQ</SiteLink>
                  <SiteLink to="/policies" className="block px-3 py-2 text-xs hover:bg-white/40">Policies</SiteLink>
                </div>
              </div>
            )}
          </div>

          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button
              onClick={() => setServicesOpen(v => !v)}
              className={`flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] transition ${location.pathname.startsWith('/services/') ? 'text-ink' : 'text-ink/60 hover:text-ink'}`}
              aria-expanded={servicesOpen}
              aria-label="Open Services menu"
            >
              <span>Services</span>
              <span className="text-[10px] text-ink/45">⌄</span>
            </button>
            {servicesOpen && (
              <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-5">
                <div className="border border-ink/10 bg-bone p-3 shadow-soft">
                  <SiteLink to="/services/bridal" className="block px-3 py-2 text-xs hover:bg-white/40">Bridal Makeup & Hair</SiteLink>
                  <SiteLink to="/services/clinical" className="block px-3 py-2 text-xs hover:bg-white/40">Clinical Aesthetics</SiteLink>
                  <div className="cursor-not-allowed px-3 py-2 text-xs text-ink/30" aria-disabled="true">Waxing & Threading</div>
                </div>
              </div>
            )}
          </div>

          <SiteLink to="/portfolio" className={navClass('/portfolio')}>Portfolio</SiteLink>
          <span className="cursor-not-allowed text-[11px] uppercase tracking-[0.18em] text-ink/25" aria-disabled="true">Courses</span>
          <SiteLink to="/inquire" className="btn-dark !px-5 !py-3">Inquire Now</SiteLink>
        </nav>

        <button onClick={() => setOpen(v => !v)} className="lg:hidden text-xs uppercase tracking-[0.2em]">{open ? 'Close' : 'Menu'}</button>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-bone px-5 py-6 lg:hidden">
          <div className="grid gap-4">
            <SiteLink onClick={closeMobile} to="/">Home</SiteLink>
            <SiteLink onClick={closeMobile} to="/about">About</SiteLink>
            <div className="ml-4 grid gap-3 border-l border-ink/10 pl-4 text-sm text-ink/60">
              <SiteLink onClick={closeMobile} to="/faq">FAQ</SiteLink>
              <SiteLink onClick={closeMobile} to="/policies">Policies</SiteLink>
            </div>
            <div className="text-sm uppercase tracking-[0.16em] text-ink/55">Services</div>
            <div className="ml-4 grid gap-3 border-l border-ink/10 pl-4 text-sm text-ink/60">
              <SiteLink onClick={closeMobile} to="/services/bridal">Bridal Makeup & Hair</SiteLink>
              <SiteLink onClick={closeMobile} to="/services/clinical">Clinical Aesthetics</SiteLink>
            </div>
            <SiteLink onClick={closeMobile} to="/portfolio">Portfolio</SiteLink>
            <span className="cursor-not-allowed text-ink/30" aria-disabled="true">Courses</span>
            <SiteLink onClick={closeMobile} to="/inquire" className="btn-dark mt-2 w-full">Inquire Now</SiteLink>
          </div>
        </div>
      )}
    </header>
  )
}

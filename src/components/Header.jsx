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
      <div className="mx-auto max-w-7xl px-5 py-4 lg:px-8">
        <div className="relative flex items-center justify-center lg:hidden">
          <SiteLink to="/" className="font-display text-xl tracking-[0.2em]">YASRAH BEAUTY</SiteLink>
          <button
            onClick={() => setOpen(v => !v)}
            className="absolute right-0 flex h-9 w-9 items-center justify-center"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span className="relative block h-3.5 w-5">
              <span className={`absolute left-0 top-1 block h-px w-5 bg-ink transition duration-300 ${open ? 'translate-y-[3px] rotate-45' : ''}`} />
              <span className={`absolute left-0 bottom-1 block h-px w-5 bg-ink transition duration-300 ${open ? '-translate-y-[3px] -rotate-45' : ''}`} />
            </span>
          </button>
        </div>

        <div className="hidden items-center justify-between lg:flex">
          <SiteLink to="/" className="font-display text-2xl tracking-[0.16em]">YASRAH BEAUTY</SiteLink>

          <nav className="flex items-center gap-7">
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
        </div>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-bone/98 px-6 py-8 backdrop-blur-xl lg:hidden">
          <div className="mx-auto grid max-w-sm gap-6 text-center">
            <SiteLink onClick={closeMobile} to="/" className="font-display text-2xl">Home</SiteLink>
            <SiteLink onClick={closeMobile} to="/about" className="font-display text-2xl">About</SiteLink>

            <div className="grid gap-3 text-sm text-ink/55">
              <SiteLink onClick={closeMobile} to="/faq">FAQ</SiteLink>
              <SiteLink onClick={closeMobile} to="/policies">Policies</SiteLink>
            </div>

            <div className="mt-1 border-t border-ink/10 pt-6">
              <div className="eyebrow text-ink/35">Services</div>
              <div className="mt-4 grid gap-3 text-sm">
                <SiteLink onClick={closeMobile} to="/services/bridal">Bridal Makeup & Hair</SiteLink>
                <SiteLink onClick={closeMobile} to="/services/clinical">Clinical Aesthetics</SiteLink>
                <span className="text-ink/30" aria-disabled="true">Waxing & Threading</span>
              </div>
            </div>

            <SiteLink onClick={closeMobile} to="/portfolio" className="font-display text-2xl">Portfolio</SiteLink>
            <span className="font-display text-2xl text-ink/25" aria-disabled="true">Courses</span>
            <SiteLink onClick={closeMobile} to="/inquire" className="btn-dark mt-2 w-full">Inquire Now</SiteLink>
          </div>
        </div>
      )}
    </header>
  )
}

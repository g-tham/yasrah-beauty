import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navClass = ({ isActive }) => `text-[11px] uppercase tracking-[0.18em] transition ${isActive ? 'text-ink' : 'text-ink/60 hover:text-ink'}`

export default function Header() {
  const [open, setOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-bone/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="font-display text-2xl tracking-[0.16em]">YASRAH BEAUTY</Link>

        <nav className="hidden items-center gap-7 lg:flex">
          <NavLink to="/" className={navClass}>Home</NavLink>

          <div className="relative" onMouseEnter={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)}>
            <div className="flex items-center gap-1.5">
              <NavLink to="/about" className={navClass}>About</NavLink>
              <button onClick={() => setAboutOpen(v => !v)} className="text-[10px] text-ink/45" aria-label="Open About menu">⌄</button>
            </div>
            {aboutOpen && (
              <div className="absolute left-1/2 top-full w-48 -translate-x-1/2 pt-5">
                <div className="border border-ink/10 bg-bone p-3 shadow-soft">
                  <NavLink to="/about" className="block px-3 py-2 text-xs hover:bg-white/40">About Yasrah</NavLink>
                  <NavLink to="/faq" className="block px-3 py-2 text-xs hover:bg-white/40">FAQ</NavLink>
                  <NavLink to="/policies" className="block px-3 py-2 text-xs hover:bg-white/40">Policies</NavLink>
                </div>
              </div>
            )}
          </div>

          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <div className="flex items-center gap-1.5">
              <NavLink to="/services" className={navClass}>Services</NavLink>
              <button onClick={() => setServicesOpen(v => !v)} className="text-[10px] text-ink/45" aria-label="Open Services menu">⌄</button>
            </div>
            {servicesOpen && (
              <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-5">
                <div className="border border-ink/10 bg-bone p-3 shadow-soft">
                  <NavLink to="/services" className="block px-3 py-2 text-xs hover:bg-white/40">All Services</NavLink>
                  <NavLink to="/services/bridal" className="block px-3 py-2 text-xs hover:bg-white/40">Bridal Makeup & Hair</NavLink>
                  <NavLink to="/services/clinical" className="block px-3 py-2 text-xs hover:bg-white/40">Clinical Aesthetics</NavLink>
                  <div className="px-3 py-2 text-xs text-ink/35">Waxing & Threading · Later</div>
                </div>
              </div>
            )}
          </div>

          <NavLink to="/portfolio" className={navClass}>Portfolio</NavLink>
          <NavLink to="/courses" className={navClass}>Courses</NavLink>
          <Link to="/inquire" className="btn-dark !px-5 !py-3">Inquire Now</Link>
        </nav>

        <button onClick={() => setOpen(v => !v)} className="lg:hidden text-xs uppercase tracking-[0.2em]">{open ? 'Close' : 'Menu'}</button>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-bone px-5 py-6 lg:hidden">
          <div className="grid gap-4">
            <Link onClick={() => setOpen(false)} to="/">Home</Link>
            <Link onClick={() => setOpen(false)} to="/about">About</Link>
            <div className="ml-4 grid gap-3 border-l border-ink/10 pl-4 text-sm text-ink/60">
              <Link onClick={() => setOpen(false)} to="/faq">FAQ</Link>
              <Link onClick={() => setOpen(false)} to="/policies">Policies</Link>
            </div>
            <Link onClick={() => setOpen(false)} to="/services">Services</Link>
            <div className="ml-4 grid gap-3 border-l border-ink/10 pl-4 text-sm text-ink/60">
              <Link onClick={() => setOpen(false)} to="/services/bridal">Bridal Makeup & Hair</Link>
              <Link onClick={() => setOpen(false)} to="/services/clinical">Clinical Aesthetics</Link>
            </div>
            <Link onClick={() => setOpen(false)} to="/portfolio">Portfolio</Link>
            <Link onClick={() => setOpen(false)} to="/courses">Courses</Link>
            <Link onClick={() => setOpen(false)} to="/inquire" className="btn-dark mt-2 w-full">Inquire Now</Link>
          </div>
        </div>
      )}
    </header>
  )
}

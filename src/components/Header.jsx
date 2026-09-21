import { useState } from 'react'

const BASE = import.meta.env.BASE_URL || '/yasrah-beauty/'
const href = (route = '') => route ? `${BASE}#${route}` : BASE

const navClass = 'text-[11px] uppercase tracking-[0.18em] text-ink/60 transition hover:text-ink'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-bone/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href={href()} className="font-display text-2xl tracking-[0.16em]">YASRAH BEAUTY</a>

        <nav className="hidden items-center gap-7 lg:flex">
          <a href={href('/')} className={navClass}>Home</a>

          <div className="relative" onMouseEnter={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)}>
            <div className="flex items-center gap-1.5">
              <a href={href('/about')} className={navClass}>About</a>
              <button onClick={() => setAboutOpen(v => !v)} className="text-[10px] text-ink/45" aria-label="Open About menu">⌄</button>
            </div>
            {aboutOpen && (
              <div className="absolute left-1/2 top-full w-48 -translate-x-1/2 pt-5">
                <div className="border border-ink/10 bg-bone p-3 shadow-soft">
                  <a href={href('/about')} className="block px-3 py-2 text-xs hover:bg-white/40">About Yasrah</a>
                  <a href={href('/faq')} className="block px-3 py-2 text-xs hover:bg-white/40">FAQ</a>
                  <a href={href('/policies')} className="block px-3 py-2 text-xs hover:bg-white/40">Policies</a>
                </div>
              </div>
            )}
          </div>

          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <div className="flex items-center gap-1.5">
              <a href={href('/services')} className={navClass}>Services</a>
              <button onClick={() => setServicesOpen(v => !v)} className="text-[10px] text-ink/45" aria-label="Open Services menu">⌄</button>
            </div>
            {servicesOpen && (
              <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-5">
                <div className="border border-ink/10 bg-bone p-3 shadow-soft">
                  <a href={href('/services')} className="block px-3 py-2 text-xs hover:bg-white/40">All Services</a>
                  <a href={href('/services/bridal')} className="block px-3 py-2 text-xs hover:bg-white/40">Bridal Makeup & Hair</a>
                  <a href={href('/services/clinical')} className="block px-3 py-2 text-xs hover:bg-white/40">Clinical Aesthetics</a>
                  <div className="px-3 py-2 text-xs text-ink/35">Waxing & Threading · Later</div>
                </div>
              </div>
            )}
          </div>

          <a href={href('/portfolio')} className={navClass}>Portfolio</a>
          <a href={href('/courses')} className={navClass}>Courses</a>
          <a href={href('/inquire')} className="btn-dark !px-5 !py-3">Inquire Now</a>
        </nav>

        <button onClick={() => setOpen(v => !v)} className="lg:hidden text-xs uppercase tracking-[0.2em]">{open ? 'Close' : 'Menu'}</button>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-bone px-5 py-6 lg:hidden">
          <div className="grid gap-4">
            <a onClick={() => setOpen(false)} href={href('/')}>Home</a>
            <a onClick={() => setOpen(false)} href={href('/about')}>About</a>
            <div className="ml-4 grid gap-3 border-l border-ink/10 pl-4 text-sm text-ink/60">
              <a onClick={() => setOpen(false)} href={href('/faq')}>FAQ</a>
              <a onClick={() => setOpen(false)} href={href('/policies')}>Policies</a>
            </div>
            <a onClick={() => setOpen(false)} href={href('/services')}>Services</a>
            <div className="ml-4 grid gap-3 border-l border-ink/10 pl-4 text-sm text-ink/60">
              <a onClick={() => setOpen(false)} href={href('/services/bridal')}>Bridal Makeup & Hair</a>
              <a onClick={() => setOpen(false)} href={href('/services/clinical')}>Clinical Aesthetics</a>
            </div>
            <a onClick={() => setOpen(false)} href={href('/portfolio')}>Portfolio</a>
            <a onClick={() => setOpen(false)} href={href('/courses')}>Courses</a>
            <a onClick={() => setOpen(false)} href={href('/inquire')} className="btn-dark mt-2 w-full">Inquire Now</a>
          </div>
        </div>
      )}
    </header>
  )
}

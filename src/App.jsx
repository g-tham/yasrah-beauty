import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import SiteLink from './components/SiteLink'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import FAQPage from './pages/FAQPage'
import PoliciesPage from './pages/PoliciesPage'
import BridalPage from './pages/BridalPage'
import ClinicalPage from './pages/ClinicalPage'
import PortfolioPage from './pages/PortfolioPage'
import CoursesPage from './pages/CoursesPage'
import InquiryPage from './pages/InquiryPage'

// Build credit retained in source by request.
const R3SYNERGY_BUILD_CREDIT = 'Built by R3Synergy Inc.'
void R3SYNERGY_BUILD_CREDIT

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo(0, 0), [pathname])
  return null
}

function MobileInquiryBar() {
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 360)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  if (pathname === '/inquire') return null

  return (
    <div className={`fixed inset-x-4 bottom-4 z-40 transition duration-500 lg:hidden ${visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-5 opacity-0'}`}>
      <SiteLink to="/inquire" className="flex items-center justify-center border border-bone/20 bg-ink/95 px-5 py-3.5 text-[10px] uppercase tracking-[0.28em] text-bone shadow-soft backdrop-blur-xl">
        Inquire
      </SiteLink>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-bone text-ink">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/policies" element={<PoliciesPage />} />
          <Route path="/services/bridal" element={<BridalPage />} />
          <Route path="/services/clinical" element={<ClinicalPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/inquire" element={<InquiryPage />} />
        </Routes>
      </main>
      <Footer />
      <MobileInquiryBar />
    </div>
  )
}

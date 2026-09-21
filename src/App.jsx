import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import FAQPage from './pages/FAQPage'
import PoliciesPage from './pages/PoliciesPage'
import ServicesPage from './pages/ServicesPage'
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
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/bridal" element={<BridalPage />} />
          <Route path="/services/clinical" element={<ClinicalPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/inquire" element={<InquiryPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

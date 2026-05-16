import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import CareersPage from './pages/CareersPage'
import InvestorPage from './pages/InvestorPage'
import ImpactPage from './pages/ImpactPage'
import HelpPage from './pages/HelpPage'
import { TermsPage, PrivacyPage, SafetyPage } from './pages/LegalPages'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/investors" element={<InvestorPage />} />
            <Route path="/impact" element={<ImpactPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/safety" element={<SafetyPage />} />
          </Routes>
        </main>
        <Footer />

        <style dangerouslySetInnerHTML={{ __html: `
          .app {
            overflow-x: hidden;
            padding-top: 80px; /* Space for fixed header */
          }
          /* Smooth scrolling */
          html {
            scroll-behavior: smooth;
          }
        `}} />
      </div>
    </Router>
  )
}

export default App

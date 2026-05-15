import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import TraditionalEmpowerment from './components/TraditionalEmpowerment'
import MachinerySection from './components/MachinerySection'
import InvestorSection from './components/InvestorSection'
import TrustImpact from './components/TrustImpact'
import DownloadCTA from './components/DownloadCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <HowItWorks />
        <Features />
        <TraditionalEmpowerment />
        <MachinerySection />
        <TrustImpact />
        <InvestorSection />
        <DownloadCTA />
      </main>
      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        .app {
          overflow-x: hidden;
        }
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}} />
    </div>
  )
}

export default App

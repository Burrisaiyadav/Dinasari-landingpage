import React from 'react'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import ProblemSolution from '../components/ProblemSolution'
import HowItWorks from '../components/HowItWorks'
import Features from '../components/Features'
import TraditionalEmpowerment from '../components/TraditionalEmpowerment'
import MachinerySection from '../components/MachinerySection'
import InvestorSection from '../components/InvestorSection'
import TrustImpact from '../components/TrustImpact'
import DownloadCTA from '../components/DownloadCTA'

function HomePage() {
  return (
    <>
      <SEO 
        title="Dinasari | High-Trust Rural Workforce & Machinery Connectivity" 
        description="Dinasari connects farmers, workers, and machinery in one seamless, high-trust digital ecosystem for rural India. No complexity. No middlemen. Just growth." 
      />
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <Features />
      <TraditionalEmpowerment />
      <MachinerySection />
      <TrustImpact />
      <InvestorSection />
      <DownloadCTA />
    </>
  )
}

export default HomePage

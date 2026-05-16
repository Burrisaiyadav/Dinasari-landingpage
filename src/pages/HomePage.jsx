import React from 'react'
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

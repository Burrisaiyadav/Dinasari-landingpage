import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import CareersPage from './pages/CareersPage'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/careers" element={<CareersPage />} />
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

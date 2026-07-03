"use client"

import { useState, useEffect } from "react"
import Navigation from "./Navigation"
import Hero from "./Hero"
import About from "./About"
import Experience from "./Experience"
import Skills from "./Skills"
import CodeTerminal from "./CodeTerminal"
import Projects from "./Projects"
import Services from "./Services"
import Contact from "./Contact"
import Footer from "./Footer"
import ScrollToTop from "./ScrollToTop"
import FloatingElements from "./FloatingElements"

const MainPortfolio = ({ mousePosition = { x: 0, y: 0 } }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-x-hidden transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Custom cursor */}
      <div
        className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          background: "radial-gradient(circle, #00ff88 0%, transparent 70%)",
          borderRadius: "50%",
          transition: "all 0.1s ease-out",
        }}
      />

      <FloatingElements />
      <Navigation />

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <CodeTerminal />
        <Services />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default MainPortfolio

"use client"

import { useEffect, useState } from "react"
import { HelmetProvider } from "react-helmet-async"
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import ScrollProgress from "./components/ScrollProgress"
import LoadingScreen from "./components/LoadingScreen"
import SEOHead from "./components/SEOHead"
import FloatingElements from "./components/FloatingElements"
import { ThemeProvider } from "./contexts/ThemeContext"
import "./App.css"

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2600)

    return () => clearTimeout(timer)
  }, [])

  // Reveal-on-scroll: elements carrying [data-reveal] fade/slide in once.
  useEffect(() => {
    if (isLoading) return

    const els = Array.from(document.querySelectorAll("[data-reveal]"))
    if (!("IntersectionObserver" in window) || els.length === 0) {
      els.forEach((el) => el.classList.add("is-visible"))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [isLoading])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <HelmetProvider>
      <ThemeProvider>
        <div className="min-h-screen bg-cream text-ink relative overflow-x-hidden selection:bg-clay/20">
          <SEOHead />

          <ScrollProgress />
          <FloatingElements />
          <Navigation />

          <main>
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Services />
            <Projects />
            <Contact />
          </main>

          <Footer />
          <ScrollToTop />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App

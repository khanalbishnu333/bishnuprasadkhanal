"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Work" },
    { href: "#contact", label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navItems.map((item) => item.href.slice(1))
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 120 && rect.bottom >= 120
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-cream/85 backdrop-blur-md border-b border-ink/10 shadow-[0_10px_30px_-24px_rgba(26,26,26,0.5)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
          <div className="flex justify-between items-center py-5">
            {/* Wordmark */}
            <button
              onClick={() => handleClick("#home")}
              aria-label="Bishnu Prasad Khanal — home"
              title="Bishnu Prasad Khanal"
              className="font-display text-2xl md:text-[1.7rem] font-semibold tracking-tight text-ink leading-none"
            >
              Bishnu Khanal<span className="text-gold">.</span>
            </button>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => {
                const active = activeSection === item.href.slice(1)
                return (
                  <button
                    key={item.href}
                    onClick={() => handleClick(item.href)}
                    className={`relative text-[0.82rem] uppercase tracking-[0.16em] font-medium transition-colors ${
                      active ? "text-ink" : "text-ink-soft hover:text-ink"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-300 ${
                        active ? "w-full" : "w-0"
                      }`}
                    />
                  </button>
                )
              })}
            </div>

            <div className="hidden md:block">
              <button
                onClick={() => handleClick("#contact")}
                className="btn-sage rounded-full px-6 py-2.5 text-sm active:scale-95 transition-transform"
              >
                Let's talk
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 -mr-2 rounded-lg text-ink hover:bg-ink/5 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="md:hidden pb-6 border-t border-ink/10">
              <div className="flex flex-col pt-4">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleClick(item.href)}
                    className={`text-left py-3 text-lg font-display transition-colors ${
                      activeSection === item.href.slice(1) ? "text-gold-deep" : "text-ink hover:text-gold-deep"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => handleClick("#contact")}
                  className="btn-sage rounded-full px-6 py-3 mt-4 text-sm active:scale-95 transition-transform"
                >
                  Let's talk
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Right-side dot rail (desktop) */}
      <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-4">
        {navItems.map((item) => {
          const active = activeSection === item.href.slice(1)
          return (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              aria-label={`Go to ${item.label}`}
              className="group relative flex items-center"
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  active ? "w-3 h-3 bg-gold" : "w-2 h-2 bg-ink/25 group-hover:bg-ink/50"
                }`}
              />
              <span className="absolute right-6 whitespace-nowrap text-[0.7rem] uppercase tracking-[0.16em] text-ink-soft opacity-0 group-hover:opacity-100 transition-opacity">
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
    </>
  )
}

export default Navigation

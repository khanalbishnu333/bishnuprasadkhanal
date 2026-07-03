"use client"

import { Heart, Github, Linkedin, Facebook, MessageCircle } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  const services = [
    "Laravel Development",
    "Full-Stack Development",
    "E-commerce Solutions",
    "CRM Systems",
    "API Development",
    "Maintenance & Support",
  ]

  const socials = [
    { icon: Github, url: "https://github.com/KhanalBishnu", label: "GitHub" },
    { icon: Linkedin, url: "https://linkedin.com/in/bishnu-prasad-khanal", label: "LinkedIn" },
    { icon: Facebook, url: "https://facebook.com/bishnuprd.khanal", label: "Facebook" },
    { icon: MessageCircle, url: "https://wa.me/9779868642250", label: "WhatsApp" },
  ]

  return (
    <footer className="bg-ink text-cream relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-2xl font-semibold mb-4">
              Bishnu Khanal<span className="text-gold">.</span>
            </h3>
            <p className="text-cream/70 leading-relaxed mb-6 max-w-md">
              Expert Laravel &amp; software developer from Nepal — passionate about building innovative web solutions
              and helping businesses grow through technology.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/70 hover:text-ink hover:bg-gold hover:border-gold transition-colors"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="eyebrow text-gold mb-4">Explore</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })}
                    className="text-cream/70 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="eyebrow text-gold mb-4">Services</h4>
            <ul className="space-y-2.5">
              {services.map((service, index) => (
                <li key={index} className="text-cream/70 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-cream/15 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-cream/60 text-sm">© {currentYear} Bishnu Prasad Khanal. All rights reserved.</div>
            <div className="flex items-center gap-2 text-cream/60 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-clay-light" />
              <span>in Nepal</span>
            </div>
          </div>

          <p className="text-center text-xs text-cream/35 mt-6 max-w-4xl mx-auto leading-relaxed">
            Bishnu, Bishnu Prasad, Bishnu Prasad Khanal, Laravel Developer Nepal, Software Developer Nepal, Nepal
            Developer, PHP Developer, React Developer, Full-Stack Developer, Web Developer Nepal
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

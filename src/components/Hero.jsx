"use client"

import { useState, useEffect } from "react"
import { ArrowDown, ArrowUpRight, Github, Linkedin, Download, MapPin } from "lucide-react"
import useTilt from "../hooks/useTilt"

const Hero = () => {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const tiltRef = useTilt({ max: 10, scale: 1.03, layered: true })

  const texts = [
    "Laravel Developer",
    "Software Developer",
    "Full-Stack Developer",
    "PHP Expert",
    "React Developer",
    "Problem Solver",
  ]

  useEffect(() => {
    const typeSpeed = isDeleting ? 45 : 110
    const text = texts[currentIndex]

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < text.length) {
        setCurrentText(text.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else if (isDeleting && charIndex > 0) {
        setCurrentText(text.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      } else if (!isDeleting && charIndex === text.length) {
        setTimeout(() => setIsDeleting(true), 1800)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setCurrentIndex((currentIndex + 1) % texts.length)
      }
    }, typeSpeed)

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, currentIndex, texts])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  const stats = [
    { icon: MapPin, label: "Lalitpur, Nepal" },
    { label: "3+ Years Experience" },
    { label: "15+ Projects" },
  ]

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-10 items-center">
          {/* Left — content (staggered entrance) */}
          <div className="text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 rounded-full border border-ink/12 bg-cream-50 px-4 py-1.5 mb-7"
              data-reveal
              style={{ "--reveal-delay": "0ms" }}
            >
              <span className="w-2 h-2 rounded-full bg-sage animate-pulse-slow" />
              <span className="eyebrow text-ink-soft">Available for freelance work</span>
            </div>

            <div data-reveal style={{ "--reveal-delay": "80ms" }}>
              <h1 className="font-display font-semibold text-ink leading-[0.98] tracking-tight text-[2.9rem] sm:text-6xl lg:text-[4.6rem]">
                Hi, I&apos;m <span className="text-gold-deep">Bishnu</span>
                <span className="text-gold">.</span>
              </h1>
              <div className="mt-2 font-display font-medium text-clay leading-[1.1] tracking-tight text-[1.9rem] sm:text-4xl lg:text-[3rem] min-h-[1.25em]">
                <span className="italic font-normal text-ink-soft">a </span>
                {currentText}
                <span className="blink-caret bg-clay align-baseline">&nbsp;</span>
              </div>
            </div>

            <p
              className="mt-7 text-lg md:text-xl text-ink-soft leading-relaxed max-w-xl mx-auto lg:mx-0"
              data-reveal
              style={{ "--reveal-delay": "160ms" }}
            >
              Expert <strong className="font-semibold text-ink">Laravel &amp; full-stack developer</strong> from Nepal,
              crafting scalable web applications, e-commerce platforms and clean, modern software.
            </p>

            {/* meta row */}
            <div
              className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-2 text-sm text-ink-soft"
              data-reveal
              style={{ "--reveal-delay": "240ms" }}
            >
              {stats.map((s, i) => (
                <span key={i} className="inline-flex items-center gap-2">
                  {i > 0 && <span className="w-1 h-1 rounded-full bg-gold" />}
                  {s.icon && <s.icon className="w-4 h-4 text-sage" />}
                  {s.label}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div
              className="mt-9 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              data-reveal
              style={{ "--reveal-delay": "320ms" }}
            >
              <button
                onClick={() => scrollTo("contact")}
                className="btn-sage group rounded-full px-7 py-3.5 inline-flex items-center justify-center gap-2 active:scale-95 transition-transform"
              >
                Hire me now
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <button
                onClick={() => scrollTo("projects")}
                className="btn-outline-ink rounded-full px-7 py-3.5 active:scale-95 transition-transform"
              >
                View my work
              </button>
            </div>

            {/* socials */}
            <div
              className="mt-9 flex items-center justify-center lg:justify-start gap-5"
              data-reveal
              style={{ "--reveal-delay": "400ms" }}
            >
              <a
                href="https://github.com/KhanalBishnu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="text-ink-soft hover:text-ink transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/bishnu-prasad-khanal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="text-ink-soft hover:text-sage transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="/resume-bishnu-prasad-khanal.pdf"
                download
                aria-label="Download resume"
                className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-gold-deep transition-colors link-underline"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </div>
          </div>

          {/* Right — bold editorial portrait scene. A big terracotta shape
              slowly morphs and turns behind the photo, a gold accent drifts,
              a sage ring sits, and a dotted arc crawls — clearly alive at rest.
              The portrait keeps a gentle idle float + hover tilt on top.
              Original composition, not a theme copy. */}
          <div className="relative flex justify-center lg:justify-end scene-3d" data-reveal="right">
            <div className="relative w-[17rem] sm:w-[22rem] lg:w-[25rem]">
              {/* big morphing terracotta shape — the bold color backdrop */}
              <div
                className="hero-blob absolute -top-8 -right-4 sm:-right-8 w-[17rem] h-[17rem] sm:w-[22rem] sm:h-[22rem] lg:w-[26rem] lg:h-[26rem] bg-clay/90 shadow-soft"
                aria-hidden="true"
              />
              {/* drifting gold circle accent */}
              <div
                className="hero-drift absolute -bottom-7 -left-7 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gold/85"
                aria-hidden="true"
              />
              {/* thin sage ring accent */}
              <div
                className="absolute -top-9 -left-5 w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-sage/60"
                aria-hidden="true"
              />
              {/* crawling dotted arc — editorial line detail */}
              <svg
                className="absolute -top-5 right-4 w-36 h-14 text-sage/70"
                viewBox="0 0 200 80"
                fill="none"
                aria-hidden="true"
              >
                <path
                  className="hero-dash"
                  d="M2,70 C60,10 140,10 198,70"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeDasharray="1 9"
                  strokeLinecap="round"
                />
              </svg>

              {/* portrait — gentle idle float, hover tilt composes on top */}
              <div className="hero-idle relative w-full">
                <div ref={tiltRef} className="hero-tilt relative w-full">
                  <div
                    className="d-portrait relative overflow-hidden shadow-card bg-cream-50 ring-1 ring-ink/5 sheen"
                    style={{ borderRadius: "999px 999px 2.5rem 2.5rem" }}
                  >
                    <img
                      src="./hero.jpg"
                      alt="Bishnu Prasad Khanal — Laravel &amp; Full-Stack Developer from Nepal, standing in a tailored suit"
                      className="w-full aspect-[3/4] object-cover object-top"
                      width="768"
                      height="1024"
                    />
                    <span className="hero-glare" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* scroll cue */}
        <div className="mt-16 flex justify-center lg:justify-start">
          <button
            onClick={() => scrollTo("about")}
            className="inline-flex items-center gap-2 text-ink-soft hover:text-ink transition-colors group"
            aria-label="Scroll to about section"
          >
            <span className="eyebrow">Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero

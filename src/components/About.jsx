"use client"

import { Languages, MapPin, Phone, Mail, GraduationCap, Award } from "lucide-react"
import useTilt from "../hooks/useTilt"
import useScrollParallax from "../hooks/useScrollParallax"

const About = () => {
  const tiltRef = useTilt({ max: 7, scale: 1.02 })
  const circle = useScrollParallax(30)
  const blob = useScrollParallax(-24)

  const personalInfo = [
    { icon: MapPin, label: "Location", value: "Gwarko, Lalitpur, Nepal" },
    { icon: Phone, label: "Phone", value: "+977 9868642250" },
    { icon: Mail, label: "Email", value: "khanalbishnu333@gmail.com" },
    { icon: GraduationCap, label: "Education", value: "Bachelor's in Computer Applications (BCA)" },
    { icon: Award, label: "Experience", value: "3+ Years in Software Development" },
    { icon: Languages, label: "Languages", value: "English, Nepali, Hindi" },
  ]

  const highlights = [
    { number: "3+", label: "Years Experience", description: "Professional software development" },
    { number: "15+", label: "Projects Delivered", description: "Web apps, platforms & systems" },
    { number: "24/7", label: "Available", description: "Ready for new challenges" },
  ]

  return (
    <section id="about" className="bg-paper py-24 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl mb-16" data-reveal>
          <p className="eyebrow eyebrow-rule text-gold-deep mb-4">About me</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink leading-tight text-balance">
            Developer, problem-solver &amp; lifelong learner from Nepal.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-start mb-20">
          {/* Image — seated portrait with 3D tilt + parallax shapes */}
          <div className="relative scene-3d" data-reveal="left">
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              <div
                ref={circle}
                className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full bg-gold/25 animate-float-slow"
                aria-hidden="true"
              />
              <div
                ref={blob}
                className="absolute -top-5 -left-5 w-24 h-24 bg-clay/20 rotate-12 animate-float"
                style={{ borderRadius: "48% 52% 60% 40% / 45% 45% 55% 55%" }}
                aria-hidden="true"
              />
              <div
                ref={tiltRef}
                className="relative overflow-hidden rounded-4xl border border-ink/10 shadow-card bg-cream-100 sheen"
              >
                <img
                  src="./about.jpg"
                  alt="Bishnu Prasad Khanal, Laravel developer from Nepal, seated portrait"
                  className="w-full aspect-[4/5] object-cover object-top"
                  width="560"
                  height="700"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-5 text-lg leading-relaxed text-ink-soft" data-reveal style={{ "--reveal-delay": "80ms" }}>
              <p>
                Hello! I&apos;m <strong className="font-semibold text-ink">Bishnu Prasad Khanal</strong>, a passionate
                Laravel and software developer based in beautiful Nepal.
              </p>
              <p>
                With over <strong className="font-semibold text-ink">3 years of experience</strong> in web
                development, I specialise in building robust, scalable and genuinely user-friendly applications with{" "}
                <span className="text-gold-deep font-medium">Laravel</span>,{" "}
                <span className="text-sage-deep font-medium">React</span> and{" "}
                <span className="text-clay font-medium">PHP</span> — across logistics, ride-sharing, e-commerce,
                gaming and POS automation.
              </p>
              <p>
                I&apos;m currently a full-stack developer at{" "}
                <strong className="font-semibold text-ink">App Technologies Pvt. Ltd</strong>, and I&apos;m always
                excited to take on new challenges and collaborate on projects that make a real impact.
              </p>
            </div>

            {/* Info grid — staggered */}
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 pt-4 border-t border-ink/10">
              {personalInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                  data-reveal
                  style={{ "--reveal-delay": `${160 + index * 70}ms` }}
                >
                  <info.icon className="w-5 h-5 text-gold-deep mt-0.5 flex-shrink-0" />
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-ink-muted">{info.label}</dt>
                    <dd className="text-ink font-medium">{info.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Highlights — staggered */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="card-paper rounded-3xl p-8"
              data-reveal="zoom"
              style={{ "--reveal-delay": `${index * 90}ms` }}
            >
              <div className="font-display text-4xl font-semibold text-gold-deep mb-2">{highlight.number}</div>
              <div className="text-ink font-semibold mb-1">{highlight.label}</div>
              <div className="text-sm text-ink-soft">{highlight.description}</div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center gap-5" data-reveal>
          <p className="text-lg text-ink-soft">Ready to bring your ideas to life? Let&apos;s work together.</p>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-sage rounded-full px-7 py-3 active:scale-95 transition-transform whitespace-nowrap"
          >
            Get in touch
          </button>
        </div>
      </div>
    </section>
  )
}

export default About

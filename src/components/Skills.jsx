"use client"

import { useState, useEffect, useRef } from "react"
import { Server, Globe, Database, Wrench } from "lucide-react"

const Skills = () => {
  const [mounted, setMounted] = useState(false)
  const sectionRef = useRef(null)

  // Fill the skill bars only once the section scrolls into view, so the
  // animation actually plays for the user instead of finishing off-screen.
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    if (!("IntersectionObserver" in window)) {
      setMounted(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setMounted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const accents = {
    gold: { bar: "bg-gold", text: "text-gold-deep", tint: "bg-gold/12" },
    sage: { bar: "bg-sage", text: "text-sage-deep", tint: "bg-sage/12" },
    clay: { bar: "bg-clay", text: "text-clay", tint: "bg-clay/12" },
    ink: { bar: "bg-ink", text: "text-ink", tint: "bg-ink/8" },
  }

  const skillCategories = [
    {
      id: "backend",
      title: "Backend Development",
      icon: Server,
      accent: "gold",
      skills: [
        { name: "Laravel", level: 95, description: "FilamentPHP, Livewire, custom packages" },
        { name: "PHP", level: 90, description: "Modern PHP, OOP & design patterns" },
        { name: "RESTful APIs", level: 88, description: "Secure, high-performance API design" },
        { name: "MySQL", level: 88, description: "Advanced queries, indexing & schema design" },
      ],
    },
    {
      id: "frontend",
      title: "Frontend Development",
      icon: Globe,
      accent: "sage",
      skills: [
        { name: "React.js", level: 85, description: "Hooks, context & state management" },
        { name: "JavaScript / jQuery", level: 85, description: "ES6+, AJAX & DOM interactivity" },
        { name: "Tailwind CSS", level: 88, description: "Utility-first, rapid UI development" },
        { name: "Bootstrap", level: 85, description: "Responsive, mobile-first layouts" },
      ],
    },
    {
      id: "tools",
      title: "Tools & Real-time",
      icon: Wrench,
      accent: "clay",
      skills: [
        { name: "WebSocket", level: 80, description: "Real-time notifications & chat" },
        { name: "Git", level: 88, description: "Branching strategies & collaboration" },
        { name: "Postman", level: 85, description: "API testing & documentation" },
        { name: "Firebase", level: 75, description: "Firestore & cloud functions" },
      ],
    },
    {
      id: "devops",
      title: "Deployment & DevOps",
      icon: Database,
      accent: "ink",
      skills: [
        { name: "cPanel", level: 85, description: "Deployments & server configuration" },
        { name: "CI/CD", level: 75, description: "Automated build & release pipelines" },
        { name: "Linux", level: 75, description: "Server administration & CLI" },
        { name: "Cron & Queue Workers", level: 80, description: "Scheduled jobs & background queues" },
      ],
    },
  ]

  const quickStats = [
    { number: "12+", label: "Core Technologies" },
    { number: "3+", label: "Years Experience" },
    { number: "15+", label: "Projects Delivered" },
  ]

  return (
    <section id="skills" ref={sectionRef} className="bg-paper py-24 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl mb-16" data-reveal>
          <p className="eyebrow eyebrow-rule text-gold-deep mb-4">Toolbox</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink leading-tight text-balance">
            Technical skills &amp; expertise.
          </h2>
          <p className="mt-5 text-lg text-ink-soft">
            The technologies I reach for every day to build fast, reliable and maintainable software.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const a = accents[category.accent]
            return (
              <div
                key={category.id}
                className="card-paper rounded-3xl p-8"
                data-reveal="zoom"
                style={{ "--reveal-delay": `${(index % 2) * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-7">
                  <span className={`inline-flex p-3 rounded-2xl ${a.tint}`}>
                    <category.icon className={`w-6 h-6 ${a.text}`} />
                  </span>
                  <h3 className="font-display text-xl font-semibold text-ink">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-baseline justify-between mb-1.5">
                        <span className="font-medium text-ink">{skill.name}</span>
                        <span className={`text-sm font-semibold ${a.text}`}>{skill.level}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-ink/8 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${a.bar} transition-[width] duration-1000 ease-out`}
                          style={{ width: mounted ? `${skill.level}%` : "0%" }}
                        />
                      </div>
                      <p className="text-sm text-ink-muted mt-1.5">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-3 gap-6 mt-10" data-reveal>
          {quickStats.map((stat, i) => (
            <div key={i} className="text-center rounded-3xl border border-ink/10 bg-cream-50 py-8 px-4">
              <div className="font-display text-3xl md:text-4xl font-semibold text-gold-deep mb-1">{stat.number}</div>
              <div className="text-sm text-ink-soft">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

import { MapPin, Download, Briefcase } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "App Technologies Pvt. Ltd",
      location: "Lagankhel, Lalitpur",
      period: "Feb 2025 - Present",
      type: "Full-time",
      description: [
        "Refactored backend modules on Sajilo Ride Share for maintainability, scalability and processing efficiency",
        "Engineered a flexible promotion & discount rule engine supporting complex ride conditions",
        "Built a full e-commerce platform with product filtering, order management and multi-gateway payments (Khalti, eSewa, Stripe, PayPal)",
        "Created a real-time gaming system with scheduling, leaderboards, wallet and analytics dashboards",
        "Delivered a Salon Automation & POS solution and reusable admin dashboards with FilamentPHP, Livewire and Tailwind CSS",
      ],
      technologies: ["Laravel", "PHP", "MySQL", "React", "FilamentPHP", "Livewire", "WebSocket"],
    },
    {
      title: "Laravel / PHP Developer",
      company: "Techart Trekkies Pvt. Ltd",
      location: "Lazimpat, Kathmandu",
      period: "May 2023 - Jan 2025",
      type: "Full-time",
      description: [
        "Developed secure, optimized and scalable web applications using Laravel and PHP",
        "Designed and optimized databases and built seamless REST API integrations",
        "Enhanced frontend functionality and user experience with React.js",
        "Collaborated with cross-functional teams to deliver high-quality features on time",
      ],
      technologies: ["Laravel", "PHP", "MySQL", "React", "REST APIs"],
    },
    {
      title: "Laravel Developer Intern",
      company: "Techart Trekkies Pvt. Ltd",
      location: "Lazimpat, Kathmandu",
      period: "Feb 2023 - May 2023",
      type: "Internship",
      description: [
        "Gained hands-on experience with Laravel MVC — routing, controllers and views",
        "Improved UI responsiveness and interactivity using JavaScript/jQuery, CSS and Bootstrap",
        "Contributed to collaborative projects, building a solid foundation in Laravel best practices",
      ],
      technologies: ["Laravel", "PHP", "JavaScript", "jQuery", "Bootstrap"],
    },
  ]

  return (
    <section id="experience" className="bg-cream py-24 lg:py-28 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl mb-16" data-reveal>
          <p className="eyebrow eyebrow-rule text-gold-deep mb-4">Experience</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink leading-tight text-balance">
            A journey through Nepal&apos;s growing tech industry.
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative pl-8 sm:pl-10">
          {/* line */}
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-ink/15" aria-hidden="true" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative"
                data-reveal="left"
                style={{ "--reveal-delay": `${index * 120}ms` }}
              >
                {/* node */}
                <span className="absolute -left-8 sm:-left-10 top-2 w-4 h-4 rounded-full bg-gold border-4 border-cream" />

                <div className="card-paper rounded-3xl p-7 sm:p-9">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-ink">{exp.title}</h3>
                      <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-ink-soft">
                        <span className="font-medium text-gold-deep inline-flex items-center gap-1.5">
                          <Briefcase className="w-4 h-4" />
                          {exp.company}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-sm">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <div className="md:text-right">
                      <span className="inline-block rounded-full border border-ink/12 bg-cream-50 px-4 py-1.5 text-sm font-medium text-ink">
                        {exp.period}
                      </span>
                      <div className="text-sm text-ink-muted mt-1">{exp.type}</div>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-6">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-ink-soft">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-gold/10 border border-gold/25 px-3 py-1 text-sm text-gold-deep"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col sm:flex-row items-center gap-5" data-reveal>
          <p className="text-lg text-ink-soft">Want the full story of my professional journey?</p>
          <a
            href="/resume-bishnu-prasad-khanal.pdf"
            download
            className="btn-outline-ink rounded-full px-7 py-3 inline-flex items-center gap-2 active:scale-95 transition-transform whitespace-nowrap"
          >
            <Download className="w-4 h-4" />
            Download resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Experience

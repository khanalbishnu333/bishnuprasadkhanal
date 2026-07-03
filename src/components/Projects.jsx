"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import TiltCard from "./TiltCard"

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Sajilo Ride Share",
      description:
        "Ride-sharing platform where I refactored backend modules for scalability and built a flexible promotion & discount rule engine supporting complex ride conditions, plus optimized trip lifecycle and delivery workflows.",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Laravel", "PHP", "MySQL", "REST APIs"],
      category: "platform",
      featured: true,
    },
    {
      id: 2,
      title: "Impexo — Logistics Management",
      description:
        "End-to-end logistics platform integrating a Laravel backend with a React frontend — customer KYC, rate management, role & permission control, and real-time notifications and discussion chat over WebSocket.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Laravel", "React", "MySQL", "WebSocket"],
      category: "platform",
      featured: true,
    },
    {
      id: 3,
      title: "E-commerce Platform",
      description:
        "Full e-commerce platform with product filtering, order management and multi-gateway payments — integrating Khalti, eSewa, Stripe and PayPal for secure online transactions.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Laravel", "React", "MySQL", "Khalti", "eSewa"],
      category: "ecommerce",
      featured: true,
    },
    {
      id: 4,
      title: "Salon Automation & POS",
      description:
        "Complete salon management and POS platform covering invoice billing, appointment scheduling, service booking, staff assignment, attendance tracking and PayPal/Stripe payments.",
      image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Laravel", "MySQL", "Stripe", "PayPal"],
      category: "automation",
      featured: false,
    },
    {
      id: 5,
      title: "Game Management System",
      description:
        "Real-time gaming platform with match scheduling, team/player management, leaderboards, an in-game wallet and performance analytics dashboards, with real-time updates for user engagement.",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Laravel", "React", "MySQL", "WebSocket"],
      category: "automation",
      featured: true,
    },
    {
      id: 6,
      title: "Cafe Management System",
      description:
        "Real-time cafe automation using Firebase/Cloud Firestore and Cloud Functions for event-driven updates — waiter management, vendor tracking, kitchen workflow, product catalog and order processing.",
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Laravel", "Firebase", "Firestore", "Cloud Functions"],
      category: "automation",
      featured: false,
    },
    {
      id: 7,
      title: "Futsal Management System",
      description:
        "Role-based sports platform managing vendors, teams and players with league scheduling, match tracking and dashboard-based statistics management.",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Laravel", "MySQL", "REST APIs"],
      category: "automation",
      featured: false,
    },
    {
      id: 8,
      title: "TechCRM — CRM & Project Management",
      description:
        "Integrated CRM and project management software — task management with time-log exports, backlog management, and both role-based and user-based permission control, with dynamic AJAX-driven UI.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Laravel", "JavaScript", "AJAX", "MySQL"],
      category: "business",
      featured: true,
    },
    {
      id: 9,
      title: "HRM — Human Resource Management",
      description:
        "HR platform with secure APIs via Laravel Passport, dynamic evaluation forms with save-draft and deadline extensions, complex evaluation/question formats and exported reports for HR workflows.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Laravel", "Passport", "React", "MySQL"],
      category: "business",
      featured: false,
    },
    {
      id: 10,
      title: "Catalog Websites — Qbd, Joysoft",
      description:
        "Backend for catalog sites (Qbd Pharmaceutical, Joysoft Nepal) managing events and products, generating product QR codes, robust file handling and front/back-end validation for data integrity.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Laravel", "MySQL", "QR / Barcode"],
      category: "business",
      featured: false,
    },
  ]

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "platform", label: "Platforms" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "automation", label: "Automation & POS" },
    { id: "business", label: "Business Systems" },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="projects" className="bg-paper py-24 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl mb-12" data-reveal>
          <p className="eyebrow eyebrow-rule text-gold-deep mb-4">Selected work</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink leading-tight text-balance">
            Featured projects &amp; case studies.
          </h2>
          <p className="mt-5 text-lg text-ink-soft">
            A showcase of my work as a Laravel &amp; software developer from Nepal — each one demonstrating real-world,
            modern web development.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2.5 mb-12" data-reveal>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all active:scale-95 border ${
                activeFilter === filter.id
                  ? "bg-ink text-cream border-ink"
                  : "bg-cream-50 text-ink-soft border-ink/12 hover:border-ink/30 hover:text-ink"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <div
              key={project.id}
              className="h-full"
              data-reveal="zoom"
              style={{ "--reveal-delay": `${(i % 3) * 90}ms` }}
            >
              <TiltCard as="article" className="group card-paper rounded-3xl overflow-hidden flex flex-col h-full">
                {/* Image */}
                <div className="relative overflow-hidden sheen">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} — project by Bishnu Prasad Khanal`}
                    className="w-full h-48 object-cover transition-transform duration-500 md:group-hover:scale-105"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 bg-ink/0 md:group-hover:bg-ink/10 transition-colors duration-300"
                    aria-hidden="true"
                  />
                  {project.featured && (
                    <span className="absolute top-4 left-4 bg-gold text-ink px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                      Featured
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-xl font-semibold text-ink mb-2.5">{project.title}</h3>
                  <p className="text-ink-soft text-[0.95rem] mb-4 leading-relaxed flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-sage/10 border border-sage/25 px-2.5 py-0.5 text-xs text-sage-deep"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col sm:flex-row items-center gap-5" data-reveal>
          <p className="text-lg text-ink-soft">Interested in working together on your next project?</p>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-sage group rounded-full px-7 py-3 inline-flex items-center gap-2 active:scale-95 transition-transform whitespace-nowrap"
          >
            Start your project
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects

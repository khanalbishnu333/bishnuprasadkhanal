"use client"

import { Code, Smartphone, Database, Zap, Globe, Shield } from "lucide-react"
import TiltCard from "./TiltCard"

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Laravel Development",
      description:
        "Custom Laravel web applications, APIs and enterprise solutions built with best practices and modern architecture.",
      features: ["Custom Web Applications", "RESTful API Development", "Laravel Packages", "Performance Optimization"],
    },
    {
      icon: Globe,
      title: "Full-Stack Development",
      description:
        "Complete web solutions from frontend to backend, ensuring seamless user experiences and robust functionality.",
      features: ["React Frontend", "Laravel Backend", "Database Design", "Third-party Integrations"],
    },
    {
      icon: Smartphone,
      title: "E-commerce Solutions",
      description:
        "Scalable e-commerce platforms with payment gateways, inventory management and modern shopping experiences.",
      features: ["Online Stores", "Payment Integration", "Inventory Management", "Order Processing"],
    },
    {
      icon: Database,
      title: "CRM & Business Systems",
      description:
        "Custom CRM systems and business automation tools to streamline operations and improve productivity.",
      features: ["Customer Management", "Sales Tracking", "Automation Tools", "Reporting & Analytics"],
    },
    {
      icon: Zap,
      title: "API & Real-time Development",
      description:
        "Robust, secure REST APIs and real-time features for mobile apps, third-party integrations and live updates.",
      features: ["RESTful APIs", "WebSocket & Real-time", "API Documentation", "Security & Auth"],
    },
    {
      icon: Shield,
      title: "Maintenance & Support",
      description:
        "Ongoing maintenance, security updates, performance optimization and technical support for your applications.",
      features: ["Security Updates", "Performance Monitoring", "Bug Fixes", "24/7 Support"],
    },
  ]

  // rotating warm accents (bg tint / text / dot)
  const accents = [
    { tint: "bg-gold/12", text: "text-gold-deep", dot: "bg-gold" },
    { tint: "bg-sage/12", text: "text-sage-deep", dot: "bg-sage" },
    { tint: "bg-clay/12", text: "text-clay", dot: "bg-clay" },
  ]

  return (
    <section id="services" className="bg-cream py-24 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl mb-16" data-reveal>
          <p className="eyebrow eyebrow-rule text-gold-deep mb-4">What I do</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink leading-tight text-balance">
            Services crafted to help your business grow.
          </h2>
          <p className="mt-5 text-lg text-ink-soft">
            As an expert Laravel &amp; software developer from Nepal, I offer comprehensive web development services
            end-to-end.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const a = accents[index % accents.length]
            return (
              <div
                key={index}
                className="h-full"
                data-reveal="zoom"
                style={{ "--reveal-delay": `${(index % 3) * 90}ms` }}
              >
                <TiltCard className="card-paper rounded-3xl p-8 h-full">
                  <div className={`inline-flex p-3.5 rounded-2xl ${a.tint} mb-6`}>
                    <service.icon className={`w-7 h-7 ${a.text}`} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ink mb-3">{service.title}</h3>
                  <p className="text-ink-soft mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2.5">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-ink-soft text-sm">
                        <span className={`w-1.5 h-1.5 rounded-full ${a.dot}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-14" data-reveal>
          <div className="relative overflow-hidden rounded-4xl bg-ink text-cream px-8 py-12 md:px-14 md:py-14">
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-gold/20 blur-2xl" aria-hidden="true" />
            <div className="absolute -bottom-12 -left-8 w-40 h-40 rounded-full bg-sage/20 blur-2xl" aria-hidden="true" />
            <div className="relative max-w-2xl">
              <h3 className="font-display text-3xl md:text-4xl font-semibold mb-4">Ready to start your project?</h3>
              <p className="text-cream/75 mb-8 leading-relaxed">
                Let&apos;s discuss your requirements and build something great together — with cutting-edge technology
                and expert development skills.
              </p>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-sage rounded-full px-7 py-3.5 active:scale-95 transition-transform"
              >
                Get a free consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

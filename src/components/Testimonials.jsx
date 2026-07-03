"use client"

import { useState } from "react"
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react"

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Sharma",
      position: "CEO, TechStart Nepal",
      company: "TechStart Nepal",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Bishnu is an exceptional Laravel developer. He delivered our e-commerce platform ahead of schedule with outstanding quality. His expertise in PHP and Laravel is remarkable, and he's definitely one of the best developers in Nepal.",
    },
    {
      id: 2,
      name: "Priya Patel",
      position: "Founder, Digital Solutions",
      company: "Digital Solutions Pvt. Ltd",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Working with Bishnu was a game-changer for our business. His full-stack development skills and attention to detail are impressive. The CRM system he built has significantly improved our operations.",
    },
    {
      id: 3,
      name: "Michael Johnson",
      position: "Project Manager, Global Tech",
      company: "Global Tech Solutions",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Bishnu Prasad Khanal is a talented software developer with deep knowledge of Laravel and modern web technologies. He consistently delivers high-quality code and excellent communication throughout the project.",
    },
    {
      id: 4,
      name: "Sarah Chen",
      position: "CTO, InnovateNow",
      company: "InnovateNow Inc",
      image: "https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "As a Laravel developer from Nepal, Bishnu brings both technical excellence and cultural understanding to international projects. His work on our salon automation system exceeded all expectations.",
    },
    {
      id: 5,
      name: "David Kumar",
      position: "Business Owner",
      company: "Kumar Enterprises",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Bishnu's expertise in Laravel development and e-commerce solutions helped us launch our online store successfully. His professionalism and technical skills make him a top choice for any web development project.",
    },
  ]

  const nextTestimonial = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const prevTestimonial = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  const t = testimonials[currentIndex]

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "10+", label: "Happy Clients" },
    { number: "2.5+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
  ]

  return (
    <section id="testimonials" className="bg-cream py-24 lg:py-28 relative">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl mb-14" data-reveal>
          <p className="eyebrow text-gold-deep mb-4">Kind words</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink leading-tight text-balance">
            What clients say about working with me.
          </h2>
        </div>

        {/* Quote card */}
        <div className="relative card-paper rounded-4xl p-8 md:p-14" data-reveal>
          <Quote className="w-14 h-14 text-gold/25 mb-6" />

          <div className="flex gap-1 mb-6">
            {[...Array(t.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-gold fill-gold" />
            ))}
          </div>

          <blockquote className="font-display text-xl md:text-[1.7rem] leading-relaxed text-ink text-balance mb-9">
            &ldquo;{t.text}&rdquo;
          </blockquote>

          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-4">
              <img
                src={t.image || "/placeholder.svg"}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-gold/40"
                loading="lazy"
              />
              <div>
                <h4 className="font-semibold text-ink">{t.name}</h4>
                <p className="text-sm text-gold-deep">{t.position}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full border border-ink/15 text-ink hover:bg-ink hover:text-cream transition-colors active:scale-95"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full border border-ink/15 text-ink hover:bg-ink hover:text-cream transition-colors active:scale-95"
                aria-label="Next testimonial"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? "w-7 bg-gold" : "w-2 bg-ink/20 hover:bg-ink/40"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16" data-reveal>
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-3xl md:text-4xl font-semibold text-gold-deep mb-1">{stat.number}</div>
              <div className="text-sm text-ink-soft">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

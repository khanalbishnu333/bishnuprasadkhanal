"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Facebook, MessageCircle } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const contactInfo = [
    { icon: Mail, title: "Email", value: "khanalbishnu333@gmail.com", link: "mailto:khanalbishnu333@gmail.com" },
    { icon: Phone, title: "Phone", value: "+977 9868642250", link: "tel:+9779868642250" },
    {
      icon: MapPin,
      title: "Location",
      value: "Gwarko, Lalitpur, Nepal",
      link: "https://maps.google.com/?q=Gwarko,Lalitpur,Nepal",
    },
  ]

  const socialLinks = [
    { icon: Github, name: "GitHub", url: "https://github.com/KhanalBishnu" },
    { icon: Linkedin, name: "LinkedIn", url: "https://linkedin.com/in/bishnu-prasad-khanal" },
    { icon: Facebook, name: "Facebook", url: "https://facebook.com/bishnuprd.khanal" },
    { icon: MessageCircle, name: "WhatsApp", url: "https://wa.me/9779868642250" },
  ]

  const inputClass =
    "w-full px-4 py-3 bg-cream-50 border border-ink/15 rounded-xl text-ink placeholder-ink-muted focus:outline-none focus:border-sage focus:ring-2 focus:ring-sage/25 transition-colors"

  return (
    <section id="contact" className="bg-cream py-24 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl mb-16" data-reveal>
          <p className="eyebrow eyebrow-rule text-gold-deep mb-4">Get in touch</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink leading-tight text-balance">
            Let&apos;s build something great together.
          </h2>
          <p className="mt-5 text-lg text-ink-soft">
            Ready to start your next project? Reach out to your trusted Laravel &amp; software developer from Nepal.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="card-paper rounded-4xl p-8 md:p-10" data-reveal>
            <h3 className="font-display text-2xl font-semibold text-ink mb-6">Send me a message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink-soft mb-2">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink-soft mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-ink-soft mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="Project subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ink-soft mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="btn-sage w-full rounded-xl px-8 py-4 inline-flex items-center justify-center gap-2 active:scale-95 transition-transform"
              >
                <Send className="w-5 h-5" />
                Send message
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-6" data-reveal>
            <div className="card-paper rounded-4xl p-8 md:p-10">
              <h3 className="font-display text-2xl font-semibold text-ink mb-6">Contact details</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-cream-50 border border-ink/8 hover:border-gold/40 transition-colors group"
                  >
                    <span className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gold/12 flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-gold-deep" />
                    </span>
                    <div>
                      <h4 className="text-ink font-semibold">{info.title}</h4>
                      <p className="text-ink-soft text-sm">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="card-paper rounded-4xl p-8 md:p-10">
              <h3 className="font-display text-2xl font-semibold text-ink mb-6">Follow me</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-2xl bg-cream-50 border border-ink/8 text-ink-soft hover:text-ink hover:border-sage/40 transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="font-medium text-sm">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-4xl p-8 bg-ink text-cream relative overflow-hidden">
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-sage/25 blur-2xl" aria-hidden="true" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-3 h-3 rounded-full bg-sage animate-pulse" />
                  <h3 className="font-display text-xl font-semibold">Available for work</h3>
                </div>
                <p className="text-cream/75 leading-relaxed">
                  I&apos;m currently available for freelance projects and full-time opportunities. Let&apos;s discuss
                  how I can help bring your ideas to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

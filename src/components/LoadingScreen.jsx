"use client"

import { useState, useEffect } from "react"

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 3
      })
    }, 45)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-cream text-ink flex items-center justify-center relative overflow-hidden px-6">
      {/* organic accents */}
      <div
        className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-clay/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -right-16 w-80 h-80 rounded-full bg-gold/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative text-center max-w-md w-full">
        <p className="eyebrow text-gold-deep mb-5">Portfolio</p>
        <h1 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
          Bishnu Prasad Khanal<span className="text-gold">.</span>
        </h1>
        <p className="text-ink-soft mt-4">Laravel &amp; Full-Stack Developer — Nepal</p>

        <div className="mt-10">
          <div className="h-1 rounded-full bg-ink/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-gold to-sage transition-all duration-200 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-ink-muted mt-3">{progress}%</p>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen

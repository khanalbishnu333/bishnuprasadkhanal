"use client"

import { useEffect, useRef } from "react"

/**
 * Thin gradient bar at the very top that tracks reading progress.
 * Width is written straight to the DOM node (no per-frame React re-render).
 */
const ScrollProgress = () => {
  const barRef = useRef(null)

  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      const pct = max > 0 ? (doc.scrollTop / max) * 100 : 0
      if (barRef.current) barRef.current.style.width = `${pct}%`
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[70] pointer-events-none" aria-hidden="true">
      <div
        ref={barRef}
        className="h-full w-0 bg-gradient-to-r from-gold via-clay to-sage shadow-[0_0_10px_rgba(195,154,78,0.6)]"
      />
    </div>
  )
}

export default ScrollProgress

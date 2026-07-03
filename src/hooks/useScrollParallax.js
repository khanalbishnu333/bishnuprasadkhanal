import { useEffect, useRef } from "react"

/**
 * Subtle scroll parallax for a decorative layer (blob, ring, image frame).
 * Transform-only, rAF-throttled. Per the ui-ux-pro-max parallax rule: apply to
 * decorative/background layers only (never text or interactive controls), keep
 * the delta small so foreground and background never desync distractingly.
 * No-ops when the user prefers reduced motion.
 *
 * @param {number} speed  px of travel per unit of viewport progress (~8-40)
 */
export default function useScrollParallax(speed = 20) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return

    let raf = 0
    const update = () => {
      raf = 0
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight || 1
      const center = r.top + r.height / 2
      const prog = (center - vh / 2) / vh // 0 when centered in viewport
      el.style.transform = `translate3d(0, ${(-prog * speed).toFixed(2)}px, 0)`
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    el.style.willChange = "transform"
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [speed])

  return ref
}

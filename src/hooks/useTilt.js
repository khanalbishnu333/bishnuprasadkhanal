import { useEffect, useRef } from "react"

/**
 * 3D pointer tilt for a single focal element (portrait, feature card).
 * Follows the cursor 1:1 while hovering, springs back on leave.
 *
 * Grounded in the ui-ux-pro-max "3d tilt" motion rule: clamp the pull so the
 * element never leaves its hit box, keep it to 1-2 focal elements per screen,
 * transform-only (compositor thread), will-change: transform. No-ops on touch
 * devices and when the user prefers reduced motion.
 */
export default function useTilt({ max = 9, scale = 1.02, layered = false } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!fine || reduce) return

    // In `layered` mode the perspective comes from a `.scene-3d` ancestor and
    // the element keeps `preserve-3d`, so its translateZ children stay in depth.
    // Adding our own perspective() here would flatten them, so we omit it.
    const rest = layered ? "rotateX(0deg) rotateY(0deg) scale(1)" : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"

    let raf = 0
    let rx = 0
    let ry = 0

    const apply = () => {
      raf = 0
      const rot = `rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) scale(${scale})`
      el.style.transform = layered ? rot : `perspective(1000px) ${rot}`
    }

    const onEnter = () => {
      el.style.transition = "transform 0.12s ease-out"
    }
    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width - 0.5 // -0.5 .. 0.5
      const py = (e.clientY - r.top) / r.height - 0.5
      ry = px * max * 2
      rx = -py * max * 2
      if (!raf) raf = requestAnimationFrame(apply)
    }
    const onLeave = () => {
      if (raf) {
        cancelAnimationFrame(raf)
        raf = 0
      }
      el.style.transition = "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)"
      el.style.transform = rest
    }

    el.style.willChange = "transform"
    el.addEventListener("pointerenter", onEnter)
    el.addEventListener("pointermove", onMove)
    el.addEventListener("pointerleave", onLeave)

    return () => {
      el.removeEventListener("pointerenter", onEnter)
      el.removeEventListener("pointermove", onMove)
      el.removeEventListener("pointerleave", onLeave)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [max, scale, layered])

  return ref
}

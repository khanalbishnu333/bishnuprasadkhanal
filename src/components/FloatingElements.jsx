/**
 * Soft organic background shapes — warm editorial mood.
 * Very low opacity, fixed behind content, non-interactive. Replaces the old
 * floating code-words which didn't fit the paper/editorial aesthetic.
 */
const FloatingElements = () => {
  const blobs = [
    { className: "top-[12%] -left-24 w-72 h-72 bg-clay/10", anim: "animate-float-slow", delay: "0s" },
    { className: "top-[42%] -right-28 w-80 h-80 bg-gold/10", anim: "animate-float-slow", delay: "3s" },
    { className: "top-[74%] left-[8%] w-64 h-64 bg-sage/10", anim: "animate-float-slow", delay: "6s" },
  ]

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {blobs.map((b, i) => (
        <div
          key={i}
          className={`absolute rounded-full blur-3xl ${b.className} ${b.anim}`}
          style={{ animationDelay: b.delay }}
        />
      ))}
    </div>
  )
}

export default FloatingElements

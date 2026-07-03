"use client"

import useTilt from "../hooks/useTilt"

/**
 * Wraps a card in a gentle pointer-driven 3D tilt. The reveal-on-scroll
 * transform lives on a separate parent element, so the entrance animation and
 * the hover tilt never write to the same node's transform.
 */
const TiltCard = ({ as: Tag = "div", max = 5, scale = 1.01, className = "", children, ...rest }) => {
  const ref = useTilt({ max, scale })
  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  )
}

export default TiltCard

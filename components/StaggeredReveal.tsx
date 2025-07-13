import React from "react"
import { ScrollReveal } from "./ScrollReveal"

interface StaggeredRevealProps {
  children: React.ReactNode[]
  staggerDelay?: number
  direction?: "up" | "down" | "left" | "right" | "fade"
  className?: string
}

export function StaggeredReveal({
  children,
  staggerDelay = 100,
  direction = "up",
  className = "",
}: StaggeredRevealProps) {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => (
        <ScrollReveal key={index} direction={direction} delay={index * staggerDelay}>
          {child}
        </ScrollReveal>
      ))}
    </div>
  )
}

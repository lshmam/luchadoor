"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface RevealProps {
    children: React.ReactNode
    className?: string
    delay?: number
    duration?: number
    width?: "fit-content" | "100%"
}

export function Reveal({ children, className, delay = 0, duration = 700, width = "fit-content" }: RevealProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

    useEffect(() => {
        // Check for reduced motion preference
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
        setPrefersReducedMotion(mediaQuery.matches)

        const handleChange = (e: MediaQueryListEvent) => {
            setPrefersReducedMotion(e.matches)
        }

        mediaQuery.addEventListener("change", handleChange)
        return () => mediaQuery.removeEventListener("change", handleChange)
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(entry.target)
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px" // Trigger when element is slightly visible
            }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [])

    return (
        <div
            ref={ref}
            className={cn(
                "ease-out transform",
                // If reduced motion is preferred, skip animation
                prefersReducedMotion
                    ? "opacity-100 translate-y-0"
                    : isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-12",
                className
            )}
            style={{
                transitionProperty: prefersReducedMotion ? "none" : "opacity, transform",
                transitionDuration: prefersReducedMotion ? "0ms" : `${duration}ms`,
                transitionDelay: prefersReducedMotion ? "0ms" : `${delay}ms`,
                width
            }}
        >
            {children}
        </div>
    )
}

"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Clock, Award, Phone } from "lucide-react"

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Ensure video is muted (required for autoplay on iOS)
    video.muted = true
    video.setAttribute('muted', '')
    video.setAttribute('playsinline', '')

    // Set playback rate to 1.2x when video is ready
    video.playbackRate = 1.2

    // Force play on mobile
    const playVideo = () => {
      if (video.paused) {
        video.play().catch(() => {
          console.log("Autoplay prevented")
        })
      }
    }

    // Multiple attempts to play
    playVideo()

    // Try again after a short delay
    const timer1 = setTimeout(playVideo, 100)
    const timer2 = setTimeout(playVideo, 500)
    const timer3 = setTimeout(playVideo, 1000)

    // Also try on any user interaction
    document.addEventListener("touchstart", playVideo, { once: true })
    document.addEventListener("click", playVideo, { once: true })
    document.addEventListener("scroll", playVideo, { once: true })

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      document.removeEventListener("touchstart", playVideo)
      document.removeEventListener("click", playVideo)
      document.removeEventListener("scroll", playVideo)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/garage-hero.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay for Text Readability */}
        {/* <div className="absolute inset-0 bg-black/60" /> */}
      </div>

      {/* Centered Content */}
      <div className="container mx-auto px-4 relative z-20 text-center pt-20">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Headline */}
          <h1 className="text-5xl md:text-5xl lg:text-7xl font-bold leading-tight text-white uppercase tracking-tight">
            Your Champion for{" "}
            <span className="text-white">Garage Doors</span>{" "}
            <span className="text-white">&</span>{" "}
            <span className="text-white">Gates</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Professional installation, repair, and maintenance services in Surrey, BC.
            We fight for your home&apos;s security with championship-level service.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold uppercase tracking-wide text-lg px-8 h-14"
            >
              Get Free Estimate
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <a
              href="tel:6049775156"
              className="inline-flex items-center justify-center gap-3 border-2 border-white text-white hover:bg-white hover:text-black font-bold uppercase tracking-wide text-lg px-8 h-14 rounded-xl transition-colors"
            >
              <Phone className="w-5 h-5" />
              604-977-5156
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

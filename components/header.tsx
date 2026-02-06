"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center",
      isScrolled ? "pt-2" : "pt-4"
    )}>
      <div className={cn(
        "rounded-full bg-white shadow-md border border-white/50 transition-all duration-300 mx-4 flex items-center justify-center md:justify-between px-4 md:px-6 relative",
        isScrolled ? "w-[95%] max-w-7xl h-12" : "w-[95%] max-w-7xl h-14"
      )}>
        {/* Logo - Left Side */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/mascot.png" alt="Mascot" className="w-16 h-16 rounded-full object-cover" />
          <img src="/images/luchadoor-logo-nobg.png" alt="Luchadoor" className="h-12 md:h-14 w-auto object-cover" />
        </Link>

        {/* Desktop: Right Navigation & CTA */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/services" className="text-sm font-bold uppercase tracking-wide text-zinc-700 hover:text-primary transition-colors">Services</Link>
          <Link href="/our-work" className="text-sm font-bold uppercase tracking-wide text-zinc-700 hover:text-primary transition-colors">Our Work</Link>

          <a href="tel:6049775156">
            <Button className="rounded-full bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wide px-5 h-9 text-sm shadow-md hover:shadow-lg transition-all">
              Call Now
            </Button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-zinc-900 absolute right-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-xl border border-zinc-100 p-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          <Link href="/services" className="text-lg font-bold text-zinc-800 py-2 border-b border-zinc-100" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link href="/our-work" className="text-lg font-bold text-zinc-800 py-2 border-b border-zinc-100" onClick={() => setIsMenuOpen(false)}>Our Work</Link>
          <a href="tel:6049775156" className="w-full">
            <Button className="w-full rounded-xl bg-primary text-white font-bold uppercase">Call Now</Button>
          </a>
        </div>
      )}
    </header>
  )
}

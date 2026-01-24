"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-border py-2"
          : "bg-transparent border-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img
                src="/images/mascot.png"
                alt="Luchadoor Mascot"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center items-start">
              <img
                src="/images/luchadoor-logo-nobg.png"
                alt="Luchadoor"
                className="h-12 w-auto object-contain mb-1"
              />
              <span
                className={cn(
                  "text-[10px] tracking-widest uppercase transition-colors",
                  isScrolled ? "text-muted-foreground" : "text-gray-200 drop-shadow-sm"
                )}
              >
                Garage Door & Gate Systems
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors uppercase tracking-wide",
                  isScrolled
                    ? "text-muted-foreground hover:text-primary"
                    : "text-white/90 hover:text-white hover:underline decoration-secondary decoration-2 underline-offset-4 drop-shadow-sm"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:6049775156"
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors",
                isScrolled ? "text-foreground" : "text-white drop-shadow-md"
              )}
            >
              <Phone className={cn("w-4 h-4", isScrolled ? "text-primary" : "text-white")} />
              <span>604-977-5156</span>
            </a>
            <a href="tel:6049775156">
              <Button
                className={cn(
                  "font-bold uppercase tracking-wide",
                  isScrolled
                    ? "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                    : "bg-transparent border-2 border-white text-white hover:bg-white hover:text-foreground"
                )}
              >
                Get Free Quote
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn("md:hidden p-2 transition-colors", isScrolled ? "text-foreground" : "text-white")}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background absolute left-0 right-0 top-full shadow-xl">
            <nav className="flex flex-col gap-4 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a href="tel:6049775156" className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>604-977-5156</span>
              </a>
              <a href="tel:6049775156" className="w-full">
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold uppercase tracking-wide w-full">
                  Get Free Quote
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

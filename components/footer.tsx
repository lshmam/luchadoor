import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-none overflow-hidden">
                <img
                  src="/images/mascot.png"
                  alt="Luchadoor Mascot"
                  className="w-full h-full object-cover"
                />
              </div>
              <img
                src="/images/luchadoor-logo-nobg.png"
                alt="Luchadoor"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Your champion for garage doors and gate systems in Surrey, BC. Professional installation, repair, and
              maintenance services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold uppercase tracking-wide mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-background/70 hover:text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold uppercase tracking-wide mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-background/70 text-sm">Garage Door Installation</li>
              <li className="text-background/70 text-sm">Garage Door Repair</li>
              <li className="text-background/70 text-sm">Opener Installation</li>
              <li className="text-background/70 text-sm">Gate Systems</li>
              <li className="text-background/70 text-sm">Emergency Service</li>
              <li className="text-background/70 text-sm">Maintenance Plans</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold uppercase tracking-wide mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:6049775156" className="text-background/70 hover:text-primary transition-colors text-sm">
                  604-977-5156
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a
                  href="mailto:luchadoor14@gmail.com"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  luchadoor14@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-background/70 text-sm">
                  10324 Whalley Blvd
                  <br />
                  Surrey, BC, Canada
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Luchadoor Garage Door & Gate Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

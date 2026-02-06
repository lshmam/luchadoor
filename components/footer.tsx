import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-24 border-t border-slate-900">
      <div className="container mx-auto px-6 md:px-12">
        <Reveal width="100%">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {/* Brand */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-28 h-28 rounded-xl overflow-hidden bg-white/5 p-1">
                  <img
                    src="/images/mascot.png"
                    alt="Luchadoor Mascot"
                    className="w-full h-full object-contain"
                  />
                </div>
                <img
                  src="/images/luchadoor-logo-nobg.png"
                  alt="Luchadoor"
                  className="h-24 w-auto object-contain brightness-0 invert opacity-90"
                />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                Your champion for garage doors and gate systems in Surrey, BC. Professional installation, repair, and
                maintenance services.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-slate-200">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="#services" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#gallery" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
                    Project Gallery
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-slate-200">Services</h4>
              <ul className="space-y-3">
                <li className="text-slate-400 text-sm font-medium">Garage Door Installation</li>
                <li className="text-slate-400 text-sm font-medium">Garage Door Repair</li>
                <li className="text-slate-400 text-sm font-medium">Opener Installation</li>
                <li className="text-slate-400 text-sm font-medium">Gate Systems</li>
                <li className="text-slate-400 text-sm font-medium">Emergency Service</li>
                <li className="text-slate-400 text-sm font-medium">Maintenance Plans</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-slate-200">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-blue-400" />
                  </div>
                  <a href="tel:6049775156" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
                    604-977-5156
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-blue-400" />
                  </div>
                  <a
                    href="mailto:luchadoor14@gmail.com"
                    className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
                  >
                    luchadoor14@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center mt-0.5">
                    <MapPin className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-slate-400 text-sm font-medium leading-relaxed">
                    10324 Whalley Blvd
                    <br />
                    Surrey, BC, Canada
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Luchadoor Garage Door & Gate Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

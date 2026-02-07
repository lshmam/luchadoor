"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <span className="text-primary font-bold uppercase tracking-widest text-sm">Get In Touch</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground uppercase">Contact Us</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Ready to upgrade your garage door or need emergency repairs? Get in touch with us today for a free
                estimate!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-none bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground uppercase tracking-wide">Phone</h3>
                  <a href="tel:6049775156" className="text-muted-foreground hover:text-primary transition-colors">
                    604-977-5156
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-none bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground uppercase tracking-wide">Email</h3>
                  <a
                    href="mailto:luchadoor14@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    luchadoor14@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-none bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground uppercase tracking-wide">Location</h3>
                  <p className="text-muted-foreground">
                    13460 111a Ave
                    <br />
                    Surrey, BC, Canada
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-none bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground uppercase tracking-wide">Hours</h3>
                  <p className="text-muted-foreground">
                    Mon-Fri: 8:00 AM - 6:00 PM
                    <br />
                    Sat: 9:00 AM - 4:00 PM
                    <br />
                    <span className="text-secondary font-medium">24/7 Emergency Available</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-none p-8 shadow-xl border border-border">
            <h3 className="text-2xl font-bold mb-6 text-card-foreground uppercase tracking-wide">
              Request a Free Quote
            </h3>
            <form action="https://formspree.io/f/mykpqjga" method="POST" className="space-y-6">
              {/* Honeypot for spam protection */}
              <input type="text" name="_honey" className="hidden" />

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-card-foreground mb-2 uppercase tracking-wide"
                >
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="John Doe"
                  required
                  className="bg-background"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-card-foreground mb-2 uppercase tracking-wide"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  spellCheck={false}
                  placeholder="john@example.com"
                  required
                  className="bg-background"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-card-foreground mb-2 uppercase tracking-wide"
                >
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="(604) 977-5156"
                  required
                  className="bg-background"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-card-foreground mb-2 uppercase tracking-wide"
                >
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your garage door needs..."
                  rows={4}
                  required
                  className="bg-background resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold uppercase tracking-wide touch-manipulation"
                style={{ touchAction: "manipulation" }}
              >
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

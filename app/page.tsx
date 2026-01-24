"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services2 } from "@/components/services2"
import { OurWork } from "@/components/our-work"
import { Features } from "@/components/features"
import { WhyChooseUsRadial } from "@/components/why-choose-us-radial"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { MapSection } from "@/components/map-section"
import { Gallery } from "@/components/gallery"
import { Cta } from "@/components/cta"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { GarageDoorIntro } from "@/components/garage-door-intro"
import { WhyChooseUsStats } from "@/components/why-choose-us-stats"

export default function Home() {
  return (
    <>
      <GarageDoorIntro />
      <main className="min-h-screen">
        <Header />
        <Hero />
        <Services2 />
        <OurWork />
        {/* <Features /> */}
        <WhyChooseUsStats />
        <About />
        <Testimonials />
        {/* <Gallery /> */}
        <Cta />
        <MapSection />
        {/* <Contact /> */}
        <Footer />
      </main>
    </>
  )
}

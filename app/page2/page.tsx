"use client"

import { Header } from "@/components/header"
import { HeroMinimal } from "@/components/landing2/hero-minimal"
import { ServicesMinimal } from "@/components/landing2/services-minimal"
import { SocialProofMinimal } from "@/components/landing2/social-proof-minimal"
import { CtaMinimal } from "@/components/landing2/cta-minimal"
import { FooterMinimal } from "@/components/landing2/footer-minimal"

export default function LandingPage2() {
    return (
        <main className="min-h-screen">
            <Header />
            <HeroMinimal />
            <ServicesMinimal />
            <SocialProofMinimal />
            <CtaMinimal />
            <FooterMinimal />
        </main>
    )
}

import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Luchadoor | Garage Door & Gate Systems",
  description:
    "Professional garage door installation, repair, and gate systems in Surrey, BC. Your champion for all garage door needs!",
  generator: "v0.app",
  icons: {
    icon: "/images/mascot.png",
    apple: "/images/mascot.png",
  },
  openGraph: {
    title: "Luchadoor | Garage Door & Gate Systems",
    description: "Professional garage door installation, repair, and gate systems in Surrey, BC. Your champion for all garage door needs!",
    images: ["/images/mascot.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luchadoor | Garage Door & Gate Systems",
    description: "Professional garage door installation, repair, and gate systems in Surrey, BC.",
    images: ["/images/mascot.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

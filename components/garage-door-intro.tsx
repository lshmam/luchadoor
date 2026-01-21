"use client"

import { useState, useEffect } from "react"

export function GarageDoorIntro({ onComplete }: { onComplete?: () => void }) {
    const [isOpen, setIsOpen] = useState(false)
    const [isComplete, setIsComplete] = useState(false)

    useEffect(() => {
        // Start the door opening animation after a short delay
        const openTimer = setTimeout(() => {
            setIsOpen(true)
        }, 800) // Wait 800ms before opening

        // Mark as complete and remove from DOM after animation finishes
        const completeTimer = setTimeout(() => {
            setIsComplete(true)
            onComplete?.()
        }, 2800) // 800ms delay + 2000ms animation

        return () => {
            clearTimeout(openTimer)
            clearTimeout(completeTimer)
        }
    }, [onComplete])

    if (isComplete) return null

    return (
        <div
            className={`fixed inset-0 z-[100] pointer-events-none transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-100"
                }`}
        >
            {/* Garage Door Container */}
            <div
                className={`absolute inset-0 transition-transform duration-[2000ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? "-translate-y-full" : "translate-y-0"
                    }`}
                style={{
                    transformOrigin: "top center",
                }}
            >
                {/* Door Panels */}
                <div className="w-full h-full bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 flex flex-col">
                    {/* Door Panel 1 */}
                    <div className="flex-1 relative border-b-2 border-zinc-600">
                        <div className="absolute inset-4 rounded-sm bg-gradient-to-br from-zinc-600 to-zinc-800 shadow-inner" />
                        {/* Panel Texture Lines */}
                        <div className="absolute left-8 right-8 top-1/2 h-px bg-zinc-500/30" />
                    </div>

                    {/* Door Panel 2 */}
                    <div className="flex-1 relative border-b-2 border-zinc-600">
                        <div className="absolute inset-4 rounded-sm bg-gradient-to-br from-zinc-600 to-zinc-800 shadow-inner" />
                        <div className="absolute left-8 right-8 top-1/2 h-px bg-zinc-500/30" />
                    </div>

                    {/* Door Panel 3 - with window */}
                    <div className="flex-1 relative border-b-2 border-zinc-600">
                        <div className="absolute inset-4 rounded-sm bg-gradient-to-br from-zinc-600 to-zinc-800 shadow-inner flex items-center justify-center gap-4">
                            {/* Windows */}
                            <div className="w-16 h-12 md:w-24 md:h-16 bg-sky-900/40 rounded border-2 border-zinc-500 shadow-inner backdrop-blur-sm" />
                            <div className="w-16 h-12 md:w-24 md:h-16 bg-sky-900/40 rounded border-2 border-zinc-500 shadow-inner backdrop-blur-sm" />
                            <div className="hidden sm:block w-16 h-12 md:w-24 md:h-16 bg-sky-900/40 rounded border-2 border-zinc-500 shadow-inner backdrop-blur-sm" />
                            <div className="hidden md:block w-24 h-16 bg-sky-900/40 rounded border-2 border-zinc-500 shadow-inner backdrop-blur-sm" />
                        </div>
                    </div>

                    {/* Door Panel 4 */}
                    <div className="flex-1 relative border-b-2 border-zinc-600">
                        <div className="absolute inset-4 rounded-sm bg-gradient-to-br from-zinc-600 to-zinc-800 shadow-inner" />
                        <div className="absolute left-8 right-8 top-1/2 h-px bg-zinc-500/30" />
                    </div>

                    {/* Door Panel 5 - Bottom panel with handle indication */}
                    <div className="flex-1 relative">
                        <div className="absolute inset-4 rounded-sm bg-gradient-to-br from-zinc-600 to-zinc-800 shadow-inner" />
                        <div className="absolute left-8 right-8 top-1/2 h-px bg-zinc-500/30" />
                        {/* Bottom edge detail */}
                        <div className="absolute bottom-0 left-0 right-0 h-2 bg-zinc-900" />
                    </div>
                </div>

                {/* Side Rails */}
                <div className="absolute top-0 left-0 w-3 md:w-4 h-full bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-800" />
                <div className="absolute top-0 right-0 w-3 md:w-4 h-full bg-gradient-to-l from-zinc-900 via-zinc-700 to-zinc-800" />

                {/* Logo in center */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <img
                        src="/images/logo.png"
                        alt="Luchadoor Logo"
                        className="w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-2xl animate-pulse"
                    />
                </div>
            </div>

            {/* Opening Sound Effect Visual - subtle light coming from bottom */}
            <div
                className={`absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/10 to-transparent transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"
                    }`}
            />
        </div>
    )
}

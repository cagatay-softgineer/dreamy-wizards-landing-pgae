"use client"

import Link from "next/link"
import { Home, ArrowLeft, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlitchText } from "@/components/react-bits/glitch-text"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* 404 Number with glitch effect */}
        <div className="mb-8">
          <GlitchText text="404" className="text-[120px] md:text-[180px] font-bold leading-none" />
        </div>

        {/* Decorative sparkles */}
        <div className="flex justify-center gap-2 mb-6">
          <Sparkles className="w-6 h-6 text-primary animate-pulse" />
          <Sparkles className="w-4 h-4 text-primary/60 animate-pulse delay-150" />
          <Sparkles className="w-6 h-6 text-primary animate-pulse delay-300" />
        </div>

        {/* Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Page Not Found</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          Looks like this page vanished into thin air. Even our wizards couldn&apos;t conjure it up.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/">
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10 bg-transparent">
            <Link href="/#contact">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Contact Us
            </Link>
          </Button>
        </div>

        {/* Fun message */}
        <p className="mt-12 text-sm text-muted-foreground/60">Error Code: SPELL_NOT_FOUND</p>
      </div>
    </div>
  )
}

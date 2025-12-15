"use client"

import { TextParallax } from "@/components/react-bits/text-parallax"

const phrases = ["DREAMY WIZARDS", "PREMIUM SOFTWARE", "DIGITAL MAGIC", "CODE EXCELLENCE"]

export function ScrollVelocitySection() {
  return (
    <section className="py-8 overflow-hidden border-y border-primary/20 bg-background/50">
      <TextParallax baseVelocity={2}>
        <div className="flex items-center gap-8 pr-8">
          {phrases.map((phrase, i) => (
            <span
              key={i}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary/20 whitespace-nowrap flex items-center gap-8"
            >
              {phrase}
              <span className="text-primary/40">✦</span>
            </span>
          ))}
        </div>
      </TextParallax>
    </section>
  )
}

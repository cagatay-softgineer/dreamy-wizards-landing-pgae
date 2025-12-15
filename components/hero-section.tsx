"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap } from "lucide-react"
import { siteMeta, underDevelopment } from "@/data/content"
import { AuroraBackground } from "@/components/react-bits/aurora-background"
import { BlurText } from "@/components/react-bits/blur-text"
import { SplitText } from "@/components/react-bits/split-text"
import { ShinyText } from "@/components/react-bits/shiny-text"
import { Magnet } from "@/components/react-bits/magnet"
import { RotatingText } from "@/components/react-bits/rotating-text"
import { Particles } from "@/components/react-bits/particles"
import { TextScramble } from "@/components/react-bits/text-scramble"
import { DecodeText } from "@/components/react-bits/decode-text"
import { LetterSwap } from "@/components/react-bits/letter-swap"

export function HeroSection() {
  const paddingTop = underDevelopment.isActive ? "pt-32 sm:pt-28" : "pt-20"

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${paddingTop}`}
    >
      <AuroraBackground className="absolute inset-0 bg-background" showRadialGradient={true} />

      <Particles
        className="z-[1]"
        particleCount={40}
        particleColor="rgba(212, 175, 55, 0.5)"
        connectionColor="rgba(212, 175, 55, 0.1)"
        speed={0.3}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:64px_64px] z-[2]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 text-center lg:text-left">
            {underDevelopment.isActive && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/60 backdrop-blur-sm border border-primary/40 rounded-full animate-fade-in-up opacity-0">
                <Zap className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">{underDevelopment.badgeText}</span>
              </div>
            )}

            <div className="inline-flex items-center gap-3">
              {siteMeta.taglineChips.map((chip, index) => (
                <span
                  key={chip}
                  className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs font-medium text-primary"
                  style={{
                    animation: "fadeInUp 0.6s ease-out forwards",
                    animationDelay: `${index * 100}ms`,
                    opacity: 0,
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight tracking-tight text-balance">
              <SplitText
                text={siteMeta.heroTitle}
                splitType="words"
                delay={80}
                duration={0.7}
                from={{ opacity: 0, y: 50, rotateX: -45 }}
                to={{ opacity: 1, y: 0, rotateX: 0 }}
              />{" "}
              <ShinyText className="font-bold" shimmerWidth={120} speed={4}>
                {siteMeta.heroTitleHighlight}
              </ShinyText>
            </h1>

            <div className="text-xl sm:text-2xl text-primary font-medium">
              We build{" "}
              <RotatingText
                texts={["web apps", "mobile apps", "APIs", "products", "dreams"]}
                interval={2500}
                className="text-foreground font-bold"
              />
            </div>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 text-pretty">
              <BlurText
                text={siteMeta.heroSubtitle}
                animateBy="words"
                direction="bottom"
                delay={40}
                stepDuration={0.4}
              />
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Magnet padding={60} magnetStrength={3}>
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                >
                  <Link href="#projects">
                    <LetterSwap text={siteMeta.primaryCtaLabel} className="mr-2" />
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </Magnet>
              <Magnet padding={60} magnetStrength={3}>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300 bg-transparent hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                >
                  <Link href="#contact">
                    <LetterSwap text={siteMeta.secondaryCtaLabel} />
                  </Link>
                </Button>
              </Magnet>
            </div>
          </div>

          {/* Right illustration - Enhanced with glassmorphism */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative animate-float">
              <div className="w-96 h-96 relative">
                {/* Magical code illustration with glass effect */}
                <div className="absolute inset-0 glass-card rounded-3xl shadow-2xl">
                  <div className="absolute -inset-px bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-3xl" />
                  <div className="relative p-8 font-mono text-sm space-y-3">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-3 h-3 rounded-full bg-red-500/70" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                      <div className="w-3 h-3 rounded-full bg-green-500/70" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary">const</span>
                      <DecodeText text="magic" className="text-foreground" speed={80} />
                      <span className="text-muted-foreground">=</span>
                      <span className="text-primary">{"{"}</span>
                    </div>
                    <div className="pl-4 text-muted-foreground">
                      <span className="text-foreground">dreams</span>: <span className="text-primary">true</span>,
                    </div>
                    <div className="pl-4 text-muted-foreground">
                      <span className="text-foreground">quality</span>:{" "}
                      <span className="text-primary">{'"premium"'}</span>,
                    </div>
                    <div className="pl-4 text-muted-foreground">
                      <span className="text-foreground">wizardry</span>: <span className="text-primary">Infinity</span>
                    </div>
                    <div className="text-primary">{"}"}</div>
                    <div className="pt-4 flex items-center gap-2">
                      <span className="text-primary">export default</span>
                      <TextScramble text="magic" className="text-foreground" />
                      <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                    </div>
                  </div>
                </div>
                {/* Decorative glowing elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary/40 rounded-full blur-xl animate-pulse" />
                <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-primary/30 rounded-full blur-xl animate-pulse animation-delay-300" />
                <div className="absolute top-1/2 -right-4 w-8 h-8 bg-primary/50 rounded-full blur-lg animate-pulse animation-delay-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[3]" />
    </section>
  )
}

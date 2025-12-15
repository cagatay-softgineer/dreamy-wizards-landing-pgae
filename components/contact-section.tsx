"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Mail, Github, Linkedin, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { contactConfig, contactIntro } from "@/data/content"
import { GlitchText } from "@/components/react-bits/glitch-text"
import { RippleButton } from "@/components/react-bits/ripple-button"
import { MagneticText } from "@/components/react-bits/magnetic-text"
import { DecodeText } from "@/components/react-bits/decode-text"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-24 lg:py-32 relative" ref={sectionRef}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div
            className={cn(
              "text-center mb-12 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
              <MagneticText strength={0.3}>{"Let's Build"}</MagneticText>{" "}
              <span className="text-primary">
                <GlitchText>Together</GlitchText>
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto text-pretty">{contactIntro}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <form
              onSubmit={handleSubmit}
              className={cn(
                "space-y-6 glass-card p-8 rounded-2xl transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
            >
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">
                  {contactConfig.formLabels.name}
                </Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background/50 border-border focus:border-primary transition-all duration-300 focus:shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  {contactConfig.formLabels.email}
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background/50 border-border focus:border-primary transition-all duration-300 focus:shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">
                  {contactConfig.formLabels.message}
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background/50 border-border focus:border-primary min-h-[150px] transition-all duration-300 focus:shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                  required
                />
              </div>
              <RippleButton
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 rounded-md font-medium"
                rippleColor="rgba(255, 255, 255, 0.4)"
              >
                {contactConfig.formLabels.submit}
                <Send className="ml-2 h-4 w-4 inline" />
              </RippleButton>
            </form>

            <div
              className={cn(
                "flex flex-col justify-center space-y-8 transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
            >
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  <DecodeText text="Or reach out directly" speed={40} />
                </h3>
                <p className="text-muted-foreground mb-6">
                  Prefer email or social media? We're happy to connect through any channel.
                </p>
              </div>

              <div className="space-y-4">
                <Link
                  href={`mailto:${contactConfig.email}`}
                  className="flex items-center gap-4 p-4 glass-card rounded-xl transition-all duration-300 group hover:border-primary/40 hover:shadow-[0_4px_20px_rgba(212,175,55,0.1)]"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors border border-primary/20">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email us at</p>
                    <p className="text-foreground font-medium">{contactConfig.email}</p>
                  </div>
                </Link>

                <div className="flex gap-4">
                  <Link
                    href={contactConfig.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-4 glass-card rounded-xl transition-all duration-300 group hover:border-primary/40 hover:shadow-[0_4px_20px_rgba(212,175,55,0.1)]"
                  >
                    <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <MagneticText className="text-foreground">GitHub</MagneticText>
                  </Link>
                  <Link
                    href={contactConfig.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-4 glass-card rounded-xl transition-all duration-300 group hover:border-primary/40 hover:shadow-[0_4px_20px_rgba(212,175,55,0.1)]"
                  >
                    <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <MagneticText className="text-foreground">LinkedIn</MagneticText>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

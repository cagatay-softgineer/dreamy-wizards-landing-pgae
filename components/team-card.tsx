"use client"

import { User, Github, Linkedin, Globe } from "lucide-react"
import Link from "next/link"
import { SpotlightCard } from "@/components/react-bits/spotlight-card"

interface TeamCardProps {
  name: string
  role: string
  bio: string
  tags: string[]
  links?: {
    portfolio?: string
    github?: string
    linkedin?: string
  }
}

export function TeamCard({ name, role, bio, tags, links }: TeamCardProps) {
  return (
    <SpotlightCard className="h-full" spotlightColor="rgba(212, 175, 55, 0.12)">
      <div className="group glass-card rounded-2xl p-8 transition-all duration-300 hover:bg-card/80 hover:border-primary/40 h-full">
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors border border-primary/20">
            <User className="h-7 w-7 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">{name}</h3>
            <p className="text-sm text-primary">{role}</p>
          </div>
        </div>
        <p className="text-muted-foreground mb-6 text-pretty">{bio}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {links && (
          <div className="flex items-center gap-3 pt-4 border-t border-border/50">
            {links.portfolio && (
              <Link
                href={links.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <Globe className="h-4 w-4" />
                <span>Portfolio</span>
              </Link>
            )}
            {links.github && (
              <Link
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </Link>
            )}
            {links.linkedin && (
              <Link
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </Link>
            )}
          </div>
        )}
      </div>
    </SpotlightCard>
  )
}

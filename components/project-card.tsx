"use client"

import Link from "next/link"
import { ArrowUpRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SpotlightCard } from "@/components/react-bits/spotlight-card"

interface ProjectCardProps {
  name: string
  description: string
  technologies: string[]
  link: string
  github?: string
}

export function ProjectCard({ name, description, technologies, link, github }: ProjectCardProps) {
  return (
    <SpotlightCard className="h-full" spotlightColor="rgba(212, 175, 55, 0.1)">
      <div className="group glass-card rounded-2xl p-6 transition-all duration-300 hover:border-primary/40 flex flex-col h-full">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 text-pretty">{description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-muted/50 text-muted-foreground rounded-md border border-border/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-3">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="flex-1 border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary group/btn bg-transparent hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]"
          >
            <Link href={link} target="_blank" rel="noopener noreferrer">
              View Project
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Link>
          </Button>
          {github && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-border/50 text-muted-foreground hover:bg-muted/50 hover:text-foreground bg-transparent"
            >
              <Link href={github} target="_blank" rel="noopener noreferrer" aria-label="View GitHub Repository">
                <Github className="h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </SpotlightCard>
  )
}

import Link from "next/link"
import { Sparkles, Github, Linkedin, Mail } from "lucide-react"
import { siteMeta, contactConfig } from "@/data/content"
import { CircularText } from "@/components/react-bits/circular-text"
import { LetterSwap } from "@/components/react-bits/letter-swap"

export function Footer() {
  return (
    <footer className="py-16 border-t border-primary/30 bg-background/80 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute -right-16 -bottom-16 opacity-20 pointer-events-none">
        <CircularText text="✦ DREAMY WIZARDS ✦ CRAFTING DREAMS ✦ " radius={100} fontSize={12} spinDuration={30} />
      </div>

      <div className="absolute -left-16 -top-16 opacity-10 pointer-events-none">
        <CircularText
          text="✦ PREMIUM SOFTWARE ✦ DIGITAL MAGIC ✦ "
          radius={80}
          fontSize={10}
          spinDuration={25}
          reverse
        />
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 group">
            <Sparkles className="h-5 w-5 text-primary transition-transform group-hover:rotate-12 group-hover:scale-110" />
            <span className="text-foreground font-medium">
              <LetterSwap text={siteMeta.brandName.split(" ")[0]} className="hover:text-primary transition-colors" />{" "}
              <span className="text-primary">
                <LetterSwap text={siteMeta.brandName.split(" ")[1] || ""} />
              </span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 order-2 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms
            </Link>
            <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
              FAQ
            </Link>
          </div>

          <p className="text-sm text-muted-foreground order-4 md:order-3">{siteMeta.copyrightNotice}</p>

          <div className="flex items-center gap-4 order-3 md:order-4">
            <Link
              href={contactConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-125 transform duration-200 hover:rotate-6"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href={contactConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-125 transform duration-200 hover:-rotate-6"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href={`mailto:${contactConfig.email}`}
              className="text-muted-foreground hover:text-primary transition-all hover:scale-125 transform duration-200 hover:rotate-6"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

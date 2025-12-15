"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { siteMeta, navLinks, underDevelopment } from "@/data/content"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const topOffset = underDevelopment.isActive ? "top-[41px] sm:top-[37px]" : "top-0"

  return (
    <header
      className={cn(
        "fixed left-0 right-0 z-50 transition-all duration-300",
        topOffset,
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-primary/30" : "bg-transparent",
      )}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Use siteMeta.brandName */}
          <Link href="#home" className="flex items-center gap-2 group">
            <div className="relative">
              <Sparkles className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
            </div>
            <span className="text-xl font-semibold text-foreground tracking-tight">
              {siteMeta.brandName.split(" ")[0]}{" "}
              <span className="text-primary">{siteMeta.brandName.split(" ")[1]}</span>
            </span>
            {underDevelopment.isActive && (
              <span className="ml-1 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider bg-primary/20 text-primary border border-primary/40 rounded">
                {underDevelopment.navBadgeText}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-80 opacity-100 mt-4" : "max-h-0 opacity-0",
          )}
        >
          <div className="flex flex-col gap-4 py-4 border-t border-primary/20 bg-background/50 backdrop-blur-sm rounded-lg px-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

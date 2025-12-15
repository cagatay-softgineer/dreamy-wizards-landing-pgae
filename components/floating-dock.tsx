"use client"

import { Github, Linkedin, Home, Users, Layers, Settings, MessageCircle } from "lucide-react"
import { Dock } from "@/components/react-bits/dock"
import { contactConfig } from "@/data/content"

const dockItems = [
  { icon: <Home className="h-5 w-5" />, label: "Home", href: "#home" },
  { icon: <Users className="h-5 w-5" />, label: "About", href: "#about" },
  { icon: <Layers className="h-5 w-5" />, label: "Projects", href: "#projects" },
  { icon: <Settings className="h-5 w-5" />, label: "Services", href: "#services" },
  { icon: <MessageCircle className="h-5 w-5" />, label: "Contact", href: "#contact" },
  { icon: <Github className="h-5 w-5" />, label: "GitHub", href: contactConfig.githubUrl },
  { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", href: contactConfig.linkedinUrl },
]

export function FloatingDock() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden lg:block">
      <Dock items={dockItems} magnification={1.4} distance={80} />
    </div>
  )
}

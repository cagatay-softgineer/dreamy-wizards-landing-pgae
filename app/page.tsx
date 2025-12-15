import { Navbar } from "@/components/navbar"
import { DevBanner } from "@/components/dev-banner"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { StatsSection } from "@/components/stats-section"
import { ScrollProgress } from "@/components/react-bits/scroll-progress"
import { TechMarquee } from "@/components/tech-marquee"
import { TestimonialsSection } from "@/components/clients-section"
import { FloatingDock } from "@/components/floating-dock"
import { ScrollVelocitySection } from "@/components/scroll-velocity-section"
import { BlobCursor } from "@/components/react-bits/blob-cursor"
import { ClickSpark } from "@/components/react-bits/click-spark"
import { Spotlight } from "@/components/react-bits/spotlight"
import { CrosshairCursor } from "@/components/react-bits/crosshair-cursor"

export default function Home() {
  return (
    <ClickSpark sparkColor="#D4AF37" sparkCount={12} sparkSize={8}>
      <main className="min-h-screen bg-background relative">
        <Spotlight size={600} />
        <CrosshairCursor color="rgba(212, 175, 55, 0.6)" size={30} thickness={1} />
        <BlobCursor blobColor="rgba(212, 175, 55, 0.15)" blobSize={300} smoothness={0.08} />
        <ScrollProgress color="var(--primary)" height={3} />
        <DevBanner />
        <Navbar />
        <HeroSection />
        <TechMarquee />
        <ScrollVelocitySection />
        <StatsSection />
        <AboutSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ServicesSection />
        <ContactSection />
        <Footer />
        <FloatingDock />
      </main>
    </ClickSpark>
  )
}

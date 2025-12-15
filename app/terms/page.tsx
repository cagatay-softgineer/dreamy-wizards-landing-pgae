import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteMeta } from "@/data/content"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Dreamy Wizards - Read our terms and conditions for using our services.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-primary/20 bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          <span className="text-primary font-semibold">{siteMeta.brandName}</span>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
            <FileText className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-foreground">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: December 9, 2025</p>
          </div>
        </div>

        <div className="prose prose-invert prose-gold max-w-none space-y-8">
          <section className="glass-card p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using our website and services, you agree to be bound by these Terms of Service. If you
              disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section className="glass-card p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              Dreamy Wizards provides software development services including but not limited to web development, mobile
              app development, API development, and technical consulting. Specific terms for individual projects will be
              outlined in separate agreements.
            </p>
          </section>

          <section className="glass-card p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              Unless otherwise agreed in writing, all intellectual property rights in work created by Dreamy Wizards for
              clients will be transferred to the client upon full payment. Our website content, branding, and
              proprietary tools remain our property.
            </p>
          </section>

          <section className="glass-card p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Client Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Clients agree to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Provide accurate and complete information for projects</li>
              <li>Respond to communications in a timely manner</li>
              <li>Make payments according to agreed terms</li>
              <li>Ensure they have rights to any materials provided to us</li>
            </ul>
          </section>

          <section className="glass-card p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Payment Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              Payment terms, including deposits, milestones, and final payments, will be specified in individual project
              agreements. Late payments may incur additional fees and may result in suspension of services.
            </p>
          </section>

          <section className="glass-card p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              To the maximum extent permitted by law, Dreamy Wizards shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages arising from your use of our services or any related claim.
            </p>
          </section>

          <section className="glass-card p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Confidentiality</h2>
            <p className="text-muted-foreground leading-relaxed">
              Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared
              during the course of our engagement.
            </p>
          </section>

          <section className="glass-card p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              Either party may terminate services with written notice. Upon termination, clients are responsible for
              payment of all work completed up to the termination date.
            </p>
          </section>

          <section className="glass-card p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these terms at any time. Changes will be posted on this page with an
              updated revision date.
            </p>
          </section>

          <section className="glass-card p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these Terms of Service, please contact us at{" "}
              <a href="mailto:hello@dreamywizards.com" className="text-primary hover:underline">
                hello@dreamywizards.com
              </a>
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/">Return to Homepage</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}

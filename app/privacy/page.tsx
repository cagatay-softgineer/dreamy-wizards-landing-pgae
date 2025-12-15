import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteMeta } from "@/data/content"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Dreamy Wizards - Learn how we collect, use, and protect your information.",
}

export default function PrivacyPage() {
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
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-foreground">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: December 9, 2025</p>
          </div>
        </div>

        <div className="prose prose-invert prose-gold max-w-none space-y-8">
          <section className="glass-card p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to Dreamy Wizards. We respect your privacy and are committed to protecting your personal data.
              This privacy policy explains how we collect, use, and safeguard your information when you visit our
              website or use our services.
            </p>
          </section>

          <section className="glass-card p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may collect information you provide directly to us, such as:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Contact information (name, email address) when you reach out to us</li>
              <li>Project details and requirements you share with us</li>
              <li>Communication records between you and our team</li>
              <li>Technical information like IP address, browser type, and device information</li>
            </ul>
          </section>

          <section className="glass-card p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Deliver services and products you request</li>
              <li>Send you updates about our services (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="glass-card p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal data against
              unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the
              Internet is 100% secure.
            </p>
          </section>

          <section className="glass-card p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may use third-party services for analytics (such as Vercel Analytics) that collect anonymous usage data
              to help us understand how visitors use our site. These services have their own privacy policies.
            </p>
          </section>

          <section className="glass-card p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request data portability</li>
            </ul>
          </section>

          <section className="glass-card p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at{" "}
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

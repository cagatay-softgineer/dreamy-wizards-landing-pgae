import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  metadataBase: new URL("https://dreamywizards.com"),
  title: {
    default: "Dreamy Wizards | Crafting Dreamlike Digital Experiences",
    template: "%s | Dreamy Wizards",
  },
  description:
    "Dreamy Wizards is a two-person development team turning complex ideas into polished, production-ready products. We specialize in web apps, mobile apps, APIs, and full-stack development.",
  keywords: [
    "software development",
    "web development",
    "mobile app development",
    "API development",
    "full-stack development",
    "product development",
    "software agency",
    "tech consultancy",
    "Flutter development",
    "React development",
    "Next.js development",
    "Python development",
    "Firebase",
    "cloud solutions",
  ],
  authors: [
    { name: "Muhammet Ali Bulut", url: "https://github.com/MrAliBulut" },
    { name: "Çağatay Alkan", url: "https://www.cagatayalkan.com" },
  ],
  creator: "Dreamy Wizards",
  publisher: "Dreamy Wizards",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dreamywizards.com",
    siteName: "Dreamy Wizards",
    title: "Dreamy Wizards | Crafting Dreamlike Digital Experiences",
    description: "A two-person development team turning complex ideas into polished, production-ready products.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dreamy Wizards - Crafting Dreamlike Digital Experiences",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dreamy Wizards | Crafting Dreamlike Digital Experiences",
    description: "A two-person development team turning complex ideas into polished, production-ready products.",
    images: ["/og-image.png"],
    creator: "@dreamywizards",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "https://raw.githubusercontent.com/Yggbranch/assets/refs/heads/main/DreamyWizards/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "https://raw.githubusercontent.com/Yggbranch/assets/refs/heads/main/DreamyWizards/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://dreamywizards.com",
  },
  category: "technology",
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#D4AF37" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Dreamy Wizards",
              url: "https://dreamywizards.com",
              logo: "https://dreamywizards.com/logo.png",
              description:
                "A two-person development team turning complex ideas into polished, production-ready products.",
              founders: [
                {
                  "@type": "Person",
                  name: "Muhammet Ali Bulut",
                  jobTitle: "Product Manager & Software Engineer",
                },
                {
                  "@type": "Person",
                  name: "Çağatay Alkan",
                  jobTitle: "Software Engineer",
                },
              ],
              sameAs: ["https://github.com/dreamy-wizards", "https://linkedin.com/company/dreamywizards"],
              contactPoint: {
                "@type": "ContactPoint",
                email: "hello@dreamywizards.com",
                contactType: "customer service",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

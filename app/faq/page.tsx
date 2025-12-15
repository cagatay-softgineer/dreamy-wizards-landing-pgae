"use client"
import Link from "next/link"
import { ArrowLeft, HelpCircle, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteMeta } from "@/data/content"
import { useState } from "react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "What services does Dreamy Wizards offer?",
    answer:
      "We offer comprehensive software development services including web application development, mobile app development (iOS & Android), API design and development, cloud solutions, and technical consulting. We specialize in turning complex ideas into polished, production-ready products.",
  },
  {
    question: "How do you handle project pricing?",
    answer:
      "We provide customized quotes based on project scope, complexity, and timeline. After an initial consultation to understand your requirements, we'll provide a detailed proposal with transparent pricing. We offer both fixed-price and time-and-materials arrangements depending on your needs.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a full-featured mobile app could take 2-4 months. During our initial consultation, we'll provide a realistic timeline based on your specific requirements.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "We work with modern technologies including React, Next.js, Flutter, Python, Node.js, Firebase, Google Cloud, AWS, and more. We choose the best technology stack based on your project's specific needs and scalability requirements.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes! We offer ongoing support and maintenance packages to ensure your product continues to run smoothly after launch. This includes bug fixes, security updates, performance optimization, and feature enhancements.",
  },
  {
    question: "How do you communicate during projects?",
    answer:
      "We believe in transparent, regular communication. We use tools like Slack, email, and scheduled video calls for updates. You'll receive regular progress reports and have direct access to our team throughout the project.",
  },
  {
    question: "Can you work with existing codebases?",
    answer:
      "We can work with existing projects to add new features, fix bugs, improve performance, or modernize the technology stack. We'll start with a code review to understand the current state and provide recommendations.",
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Yes, we're happy to sign Non-Disclosure Agreements before discussing your project details. Confidentiality is important to us, and we take the protection of your ideas and business information seriously.",
  },
]

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="glass-card rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-primary/5 transition-colors"
      >
        <span className="text-lg font-medium text-foreground pr-4">{question}</span>
        <ChevronDown
          className={cn("w-5 h-5 text-primary shrink-0 transition-transform duration-300", isOpen && "rotate-180")}
        />
      </button>
      <div
        className={cn("grid transition-all duration-300 ease-in-out", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

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
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-foreground">Frequently Asked Questions</h1>
            <p className="text-muted-foreground">Find answers to common questions about our services</p>
          </div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        <div className="mt-12 glass-card rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Still have questions?</h2>
          <p className="text-muted-foreground mb-6">
            Can&apos;t find what you&apos;re looking for? We&apos;re here to help.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/#contact">Contact Us</Link>
          </Button>
        </div>

        <div className="mt-8 text-center">
          <Button asChild variant="outline" className="border-primary/30 hover:bg-primary/10 bg-transparent">
            <Link href="/">Return to Homepage</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}

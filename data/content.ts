// ============================================================================
// DREAMY WIZARDS - CENTRALIZED CONTENT CONFIGURATION
// ============================================================================
// Edit this file to update all website content without touching layout code.
// ============================================================================

// TypeScript Types
export interface SiteMeta {
  brandName: string
  heroTitle: string
  heroTitleHighlight: string
  heroSubtitle: string
  taglineChips: string[]
  primaryCtaLabel: string
  secondaryCtaLabel: string
  copyrightNotice: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  tags: string[]
  avatarUrl?: string | null
  links: {
    portfolio?: string
    github?: string
    linkedin?: string
  }
}

export interface Project {
  id: string
  name: string
  description: string
  technologies: string[]
  url: string
  githubUrl?: string
  image?: string
}

export interface Service {
  id: string
  icon: "compass" | "server" | "smartphone" | "puzzle"
  title: string
  description: string
}

export interface AboutValue {
  id: string
  icon: "code" | "lightbulb" | "rocket"
  title: string
  description: string
}

export interface ContactConfig {
  email: string
  githubUrl: string
  linkedinUrl: string
  formLabels: {
    name: string
    email: string
    message: string
    submit: string
  }
}

export interface NavLink {
  href: string
  label: string
}

export interface UnderDevelopmentConfig {
  isActive: boolean
  bannerText: string
  badgeText: string
  navBadgeText: string
}

// ============================================================================
// SITE METADATA
// ============================================================================

export const siteMeta: SiteMeta = {
  brandName: "Dreamy Wizards",
  heroTitle: "Crafting Dreamlike",
  heroTitleHighlight: "Digital Experiences.",
  heroSubtitle:
    "Dreamy Wizards is a two-person development team turning complex ideas into polished, production-ready products.",
  taglineChips: ["Premium", "Thoughtful", "Crafted"],
  primaryCtaLabel: "View Our Projects",
  secondaryCtaLabel: "Contact Us",
  copyrightNotice: "© Dreamy Wizards — All rights reserved.",
}

// ============================================================================
// NAVIGATION
// ============================================================================

export const navLinks: NavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "How We Work" },
  { href: "#contact", label: "Contact" },
]

// ============================================================================
// UNDER DEVELOPMENT CONFIGURATION
// ============================================================================

export const underDevelopment: UnderDevelopmentConfig = {
  isActive: true, // Set to false to hide all under-development UI elements
  bannerText: "This site is currently in active development. Some sections and links may be incomplete.",
  badgeText: "Early Access · In Development",
  navBadgeText: "dev",
}

// ============================================================================
// TEAM MEMBERS
// ============================================================================

export const teamMembers: TeamMember[] = [
  {
    id: "muhammet-ali-bulut",
    name: "Muhammet Ali Bulut",
    role: "Product Manager & Software Engineer",
    bio: "Bridges business needs with technical execution. Specializes in product planning, roadmapping, and ensuring ideas transform into user-focused solutions.",
    tags: ["Product", "Planning", "UX", "Agile"],
    avatarUrl: "https://avatars.githubusercontent.com/u/95712617?v=4",
    links: {
      portfolio: null,
      github: "https://github.com/MrAliBulut",
      linkedin: "https://www.linkedin.com/in/mralibulut/",
    },
  },
  {
    id: "cagatay",
    name: "Çağatay Alkan",
    role: "Software Engineer / Developer",
    bio: "Passionate about clean architecture and building robust systems. Focuses on hands-on development, system design, and technical implementation.",
    tags: ["Full-Stack", "Architecture", "APIs", "DevOps"],
    avatarUrl: "https://avatars.githubusercontent.com/u/52183607?v=4",
    links: {
      portfolio: "https://www.cagatayalkan.com/",
      github: "https://github.com/cagatay-softgineer",
      linkedin: "https://www.linkedin.com/in/cagatay-softgineer/",
    },
  },
]

// ============================================================================
// ABOUT SECTION - VALUES
// ============================================================================

export const aboutIntro =
  "We design, architect, and build software with a strong focus on planning, product thinking, and technical quality. Our small team allows for deep collaboration and attention to every detail of your project."

export const aboutValues: AboutValue[] = [
  {
    id: "excellence",
    icon: "code",
    title: "Technical Excellence",
    description: "Clean, maintainable code built to last",
  },
  {
    id: "thinking",
    icon: "lightbulb",
    title: "Product Thinking",
    description: "Solutions designed around real user needs",
  },
  {
    id: "delivery",
    icon: "rocket",
    title: "Rapid Delivery",
    description: "From concept to production, efficiently",
  },
]

// ============================================================================
// PROJECTS
// ============================================================================

export const projectsIntro =
  "Here are some of our key works. Each project represents our commitment to quality, innovation, and delivering real value. This list will continue to grow over time."

export const projects: Project[] = [
  {
    id: "pomodoro-timer",
    name: "Aurevia",
    description:
      "Aurevia is a comprehensive productivity application designed to help users implement the Pomodoro Technique   effectively. It offers customizable work and break sessions, and it uniquely integrates personalized music  recommendations to enhance focus during work periods. Leveraging multiple APIs—including Spotify, Apple Music, and   Google API services—the app curates dynamic playlists that align with individual work rhythms. Built with Flutter for   a seamless cross-platform experience and powered by Python on the backend with Firebase and Google Cloud for robust   real-time data management and scalability, Aurevia represents an innovative approach to modern productivity.",
    technologies: ["Python", "Firebase", "Google Cloud", "Spotify API", "Google API", "Apple Music API", "Flutter"],
    url: "https://aurevia.yggbranch.dev/",
    githubUrl: null,
    image: "https://raw.githubusercontent.com/Yggbranch/assets/refs/heads/main/Aurevia/WebP/Asset%201_1%404x.webp",
  },
  {
    id: "itadaki-qr-kds",
    name: "Itadaki",
    description:
      "Itadaki is a polite, QR-based restaurant operating system designed around the motto “Emeğe Saygı, Servise Düzen.” It connects three core surfaces—QR menu for guests, a Kitchen Display System for the back-of-house team, and a floor panel for waiters—to keep every step of the service flow organized and calm. Guests scan a QR code to browse the menu and place orders, the kitchen sees clean, prioritized tickets instead of paper chaos, and waiters track table status and gentle call requests in real time. Built on Firebase for real-time data and scalability and implemented with modern TypeScript/React tooling, Itadaki is tailored for Turkish restaurant culture while remaining ready to scale as a multi-tenant SaaS platform.",
    technologies: ["Firebase", "Cloud Functions", "TypeScript", "React", "Next.js", "Tailwind CSS"],
    url: "https://itadaki.dreamywizards.com",
    githubUrl: null, // TODO: add repo link when public
    image: "https://raw.githubusercontent.com/Yggbranch/assets/refs/heads/main/Itadaki/WebP/Logo%404x.webp", // TODO: replace with final asset path
  },
]

// ============================================================================
// SERVICES / HOW WE WORK
// ============================================================================

export const servicesIntro =
  "We combine strong product planning with solid engineering. From initial concept to deployment, we provide end-to-end development services tailored to your needs."

export const services: Service[] = [
  {
    id: "planning",
    icon: "compass",
    title: "Product Planning & Roadmapping",
    description: "Strategic planning and system design that aligns technology with your business goals and vision.",
  },
  {
    id: "backend",
    icon: "server",
    title: "Backend & API Development",
    description: "Scalable, secure backend systems and well-documented RESTful or GraphQL APIs built for growth.",
  },
  {
    id: "apps",
    icon: "smartphone",
    title: "Mobile & Web App Development",
    description: "Beautiful, responsive applications for web, iOS, and Android that users love to interact with.",
  },
  {
    id: "integrations",
    icon: "puzzle",
    title: "Third-Party Integrations",
    description: "Seamless integration with Spotify, Google APIs, payment gateways, analytics, CRMs, and more.",
  },
]

// ============================================================================
// CONTACT CONFIGURATION
// ============================================================================

export const contactConfig: ContactConfig = {
  email: "hello@dreamywizards.com",
  githubUrl: "https://github.com/dreamy-wizards",
  linkedinUrl: "https://linkedin.com/company/dreamywizards",
  formLabels: {
    name: "Name",
    email: "Email",
    message: "Message",
    submit: "Send Message",
  },
}

export const contactIntro =
  "Got an idea you'd like to bring to life? Let's talk. We're always excited to work on new projects and challenges."

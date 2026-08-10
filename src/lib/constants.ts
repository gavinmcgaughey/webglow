export const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
] as const;

export const BOOKING_URL = "#cta";

export const PACKAGES = [
  {
    id: "starter",
    name: "Starter Site",
    price: "$2,500",
    description:
      "A polished, conversion-ready website for agents and service pros ready to look professional online.",
    features: [
      "5-page custom website",
      "Mobile-first responsive design",
      "Lead capture form + basic SEO",
      "2 revision rounds",
      "Launch training session",
      "2-week delivery",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    id: "growth",
    name: "Growth Site",
    price: "$4,500",
    description:
      "Our most popular package — built to turn visitors into booked appointments and closed deals.",
    features: [
      "Everything in Starter",
      "Up to 10 pages + blog setup",
      "Advanced lead funnels & CTAs",
      "Property / service showcases",
      "Speed & Core Web Vitals optimized",
      "Analytics + conversion tracking",
      "3-week delivery",
    ],
    cta: "Choose Growth",
    popular: true,
  },
  {
    id: "full",
    name: "Full System",
    price: "$7,500+",
    description:
      "A complete digital presence — website, automations, and systems that keep working after launch.",
    features: [
      "Everything in Growth",
      "Custom integrations (CRM, calendars)",
      "Email / SMS lead notifications",
      "Landing pages for campaigns",
      "Brand kit refinements",
      "Priority support for 30 days",
      "Custom timeline",
    ],
    cta: "Talk to Us",
    popular: false,
  },
] as const;

export const CARE_PLAN = {
  name: "Website Care Plan",
  price: "$149",
  period: "/month",
  description:
    "Keep your site fast, secure, and converting. Hosting support, updates, minor edits, and monthly performance check-ins.",
  features: [
    "Hosting monitoring & updates",
    "Security & backup oversight",
    "Up to 2 content edits / month",
    "Monthly performance report",
    "Priority email support",
  ],
} as const;

export const PROJECTS = [
  {
    id: "incompass",
    title: "RE/MAX Incompass",
    category: "Real Estate",
    description:
      "A premium website for a RE/MAX team serving Greater Cincinnati (West Chester, Trenton, and Eaton). Clean design, strong local focus, and clear paths for buyers and sellers to get in touch.",
    result: "Professional online presence built for a growing real estate team",
    featured: true,
    accent: "from-blue-500/20 to-sky-400/10",
    mockLabel: "RE/MAX Incompass",
  },
  {
    id: "hvac",
    title: "Summit Comfort HVAC",
    category: "Home Services",
    description:
      "Service-area pages, emergency CTAs, and review highlights designed to capture local search traffic and phone calls.",
    result: "Booked service calls up 40%",
    featured: false,
    accent: "from-amber-500/15 to-orange-400/10",
    mockLabel: "HVAC Service Site",
  },
  {
    id: "dental",
    title: "Brightside Dental",
    category: "Local Practice",
    description:
      "Warm, trustworthy design with online scheduling and treatment pages that reduce phone tag and fill the calendar.",
    result: "New patient bookings +55%",
    featured: false,
    accent: "from-emerald-500/15 to-teal-400/10",
    mockLabel: "Dental Practice Site",
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Strategy Call",
    description:
      "We learn your goals, ideal clients, and what “success” looks like — then map the pages and offers that will get you there.",
  },
  {
    step: "02",
    title: "Design & Build",
    description:
      "We design a clean, premium experience and build it fast with AI-assisted development — without sacrificing quality or conversion detail.",
  },
  {
    step: "03",
    title: "Launch & Train",
    description:
      "We launch with SEO foundations, connect analytics, and walk you through how to update content and capture leads.",
  },
  {
    step: "04",
    title: "Optional Ongoing Care",
    description:
      "Stay sharp with our monthly care plan: updates, small edits, performance checks, and a partner who knows your site.",
  },
] as const;

export const BENEFITS = [
  {
    title: "Speed without shortcuts",
    description:
      "AI-assisted development means faster delivery — with the craft and polish of a premium studio, not a template mill.",
  },
  {
    title: "Built to convert",
    description:
      "Every page is structured
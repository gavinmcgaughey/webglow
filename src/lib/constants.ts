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
    description: "A polished, conversion-ready website for agents and service pros ready to look professional online.",
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
    description: "Our most popular package — built to turn visitors into booked appointments and closed deals.",
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
    description: "A complete digital presence — website, automations, and systems that keep working after launch.",
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
  description: "Keep your site fast, secure, and converting. Hosting support, updates, minor edits, and monthly performance check-ins.",
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
    description: "A premium website for a RE/MAX team serving Greater Cincinnati (West Chester, Trenton, and Eaton). Clean design, strong local focus, and clear paths for buyers and sellers to get in touch.",
    result: "Professional online presence built for a growing real estate team",
    featured: true,
    accent: "from-blue-500/20 to-sky-400/10",
    mockLabel: "RE/MAX Incompass",
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Strategy Call",
    description: "We learn your goals, ideal clients, and what success looks like — then map the pages and offers that will get you there.",
  },
  {
    step: "02",
    title: "Design & Build",
    description: "We design a clean, premium experience and build it fast with AI-assisted development — without sacrificing quality or conversion detail.",
  },
  {
    step: "03",
    title: "Launch & Train",
    description: "We launch with SEO foundations, connect analytics, and walk you through how to update content and capture leads.",
  },
  {
    step: "04",
    title: "Optional Ongoing Care",
    description: "Stay sharp with our monthly care plan: updates, small edits, performance checks, and a partner who knows your site.",
  },
] as const;

export const BENEFITS = [
  {
    title: "Speed without shortcuts",
    description: "AI-assisted development means faster delivery — with the craft and polish of a premium studio, not a template mill.",
  },
  {
    title: "Built to convert",
    description: "Every page is structured around clear offers, trust signals, and calls-to-action that turn traffic into real leads.",
  },
  {
    title: "Niche expertise",
    description: "We specialize in real estate agents and local service businesses. We know what your buyers and callers need to see.",
  },
  {
    title: "Transparent packages",
    description: "Clear scopes, clear pricing, no mystery retainers. You always know what you’re getting and when you’ll get it.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "How long does a typical project take?",
    answer: "Starter sites usually launch in about 2 weeks. Growth sites take around 3 weeks. Full System projects depend on integrations and scope — we’ll give you a clear timeline on the strategy call.",
  },
  {
    question: "Do I need to provide content and photos?",
    answer: "We’ll guide you with a simple content checklist. Many clients already have photos and brand basics; if not, we can help structure copy and recommend what to capture.",
  },
  {
    question: "Will my website work on phones and tablets?",
    answer: "Absolutely. Every WebGlow site is mobile-first. Most of your visitors will be on their phones — we design for that from day one.",
  },
  {
    question: "Can you connect my site to my CRM or calendar?",
    answer: "Yes. Growth and Full System packages include conversion tracking and common integrations (calendars, CRMs, form tools).",
  },
  {
    question: "What’s included in the Website Care Plan?",
    answer: "Hosting oversight, security and backup monitoring, up to two content edits per month, a monthly performance check-in, and priority support.",
  },
  {
    question: "Do you only work with real estate and local services?",
    answer: "That’s our focus — because deep niche knowledge leads to better results. If you’re adjacent, we’re likely a great fit.",
  },
  {
    question: "What happens on the free strategy call?",
    answer: "A focused 30-minute conversation about your goals, current site (if any), and ideal package. No hard sell.",
  },
  {
    question: "Who owns the website after launch?",
    answer: "You do. We hand over access, documentation, and training so you’re never locked in.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote: "Finally a site that looks as good as my listings and actually brings in inquiries.",
    name: "Sarah M.",
    role: "Real Estate Agent",
  },
  {
    quote: "Clear pricing, fast turnaround, and our phones ring more. That’s all I needed.",
    name: "Marcus T.",
    role: "HVAC Owner",
  },
  {
    quote: "Professional without the agency runaround. They just got it done.",
    name: "Elena R.",
    role: "Practice Manager",
  },
] as const;
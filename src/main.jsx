import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Check,
  Code2,
  Figma,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  MousePointer2,
  Wand2,
  X
} from "lucide-react";
import "./styles.css";

const profile = {
  name: "Santiago Pirez Velasco",
  title: "Senior Director, Product & Design",
  location: "Maine",
  email: "santiagopirezvelasco@gmail.com",
  linkedin: "https://www.linkedin.com/in/santiago-pirez-22980b7a/",
  site: "https://www.santiagopirezvelasco.com/",
  intro:
    "I lead North American product and design strategy at WEX, shaping experiences for 500K+ monthly customers across fintech, payments, mobility, and SaaS. Outside work, I build my own products with Tiger Mind Labs and Codex."
};

const projects = [
  {
    id: "tml",
    title: "Tiger Mind Labs",
    year: "2026",
    type: "Founder-led studio",
    category: "Built with Codex",
    accent: "violet",
    platform: ["Website", "Product studio", "React"],
    projectUrl: "https://tigermindlabs.com/",
    previewImage: "https://tigermindlabs.com/city-poc/tigermindlabs-city-hero.png",
    previewAlt: "TigerMindLabs city product portfolio preview",
    summary:
      "A refreshed home for the company I co-founded with Kyle Beard, where we explore ideas, launch apps, and turn hobbies into polished digital products.",
    role: "Co-founder with Kyle Beard, product designer, builder",
    timeline: "Ongoing",
    challenge:
      "The studio needed to feel more like a living body of work than a list of side projects, while still making each product easy to inspect.",
    solution:
      "I designed the experience around small product worlds: direct paths into apps, compact launch stories, and an editorial feel that connects the work back to curiosity and craft.",
    process: [
      "Defined the studio narrative around the company Kyle Beard and I are building together",
      "Built reusable React sections for product cards, launch proof, and case-study expansion",
      "Created a scalable content model so new experiments can be added without redesigning the site"
    ],
    skills: ["Founder mindset", "React", "Portfolio strategy", "Product storytelling"],
    outcomes: [
      "Clearer product storytelling across PaceChase, Hackers Golf, CityScout, Milo, and BoxFox",
      "Reusable structure for adding new Codex-built launches quickly",
      "A sharper bridge between personal portfolio work and the studio brand"
    ],
    metrics: ["Studio", "Self-built", "Codex workflow"],
    badges: ["Co-founded", "Built with Codex", "Shipped product"],
    hiringPath: "Self-built products",
    builderNotes: [
      "Co-founded Tiger Mind Labs with Kyle Beard as a place to turn product instincts, hobbies, and new ideas into real shipped experiences.",
      "Designed and built the portfolio structure around product worlds, launch proof, and clear paths into each live project.",
      "Codex is part of the operating rhythm: faster scaffolding, sharper iteration, and more room to test ideas while preserving the craft."
    ],
    featured: true
  },
  {
    id: "milo",
    title: "Milo",
    year: "2026",
    type: "Shared agenda app",
    category: "Built with Codex",
    accent: "emerald",
    platform: ["Live web app", "iOS App Store", "Product Hunt"],
    projectUrl: "https://tigermindlabs.com/milo/",
    previewImage: "/project-images/milo-product-preview.png",
    previewAlt: "Milo shared agenda product page and live app preview",
    summary:
      "A live agenda app for creating shared calendars, adding events, switching between list and calendar views, and keeping everyday plans in one place.",
    role: "Product designer and solo builder with Codex",
    timeline: "Live web app / App Store",
    challenge:
      "Most calendars are optimized for heavy scheduling, but daily coordination for couples, families, and small groups needs shared visibility, fast edits, and calmer context.",
    solution:
      "Milo focuses on shared agendas, list and month calendar views, event categories, and a live web/app experience so everyone can understand the same plan without managing a heavyweight calendar.",
    process: [
      "Mapped common coordination moments for couples, families, and small groups",
      "Prioritized shared agendas, calendar views, and event categories as the core product architecture",
      "Used Codex to move from product concept into a live web app, iOS release, and Product Hunt launch story"
    ],
    skills: ["Solo product build", "Mobile UX", "Shared planning", "Codex workflow"],
    outcomes: [
      "Created a live web app preview that lets visitors try the real Milo experience",
      "Shipped the iOS App Store presence and Product Hunt launch path through TigerMindLabs",
      "Built a calm product language for shared planning, day status, and lightweight calendar context"
    ],
    metrics: ["Live web app", "App Store", "Product Hunt"],
    badges: ["Built with Codex", "Shipped product", "Self-built"],
    hiringPath: "Self-built products",
    builderNotes: [
      "Designed the core shared-agenda model, including events, categories, list/calendar views, and the calmer planning language.",
      "Built the web app and launch preview with Codex so people can experience the product instead of only reading about it.",
      "Learned how to simplify a broad calendar problem into one useful promise: shared visibility without calendar heaviness."
    ],
    featured: true
  },
  {
    id: "statements-transactions-payments",
    title: "Billing, Statements, Transactions & Payments",
    year: "2025",
    type: "Enterprise UX initiative",
    category: "WEX",
    accent: "orange",
    platform: ["Web", "Mobile iOS", "Prototype"],
    previewImage: "/project-images/placeholders/wex-finance-systems.svg",
    previewAlt: "Abstract product system visual for billing, statements, transactions, and payments",
    summary:
      "A redesign of high-traffic financial workflows across billing, statements, transactions, and payments, focused on clarity, support reduction, and retention.",
    role: "Product Design Director",
    timeline: "Ongoing",
    challenge:
      "Billing, transactions, statements, and payment flows served a large customer base but had fragmented formats, unclear state, and high customer-service pressure.",
    solution:
      "I connected product, design, research, analytics, customer service, and commercial priorities to focus investment on the experiences with the highest customer and business impact.",
    process: [
      "Audited billing, statements, transactions, and payments across high-volume customer workflows",
      "Partnered with Product, Engineering, Data, Operations, Commercial, and Customer Service to connect UX decisions to measurable outcomes",
      "Used research, analytics, and prototyping to make the future workflow concrete enough for roadmap alignment"
    ],
    skills: ["Product strategy", "Enterprise UX", "Service mapping", "Executive alignment"],
    outcomes: [
      "Focused product, design, and research investment on the highest-traffic customer experiences",
      "Contributed to a 20% reduction in customer service calls while improving retention and NPS",
      "Connected roadmap decisions to adoption, retention, customer satisfaction, and commercial outcomes"
    ],
    metrics: ["500K+ monthly customers", "20% fewer service calls", "Retention + NPS"],
    badges: ["Led at WEX", "Leadership case study", "500K+ customers"],
    hiringPath: "Leadership case studies",
    caseVisual: {
      label: "Service reduction system",
      metric: "20%",
      metricLabel: "fewer service calls",
      nodes: ["Billing", "Statements", "Transactions", "Payments"],
      footer: "Clearer states, better money movement, stronger customer confidence"
    },
    featured: true
  },
  {
    id: "wexpert",
    title: "WEXpert AI Chatbot",
    year: "2024",
    type: "AI product concept",
    category: "WEX",
    accent: "rose",
    platform: ["Web", "Mobile iOS", "OpenAI API"],
    previewImage: "/project-images/placeholders/wexpert-ai-flow.svg",
    previewAlt: "Abstract conversational AI product visual",
    summary:
      "A conversational AI experience that helps small businesses find personalized WEX product recommendations without rigid forms.",
    role: "Lead UX Designer",
    timeline: "48-hour hackathon",
    challenge:
      "Small business users struggled to understand which WEX services fit their needs, and the traditional discovery experience constrained them to narrow choices.",
    solution:
      "The team prototyped a natural-language chatbot that interpreted business needs, generated tailored recommendations, and presented WEX as a connected ecosystem.",
    process: [
      "Framed a small-business discovery journey that could move beyond rigid form logic",
      "Designed conversational paths for qualifying needs and explaining product recommendations",
      "Partnered in a 48-hour build using OpenAI API concepts to validate the interaction model"
    ],
    skills: ["AI product design", "Conversation design", "Rapid prototyping", "User testing"],
    outcomes: [
      "6/6 participants were excited by the conversational concept",
      "5/6 participants preferred the chatbot over traditional forms",
      "100% of participants reported satisfaction with the recommendation experience"
    ],
    metrics: ["OpenAI API", "Python", "100% satisfaction"],
    badges: ["Led at WEX", "AI prototype", "100% satisfaction"],
    hiringPath: "Leadership case studies",
    caseVisual: {
      label: "Recommendation engine",
      metric: "100%",
      metricLabel: "satisfaction",
      nodes: ["Business need", "Conversational intake", "Product fit", "Clear answer"],
      footer: "A 48-hour prototype that made discovery feel more human"
    },
    featured: true
  },
  {
    id: "purchase-controls",
    title: "Purchase Controls Redesign",
    year: "2024",
    type: "Fleet management UX",
    category: "WEX",
    accent: "cyan",
    platform: ["Web", "Mobile iOS", "Maze"],
    previewImage: "/project-images/placeholders/purchase-controls-flow.svg",
    previewAlt: "Abstract workflow visual for purchase controls",
    summary:
      "A redesign of complex purchase-control experiences that helped customers manage card behavior with more clarity, confidence, and adoption.",
    role: "Lead UX Designer",
    timeline: "24 weeks",
    challenge:
      "Customers faced a heavy control setup process with weak personalization, disconnected card assignments, and uncertain completion language.",
    solution:
      "I tested an ideal one-step flow, introduced visual card assignments, simplified alerts, and then adapted the design for delivery constraints.",
    process: [
      "Evaluated the existing six-step purchase-control flow and identified the highest-friction decisions",
      "Tested a simplified one-step concept to learn what users actually needed to feel confident",
      "Translated findings into a shippable design that balanced ideal UX with engineering constraints"
    ],
    skills: ["Workflow simplification", "Maze testing", "Fleet UX", "Interaction design"],
    outcomes: [
      "Contributed to a 25% YoY increase in adoption across Billing and Purchase Controls work",
      "User testing showed a 35% increase in task completion",
      "Card assignment clarity became visible directly in the flow"
    ],
    metrics: ["25% YoY adoption", "+35% task completion", "Fleet controls"],
    badges: ["Led at WEX", "Leadership case study", "25% adoption lift"],
    hiringPath: "Leadership case studies",
    caseVisual: {
      label: "Workflow simplification",
      metric: "25%",
      metricLabel: "YoY adoption lift",
      nodes: ["Policy", "Cards", "Alerts", "Confirm"],
      footer: "Reduced setup ambiguity while keeping enterprise controls intact"
    },
    featured: true
  },
  {
    id: "hackers-golf",
    title: "Hackers Golf",
    year: "2024",
    type: "Golf companion app",
    category: "Tiger Mind Labs",
    accent: "lime",
    platform: ["Mobile app", "Game scoring", "App Store"],
    projectUrl: "https://tigermindlabs.com/hackers-golf/",
    previewImage: "/project-images/hackers-golf-product-preview.png",
    previewAlt: "Hackers Golf product page and mobile app preview",
    summary:
      "A playful golf app that makes rounds more social through game packs, scoring, leaderboards, and cart-mode rules.",
    role: "Product designer, co-builder",
    timeline: "Launched",
    challenge:
      "Golfers wanted a way to make casual rounds more engaging without adding complexity to scoring or slowing down play.",
    solution:
      "The app uses player setup, game packs, card rules, and quick scoring interactions to keep the group experience fun and easy to follow.",
    process: [
      "Modeled casual golf-game rules into lightweight setup, scoring, and leaderboard flows",
      "Designed card and cart-mode interactions for fast use during an active round",
      "Iterated the product language so the app felt playful without slowing down the group"
    ],
    skills: ["Mobile product design", "Game mechanics", "Scoring UX", "App launch"],
    outcomes: [
      "Designed interactive flows for party setup, game pack browsing, and card reading",
      "Created a playful product language that still works on the course",
      "Launched through Tiger Mind Labs with continued iteration after release"
    ],
    metrics: ["App Store", "Game packs", "Cart mode"],
    badges: ["Co-built", "Shipped product", "Tiger Mind Labs"],
    hiringPath: "Self-built products",
    builderNotes: [
      "Turned casual golf rules into a mobile product system for setup, scoring, leaderboards, and cart-mode moments.",
      "Worked through the tension between game energy and on-course speed, keeping interactions short enough for real rounds.",
      "Used the launch as a foundation for spin-off product thinking, including Cards of Chaos."
    ]
  },
  {
    id: "cards-of-chaos",
    title: "Cards of Chaos",
    year: "2026",
    type: "Golf card game",
    category: "Built with Codex",
    accent: "lime",
    platform: ["iOS app", "Golf cards", "App Store"],
    projectUrl: "/cardsofchaos/",
    previewImage: "/project-images/cards-of-chaos/draw-card-promo.jpg",
    previewAlt: "Cards of Chaos draw-card mobile product promo",
    summary:
      "A fast, unpredictable golf companion from the Hackers Golf family where players draw cards, trigger wild round twists, and keep the group laughing.",
    role: "Product designer and builder",
    timeline: "Latest launch",
    challenge:
      "Casual golf rounds can feel familiar after the first few holes, and most scoring apps are too serious to create playful group moments.",
    solution:
      "Cards of Chaos turns the round into a lightweight card game: draw between holes, reveal a twist, and add just enough unpredictability without slowing play.",
    process: [
      "Pulled the product out of the Hackers Golf universe into a simpler standalone game loop",
      "Designed the core deck, round-twist, and group-energy moments around fast tee-box decisions",
      "Used Codex to quickly shape the product page, app preview, launch narrative, and reusable product patterns"
    ],
    skills: ["Game mechanics", "Mobile product design", "Codex workflow", "Launch storytelling"],
    outcomes: [
      "Created a standalone product story for the Hackers Golf family",
      "Focused the experience on a dead-simple draw-card action that groups can understand instantly",
      "Prepared the App Store path with a sharper preview of the product's personality"
    ],
    metrics: ["App Store", "Golf cards", "Hackers Golf family"],
    badges: ["Built with Codex", "Shipped product", "App Store"],
    hiringPath: "Self-built products",
    builderNotes: [
      "Built the product around one fast loop: start a round, pick a deck, draw a twist, and keep the group moving.",
      "Designed the mobile screens, deck economy, card reveal, live rounds, App Store narrative, and product page direction.",
      "Used Codex to accelerate the product page and keep the story visual, launchable, and easy to keep improving."
    ]
  },
  {
    id: "pace-chase",
    title: "PaceChase",
    year: "2024",
    type: "Athlete pace tool",
    category: "Tiger Mind Labs",
    accent: "blue",
    platform: ["Mobile app", "Running", "App Store"],
    projectUrl: "https://tigermindlabs.com/pacechase/",
    previewImage: "/project-images/pacechase-product-preview.png",
    previewAlt: "PaceChase race strategy product page and mobile app preview",
    summary:
      "A pace-tracking and planning app for runners and athletes who need fast splits, finish predictions, and race-day confidence.",
    role: "Product designer, co-builder",
    timeline: "Launched",
    challenge:
      "Athletes needed a simpler way to calculate pace, forecast finishes, and understand split strategy without spreadsheet friction.",
    solution:
      "We designed a mobile-first experience around quick pace calculations, race modes, split strategy, and easy-to-read performance views.",
    process: [
      "Translated pace, distance, and finish-time math into simple athlete-facing calculators",
      "Created modes for running, swimming, triathlon, HYROX, and split planning",
      "Shaped the interface around fast input, readable outputs, and race-day confidence"
    ],
    skills: ["Athlete tools", "Mobile UX", "Calculator UX", "Product Hunt launch"],
    outcomes: [
      "Built a clear flow for finding pace and predicting finish times",
      "Created race-specific modes across running, swimming, triathlon, HYROX, and splits",
      "Launched publicly and continued refining from real athlete usage"
    ],
    metrics: ["Race tools", "Splits", "Product Hunt"],
    badges: ["Co-built", "Shipped product", "Tiger Mind Labs"],
    hiringPath: "Self-built products",
    builderNotes: [
      "Translated pace math into quick, readable product flows for athletes who need answers before and during training.",
      "Designed modes that keep different sports under one simple calculation language instead of fragmenting the experience.",
      "Focused the launch story on confidence: what pace means, where it gets you, and how to adjust."
    ]
  },
  {
    id: "city-scout",
    title: "CityScout",
    year: "2023",
    type: "Local discovery product",
    category: "Tiger Mind Labs",
    accent: "amber",
    platform: ["Web", "Mobile prototype"],
    projectUrl: "https://tigermindlabs.com/cityscout/",
    previewImage: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cfd8a634-fd37-4e68-a873-5e3ae2e6f012_320w.png",
    previewFit: "contain",
    previewAlt: "CityScout app icon for curated city guides",
    summary:
      "A local discovery concept for finding food, drinks, and entertainment through curated, accessible neighborhood information.",
    role: "Product designer",
    timeline: "Prototype",
    challenge:
      "Urban explorers needed a more curated way to discover local venues without bouncing across generic maps, lists, and review sites.",
    solution:
      "The experience prioritizes clear search, curated listings, and a mobile-friendly discovery path for local food, drink, and entertainment.",
    process: [
      "Mapped the local discovery journey from broad interest to specific venue choice",
      "Designed mobile-first search, listing, and detail patterns for fast comparison",
      "Used prototype feedback to refine information hierarchy and content presentation"
    ],
    skills: ["Discovery UX", "Figma prototyping", "Information architecture", "Mobile web"],
    outcomes: [
      "Mapped user needs for urban discovery and venue exploration",
      "Designed wireframes and prototypes in Figma",
      "Used testing feedback to improve search and content presentation"
    ],
    metrics: ["Discovery", "Figma", "Prototype"],
    badges: ["Product concept", "Tiger Mind Labs", "Prototype"],
    hiringPath: "Self-built products",
    builderNotes: [
      "Explored a curated discovery model for people choosing where to go without scanning generic maps and review lists.",
      "Designed the information architecture around quick comparison: neighborhood, vibe, category, and venue confidence.",
      "Used the concept to practice product framing at the intersection of local search, curation, and mobile decision-making."
    ]
  },
  {
    id: "kris-goyri",
    title: "Kris Goyri",
    year: "2019-2025",
    type: "Fashion commerce",
    category: "Client work",
    accent: "pink",
    platform: ["Shopify", "Web design"],
    projectUrl: "https://krisgoyri.com/",
    previewImage: "https://krisgoyri.com/cdn/shop/files/KG_Logo_Black.png",
    previewFit: "contain",
    previewAlt: "Kris Goyri fashion commerce brand mark",
    summary:
      "A long-running Shopify commerce partnership with a fashion brand, supporting seasonal updates, strong imagery, and clear product storytelling from 2019 to 2025.",
    role: "Designer and web builder",
    timeline: "2019-2025",
    challenge:
      "The brand needed an ecommerce presence that could stay current with collections while preserving a polished, premium shopping experience.",
    solution:
      "Across several years, I worked with Shopify structure, collection content, responsive layouts, and quality assurance to keep the site fresh and shoppable.",
    process: [
      "Maintained seasonal collection updates from 2019 through 2025 while protecting the premium brand experience",
      "Balanced lookbook storytelling with practical commerce paths and responsive QA",
      "Worked within Shopify constraints to keep the site current and shoppable"
    ],
    skills: ["Shopify", "Responsive QA", "Commerce UX", "Visual design"],
    outcomes: [
      "Supported seasonal product and content updates across a multi-year relationship",
      "Improved visual storytelling through lookbook-style commerce pages",
      "Maintained cross-device functionality and brand consistency"
    ],
    metrics: ["2019-2025", "Shopify", "Fashion"],
    badges: ["Client work", "Shopify", "2019-2025"],
    hiringPath: "Client / brand work"
  },
  {
    id: "boxfox",
    title: "BoxFox",
    year: "2026",
    type: "Fitness builder",
    category: "Built with Codex",
    accent: "red",
    platform: ["Web app", "Workout builder"],
    projectUrl: "https://tigermindlabs.com/boxfox/",
    previewImage: "/project-images/boxfox-product-preview.png",
    previewAlt: "BoxFox workout builder product page and mobile app preview",
    summary:
      "A training and workout-building product experiment focused on fast programming, clear rounds, and useful workout previews.",
    role: "Solo builder",
    timeline: "In progress",
    challenge:
      "Fitness programming tools often make simple session planning feel slower than writing it down by hand.",
    solution:
      "BoxFox explores a fast builder flow for AMRAPs, intervals, movement blocks, and shareable workout previews.",
    process: [
      "Defined a compact workout-building model for rounds, intervals, movements, and previews",
      "Built the interface as a Codex-powered product experiment for rapid iteration",
      "Focused the UI on fast programming for coaches and athletes instead of heavy admin"
    ],
    skills: ["Solo build", "Fitness UX", "React", "Product experimentation"],
    outcomes: [
      "Built as part of the newer Codex-powered product run",
      "Established a compact UI language for workout creation",
      "Designed for iteration around coaches and athletes"
    ],
    metrics: ["Workout builder", "AMRAP", "Codex build"],
    badges: ["Built with Codex", "Product experiment", "Tiger Mind Labs"],
    hiringPath: "Self-built products",
    builderNotes: [
      "Defined a lightweight programming model for rounds, intervals, movements, and shareable workout previews.",
      "Built the interface as a fast Codex-powered product experiment so the concept could be inspected, not imagined.",
      "Used the project to sharpen a key product instinct: make the useful path faster than the workaround."
    ]
  }
];

const projectDetailVisuals = {
  tml: [
    {
      title: "Studio map",
      caption: "A home base that connects product experiments, founder story, and live launches.",
      meta: "Brand system",
      type: "studio",
      image: "https://tigermindlabs.com/city-poc/tigermindlabs-city-hero.png",
      imageAlt: "Isometric TigerMindLabs city with product neighborhoods"
    },
    {
      title: "Product worlds",
      caption: "Each app gets a quick path into the product instead of hiding inside a portfolio grid.",
      meta: "Launch paths",
      type: "dashboard"
    },
    {
      title: "Iteration loop",
      caption: "A structure that makes it easy to add the next Codex-built experiment.",
      meta: "Scalable content",
      type: "system"
    }
  ],
  milo: [
    {
      title: "Live product preview",
      caption: "The product page now lets people try the real Milo experience directly in a phone frame.",
      meta: "Live web app",
      type: "agenda",
      image: "/project-images/milo-product-preview.png",
      imageAlt: "Milo product page with shared agenda feature preview"
    },
    {
      title: "Shared agendas",
      caption: "Shared calendars, event categories, and list/month views keep everyone oriented around the same plan.",
      meta: "Core flow",
      type: "mobile"
    },
    {
      title: "Less coordination drag",
      caption: "Built around the daily question: what do we need to see, remember, and update together?",
      meta: "Customer problem",
      type: "system"
    }
  ],
  "statements-transactions-payments": [
    {
      title: "Unified money view",
      caption: "Fragmented statements, transactions, and payments brought into one clearer system.",
      meta: "Finance UX",
      type: "finance"
    },
    {
      title: "Support pressure",
      caption: "Focused on the workflows that created repeated confusion and service volume.",
      meta: "Risk map",
      type: "dashboard"
    },
    {
      title: "Prototype alignment",
      caption: "A future-state flow that let teams test, train, and align around the same model.",
      meta: "Text-to-code",
      type: "system"
    }
  ],
  wexpert: [
    {
      title: "Business discovery",
      caption: "A conversational path for small businesses that did not know where to start.",
      meta: "AI guide",
      type: "chat"
    },
    {
      title: "Recommendation logic",
      caption: "Needs-based prompts turned rigid product selection into a guided dialogue.",
      meta: "Personalization",
      type: "dashboard"
    },
    {
      title: "Ecosystem answer",
      caption: "The solution reframed WEX as a connected set of services, not disconnected forms.",
      meta: "Concept test",
      type: "system"
    }
  ],
  "purchase-controls": [
    {
      title: "Six steps to one decision",
      caption: "A dense control flow simplified around the core user decision.",
      meta: "Workflow",
      type: "controls"
    },
    {
      title: "Card clarity",
      caption: "Visual assignment patterns helped users understand what would actually change.",
      meta: "Fleet UX",
      type: "dashboard"
    },
    {
      title: "Confidence language",
      caption: "Completion states and alerts were reshaped to reduce uncertainty.",
      meta: "Task success",
      type: "system"
    }
  ],
  "hackers-golf": [
    {
      title: "Game lobby",
      caption: "The live product story shows the round setup, group flow, and mobile-first golf companion experience.",
      meta: "Product page",
      type: "golf",
      image: "/project-images/hackers-golf-product-preview.png",
      imageAlt: "Hackers Golf product page with game lobby app preview"
    },
    {
      title: "Fast scoring",
      caption: "Score updates and leaderboards designed to stay out of the way mid-round.",
      meta: "Mobile play",
      type: "mobile"
    },
    {
      title: "Card rules",
      caption: "Casual games translated into readable cards, cart mode, and clear moments.",
      meta: "Game mechanics",
      type: "system"
    }
  ],
  "cards-of-chaos": [
    {
      title: "Chaos deck",
      caption: "The product preview makes the core loop obvious: draw a card, read the twist, and play it before the next hole.",
      meta: "Latest launch",
      type: "golf",
      image: "/project-images/cards-of-chaos/draw-card-promo.jpg",
      imageAlt: "Cards of Chaos product page with golf-card game preview"
    },
    {
      title: "Round twists",
      caption: "A familiar golf round gets a new social layer through quick prompts like pressure putts, mulligans, and wild drives.",
      meta: "Game loop",
      type: "mobile"
    },
    {
      title: "Group energy",
      caption: "The design keeps the interaction light enough for the course while giving the group something funny to react to.",
      meta: "Customer problem",
      type: "system"
    }
  ],
  "pace-chase": [
    {
      title: "Race strategy studio",
      caption: "The product preview makes pace, finish time, and speed changes visual enough to understand at a glance.",
      meta: "Product page",
      type: "pace",
      image: "/project-images/pacechase-product-preview.png",
      imageAlt: "PaceChase product page with running pace app preview"
    },
    {
      title: "Finish forecast",
      caption: "Clear projections help runners understand what a pace means on race day.",
      meta: "Confidence",
      type: "mobile"
    },
    {
      title: "Training modes",
      caption: "Running, swimming, triathlon, HYROX, and splits share one simple language.",
      meta: "Athlete tools",
      type: "system"
    }
  ],
  "city-scout": [
    {
      title: "Local intent",
      caption: "A discovery flow for people deciding where to eat, drink, or spend time.",
      meta: "Neighborhoods",
      type: "map",
      image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cfd8a634-fd37-4e68-a873-5e3ae2e6f012_320w.png",
      imageFit: "contain",
      imageAlt: "CityScout app icon for curated city guides"
    },
    {
      title: "Curated list",
      caption: "Comparison-first venue cards replaced generic search result overload.",
      meta: "Discovery UX",
      type: "dashboard"
    },
    {
      title: "Mobile choice",
      caption: "The flow was shaped around quick decisions while already out in the city.",
      meta: "Prototype",
      type: "mobile"
    }
  ],
  "kris-goyri": [
    {
      title: "Collection story",
      caption: "Seasonal imagery and commerce paths balanced editorial feel with shopping clarity.",
      meta: "Fashion",
      type: "commerce",
      image: "https://krisgoyri.com/cdn/shop/files/KG_Logo_Black.png",
      imageFit: "contain",
      imageAlt: "Kris Goyri brand mark"
    },
    {
      title: "Responsive shop",
      caption: "The site needed to stay polished across devices while collections changed.",
      meta: "Shopify",
      type: "dashboard"
    },
    {
      title: "Premium maintenance",
      caption: "A multi-year partnership focused on keeping the brand fresh and shoppable.",
      meta: "2019-2025",
      type: "system"
    }
  ],
  boxfox: [
    {
      title: "Workout builder",
      caption: "The product preview shows a focused programming flow for coaches and athletes who want cleaner session planning.",
      meta: "Product page",
      type: "fitness",
      image: "/project-images/boxfox-product-preview.png",
      imageAlt: "BoxFox product page with workout builder app preview"
    },
    {
      title: "Round structure",
      caption: "AMRAPs, intervals, and movement blocks turned into quick editable patterns.",
      meta: "Training flow",
      type: "dashboard"
    },
    {
      title: "Preview before share",
      caption: "The product focuses on making a session readable before it gets sent out.",
      meta: "Codex build",
      type: "system"
    }
  ]
};

const projectDeviceShowcases = {
  milo: {
    web: {
      eyebrow: "Web app + iOS",
      title: "Shared agendas that move from preview to live planning.",
      summary:
        "Milo is built around one calm product promise: create a shared agenda, add the plans that matter, and switch between list and calendar views without turning everyday coordination into calendar admin.",
      screens: [
        {
          title: "Try the live experience",
          caption:
            "The TigerMindLabs product page lets visitors open the real Milo app preview, then continue into the full live app, App Store, or Product Hunt launch.",
          image: "/project-images/milo-product-preview.png",
          alt: "Milo live web app and product preview"
        }
      ],
      signals: ["Live web app", "App Store", "Product Hunt", "Shared calendars"]
    }
  },
  "cards-of-chaos": {
    mobile: {
      eyebrow: "Mobile app",
      title: "A round-by-round mobile flow built for the course.",
      summary:
        "Cards of Chaos works because the mobile flow stays obvious while the game itself gets weird. Players can start a round, choose a deck, draw a card, and follow the live round without the interface slowing down the group.",
      screens: [
        {
          title: "Start the round",
          caption: "The opening state frames the product promise fast: start a round, invite the group, and pick a deck.",
          image: "/project-images/cards-of-chaos/start-round.png",
          alt: "Cards of Chaos start round screen"
        },
        {
          title: "Choose a deck",
          caption: "Deck selection makes the content model visible, with locked packs and card counts that hint at expansion.",
          image: "/project-images/cards-of-chaos/choose-deck.png",
          alt: "Cards of Chaos choose deck screen"
        },
        {
          title: "Draw the chaos",
          caption: "The card reveal is the emotional moment: dramatic, readable, and built for a group reaction.",
          image: "/project-images/cards-of-chaos/card-draw.png",
          alt: "Cards of Chaos card draw reveal screen"
        },
        {
          title: "Track live rounds",
          caption: "The live-round view keeps the group connected with current and past rounds, card counts, and invites.",
          image: "/project-images/cards-of-chaos/live-rounds.png",
          alt: "Cards of Chaos live rounds screen"
        }
      ],
      signals: ["iOS-first", "Deck economy", "Live rounds", "Group play"]
    }
  }
};

const experience = [
  {
    title: "Senior Director, E2E Product Experiences & Design - North America",
    company: "WEX",
    dates: "Mar 2026 - Present",
    detail:
      "Leading product and design strategy across WEX's North American fleet portfolio, shaping customer experience, portfolio priorities, and growth opportunities for products serving 500K+ monthly customers."
  },
  {
    title: "Product Design Director",
    company: "WEX",
    dates: "Jul 2025 - Mar 2026",
    detail:
      "Led a 15-person design and research organization across 8-12 fleet and payments initiatives, focusing investment on high-traffic experiences and contributing to lower service volume, stronger retention, and better NPS."
  },
  {
    title: "Senior UX Designer",
    company: "WEX",
    dates: "Mar 2021 - Jul 2025",
    detail:
      "Led UX strategy and execution across North American fleet and payment products, scaled a unified design system, and established research practices that improved quality and decision-making."
  },
  {
    title: "UX Designer",
    company: "WEX",
    dates: "2018 - 2021",
    detail:
      "Designed end-to-end experiences across North American mobility and over-the-road products, using field research, usability testing, and customer interviews to influence product roadmaps."
  },
  {
    title: "Co-Founder",
    company: "Tiger Mind Labs",
    dates: "Jan 2022 - Present",
    detail:
      "Building side products, experiments, and product worlds across sports, planning, fitness, and local discovery."
  },
  {
    title: "UI/UX Designer",
    company: "KarmaPulse",
    dates: "2016 - 2018",
    detail:
      "Designed AI-powered analytics products for Spanish-language social sentiment and created a modular design system that accelerated feature delivery."
  },
  {
    title: "Designer & Brand Manager",
    company: "Deezer Mexico / 100 Montaditos Mexico",
    dates: "2013 - 2016",
    detail:
      "Built early foundations across brand, content, and digital design before moving deeper into product and UX."
  }
];

const education = [
  "Master's Degree, Web Design & Engineering - Universidad Internacional de La Rioja (UNIR)",
  "B.A. / Bachelor's Degree, Interactive Design - Universidad Iberoamericana",
  "Professional Diploma in UX Design - UX Design Institute",
  "Languages - English (Native), Spanish (Native), French (Intermediate)"
];

const waysOfWorking = [
  {
    title: "Portfolio-level product thinking",
    detail: "I connect customer needs, portfolio strategy, product roadmaps, OKRs, and commercial priorities to the quality of the shipped experience.",
    tools: ["Roadmaps", "OKRs", "Research"]
  },
  {
    title: "Minimal systems",
    detail: "I like Apple-like restraint: fewer parts, stronger hierarchy, clearer decisions, and interfaces that stay calm.",
    tools: ["Design systems", "Figma", "Framer"]
  },
  {
    title: "Scaled team leadership",
    detail: "I build product and design leaders, create operating models, and help multidisciplinary teams move with ownership and decision velocity.",
    tools: ["Team building", "Critique", "Jira"]
  },
  {
    title: "Builder range",
    detail: "Codex, React, Figma, and AI tools let me move from insight to prototype to working product without waiting for permission.",
    tools: ["Codex", "React", "ChatGPT"]
  }
];

const toolbox = [
  { name: "Codex", detail: "AI pair builder for shipping React apps, prototypes, and product experiments.", icon: Wand2 },
  { name: "Figma", detail: "Design systems, UX flows, prototypes, and cross-functional critique.", icon: Figma },
  { name: "ChatGPT", detail: "AI concepting, synthesis, and product experiences such as WEXpert.", icon: BrainCircuit },
  { name: "React", detail: "Production-ready frontends and interactive prototypes.", icon: Code2 },
  { name: "Jira", detail: "Roadmaps, delivery visibility, and product operating model rhythms.", icon: MousePointer2 },
  { name: "Analytics", detail: "Adoption, conversion, retention, satisfaction, OKRs, and KPI-backed decisions.", icon: Layers3 }
];

const productSignals = ["500K+ monthly customers", "15+ person org", "8-12 initiatives", "Tiger Mind Labs", "Milo", "Cards of Chaos", "WEXpert"];

const heroProof = [
  { value: "500K+", label: "customers in product scope" },
  { value: "15+", label: "product, design, research org" },
  { value: "8-12", label: "initiatives led in parallel" },
  { value: "Codex", label: "self-built portfolio and products" }
];

const builderProof = [
  {
    step: "Lead",
    title: "Set the direction",
    detail: "Connect customer needs, business priorities, research, and roadmap tradeoffs into a clear path."
  },
  {
    step: "Design",
    title: "Shape the system",
    detail: "Turn ambiguity into flows, hierarchy, prototypes, and product language that teams can rally around."
  },
  {
    step: "Build",
    title: "Make it tangible",
    detail: "Use React, Codex, and AI tooling to move from concept to working product with more velocity."
  },
  {
    step: "Ship",
    title: "Launch and learn",
    detail: "Package the story, measure signals, improve the experience, and keep the work moving."
  }
];

const hiringPaths = [
  {
    title: "Leadership case studies",
    detail: "WEX work across fleet, payments, AI concepts, support reduction, adoption, and portfolio-scale design leadership.",
    match: "WEX"
  },
  {
    title: "Self-built products",
    detail: "Tiger Mind Labs launches and experiments built from idea to usable product with Codex, React, and hands-on product craft.",
    match: "Built with Codex + Tiger Mind Labs"
  },
  {
    title: "Client / brand work",
    detail: "Commerce and brand systems where visual quality, responsive execution, and practical delivery all matter.",
    match: "Kris Goyri"
  }
];

const portfolioSnapshot = [
  {
    title: "Who I am",
    detail:
      "Senior product and design leader across fintech, payments, mobility, SaaS, AI prototypes, and founder-led product building."
  },
  {
    title: "Proof points",
    detail:
      "500K+ monthly customers, 15+ person org leadership, 8-12 concurrent initiatives, service-call reduction, adoption lift, and shipped products."
  },
  {
    title: "What makes it different",
    detail:
      "This portfolio and the latest product work are self-built with Codex, so the work shows both leadership range and hands-on execution."
  }
];

const navItems = [
  ["Work", "#work"],
  ["Profile", "#about"],
  ["Contact", "#contact"]
];

function useReveal() {
  useEffect(() => {
    const observed = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const observeRevealElements = (root = document) => {
      const elements = root instanceof Element && root.matches("[data-reveal]")
        ? [root, ...root.querySelectorAll("[data-reveal]")]
        : Array.from(root.querySelectorAll("[data-reveal]"));

      elements.forEach((element) => {
        if (!observed.has(element)) {
          observed.add(element);
          observer.observe(element);
        }
      });
    };

    observeRevealElements();

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) {
            observeRevealElements(node);
          }
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, []);
}

function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [projectView, setProjectView] = useState("cards");
  const [menuOpen, setMenuOpen] = useState(false);

  useReveal();

  useEffect(() => {
    document.body.style.overflow = activeProject || contactOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject, contactOpen]);

  const filters = useMemo(
    () => ["All", "WEX", "Built with Codex", "Tiger Mind Labs"],
    []
  );

  const visibleProjects = useMemo(() => {
    if (filter === "All") return projects;
    if (filter === "Tiger Mind Labs") {
      return projects.filter(
        (project) =>
          project.category === "Tiger Mind Labs" || project.category === "Built with Codex"
      );
    }
    return projects.filter((project) => project.category === filter);
  }, [filter]);

  const selectedIndex = activeProject
    ? projects.findIndex((project) => project.id === activeProject.id)
    : -1;

  const openProject = (project) => setActiveProject(project);

  const goToProject = (direction) => {
    const nextIndex = (selectedIndex + direction + projects.length) % projects.length;
    setActiveProject(projects[nextIndex]);
  };

  return (
    <>
      <div className="noise" />
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        openContact={() => setContactOpen(true)}
      />
      <main>
        <Hero openContact={() => setContactOpen(true)} />
        <Marquee />
        <BuilderSection />
        <Work
          filters={filters}
          filter={filter}
          setFilter={setFilter}
          projects={visibleProjects}
          projectView={projectView}
          setProjectView={setProjectView}
          openProject={openProject}
        />
        <ProfileSection />
        <PortfolioSnapshot openContact={() => setContactOpen(true)} />
        <Contact openContact={() => setContactOpen(true)} />
      </main>
      <Footer />
      {activeProject ? (
        <ProjectModal
          project={activeProject}
          close={() => setActiveProject(null)}
          previous={() => goToProject(-1)}
          next={() => goToProject(1)}
        />
      ) : null}
      {contactOpen ? <ContactModal close={() => setContactOpen(false)} /> : null}
    </>
  );
}

function Header({ menuOpen, setMenuOpen, openContact }) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Santiago Pirez Velasco home">
        <span>SPV</span>
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map(([label, href]) => (
          <a key={label} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <button className="pill-button light" type="button" onClick={openContact}>
          <Mail size={16} />
          <span>Let's talk</span>
        </button>
        <button
          className="icon-button mobile-menu-button"
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {menuOpen ? (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}

function Hero({ openContact }) {
  return (
    <section className="hero" id="top">
      <div className="hero-copy" data-reveal>
        <p className="section-label">{profile.title}</p>
        <h1>
          Santiago Pirez
          <span> Velasco</span>
        </h1>
        <p className="hero-text">{profile.intro}</p>
        <div className="hero-actions">
          <a className="pill-button light" href="#work">
            <ArrowDown size={17} />
            <span>View work</span>
          </a>
          <a className="pill-button ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={17} />
            <span>LinkedIn</span>
          </a>
          <button className="pill-button ghost" type="button" onClick={openContact}>
            <Mail size={17} />
            <span>Let's talk</span>
          </button>
        </div>
        <div className="hero-proof" aria-label="Portfolio proof points">
          {heroProof.map((item) => (
            <div key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <HeroVisual />
    </section>
  );
}

function HeroVisual() {
  const [mode, setMode] = useState("play");

  const modes = {
    play: {
      label: "Play",
      status: "Tapping into Sunday league energy.",
      action: "Soccer ball deployed"
    },
    work: {
      label: "Work",
      status: "Deep focus. Figma, product strategy, and too many tabs.",
      action: "Laptop mode"
    },
    rest: {
      label: "Rest",
      status: "TV on, dog nearby, calendar respectfully ignored.",
      action: "Couch recovery"
    }
  };

  return (
    <div className="hero-visual toy-card" aria-label="Interactive mini Santiago" data-reveal>
      <div className="toy-shell">
        <div className="toy-topbar">
          <div className="toy-level">
            <strong>32</strong>
            <span>lvl</span>
            <p>Mini Santi</p>
          </div>
          <div className="toy-hearts" aria-label="Energy level">
            <span />
            <span />
            <span />
            <span className="is-filled" />
            <span className="is-filled" />
          </div>
        </div>
        <div className={`toy-screen is-${mode}`}>
          <div className="pixel-sky" />
          <div className="pixel-santiago" aria-hidden="true">
            <img src="/santiago-8bit-avatar.svg" alt="" />
          </div>
          <div className="soccer-ball" aria-hidden="true" />
          <div className="pixel-laptop" aria-hidden="true" />
          <div className="pixel-tv" aria-hidden="true" />
          <div className="pixel-dog" aria-hidden="true">
            <span />
          </div>
          <div className="pixel-floor" />
        </div>
        <div className="toy-status">
          <span>{modes[mode].action}</span>
          <p>{modes[mode].status}</p>
        </div>
        <div className="toy-controls" aria-label="Mini Santiago controls">
          {Object.entries(modes).map(([key, item]) => (
            <button
              key={key}
              className={mode === key ? "is-active" : ""}
              type="button"
              onClick={() => setMode(key)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <div className="toy-caption">
        <span>Interactive mini-me</span>
        <p>Play, work, or rest. Same Santiago, different operating mode.</p>
      </div>
    </div>
  );
}

function Marquee() {
  const terms = [
    "Product Design",
    "UX Leadership",
    "Design Systems",
    "AI Prototypes",
    "React Builds",
    "Tiger Mind Labs",
    "Codex Workflow"
  ];

  return (
    <div className="marquee" aria-hidden="true">
      <div>
        {[...terms, ...terms].map((term, index) => (
          <span key={`${term}-${index}`}>{term}</span>
        ))}
      </div>
    </div>
  );
}

function BuilderSection() {
  return (
    <section className="section builder-section" id="builder">
      <div className="builder-intro" data-reveal>
        <p className="section-label">Built by Santiago</p>
        <h2>Lead, design, build, ship.</h2>
        <p>
          The portfolio is part of the proof. I built this site and my newest product
          work with Codex, using the same loop I bring to teams: clarify the problem,
          shape the system, make it real, and keep learning after launch.
        </p>
      </div>
      <div className="builder-loop" data-reveal aria-label="Builder process">
        {builderProof.map((item, index) => (
          <article key={item.step}>
            <span className="pixel-step">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <p>{item.step}</p>
              <h3>{item.title}</h3>
              <span>{item.detail}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Work({ filters, filter, setFilter, projects, projectView, setProjectView, openProject }) {
  return (
    <section className="section work-section" id="work">
      <div className="section-heading" data-reveal>
        <div>
          <p className="section-label">Selected work</p>
          <h2>Featured projects</h2>
        </div>
        <div className="filter-row" aria-label="Project filters">
          {filters.map((item) => (
            <button
              key={item}
              className={item === filter ? "filter is-active" : "filter"}
              type="button"
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="hiring-paths" data-reveal aria-label="Hiring paths through selected work">
        {hiringPaths.map((path) => (
          <article key={path.title}>
            <span>{path.match}</span>
            <h3>{path.title}</h3>
            <p>{path.detail}</p>
          </article>
        ))}
      </div>

      <div className="view-toggle" aria-label="Project view">
        {["cards", "list"].map((view) => (
          <button
            key={view}
            className={projectView === view ? "is-active" : ""}
            type="button"
            onClick={() => setProjectView(view)}
          >
            {view === "cards" ? "Card view" : "List view"}
          </button>
        ))}
      </div>

      {projectView === "cards" ? (
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              openProject={openProject}
            />
          ))}
        </div>
      ) : (
        <ProjectList projects={projects} openProject={openProject} />
      )}
    </section>
  );
}

function ProjectList({ projects, openProject }) {
  return (
    <div className="project-list" data-reveal>
      {projects.map((project, index) => (
        <button key={project.id} type="button" onClick={() => openProject(project)}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{project.title}</strong>
          <p>{project.summary}</p>
          <small>{project.category} / {project.year}</small>
          <ProjectBadges badges={project.badges} compact />
          <ArrowUpRight size={18} />
        </button>
      ))}
    </div>
  );
}

function ProjectCard({ project, index, openProject }) {
  return (
    <article
      className={`project-card ${project.featured ? "is-featured" : ""}`}
      data-accent={project.accent}
      data-reveal
      style={{ transitionDelay: `${Math.min(index, 5) * 70}ms` }}
    >
      <button type="button" onClick={() => openProject(project)}>
        <ProjectVisual project={project} />
        <div className="project-card-content">
          <div>
            <p className="project-meta">
              {project.category} / {project.year}
            </p>
            <h3>{project.title}</h3>
          </div>
          <ProjectBadges badges={project.badges} compact />
          <p>{project.summary}</p>
          <div className="project-footer">
            <span>{project.type}</span>
            <ArrowUpRight size={18} />
          </div>
        </div>
      </button>
    </article>
  );
}

function ProjectVisual({ project }) {
  if (project.previewImage) {
    const visualClassName = ["project-visual", "has-product-image"];

    if (project.previewFit === "contain") {
      visualClassName.push("is-contained");
    }

    return (
      <div className={visualClassName.join(" ")}>
        <img src={project.previewImage} alt={project.previewAlt || `${project.title} product preview`} loading="lazy" />
      </div>
    );
  }

  if (project.caseVisual) {
    return (
      <div className="project-visual has-case-visual">
        <WexCaseVisual visual={project.caseVisual} />
      </div>
    );
  }

  return (
    <div className="project-visual">
      <div className="screen-shell">
        <div className="screen-toolbar">
          <span />
          <span />
          <span />
        </div>
        <div className="screen-content">
          <div className="screen-row wide" />
          <div className="screen-row" />
          <div className="screen-row short" />
          <div className="mini-grid">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
      <div className="phone-shell">
        <div className="phone-notch" />
        <div className="phone-dot" />
        <div className="phone-line" />
        <div className="phone-line short" />
      </div>
    </div>
  );
}

function WexCaseVisual({ visual }) {
  return (
    <div className="case-visual" aria-label={`${visual.label}: ${visual.metric} ${visual.metricLabel}`}>
      <div className="case-visual-header" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="case-map" aria-hidden="true">
        {visual.nodes.map((node, index) => (
          <div className="case-node" key={node} style={{ "--node-index": index }}>
            <span />
            <i />
            <i />
          </div>
        ))}
      </div>
      <div className="case-visual-footer" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

function ProjectBadges({ badges, compact = false }) {
  if (!badges?.length) return null;

  return (
    <div className={compact ? "badge-row is-compact" : "badge-row"} aria-label="Project badges">
      {badges.map((badge) => (
        <span key={badge}>{badge}</span>
      ))}
    </div>
  );
}

function ProfileSection() {
  return (
    <section className="section about-section profile-section" id="about">
      <div className="about-copy" data-reveal>
        <p className="section-label">Profile</p>
        <h2>
          Minimal by preference. Versatile by practice.
        </h2>
        <div className="body-copy">
          <p>
            Senior Product and Design leader focused on shaping end-to-end experiences that
            connect customer needs, product strategy, data, and commercial priorities.
          </p>
          <p>
            With 10+ years across fintech, payments, mobility, SaaS, and AI-powered products,
            I have evolved from hands-on UX into leadership across portfolio strategy, operating
            models, design systems, research, and team development.
          </p>
          <p>
            Outside WEX, Tiger Mind Labs is my creative playground with Kyle. The newer work
            is increasingly self-built with Codex, which lets me move from idea to usable
            product much faster.
          </p>
        </div>
        <div className="profile-output">
          <span>Recent product worlds</span>
          <div>
            {productSignals.map((item) => (
              <em key={item}>{item}</em>
            ))}
          </div>
        </div>
      </div>
      <div className="stats-grid" data-reveal>
        <Stat value="500K+" label="Monthly customers served" />
        <Stat value="15+" label="Product, design, and research org" />
        <Stat value="8-12" label="Concurrent initiatives led" />
        <Stat value="40%" label="Design and dev time reduced" />
      </div>
      <div className="profile-system" data-reveal>
        <div className="profile-system-copy">
          <p className="section-label">Operating system</p>
          <h3>How the work gets made</h3>
          <p>
            My profile is a mix of product leadership, quiet visual taste, systems thinking,
            data-backed decision-making, and hands-on building. The tools are not a separate
            stack; they are how I discover opportunities, align teams, prototype decisions,
            measure outcomes, and ship my own products.
          </p>
          <div className="tool-strip" aria-label="Tools in practice">
            {toolbox.map(({ name, icon: Icon }) => (
              <span className="tool-pill" key={name}>
                <Icon size={15} />
                {name}
              </span>
            ))}
          </div>
        </div>
        <div className="method-grid">
          {waysOfWorking.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <div className="method-tools">
                {item.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="timeline" data-reveal>
        <div className="profile-card-heading">
          <p className="section-label">Career</p>
          <h3>Product, design, and builder path</h3>
        </div>
        {experience.map((item, index) => (
          <div className="timeline-item" key={`${item.title}-${item.dates}`}>
            <div className="timeline-marker">
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="timeline-content">
              <div>
                <h3>{item.title}</h3>
                <p>{item.company}</p>
              </div>
              <time>{item.dates}</time>
              <p>{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="education" data-reveal>
        <div className="profile-card-heading">
          <p className="section-label">Education</p>
          <h3>Formal training and credentials</h3>
        </div>
        {education.map((item) => (
          <p key={item}>
            <Check size={16} />
            <span>{item}</span>
          </p>
        ))}
      </div>
    </section>
  );
}

function PortfolioSnapshot({ openContact }) {
  return (
    <section className="section snapshot-section" id="snapshot">
      <div className="snapshot-panel" data-reveal>
        <div className="snapshot-copy">
          <p className="section-label">Portfolio snapshot</p>
          <h2>Product leader with the range to make the idea real.</h2>
        </div>
        <div className="snapshot-grid">
          {portfolioSnapshot.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <div className="snapshot-actions">
          <a className="pill-button light" href="#work">
            <ArrowDown size={17} />
            <span>View selected work</span>
          </a>
          <a className="pill-button ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={17} />
            <span>LinkedIn</span>
          </a>
          <button className="pill-button ghost" type="button" onClick={openContact}>
            <Mail size={17} />
            <span>Let's talk</span>
          </button>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div className="stat-card">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function Contact({ openContact }) {
  return (
    <section className="section contact-section" id="contact">
      <div className="contact-panel" data-reveal>
        <p className="section-label">Contact</p>
        <h2>
          Let's create
          <span> something useful.</span>
        </h2>
        <p>
          I am always up for product strategy, design leadership, AI prototypes, and the next
          small idea that wants to become real.
        </p>
        <div className="contact-actions">
          <button className="pill-button light" type="button" onClick={openContact}>
            <Mail size={18} />
            <span>Send an email</span>
          </button>
          <a className="pill-button ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={18} />
            <span>Connect on LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactModal({ close }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "Portfolio inquiry",
    message: ""
  });
  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (status !== "idle") {
      setStatus("idle");
      setStatusMessage("");
    }
  };

  const sendEmail = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setStatusMessage("");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: form.name || "Not provided",
          email: form.email || "Not provided",
          subject: form.subject || "Portfolio inquiry",
          message: form.message,
          _subject: form.subject || "Portfolio inquiry from santiagopirezvelasco.com",
          _template: "table",
          _captcha: "false"
        })
      });

      if (!response.ok) {
        throw new Error("The message could not be sent.");
      }

      setStatus("sent");
      setStatusMessage("Message sent. Thank you for reaching out.");
      setForm({
        name: "",
        email: "",
        subject: "Portfolio inquiry",
        message: ""
      });
    } catch (error) {
      setStatus("error");
      setStatusMessage("Something went wrong. Please email Santiago directly at santiagopirezvelasco@gmail.com.");
    }
  };

  return (
    <div className="modal-backdrop contact-backdrop" role="dialog" aria-modal="true" aria-labelledby="contact-title">
      <div className="contact-modal">
        <button className="icon-button close-contact" type="button" aria-label="Close contact form" onClick={close}>
          <X size={20} />
        </button>
        <p className="section-label">Let's talk</p>
        <h2 id="contact-title">Send Santiago an email.</h2>
        <p>
          Share the project, role, prototype, or small idea. This sends a message straight
          to Santiago's inbox.
        </p>
        <form onSubmit={sendEmail}>
          <label>
            <span>Name</span>
            <input name="name" value={form.name} onChange={update} autoComplete="name" />
          </label>
          <label>
            <span>Email</span>
            <input name="email" type="email" value={form.email} onChange={update} autoComplete="email" required />
          </label>
          <label>
            <span>Subject</span>
            <input name="subject" value={form.subject} onChange={update} />
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" value={form.message} onChange={update} rows="5" required />
          </label>
          {statusMessage ? (
            <p className={`contact-status is-${status}`} role="status" aria-live="polite">
              {statusMessage}
            </p>
          ) : null}
          <button className="pill-button light" type="submit" disabled={status === "sending"}>
            <Mail size={18} />
            <span>{status === "sending" ? "Sending..." : "Send message"}</span>
          </button>
        </form>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <p>© 2026 Santiago Pirez Velasco</p>
      <div>
        <a href={profile.site}>Current site</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

function ProjectModal({ project, close, previous, next }) {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [close, previous, next]);

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="project-title">
      <div className="modal-header">
        <button className="pill-button ghost" type="button" onClick={close}>
          <X size={17} />
          <span>Close</span>
        </button>
      </div>
      <article className="modal-content" data-accent={project.accent}>
        <div className="modal-hero">
          <div>
            <p className="project-meta">
              {project.category} / {project.year}
            </p>
            <h2 id="project-title" className={project.title.length > 24 ? "is-long-title" : undefined}>
              {project.title}
            </h2>
            <p>{project.summary}</p>
            {project.projectUrl && (
              <a className="project-live-link" href={project.projectUrl} target="_blank" rel="noreferrer">
                <ArrowUpRight size={17} />
                <span>View this project</span>
              </a>
            )}
            <ProjectBadges badges={project.badges} />
          </div>
          <ProjectVisual project={project} />
        </div>

        <div className="modal-facts">
          <Fact label="Role" value={project.role} />
          <Fact label="Timeline" value={project.timeline} />
          <Fact label="Type" value={project.type} />
          <Fact label="Platform" value={project.platform.join(", ")} />
        </div>

        <div className="case-study-grid">
          <CaseBlock title="Problem we started with" text={project.challenge} />
          <CaseBlock title="How I focused the solution" text={project.solution} />
        </div>

        <ProjectDeviceShowcase project={project} />

        <BuilderNotes project={project} />

        <section className="process-panel">
          <div>
            <p className="section-label">Process</p>
            <h3>How I moved the work forward</h3>
          </div>
          <div className="process-list">
            {project.process.map((step, index) => (
              <div className="process-step" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="outcomes">
          <p className="section-label">Impact</p>
          <h3>Outcomes and signals</h3>
          <div className="outcome-grid">
            {project.outcomes.map((outcome) => (
              <div className="outcome" key={outcome}>
                <Check size={18} />
                <p>{outcome}</p>
              </div>
            ))}
          </div>
          <div className="metric-row">
            {project.metrics.map((metric) => (
              <span key={metric}>{metric}</span>
            ))}
          </div>
          <div className="skill-row" aria-label="Relevant skills">
            {project.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <div className="modal-nav">
          <button className="pill-button ghost" type="button" onClick={previous}>
            <ArrowLeft size={17} />
            <span>Previous</span>
          </button>
          <button className="pill-button light" type="button" onClick={next}>
            <span>Next project</span>
            <ArrowRight size={17} />
          </button>
        </div>
      </article>
    </div>
  );
}

function Fact({ label, value }) {
  return (
    <div>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function CaseBlock({ title, text }) {
  return (
    <section className="case-block">
      <h3>{title}</h3>
      <p>{text}</p>
    </section>
  );
}

function BuilderNotes({ project }) {
  if (!project.builderNotes?.length) return null;

  return (
    <section className="builder-notes">
      <div>
        <p className="section-label">Builder notes</p>
        <h3>What I personally made and learned</h3>
      </div>
      <div className="builder-note-list">
        {project.builderNotes.map((note, index) => (
          <p key={note}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            {note}
          </p>
        ))}
      </div>
    </section>
  );
}

function ProjectDeviceShowcase({ project }) {
  const showcase = projectDeviceShowcases[project.id];

  if (!showcase) return null;

  return (
    <section className="device-showcase">
      {showcase.mobile ? <DeviceSection variant="mobile" section={showcase.mobile} /> : null}
      {showcase.web ? <DeviceSection variant="web" section={showcase.web} /> : null}
    </section>
  );
}

function DeviceSection({ section, variant }) {
  const isWeb = variant === "web";
  const trackClass = isWeb ? "web-screen-track" : "mobile-screen-track";
  const cardClass = isWeb ? "web-screen-card" : "mobile-screen-card";
  const frameClass = isWeb ? "web-screen-frame" : "mobile-screen-frame";

  return (
    <div className={`device-section is-${variant}`}>
      <div className="device-section-copy">
        <p className="section-label">{section.eyebrow}</p>
        <h3>{section.title}</h3>
        <p>{section.summary}</p>
        {section.signals?.length ? (
          <div className="device-signal-row">
            {section.signals.map((signal) => (
              <span key={signal}>{signal}</span>
            ))}
          </div>
        ) : null}
      </div>
      <div className={trackClass} aria-label={`${section.eyebrow} screenshots`}>
        {section.screens.map((screen, index) => (
          <article className={cardClass} key={screen.title}>
            <div className={frameClass}>
              <img src={screen.image} alt={screen.alt || screen.title} loading="lazy" />
            </div>
            <div className="mobile-screen-caption">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h4>{screen.title}</h4>
                <p>{screen.caption}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);

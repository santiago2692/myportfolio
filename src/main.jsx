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
  title: "Senior Director E2E Product Experiences & Design for North America Mobility",
  location: "United States",
  email: "santiagopirezvelasco@gmail.com",
  linkedin: "https://www.linkedin.com/in/santiago-pirez-22980b7a/",
  site: "https://www.santiagopirezvelasco.com/",
  intro:
    "I lead product and design across North America Mobility at WEX, shaping end-to-end experiences that connect customer needs with business outcomes. Outside work, I build my own products with Tiger Mind Labs and Codex."
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
    featured: true
  },
  {
    id: "milo",
    title: "Milo",
    year: "2026",
    type: "Personal productivity product",
    category: "Built with Codex",
    accent: "emerald",
    platform: ["Mobile", "Shared agenda", "Google Play"],
    projectUrl: "https://tigermindlabs.com/milo/",
    summary:
      "A shared agenda product for couples, families, and small groups that need a calmer way to coordinate what is happening today.",
    role: "Product designer and solo builder",
    timeline: "Latest build",
    challenge:
      "Most calendars are optimized for heavy scheduling, but daily coordination often needs lightweight context, shared visibility, and fast edits.",
    solution:
      "Milo focuses on the day view, shared agenda moments, and simple handoffs so people can understand what matters without managing a heavyweight calendar.",
    process: [
      "Mapped common coordination moments for couples, families, and small groups",
      "Prioritized a calm day-view model over dense calendar mechanics",
      "Used Codex to move from product concept into working app patterns quickly"
    ],
    skills: ["Solo product build", "Mobile UX", "Shared planning", "Codex workflow"],
    outcomes: [
      "Designed and built independently with Codex as a development partner",
      "Created a product language for shared planning, day status, and lightweight task context",
      "Prepared the app for iterative mobile distribution and feedback"
    ],
    metrics: ["Solo build", "Mobile-first", "Shared planning"],
    featured: true
  },
  {
    id: "statements-transactions-payments",
    title: "Statements, Transactions & Payments",
    year: "2025",
    type: "Enterprise UX initiative",
    category: "WEX",
    accent: "orange",
    platform: ["Web", "Mobile iOS", "Prototype"],
    summary:
      "A proactive redesign of core financial workflows that carried high support volume, attrition risk, and inconsistent customer logic.",
    role: "Lead UX Designer",
    timeline: "Ongoing",
    challenge:
      "Transactions, statements, and payment flows were among the most-used surfaces but had fragmented formats, unclear state, and no single roadmap owner.",
    solution:
      "I mapped the current experience, interviewed customer-facing teams, prioritized by business risk, and built a text-to-code prototype to make the ideal flow testable.",
    process: [
      "Audited the existing statements, transactions, and payments experience across high-volume workflows",
      "Interviewed internal teams to identify support pain, attrition risk, and inconsistent customer logic",
      "Built a prototype that made the future workflow concrete enough for testing, training, and alignment"
    ],
    skills: ["Enterprise UX", "Service mapping", "Research synthesis", "Executive alignment"],
    outcomes: [
      "Internal teams reported a 100% confidence score in the redesigned flow",
      "The prototype became useful for new-hire training and cross-functional alignment",
      "Customer tests completed all tasks without guidance or confusion"
    ],
    metrics: ["100% confidence", "Core UX debt", "Text-to-code prototype"],
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
    summary:
      "A redesign of a complex six-step purchase control flow to improve clarity, card assignment confidence, and task completion.",
    role: "Lead UX Designer",
    timeline: "24 weeks",
    challenge:
      "Users faced a heavy six-step process with weak personalization, disconnected card assignments, and uncertain completion language.",
    solution:
      "I tested an ideal one-step flow, introduced visual card assignments, simplified alerts, and then adapted the design for delivery constraints.",
    process: [
      "Evaluated the existing six-step purchase-control flow and identified the highest-friction decisions",
      "Tested a simplified one-step concept to learn what users actually needed to feel confident",
      "Translated findings into a shippable design that balanced ideal UX with engineering constraints"
    ],
    skills: ["Workflow simplification", "Maze testing", "Fleet UX", "Interaction design"],
    outcomes: [
      "User testing showed a 35% increase in task completion",
      "Card assignment clarity became visible directly in the flow",
      "The work established a foundation for future purchase-control iterations"
    ],
    metrics: ["+35% task completion", "24 weeks", "Fleet controls"],
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
    metrics: ["App Store", "Game packs", "Cart mode"]
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
    metrics: ["Race tools", "Splits", "Product Hunt"]
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
    metrics: ["Discovery", "Figma", "Prototype"]
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
    metrics: ["2019-2025", "Shopify", "Fashion"]
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
    metrics: ["Workout builder", "AMRAP", "Codex build"]
  }
];

const projectDetailVisuals = {
  tml: [
    {
      title: "Studio map",
      caption: "A home base that connects product experiments, founder story, and live launches.",
      meta: "Brand system",
      type: "studio"
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
      title: "Today view",
      caption: "A calm shared agenda for people who need to know what is happening now.",
      meta: "Shared planning",
      type: "agenda"
    },
    {
      title: "Quick handoff",
      caption: "Lightweight context, status, and edits without heavy calendar mechanics.",
      meta: "Family flow",
      type: "mobile"
    },
    {
      title: "Less coordination drag",
      caption: "Built around the daily question: what do we need to remember together?",
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
      title: "Round setup",
      caption: "Game packs and player setup built for a group standing at the tee box.",
      meta: "Social golf",
      type: "golf"
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
  "pace-chase": [
    {
      title: "Pace calculator",
      caption: "Fast inputs for athletes who need split answers without spreadsheet friction.",
      meta: "Race math",
      type: "pace"
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
      type: "map"
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
      type: "commerce"
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
      caption: "Programming tools for coaches and athletes who want to move faster than a spreadsheet.",
      meta: "Fitness UX",
      type: "fitness"
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

const experience = [
  {
    title: "Senior Director E2E Product Experiences & Design for North America Mobility",
    company: "WEX",
    dates: "Mar 2026 - Present",
    detail:
      "Leading Product & Design across North America Mobility for WEX."
  },
  {
    title: "Product Design Director",
    company: "WEX",
    dates: "Jul 2025 - Mar 2026",
    detail:
      "Directed product design work across mobility experiences, connecting UX strategy with product outcomes."
  },
  {
    title: "Senior UX Designer",
    company: "WEX",
    dates: "Mar 2021 - Jul 2025",
    detail:
      "Helped scale design practice, systems, research partnership, and cross-functional product strategy."
  },
  {
    title: "UX Designer",
    company: "WEX",
    dates: "Feb 2018 - Mar 2021",
    detail:
      "Joined as the third designer on a small UX team and helped prove the value of design across the business."
  },
  {
    title: "Co-Founder",
    company: "Tiger Mind Labs",
    dates: "Jan 2022 - Present",
    detail:
      "Building side products, experiments, and product worlds across sports, planning, fitness, and local discovery."
  },
  {
    title: "Visual Designer Jr",
    company: "Karma Pulse",
    dates: "2016 - 2018",
    detail:
      "Built early UI/UX foundations in a startup environment across social, product, and brand work."
  }
];

const education = [
  "Master in Direction and Engineering of Web Page - Universidad Internacional de La Rioja",
  "Bachelor's Degree in Web Design and Development - Universidad Iberoamericana, Ciudad de Mexico",
  "Professional Diploma in UX Design - UX Design Institute",
  "Business Strategy - McKinsey & Company"
];

const waysOfWorking = [
  {
    title: "End-to-end product thinking",
    detail: "I connect customer needs, product strategy, business outcomes, and the quality of the shipped experience.",
    tools: ["Research", "Figma", "Notion"]
  },
  {
    title: "Minimal systems",
    detail: "I like Apple-like restraint: fewer parts, stronger hierarchy, clearer decisions, and interfaces that stay calm.",
    tools: ["Design systems", "Figma", "Framer"]
  },
  {
    title: "Hands-on leadership",
    detail: "I can lead the room, shape the roadmap, make the prototype, critique the details, and help the team ship.",
    tools: ["Strategy", "Critique", "Docs"]
  },
  {
    title: "Builder range",
    detail: "Codex, React, Figma, and AI tools let me move from idea to working product without waiting for permission.",
    tools: ["Codex", "React", "OpenAI"]
  }
];

const toolbox = [
  { name: "Codex", detail: "AI pair builder for shipping React apps, prototypes, and product experiments.", icon: Wand2 },
  { name: "Figma", detail: "Design systems, UX flows, prototypes, and cross-functional critique.", icon: Figma },
  { name: "OpenAI", detail: "AI concepting and product experiences such as WEXpert.", icon: BrainCircuit },
  { name: "React", detail: "Production-ready frontends and interactive prototypes.", icon: Code2 },
  { name: "Framer", detail: "Motion-rich portfolio and product storytelling.", icon: MousePointer2 },
  { name: "Notion", detail: "Planning, documentation, launch notes, and team clarity.", icon: Layers3 }
];

const productSignals = ["Tiger Mind Labs", "Milo", "PaceChase", "Hackers Golf", "BoxFox", "WEXpert"];

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
  return (
    <div className="project-visual">
      <div className="screen-shell">
        <div className="screen-toolbar">
          <span />
          <span />
          <span />
        </div>
        <div className="screen-content">
          <div className="screen-title">{project.title}</div>
          <div className="screen-row wide" />
          <div className="screen-row" />
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
            Product and Design leader focused on shaping end-to-end experiences that connect
            customer needs with business outcomes.
          </p>
          <p>
            With a foundation in UX and over 10 years of experience, I have evolved from
            hands-on design into leadership across product experience, systems, strategy, and
            team development.
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
        <Stat value="40+" label="UX org grown at WEX" />
        <Stat value="8+" label="Designers managed" />
        <Stat value="12" label="Mobility products led" />
        <Stat value="10+" label="Portfolio products" />
      </div>
      <div className="profile-system" data-reveal>
        <div className="profile-system-copy">
          <p className="section-label">Operating system</p>
          <h3>How the work gets made</h3>
          <p>
            My profile is a mix of product leadership, quiet visual taste, systems thinking, and
            hands-on building. The tools are not a separate stack; they are how I explore,
            align teams, prototype decisions, and ship my own products.
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
            <h2 id="project-title">{project.title}</h2>
            <p>{project.summary}</p>
            {project.projectUrl && (
              <a className="project-live-link" href={project.projectUrl} target="_blank" rel="noreferrer">
                <ArrowUpRight size={17} />
                <span>View this project</span>
              </a>
            )}
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

        <ProjectDetailGallery project={project} />

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

function ProjectDetailGallery({ project }) {
  const visuals = projectDetailVisuals[project.id] || [];

  if (!visuals.length) return null;

  return (
    <section className="detail-visual-section">
      <div className="detail-visual-heading">
        <p className="section-label">Product detail</p>
        <h3>What the solution needed to make clear</h3>
      </div>
      <div className="detail-visual-grid">
        {visuals.map((visual) => (
          <article className="detail-visual-card" key={`${project.id}-${visual.title}`}>
            <div className={`detail-screen is-${visual.type}`} aria-hidden="true">
              <div className="detail-screen-top">
                <span />
                <span />
                <span />
              </div>
              <div className="detail-screen-body">
                <strong>{visual.title}</strong>
                <div className="detail-screen-lines">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="detail-screen-orbit">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
            <div className="detail-visual-copy">
              <span>{visual.meta}</span>
              <h4>{visual.title}</h4>
              <p>{visual.caption}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

createRoot(document.getElementById("root")).render(<App />);

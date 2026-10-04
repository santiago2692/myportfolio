// Product facts checked against the public product pages and store listings, October 2026.
const media = "/project-images/releases/";
export const releaseUpdates = {
  milo: {
    platform: ["iOS", "Android"], timeline: "Released / ongoing development",
    summary: "Shared calendars, trip itineraries, and expense splitting that keep everyday plans and the people behind them together.",
    solution: "Milo brings shared calendars, trip activities, invitations, and expenses into the same plan. People can share a single plan without exposing their whole calendar.",
    outcomes: ["Available on iOS and Android", "Expanded from shared agendas into trip itineraries and expense splitting", "Added plan-specific invitations and live updates to shared plans"],
    metrics: ["iOS + Android", "Shared plans", "Expense splitting"],
    badges: ["Self-built with Codex", "iOS + Android"],
    screenshot: `${media}milo-plan.webp`,
    gallery: [
      { title: "Create a plan", caption: "Start with the event and the calendar it belongs to.", image: `${media}milo-new-plan.webp` },
      { title: "Bring the details together", caption: "The trip, people, and itinerary share one place.", image: `${media}milo-plan.webp` }
    ],
    stores: [
      ["App Store", "https://apps.apple.com/us/app/milo-friendly-agenda/id6774718729"],
      ["Google Play", "https://play.google.com/store/apps/details?id=com.tigermindlabs.milo"]
    ],
    journey: [
      ["The problem", "Everyday plans become coordination work when dates, people, trip details, and costs live in different places."],
      ["The design decision", "Make the shared plan the center of the experience, with calendars for organizing and invitations for controlling who sees what."],
      ["The release", "The native iOS release added itineraries and sharing permissions. Later releases added expenses, settlement, and plan-specific invites."],
      ["The next question", "How much coordination can live inside a plan before it starts to feel like work? That is the tradeoff to keep testing."]
    ]
  },
  "cards-of-chaos": {
    screenshot: "/project-images/cards-of-chaos/card-draw.png",
    badges: ["Built with Codex", "Live on iOS"],
    timeline: "Released / ongoing development",
    outcomes: ["Released a standalone iOS game in the Hackers Golf family", "Made setup, deck selection, and card reveals part of one mobile flow", "Added live-round views to keep the group connected"],
    stores: [["App Store", "https://apps.apple.com/us/app/cards-of-chaos-by-hacker-golf/id6787746582"]]
  },
  "pace-chase": {
    screenshot: `${media}pacechase.webp`,
    summary: "A multisport pacing toolkit for running, cycling, swimming, rowing, triathlon, and HYROX, connecting pace and splits to a finish-time plan.",
    solution: "PaceChase brings discipline selection, visual pace calculations, and multisport predictions into a focused toolkit for planning an effort before race day.",
    badges: ["Co-built", "Live on iOS"],
    stores: [["App Store", "https://apps.apple.com/us/app/pace-chase/id1458293500"]]
  },
  "hackers-golf": { screenshot: `${media}hackers-golf.png` },
  "city-scout": {
    summary: "A curated local discovery web experience for exploring places by category, city, neighborhood, and intent.",
    badges: ["Web experience", "Tiger Mind Labs"],
    platform: ["Web"], timeline: "Ongoing"
  },
  boxfox: { badges: ["In development", "Coming soon"], timeline: "In development" },
  wexpert: {
    badges: ["48-hour prototype", "6-person study"],
    metrics: ["6/6 satisfied in testing", "5/6 preferred chat", "Prototype study"],
    evidence: "Exploratory testing with six participants during a 48-hour hackathon. These are prototype-study responses, not production satisfaction or adoption metrics."
  },
  "purchase-controls": {
    badges: ["Led at WEX", "Workflow redesign"],
    evidence: "The 25% year-over-year adoption result covers Billing and Purchase Controls together. Task completion is a usability-testing result; the sample and comparison baseline are not documented in this case study."
  },
  "statements-transactions-payments": {
    evidence: "500K+ describes monthly customers across the product scope. The reported 20% service-call reduction is a shared program outcome; this case study does not isolate the effect of design or specify the measurement window."
  }
};

export const beagleBounce = {
  id: "beagle-bounce", title: "Beagle Bounce", year: "2026", type: "Mobile game",
  category: "Tiger Mind Labs", accent: "cyan", platform: ["iOS", "Android"],
  projectUrl: "https://tigermindlabs.com/beagle-bounce/",
  screenshot: `${media}beagle.jpeg`,
  summary: "An endless runner inspired by Sammy and the Maine coast, turning a personal idea into a playful mobile release.",
  role: "Tiger Mind Labs co-founder and product builder", timeline: "Released / ongoing development",
  challenge: "Create a game that is easy to pick up for a short break, with enough personality and movement to invite another run.",
  solution: "A coastal setting, seasonal runs, and jumping, flipping, and gliding give a simple premise room to grow.",
  process: ["Started with a personal inspiration: Sammy and the Maine coast", "Shaped the experience around short runs and readable movement", "Brought the game to mobile with a dedicated product and download page"],
  outcomes: ["Released a playable mobile game", "Built a distinct world around a personal inspiration", "Expanded the studio's work from utility apps into games"],
  skills: ["Product building", "Game experience", "Interaction design"],
  metrics: ["Mobile release", "Seasonal runs"], badges: ["New to the portfolio", "Mobile game"],
  hiringPath: "Self-built products",
  stores: [["App Store", "https://apps.apple.com/us/app/beagle-bounce/id6794724585"], ["Google Play", "https://play.google.com/store/apps/details?id=com.tigermindlabs.beaglebounce"]],
  builderNotes: ["A personal experiment inspired by Sammy became a product in the Tiger Mind Labs collection.", "The core product choice is a short, replayable run with a recognizable setting and character."]
};

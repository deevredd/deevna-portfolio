export type SpotifyTrack = {
  title: string;
  artist: string;
  spotifyTrackId: string;
};

export type SlideComment = {
  user: string;
  text: string;
  emoji?: string;
};

export type SlideToast = {
  user: string;
  action: string;
  emoji: string;
};

export type Slide =
  | {
      id: "hero";
      kind: "hero";
      username: string;
      name: string;
      headingWord: string;
      sticker: string;
      bio: string;
      metaLine: string;
      vibeTags: string[];
      caption: string;
      hashtags: string[];
      sound: SpotifyTrack;
      views: string;
      likes: string;
      comments: string;
      saves: string;
      shares: string;
      bg: string;
    }
  | {
      id: "about";
      kind: "about";
      title: string;
      caption: string;
      hashtags: string[];
      cards: {
        emoji: string;
        title: string;
        text: string;
      }[];
      sound: SpotifyTrack;
      views: string;
      likes: string;
      comments: string;
      saves: string;
      shares: string;
      bg: string;
    }
  | {
      id: string;
      kind: "experience";
      index: number;
      role: string;
      company: string;
      location: string;
      dates: string;
      emoji: string;
      emojiList?: string[];
      highlights?: string[];
      caption: string;
      description: string;
      hashtags: string[];
      gradient: string;
      tags: string[];
      views: string;
      likes: string;
      comments: string;
      saves: string;
      shares: string;
      sound: SpotifyTrack;
      bg: string;
    }
  | {
      id: "skills";
      kind: "skills";
      eyebrow: string;
      title: string;
      subtitle: string;
      rating: string;
      caption: string;
      hashtags: string[];
      skills: {
        name: string;
        emoji: string;
        slangLevel: string;
        color: "yellow" | "pink" | "cyan" | "lime" | "white";
      }[];
      views: string;
      likes: string;
      comments: string;
      saves: string;
      shares: string;
      sound: SpotifyTrack;
      bg: string;
    }
  | {
      id: string;
      kind: "project";
      index: number;
      name: string;
      handle: string;
      vibe: string;
      badge: string;
      variant: "chaos" | "radar" | "scan";
      caption: string;
      description: string;
      hashtags: string[];
      gradient: string;
      tags: string[];
      reactions: { emoji: string; count: string }[];
      repo?: string;
      repoLabel?: string;
      views: string;
      likes: string;
      comments: string;
      saves: string;
      shares: string;
      sound: SpotifyTrack;
      bg: string;
    }
  | {
      id: "contact";
      kind: "contact";
      heading: string;
      subheading: string;
      dmHandle: string;
      dmAvatarEmoji: string;
      dmScript: {
        side: "them" | "you";
        text: string;
        delay: number;
      }[];
      closingNote: string;
      caption: string;
      hashtags: string[];
      views: string;
      likes: string;
      comments: string;
      saves: string;
      shares: string;
      sound: SpotifyTrack;
      bg: string;
    };

export const slides: Slide[] = [
  {
    id: "hero",
    kind: "hero",
    username: "@deevna_reddy",
    name: "Deevna Reddy",
    headingWord: "deevna",
    sticker: "Hi bestie",
    bio: "Backend + ML engineer 🧠✨ building compliance systems for 50M+ users, no cap.",
    metaLine: "She/her · SWE · Chennai 🇮🇳",
    vibeTags: [
      "Backend 🛠️",
      "AWS ☁️",
      "ML/RAG 🧠",
      "Policy Engine ⚡",
      "Python 🐍",
      "C++ ⚙️",
    ],
    caption: "POV: u found ur new fav swe 🎀 link in bio",
    hashtags: ["#foryou", "#swetok", "#backendbestie", "#certifiedW"],
    sound: {
      title: "As It Was",
      artist: "Harry Styles",
      spotifyTrackId: "4Dvkj6JhhA12EX05QKi792",
    },
    views: "2.4M",
    likes: "312K",
    comments: "8.4K",
    saves: "42K",
    shares: "1.9K",
    bg: "#0b0614",
  },
  {
    id: "about",
    kind: "about",
    title: "The Lore Drop",
    caption: "Tap through bestie 📖✨",
    hashtags: ["#getoknowme", "#storytime", "#origincore"],
    cards: [
      {
        emoji: "👩‍💻",
        title: "The origin story",
        text: "Heyyy it's Deevna 👋 I build backend + ML systems that survive real world chaos, compliance deadlines, audit szn, millions of users hitting a service at once. No cap, it holds up.",
      },
      {
        emoji: "🎓",
        title: "The academic arc",
        text: "Studied CS Engineering (AI & Data Analytics) in Chennai 🇮🇳. Mostly self driven tho, learned to love distributed systems, strict type guarantees, and clean architectures that don't implode at 3am.",
      },
      {
        emoji: "🔐",
        title: "The day job",
        text: "Amazon SDE. Owned DSAR compliance for Alexa Calendar solo dolo (50M+ users), closed every risk item on policy engines across two audit cycles, and migrated 15+ JDK services with zero downtime. Built different.",
      },
      {
        emoji: "🧬",
        title: "Side quests",
        text: "Off the clock, I build agents that turn absolute chaos into tractable systems: claims docs, fraud detection, medical imaging. Published research in IEEE ICCDS 2025 and Springer Nature. Certified high impact behavior.",
      },
    ],
    sound: {
      title: "Lovely Day",
      artist: "Bill Withers",
      spotifyTrackId: "0bRXwKfigvpKZUurwqAlEh",
    },
    views: "1.8M",
    likes: "240K",
    comments: "5.6K",
    saves: "35K",
    shares: "1.2K",
    bg: "#160b29",
  },
  {
    id: "exp_amazon",
    kind: "experience",
    index: 0,
    role: "Software Development Engineer",
    company: "Amazon",
    location: "Chennai, IN 🇮🇳",
    dates: "Jan 2025 to Mar 2026",
    emoji: "👑",
    emojiList: ["👑", "🛡️", "⚡", "🔥", "💼"],
    highlights: ["50M+ Alexa Users", "JDK 17 Migrations", "Zero Downtime"],
    caption: "POV: ur the sole contributor on 2 audit cycles 💀",
    description:
      "Started building ETL pipelines on Kindle Scribe stroke data, then ported model to C++ for on device inference (+25% robustness). Ran DSAR compliance for Alexa Calendar solo (50M+ users, down 70% manual time), cleared every policy engine risk item by myself, and led 15+ JDK 17 migrations with zero downtime. 20% runtime boost, no drama.",
    hashtags: ["#fintechcore", "#amazonlife", "#java", "#compliance"],
    gradient: "from-orange-500 via-red-500 to-pink-500",
    tags: ["Java", "AWS", "JDK 17", "CI/CD", "Policy Engine", "Python", "C++"],
    views: "2.4M",
    likes: "312K",
    comments: "8.4K",
    saves: "42K",
    shares: "1.9K",
    sound: {
      title: "Sir Duke",
      artist: "Stevie Wonder",
      spotifyTrackId: "2sBFmQVJdoEfKRLcpDYNkh",
    },
    bg: "#1f0909",
  },
  {
    id: "exp_agilisium",
    kind: "experience",
    index: 1,
    role: "AI & ML Intern",
    company: "Agilisium Consulting",
    location: "Chennai, IN 🇮🇳",
    dates: "Aug 2023 to Oct 2023",
    emoji: "🧠",
    emojiList: ["🧠", "🤖", "🔮", "✨", "💻"],
    highlights: ["RAG Architecture", "40% Workload Cut", "NLP Whisperer"],
    caption: "Built an HR chatbot that actually gets it 🤖",
    description:
      "Built an AI powered HR chatbot with NLP + RAG over internal knowledge sources, cutting manual query workload by 40%. The HR team could finally touch grass.",
    hashtags: ["#ragcore", "#nlp", "#hrtech", "#aiwhisperer"],
    gradient: "from-purple-500 via-pink-500 to-fuchsia-500",
    tags: ["Python", "NLP", "RAG"],
    views: "956K",
    likes: "124K",
    comments: "3.2K",
    saves: "14K",
    shares: "560",
    sound: {
      title: "Think",
      artist: "Aretha Franklin",
      spotifyTrackId: "4yQw7FR9lcvL6RHtegbJBh",
    },
    bg: "#18062b",
  },
  {
    id: "exp_reude",
    kind: "experience",
    index: 2,
    role: "Data & Image Analyst",
    company: "REUDE Technologies",
    location: "Chennai, IN 🇮🇳",
    dates: "Sep 2023 to Apr 2024",
    emoji: "🛸",
    emojiList: ["🛸", "🛰️", "🚁", "📡", "🌐"],
    highlights: ["3D Point Cloud", "Drone Vision", "+20% Accuracy"],
    caption: "Drone data era, unlocked 🚁",
    description:
      "Worked on drone based aerial data acquisition + point cloud processing, bumped spatial data accuracy +20% over raw sensor output. Drones go brrr.",
    hashtags: ["#dronetok", "#pointcloud", "#spatialdata"],
    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
    tags: ["Drone Data", "Point Cloud", "Computer Vision"],
    views: "612K",
    likes: "88K",
    comments: "1.6K",
    saves: "9.2K",
    shares: "310",
    sound: {
      title: "Higher Ground",
      artist: "Stevie Wonder",
      spotifyTrackId: "0bYg9bo50gSsH3LtWvIm5X",
    },
    bg: "#081b2e",
  },
  {
    id: "skills",
    kind: "skills",
    eyebrow: "Skillset check",
    title: "The Toolkit",
    subtitle: "Rate these out of 10 bestie",
    rating: "10/10 no cap",
    caption: "POV: the tech stack hits different",
    hashtags: ["#techstack", "#skillset", "#devtok", "#fullstack"],
    skills: [
      { name: "Java", emoji: "☕", slangLevel: "Main character energy", color: "yellow" },
      { name: "Python", emoji: "🐍", slangLevel: "The daily driver", color: "pink" },
      { name: "LLMs / RAG", emoji: "🧠", slangLevel: "AI whisperer", color: "cyan" },
      { name: "AWS", emoji: "☁️", slangLevel: "Cloud core", color: "lime" },
      { name: "FastAPI", emoji: "⚡", slangLevel: "Type safe bestie", color: "pink" },
      { name: "Scikit learn", emoji: "📊", slangLevel: "Never forgets", color: "yellow" },
      { name: "SHAP", emoji: "🧩", slangLevel: "Explains itself", color: "cyan" },
      { name: "C++", emoji: "🏎️", slangLevel: "Speed demon", color: "lime" },
      { name: "Next.js", emoji: "⚛️", slangLevel: "Full stack magic", color: "white" },
      { name: "Docker", emoji: "🐳", slangLevel: "Container vibes", color: "yellow" },
    ],
    views: "1.5M",
    likes: "210K",
    comments: "6.2K",
    saves: "28K",
    shares: "1.4K",
    sound: {
      title: "Feeling Good",
      artist: "Nina Simone",
      spotifyTrackId: "6Rqn2GFlmvmV4w9Ala0I1e",
    },
    bg: "#102316",
  },
  {
    id: "proj_claims",
    kind: "project",
    index: 0,
    name: "Claims Agent",
    handle: "@claims.agent",
    vibe: "Turns chaos into structured decisions",
    badge: "AUTOPILOT",
    variant: "chaos",
    caption: "Lost ur mind over messy claim docs? Not anymore fr 📋",
    description:
      "An autonomous agent pulling 15+ fields out of raw claim docs, auto triaging 80% of first pass cases with LLM driven validation + routing. The claims team is so back.",
    hashtags: ["#llmcore", "#agentic", "#autotriage", "#techtok"],
    gradient: "from-pink-500 via-fuchsia-600 to-indigo-600",
    tags: ["Python", "LLMs", "RAG", "Multi Agent"],
    reactions: [
      { emoji: "🔥", count: "12.4k" },
      { emoji: "💯", count: "8.2k" },
      { emoji: "🧠", count: "5.1k" },
    ],
    repo: "https://github.com/deevredd/Modulus-AI",
    views: "1.2M",
    likes: "180K",
    comments: "4.4K",
    saves: "31K",
    shares: "1.1K",
    sound: {
      title: "Dreams",
      artist: "Fleetwood Mac",
      spotifyTrackId: "703BT1NQsfIwPFv8MXQ47m",
    },
    bg: "#2b0a34",
  },
  {
    id: "proj_tradeshield",
    kind: "project",
    index: 1,
    name: "TradeShield",
    handle: "@tradeshield.dev",
    vibe: "Catches fraud a basic model sleeps on",
    badge: "LOCKED IN",
    variant: "radar",
    caption: "Fraud team could NOT catch me lacking 🛡️",
    description:
      "Pattern recognition + behavioral anomaly detection, +25% precision recall AUC over baseline. Served via FastAPI with a real time scoring dashboard. 24/7 watch, no cap.",
    hashtags: ["#fintechcore", "#mlops", "#fraudtok", "#fastapi"],
    gradient: "from-rose-600 via-red-600 to-orange-500",
    tags: ["Python", "Scikit learn", "FastAPI", "Next.js"],
    reactions: [
      { emoji: "🚨", count: "9.3k" },
      { emoji: "⚡", count: "11.1k" },
      { emoji: "🛡️", count: "6.8k" },
    ],
    repo: "https://github.com/deevredd/Banking-Fraud-Detection",
    views: "980K",
    likes: "142K",
    comments: "3.1K",
    saves: "22K",
    shares: "780",
    sound: {
      title: "Superstition",
      artist: "Stevie Wonder",
      spotifyTrackId: "5F11g4mU5mB1V25jI2hNee",
    },
    bg: "#2b091c",
  },
  {
    id: "proj_biomarker",
    kind: "project",
    index: 2,
    name: "Lung Cancer AI",
    handle: "@biomarker.ai",
    vibe: "Published IEEE ICCDS 2025",
    badge: "PUBLISHED",
    variant: "scan",
    caption: "First author paper unlocked 🧬📄 Published 🧠",
    description:
      "SHAP guided multimodal pipeline fusing CT scans + TCGA RNA seq gene expression, 98.32% accuracy and 0.99 AUC classifying lung cancer subtypes. Built for real clinicians, not just a leaderboard.",
    hashtags: ["#researchtok", "#deeplearning", "#firstauthor", "#ieee"],
    gradient: "from-teal-600 via-cyan-600 to-blue-700",
    tags: ["DenseNet121", "Grad CAM", "SHAP", "Random Forest"],
    reactions: [
      { emoji: "🏆", count: "15.4k" },
      { emoji: "🧬", count: "10.2k" },
      { emoji: "✨", count: "7.7k" },
    ],
    repo: "https://ieeexplore.ieee.org/document/11209732",
    repoLabel: "View IEEE Paper",
    views: "540K",
    likes: "96K",
    comments: "2.2K",
    saves: "18K",
    shares: "410",
    sound: {
      title: "What's Going On",
      artist: "Marvin Gaye",
      spotifyTrackId: "3Um9toULmYFGCpvaIPFw7l",
    },
    bg: "#09242b",
  },
  {
    id: "contact",
    kind: "contact",
    heading: "Let's Connect ⚡",
    subheading: "Open for SWE roles & high impact projects",
    dmHandle: "Deevna Reddy",
    dmAvatarEmoji: "👩‍💻",
    dmScript: [
      { side: "them", text: "Hi Deevna 👋", delay: 500 },
      {
        side: "them",
        text: "Saw your portfolio and the 50M+ Alexa compliance scale is impressive.",
        delay: 1500,
      },
      { side: "you", text: "Thank you! Always excited to build scalable backend systems.", delay: 2700 },
      {
        side: "them",
        text: "We have an open engineering role. Would love to connect!",
        delay: 4000,
      },
      { side: "you", text: "Sounds great! Feel free to reach out via email or phone 🚀", delay: 5300 },
    ],
    closingNote: "Based in Chennai · Open to global remote and on site opportunities",
    caption: "Available for full time backend & machine learning engineering roles ⚡",
    hashtags: ["#backend", "#machinelearning", "#engineering", "#connect"],
    views: "3.1M",
    likes: "450K",
    comments: "12K",
    saves: "64K",
    shares: "3.2K",
    sound: {
      title: "Let's Stay Together",
      artist: "Al Green",
      spotifyTrackId: "5XKZcvbOp8t2hOqMBh4IpA",
    },
    bg: "#140727",
  },
];

export const liveComments: SlideComment[] = [
  { user: "@alexa_team", text: "50M+ DSAR compliance architecture is very clean 🔥", emoji: "🔥" },
  { user: "@aws_architect", text: "Zero downtime JDK 17 migrations across 15+ services ⚡", emoji: "⚡" },
  { user: "@ml_engineer", text: "Published IEEE multimodal pipeline with 0.99 AUC 🏆", emoji: "🏆" },
  { user: "@data_lead", text: "25% AUC precision boost on fraud patterns is huge 🛡️", emoji: "🛡️" },
  { user: "@rag_dev", text: "40% manual time reduction with vector search pipelines 🧠", emoji: "🧠" },
  { user: "@fastapi_builder", text: "Clean type guarantees and async endpoints 🚀", emoji: "🚀" },
  { user: "@springer_research", text: "Springer Nature autism disparities paper is high impact 📊", emoji: "📊" },
  { user: "@backend_lead", text: "Distributed systems that handle real audit scale ☕", emoji: "☕" },
];

export const liveToasts: SlideToast[] = [
  { user: "@alexa_dev", action: "starred DSAR compliance engine", emoji: "⭐" },
  { user: "@aws_architect", action: "viewed policy engine architecture", emoji: "☁️" },
  { user: "@ml_researcher", action: "cited ICCDS 2025 paper", emoji: "📄" },
  { user: "@tech_recruiter", action: "sent interview inquiry via email", emoji: "💼" },
  { user: "@data_lead", action: "bookmarked TradeShield pipeline", emoji: "🛡️" },
  { user: "@backend_dev", action: "shared RAG agent implementation", emoji: "⚡" },
  { user: "@springer_reader", action: "downloaded ASD clinical study", emoji: "📊" },
  { user: "@java_engineer", action: "cloned distributed service stack", emoji: "☕" },
];


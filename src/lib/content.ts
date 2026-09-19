export type Copy = { normal: string; genz: string };

export const nav = [
  { id: "about", label: "About", num: "01" },
  { id: "experience", label: "Experience", num: "02" },
  { id: "projects", label: "Projects", num: "03" },
  { id: "contact", label: "Contact", num: "04" },
];

export const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/deevnareddy" },
  { label: "GitHub", href: "https://github.com/deevredd" },
  { label: "Email", href: "mailto:deevnared@gmail.com" },
];

export const hero = {
  eyebrow: { normal: "Software Development Engineer", genz: "SWE fr fr 🧑‍💻" },
  name: "Deevna Reddy",
  words: {
    normal: ["Backend Systems", "Compliance Infrastructure", "Applied ML / RAG"],
    genz: ["Backend Shenanigans", "Compliance? Handled.", "RAG But Make It Slay"],
  },
  cta: { normal: "Let's talk", genz: "Yo let's chat" },
};

export const about: { heading: Copy; paragraphs: Copy[] } = {
  heading: { normal: "About", genz: "About Me, Bestie" },
  paragraphs: [
    {
      normal:
        "Hi, I'm Deevna! I build backend systems and ML driven products that hold up under real world constraints, whether that's compliance deadlines, audit cycles, or millions of users hitting a service at once.",
      genz:
        "Heyyy it's Deevna 👋 I build backend + ML stuff that actually survives contact with the real world, compliance deadlines, audit szn, millions of users dogpiling a service at once. No cap, it holds up.",
    },
    {
      normal:
        "I studied Computer Science Engineering (AI & Data Analytics) at Sri Ramachandra Institute of Higher Education & Research in Chennai. Most of what I know beyond that came from shipping things at Amazon: closing out compliance risk on a service used by 50M+ people, migrating a stack of microservices with zero downtime, teaching an on device model to read handwriting off a Kindle Scribe.",
      genz:
        "Studied CS Engineering (AI & Data Analytics) in Chennai, but the real syllabus was shipping at Amazon: closing compliance risk on a service with 50M+ users, migrating microservices with zero downtime (no one even noticed 💅), and teaching a lil on device model to read handwriting off a Kindle Scribe.",
    },
    {
      normal:
        "Outside of work, I like building agents and systems that make messy, unstructured problems tractable: claims documents, fraud patterns, and clinical healthcare datasets. My research has been published in IEEE ICCDS 2025 (First Author) and Springer Nature.",
      genz:
        "Off the clock, I build agents that turn absolute chaos into something tractable: claims docs, fraud patterns, healthcare datasets, you name it. My research is published in IEEE ICCDS 2025 and Springer Nature. Certified high impact behavior, and the results speak for themselves.",
    },
  ],
};

export type Experience = {
  role: Copy;
  company: string;
  location: string;
  flag: string;
  dates: string;
  description: Copy;
  tags: string[];
};

export const experience: Experience[] = [
  {
    role: { normal: "Software Development Engineer", genz: "SDE (main character era)" },
    company: "Amazon",
    location: "Chennai, IN",
    flag: "🇮🇳",
    dates: "Jan 2025 to Mar 2026",
    description: {
      normal:
        "Started as an intern building Python ETL pipelines that turned raw Kindle Scribe stroke data into a per word feature dataset for handwriting recognition training, then ported the stroke straightening model to native C++ for real time, dependency free on device inference, improving baseline detection robustness by 25%. Owned DSAR compliance onboarding for Alexa Calendar end to end, cutting manual data access and deletion processing time by 70% for a service supporting 50M+ users. Closed every outstanding policy engine risk item as sole contributor across two audit cycles, and led 15+ JDK 8/11 → 17 migrations with zero downtime rollouts, improving runtime performance by 20%.",
      genz:
        "Started as an intern building Python ETL pipelines off Kindle Scribe stroke data, then ported the model to native C++ for on device inference, +25% detection robustness. Ran DSAR compliance onboarding for Alexa Calendar solo dolo, cut manual data access and deletion time by 70% for a service with 50M+ users. Cleared every single policy engine risk item across two audit cycles by myself, then led 15+ JDK 8/11 → 17 migrations with zero downtime, +20% runtime, no drama. Built different, the whole time.",
    },
    tags: ["Java", "AWS", "JDK 17", "CI/CD", "Policy Engine", "Python", "C++"],
  },
  {
    role: { normal: "AI & ML Intern", genz: "AI/ML Intern" },

    company: "Agilisium Consulting",
    location: "Chennai, IN",
    flag: "🇮🇳",
    dates: "Aug 2023 to Oct 2023",
    description: {
      normal:
        "Built an AI powered HR chatbot using NLP and RAG over internal knowledge sources, cutting manual HR query workload by 40%.",
      genz:
        "Built an AI HR chatbot with NLP + RAG over internal docs, cut manual HR query workload by 40%. The HR team could finally touch grass.",
    },
    tags: ["Python", "NLP", "RAG"],
  },
  {
    role: { normal: "Data & Image Analyst", genz: "Data & Image Analyst" },
    company: "REUDE Technologies",
    location: "Chennai, IN",
    flag: "🇮🇳",
    dates: "Sep 2023 to Apr 2024",
    description: {
      normal:
        "Worked on drone based aerial data acquisition and point cloud processing, improving spatial data accuracy by 20% over raw sensor output.",
      genz:
        "Worked on drone based aerial data + point cloud processing, bumped spatial data accuracy +20% over raw sensor output. Drones go brrr.",
    },
    tags: ["Drone Data", "Point Cloud Processing"],
  },
];

export type Project = {
  name: string;
  icon: string;
  badge: string;
  tagline: Copy;
  paragraphs: Copy[];
  tags: string[];
  links: { label: string; href: string }[];
  stats: { value: string; label: string }[];
  problem: string;
  approach: string;
  outcome: string;
  whatIdChange: string;
  panel: "extract" | "score" | "model";
  repo?: string;
  repoLabel?: string;
};

export const projects: Project[] = [
  {
    name: "Claims Agent",
    icon: "📋",
    badge: "AI/ML · MULTI AGENT",
    repo: "https://github.com/deevredd/Modulus-AI",
    tagline: {
      normal: "Turning messy claim documents into structured, auto routed decisions.",
      genz: "Turns chaotic claim docs into structured, auto routed decisions. It just gets it.",
    },
    paragraphs: [
      {
        normal:
          "Have you ever watched a claims team drown in unstructured PDFs, scans, and emails? This agent sanitizes policyholder PII, extracts 15+ structured fields straight out of raw claim documents, and enforces strict data validation gates.",
        genz:
          "Ever watched a claims team drown in unstructured PDFs, scans, and emails? This agent masks policyholder PII, yanks 15+ structured fields straight out of raw claim docs, zero manual rekeying.",
      },
      {
        normal:
          "Automated PII masking and LLM driven validation then auto triages 80% of first pass cases, ensuring sensitive claim records are protected while routing actionable files without human bottleneck.",
        genz:
          "Automated PII masking + LLM driven validation auto triages 80% of first pass cases, keeping sensitive data locked down while speeding through routing. The claims team is so back.",
      },
    ],
    tags: ["Python", "LLMs", "RAG", "Multi Agent", "PII Redaction", "Data Governance"],
    links: [],
    stats: [
      { value: "15+", label: "fields extracted" },
      { value: "80%", label: "auto triaged" },
      { value: "100%", label: "PII masked" },
      { value: "1", label: "human review gate" },
    ],
    problem:
      "Claims teams drown in unstructured PDFs, scans, and emails containing sensitive policyholder PII. Every claim needed a human just to redact records and figure out what it said before anyone could decide anything.",
    approach:
      "An agent pipeline (Ingest & Mask PII → Extract → Validate → Route → Queue) sanitizes sensitive policyholder records, pulls 15+ structured fields out of raw documents, then runs an LLM driven validation pass before routing, so low confidence extractions never slip through silently.",
    outcome:
      "80% of first pass triage now runs without a human touching it, with full PII compliance. The other 20% get flagged with the specific field that failed validation, not just a generic 'needs review' tag.",
    whatIdChange:
      "The validation step catches malformed fields, not ambiguous ones: a claim that is technically well formed but contextually wrong still passes. I would add a second cross field consistency check before scaling past pilot volume.",
    panel: "extract",
  },
  {
    name: "TradeShield",
    icon: "🛡️",
    badge: "FINTECH · FRAUD DETECTION",
    repo: "https://github.com/deevredd/Banking-Fraud-Detection",
    tagline: {
      normal: "Catching fraud patterns a logistic regression would miss.",
      genz: "Catches fraud patterns a basic logistic regression would totally sleep on.",
    },
    paragraphs: [
      {
        normal:
          "TradeShield combines pattern recognition with behavioral anomaly detection to flag fraud a simple threshold rule would sail right past, improving precision recall AUC by 25% over a logistic regression baseline.",
        genz:
          "TradeShield mixes pattern recognition with behavioral anomaly detection to catch fraud a basic threshold rule would totally miss, +25% precision recall AUC over the baseline.",
      },
      {
        normal:
          "Served via FastAPI with a real time scoring dashboard, so risk teams see a flagged transaction the moment it happens, not the next morning.",
        genz:
          "Served via FastAPI with a real time scoring dashboard, so risk teams see a flagged transaction the second it happens, not the next morning. 24/7 watch, no cap.",
      },
    ],
    tags: ["Python", "Scikit learn", "FastAPI", "Next.js"],
    links: [],
    stats: [
      { value: "+25%", label: "precision recall AUC" },
      { value: "<1s", label: "scoring latency" },
      { value: "4", label: "risk tiers" },
      { value: "24/7", label: "live scoring" },
    ],
    problem:
      "A plain logistic regression baseline flagged obvious fraud fine, but missed behavioral patterns: the same account making small, spaced out, plausible looking transactions that only look wrong in aggregate.",
    approach:
      "Pattern recognition on transaction features, layered with a behavioral anomaly model that scores sequences rather than single transactions. Served via FastAPI so a flagged transaction shows up on the risk dashboard within a second, not the next morning's batch job.",
    outcome:
      "Precision recall AUC improved 25% over the logistic regression baseline, with the biggest gains on exactly the slow burn fraud patterns the baseline missed.",
    whatIdChange:
      "The behavioral model needs a longer transaction history to be confident, since new accounts get scored on thinner evidence. I would add a separate cold start tier instead of forcing new accounts through the same model.",
    panel: "score",
  },
  {
    name: "Genomic & Imaging Biomarker Analysis",
    icon: "🧬",
    badge: "PUBLISHED · IEEE ICCDS 2025",
    repo: "https://ieeexplore.ieee.org/document/11209732",
    repoLabel: "View paper",
    tagline: { normal: "Published at IEEE ICCDS 2025.", genz: "Published at IEEE ICCDS 2025. 🧠" },
    paragraphs: [
      {
        normal:
          "A SHAP guided multimodal pipeline that combines genomic markers with CT imaging features to classify lung cancer subtypes, built for a clinical audience rather than a leaderboard.",
        genz:
          "A SHAP guided multimodal pipeline mixing genomic markers + CT imaging to classify lung cancer subtypes, built for clinicians, not a leaderboard.",
      },
      {
        normal:
          "Every prediction ships with an interpretable explanation, so the clinician reading it can see why the model reached that call, not just what it decided. First author paper.",
        genz:
          "Every prediction comes with an interpretable explanation, so the clinician reading it actually sees why, not just what. First author paper, let's gooo.",
      },
    ],
    tags: ["DenseNet121", "Grad CAM", "Random Forest", "SHAP"],
    links: [],
    stats: [
      { value: "98.32%", label: "fusion accuracy" },
      { value: "0.99", label: "AUC" },
      { value: "3", label: "classes: LUAD/LUSC/Normal" },
      { value: "1st", label: "author credit" },
    ],
    problem:
      "Lung cancer AI tools typically use one data type and give a bare label. Clinicians cannot act on a black box call, especially on small, ambiguous nodules where a biopsy is invasive and a miss is costly.",
    approach:
      "A dual branch model: DenseNet121 + Grad CAM reads CT scans (LIDC IDRI, ~53K scans) for visual explanations, while a Random Forest + SHAP branch reads TCGA RNA seq gene expression (~798 samples) for molecular explanations. Late fusion combines both into one classifier predicting LUAD, LUSC, or Normal.",
    outcome:
      "The fused model hit 98.32% accuracy and 0.99 AUC, beating either modality alone (90.15% imaging only, 95.47% genomics only). SHAP flagged EGFR, TP63, and NKX2.1 as top drivers, consistent with known cancer pathways. First author paper, IEEE ICCDS 2025.",
    whatIdChange:
      "Validation was retrospective on public datasets (LIDC IDRI, TCGA), not real clinical cases. I would want prospective validation with a hospital partner before trusting this near an actual diagnosis.",
    panel: "model",
  },
  {
    name: "Ethnic Disparities in ASD Analysis",
    icon: "📊",
    badge: "PUBLISHED · SPRINGER NATURE",
    repo: "https://link.springer.com/chapter/10.1007/978-3-032-14908-4_37",
    repoLabel: "View paper",
    tagline: {
      normal: "Statistical analysis and machine learning evaluation of ethnic disparities in Autism Spectrum Disorder among toddlers.",
      genz: "Statistical analysis + ML modeling on ethnic disparities in ASD screening among toddlers. Published in Springer Nature.",
    },
    paragraphs: [
      {
        normal:
          "An empirical healthcare study investigating demographic and clinical screening disparities in early pediatric ASD detection, published as a research chapter in Springer Nature.",
        genz:
          "An empirical healthcare study looking at demographic and clinical screening disparities in early pediatric ASD detection, published as a chapter in Springer Nature.",
      },
      {
        normal:
          "Evaluates feature importance across diverse ethnic cohorts to quantify diagnostic gaps and support equitable early intervention screening frameworks.",
        genz:
          "Evaluates feature importance across diverse ethnic cohorts to quantify diagnostic gaps and support equitable early intervention frameworks.",
      },
    ],
    tags: ["Statistical Modeling", "Machine Learning", "Healthcare Data", "Springer Nature"],
    links: [],
    stats: [
      { value: "Springer", label: "Nature Chapter" },
      { value: "Toddlers", label: "Cohort Focus" },
      { value: "ASD", label: "Clinical Screening" },
      { value: "Author", label: "Publication Credit" },
    ],
    problem:
      "Traditional ASD screening models often underrepresent minority ethnic cohorts, leading to delayed diagnoses and disparate screening outcomes during early childhood development.",
    approach:
      "Evaluated demographic and behavioral screening indicators across ethnic cohorts using statistical hypothesis testing and supervised classification to measure disparate impact.",
    outcome:
      "Quantified significant variance in screening markers across ethnic groups, establishing benchmarks for equitable pediatric diagnostic frameworks. Published in Springer Nature.",
    whatIdChange:
      "I would expand the longitudinal cohort data to track post intervention developmental outcomes across multiple clinical hospital networks over a multi year timeframe.",
    panel: "model",
  },
];

export const contact = {
  heading: { normal: "Contact", genz: "Contact (slide in)" },
  title: { normal: "Say hello!", genz: "Say heyyy 👋" },
  body: {
    normal:
      "I'm always open to new challenges and collaborations. Whether you have a question or just want to say hi, I'll get back to you!",
    genz:
      "Always down for new challenges + collabs. Question, opportunity, or just wanna say hi, shoot your shot, I'll hit back.",
  },
  email: "deevnared@gmail.com",
  phone: "+91 9940266618",
};

import { InnovationTrack, SuggestedTrack, ProgrammeTimelineEvent, PrizeCategory, FAQItem, ProgrammeSettings } from '@/types';

export const siteConfig = {
  name: "ESSENCE",
  fullName: "ESSENCE · From Ideas to Impact",
  presenter: "Chetana’s R. K. Institute of Management & Research & Institute of Management & Research",
  shortPresenter: "Chetana's CiEL",
  tagline: "From Ideas to Impact",
  supportingLine: "An entrepreneurial competition where innovative ideas compete to become impactful ventures.",
  description:
    "An entrepreneurial competition where innovative ideas compete to become impactful ventures. A startup-building journey for student founders from raw concept to a venture-ready pitch.",
  url: "https://essence.cielhub.org",
  grandFundPool: "₹1.5 Lakh",
  grandFundPoolAmount: 150000,
  institution: {
    name: "Chetana's R. K. Institute of Management & Research & Institute of Management & Research",
    centre: "Centre for Innovation & Entrepreneurship Learning (CiEL)",
    campus: "Chetana's Campus, Survey No. 341, Govt. Colony, Bandra (East), Mumbai - 400051, Maharashtra, India",
    auditorium: "Chetana’s Auditorium",
    parentTrust: "Chetana's Trust",
    email: "ciel@chetana.org",
    supportEmail: "essence@cielhub.org",
    phone: "+91 22 6215 7800",
    website: "https://www.cielhub.org",
    contacts: [
      { name: "PREM SHARMA", phone: "+91 9833883098" },
      { name: "AKSHAY DUBEY", phone: "+91 8451942277" },
    ],
  },
  social: {
    linkedin: "https://www.linkedin.com/school/chetanas-management/",
    instagram: "https://instagram.com/ciel_chetana",
    instagramHandle: "@ciel_chetana",
    website: "https://www.cielhub.org",
    websiteDisplay: "www.cielhub.org",
  },
  // Official Registration & Event Details (from Brochure)
  registrationDetails: {
    teamSize: "2–4 people",
    minTeamSize: 2,
    maxTeamSize: 4,
    registrationFee: "₹500 per team",
    registrationFeeAmount: 500,
    lastDate: "26 November",
    bootcampDate: "28 November",
    mainEventDate: "21–22 December",
    time: "10:00 AM",
    venue: "Chetana’s Auditorium",
    grandFundPool: "₹1.5 Lakh",
  },
  // Purpose, Vision & Mission (PAGE 2)
  purpose: {
    title: "OUR PURPOSE. OUR FUTURE.",
    subtitle: "The vision that drives innovation and impact.",
    vision:
      "To be a premier hub for nurturing an innovative mindset and entrepreneurial talents to produce significant, long-term solutions to global challenges.",
    mission:
      "Cultivating an ecosystem that allows individuals to translate ideas into significant initiatives through experiential learning, interdisciplinary collaboration, and strategic partnerships to generate long-term economic and social growth.",
  },
  // What is ESSENCE? (PAGE 3)
  whatIsEssence: {
    title: "What is ESSENCE?",
    subtitle: "More than a competition. A real startup-building journey.",
    description: "A startup-building journey for student founders from raw concept to a venture-ready pitch.",
    pillars: [
      {
        number: "01",
        title: "IDEATE",
        heading: "IDEATE – 01",
        summary: "Begin with a raw concept and shape it into a problem worth solving.",
        description: "Turn your imagination into innovative ideas that inspire change.",
      },
      {
        number: "02",
        title: "INNOVATE",
        heading: "INNOVATE – 02",
        summary: "Test, refine and build your idea into a real, workable venture.",
        description: "Validate assumptions, prototype solutions, and build an operational foundation.",
      },
      {
        number: "03",
        title: "CREATE IMPACT",
        heading: "CREATE IMPACT – 03",
        summary: "Pitch with confidence and turn your venture into real-world impact.",
        description: "Showcase on the big stage, gain mentor networks, and launch your entrepreneurial venture.",
      },
    ],
  },
  // What You Walk Away With (PAGE 4)
  walkAwayWith: [
    "Validated Business Model",
    "Prototype and GTM Plan",
    "Mentor and Founder Network",
    "Certificates and Recognition",
    "Funding opportunity up to ₹1.5 Lakh",
  ],
  // Why Participate? (PAGE 6)
  whyParticipate: [
    {
      id: 1,
      number: "01",
      title: "Structured Learning Journey",
      description: "From raw idea to venture-ready pitch.",
    },
    {
      id: 2,
      number: "02",
      title: "Mentorship & Expert Guidance",
      description: "Learn from industry leaders and entrepreneurs.",
    },
    {
      id: 3,
      number: "03",
      title: "Build Real Solutions",
      description: "Validate, prototype and develop your idea.",
    },
    {
      id: 4,
      number: "04",
      title: "Funding Opportunity",
      description: "Compete for a grand fund pool of up to ₹1.5 Lakh.",
    },
    {
      id: 5,
      number: "05",
      title: "Pitch on the Big Stage",
      description: "Present your venture at the 2-day grand finale.",
    },
    {
      id: 6,
      number: "06",
      title: "Network & Collaborate",
      description: "Meet like-minded founders across institutions.",
    },
    {
      id: 7,
      number: "07",
      title: "Recognition & Rewards",
      description: "Certificates, prizes and visibility for your venture.",
    },
    {
      id: 8,
      number: "08",
      title: "Make an Impact",
      description: "Create solutions for real-world challenges.",
    },
  ],
  // Who Can Join? (PAGE 6)
  whoCanJoin: {
    tagline: "Fewer rules. More founders.",
    points: [
      {
        title: "Open to all",
        description: "Students and aspiring founders from any institution.",
      },
      {
        title: "No academic gate",
        description: "Any stream, any year. If you have an idea, you belong here.",
      },
      {
        title: "Team of 2–4 members",
        description: "Cross-college and cross-stream teams are welcome.",
      },
      {
        title: "Register by 26 November",
        description: "Registration is live. Complete your team submission online.",
      },
    ],
  },
  // Code of Conduct (PAGE 7)
  codeOfConduct: [
    {
      number: "01",
      title: "Respect and Courtesy",
      description: "All participants must treat organizers, judges, and fellow teams with respect and courtesy.",
    },
    {
      number: "02",
      title: "Misconduct and Disqualification",
      description:
        "Any form of misconduct, harassment, or disruption of another team's presentation will lead to immediate disqualification and may be reported to the respective college.",
    },
    {
      number: "03",
      title: "Organizers' Rights",
      description:
        "Organizers reserve the right to modify the schedule, judging panel, or rules if circumstances require, with prior notice to all registered teams.",
    },
    {
      number: "04",
      title: "Final Decisions",
      description: "Decisions made by the organizing committee and judges are final and binding on all matters related to the event.",
    },
    {
      number: "05",
      title: "Confidentiality",
      description:
        "Participants must not disclose confidential information, trade secrets, or proprietary material belonging to other teams without permission.",
    },
  ],
  // Partnership & Sponsorship (PAGE 8)
  partnership: {
    header: "Your Spark. Our Stage. Endless Possibilities.",
    subheading: "Register your team with ESSENCE to back the next generation of founders.",
    partnerTitle: "Partner with ESSENCE",
    partnerSubtitle: "Support the next generation of innovators.",
    sponsorshipOpportunities: [
      "Brand visibility among emerging talent.",
      "Engage with top student talent.",
      "CSR and social impact alignment.",
      "Connect with future founders.",
    ],
    motto: "IDEATE • INNOVATE • CREATE IMPACT",
  },
  // Planning and outreach indicators
  planningTargets: {
    grandFundPool: "₹1.5 Lakh",
    teamSize: "2–4 members",
    registrationFee: "₹500 / team",
    bootcampDate: "28 Nov",
    finaleDate: "21–22 Dec",
    venue: "Chetana's Auditorium",
    collegeOutreach: "100+",
    studentOutreach: "5,000+",
  },
  navItems: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Journey", href: "/journey" },
    { label: "Tracks", href: "/tracks" },
    { label: "Timeline", href: "/timeline" },
    { label: "Awards", href: "/awards" },
    { label: "Showcase", href: "/showcase" },
    { label: "Colleges", href: "/colleges" },
    { label: "FAQ", href: "/faq" },
  ],
  footerLinks: {
    competition: [
      { label: "Competition Journey", href: "/journey" },
      { label: "Innovation Tracks", href: "/tracks" },
      { label: "Who Can Join", href: "/eligibility" },
      { label: "Code of Conduct", href: "/rules" },
      { label: "Official Timeline", href: "/timeline" },
      { label: "Awards & Pool", href: "/awards" },
    ],
    participate: [
      { label: "Register Your Team", href: "/register" },
      { label: "Participant Login", href: "/login" },
      { label: "Prototype Showcase", href: "/showcase" },
      { label: "Mentorship Model", href: "/mentorship" },
      { label: "College Partners", href: "/colleges" },
      { label: "Finalists Archive", href: "/finalists" },
    ],
    institution: [
      { label: "About CiEL", href: "/about" },
      { label: "Let's Connect", href: "/contact" },
      { label: "Official Results", href: "/results" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Admin Portal", href: "/admin" },
    ],
  },
};

export const initialProgrammeSettings: ProgrammeSettings = {
  isRegistrationOpen: true,
  isIdeaSubmissionOpen: true,
  isPrototypeSubmissionOpen: false,
  isEvaluationLive: false,
  areResultsPublished: false,
  maxTeamSize: 4,
  minTeamSize: 2,
  bannerMessage: "Registration is live! Register your team of 2–4 members before 26 November. Grand Fund Pool: ₹1.5 Lakh.",
  isBannerActive: true,
  bannerLink: "/register",
};

export const innovationTracks: InnovationTrack[] = [
  {
    id: "tech-digital",
    slug: "tech-digital",
    name: "Technology & Digital Innovation",
    iconName: "Cpu",
    description: "Software, IoT, AI/ML tools, cybersecurity, and connected hardware creating tangible workflow and industrial efficiencies.",
    detailedDescription: "This track invites undergraduate innovators to build practical digital systems, hardware-software integrations, and automation tools that solve everyday operational bottlenecks or create novel consumer experiences.",
    examples: [
      "Edge-computing IoT monitors for local industrial machinery",
      "Low-bandwidth document validation tools for civic offices",
      "Accessible voice-activated interfaces for vernacular languages",
      "Automated inventory management for micro-enterprises",
    ],
    evaluationFocus: ["Technical feasibility", "Novelty of architecture", "Functioning prototype quality", "Scalability"],
    isActive: true,
    sortOrder: 1,
  },
  {
    id: "sustainability-environment",
    slug: "sustainability-environment",
    name: "Sustainability & Environment",
    iconName: "Leaf",
    description: "Clean energy solutions, circular waste valorisation, water conservation, and eco-friendly consumer alternatives.",
    detailedDescription: "Focused on pressing environmental challenges—from industrial effluent management to urban e-waste, rainwater harvesting, and renewable energy adoption for micro-communities.",
    examples: [
      "Decentralised composting and bio-fertilizer conversion kits",
      "Smart domestic water audit and leak prevention sensors",
      "Biodegradable packaging derived from agricultural bagasse",
      "Solar-powered thermal cooling storage for street vendors",
    ],
    evaluationFocus: ["Environmental lifecycle impact", "Material feasibility", "Economic viability", "Prototype test results"],
    isActive: true,
    sortOrder: 2,
  },
  {
    id: "healthcare-wellbeing",
    slug: "healthcare-wellbeing",
    name: "Healthcare & Social Well-being",
    iconName: "HeartPulse",
    description: "Preventative wellness tech, assistive devices, maternal and elderly care gadgets, and clinic workflow aids.",
    detailedDescription: "Addressing public healthcare accessibility, assistive tech for persons with disabilities, and low-cost diagnostic monitoring devices suitable for rural and semi-urban primary healthcare centres.",
    examples: [
      "Affordable non-invasive screening tools for vital telemetry",
      "Low-cost mechanical prosthetic attachments for rehabilitation",
      "Automated medication adherence dispensers for elderly care",
      "Emergency medical coordination dashboards for tier-2 clinics",
    ],
    evaluationFocus: ["Patient safety & ethics", "Ergonomics & clinical validity", "Cost accessibility", "Simplicity of operation"],
    isActive: true,
    sortOrder: 3,
  },
  {
    id: "agriculture-rural",
    slug: "agriculture-rural",
    name: "Agriculture & Rural Development",
    iconName: "Sprout",
    description: "Precision farming tools, post-harvest preservation, farm mechanisation, and farmer market linkage solutions.",
    detailedDescription: "Tailored to agrarian realities. Prioritising water-efficient irrigation, crop disease detection, and decentralised processing.",
    examples: [
      "Solar-assisted grain dryers for smallholder farmers",
      "Soil moisture telemetry pods communicating over LoRaWAN",
      "Low-cost mechanical weeding attachments for small plots",
      "Direct-to-cooperative perishables cold-chain tracking tag",
    ],
    evaluationFocus: ["Grassroots usability", "Weather resilience", "Return on investment for farmers", "Ease of local repair"],
    isActive: true,
    sortOrder: 4,
  },
  {
    id: "education-accessibility",
    slug: "education-accessibility",
    name: "Education & Accessibility",
    iconName: "GraduationCap",
    description: "Inclusive learning aids, STEM experimental kits, neurodiverse curriculum tools, and vocational training hardware.",
    detailedDescription: "Innovations bridging educational disparities, tactile learning tools for visually impaired students, and interactive vocational training aids for apprentices.",
    examples: [
      "Low-cost tactile Braille learning slate with audio playback",
      "Open-source laboratory apparatus for secondary schools",
      "Offline digital literacy stations powered by Raspberry Pi",
      "Interactive kinetic anatomy models for nursing students",
    ],
    evaluationFocus: ["Pedagogical impact", "Inclusivity & accessibility", "Cost per student", "Durability in classroom use"],
    isActive: true,
    sortOrder: 5,
  },
  {
    id: "business-fintech",
    slug: "business-fintech",
    name: "Business, Commerce & FinTech",
    iconName: "TrendingUp",
    description: "Financial inclusion tools, supply chain verification, micro-lending tech, and retail empowerment platforms.",
    detailedDescription: "Empowering small merchants, self-help groups (SHGs), and youth entrepreneurs with frictionless accounting, credit appraisal tools, and regional supply chain logistics.",
    examples: [
      "Voice-guided vernacular bookkeeping app for kirana stores",
      "Micro-chitfund ledger system with transparent audit trails",
      "Decentralised proof-of-delivery for rural logistics routes",
      "Automated GST invoice scanner tailored for local job workers",
    ],
    evaluationFocus: ["Market demand & economics", "Regulatory awareness", "User friction & trust", "Implementation speed"],
    isActive: true,
    sortOrder: 6,
  },
  {
    id: "smart-communities",
    slug: "smart-communities",
    name: "Smart Communities & Civic Problem-Solving",
    iconName: "Building2",
    description: "Urban mobility, municipal waste reporting, public safety systems, and participatory governance tools.",
    detailedDescription: "Civic innovations solving municipal and neighbourhood problems in growing towns and metropolitan zones—from public transit punctuality to drainage telemetry.",
    examples: [
      "Community flood-level warning beacons for urban nullahs",
      "Crowdsourced bus timing telemetry for municipal transit",
      "Solar street illumination systems with integrated SOS alerts",
      "Pothole hazard mapping kit mounted on public vehicles",
    ],
    evaluationFocus: ["Civic impact", "Public safety & reliability", "Deployment viability with local bodies", "Community ownership"],
    isActive: true,
    sortOrder: 7,
  },
];

// The Journey: 4 Stages, One Destination (PAGE 4)
export const competitionStages: ProgrammeTimelineEvent[] = [
  {
    id: "stage-1",
    stageNumber: 1,
    title: "REGISTER",
    shortDescription: "Assemble your team: 2–4 members, fill registration form. Closes 26 November.",
    longDescription: "Assemble your team. Form a team of 2–4 members and fill in the registration form. Registration closes 26 November.",
    participantAction: "Form your team of 2–4 members, complete the registration form, and register before 26 November.",
    dates: "Before – 26 November",
    isDateConfirmed: true,
    status: "in_progress",
    bulletPoints: [
      "Form a team of 2–4 members.",
      "Fill in the registration form.",
      "Registration closes 26 November.",
    ],
  },
  {
    id: "stage-2",
    stageNumber: 2,
    title: "BOOTCAMP",
    shortDescription: "Find the right problem: Design thinking, problem validation, market research, business model basics.",
    longDescription: "Find the right problem. Comprehensive bootcamp covering design thinking, problem validation, market research, and business model basics.",
    participantAction: "Attend the interactive bootcamp on 28 November to refine and validate your venture hypothesis.",
    dates: "28 November",
    isDateConfirmed: true,
    status: "upcoming",
    bulletPoints: [
      "Design thinking.",
      "Problem validation.",
      "Market research.",
      "Business model basics.",
    ],
  },
  {
    id: "stage-3",
    stageNumber: 3,
    title: "BUILD & REFINE",
    shortDescription: "Turn ideas into reality: Develop prototype, test and improve solution, refine business model, perfect pitch.",
    longDescription: "Turn ideas into reality. Develop your prototype, test and improve your solution, refine your business model, and perfect your final pitch.",
    participantAction: "Develop your prototype, validate with users, and perfect your presentation deck.",
    dates: "After Bootcamp",
    isDateConfirmed: true,
    status: "upcoming",
    bulletPoints: [
      "Develop your prototype.",
      "Test and improve your solution.",
      "Refine your business model.",
      "Perfect your final pitch.",
    ],
  },
  {
    id: "stage-4",
    stageNumber: 4,
    title: "GRAND FINALE",
    shortDescription: "Pitch. Win. Impact. Final pitches, 10:00 AM at Chetana's Auditorium. Up to ₹1.5 Lakh fund pool.",
    longDescription: "Pitch. Win. Impact. Final pitches starting at 10:00 AM at Chetana's Auditorium. Recognition and funding from a pool of up to ₹1.5 Lakh.",
    participantAction: "Present your venture before distinguished judges at Chetana's Auditorium.",
    dates: "21–22 December",
    isDateConfirmed: true,
    status: "upcoming",
    bulletPoints: [
      "Final pitches, 10:00 AM.",
      "Chetana's Auditorium.",
      "Recognition and funding from a pool of up to ₹1.5 Lakh.",
    ],
  },
];

export const prizeCategories: PrizeCategory[] = [
  {
    id: "grand-champion",
    title: "ESSENCE Grand Winner",
    award: "State Innovation Trophy & Cash Grant",
    amount: 75000,
    description: "Conferred on the highest-scoring venture demonstrating exceptional innovation, validated business model, and high scalability potential.",
    badgeText: "Fund Grant: ₹75,000",
    benefits: [
      "Funding opportunity from ₹1.5 Lakh grand pool",
      "Direct incubation review at Chetana's CiEL",
      "Executive mentorship by veteran startup founders",
      "Official Winner Citation and Trophy",
    ],
  },
  {
    id: "first-runner-up",
    title: "First Runner-Up",
    award: "Excellence Trophy & Cash Grant",
    amount: 45000,
    description: "Awarded to the outstanding runner-up team with strong prototype validation, market research, and high impact viability.",
    badgeText: "Fund Grant: ₹45,000",
    benefits: [
      "Funding opportunity from ₹1.5 Lakh grand pool",
      "Fast-track incubation review access",
      "Official Runner-Up Citation & Trophy",
      "Domain mentor network pairing",
    ],
  },
  {
    id: "second-runner-up",
    title: "Second Runner-Up & Citations",
    award: "Special Commendation & Grant",
    amount: 30000,
    description: "Recognising remarkable student creativity, functional prototype execution, and social/economic impact potential.",
    badgeText: "Fund Grant: ₹30,000",
    benefits: [
      "Funding opportunity from ₹1.5 Lakh grand pool",
      "Ecosystem mentorship linkage",
      "Official Commendation Certificate & Plaque",
      "GTM guidance from CiEL advisors",
    ],
  },
];

export const faqList: FAQItem[] = [
  {
    id: "faq-1",
    category: "Eligibility",
    question: "Who can join ESSENCE?",
    answer:
      "ESSENCE operates on 'Fewer rules. More founders.' It is open to all students and aspiring founders from any institution. There is no academic gate—any stream, any year. If you have an idea, you belong here.",
  },
  {
    id: "faq-2",
    category: "Teams & Registration",
    question: "What is the team size requirement?",
    answer:
      "Teams must comprise 2 to 4 people. Cross-college and cross-stream teams are very warmly welcomed.",
  },
  {
    id: "faq-3",
    category: "Teams & Registration",
    question: "What is the registration fee?",
    answer:
      "The registration fee is ₹500 per team. Registration closes on 26 November.",
  },
  {
    id: "faq-4",
    category: "Teams & Registration",
    question: "When is the last date to register?",
    answer:
      "The deadline for team registration is 26 November. We encourage teams to register early to prepare for the Bootcamp on 28 November.",
  },
  {
    id: "faq-5",
    category: "Submissions & Prototype",
    question: "What happens during the Bootcamp on 28 November?",
    answer:
      "The Bootcamp is an intensive journey focusing on finding the right problem through design thinking, problem validation, market research, and business model basics.",
  },
  {
    id: "faq-6",
    category: "Submissions & Prototype",
    question: "What is the 'Build & Refine' stage?",
    answer:
      "After the Bootcamp, teams turn their ideas into reality by developing their prototype, testing and improving their solution, refining their business model, and perfecting their final pitch.",
  },
  {
    id: "faq-7",
    category: "Awards & Venue",
    question: "When and where is the Grand Finale held?",
    answer:
      "The Grand Finale takes place on 21–22 December, with final pitches starting at 10:00 AM at Chetana’s Auditorium in Bandra (East), Mumbai.",
  },
  {
    id: "faq-8",
    category: "Awards & Venue",
    question: "What is the Grand Fund Pool?",
    answer:
      "Teams compete for recognition and funding from a grand pool of up to ₹1.5 Lakh, alongside validated GTM plans, founder networks, and certificates.",
  },
  {
    id: "faq-9",
    category: "Mentorship & Judging",
    question: "What do participants walk away with?",
    answer:
      "Participants walk away with: 1. Validated Business Model, 2. Prototype and GTM Plan, 3. Mentor and Founder Network, 4. Certificates and Recognition, and 5. Funding opportunity up to ₹1.5 Lakh.",
  },
  {
    id: "faq-10",
    category: "Mentorship & Judging",
    question: "How do I connect with the organizers?",
    answer:
      "You can connect directly with our organizing team: Prem Sharma (+91 9833883098) or Akshay Dubey (+91 8451942277), follow @ciel_chetana on Instagram, or visit www.cielhub.org.",
  },
];

export const suggestedInnovationTracks: SuggestedTrack[] = [
  // Row 1
  {
    id: "ai-ml",
    name: "AI / ML",
    description: "Artificial intelligence, machine learning and intelligent systems.",
    iconName: "Brain",
    row: 1,
  },
  {
    id: "saas",
    name: "SaaS",
    description: "Software products, digital platforms and scalable cloud-based solutions.",
    iconName: "Cloud",
    row: 1,
  },
  {
    id: "fintech",
    name: "FinTech",
    description: "Financial technology, digital payments, financial inclusion and smarter financial services.",
    iconName: "TrendingUp",
    row: 1,
  },
  // Row 2
  {
    id: "edtech",
    name: "EdTech",
    description: "Technology-enabled learning, educational access and learning experiences.",
    iconName: "GraduationCap",
    row: 2,
  },
  {
    id: "healthtech",
    name: "HealthTech",
    description: "Digital health services, health access, wellness and healthcare delivery.",
    iconName: "HeartPulse",
    row: 2,
  },
  {
    id: "medtech",
    name: "MedTech",
    description: "Medical devices, diagnostic tools and healthcare technologies.",
    iconName: "Stethoscope",
    row: 2,
  },
  // Row 3
  {
    id: "agritech",
    name: "AgriTech",
    description: "Agricultural innovation, precision farming and farmer-focused solutions.",
    iconName: "Sprout",
    row: 3,
  },
  {
    id: "foodtech",
    name: "FoodTech",
    description: "Food production, processing, distribution, safety and waste reduction.",
    iconName: "Utensils",
    row: 3,
  },
  {
    id: "climatetech",
    name: "ClimateTech",
    description: "Solutions addressing climate change, resilience and emissions reduction.",
    iconName: "CloudRain",
    row: 3,
  },
  // Row 4
  {
    id: "cleantech",
    name: "CleanTech",
    description: "Clean energy, resource efficiency, pollution reduction and sustainable technologies.",
    iconName: "Leaf",
    row: 4,
  },
  {
    id: "ev-mobility",
    name: "EV / Mobility",
    description: "Electric vehicles, charging infrastructure, transport and mobility systems.",
    iconName: "Zap",
    row: 4,
  },
  {
    id: "robotics",
    name: "Robotics",
    description: "Robotics, automation and intelligent machines.",
    iconName: "Bot",
    row: 4,
  },
  // Row 5
  {
    id: "drones",
    name: "Drones",
    description: "Uncrewed aerial systems and responsible drone-based applications.",
    iconName: "Plane",
    row: 5,
  },
  {
    id: "defencetech",
    name: "DefenceTech",
    description: "Technologies addressing defence, security and resilience, subject to applicable laws and competition rules.",
    iconName: "ShieldCheck",
    row: 5,
  },
  {
    id: "deeptech",
    name: "DeepTech",
    description: "Research-driven, advanced and science-based technologies with significant technical innovation.",
    iconName: "Atom",
    row: 5,
  },
];

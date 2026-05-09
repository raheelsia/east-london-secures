export const SITE = {
  name: "Security Training London",
  centre: "SIA Approved Centre 11461",
  phone: "+44 20 0000 0000",
  phoneDisplay: "020 0000 0000",
  whatsapp: "447000000000",
  email: "info@securitytraininglondon.co.uk",
  address: "East London (Barking · Ilford · Whitechapel · Rainham)",
};

export const COURSES = [
  {
    slug: "sia-door-supervisor",
    title: "SIA Door Supervisor Course",
    short: "Door Supervisor",
    price: 400,
    duration: "6 Days",
    badge: "Most Popular",
    image: "door",
    summary:
      "The complete SIA Door Supervisor qualification, including Emergency First Aid at Work and a free Fire Marshal certificate. Unlimited resits included.",
    highlights: [
      "Unlimited Resits Included",
      "Includes Emergency First Aid at Work",
      "FREE Fire Marshal Certificate",
      "Weekly start dates",
      "All assessments on-site",
    ],
    modules: [
      "Working in the Private Security Industry",
      "Working as a Door Supervisor",
      "Conflict Management",
      "Physical Intervention Skills",
      "Emergency First Aid at Work",
    ],
  },
  {
    slug: "sia-cctv-operator",
    title: "SIA CCTV Operator Course",
    short: "CCTV Operator",
    price: 250,
    duration: "3–4 Days",
    image: "cctv",
    summary:
      "Become a qualified Public Space Surveillance (CCTV) Operator with full training, exams and practical assessment.",
    highlights: [
      "Full training & assessment",
      "Practical CCTV equipment use",
      "Data Protection & PoFA",
      "Weekly start dates",
    ],
    modules: [
      "Working in the Private Security Industry",
      "Working as a CCTV Operator",
      "Practical Use of CCTV Equipment",
    ],
  },
  {
    slug: "sia-door-supervisor-refresher",
    title: "SIA Door Supervisor Refresher / Top-Up",
    short: "DS Refresher",
    price: 200,
    duration: "2 Days",
    image: "refresher",
    summary:
      "Renew your SIA Door Supervisor licence with our 2-day Top-Up course covering the latest legislation and physical intervention.",
    highlights: [
      "Ideal for licence renewal",
      "Latest legislation & PI updates",
      "Available every week",
    ],
    modules: [
      "Top-Up Knowledge",
      "Physical Intervention Refresher",
    ],
  },
  {
    slug: "emergency-first-aid",
    title: "Emergency First Aid at Work (EFAW)",
    short: "First Aid",
    price: 100,
    duration: "1 Day",
    image: "firstaid",
    summary:
      "HSE-approved 1-day Emergency First Aid at Work qualification, valid for 3 years.",
    highlights: ["Ofqual regulated", "Valid for 3 years", "Certificate same day"],
    modules: ["Primary Survey", "CPR & AED", "Common Workplace Injuries"],
  },
  {
    slug: "fire-marshal",
    title: "Fire Marshal / Fire Warden",
    short: "Fire Marshal",
    price: 100,
    duration: "1 Day",
    image: "fire",
    summary:
      "Become a competent Fire Marshal/Warden in just one day. Practical extinguisher training included.",
    highlights: ["Practical extinguisher use", "Evacuation procedures", "Risk assessment"],
    modules: ["Fire Safety Law", "Fire Risk Assessment", "Use of Extinguishers", "Evacuation"],
  },
];

export const LOCATIONS = [
  { slug: "barking", name: "Barking", postcode: "IG11", desc: "Easily reached via Barking station — District, Hammersmith & City and Overground." },
  { slug: "ilford", name: "Ilford", postcode: "IG1", desc: "Central Ilford venue, 2 minutes from Ilford Elizabeth line station." },
  { slug: "whitechapel", name: "Whitechapel", postcode: "E1", desc: "Modern facility next to Whitechapel station — Elizabeth, District & Overground lines." },
  { slug: "rainham", name: "Rainham", postcode: "RM13", desc: "Rainham (Essex) training site with free parking and great motorway access." },
];

export const courseBySlug = (slug: string) => COURSES.find((c) => c.slug === slug);

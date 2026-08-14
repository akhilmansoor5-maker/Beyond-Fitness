/**
 * Central content / data layer.
 * Edit here when client supplies updates — do not invent facts in components.
 */

export const brand = {
  name: "Beyond Fitness",
  legalName: "BEYOND FITNESS MANJERI",
  location: "Manjeri, Kerala",
  tagline: "Two arenas. One standard.",
  philosophy: "Journey Beyond Your Limits",
  logo: {
    primary: "/brand/logo.png",
    withBackground: "/brand/logo-with-bg.png",
    onLight: null as string | null,
  },
} as const;

export const nav = [
  { href: "/arenas", label: "Arenas" },
  { href: "/fitness", label: "Fitness" },
  { href: "/personal-training", label: "PT" },
  { href: "/combat", label: "Combat" },
  { href: "/astra", label: "Astra" },
  { href: "/gallery", label: "Gallery" },
  { href: "/visit", label: "Visit" },
  { href: "/start-training", label: "Start training", cta: true },
] as const;

/** Website booking offer — confirm wording with client anytime */
export const offer = {
  active: true,
  code: "WEB5",
  percent: 5,
  eyebrow: "New members",
  title: "Book through this website — get 5% off",
  detail:
    "New members who enquire via this website receive 5% off joining. Mention code WEB5 on WhatsApp or when you visit.",
  finePrint: "Offer for new members who start through the website enquiry. Details confirmed at the desk.",
} as const;

export const personalTraining = {
  headline: "One-to-one. Clear coaching.",
  lede: "Personal training is a core offering at Beyond Fitness — structured sessions, individual approach, and progression with intent.",
  points: [
    { num: "01", title: "One-to-one", note: "Focused coaching, not a crowded class." },
    { num: "02", title: "Goal-led", note: "Strength, physique, conditioning — your path." },
    { num: "03", title: "Form & progression", note: "Standards first. Load that matches you." },
    { num: "04", title: "Accountability", note: "Show up with a plan. Leave with the next one." },
  ],
  firstSession:
    "First consult covers your goal, training history, and how PT fits your week. Packages and trainer matching are confirmed in person.",
} as const;

export const contact = {
  addressLines: [
    "UA Mall, opposite Popees,",
    "Mullampara Road,",
    "Kacherippadi,",
    "Manjeri, Kerala 676121",
  ],
  addressSingle:
    "UA Mall, opposite Popees, Mullampara Road, Kacherippadi, Manjeri, Kerala 676121",
  addressHint: "UA Mall · Mullampara Road · Manjeri",
  /** Phone and WhatsApp are the same number */
  phone: "9446518977",
  phoneDisplay: "+91 9446518977",
  phoneHref: "tel:+919446518977",
  whatsapp: "9446518977",
  whatsappDisplay: "+91 9446518977",
  whatsappUrl: "https://wa.me/919446518977",
  email: "[ Email forthcoming ]",
  instagram: "https://www.instagram.com/beyond_._fitness/",
  instagramHandle: "@beyond_._fitness",
  mapsUrl: "https://maps.app.goo.gl/m2UoivBkDd7ezkZe9",
  mapsEmbed:
    "https://www.google.com/maps?q=BEYOND+FITNESS+MANJERI,+UA+Mall,+Mullampara+Rd,+Kacherippadi,+Manjeri,+Kerala+676121&output=embed",
  hours: [
    { day: "Monday", time: "5:30 am – 11:00 pm" },
    { day: "Tuesday", time: "5:30 am – 11:00 pm" },
    { day: "Wednesday", time: "5:30 am – 11:00 pm" },
    { day: "Thursday", time: "5:30 am – 11:00 pm" },
    { day: "Friday", time: "5:30 am – 11:00 pm" },
    { day: "Saturday", time: "5:30 am – 11:00 pm" },
    { day: "Sunday", time: "4:00 pm – 9:00 pm" },
  ],
  rating: "4.6",
  reviewCount: "37",
} as const;

export const trustPoints = [
  {
    num: "01",
    title: "Rated locally",
    note: "4.6 average from 37 Google reviews.",
  },
  {
    num: "02",
    title: "Easy to find",
    note: "UA Mall, opposite Popees — Mullampara Road, Manjeri.",
  },
  {
    num: "03",
    title: "Long training window",
    note: "Mon–Sat 5:30 am–11 pm · Sunday 4–9 pm.",
  },
  {
    num: "04",
    title: "Two arenas",
    note: "Fitness and Astra under one standard — body and skill.",
  },
] as const;

export const fitnessSystem = [
  {
    num: "01",
    title: "Strength",
    note: "Structured loading. Controlled progression.",
  },
  {
    num: "02",
    title: "Cardio & Conditioning",
    note: "Work capacity built with intent.",
  },
  {
    num: "03",
    title: "Personal Training",
    note: "One-to-one coaching with a clear standard.",
  },
  {
    num: "04",
    title: "Weight Gain / Loss",
    note: "Goal-led training paths — details with coaches.",
  },
  {
    num: "05",
    title: "Nutrition Guidance",
    note: "Support that matches the work on the floor.",
  },
  {
    num: "06",
    title: "General Fitness",
    note: "Foundations for lasting consistency.",
  },
] as const;

export const combatDivision = {
  label: "Combat & Sport",
  shortLabel: "Combat",
} as const;

export const combatDisciplines = [
  { num: "01", title: "Fencing", cue: "Precision", confirmed: true },
  { num: "02", title: "Kickboxing", cue: "Impact", confirmed: true },
  { num: "03", title: "Boxing", cue: "Power", confirmed: true },
  { num: "04", title: "Taekwondo", cue: "Speed", confirmed: true },
  { num: "05", title: "Martial Arts", cue: "Discipline", confirmed: true },
  { num: "06", title: "Zumba / Aerobics", cue: "Rhythm", confirmed: false },
  {
    num: "07",
    title: "Youth / Kids Programs",
    cue: "Foundation",
    confirmed: false,
  },
] as const;

export const astra = {
  name: "Astra",
  href: "/astra",
  /**
   * When the live Astra site URL is supplied, set it here.
   * Explore Astra CTAs will open that URL in a new tab.
   * Example: "https://example.com"
   */
  externalUrl: null as string | null,
  blurb:
    "Combat-sport training connected to Beyond Fitness — fencing, kickboxing, martial arts, and more.",
  note: "Astra is the skill arena — explore programmes and start through Beyond Fitness.",
} as const;

export const pageMeta = {
  home: {
    title: "Beyond Fitness Manjeri — Training Culture",
    description:
      "Beyond Fitness Manjeri: fitness, personal training, fencing, kickboxing and combat sport under one standard. UA Mall, Manjeri.",
  },
  arenas: {
    title: "Arenas — Beyond Fitness Manjeri",
    description:
      "Two arenas. One standard. Explore Fitness and Astra at Beyond Fitness Manjeri.",
  },
  fitness: {
    title: "Fitness & Personal Training — Beyond Fitness Manjeri",
    description:
      "Strength, cardio, personal training and nutrition guidance at Beyond Fitness Manjeri.",
  },
  combat: {
    title: "Combat & Sport — Beyond Fitness Manjeri",
    description:
      "Fencing, kickboxing, boxing, taekwondo and martial arts at Beyond Fitness Manjeri.",
  },
  astra: {
    title: "Astra — Beyond Fitness Manjeri",
    description:
      "Explore Astra — a distinct combat-sport training destination connected to Beyond Fitness Manjeri.",
  },
  visit: {
    title: "Visit — Beyond Fitness Manjeri",
    description:
      "UA Mall, opposite Popees, Mullampara Road, Kacherippadi, Manjeri. Call 9446518977.",
  },
  start: {
    title: "Start Training — Beyond Fitness Manjeri",
    description:
      "Begin your training journey at Beyond Fitness Manjeri. Fitness, personal training, combat or Astra. New members: 5% off via website enquiry.",
  },
  gallery: {
    title: "Gallery — Beyond Fitness Manjeri",
    description:
      "Facility, training floor, and community photos from Beyond Fitness Manjeri — UA Mall.",
  },
  personalTraining: {
    title: "Personal Training — Beyond Fitness Manjeri",
    description:
      "One-to-one personal training at Beyond Fitness Manjeri. Book a consult via WhatsApp.",
  },
} as const;

/** Gallery wall — Maps + local facility imagery */
export const galleryItems = [
  {
    src: "/gallery/01-team-hero.jpg",
    label: "Team & brand wall",
    category: "Community",
  },
  {
    src: "/gallery/02-facility.jpg",
    label: "Facility",
    category: "Facility",
  },
  {
    src: "/gallery/03-training.jpg",
    label: "Training session",
    category: "Training",
  },
  {
    src: "/gallery/04-gym.jpg",
    label: "Strength floor",
    category: "Floor",
  },
  {
    src: "/gallery/05-space.jpg",
    label: "Training space",
    category: "Combat",
  },
  {
    src: "/gallery/06-interior.jpg",
    label: "Interior",
    category: "Facility",
  },
  {
    src: "/gallery/home-hero-ai.jpg",
    label: "Atmosphere",
    category: "Floor",
  },
  {
    src: "/gallery/home-fitness-ai.jpg",
    label: "Fitness floor",
    category: "Floor",
  },
  {
    src: "/gallery/fitness-train-ai.jpg",
    label: "Strength work",
    category: "Training",
  },
  {
    src: "/gallery/home-combat-ai.jpg",
    label: "Combat atmosphere",
    category: "Combat",
  },
] as const;

/** Local gallery assets (sourced from client Google Maps listing, stored locally) */
export const images = {
  homeHero: {
    src: "/gallery/home-hero-ai.jpg",
    label: "HERO — STRENGTH ATMOSPHERE",
  },
  homeFitness: {
    src: "/gallery/home-fitness-ai.jpg",
    label: "FITNESS — STRENGTH FLOOR",
  },
  homeCombat: {
    src: "/gallery/home-combat-ai.jpg",
    label: "ASTRA — TRAINING ATMOSPHERE",
  },
  arenasHero: {
    src: "/gallery/01-team-hero.jpg",
    label: "ARENAS — TWO WORLDS WALL",
  },
  fitnessHero: {
    src: "/gallery/04-gym.jpg",
    label: "FITNESS — STRENGTH SPACE",
  },
  fitnessDetail: {
    src: "/gallery/06-interior.jpg",
    label: "FITNESS — FACILITY DETAIL",
  },
  fitnessCommunity: {
    src: "/gallery/fitness-train-ai.jpg",
    label: "FITNESS — STRENGTH TRAINING",
  },
  ptHero: {
    src: "/gallery/04-gym.jpg",
    label: "PERSONAL TRAINING — COACHING MOMENT",
  },
  combatHero: {
    src: "/gallery/05-space.jpg",
    label: "COMBAT — KINETIC TRAINING",
  },
  combatDetail: {
    src: "/gallery/04-gym.jpg",
    label: "COMBAT — YOUTH / BOXING",
  },
  astraHero: {
    src: "/gallery/05-space.jpg",
    label: "ASTRA — COMBAT DESTINATION",
  },
  visitHero: {
    src: "/gallery/02-facility.jpg",
    label: "VISIT — FACILITY",
  },
  visitSpace: {
    src: "/gallery/06-interior.jpg",
    label: "VISIT — INTERIOR SPACE",
  },
  startHero: {
    src: "/gallery/01-team-hero.jpg",
    label: "START — TRAINING CULTURE",
  },
  community: {
    src: "/gallery/01-team-hero.jpg",
    label: "PEOPLE — COMMUNITY",
  },
} as const;

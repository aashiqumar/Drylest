/*
 * ============================================================
 * SINGLE SOURCE OF TRUTH — every word, number and link on the
 * site comes from this file. To re-skin the whole template for
 * a new law firm: edit this object, save, done. Nothing else
 * needs to change (render.js reads this and builds the page).
 * ============================================================
 */
window.SITE = {
  meta: {
    title: "Sterling & Perera Associates | Attorneys at Law, Colombo",
    description:
      "Sterling & Perera Associates advises individuals, families and businesses across Sri Lanka on civil, commercial, property and family law matters.",
    lang: "en",
  },

  firm: {
    name: "Sterling & Perera",
    shortName: "S&P",
    tagline: "Attorneys at Law",
    phone: "+94 11 234 5678",
    whatsapp: "+94 77 234 5678",
    email: "info@sterlingperera.lk",
    address: "24 Galle Road, Colombo 03, Sri Lanka",
    city: "Colombo",
    hoursWeekday: "Monday – Friday, 9am – 5pm",
    hoursSaturday: "Saturday, 9am – 1pm",
    yearsInPractice: 15,
  },

  nav: [
    { label: "Home", href: "#top" },
    { label: "Practice Areas", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Attorneys", href: "#attorneys" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    eyebrow: "Colombo, Sri Lanka",
    headline: "Attorneys fighting for your",
    rotatingWords: ["freedom.", "rights.", "future.", "family.", "business."],
    subcopy:
      "Straight answers, no legal jargon, and a team that picks up the phone. We've guided clients across Sri Lanka through the matters that mattered most to them.",
    primaryCta: { label: "Book a Free Consultation", href: "#contact" },
    secondaryCta: { label: "View Practice Areas", href: "#services" },
  },

  stats: [
    { number: 15, suffix: "+", label: "Years of Practice" },
    { number: 500, suffix: "+", label: "Cases Handled" },
    { number: 97, suffix: "%", label: "Client Satisfaction" },
    { number: 4, suffix: "", label: "Practice Areas" },
  ],

  services: [
    {
      icon: "scale",
      title: "Civil Litigation",
      description:
        "Representation in disputes over contracts, land, debt and liability, from first filing through to judgment.",
    },
    {
      icon: "home",
      title: "Property & Land Law",
      description:
        "Title searches, encumbrance checks, deed drafting and dispute resolution for buyers, sellers and families.",
    },
    {
      icon: "briefcase",
      title: "Corporate & Commercial",
      description:
        "Business registration, contracts, compliance and shareholder matters for startups and established companies.",
    },
    {
      icon: "heart",
      title: "Family Law",
      description:
        "Divorce, custody, maintenance and succession matters, handled with discretion and a clear sense of priorities.",
    },
  ],

  about: {
    eyebrow: "Why Clients Choose Us",
    heading: "Direct counsel, no middlemen",
    paragraphs: [
      "Every matter gets a named attorney, not a rotating cast of juniors. You'll know who's handling your case and how to reach them.",
      "We quote fees upfront, before any engagement begins, so there are no surprises on the invoice later.",
    ],
    bullets: [
      "Direct access to the attorney handling your matter",
      "Transparent, upfront fee discussions",
      "Correspondence in Sinhala, Tamil and English",
      "Confidential handling of every matter, without exception",
    ],
  },

  attorneys: [
    {
      initials: "RF",
      name: "Ranil Fernando",
      role: "Senior Partner — Civil Litigation",
      bio: "Two decades untangling land and contract disputes that had dragged on for years before clients came to us.",
    },
    {
      initials: "SW",
      name: "Shamila Wickrama",
      role: "Partner — Corporate & Commercial",
      bio: "Advises SMEs and startups from first registration through funding rounds and compliance.",
    },
    {
      initials: "TDS",
      name: "Tharindu De Silva",
      role: "Associate — Family Law",
      bio: "Handles sensitive family matters with the discretion and patience they require.",
    },
    {
      initials: "NJ",
      name: "Nadeesha Jayasuriya",
      role: "Associate — Property Law",
      bio: "Runs title and encumbrance checks that catch problems before they become disputes.",
    },
  ],

  testimonials: [
    {
      quote:
        "They explained every option in plain language before we had to decide anything. First time a lawyer didn't make me feel rushed.",
      name: "Sample Client",
      context: "Property Dispute",
    },
    {
      quote:
        "Quoted a fixed fee upfront and stuck to it. That alone made the whole process easier to trust.",
      name: "Sample Client",
      context: "Business Registration",
    },
    {
      quote:
        "Responded within the hour every time I messaged. I never once wondered where my case stood.",
      name: "Sample Client",
      context: "Family Law",
    },
  ],

  footer: {
    blurb:
      "Straightforward legal counsel for individuals and businesses across Sri Lanka, built on direct access to the attorney handling your case.",
    practiceAreas: ["Civil Litigation", "Property & Land Law", "Corporate & Commercial", "Family Law"],
  },
};

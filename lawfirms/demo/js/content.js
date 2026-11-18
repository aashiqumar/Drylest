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
    title: "Sterling & Perera Associates | Attorneys-at-Law, Colombo",
    description:
      "Sterling & Perera Associates advises individuals, families and businesses across Sri Lanka on civil, property, corporate and family law matters.",
    lang: "en",
  },

  firm: {
    name: "Sterling & Perera",
    shortName: "SP",
    tagline: "Attorneys-at-Law",
    phone: "+94 11 234 5678",
    whatsapp: "+94 77 234 5678",
    email: "info@sterlingperera.lk",
    address: "24 Galle Road, Colombo 03, Sri Lanka",
    city: "Colombo",
    hoursWeekday: "Monday – Friday, 9am – 5pm",
    hoursSaturday: "Saturday, 9am – 1pm",
    yearsInPractice: 15,
    established: 2011,
  },

  nav: [
    { label: "Practice", href: "#practice" },
    { label: "The Firm", href: "#about" },
    { label: "Counsel", href: "#attorneys" },
    { label: "Clients", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    // Courier reference line at the top of the brief panel.
    reference: "Attorneys-at-Law · Colombo",
    headline: "The attorney you hire is the one who handles your case.",
    subcopy:
      "Civil, property, corporate and family matters across Sri Lanka — with the fee agreed before we begin, and correspondence in the language you think in.",
    primaryCta: { label: "Book a free consultation", href: "#contact" },
    // Secondary CTA is the phone number itself; render.js fills the label.
    photoCaption: "On the record since 2011",
  },

  // Three entries, shown as a ruled register across the bottom of the
  // hero panel. Fewer, stronger numbers read better than four weak ones.
  stats: [
    { number: 15, suffix: "+", label: "Years in practice" },
    { number: 500, suffix: "+", label: "Matters handled" },
    { number: 3, suffix: "", label: "Languages spoken" },
  ],

  practice: {
    label: "Practice",
    heading: "What we are instructed on",
    intro:
      "Four areas, handled end to end. If a matter falls outside them, we will say so on the first call and point you to someone who does it properly.",
  },

  services: [
    {
      title: "Civil Litigation",
      description:
        "Representation in disputes over contracts, land, debt and liability — from first filing through to judgment.",
      detail: "District Court · Commercial High Court · Court of Appeal",
    },
    {
      title: "Property & Land Law",
      description:
        "Title searches, encumbrance checks, deed drafting and dispute resolution for buyers, sellers and families.",
      detail: "Transfers · Partitions · Notarial execution",
    },
    {
      title: "Corporate & Commercial",
      description:
        "Business registration, contracts, compliance and shareholder matters for startups and established companies.",
      detail: "Incorporation · Agreements · Secretarial compliance",
    },
    {
      title: "Family Law",
      description:
        "Divorce, custody, maintenance and succession matters, handled with discretion and a clear sense of priorities.",
      detail: "Matrimonial · Custody · Testamentary",
    },
  ],

  about: {
    label: "The Firm",
    heading: "Direct counsel, no middlemen",
    paragraphs: [
      "Every matter gets a named attorney, not a rotating cast of juniors. You will know who is handling your case and how to reach them.",
      "We quote fees upfront, before any engagement begins, so there are no surprises on the invoice later.",
    ],
    bullets: [
      "Direct access to the attorney handling your matter",
      "Transparent, upfront fee discussions",
      "Correspondence in Sinhala, Tamil and English",
      "Confidential handling of every matter, without exception",
    ],
    photoCaption: "Law Reports · Chancery Division",
  },

  attorneys: {
    label: "Counsel",
    heading: "Who you will be working with",
    people: [
      {
        initials: "RF",
        name: "Ranil Fernando",
        role: "Senior Partner",
        area: "Civil Litigation",
        bio: "Two decades untangling land and contract disputes that had dragged on for years before clients came to us.",
      },
      {
        initials: "SW",
        name: "Shamila Wickrama",
        role: "Partner",
        area: "Corporate & Commercial",
        bio: "Advises SMEs and startups from first registration through funding rounds and compliance.",
      },
      {
        initials: "TD",
        name: "Tharindu De Silva",
        role: "Associate",
        area: "Family Law",
        bio: "Handles sensitive family matters with the discretion and patience they require.",
      },
      {
        initials: "NJ",
        name: "Nadeesha Jayasuriya",
        role: "Associate",
        area: "Property Law",
        bio: "Runs title and encumbrance checks that catch problems before they become disputes.",
      },
    ],
  },

  testimonials: {
    label: "Clients",
    heading: "In their words",
    items: [
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
  },

  contact: {
    label: "Contact",
    heading: "Tell us what happened",
    intro:
      "A first conversation costs nothing and puts you in front of the attorney who would handle the matter — not an intake clerk.",
    formNote:
      "This demo form isn't wired to send yet. Connect it to your email or a form service before launch.",
  },

  footer: {
    blurb:
      "Straightforward legal counsel for individuals and businesses across Sri Lanka, built on direct access to the attorney handling your case.",
    practiceAreas: ["Civil Litigation", "Property & Land Law", "Corporate & Commercial", "Family Law"],
  },
};

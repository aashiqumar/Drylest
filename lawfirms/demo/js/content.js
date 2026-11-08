/*
 * ============================================================
 * SINGLE SOURCE OF TRUTH — matches the Figma "Law Firm" template
 * structure exactly. Edit this file to re-skin the site for a
 * new client; render.js reads it and builds the whole page.
 * ============================================================
 */
window.SITE = {
  meta: {
    title: "Law Firm — Legal Solutions for Business and Individual Needs",
    description:
      "Law Firm advises individuals and businesses on banking & finance, family, business, real estate, civil and corporate law matters.",
    lang: "en",
  },

  firm: {
    name: "Apex Law Chambers",
    phone: "+94 77 087 2373",
    email: "hello@drylest.site",
    address: "Hulftsdorp, Colombo 12, Sri Lanka",
    copyright: "© 2026 Apex Law Chambers. Sample Website Built by Drylest (Pvt) Ltd.",
  },

  nav: [
    { label: "Home", href: "index.html", page: "index" },
    { label: "Services", href: "services.html", page: "services" },
    { label: "About us", href: "about.html", page: "about" },
    { label: "Contact us", href: "contact.html", page: "contact" },
  ],

  hero: {
    headline: "Legal solutions for business and individual needs",
    subcopy:
      "Straight answers, transparent fees, and a team that picks up the phone — trusted by individuals and businesses for matters that can't wait.",
    cta: { label: "Make enquiry", href: "contact.html" },
    rating: { score: "4.9", count: "200+", label: "Client Reviews" },
    trustPoints: [
      { icon: "icon-checkmark", text: "15+ Years of Practice" },
      { icon: "icon-checkmark", text: "500+ Cases Won" },
      { icon: "icon-checkmark", text: "Free First Consultation" },
    ],
  },

  trusted: {
    heading: "Trusted legal partnerships",
    paragraph:
      "Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus consequat sed. Pretium purus feugiat volutpat pellentesque. Potenti porta mauris nec vulputate.",
    personName: "Julio Jefferson",
    personTitle: "Managing Partner",
  },

  services: [
    { icon: "icon-banking", title: "Banking and Finance", description: "Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus consequat sed. Pretium purus feugiat volutpat pellentesque." },
    { icon: "icon-family", title: "Family Law", description: "Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus consequat sed. Pretium purus feugiat volutpat pellentesque." },
    { icon: "icon-business", title: "Business Law", description: "Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus consequat sed. Pretium purus feugiat volutpat pellentesque." },
    { icon: "icon-realestate", title: "Real Estate", description: "Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus consequat sed. Pretium purus feugiat volutpat pellentesque." },
    { icon: "icon-civil", title: "Civil Law", description: "Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus consequat sed. Pretium purus feugiat volutpat pellentesque." },
    { icon: "icon-corporate", title: "Corporate Law", description: "Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus consequat sed. Pretium purus feugiat volutpat pellentesque." },
  ],

  banner: {
    heading: "Have legal questions? Ask our experts!",
    cta: { label: "Ask an expert", href: "contact.html" },
  },

  attorneys: {
    heading: "Our attorneys",
    subheading: "Varius quisque odio mauris lectus consequat sed, pretium purus feugiat volutpat pell",
    people: [
      { photo: "images/attorney-1.png", name: "Jackson Bauer", role: "Finance Lawyer" },
      { photo: "images/attorney-2.png", name: "Stephanie Reilly", role: "Criminal Defence Lawyer" },
      { photo: "images/attorney-3.png", name: "Matthew Webb", role: "Tax Lawyer" },
    ],
  },

  excellence: {
    heading: "Legal Excellence, Personalized Care",
    paragraph:
      "Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus consequat sed. Pretium purus feugiat volutpat pellentesque. Potenti porta mauris nec vulputate.",
    cta: { label: "Learn more", href: "services.html" },
  },

  testimonial: {
    heading: "What our client says",
    subheading: "Our Testimonials",
    quote:
      "Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus consequat sed. Pretium purus feugiat volutpat pellentesque. Potenti porta mauris nec vulputate.",
    name: "Kirsten Gutierrez",
    role: "Founder K&G Company",
    photoCaption: "Julio Jefferson",
  },

  consultation: {
    heading: "Request a free consultation",
    paragraph:
      "Need immediate legal guidance or counsel? Connect directly with our attorneys via WhatsApp or phone, or submit your details below for a prompt review.",
    services: ["Civil Law & Litigation", "Corporate & Commercial", "Real Estate & Property Law", "Family & Matrimonial", "Banking & Finance", "Criminal Defence"],
  },

  blog: {
    heading: "our blog",
    subheading: "Adipiscing nam neque hendrerit nec pellentesque diam a, varius quisque odio",
    posts: [
      { image: "images/blog-1.png", date: "November 9, 2023", title: "Legal Consultation and Advice" },
      { image: "images/blog-2.png", date: "November 9, 2023", title: "Law and Justice" },
      { image: "images/blog-3.png", date: "November 9, 2023", title: "Crime, civil law, justice and rights" },
    ],
  },

  footer: {
    blurb: "Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus consequat sed.",
    practiceAreas: ["Banking and Finance", "Business Law", "Real Estate", "Family Law"],
    links: [
      { label: "Home", href: "index.html" },
      { label: "Services", href: "services.html" },
      { label: "About Us", href: "about.html" },
      { label: "Contact Us", href: "contact.html" },
    ],
  },

  // ============ SERVICES PAGE ============
  servicesPage: {
    meta: {
      title: "Services — Law Firm",
      description: "Our process, full practice area list, FAQs and consultation plans.",
    },
    hero: { heading: "Services", image: "images/services-hero.png" },

    process: {
      heading: "Tailored Legal Solutions, Exceptional Results",
      paragraph1:
        "Tellus aliquet volutpat diam nulla consectetur. Sit at consectetur nam velit sollicitudin id aliquam fusce. In urna vestibulum ac eleifend quis turpis quisque arcu arcu. Ultrices varius sed quam lectus interdum. Viverra enim massa commodo in sed ipsum.",
      paragraph2: "Lorem ipsum dolor sit amet consectetur. Nunc porttitor porttitor velit dictumst id morbi in aliquet velit.",
      linkLabel: "Learn more",
      linkHref: "about.html",
      steps: [
        { number: "1", icon: "step-calendar", title: "Schedule a time", description: "Varius quisque odio mauris lectus consequat sed. Pretium purus feugiat volut" },
        { number: "2", icon: "step-consultant", title: "Meet a consultant", description: "Sit at consectetur nam velit sollicitudin id aliquam fusce. In urna vestibulum ac eleifend quis" },
        { number: "3", icon: "step-handshake", title: "Successful planning", description: "In urna vestibulum ac eleifend quis turpis quisque arcu arcu. Ultrices varius sed quam lectus interdum" },
        { number: "4", icon: "step-auction", title: "Successful case", description: "Ultrices varius sed quam lectus interdum. Viverra enim massa commodo in sed" },
      ],
    },

    banner: { heading: "Have legal questions? Ask our experts!", cta: { label: "Ask an expert", href: "contact.html" } },

    practiceAreas: {
      heading: "Practice Areas",
      subheading: "Varius quisque odio mauris lectus consequat sedretium purus feugiat volutpat pell",
      cards: [
        { icon: "services-icon-banking", title: "Banking and Finance", description: "Varius quisque odio mauris lectus consequat sed. Pretium purus feugiat volut" },
        { icon: "icon-family", title: "Family Law", description: "Pretium purus feugiat volutpat pellentesque. Potenti porta mauris nec vulputate" },
        { icon: "icon-business", title: "Business Law", description: "Potenti porta mauris nec vulputate. Massa sagittis lectus montes vel sit" },
        { icon: "icon-realestate", title: "Real Estate", description: "Massa sagittis lectus montes vel sit. Faucibus odio in ut massa in integer ultrice" },
        { icon: "services-icon-civil", title: "Civil Law", description: "Faucibus odio in ut massa in integer ultrices lacus est. Tempus ultrices placerat tellus" },
        { icon: "icon-corporate", title: "Corporate Law", description: "Tempus ultrices placerat tellus morbi. Varius quisque odio mauris lectus consequat sed" },
        { icon: "icon-criminal", title: "Criminal Law", description: "Potenti porta mauris nec vulputate. Massa sagittis lectus montes vel sit" },
        { icon: "icon-immigration", title: "Immigration Law", description: "Pretium purus feugiat volutpat pellentesque. Potenti porta mauris nec vulputate" },
        { icon: "icon-international", title: "International Law", description: "Varius quisque odio mauris lectus consequat sed. Pretium purus feugiat volut" },
      ],
    },

    faq: {
      heading: "Frequently Asked Question",
      items: [
        { question: "How we can help you?", answer: "Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus consequat sed. Pretium purus feugiat volutpat pellentesque. Potenti porta mauris nec vulputate." },
        { question: "How to get started?", answer: "Reach out through the consultation form or call us directly — we'll schedule an initial consultation within one business day to discuss your situation." },
        { question: "What should I bring to the first meeting?", answer: "Any documents related to your matter (contracts, correspondence, prior filings) help us give you accurate guidance faster, but aren't required to get started." },
        { question: "Nulla morbi viverra odio egestas interdum integer metus puru?", answer: "Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus consequat sed." },
        { question: "Tempus tempor sodales viverra magna lacus lacus id?", answer: "Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus consequat sed." },
        { question: "Tincidunt sit risus ultricies pharetra?", answer: "Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus consequat sed." },
      ],
    },

    plans: {
      heading: "Choose your Plan",
      subheading: "Varius quisque odio mauris lectus consequat sedretium purus feugiat volutpat pell",
      features: ["20 hours in court", "25 hours meetings", "100% success"],
      cards: [
        { icon: "plan-pen", name: "Business Law", price: "$1890", period: "Monthly" },
        { icon: "plan-courthouse", name: "Banking and Finance", price: "$2850", period: "Monthly" },
        { icon: "plan-homesecurity", name: "Real Estate", price: "$2285", period: "Monthly" },
      ],
      cta: "Learn more",
    },
  },

  // ============ ABOUT US PAGE ============
  aboutPage: {
    meta: {
      title: "About Us — Law Firm",
      description: "Meet the firm — our attorneys, our track record, and how we work.",
    },
    hero: { heading: "About Us", image: "images/about-hero.png" },

    attorneys: {
      heading: "Our attorneys",
      subheading: "Varius quisque odio mauris lectus consequat sedretium purus feugiat volutpat pell",
      people: [
        { photo: "images/attorney-1.png", name: "Jackson Bauer", role: "Finance Lawyer" },
        { photo: "images/attorney-2.png", name: "Stephanie Reilly", role: "Criminal Defence Lawyer" },
        { photo: "images/attorney-3.png", name: "Matthew Webb", role: "Tax Lawyer" },
      ],
    },

    video: {
      image: "images/about-video.png",
      heading: "We Provide Best Solutions",
      subtext: "Potenti porta mauris nec vulputate. Massa sagittis lectus montes vel sit",
    },

    stats: [
      { number: 1200, suffix: "+", label: "Satisfied Clients" },
      { number: 98, suffix: "%", label: "Successful Cases" },
      { number: 32, suffix: "+", label: "Years of Experience" },
      { number: 1800, suffix: "+", label: "Case Closed" },
    ],

    advocacy: {
      heading: "Advocacy is a passion with proven results",
      paragraph: "Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus consequat sed. Pretium purus feugiat volutpat pellentesque. Potenti porta mauris nec vulputate.",
      cta: { label: "Learn more", href: "contact.html" },
      image: "images/about-advocacy.png",
    },

    protect: {
      image: "images/consultation-bg.png",
      heading: "You've got ideas. We protect them.",
      paragraph: "Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus consequat sed. Pretium purus feugiat volutpat pellentesque. Potenti porta mauris nec vulputate.",
      bars: [
        { label: "Successful Cases", percent: 98 },
        { label: "Criminal Law", percent: 96 },
        { label: "Banking and Finance", percent: 95 },
      ],
    },
  },

  // ============ CONTACT US PAGE ============
  contactPage: {
    meta: {
      title: "Contact Us — Law Firm",
      description: "Get in touch — phone, email, address, office hours, and a consultation form.",
    },
    hero: {
      heading: "Have any questions? Feel free to contact us!",
      paragraph: "Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus consequat sed. Pretium purus feugiat volutpat",
      image: "images/contact-hero.png",
    },
    details: [
      { icon: "icon-contact-phone", label: "Phone Numbers", lines: ["+94 77 087 2373", "+94 11 234 5678"] },
      { icon: "icon-contact-email", label: "Email Address", lines: ["hello@drylest.site"] },
      { icon: "icon-contact-address", label: "Physical Address", lines: ["Hulftsdorp Street, Colombo 12, Sri Lanka"] },
      { icon: "icon-contact-hours", label: "Opening Hours", lines: ["Mon-Fri 08:30AM - 05:30PM", "Sat 09:00AM - 01:00PM"] },
    ],
    map: { image: "images/contact-map.png" },
    banner: {
      heading: "Have legal questions? Ask our experts!",
      subtext: "Lectus eget nisl orci elit malesuada id ipsum at velit.",
      cta: { label: "Ask an expert", href: "#consultation-form" },
    },
  },
};

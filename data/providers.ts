export interface ProviderProfile {
  id: string
  name: string
  logo: string
  location: string
  established: string
  size: string
  description: string
  website: string
  marketsServed: string[]
  sectorsServed: string[]
  specializations: string[]
  projects: {
    partner: string
    description: string
    videoUrl?: string
  }[]
  caseStudies?: {
    title: string
    description: string
    imageUrl: string
    url: string
  }[]
  testimonials: {
    quote: string
    author: string
    title: string
    company: string
  }[]
  firmSize: "Small" | "Mid-size" | "Large"
  yearsInBusiness: number
}

export const specializations = {
  "Strategy & Planning": [
    "Sustainability Strategy Development",
    "Sustainable Business Model Innovation",
    "Materiality Assessment",
    "ESG Risk Management & Governance",
    "Net Zero & Decarbonization Planning",
    "Goal Setting",
    "Implementation Planning",
  ],
  "Technical Support": [
    "Biodiversity",
    "Building Design & Construction",
    "Carbon Footprint Assessment, GHG Accounting & Data Analysis",
    "Circular Economy",
    "Climate & Environmental Risk Assessment",
    "Climate Adaptation",
    "Environmental Justice",
    "ESG & Sustainable Finance",
    "Life Cycle Assessment (LCA)",
    "Nature-based Solutions",
    "Product & Packaging Innovation Sustainability",
    "Renewable Energy & Energy Services",
    "Supply Chain Sustainability",
    "Transportation & Logistics",
    "Waste Management",
    "Water & Wastewater Management",
  ],
  "Auditing, Testing & Verification": [
    "Third-Party ESG Auditing, Benchmarking & Compliance",
    "Carbon Credits & Offsets",
    "GHG Emissions Verification",
    "Science-Based Targets (SBTi) Validation",
    "Sustainability Certifications & Standards",
    "ESG Ratings & Investor Assessments",
  ],
  "PR & Communications": [
    "Consumer Education & Behavior Change",
    "Employee Training & Stakeholder Engagement",
    "Stakeholder & Investor Communications",
    "Sustainability & ESG Marketing & Branding",
    "Sustainability & ESG Reporting",
  ],
}

// Standard markets list
export const standardMarkets = [
  "Africa",
  "Asia",
  "Australia (Oceania)",
  "Europe",
  "Latin America",
  "Middle East",
  "North America",
]

// Standard sectors list
export const standardSectors = [
  "Arts, Media, Entertainment",
  "Automotive",
  "College or University",
  "Consumer Packaged Goods",
  "Energy or Utility",
  "Financial Services and Insurance",
  "Food Services",
  "Government/Public Administration",
  "Health Care",
  "Hospitality",
  "Industrial Goods and Manufacturing",
  "Technology",
  "Nonprofit",
  "Professional and Technical Services",
  "Real Estate",
  "Retail and Apparel",
  "Transportation and Warehousing",
]

export const providers: ProviderProfile[] = [
  {
    id: "3degrees",
    name: "3Degrees",
    logo: "/3degrees-logo.png?height=80&width=200",
    location: "San Francisco, CA, USA",
    established: "2007",
    size: "Mid-size firm",
    description:
      "3Degrees makes it possible for businesses and their customers to take urgent action on climate change. As a certified B Corporation, we provide renewable energy, transportation decarbonization, and emission reduction solutions to global Fortune 500 companies, utilities, and other organizations that want to join the fight against climate change.",
    website: "www.3degreesinc.com",
    marketsServed: ["North America", "Europe", "Asia"],
    sectorsServed: [
      "Energy or Utility",
      "Technology",
      "Industrial Goods and Manufacturing",
      "Transportation and Warehousing",
      "Consumer Packaged Goods",
    ],
    specializations: [
      "Strategy & Planning",
      "Net Zero & Decarbonization Planning",
      "Goal Setting",
      "Technical Support",
      "Renewable Energy & Energy Services",
      "Carbon Footprint Assessment, GHG Accounting & Data Analysis",
      "Auditing, Testing & Verification",
      "Carbon Credits & Offsets",
    ],
    projects: [
      {
        partner: "Etsy",
        description:
          "Helped Etsy become the first global ecommerce company to offset 100% of carbon emissions from shipping.",
        videoUrl: "",
      },
    ],
    caseStudies: [
      {
        title: "Leading Dairy Brand Successfully Implements Supply Chain Emission Reduction Strategy",
        description:
          "Learn how a leading dairy brand worked with 3Degrees to develop and implement a comprehensive supply chain emission reduction strategy, focusing on methane reduction from dairy farms.",
        imageUrl: "/case-study-3degrees.png",
        url: "https://3degreesinc.com/insights/leading-dairy-brand-successfully-implements-supply-chain-emission-reduction-strategy/",
      },
    ],
    testimonials: [
      {
        quote:
          "3Degrees has been an invaluable partner in our journey to reduce our carbon footprint and transition to renewable energy.",
        author: "John Smith",
        title: "Sustainability Director",
        company: "Tech Giant Inc.",
      },
    ],
    firmSize: "Mid-size",
    yearsInBusiness: new Date().getFullYear() - 2007,
  },
  {
    id: "accenture",
    name: "Accenture",
    logo: "/accenture-logo.png?height=80&width=200",
    location: "Dublin, Ireland",
    established: "1989",
    size: "Large firm",
    description:
      "Accenture is a global professional services company with leading capabilities in digital, cloud and security. Combining unmatched experience and specialized skills across more than 40 industries, we offer Strategy and Consulting, Technology and Operations services and Accenture Song—all powered by the world's largest network of Advanced Technology and Intelligent Operations centers.",
    website: "www.accenture.com",
    marketsServed: ["Global"],
    sectorsServed: [
      "Energy or Utility",
      "Technology",
      "Financial Services and Insurance",
      "Government/Public Administration",
      "Industrial Goods and Manufacturing",
      "Retail and Apparel",
      "Health Care",
    ],
    specializations: [
      "Strategy & Planning",
      "Sustainability Strategy Development",
      "Sustainable Business Model Innovation",
      "Net Zero & Decarbonization Planning",
      "Implementation Planning",
      "Technical Support",
      "ESG & Sustainable Finance",
      "Supply Chain Sustainability",
      "PR & Communications",
      "Sustainability & ESG Marketing & Branding",
    ],
    projects: [
      {
        partner: "Schneider Electric",
        description:
          "Collaborated on developing and implementing a comprehensive sustainability strategy, focusing on energy efficiency and carbon reduction across global operations.",
        videoUrl: "",
      },
    ],
    testimonials: [
      {
        quote:
          "Accenture's expertise in sustainability and technology has been invaluable in our journey towards becoming a more environmentally responsible company.",
        author: "Jean-Pascal Tricoire",
        title: "Chairman and CEO",
        company: "Schneider Electric",
      },
    ],
    firmSize: "Large",
    yearsInBusiness: new Date().getFullYear() - 1989,
  },
  {
    id: "erm",
    name: "ERM (Environmental Resources Management)",
    logo: "/ERM-logo.png?height=80&width=200",
    location: "London, UK",
    established: "1971",
    size: "Large firm",
    description:
      "ERM is the largest global pure-play sustainability consultancy. We partner with the world's leading organizations to create innovative solutions to sustainability challenges and unlock commercial opportunities that meet the needs of today while preserving opportunities for future generations.",
    website: "www.erm.com",
    marketsServed: ["Global"],
    sectorsServed: [
      "Energy or Utility",
      "Industrial Goods and Manufacturing",
      "Technology",
      "Professional and Technical Services",
      "Government/Public Administration",
      "Automotive",
      "Consumer Packaged Goods",
    ],
    specializations: [
      "Strategy & Planning",
      "Sustainability Strategy Development",
      "Materiality Assessment",
      "ESG Risk Management & Governance",
      "Net Zero & Decarbonization Planning",
      "Implementation Planning",
      "Technical Support",
      "Climate & Environmental Risk Assessment",
      "ESG & Sustainable Finance",
      "Auditing, Testing & Verification",
      "Third-Party ESG Auditing, Benchmarking & Compliance",
      "PR & Communications",
      "Stakeholder & Investor Communications",
    ],
    projects: [
      {
        partner: "Major Oil Company",
        description:
          "Conducted a global carbon footprint assessment and developed a roadmap for achieving net-zero emissions by 2050.",
        videoUrl: "",
      },
    ],
    caseStudies: [
      {
        title: "Leveling Up a Wind Farm's Positive Impact",
        description:
          "ERM helped a wind farm developer enhance their environmental and social performance, implementing biodiversity initiatives and community engagement strategies that went beyond compliance requirements.",
        imageUrl: "/case-study-erm.png",
        url: "https://www.erm.com/projects/case-study-leveling-up-a-wind-farms-positive-impact/",
      },
    ],
    testimonials: [
      {
        quote:
          "ERM's comprehensive approach to sustainability has helped us navigate complex environmental challenges and improve our overall performance.",
        author: "Sarah Johnson",
        title: "Chief Sustainability Officer",
        company: "Global Mining Corp",
      },
    ],
    firmSize: "Large",
    yearsInBusiness: new Date().getFullYear() - 1971,
  },
  {
    id: "wspsustainability",
    name: "WSP",
    logo: "/wsp-logo.png?height=80&width=200",
    location: "Montreal, Canada",
    established: "1959",
    size: "Large firm",
    description:
      "WSP is one of the world's leading professional services consulting firms. We provide strategic advisory, engineering, and design services to clients in the Transportation & Infrastructure, Property & Buildings, Earth & Environment, Power & Energy, Resources, and Industry sectors.",
    website: "www.wsp.com",
    marketsServed: ["Global"],
    sectorsServed: [
      "Transportation and Warehousing",
      "Real Estate",
      "Energy or Utility",
      "Industrial Goods and Manufacturing",
      "Government/Public Administration",
      "Automotive",
    ],
    specializations: [
      "Strategy & Planning",
      "Net Zero & Decarbonization Planning",
      "Implementation Planning",
      "Technical Support",
      "Building Design & Construction",
      "Climate Adaptation",
      "Renewable Energy & Energy Services",
      "Auditing, Testing & Verification",
      "Sustainability Certifications & Standards",
      "PR & Communications",
      "Sustainability & ESG Reporting",
    ],
    projects: [
      {
        partner: "City of Toronto",
        description:
          "Developed a comprehensive climate action strategy to help the city achieve its goal of becoming net-zero by 2040.",
        videoUrl: "",
      },
    ],
    caseStudies: [
      {
        title: "Guggenheim Foundation Headquarters",
        description:
          "WSP provided sustainable design services for the Guggenheim Foundation's headquarters, implementing energy-efficient systems, water conservation measures, and sustainable materials to achieve LEED certification.",
        imageUrl: "/case-study-wsp.png",
        url: "https://www.wsp.com/en-us/projects/guggenheim-foundation-headquarters",
      },
    ],
    testimonials: [
      {
        quote:
          "WSP's innovative approach to sustainable infrastructure has been crucial in our efforts to build a more resilient and environmentally friendly city.",
        author: "Michael Lee",
        title: "Urban Planning Director",
        company: "City of Toronto",
      },
    ],
    firmSize: "Large",
    yearsInBusiness: new Date().getFullYear() - 1959,
  },
  {
    id: "dnvgl",
    name: "DNV",
    logo: "/dnv-logo.png?height=80&width=200",
    location: "Oslo, Norway",
    established: "1864",
    size: "Large firm",
    description:
      "DNV is an independent assurance and risk management provider, operating in more than 100 countries. We provide assurance to the entire energy value chain through our advisory, monitoring, verification, and certification services.",
    website: "www.dnv.com",
    marketsServed: ["North America", "Europe", "Asia", "Middle East"],
    sectorsServed: [
      "Energy or Utility",
      "Transportation and Warehousing",
      "Industrial Goods and Manufacturing",
      "Professional and Technical Services",
      "Automotive",
      "Technology",
    ],
    specializations: [
      "Strategy & Planning",
      "Net Zero & Decarbonization Planning",
      "Technical Support",
      "Renewable Energy & Energy Services",
      "Auditing, Testing & Verification",
      "GHG Emissions Verification",
      "Science-Based Targets (SBTi) Validation",
    ],
    projects: [
      {
        partner: "Ørsted",
        description:
          "Provided technical due diligence and advisory services for the development of the world's largest offshore wind farm.",
        videoUrl: "",
      },
    ],
    testimonials: [
      {
        quote:
          "DNV's expertise in renewable energy and their rigorous approach to risk management have been instrumental in the success of our offshore wind projects.",
        author: "Anna Nielsen",
        title: "Head of Offshore Wind Development",
        company: "Ørsted",
      },
    ],
    firmSize: "Large",
    yearsInBusiness: new Date().getFullYear() - 1864,
  },
  {
    id: "sustainalytics",
    name: "Sustainalytics",
    logo: "/Sustainalytics-Logo.png?height=80&width=200",
    location: "Amsterdam, Netherlands",
    established: "1992",
    size: "Mid-size firm",
    description:
      "Sustainalytics, a Morningstar company, is a leading independent ESG and corporate governance research, ratings and analytics firm that supports investors around the world with the development and implementation of responsible investment strategies.",
    website: "www.sustainalytics.com",
    marketsServed: ["North America", "Europe", "Asia"],
    sectorsServed: [
      "Financial Services and Insurance",
      "Professional and Technical Services",
      "Energy or Utility",
      "Technology",
      "Retail and Apparel",
    ],
    specializations: [
      "Strategy & Planning",
      "ESG Risk Management & Governance",
      "Goal Setting",
      "Technical Support",
      "ESG & Sustainable Finance",
      "Auditing, Testing & Verification",
      "ESG Ratings & Investor Assessments",
      "Third-Party ESG Auditing, Benchmarking & Compliance",
      "PR & Communications",
      "Stakeholder & Investor Communications",
    ],
    projects: [
      {
        partner: "Major European Bank",
        description:
          "Developed a comprehensive ESG integration framework for the bank's investment processes, covering over €500 billion in assets under management.",
        videoUrl: "",
      },
    ],
    testimonials: [
      {
        quote:
          "Sustainalytics' ESG risk ratings and research have become an integral part of our investment decision-making process, helping us to better manage risks and identify sustainable investment opportunities.",
        author: "Emma Larsson",
        title: "Head of Responsible Investments",
        company: "Nordic Asset Management",
      },
    ],
    firmSize: "Mid-size",
    yearsInBusiness: new Date().getFullYear() - 1992,
  },
  {
    id: "cadmus",
    name: "Cadmus Group",
    logo: "/cadmus-logo.png?height=80&width=200",
    location: "Waltham, MA, USA",
    established: "1983",
    size: "Mid-size firm",
    description:
      "Cadmus is a strategic and technical consultancy compelled to help solve the world's most challenging problems. Together, we are strengthening society and the natural world. Our team works across energy, climate, safety, security, and resilience domains.",
    website: "www.cadmusgroup.com",
    marketsServed: ["North America", "Europe"],
    sectorsServed: [
      "Energy or Utility",
      "Government/Public Administration",
      "Professional and Technical Services",
      "Transportation and Warehousing",
      "College or University",
      "Nonprofit",
    ],
    specializations: [
      "Strategy & Planning",
      "Sustainability Strategy Development",
      "Net Zero & Decarbonization Planning",
      "Implementation Planning",
      "Technical Support",
      "Climate & Environmental Risk Assessment",
      "Climate Adaptation",
      "Renewable Energy & Energy Services",
      "PR & Communications",
      "Stakeholder & Investor Communications",
    ],
    projects: [
      {
        partner: "U.S. Environmental Protection Agency",
        description:
          "Provided technical support for the development of climate resilience strategies and greenhouse gas reduction programs.",
        videoUrl: "",
      },
    ],
    testimonials: [
      {
        quote:
          "Cadmus has been an exceptional partner in helping us navigate complex environmental challenges and develop effective sustainability strategies.",
        author: "David Wilson",
        title: "Environmental Director",
        company: "State Energy Office",
      },
    ],
    firmSize: "Mid-size",
    yearsInBusiness: new Date().getFullYear() - 1983,
  },
  {
    id: "howerimpact",
    name: "Hower Impact",
    logo: "/hower-impact-logo.png?height=80&width=200",
    location: "New York, NY, USA",
    established: "2015",
    size: "Small firm",
    description:
      "Hower Impact is a boutique sustainability consultancy that helps organizations develop and implement effective sustainability strategies. We specialize in ESG reporting, carbon footprinting, and sustainable business transformation.",
    website: "www.howerimpact.com",
    marketsServed: ["North America", "Europe"],
    sectorsServed: [
      "Financial Services and Insurance",
      "Technology",
      "Professional and Technical Services",
      "Consumer Packaged Goods",
      "Retail and Apparel",
      "Arts, Media, Entertainment",
    ],
    specializations: [
      "Strategy & Planning",
      "Sustainability Strategy Development",
      "Goal Setting",
      "Implementation Planning",
      "Technical Support",
      "Carbon Footprint Assessment, GHG Accounting & Data Analysis",
      "ESG & Sustainable Finance",
      "PR & Communications",
      "Sustainability & ESG Reporting",
    ],
    projects: [
      {
        partner: "Tech Startup",
        description:
          "Developed a comprehensive sustainability strategy and ESG reporting framework for a growing technology company.",
        videoUrl: "",
      },
    ],
    testimonials: [
      {
        quote:
          "Hower Impact provided us with practical, actionable sustainability guidance that was tailored to our specific needs and growth stage.",
        author: "Jennifer Chen",
        title: "Chief Operating Officer",
        company: "GreenTech Solutions",
      },
    ],
    firmSize: "Small",
    yearsInBusiness: new Date().getFullYear() - 2015,
  },
]


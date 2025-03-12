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
  areasOfExpertise: string[]
  projects: {
    partner: string
    description: string
    videoUrl?: string
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

export const areasOfExpertise = {
  "Strategy & Planning": ["Net Zero & Decarbonization Planning", "Goal Setting", "Implementation Planning"],
  "Technical Support": [
    "Biodiversity",
    "Building Design & Construction",
    "Carbon Footprinting, GHG Accounting & Data Analysis",
    "Circular Economy",
    "Climate & Environmental Risk Assessment",
    "Climate Adaptation",
    "Environmental Justice",
    "ESG & Sustainable Finance",
    "Life Cycle Assessment",
    "Product Sustainability",
    "Renewable Energy & Energy Services",
    "Supply Chain Sustainability",
    "Transportation & Logistics",
    "Waste Management",
    "Water & Wastewater Management",
  ],
  "Auditing, Testing & Verification": [
    "Carbon Credits & Offsets",
    "GHG Emissions Verification",
    "Science-Based Targets (SBTi) Validation",
    "Sustainability & ESG Reporting Verification (e.g. GRI, SASB, TCFD, CDP)",
    "Sustainable Building, Product & Other Certifications (e.g. LEED)",
  ],
  "PR & Communications": [
    "Consumer Education & Behavior Change",
    "Employee Training & Engagement",
    "Stakeholder & Investor Communications",
    "Sustainability & ESG Marketing & Branding",
    "Sustainability & ESG Report Writing & Design",
  ]
}

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
    ],
    areasOfExpertise: [
      "Strategy & Planning",
      "Net Zero & Decarbonization Planning",
      "Goal Setting",
      "Technical Support",
      "Renewable Energy & Energy Services",
      "Carbon Footprinting, GHG Accounting & Data Analysis",
      "Auditing, Testing & Verification",
      "Carbon Credits & Offsets",
    ],
    projects: [
      {
        partner: "Etsy",
        description:
          "Helped Etsy become the first global ecommerce company to offset 100% of carbon emissions from shipping.",
        videoUrl: "https://www.youtube.com/watch?v=example1",
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
    ],
    areasOfExpertise: [
      "Strategy & Planning",
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
        videoUrl: "https://www.youtube.com/watch?v=example2",
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
    ],
    areasOfExpertise: [
      "Strategy & Planning",
      "Net Zero & Decarbonization Planning",
      "Implementation Planning",
      "Technical Support",
      "Climate & Environmental Risk Assessment",
      "ESG & Sustainable Finance",
      "Auditing, Testing & Verification",
      "Sustainability & ESG Reporting Verification (e.g. GRI, SASB, TCFD, CDP)",
      "PR & Communications",
      "Stakeholder & Investor Communications",
    ],
    projects: [
      {
        partner: "Major Oil Company",
        description:
          "Conducted a global carbon footprint assessment and developed a roadmap for achieving net-zero emissions by 2050.",
        videoUrl: "https://www.youtube.com/watch?v=example3",
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
    ],
    areasOfExpertise: [
      "Strategy & Planning",
      "Net Zero & Decarbonization Planning",
      "Implementation Planning",
      "Technical Support",
      "Building Design & Construction",
      "Climate Adaptation",
      "Renewable Energy & Energy Services",
      "Auditing, Testing & Verification",
      "Sustainable Building, Product & Other Certifications (e.g. LEED)",
      "PR & Communications",
      "Sustainability & ESG Marketing & Branding",
    ],
    projects: [
      {
        partner: "City of Toronto",
        description:
          "Developed a comprehensive climate action strategy to help the city achieve its goal of becoming net-zero by 2040.",
        videoUrl: "https://www.youtube.com/watch?v=example4",
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
    marketsServed: ["Global"],
    sectorsServed: [
      "Energy or Utility",
      "Transportation and Warehousing",
      "Industrial Goods and Manufacturing",
      "Professional and Technical Services",
    ],
    areasOfExpertise: [
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
        videoUrl: "https://www.youtube.com/watch?v=example5",
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
    marketsServed: ["Global"],
    sectorsServed: ["Financial Services and Insurance", "Professional and Technical Services"],
    areasOfExpertise: [
      "Strategy & Planning",
      "Goal Setting",
      "Technical Support",
      "ESG & Sustainable Finance",
      "Auditing, Testing & Verification",
      "Sustainability & ESG Reporting Verification (e.g. GRI, SASB, TCFD, CDP)",
      "PR & Communications",
      "Stakeholder & Investor Communications",
    ],
    projects: [
      {
        partner: "Major European Bank",
        description:
          "Developed a comprehensive ESG integration framework for the bank's investment processes, covering over €500 billion in assets under management.",
        videoUrl: "https://www.youtube.com/watch?v=example6",
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
    ],
    areasOfExpertise: [
      "Strategy & Planning",
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
        videoUrl: "https://www.youtube.com/watch?v=example7",
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
      "Consumer Goods and Retail",
    ],
    areasOfExpertise: [
      "Strategy & Planning",
      "Goal Setting",
      "Implementation Planning",
      "Technical Support",
      "Carbon Footprinting, GHG Accounting & Data Analysis",
      "ESG & Sustainable Finance",
      "PR & Communications",
      "Sustainability & ESG Report Writing & Design",
    ],
    projects: [
      {
        partner: "Tech Startup",
        description:
          "Developed a comprehensive sustainability strategy and ESG reporting framework for a growing technology company.",
        videoUrl: "https://www.youtube.com/watch?v=example8",
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


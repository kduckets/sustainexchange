import type { ProviderProfile } from "@/types/provider-profile"

export const providers: ProviderProfile[] = [
  {
    id: "3degrees",
    name: "3Degrees",
    logo: "/3degrees-logo.png?height=80&width=200",
    location: "San Francisco, CA, USA",
    established: "2008",
    size: "Mid-size firm",
    description:
      "We make it possible for businesses and their customers to take urgent action on climate change. For over 15 years, our renewable energy, transportation decarbonization, and climate solutions have made it possible for businesses and utilities to answer the call for immediate and meaningful climate action.",
    website: "www.3degreesinc.com",
    marketsServed: ["North America", "Europe"],
    sectorsServed: ["Public", "Private", "Nonprofit"],
    areasOfExpertise: ["Carbon Credits", "Strategy & Planning", "Transportation"],
    projects: [
      {
        partner: "Merge Electric Fleet Solutions",
        description:
          "3Degrees partnered with Merge to craft a fleet electrification roadmap for the MA-based solar company",
        videoUrl: "https://youtu.be/gIfPUeebVI4?si=6Y0ih-GnM6A3N9FL",
      },
    ],
    testimonials: [
      {
        quote:
          "As we increased our efforts to help fight climate change, 3Degrees has been an instrumental partner in Freshpet's sustainability journey. Their multi-disciplined climate science knowledge has allowed us to measure our carbon footprint and take meaningful actions that meet demands of our consumers, investors, and team members.",
        author: "Justin Joyner",
        title: "Sustainability Lead",
        company: "Freshpet",
      },
    ],
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
    sectorsServed: ["Public", "Private", "Nonprofit"],
    areasOfExpertise: ["Strategy & Planning", "Technology & Innovation", "Sustainability Consulting"],
    projects: [
      {
        partner: "Schneider Electric",
        description:
          "Accenture collaborated with Schneider Electric to develop and implement a comprehensive sustainability strategy, focusing on energy efficiency and carbon reduction across their global operations.",
        videoUrl: "https://www.youtube.com/watch?v=Y9p_zEr6UjE",
      },
    ],
    testimonials: [
      {
        quote:
          "Accenture's expertise in sustainability and technology has been invaluable in our journey towards becoming a more environmentally responsible company. Their innovative solutions and strategic guidance have helped us achieve significant reductions in our carbon footprint while improving our operational efficiency.",
        author: "Jean-Pascal Tricoire",
        title: "Chairman and CEO",
        company: "Schneider Electric",
      },
    ],
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
    sectorsServed: ["Oil & Gas", "Mining", "Power", "Manufacturing", "Chemical", "Technology"],
    areasOfExpertise: [
      "Environmental & Social Impact Assessment",
      "Climate Change & Energy",
      "ESG & Sustainability",
      "Safety & Risk",
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
    sectorsServed: ["Transportation", "Buildings", "Environment", "Energy", "Resources", "Industry"],
    areasOfExpertise: ["Climate Resilience", "Sustainable Buildings", "Environmental Planning", "Energy Transition"],
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
    sectorsServed: ["Maritime", "Oil & Gas", "Energy Systems", "Business Assurance"],
    areasOfExpertise: ["Renewable Energy", "Energy Efficiency", "Climate Action", "Sustainable Finance"],
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
    sectorsServed: ["Financial Services", "Asset Management", "Corporate"],
    areasOfExpertise: ["ESG Risk Ratings", "Sustainable Finance", "Impact Investing", "Corporate ESG Assessment"],
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
  },
]


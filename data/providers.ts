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
        videoUrl: "https://www.youtube.com/embed/example2",
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
]


import type { ProviderProfile } from "@/types/provider-profile"

export const providers: ProviderProfile[] = [
  {
    id: "3degrees",
    name: "3Degrees",
    logo: "/placeholder.svg?height=80&width=200",
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
        videoUrl: "https://www.youtube.com/embed/example",
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
]


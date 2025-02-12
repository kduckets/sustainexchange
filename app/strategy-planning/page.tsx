import { Header } from "@/app/components/Header"
import { ProviderCard } from "@/app/components/ProviderCard"

interface Provider {
  name: string
  logo: string
  marketsServed: string
  description: string
  satisfaction: string
  yearsInBusiness: string
}

const providers: Provider[] = [
  {
    name: "3Degrees",
    logo: "/placeholder.svg?height=80&width=200",
    marketsServed: "North America, Europe",
    description:
      "We make it possible for businesses and their customers to take urgent action on climate change. For over 15 years, our renewable energy, transportation decarbonization, and climate solutions have made it possible for businesses and utilities to answer the call for immediate and meaningful climate action.",
    satisfaction: "100% would work with again",
    yearsInBusiness: "15 years in business",
  },
  {
    name: "accenture",
    logo: "/placeholder.svg?height=80&width=200",
    marketsServed: "Global",
    description:
      "From strategy to execution our portfolio of services is designed to help you tackle your greatest sustainability challenges and realize the competitive advantage and impact at scale that sustainability brings.",
    satisfaction: "92% would work with again",
    yearsInBusiness: "35 years in business",
  },
]

export default function StrategyPlanning() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Strategy & Planning</h1>
        <p className="text-xl text-center max-w-4xl mx-auto mb-16">
          Create a sustainability strategy and implementation plan. Establish goals and milestones, create a roadmap,
          and prepare for implementation.
        </p>

        <div className="space-y-8">
          {providers.map((provider, index) => (
            <div key={provider.name}>
              {index > 0 && <div className="border-t my-8" />}
              <ProviderCard {...provider} />
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}


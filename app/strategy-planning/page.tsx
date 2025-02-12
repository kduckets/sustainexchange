import { Header } from "@/app/components/Header"
import { ProviderCard } from "@/app/components/ProviderCard"
import { providers } from "@/data/providers"

export default function StrategyPlanning() {
  // Filter providers that have "Strategy & Planning" in their areas of expertise
  const strategyProviders = providers.filter((provider) => provider.areasOfExpertise.includes("Strategy & Planning"))

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
          {strategyProviders.map((provider, index) => (
            <div key={provider.id}>
              {index > 0 && <div className="border-t my-8" />}
              <ProviderCard
                name={provider.name}
                logo={provider.logo}
                marketsServed={provider.marketsServed.join(", ")}
                description={provider.description}
                satisfaction="100% would work with again" // This should be dynamic if available in the data
                yearsInBusiness={`${new Date().getFullYear() - Number.parseInt(provider.established)} years in business`}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}


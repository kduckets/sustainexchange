import Link from "next/link"
import Image from "next/image"
import type { ProviderProfile } from "@/types/provider-profile"

interface SearchResultsProps {
  results: ProviderProfile[]
}

export function SearchResults({ results }: SearchResultsProps) {
  if (results.length === 0) {
    return (
      <div className="text-center py-8">
        <h3 className="text-2xl font-semibold mb-4">No results found</h3>
        <p>Try adjusting your search or filters to find more providers.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold mb-4">Search Results ({results.length})</h3>
      {results.map((provider) => (
        <div key={provider.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <Link href={`/providers/${provider.id}`} className="block">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Image
                  src={provider.logo || "/placeholder.svg"}
                  alt={`${provider.name} logo`}
                  width={100}
                  height={100}
                  className="rounded-lg object-contain"
                />
              </div>
              <div className="flex-grow">
                <h4 className="text-xl font-bold mb-2">{provider.name}</h4>
                <p className="text-gray-600 mb-2">{provider.location}</p>
                <p className="text-sm text-gray-500 mb-4">{provider.description.substring(0, 150)}...</p>
                <div className="flex flex-wrap gap-2">
                  {provider.areasOfExpertise.slice(0, 3).map((area, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {area}
                    </span>
                  ))}
                  {provider.areasOfExpertise.length > 3 && (
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                      +{provider.areasOfExpertise.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}


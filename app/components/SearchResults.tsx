"use client"

import Link from "next/link"
import Image from "next/image"
import type { ProviderProfile } from "@/types/provider-profile"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface SearchResultsProps {
  results: ProviderProfile[]
  searchQuery: string
  activeFilters: {
    marketsServed: string[]
    sectorsServed: string[]
    specializations: string[]
  }
  onClearAll: () => void
}

export function SearchResults({ results, searchQuery, activeFilters, onClearAll }: SearchResultsProps) {
  const hasActiveFilters = Object.values(activeFilters).some((filter) => filter.length > 0)
  const showClearAll = searchQuery || hasActiveFilters

  const renderFilterPills = () => {
    return Object.entries(activeFilters).flatMap(([category, values]) =>
      values.map((value) => (
        <span key={`${category}-${value}`} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2 mb-2">
          {value}
        </span>
      )),
    )
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between mb-4">
        <h3 className="text-2xl font-semibold mb-2">Search Results {results.length > 0 && `(${results.length})`}</h3>
        {showClearAll && (
          <Button variant="outline" size="sm" onClick={onClearAll} className="mb-2">
            <X className="w-4 h-4 mr-2" />
            Clear All
          </Button>
        )}
      </div>
      {(searchQuery || hasActiveFilters) && (
        <div className="mb-4">
          {searchQuery && <p className="mb-2">Search: "{searchQuery}"</p>}
          {hasActiveFilters && <div className="flex flex-wrap">{renderFilterPills()}</div>}
        </div>
      )}
      {results.length === 0 ? (
        <div className="text-center py-8">
          <h3 className="text-2xl font-semibold mb-4">No results found</h3>
          <p>Try adjusting your search or filters to find more providers.</p>
        </div>
      ) : (
        <div className="space-y-6">
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
                      {provider.specializations.slice(0, 3).map((area, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          {area}
                        </span>
                      ))}
                      {provider.specializations.length > 3 && (
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                          +{provider.specializations.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}


"use client"

import Link from "next/link"
import Image from "next/image"
import type { ProviderProfile } from "@/types/provider-profile"
import { Button } from "@/components/ui/button"
import { X, ArrowRight, MapPin, Calendar, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface SearchResultsProps {
  results: ProviderProfile[]
  searchQuery: string
  activeFilters: {
    marketsServed: string[]
    sectorsServed: string[]
    specializations: string[]
  }
  onClearAll: () => void
  onRemoveFilter: (category: "marketsServed" | "sectorsServed" | "specializations", value: string) => void
}

export function SearchResults({ results, searchQuery, activeFilters, onClearAll, onRemoveFilter }: SearchResultsProps) {
  const hasActiveFilters = Object.values(activeFilters).some((filter) => filter.length > 0)
  const showClearAll = searchQuery || hasActiveFilters

  const renderFilterPills = () => {
    return Object.entries(activeFilters).flatMap(([category, values]) =>
      values.map((value) => (
        <Badge key={`${category}-${value}`} variant="outline" className="mr-2 mb-2">
          {value}{" "}
          <X
            className="ml-1 h-3 w-3 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation()
              onRemoveFilter(category as "marketsServed" | "sectorsServed" | "specializations", value)
            }}
          />
        </Badge>
      )),
    )
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          {results.length > 0 ? `${results.length} Providers Found` : "Search Results"}
        </h3>
        {showClearAll && (
          <Button variant="outline" size="sm" onClick={onClearAll} className="mb-2">
            <X className="w-4 h-4 mr-2" />
            Clear All
          </Button>
        )}
      </div>

      {(searchQuery || hasActiveFilters) && (
        <div className="mb-6 p-4 bg-accent rounded-md">
          {searchQuery && <p className="mb-2 font-medium">Search: "{searchQuery}"</p>}
          {hasActiveFilters && <div className="flex flex-wrap">{renderFilterPills()}</div>}
        </div>
      )}

      {results.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">No results found</h3>
          <p className="text-gray-600 mb-6">Try adjusting your search or filters to find more providers.</p>
          <Button onClick={onClearAll} className="bg-primary text-white hover:bg-primary/90">
            Clear Filters
          </Button>
        </div>
      ) : (
        <div className="space-y-6">
          {results.map((provider) => (
            <div
              key={provider.id}
              className="bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              <Link href={`/providers/${provider.id}`} className="block p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4 flex-shrink-0">
                    <Image
                      src={provider.logo || "/placeholder.svg"}
                      alt={`${provider.name} logo`}
                      width={200}
                      height={100}
                      className="rounded-md object-contain bg-white p-2 border border-gray-100"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                      <h4 className="text-xl font-bold text-gray-800">{provider.name}</h4>
                      <div className="flex items-center text-gray-500 text-sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        {provider.location}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                      <div className="flex items-center text-sm text-gray-600 mr-4">
                        <Calendar className="h-4 w-4 mr-1" />
                        Est. {provider.established}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-1" />
                        {provider.firmSize}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 line-clamp-2">{provider.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {provider.specializations.slice(0, 3).map((area, index) => (
                        <Badge key={index} variant="secondary" className="bg-accent text-primary">
                          {area}
                        </Badge>
                      ))}
                      {provider.specializations.length > 3 && (
                        <Badge variant="outline" className="text-gray-600">
                          +{provider.specializations.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-600">
                        <strong>Markets:</strong> {provider.marketsServed.join(", ")}
                      </div>
                      <div className="text-primary font-medium flex items-center">
                        View Profile <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
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


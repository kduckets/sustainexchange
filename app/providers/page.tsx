"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Header } from "@/app/components/Header"
import { SearchResults } from "@/app/components/SearchResults"
import { providers } from "@/data/providers"
import { useState, useMemo, useEffect } from "react"
import { useSearchParams } from "next/navigation"

export default function SearchProviders() {
  const searchParams = useSearchParams()
  const [searchResults, setSearchResults] = useState<typeof providers>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [filters, setFilters] = useState({
    marketsServed: [] as string[],
    sectorsServed: [] as string[],
    areasOfExpertise: [] as string[],
    countries: [] as string[],
  })

  const allMarkets = useMemo(() => Array.from(new Set(providers.flatMap((p) => p.marketsServed))), [])
  const allSectors = useMemo(() => Array.from(new Set(providers.flatMap((p) => p.sectorsServed))), [])
  const allAreas = useMemo(() => Array.from(new Set(providers.flatMap((p) => p.areasOfExpertise))), [])
  const allCountries = useMemo(
    () => Array.from(new Set(providers.map((p) => p.location.split(",").pop()?.trim() || ""))),
    [],
  )

  useEffect(() => {
    const query = searchParams.get("q") || ""
    setSearchQuery(query)
    filterResults(query, filters)
  }, [searchParams, filters])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    filterResults(query, filters)
  }

  const handleFilterChange = (category: keyof typeof filters, value: string) => {
    setFilters((prev) => {
      const updatedFilters = {
        ...prev,
        [category]: prev[category].includes(value)
          ? prev[category].filter((item) => item !== value)
          : [...prev[category], value],
      }
      filterResults(searchQuery, updatedFilters)
      return updatedFilters
    })
  }

  const filterResults = (query: string, currentFilters: typeof filters) => {
    const results = providers.filter((provider) => {
      if (query.trim() === "") return true

      const searchableText = `
        ${provider.name}
        ${provider.description}
        ${provider.location}
        ${provider.website}
        ${provider.marketsServed.join(" ")}
        ${provider.sectorsServed.join(" ")}
        ${provider.areasOfExpertise.join(" ")}
        ${provider.projects.map((p) => `${p.partner} ${p.description}`).join(" ")}
        ${provider.testimonials.map((t) => `${t.quote} ${t.author} ${t.title} ${t.company}`).join(" ")}
      `.toLowerCase()

      const matchesSearch = searchableText.includes(query.toLowerCase())
      const matchesMarkets =
        currentFilters.marketsServed.length === 0 ||
        currentFilters.marketsServed.some((market) => provider.marketsServed.includes(market))
      const matchesSectors =
        currentFilters.sectorsServed.length === 0 ||
        currentFilters.sectorsServed.some((sector) => provider.sectorsServed.includes(sector))
      const matchesAreas =
        currentFilters.areasOfExpertise.length === 0 ||
        currentFilters.areasOfExpertise.some((area) => provider.areasOfExpertise.includes(area))
      const matchesCountry =
        currentFilters.countries.length === 0 ||
        currentFilters.countries.includes(provider.location.split(",").pop()?.trim() || "")

      return matchesSearch && matchesMarkets && matchesSectors && matchesAreas && matchesCountry
    })

    setSearchResults(results)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-bold max-w-4xl mx-auto mb-12 text-center">
          Search Sustainability Providers
        </h2>

        <div className="relative max-w-2xl mx-auto mb-16">
          <Input
            type="text"
            placeholder="What do you need help with?"
            className="w-full h-12 pl-4 pr-12 text-lg rounded-lg shadow-sm"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
        </div>

        <div className="grid md:grid-cols-[250px,1fr] gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-4">Filters</h3>
            <FilterSection
              title="Markets Served"
              items={allMarkets}
              selectedItems={filters.marketsServed}
              onChange={(value) => handleFilterChange("marketsServed", value)}
            />
            <FilterSection
              title="Sectors Served"
              items={allSectors}
              selectedItems={filters.sectorsServed}
              onChange={(value) => handleFilterChange("sectorsServed", value)}
            />
            <FilterSection
              title="Areas of Expertise"
              items={allAreas}
              selectedItems={filters.areasOfExpertise}
              onChange={(value) => handleFilterChange("areasOfExpertise", value)}
            />
            <FilterSection
              title="Countries"
              items={allCountries}
              selectedItems={filters.countries}
              onChange={(value) => handleFilterChange("countries", value)}
            />
          </div>
          <div>
            <SearchResults results={searchResults} />
          </div>
        </div>
      </main>
    </div>
  )
}

function FilterSection({
  title,
  items,
  selectedItems,
  onChange,
}: {
  title: string
  items: string[]
  selectedItems: string[]
  onChange: (value: string) => void
}) {
  return (
    <div className="mb-6">
      <h4 className="font-medium mb-2">{title}</h4>
      <div className="space-y-2 max-h-40 overflow-y-auto">
        {items.map((item) => (
          <div key={item} className="flex items-center">
            <Checkbox
              id={`${title}-${item}`}
              checked={selectedItems.includes(item)}
              onCheckedChange={() => onChange(item)}
            />
            <Label htmlFor={`${title}-${item}`} className="ml-2 text-sm">
              {item}
            </Label>
          </div>
        ))}
      </div>
    </div>
  )
}


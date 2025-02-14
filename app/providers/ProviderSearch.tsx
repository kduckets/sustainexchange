"use client"

import { Search, Filter, ChevronDown, ChevronUp } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Header } from "@/app/components/Header"
import { SearchResults } from "@/app/components/SearchResults"
import { providers, areasOfExpertise } from "@/data/providers"
import { useState, useMemo, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"

type Filters = {
  marketsServed: string[]
  sectorsServed: string[]
  areasOfExpertise: string[]
  firmSize: string[]
  yearsInBusiness: string[]
}

const filterResults = (query: string, currentFilters: Filters, providersList: typeof providers) => {
  return providersList.filter((provider) => {
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

    const matchesSearch = query.trim() === "" || searchableText.includes(query.toLowerCase())
    const matchesMarkets =
      currentFilters.marketsServed.length === 0 ||
      currentFilters.marketsServed.some(
        (market) => provider.marketsServed.includes(market) || provider.marketsServed.includes("Global"),
      )
    const matchesSectors =
      currentFilters.sectorsServed.length === 0 ||
      currentFilters.sectorsServed.some((sector) => provider.sectorsServed.includes(sector))
    const matchesAreas =
      currentFilters.areasOfExpertise.length === 0 ||
      currentFilters.areasOfExpertise.some((area) => {
        if (Object.keys(areasOfExpertise).includes(area)) {
          return areasOfExpertise[area as keyof typeof areasOfExpertise].some((subArea) =>
            provider.areasOfExpertise.includes(subArea),
          )
        }
        return provider.areasOfExpertise.includes(area)
      })
    const matchesFirmSize = currentFilters.firmSize.length === 0 || currentFilters.firmSize.includes(provider.firmSize)
    const matchesYearsInBusiness =
      currentFilters.yearsInBusiness.length === 0 ||
      currentFilters.yearsInBusiness.some((range) => {
        const [min, max] = range.split("-").map(Number)
        return provider.yearsInBusiness >= min && (max ? provider.yearsInBusiness <= max : true)
      })

    return (
      matchesSearch && matchesMarkets && matchesSectors && matchesAreas && matchesFirmSize && matchesYearsInBusiness
    )
  })
}

export default function ProviderSearch() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchResults, setSearchResults] = useState<typeof providers>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [filters, setFilters] = useState<Filters>({
    marketsServed: [],
    sectorsServed: [],
    areasOfExpertise: [],
    firmSize: [],
    yearsInBusiness: [],
  })
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [expandedCategories, setExpandedCategories] = useState<string[]>([])

  const allMarkets = useMemo(() => {
    const markets = Array.from(new Set(providers.flatMap((p) => p.marketsServed)))
    return markets.includes("Global") ? markets : ["Global", ...markets]
  }, [])
  const allSectors = useMemo(() => Array.from(new Set(providers.flatMap((p) => p.sectorsServed))), [])
  const firmSizes = ["Small", "Mid-size", "Large"]
  const yearsInBusinessRanges = ["0-5 years", "6-10 years", "11-20 years", "21+ years"]

  useEffect(() => {
    const query = searchParams.get("q") || ""
    const expertise = searchParams.get("expertise") || ""
    setSearchQuery(query)
    setFilters((prev) => {
      const newFilters = {
        ...prev,
        areasOfExpertise: expertise ? [expertise] : prev.areasOfExpertise,
      }
      setSearchResults(filterResults(query, newFilters, providers))
      return newFilters
    })
  }, [searchParams])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setSearchResults(filterResults(query, filters, providers))
  }

  const handleFilterChange = (category: keyof Filters, value: string) => {
    setFilters((prev) => {
      const updatedFilters = {
        ...prev,
        [category]: prev[category].includes(value)
          ? prev[category].filter((item) => item !== value)
          : [...prev[category], value],
      }
      setSearchResults(filterResults(searchQuery, updatedFilters, providers))
      return updatedFilters
    })
  }

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const FiltersContent = () => (
    <div className="space-y-6">
      <FilterSection
        title="Markets Served"
        items={allMarkets}
        selectedItems={filters.marketsServed}
        onChange={(value) => handleFilterChange("marketsServed", value)}
      />
      <div className="mb-6">
        <h4 className="font-medium mb-2">Areas of Expertise</h4>
        <div className="space-y-2 max-h-[300px] overflow-y-auto">
          {Object.entries(areasOfExpertise).map(([category, subcategories]) => (
            <div key={category} className="space-y-2">
              <div className="flex items-center">
                <Checkbox
                  id={`category-${category}`}
                  checked={filters.areasOfExpertise.includes(category)}
                  onCheckedChange={() => handleFilterChange("areasOfExpertise", category)}
                />
                <Label htmlFor={`category-${category}`} className="ml-2 text-sm font-medium">
                  {category}
                </Label>
                <Button
                  variant="ghost"
                  size="sm"
                  className="ml-auto p-0 h-6 w-6"
                  onClick={() => toggleCategory(category)}
                >
                  {expandedCategories.includes(category) ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </Button>
              </div>
              {expandedCategories.includes(category) && (
                <div className="ml-6 space-y-2">
                  {subcategories.map((subcategory) => (
                    <div key={subcategory} className="flex items-center">
                      <Checkbox
                        id={`subcategory-${subcategory}`}
                        checked={filters.areasOfExpertise.includes(subcategory)}
                        onCheckedChange={() => handleFilterChange("areasOfExpertise", subcategory)}
                      />
                      <Label htmlFor={`subcategory-${subcategory}`} className="ml-2 text-sm">
                        {subcategory}
                      </Label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <FilterSection
        title="Sectors Served"
        items={allSectors}
        selectedItems={filters.sectorsServed}
        onChange={(value) => handleFilterChange("sectorsServed", value)}
      />
      <FilterSection
        title="Firm Size"
        items={firmSizes}
        selectedItems={filters.firmSize}
        onChange={(value) => handleFilterChange("firmSize", value)}
      />
      <FilterSection
        title="Years in Business"
        items={yearsInBusinessRanges}
        selectedItems={filters.yearsInBusiness}
        onChange={(value) => handleFilterChange("yearsInBusiness", value)}
      />
    </div>
  )

  const clearAll = () => {
    setSearchQuery("")
    const clearedFilters: Filters = {
      marketsServed: [],
      sectorsServed: [],
      areasOfExpertise: [],
      firmSize: [],
      yearsInBusiness: [],
    }
    setFilters(clearedFilters)
    router.push("/providers")
    setSearchResults(filterResults("", clearedFilters, providers))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-bold max-w-4xl mx-auto mb-12 text-center">
          Search Sustainability Providers
        </h2>

        <div className="relative max-w-2xl mx-auto mb-8">
          <Input
            type="text"
            placeholder="What do you need help with?"
            className="w-full h-12 pl-4 pr-12 text-lg rounded-lg shadow-sm"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
        </div>

        <div className="md:hidden mb-8">
          <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="w-full">
                <Filter className="mr-2 h-4 w-4" /> Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full sm:w-[400px] p-0">
              <div className="h-full flex flex-col">
                <SheetHeader className="p-6 pb-0">
                  <SheetTitle>Filters</SheetTitle>
                </SheetHeader>
                <div className="flex-1 overflow-y-auto p-6">
                  <FiltersContent />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="grid md:grid-cols-[250px,1fr] gap-8">
          <div className="hidden md:block bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-4">Filters</h3>
            <FiltersContent />
          </div>
          <div>
            <SearchResults
              results={searchResults}
              searchQuery={searchQuery}
              activeFilters={filters}
              onClearAll={clearAll}
            />
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
  maxHeight = "200px",
}: {
  title: string
  items: string[]
  selectedItems: string[]
  onChange: (value: string) => void
  maxHeight?: string
}) {
  return (
    <div className="mb-6">
      <h4 className="font-medium mb-2">{title}</h4>
      <div className={`space-y-2 overflow-y-auto`} style={{ maxHeight }}>
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


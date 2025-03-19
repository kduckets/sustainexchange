"use client"

import { Filter, ChevronDown, ChevronUp } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Header } from "@/app/components/Header"
import { SearchResults } from "@/app/components/SearchResults"
import { LoadingState } from "@/app/components/LoadingState"
import { providers, specializations, standardSectors, standardMarkets } from "@/data/providers"
import { useState, useMemo, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Image from "next/image"
import { SearchTypeahead } from "@/app/components/SearchTypeahead"
import { useSearchSuggestions } from "@/app/components/SearchSuggestions"

type Filters = {
  marketsServed: string[]
  sectorsServed: string[]
  specializations: string[]
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
        ${provider.specializations.join(" ")}
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
    const matchesSpecializations =
      currentFilters.specializations.length === 0 ||
      currentFilters.specializations.some((area) => {
        if (Object.keys(specializations).includes(area)) {
          return specializations[area as keyof typeof specializations].some((subArea) =>
            provider.specializations.includes(subArea),
          )
        }
        return provider.specializations.includes(area)
      })
    const matchesFirmSize = currentFilters.firmSize.length === 0 || currentFilters.firmSize.includes(provider.firmSize)
    const matchesYearsInBusiness =
      currentFilters.yearsInBusiness.length === 0 ||
      currentFilters.yearsInBusiness.some((range) => {
        const [min, max] = range.split("-").map(Number)
        return provider.yearsInBusiness >= min && (max ? provider.yearsInBusiness <= max : true)
      })

    return (
      matchesSearch &&
      matchesMarkets &&
      matchesSectors &&
      matchesSpecializations &&
      matchesFirmSize &&
      matchesYearsInBusiness
    )
  })
}

export default function ProviderSearch() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchResults, setSearchResults] = useState<typeof providers>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [filters, setFilters] = useState<Filters>({
    marketsServed: ["North America"],
    sectorsServed: [],
    specializations: [],
    firmSize: [],
    yearsInBusiness: [],
  })
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [expandedCategories, setExpandedCategories] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const searchSuggestions = useSearchSuggestions()

  const allMarkets = useMemo(() => {
    return standardMarkets
  }, [])

  const allSectors = useMemo(() => {
    return standardSectors
  }, [])

  const firmSizes = ["Small", "Mid-size", "Large"]
  const yearsInBusinessRanges = ["0-5 years", "6-10 years", "11-20 years", "21+ years"]

  useEffect(() => {
    const query = searchParams.get("q") || ""
    const expertise = searchParams.get("expertise") || ""
    setSearchQuery(query)
    setIsLoading(true)
    setFilters((prev) => {
      const newFilters = {
        ...prev,
        specializations: expertise ? [expertise] : prev.specializations,
      }
      setSearchResults(filterResults(query, newFilters, providers))
      setIsLoading(false)
      return newFilters
    })
  }, [searchParams])

  // Initial load - filter results with default North America filter
  useEffect(() => {
    setSearchResults(filterResults("", filters, providers))
    setIsLoading(false)
  }, [])

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
        <h4 className="font-medium mb-2">Specializations</h4>
        <div className="space-y-2 max-h-[300px] overflow-y-auto">
          {Object.entries(specializations).map(([category, subcategories]) => (
            <div key={category} className="space-y-2">
              <div className="flex items-center">
                <Checkbox
                  id={`category-${category}`}
                  checked={filters.specializations.includes(category)}
                  onCheckedChange={() => handleFilterChange("specializations", category)}
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
                        checked={filters.specializations.includes(subcategory)}
                        onCheckedChange={() => handleFilterChange("specializations", subcategory)}
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
      specializations: [],
      firmSize: [],
      yearsInBusiness: [],
    }
    setFilters(clearedFilters)
    router.push("/providers")
    setSearchResults(filterResults("", clearedFilters, providers))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 w-full h-64 z-0">
          <Image
            src="/clouds.jpg"
            alt="Serene sky with clouds"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        <div className="relative z-10 pt-10 md:pt-16 pb-20">
          <div className="container-wide">
            <h1 className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-6">
              Find Sustainability Experts
            </h1>

            <div className="max-w-2xl mx-auto">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <SearchTypeahead
                  placeholder="How can we help?"
                  suggestions={searchSuggestions}
                  onSearch={handleSearch}
                  initialValue={searchQuery}
                  showButton={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-wide py-8">
        <div className="md:hidden mb-8">
          <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="w-full bg-white">
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

        <div className="grid md:grid-cols-[280px,1fr] gap-8">
          <div className="hidden md:block">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-8">
              <h3 className="font-semibold text-lg mb-6 pb-2 border-b">Filters</h3>
              <FiltersContent />
            </div>
          </div>
          <div>
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              {isLoading ? (
                <LoadingState />
              ) : (
                <SearchResults
                  results={searchResults}
                  searchQuery={searchQuery}
                  activeFilters={filters}
                  onClearAll={clearAll}
                />
              )}
            </div>
          </div>
        </div>
      </div>
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
      <h4 className="font-medium mb-3 text-gray-700">{title}</h4>
      <div className={`space-y-2 overflow-y-auto`} style={{ maxHeight }}>
        {items.map((item) => (
          <div key={item} className="flex items-center">
            <Checkbox
              id={`${title}-${item}`}
              checked={selectedItems.includes(item)}
              onCheckedChange={() => onChange(item)}
              className="text-primary border-gray-300"
            />
            <Label htmlFor={`${title}-${item}`} className="ml-2 text-sm text-gray-600 cursor-pointer">
              {item}
            </Label>
          </div>
        ))}
      </div>
    </div>
  )
}


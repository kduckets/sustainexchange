"use client"

import { Filter, Info, Tag, ChevronDown, ChevronUp } from "lucide-react"
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
import { Badge } from "@/components/ui/badge"
import type React from "react"

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

    // For specializations, check if any of the provider's specializations match the main categories
    // or if they match any of the subcategories of the selected main categories
    const matchesSpecializations =
      currentFilters.specializations.length === 0 ||
      currentFilters.specializations.some((category) => {
        // Direct match with the main category
        if (provider.specializations.includes(category)) {
          return true
        }

        // Check if the category is one of the main categories and if the provider has any of its subcategories
        if (Object.keys(specializations).includes(category)) {
          return specializations[category as keyof typeof specializations].some((subCategory) =>
            provider.specializations.includes(subCategory),
          )
        }

        return false
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
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const searchSuggestions = useSearchSuggestions()

  // Get all subcategories for tag selection
  const allProjectTypes = useMemo(() => {
    return Object.values(specializations).flat()
  }, [])

  const allMarkets = useMemo(() => {
    return standardMarkets
  }, [])

  const allSectors = useMemo(() => {
    return standardSectors
  }, [])

  // Just the 4 main specialization categories
  const mainSpecializations = useMemo(() => {
    return Object.keys(specializations)
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

  const handleTagSelect = (tag: string) => {
    setSelectedTags((prev) => {
      const newTags = prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]

      // Filter results based on selected tags
      const filteredResults = searchResults.filter(
        (provider) => newTags.length === 0 || newTags.some((tag) => provider.specializations.includes(tag)),
      )

      setSearchResults(filteredResults.length > 0 ? filteredResults : filterResults(searchQuery, filters, providers))
      return newTags
    })
  }

  const handleRemoveFilter = (category: keyof Filters, value: string) => {
    setFilters((prev) => {
      const updatedFilters = {
        ...prev,
        [category]: prev[category].filter((item) => item !== value),
      }

      // If removing a tag from selectedTags
      if (category === "specializations" && selectedTags.includes(value)) {
        setSelectedTags((prev) => prev.filter((tag) => tag !== value))
      }

      setSearchResults(filterResults(searchQuery, updatedFilters, providers))
      return updatedFilters
    })
  }

  // Modify the FilterSection component to support collapsible sections
  function FilterSection({
    title,
    items,
    selectedItems,
    onChange,
    maxHeight = "200px",
    tooltip = null,
    collapsible = false,
    defaultCollapsed = false,
  }: {
    title: string
    items: string[]
    selectedItems: string[]
    onChange: (value: string) => void
    maxHeight?: string
    tooltip?: React.ReactNode
    collapsible?: boolean
    defaultCollapsed?: boolean
  }) {
    const [showTooltip, setShowTooltip] = useState(false)
    const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed)

    return (
      <div className="mb-6">
        <div className="flex items-center mb-3">
          <h4 className="font-medium text-gray-700">{title}</h4>
          {tooltip && (
            <div className="relative ml-2">
              <button
                type="button"
                className="text-gray-400 hover:text-gray-600"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                onClick={() => setShowTooltip(!showTooltip)}
                aria-label={`Information about ${title}`}
              >
                <Info className="h-4 w-4" />
              </button>
              {showTooltip && (
                <div className="absolute z-50 w-72 p-4 bg-white rounded-md shadow-lg border border-gray-200 text-sm text-gray-700 left-0 top-6">
                  {tooltip}
                  <div className="absolute -top-2 left-2 w-3 h-3 bg-white border-t border-l border-gray-200 transform rotate-45"></div>
                </div>
              )}
            </div>
          )}

          {collapsible && (
            <button
              type="button"
              className="ml-auto text-gray-400 hover:text-gray-600"
              onClick={() => setIsCollapsed(!isCollapsed)}
              aria-label={isCollapsed ? `Expand ${title}` : `Collapse ${title}`}
            >
              {isCollapsed ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
            </button>
          )}
        </div>

        {/* Show selected items count when collapsed */}
        {collapsible && isCollapsed && selectedItems.length > 0 && (
          <div className="text-sm text-primary mb-2">{selectedItems.length} selected</div>
        )}

        {/* Content - hidden when collapsed */}
        {(!collapsible || !isCollapsed) && (
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
        )}
      </div>
    )
  }

  // Update the FiltersContent component to use the collapsible feature for Sectors Served
  const FiltersContent = () => (
    <div className="space-y-6">
      <FilterSection
        title="Markets Served"
        items={allMarkets}
        selectedItems={filters.marketsServed}
        onChange={(value) => handleFilterChange("marketsServed", value)}
      />

      {/* Simplified Specializations section with just the 4 main categories */}
      <FilterSection
        title="Specializations"
        items={mainSpecializations}
        selectedItems={filters.specializations}
        onChange={(value) => handleFilterChange("specializations", value)}
      />

      <FilterSection
        title="Sectors Served"
        items={allSectors}
        selectedItems={filters.sectorsServed}
        onChange={(value) => handleFilterChange("sectorsServed", value)}
        collapsible={true}
        defaultCollapsed={true}
        maxHeight="none" // Remove scrolling when expanded
      />

      <FilterSection
        title="Firm Size"
        items={firmSizes}
        selectedItems={filters.firmSize}
        tooltip={
          <div className="space-y-2">
            <p className="font-medium text-gray-800">Firm Size Categories:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <span className="font-medium">Small:</span> Fewer than 25 employees
              </li>
              <li>
                <span className="font-medium">Mid-size:</span> Between 25-100 employees
              </li>
              <li>
                <span className="font-medium">Large:</span> More than 100 employees
              </li>
            </ul>
          </div>
        }
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
    setSelectedTags([])
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

  // Get popular project types for quick filtering
  const popularProjectTypes = useMemo(() => {
    return [
      "Sustainability Strategy Development",
      "Net Zero & Decarbonization Planning",
      "Carbon Footprint Assessment, GHG Accounting & Data Analysis",
      "ESG & Sustainable Finance",
      "Sustainability & ESG Reporting",
      "Supply Chain Sustainability",
      "Renewable Energy & Energy Services",
      "Climate & Environmental Risk Assessment",
    ]
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 w-full h-64 z-0">
          <Image src="/clouds.jpg" alt="Serene sky with clouds" fill priority className="object-cover" />
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
        {/* Project Type Tags for quick filtering - hidden on mobile */}
        <div className="hidden md:block bg-white p-4 rounded-lg shadow-sm mb-6">
          <div className="flex items-center mb-3">
            <Tag className="h-5 w-5 mr-2 text-primary" />
            <h3 className="font-medium text-gray-700">Popular Project Types</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {popularProjectTypes.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                className={`cursor-pointer ${selectedTags.includes(tag) ? "bg-primary" : "hover:bg-accent"}`}
                onClick={() => handleTagSelect(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

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
                  activeFilters={{
                    ...filters,
                    // Include selected tags in the active filters display
                    specializations: [...filters.specializations, ...selectedTags],
                  }}
                  onClearAll={clearAll}
                  onRemoveFilter={handleRemoveFilter}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


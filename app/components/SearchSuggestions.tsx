"use client"

import { useEffect, useState } from "react"
import { specializations, standardSectors } from "@/data/providers"

// Hook to get all search suggestions
export function useSearchSuggestions() {
  const [allSuggestions, setAllSuggestions] = useState<string[]>([])

  useEffect(() => {
    // Skip if we already have suggestions
    if (allSuggestions.length > 0) return

    // Extract all specializations
    const allSpecializations = Object.values(specializations).flat()

    // Extract main specialization categories
    const mainCategories = Object.keys(specializations)

    // Combine all data sources (excluding markets)
    const suggestions = [
      ...allSpecializations,
      ...mainCategories,
      ...standardSectors,
      // Additional sustainability terms
      "Carbon Footprint",
      "Net Zero",
      "ESG Reporting",
      "Sustainability Strategy",
      "Climate Risk",
      "Renewable Energy",
      "Sustainable Finance",
      "Green Building",
      "Circular Economy",
      "Biodiversity",
      "Supply Chain Sustainability",
      "Climate Change",
      "GHG Emissions",
      "Sustainable Development Goals",
      "SDGs",
      "Corporate Social Responsibility",
      "CSR",
      "Environmental Impact Assessment",
      "Life Cycle Assessment",
      "LCA",
      "Science-Based Targets",
      "SBTi",
      "TCFD",
      "Carbon Disclosure Project",
      "CDP",
      "GRI Standards",
      "SASB",
      "ISO 14001",
      "B Corp Certification",
      "Water Management",
      "Waste Reduction",
      "Energy Efficiency",
      "Sustainable Procurement",
      "Green Marketing",
      "Environmental Justice",
      "Natural Capital",
      "Decarbonization",
      "Carbon Neutrality",
      "Carbon Offsetting",
      "Sustainable Packaging",
      "Eco-design",
    ]

    // Remove duplicates and sort alphabetically
    setAllSuggestions(Array.from(new Set(suggestions)).sort())
  }, [allSuggestions.length])

  return allSuggestions
}


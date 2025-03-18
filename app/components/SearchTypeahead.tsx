"use client"

import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef, useMemo } from "react"
import type React from "react"

interface SearchTypeaheadProps {
  placeholder?: string
  suggestions: string[]
  onSearch: (query: string) => void
  initialValue?: string
  buttonText?: string | React.ReactNode
  buttonClassName?: string
  inputClassName?: string
  showButton?: boolean
  maxSuggestions?: number
  className?: string
}

export function SearchTypeahead({
  placeholder = "Search...",
  suggestions,
  onSearch,
  initialValue = "",
  buttonText = "Search",
  buttonClassName = "h-14 px-8 bg-primary text-white hover:bg-primary/90 w-full sm:w-auto",
  inputClassName = "w-full h-14 pl-5 pr-12 text-base md:text-lg rounded-md shadow-sm border-gray-300",
  showButton = true,
  maxSuggestions = 8,
  className = "",
}: SearchTypeaheadProps) {
  const [searchQuery, setSearchQuery] = useState(initialValue)
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0)
  const searchRef = useRef<HTMLDivElement>(null)

  // Process suggestions to split entries with commas or "&" - only when suggestions change
  const processedSuggestions = useMemo(() => {
    const result: string[] = []

    suggestions.forEach((suggestion) => {
      // Split by commas and "&" symbols
      const parts = suggestion.split(/,\s*|\s*&\s*/)

      if (parts.length === 1) {
        // If there's only one part, just add the original suggestion
        result.push(suggestion)
      } else {
        // If there are multiple parts, add each part as a separate suggestion
        parts.forEach((part) => {
          const trimmedPart = part.trim()
          if (trimmedPart && !result.includes(trimmedPart)) {
            result.push(trimmedPart)
          }
        })
      }
    })

    // Remove duplicates and sort
    return Array.from(new Set(result)).sort()
  }, [suggestions])

  // Filter suggestions based on input - separate useEffect to avoid infinite loops
  useEffect(() => {
    const query = searchQuery.toLowerCase().trim()

    // Only filter suggestions if there's text
    if (query === "") {
      setFilteredSuggestions([])
      setShowSuggestions(false)
      return
    }

    const filtered = processedSuggestions
      .filter((suggestion) => suggestion.toLowerCase().includes(query))
      .slice(0, maxSuggestions)

    setFilteredSuggestions(filtered)
    setActiveSuggestionIndex(0)

    // Show suggestions if we have matches and there's text
    setShowSuggestions(filtered.length > 0)
  }, [searchQuery, processedSuggestions, maxSuggestions])

  // Handle click outside to close suggestions
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setShowSuggestions(false)
    onSearch(searchQuery.trim())
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // If no suggestions or not showing suggestions, do nothing special
    if (filteredSuggestions.length === 0 || !showSuggestions) return

    // Handle arrow up/down
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setActiveSuggestionIndex((prev) => (prev < filteredSuggestions.length - 1 ? prev + 1 : prev))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setActiveSuggestionIndex((prev) => (prev > 0 ? prev - 1 : 0))
    } else if (e.key === "Enter" && showSuggestions) {
      e.preventDefault()
      setSearchQuery(filteredSuggestions[activeSuggestionIndex])
      setShowSuggestions(false)
      onSearch(filteredSuggestions[activeSuggestionIndex])
    } else if (e.key === "Escape") {
      setShowSuggestions(false)
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion)
    setShowSuggestions(false)
    onSearch(suggestion)
  }

  const clearSearch = () => {
    setSearchQuery("")
    setFilteredSuggestions([])
    setShowSuggestions(false)
  }

  return (
    <div className={className} style={{ position: "relative" }}>
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow" ref={searchRef}>
          <div className="relative">
            <Input
              type="text"
              placeholder={placeholder}
              className={inputClassName}
              value={searchQuery}
              onChange={(e) => {
                const value = e.target.value
                setSearchQuery(value)
              }}
              onKeyDown={handleKeyDown}
              aria-autocomplete="list"
              aria-controls="search-suggestions"
              aria-expanded={showSuggestions}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={clearSearch}
                className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
                <span className="sr-only">Clear search</span>
              </button>
            )}
            <button
              type="submit"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary"
            >
              <Search className="w-6 h-6" />
              <span className="sr-only">Search</span>
            </button>
          </div>

          {/* Suggestions dropdown with individual terms */}
          {showSuggestions && filteredSuggestions.length > 0 && (
            <ul
              id="search-suggestions"
              className="absolute w-full bg-white mt-1 rounded-md shadow-lg max-h-60 overflow-auto border border-gray-200"
              style={{
                zIndex: 9999,
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
              }}
            >
              {filteredSuggestions.map((suggestion, index) => (
                <li
                  key={suggestion}
                  className={`px-4 py-2 cursor-pointer hover:bg-accent ${
                    index === activeSuggestionIndex ? "bg-accent text-primary" : ""
                  }`}
                  onClick={() => handleSuggestionClick(suggestion)}
                  onMouseEnter={() => setActiveSuggestionIndex(index)}
                >
                  {suggestion.toLowerCase()}
                </li>
              ))}
            </ul>
          )}
        </div>

        {showButton && (
          <Button type="submit" className={buttonClassName}>
            {buttonText}
          </Button>
        )}
      </form>
    </div>
  )
}


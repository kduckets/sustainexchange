"use client"

import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react"
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
  inputClassName = "w-full h-14 pl-5 pr-12 text-lg rounded-md shadow-sm border-gray-300",
  showButton = true,
  maxSuggestions = 8,
  className = "",
}: SearchTypeaheadProps) {
  const [searchQuery, setSearchQuery] = useState(initialValue)
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0)
  const searchRef = useRef<HTMLDivElement>(null)

  // Filter suggestions based on input
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredSuggestions([])
      return
    }

    const query = searchQuery.toLowerCase()
    const filtered = suggestions
      .filter((suggestion) => suggestion.toLowerCase().includes(query))
      .slice(0, maxSuggestions)

    setFilteredSuggestions(filtered)
    setActiveSuggestionIndex(0)
  }, [searchQuery, suggestions, maxSuggestions])

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
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim())
    }
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
    } else if (e.key === "Escape") {
      setShowSuggestions(false)
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion)
    setShowSuggestions(false)
  }

  const clearSearch = () => {
    setSearchQuery("")
    setShowSuggestions(false)
  }

  return (
    <div className={className}>
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow" ref={searchRef}>
          <div className="relative">
            <Input
              type="text"
              placeholder={placeholder}
              className={inputClassName}
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setShowSuggestions(true)
              }}
              onFocus={() => setShowSuggestions(true)}
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

          {/* Suggestions dropdown */}
          {showSuggestions && filteredSuggestions.length > 0 && (
            <ul
              id="search-suggestions"
              className="absolute z-10 w-full bg-white mt-1 rounded-md shadow-lg max-h-60 overflow-auto"
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
                  {suggestion}
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


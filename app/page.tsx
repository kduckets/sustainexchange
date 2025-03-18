"use client"

import React from "react"

import { ClipboardCheck, Wrench, Calculator, FileText, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Header } from "@/app/components/Header"
import Image from "next/image"
import { SearchTypeahead } from "@/app/components/SearchTypeahead"
import { useSearchSuggestions } from "@/app/components/SearchSuggestions"
import { useEffect, useState, useCallback } from "react"

export default function Home() {
  const router = useRouter()
  const [suggestions, setSuggestions] = useState<string[]>([])
  const searchSuggestionsFromHook = useSearchSuggestions()

  // Ensure suggestions are loaded - use useCallback to prevent infinite loops
  useEffect(() => {
    // Only update if the suggestions have changed and are not empty
    if (
      searchSuggestionsFromHook.length > 0 &&
      JSON.stringify(searchSuggestionsFromHook) !== JSON.stringify(suggestions)
    ) {
      setSuggestions(searchSuggestionsFromHook)
    }
  }, [searchSuggestionsFromHook, suggestions])

  // Use useCallback to prevent recreating this function on every render
  const handleSearch = useCallback(
    (query: string) => {
      // Navigate to providers page with query parameter if query exists
      if (query) {
        router.push(`/providers?q=${encodeURIComponent(query)}`)
      } else {
        // Navigate to providers page without query parameter if no query
        router.push("/providers")
      }
    },
    [router],
  )

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image src="/clouds.jpg" alt="Serene sky with clouds" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        <div className="relative z-10 pt-10 md:pt-20 pb-24">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
                Connecting businesses with sustainability experts
              </h1>
              <p className="text-xl text-gray-800 mb-8">
                Find the right sustainability partners to help your organization achieve its environmental, social, and
                governance goals.
              </p>

              {/* Isolated search container with high z-index */}
              <div className="max-w-2xl mx-auto mb-8" style={{ position: "relative", zIndex: 1000 }}>
                <SearchTypeahead
                  placeholder="What sustainability challenge can we help with?"
                  suggestions={suggestions}
                  onSearch={handleSearch}
                  buttonText="Find Experts"
                />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-2xl mx-auto">
                <SpecializationButton
                  icon={<ClipboardCheck className="w-5 h-5 mr-2" />}
                  label="Strategy & Planning"
                  expertise="Strategy & Planning"
                />
                <SpecializationButton
                  icon={<Wrench className="w-5 h-5 mr-2" />}
                  label="Technical Support"
                  expertise="Technical Support"
                />
                <SpecializationButton
                  icon={<Calculator className="w-5 h-5 mr-2" />}
                  label="Auditing & Verification"
                  expertise="Auditing, Testing & Verification"
                />
                <SpecializationButton
                  icon={<FileText className="w-5 h-5 mr-2" />}
                  label="PR & Communications"
                  expertise="PR & Communications"
                />
              </div>
              <div className="max-w-2xl mx-auto">
                <div className="backdrop-blur-sm p-6 rounded-lg shadow-md border-2 border-primary">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">Have a sustainability project?</h3>
                      <p className="text-gray-600">Post your RFP and connect with qualified experts</p>
                    </div>
                    <Link href="/rfx-hub">
                      <Button className="bg-primary text-white hover:bg-primary/90 px-6 py-3 text-lg whitespace-nowrap">
                        Post an RFP <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the component remains the same */}
      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="section-title text-center">Sustainability Expertise Areas</h2>
            <p className="section-subtitle text-center">
              Learn more about the specialized services our sustainability experts provide
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <ServiceCard
                icon={<ClipboardCheck className="w-12 h-12" />}
                title="Strategy & Planning"
                description="Develop comprehensive sustainability strategies aligned with your business goals"
                expertise="Strategy & Planning"
              />
              <ServiceCard
                icon={<Wrench className="w-12 h-12" />}
                title="Technical Support"
                description="Implement practical solutions for energy, waste, water, and carbon management"
                expertise="Technical Support"
              />
              <ServiceCard
                icon={<Calculator className="w-12 h-12" />}
                title="Auditing & Verification"
                description="Validate your sustainability performance with third-party assurance"
                expertise="Auditing, Testing & Verification"
              />
              <ServiceCard
                icon={<FileText className="w-12 h-12" />}
                title="PR & Communications"
                description="Effectively communicate your sustainability story to stakeholders"
                expertise="PR & Communications"
              />
            </div>
          </div>
        </div>
      </section>

      {/* RFX Hub Section */}
      <section className="py-20 bg-accent">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-800">Sustainability RFPs</h2>
            <p className="text-lg text-gray-700 mb-8">
              Browse active sustainability RFPs or post your own to connect with qualified experts who can help you
              achieve your environmental and social goals.
            </p>
            <Link href="/rfx-hub">
              <Button className="bg-primary text-white hover:bg-primary/90 px-8 py-3 text-lg">
                Visit RFX Hub <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

// Memoize these components to prevent unnecessary re-renders
const ServiceCard = React.memo(function ServiceCard({
  icon,
  title,
  description,
  expertise,
}: {
  icon: React.ReactNode
  title: string
  description: string
  expertise: string
}) {
  const router = useRouter()

  const handleClick = useCallback(() => {
    router.push(`/providers?expertise=${encodeURIComponent(expertise)}`)
  }, [router, expertise])

  return (
    <button onClick={handleClick} className="block w-full text-left">
      <div className="flex flex-col h-full p-8 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all">
        <div className="text-primary mb-4">{icon}</div>
        <h3 className="font-semibold text-xl mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        <div className="flex items-center text-primary font-medium">
          Explore <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </div>
    </button>
  )
})

const SpecializationButton = React.memo(function SpecializationButton({
  icon,
  label,
  expertise,
}: {
  icon: React.ReactNode
  label: string
  expertise: string
}) {
  const router = useRouter()

  const handleClick = useCallback(() => {
    router.push(`/providers?expertise=${encodeURIComponent(expertise)}`)
  }, [router, expertise])

  return (
    <button
      onClick={handleClick}
      className="flex items-center justify-center bg-white/90 backdrop-blur-sm py-2 px-3 rounded-md shadow-sm hover:shadow-md transition-all text-sm font-medium border border-gray-100 hover:border-primary/20"
    >
      <span className="text-primary">{icon}</span>
      <span>{label}</span>
    </button>
  )
})


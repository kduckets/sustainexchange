"use client"

import {
  ClipboardCheck,
  Wrench,
  Calculator,
  FileText,
  Search,
  ArrowRight,
  Calendar,
  Building,
  MapPin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Header } from "@/app/components/Header"
import { useState } from "react"
import type React from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

// Sample RFP data (same as in rfx-hub page)
const rfxData = [
  {
    id: "1",
    organization: "INSTITUTE FOR SUSTAINABLE COMMUNITIES",
    title: "Quality Assurance Services for the Environmental Justice Eastern Region Grantmaking Program",
    posted: "02/07/2025",
    due: "03/21/2025",
    location: "Washington, DC",
    tags: ["Environmental Justice", "Grantmaking", "Quality Assurance"],
  },
  {
    id: "2",
    organization: "CITY OF BOSTON",
    title: "Annual sustainability report data analysis",
    posted: "02/10/2025",
    due: "02/24/2025",
    location: "Boston, MA",
    tags: ["ESG Reporting", "Data Analysis", "Municipal"],
  },
  {
    id: "3",
    organization: "GLOBAL TECH CORPORATION",
    title: "Supply Chain Carbon Footprint Assessment",
    posted: "02/15/2025",
    due: "03/15/2025",
    location: "Remote",
    tags: ["Carbon Footprint", "Supply Chain", "Assessment"],
  },
  {
    id: "4",
    organization: "RENEWABLE ENERGY ALLIANCE",
    title: "Community Solar Project Feasibility Study",
    posted: "02/12/2025",
    due: "03/05/2025",
    location: "Multiple Locations",
    tags: ["Renewable Energy", "Solar", "Feasibility Study"],
  },
]

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/providers?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image src="/clouds.jpg" alt="Serene sky with clouds" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        <div className="relative z-10 pt-20 pb-24">
          <div className="container-wide">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
                Connecting businesses with sustainability experts
              </h1>
              <p className="text-xl text-gray-800 mb-8 max-w-2xl">
                Find the right sustainability partners to help your organization achieve its environmental, social, and
                governance goals.
              </p>

              <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="relative flex-grow">
                  <Input
                    type="text"
                    placeholder="What sustainability challenge can we help with?"
                    className="w-full h-14 pl-5 pr-12 text-lg rounded-md shadow-sm border-gray-300"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary"
                  >
                    <Search className="w-6 h-6" />
                  </button>
                </div>
                <Link href="/providers">
                <Button type="submit" className="h-14 px-8 bg-primary text-white hover:bg-primary/90">
                  Find Experts
                </Button>
                </Link>
              </form>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
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
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container-wide">
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
      </section>

      {/* RFX Hub Section */}
      <section className="py-20 bg-accent">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-800">Current Sustainability RFPs</h2>
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
            <div className="md:w-1/2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {rfxData.slice(0, 4).map((rfx) => (
                  <Link href={`/rfx/${rfx.id}`} key={rfx.id} className="block">
                    <div className="bg-white p-6 rounded-lg shadow-sm card-hover h-full flex flex-col">
                      <div className="flex items-center mb-3">
                        <Building className="text-primary w-5 h-5 mr-2 flex-shrink-0" />
                        <h3 className="font-semibold text-sm text-gray-600 truncate">{rfx.organization}</h3>
                      </div>
                      <h4 className="font-semibold text-lg mb-3 line-clamp-2">{rfx.title}</h4>

                      <div className="space-y-2 mb-4 flex-grow">
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="w-4 h-4 mr-2" />
                          Due: {rfx.due}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="w-4 h-4 mr-2" />
                          {rfx.location}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {rfx.tags.slice(0, 2).map((tag, index) => (
                          <Badge key={index} variant="secondary" className="bg-accent text-primary text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {rfx.tags.length > 2 && (
                          <Badge variant="outline" className="text-gray-600 text-xs">
                            +{rfx.tags.length - 2}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/rfx-hub">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                View All RFPs <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function ServiceCard({
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

  const handleClick = () => {
    router.push(`/providers?expertise=${encodeURIComponent(expertise)}`)
  }

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
}

function SpecializationButton({
  icon,
  label,
  expertise,
}: {
  icon: React.ReactNode
  label: string
  expertise: string
}) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/providers?expertise=${encodeURIComponent(expertise)}`)
  }

  return (
    <button
      onClick={handleClick}
      className="flex items-center justify-center bg-white/90 backdrop-blur-sm py-2 px-3 rounded-md shadow-sm hover:shadow-md transition-all text-sm font-medium border border-gray-100 hover:border-primary/20"
    >
      <span className="text-primary">{icon}</span>
      <span>{label}</span>
    </button>
  )
}


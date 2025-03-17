"use client"

import { ClipboardCheck, Wrench, Calculator, FileText, Search, ArrowRight, BarChart3, Globe, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Header } from "@/app/components/Header"
import { useState } from "react"
import type React from "react"
import Image from "next/image"

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
          <Image
            src="/clouds.jpg"
            alt="Serene sky with clouds"
            fill
            priority
            className="object-cover"
          />
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

              <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 mb-12">
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
                <Button type="submit" className="h-14 px-8 bg-primary text-white hover:bg-primary/90">
                  Find Experts
                </Button>
              </form>

              <div className="flex flex-wrap gap-4">
                <Link href="/providers">
                  <Button
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:border-primary hover:text-primary"
                  >
                    Browse All Providers
                  </Button>
                </Link>
                <Link href="/rfx-hub">
                  <Button
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:border-primary hover:text-primary"
                  >
                    Post an RFP
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <h2 className="section-title text-center">Sustainability Expertise</h2>
          <p className="section-subtitle text-center">
            Connect with specialized providers across all sustainability domains
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
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-800">
                Post your sustainability RFP, RFI, or RFQ
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Connect with qualified sustainability experts who can help you achieve your environmental and social
                goals. Our RFX Hub streamlines the process of finding the right partners for your projects.
              </p>
              <Link href="/rfx-hub">
                <Button className="bg-primary text-white hover:bg-primary/90 px-8 py-3 text-lg">
                  Visit RFX Hub <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm card-hover">
                <BarChart3 className="text-primary w-10 h-10 mb-4" />
                <h3 className="font-semibold text-xl mb-2">ESG Reporting</h3>
                <p className="text-gray-600">Find experts to help with sustainability reporting and disclosures</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm card-hover">
                <Globe className="text-primary w-10 h-10 mb-4" />
                <h3 className="font-semibold text-xl mb-2">Net Zero Planning</h3>
                <p className="text-gray-600">Connect with specialists in carbon reduction strategies</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm card-hover">
                <Leaf className="text-primary w-10 h-10 mb-4" />
                <h3 className="font-semibold text-xl mb-2">Biodiversity</h3>
                <p className="text-gray-600">Engage experts in nature-positive business approaches</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm card-hover">
                <FileText className="text-primary w-10 h-10 mb-4" />
                <h3 className="font-semibold text-xl mb-2">Supply Chain</h3>
                <p className="text-gray-600">Find specialists in sustainable supply chain management</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-5xl font-semibold text-primary mb-2">25+</p>
              <p className="text-xl text-gray-600">Sustainability specializations</p>
            </div>
            <div>
              <p className="text-5xl font-semibold text-primary mb-2">100+</p>
              <p className="text-xl text-gray-600">Vetted service providers</p>
            </div>
            <div>
              <p className="text-5xl font-semibold text-primary mb-2">500+</p>
              <p className="text-xl text-gray-600">Successful projects</p>
            </div>
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


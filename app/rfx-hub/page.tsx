"use client"

import { Search, ArrowRight, Filter } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Header } from "@/app/components/Header"
import { specializations, standardSectors } from "@/data/providers"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

const rfxData = [
  {
    id: "1",
    organization: "INSTITUTE FOR SUSTAINABLE COMMUNITIES",
    title: "Quality Assurance Services for the Environmental Justice Eastern Region Grantmaking Program",
    posted: "02/07/2025 - 12:00PM",
    due: "03/21/2025 - 5:00PM",
    contact: {
      name: "John Doe",
      email: "JDoe@isc.org",
    },
    tags: ["Environmental Justice", "Grantmaking", "Quality Assurance"],
  },
  {
    id: "2",
    organization: "CITY OF BOSTON",
    title: "Annual sustainability report data analysis",
    posted: "02/10/2025 - 12:00PM",
    due: "02/24/2025 - 12:00PM",
    contact: {
      name: "Emily Lawson",
      email: "emily.lawson@boston.gov",
      phone: "555-987-6543",
    },
    tags: ["ESG Reporting", "Data Analysis", "Municipal"],
  },
]

const projectTypes = Object.keys(specializations)
const sectors = standardSectors

export default function RFXHub() {
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

        <div className="relative z-10 pt-16 pb-20">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sustainability RFP Hub</h1>
              <p className="text-xl text-gray-700 mb-8">
              Post your sustainability project or browse current opportunities
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-primary text-white hover:bg-primary/90 px-6 py-3 text-lg">
                  Post a Project <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:border-primary hover:text-primary px-6 py-3 text-lg"
                >
                  How It Works
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Filters */}
      <div className="container-wide py-8">
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b">Find Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Project Type" />
              </SelectTrigger>
              <SelectContent>
                {projectTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Sector" />
              </SelectTrigger>
              <SelectContent>
                {sectors.map((sector) => (
                  <SelectItem key={sector} value={sector}>
                    {sector}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Due Date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1week">Next Week</SelectItem>
                <SelectItem value="2weeks">Next 2 Weeks</SelectItem>
                <SelectItem value="1month">Next Month</SelectItem>
                <SelectItem value="all">All</SelectItem>
              </SelectContent>
            </Select>

            <Button className="bg-primary text-white hover:bg-primary/90">
              <Filter className="mr-2 h-4 w-4" /> Apply Filters
            </Button>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Current Opportunities</h2>

          {rfxData.map((rfx) => (
            <div
              key={rfx.id}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100"
            >
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                    <h3 className="font-bold text-lg text-gray-800">{rfx.organization}</h3>
                    <div className="text-sm text-gray-500">Posted: {rfx.posted}</div>
                  </div>

                  <Link href={`/rfx/${rfx.id}`} className="text-primary hover:underline font-medium block mb-4 text-lg">
                    {rfx.title}
                  </Link>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {rfx.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-accent text-primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Due:</p>
                      <p className="font-medium">{rfx.due}</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm text-gray-600">Contact:</p>
                      <p className="font-medium">{rfx.contact.name}</p>
                      <a href={`mailto:${rfx.contact.email}`} className="text-primary hover:underline">
                        {rfx.contact.email}
                      </a>
                      {rfx.contact.phone && <p className="text-sm">{rfx.contact.phone}</p>}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between items-end">
                  <Button variant="ghost" size="icon" className="h-10 w-10">
                    <Search className="h-5 w-5" />
                  </Button>

                  <Link href={`/rfx/${rfx.id}`}>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 mt-4">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-accent p-8 rounded-lg shadow-sm mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Have a sustainability project?</h3>
              <p className="text-gray-700 mb-0">
                Post your RFP, RFI, or RFQ to connect with qualified sustainability experts.
              </p>
            </div>
            <Button className="bg-primary text-white hover:bg-primary/90 px-8 py-3 text-lg whitespace-nowrap">
              Post Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}


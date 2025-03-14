"use client"

import { Search } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Header } from "@/app/components/Header"
import { specializations, standardSectors } from "@/data/providers"

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
  },
]

const projectTypes = Object.keys(specializations)
const sectors = standardSectors

export default function RFXHub() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <Header />
      <main className="container mx-auto px-4 py-4 md:py-8">
        <h1 className="text-3xl md:text-4xl max-w-4xl mx-auto mb-4 md:mb-8 text-center">RFX Hub</h1>
        <p className="text-xl text-center mb-4 md:mb-8">Post and search for sustainability RFPs/RFIs/RFQs here today</p>

        <div className="bg-gray-100 p-6 rounded-lg mb-4 md:mb-8">
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

            <Button className="bg-blue-600 text-white hover:bg-blue-700">APPLY</Button>
          </div>
        </div>

        <div className="space-y-6">
          {rfxData.map((rfx) => (
            <div key={rfx.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between">
                <div className="flex-grow">
                  <h2 className="text-lg font-bold mb-2">{rfx.organization}</h2>
                  <Link href={`/rfx/${rfx.id}`} className="text-blue-600 hover:underline block mb-4">
                    {rfx.title}
                  </Link>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Posted:</p>
                      <p className="font-medium">{rfx.posted}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Due:</p>
                      <p className="font-medium">{rfx.due}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Contact:</p>
                      <p className="font-medium">{rfx.contact.name}</p>
                      <a href={`mailto:${rfx.contact.email}`} className="text-blue-600 hover:underline">
                        {rfx.contact.email}
                      </a>
                      {rfx.contact.phone && <p className="text-sm">{rfx.contact.phone}</p>}
                    </div>
                  </div>
                </div>
                <div className="ml-4">
                  <Button variant="ghost" className="h-10 w-10 p-0">
                    <Search className="h-6 w-6" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}


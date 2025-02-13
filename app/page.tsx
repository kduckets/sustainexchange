"use client"

import { ClipboardCheck, Wrench, Calculator, FileText, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Header } from "@/app/components/Header"
import { useState } from "react"
import type React from "react"

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <Header />
      <main className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold max-w-4xl mx-auto mb-12">
          Find top sustainability experts to tackle your toughest projects
        </h2>

        <div className="relative max-w-4xl mx-auto mb-16 flex flex-col sm:flex-row items-center">
          <form onSubmit={handleSearch} className="w-full sm:flex-grow mb-4 sm:mb-0">
            <div className="relative">
              <Input
                type="text"
                placeholder="What do you need help with?"
                className="w-full h-12 pl-4 pr-12 text-lg rounded-lg shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <Search className="w-6 h-6" />
              </button>
            </div>
          </form>
          <div className="w-full sm:w-auto sm:ml-4">
            <Link href="/providers" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                View All Providers
              </Button>
            </Link>
          </div>
        </div>


        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16 mt-16">
          <ServiceCard
            icon={<ClipboardCheck className="w-12 h-12" />}
            title="Strategy & Planning"
            href="/strategy-planning"
          />
          <ServiceCard icon={<Wrench className="w-12 h-12" />} title="Technical Support" href="/" />
          <ServiceCard icon={<Calculator className="w-12 h-12" />} title="Auditing & M&V" href="/" />
          <ServiceCard icon={<FileText className="w-12 h-12" />} title="Reporting & Communications" href="/"/>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/rfx-hub">
            <Button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white text-xl px-8 py-6 hover:from-blue-500 hover:to-blue-700">
              RFX Hub
            </Button>
          </Link>
          <p className="text-lg">Post your RFP/I/Q today to attract top experts to your sustainability projects</p>
        </div>
      </main>
    </div>
  )
}

function ServiceCard({
  icon,
  title,
  href,
}: {
  icon: React.ReactNode
  title: string
  href?: string
}) {
  const CardContent = (
    <div className="flex flex-col h-full items-center gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="text-blue-600">{icon}</div>
      <h3 className="font-semibold text-center">{title}</h3>
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="block">
        {CardContent}
      </Link>
    )
  }

  return CardContent
}


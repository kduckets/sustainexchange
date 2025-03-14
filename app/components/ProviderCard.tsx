"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import Link from "next/link"

interface ProviderCardProps {
  name: string
  logo: string
  marketsServed: string
  description: string
  yearsInBusiness: string
}

export function ProviderCard({
  name,
  logo,
  marketsServed,
  description,
  yearsInBusiness,
}: ProviderCardProps) {
  return (
    <Card className="p-8">
      <Link href={`/providers/${name.toLowerCase().replace(/\s+/g, "-")}`} className="block">
        <div className="grid md:grid-cols-[200px,1fr,200px] gap-8 items-start">
          <div>
            <Image src={logo || "/placeholder.svg"} alt={`${name} logo`} width={200} height={80} className="mb-4" />
            <h2 className="text-2xl font-bold mb-2">{name}</h2>
            <div className="text-sm">
              <strong className="font-semibold">Markets Served:</strong> {marketsServed}
              <div className="font-thin">{yearsInBusiness}</div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-gray-700">{description}</p>
          </div>

          <div className="space-y-4">
          <Button
              className="w-full bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50"
              onClick={(e) => {
                e.preventDefault()
                // Add contact functionality here
                console.log(`Contacting ${name}`)
              }}
            >
              Contact
            </Button>   
          </div>
        </div>
      </Link>
    </Card>
  )
}


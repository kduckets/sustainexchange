"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface CaseStudyPreviewProps {
  title: string
  description: string
  imageUrl: string
  url: string
  provider: string
}

export function CaseStudyPreview({ title, description, imageUrl, url, provider }: CaseStudyPreviewProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className={`overflow-hidden transition-all duration-300 ${isHovered ? "shadow-lg" : "shadow-sm"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className={`object-cover transition-transform duration-500 ${isHovered ? "scale-105" : "scale-100"}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4 w-full">
          <div className="text-white text-sm font-medium bg-primary/80 inline-block px-2 py-1 rounded mb-2">
            {provider}
          </div>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>

        <Link href={url} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 group">
            View Case Study
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </Card>
  )
}


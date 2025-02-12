"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, type ReactNode } from "react"

interface CarouselProps {
  items: ReactNode[]
  className?: string
}

export function Carousel({ items, className = "" }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((currentIndex + 1) % items.length)
  }

  const previous = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length)
  }

  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden">{items[currentIndex]}</div>

      {items.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full"
            onClick={previous}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full"
            onClick={next}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          <div className="flex justify-center gap-2 mt-4">
            {items.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-gray-800" : "bg-gray-300"}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}


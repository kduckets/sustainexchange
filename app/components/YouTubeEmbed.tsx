"use client"

import { useState } from "react"

interface YouTubeEmbedProps {
  videoId: string
}

export function YouTubeEmbed({ videoId }: YouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="aspect-video relative">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <p className="text-gray-600">Loading video...</p>
        </div>
      )}
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={() => setIsLoaded(true)}
        className={isLoaded ? "opacity-100" : "opacity-0"}
      />
    </div>
  )
}


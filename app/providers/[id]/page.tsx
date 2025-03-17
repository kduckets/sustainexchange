import Image from "next/image"
import { Button } from "@/components/ui/button"
import { providers } from "@/data/providers"
import { notFound } from "next/navigation"
import { Carousel } from "@/app/components/Carousel"
import { Header } from "@/app/components/Header"
import { YouTubeEmbed } from "@/app/components/YouTubeEmbed"

export default function ProviderProfile({ params }: { params: { id: string } }) {
  const provider = providers.find((p) => p.id === params.id)

  if (!provider) {
    notFound()
  }

  function getYouTubeVideoId(url: string): string | null {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : null
  }

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/clouds.jpg"
          alt="Serene sky with clouds"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 gap-4">
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <Image
                  src={provider.logo || "/placeholder.svg"}
                  alt={`${provider.name} logo`}
                  width={200}
                  height={80}
                  className="mb-4"
                />
                <div>
                  <h1 className="text-4xl font-bold mb-4">{provider.name}</h1>
                  <div className="space-y-1 text-gray-600">
                    <p>{provider.location}</p>
                    <p>Est. {provider.established}</p>
                    <p>{provider.size}</p>
                  </div>
                </div>
              </div>
              <Button className="bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 self-start mt-4 md:mt-0">
                Contact
              </Button>
            </div>

            <div className="prose max-w-none mb-8">
              <p>{provider.description}</p>
              <p className="font-medium">{provider.website}</p>
            </div>

            <div className="space-y-6 mb-12">
              <div>
                <h2 className="font-semibold underline mb-2">Markets Served:</h2>
                <p>{provider.marketsServed.join(", ")}</p>
              </div>
              <div>
                <h2 className="font-semibold underline mb-2">Sectors Served:</h2>
                <p>{provider.sectorsServed.join(", ")}</p>
              </div>
              <div>
                <h2 className="font-semibold underline mb-2">Specializations:</h2>
                <p>{provider.specializations.join(", ")}</p>
              </div>
            </div>

            {provider.projects.some((project) => project.videoUrl) && (
              <section className="mb-16">
                <h2 className="text-2xl font-bold text-center mb-8">Project Showcase</h2>
                <Carousel
                  items={provider.projects
                    .filter((project) => project.videoUrl)
                    .map((project, index) => (
                      <div key={index} className="space-y-4">
                        <p>
                          <strong>Partner:</strong> {project.partner}
                        </p>
                        <p>
                          <strong>Description:</strong> {project.description}
                        </p>
                        {project.videoUrl && (
                          <div className="aspect-video">
                            {getYouTubeVideoId(project.videoUrl) ? (
                              <YouTubeEmbed videoId={getYouTubeVideoId(project.videoUrl)!} />
                            ) : (
                              <p className="text-red-500">Invalid YouTube URL</p>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                />
              </section>
            )}

            {provider.testimonials.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-center mb-8">Testimonials</h2>
                <Carousel
                  items={provider.testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                      <div className="text-6xl text-orange-400 leading-none mb-4">"</div>
                      <blockquote className="text-lg italic mb-4">{testimonial.quote}</blockquote>
                      <cite className="block text-sm not-italic">
                        — {testimonial.author}, {testimonial.title}, {testimonial.company}
                      </cite>
                    </div>
                  ))}
                />
              </section>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}


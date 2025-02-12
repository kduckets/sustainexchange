import Image from "next/image"
import { Button } from "@/components/ui/button"
import { providers } from "@/data/providers"
import { notFound } from "next/navigation"
import { Carousel } from "@/app/components/Carousel"
import { Header } from "@/app/components/Header"

export default function ProviderProfile({ params }: { params: { id: string } }) {
  const provider = providers.find((p) => p.id === params.id)

  if (!provider) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-start mb-8">
            <div className="flex gap-8">
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
            <Button className="bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50">Contact</Button>
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
              <h2 className="font-semibold underline mb-2">Areas of Expertise:</h2>
              <p>{provider.areasOfExpertise.join(", ")}</p>
            </div>
          </div>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Project Showcase</h2>
            <Carousel
              items={provider.projects.map((project, index) => (
                <div key={index} className="space-y-4">
                  <p>
                    <strong>Partner:</strong> {project.partner}
                  </p>
                  <p>
                    <strong>Description:</strong> {project.description}
                  </p>
                  {project.videoUrl && (
                    <div className="aspect-video">
                      <iframe
                        width="100%"
                        height="100%"
                        src={project.videoUrl}
                        title="Project video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}
                </div>
              ))}
            />
          </section>

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
        </div>
      </main>
    </div>
  )
}


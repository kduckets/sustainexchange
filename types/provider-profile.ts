export interface Project {
  partner: string
  description: string
  videoUrl?: string // Add the ? to make it optional
}

export interface Testimonial {
  quote: string
  author: string
  title: string
  company: string
}

export interface ProviderProfile {
  id: string
  name: string
  logo: string
  location: string
  established: string
  size: string
  description: string
  website: string
  marketsServed: string[]
  sectorsServed: string[]
  specializations: string[]
  projects: Project[]
  testimonials: Testimonial[]
  firmSize: "Small" | "Mid-size" | "Large"
  yearsInBusiness: number
}


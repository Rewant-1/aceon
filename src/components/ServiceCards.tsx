import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ServiceHoverCard } from "@/components/ServiceHoverCard"

// Type definition for better maintainability
interface ServiceCardData {
  id: string
  title: string
  description: string
  image: string
  alt: string
  badges: string[]
  featured?: boolean
  hoverDetails: {
    shortDescription: string
    features: string[]
    timeline: string
    team: string
    experience: string
  }
}

// Service data - Easy to maintain and extend
const serviceData: ServiceCardData[] = [
  {
    id: "full-interior",
    title: "Full Interior",
    description: "Aceon Interio offers complete interior solutions tailored to your budget and space. Whether it's a shop, villa, hotel, restaurant, or showroom, we design with precision and style. Experience innovative space management and modern aesthetics, all under one roof. Transform your space beautifully and affordably with Aceon Interio.",
    image: "/interior.png",
    alt: "Modern bedroom with tropical design elements",
    badges: ["Complete Solution", "Custom Design", "Budget Friendly"],
    featured: true,
    hoverDetails: {
      shortDescription: "Complete interior design solutions for residential and commercial spaces",
      features: ["Space Planning", "Material Selection", "Project Management", "Quality Assurance"],
      timeline: "4-8 weeks",
      team: "Design Team + Project Manager",
      experience: "10+ years"
    }
  },
  {
    id: "modular-kitchen",
    title: "Modular Kitchen",
    description: "Aceon Interio offers complete interior solutions tailored to your budget and space. Whether it's a shop, villa, hotel, restaurant, or showroom, we design with precision and style. Experience innovative space management and modern aesthetics, all under one roof. Transform your space beautifully and affordably with Aceon Interio.",
    image: "/kitchen.png",
    alt: "Contemporary modular kitchen design",
    badges: ["Modern Design", "Space Efficient", "Premium Materials"],
    featured: false,
    hoverDetails: {
      shortDescription: "Custom modular kitchen designs with premium materials and modern functionality",
      features: ["Custom Cabinets", "Appliance Integration", "Storage Solutions", "Modern Finishes"],
      timeline: "2-3 weeks",
      team: "Kitchen Specialists",
      experience: "8+ years"
    }
  },
  {
    id: "wardrobe",
    title: "Wardrobe",
    description: "Aceon Interio offers complete interior solutions tailored to your budget and space. Whether it's a shop, villa, hotel, restaurant, or showroom, we design with precision and style. Experience innovative space management and modern aesthetics, all under one roof. Transform your space beautifully and affordably with Aceon Interio.",
    image: "/wardrobe.png",
    alt: "Luxurious walk-in wardrobe with organized storage",
    badges: ["Custom Storage", "Luxury Finish", "Space Saving"],
    featured: false,
    hoverDetails: {
      shortDescription: "Luxurious custom wardrobe solutions with organized storage systems",
      features: ["Walk-in Designs", "Built-in Storage", "Luxury Hardware", "Custom Lighting"],
      timeline: "1-2 weeks",
      team: "Carpentry Team",
      experience: "12+ years"
    }
  }
]

// Individual Service Card Component
const ServiceCard: React.FC<{ service: ServiceCardData }> = ({ service }) => {
  return (
    <Card className="h-full bg-primary border-0 overflow-hidden shadow-xl sm:shadow-2xl group hover:shadow-2xl sm:hover:shadow-3xl transition-all duration-300 rounded-xl sm:rounded-2xl relative">
      {service.featured && (
        <Badge className="absolute top-3 right-3 z-10 bg-accent text-black hover:bg-accent/90">
          Featured
        </Badge>
      )}
      <CardContent className="p-0 h-full flex flex-col">
        {/* Image Container */}
        <div className="relative h-48 sm:h-56 md:h-64 w-full overflow-hidden rounded-t-xl sm:rounded-t-2xl">
          <Image
            src={service.image}
            alt={service.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-70" />
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 flex-grow flex flex-col">
          <div className="flex items-start justify-between mb-2">
            <ServiceHoverCard service={{
              title: service.title,
              description: service.hoverDetails.shortDescription,
              features: service.hoverDetails.features,
              timeline: service.hoverDetails.timeline,
              team: service.hoverDetails.team,
              experience: service.hoverDetails.experience
            }}>
              <h3 className="text-white text-xl sm:text-2xl font-bold cursor-pointer hover:text-accent/80 transition-colors">
                {service.title}
              </h3>
            </ServiceHoverCard>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-1 mb-3">
            {service.badges.map((badge, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-xs bg-white/20 text-white hover:bg-white/30 border-0"
              >
                {badge}
              </Badge>
            ))}
          </div>

          <p className="text-white/80 text-xs sm:text-sm mb-4 sm:mb-6 flex-grow">{service.description}</p>

          {/* Button */}
          <div className="bg-accent/20 rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 self-start">
            <Button variant="ghost" className="text-white text-sm font-medium hover:text-accent p-0 h-auto">
              Click Here
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Main Service Cards Carousel Component
export function ServiceCards() {
  return (
    <section className="py-10 sm:py-16 md:py-20 bg-white">
      <div className="container-custom">
        <div className="mb-6 sm:mb-8 md:mb-12 text-center sm:text-left">
          <h2 className="section-title">Our Services</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
            Comprehensive solutions tailored to your needs
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 sm:-ml-4">
            {serviceData.map((service) => (
              <CarouselItem key={service.id} className="pl-2 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <ServiceCard service={service} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6 sm:mt-8 gap-2">
            <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0 bg-primary hover:bg-primary/90 text-white border-none h-8 w-8 sm:h-10 sm:w-10" />
            <CarouselNext className="relative inset-0 translate-x-0 translate-y-0 bg-primary hover:bg-primary/90 text-white border-none h-8 w-8 sm:h-10 sm:w-10" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}

// Alternative: Static Grid Layout (for desktop-first approach)
export function ServiceCardsGrid() {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-yellow-500">Services</span>
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Hook for handling carousel state (Advanced usage)
export function useServiceCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const totalItems = serviceData.length

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return {
    currentIndex,
    totalItems,
    nextSlide,
    prevSlide,
    goToSlide,
    currentService: serviceData[currentIndex]
  }
}
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


interface ServiceCardData {
  id: string
  title: string
  description: string
  image: string
  alt: string
  badges: string[]
  ctaText?: string
  href?: string
}

// ========== DATA ==========
const serviceData: ServiceCardData[] = [
  {
    id: "full-interior-bedroom",
    title: "Full Interior",
    description: "Aceon Interio offers complete interior solutions tailored to your budget and space. Whether it's a shop, villa, hotel, restaurant, or showroom, we design with precision and style. Experience innovative space management and modern aesthetics, all under one roof. Transform your space beautifully and affordably with Aceon Interio.",
    image: "/interior.png",
    alt: "Modern bedroom with tropical design elements and natural lighting",
    badges: ["Complete Solution", "Custom Design", "Budget Friendly"],
    ctaText: "Click Here",
    href: "/services/full-interior"
  },
  {
    id: "full-interior-kitchen",
    title: "Full Interior",
    description: "Aceon Interio offers complete interior solutions tailored to your budget and space. Whether it's a shop, villa, hotel, restaurant, or showroom, we design with precision and style. Experience innovative space management and modern aesthetics, all under one roof. Transform your space beautifully and affordably with Aceon Interio.",
    image: "/kitchen.png",
    alt: "Contemporary modular kitchen with modern appliances and island",
    badges: ["Modern Design", "Space Efficient", "Premium Materials"],
    ctaText: "Click Here",
    href: "/services/modular-kitchen"
  },
  {
    id: "full-interior-wardrobe",
    title: "Full Interior",
    description: "Aceon Interio offers complete interior solutions tailored to your budget and space. Whether it's a shop, villa, hotel, restaurant, or showroom, we design with precision and style. Experience innovative space management and modern aesthetics, all under one roof. Transform your space beautifully and affordably with Aceon Interio.",
    image: "/wardrobe.png",
    alt: "Luxurious walk-in wardrobe with organized storage solutions",
    badges: ["Custom Storage", "Luxury Finish", "Space Saving"],
    ctaText: "Click Here",
    href: "/services/wardrobe"
  }
]

// ========== COMPONENTS ==========
const ServiceCard: React.FC<{ service: ServiceCardData; priority?: boolean }> = ({
  service,
  priority = false
}) => {
  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl w-full max-w-[640px] h-[640px] border-0 shadow-xl overflow-hidden bg-gradient-to-b from-[#B5A894] to-[#A49A87] rounded-[20px] focus-within:ring-2 focus-within:ring-[#A97C51] focus-within:ring-offset-2">
      <CardContent className="p-0 h-full flex flex-col">
        {/* Image Section with expanded spacing */}
        <div className="relative h-[320px] w-full overflow-hidden rounded-t-[20px] px-4 -pt-3">
          <div className="relative h-full w-full overflow-hidden rounded-xl">
            <Image
              src={service.image}
              alt={service.alt}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex-grow flex flex-col justify-between">
          {/* Title */}
          <div className="text-center mb-6">
            <h3 className="text-[#F7F7F7] text-3xl sm:text-4xl font-normal font-[family-name:var(--font-prata)] leading-tight mb-2 transition-colors duration-300 group-hover:text-[#FFF8E7]">
              {service.title}
            </h3>
          </div>

          {/* Description */}
          <div className="flex-grow flex items-center mb-8">
            <p className="text-[#F3F3F3] text-xl leading-[22px] font-[family-name:var(--font-inter)] text-center font-light tracking-normal line-clamp-6">
              {service.description}
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button
              asChild
              className="bg-[#A97C51] hover:bg-[#8B6A42] text-[#F7F7F7] rounded-lg text-lg font-medium font-[family-name:var(--font-inter)] border-0 h-[48px] px-8 min-w-[140px] transition-all duration-300 hover:shadow-lg hover:scale-105 focus:ring-2 focus:ring-[#A97C51] focus:ring-offset-2 focus:ring-offset-[#A49A87]"
            >
              <a href={service.href} aria-label={`Learn more about ${service.title.toLowerCase()}`}>
                {service.ctaText}
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// ========== MAIN COMPONENT ==========
export function ServiceCards() {
  const serviceCards = React.useMemo(
    () => serviceData.map((service, index) => (
      <CarouselItem
        key={service.id}
        className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
      >
        <div className="flex justify-center">
          <ServiceCard
            service={service}
            priority={index === 0}
          />
        </div>
      </CarouselItem>
    )),
    []
  )

  return (
    <section className="py-16 md:py-20 bg-white" aria-labelledby="services-heading">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2
            id="services-heading"
            className="text-[#A97C51] font-[family-name:var(--font-playfair-display)] text-4xl sm:text-5xl md:text-6xl font-medium mb-4 tracking-tight"
          >
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive solutions tailored to your needs
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "center",
            loop: true,
            skipSnaps: false,
            dragFree: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {serviceCards}
          </CarouselContent>

         
        </Carousel>
      </div>
    </section>
  )
}
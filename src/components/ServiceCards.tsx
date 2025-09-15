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
import { cn } from "@/lib/utils"

// Enhanced type definition with better accessibility and SEO support
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

// Updated service data to match the design
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
    title: "Full Interior", // Matches design - all cards show "Full Interior"
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

// Enhanced Service Card Component with better accessibility and performance
const ServiceCard: React.FC<{ service: ServiceCardData; priority?: boolean }> = ({ 
  service, 
  priority = false 
}) => {
  return (
    <Card 
      className={cn(
        "group cursor-pointer transform transition-all duration-300 ease-in-out",
        "hover:scale-[1.02] hover:shadow-2xl",
        "w-full max-w-[640px] h-[640px]",
        "border-0 shadow-xl overflow-hidden",
        "bg-gradient-to-b from-[#B5A894] to-[#A49A87]",
        "rounded-[20px]",
        // Focus states for accessibility
        "focus-within:ring-2 focus-within:ring-[#A97C51] focus-within:ring-offset-2"
      )}
      role="article"
      aria-labelledby={`service-title-${service.id}`}
    >
      <CardContent className="p-0 h-full flex flex-col">
        {/* Image Container with improved loading and overlay */}
        <div className="relative h-[280px] w-full overflow-hidden rounded-t-[20px]">
          <Image
            src={service.image}
            alt={service.alt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={cn(
              "object-cover transition-transform duration-700 ease-out",
              "group-hover:scale-110"
            )}
          />
          
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>

        {/* Content Section with improved spacing and typography */}
        <div className="p-6 flex-grow flex flex-col justify-between">
          {/* Title Section */}
          <div className="text-center mb-6">
            <h3 
              id={`service-title-${service.id}`}
              className={cn(
                "text-[#F7F7F7] text-3xl sm:text-4xl font-normal",
                "font-[family-name:var(--font-prata)]",
                "leading-tight mb-2",
                "transition-colors duration-300",
                "group-hover:text-[#FFF8E7]"
              )}
            >
              {service.title}
            </h3>
          </div>

          {/* Description with improved readability */}
          <div className="flex-grow flex items-center mb-8">
            <p className={cn(
              "text-[#F3F3F3] text-base leading-relaxed",
              "font-[family-name:var(--font-geist-sans)]",
              "text-center font-light",
              "line-clamp-6" // Ensures consistent height
            )}>
              {service.description}
            </p>
          </div>

          {/* CTA Button with enhanced styling */}
          <div className="flex justify-center">
            <Button 
              asChild
              className={cn(
                "bg-[#A97C51] hover:bg-[#8B6A42] active:bg-[#7A5D3A]",
                "text-[#F7F7F7] rounded-lg text-lg font-medium",
                "font-[family-name:var(--font-inter)]",
                "border-0 h-[48px] px-8 min-w-[140px]",
                "transition-all duration-300 ease-in-out",
                "hover:shadow-lg hover:scale-105",
                "focus:ring-2 focus:ring-[#A97C51] focus:ring-offset-2",
                "focus:ring-offset-[#A49A87]"
              )}
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

// Main Service Cards Component with performance optimizations
export function ServiceCards() {
  // Memoize the service cards to prevent unnecessary re-renders
  const serviceCards = React.useMemo(
    () => serviceData.map((service, index) => (
      <CarouselItem 
        key={service.id} 
        className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
      >
        <div className="flex justify-center">
          <ServiceCard 
            service={service} 
            priority={index === 0} // First image gets priority loading
          />
        </div>
      </CarouselItem>
    )),
    []
  )

  return (
    <section 
      className="py-16 md:py-20 bg-white"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section with improved typography hierarchy */}
        <div className="mb-12 text-center">
          <h2 
            id="services-heading"
            className={cn(
              "text-[#A97C51] font-[family-name:var(--font-playfair-display)]",
              "text-4xl sm:text-5xl md:text-6xl font-medium mb-4",
              "tracking-tight"
            )}
          >
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive solutions tailored to your needs
          </p>
        </div>

        {/* Carousel with enhanced controls */}
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
          
          {/* Enhanced Navigation Controls */}
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious 
              className={cn(
                "relative inset-0 translate-x-0 translate-y-0",
                "bg-[#A97C51] hover:bg-[#8B6A42]",
                "text-white border-none",
                "h-12 w-12 rounded-full",
                "transition-all duration-300",
                "hover:shadow-lg hover:scale-110",
                "focus:ring-2 focus:ring-[#A97C51] focus:ring-offset-2"
              )}
              aria-label="Previous service"
            />
            <CarouselNext 
              className={cn(
                "relative inset-0 translate-x-0 translate-y-0",
                "bg-[#A97C51] hover:bg-[#8B6A42]",
                "text-white border-none",
                "h-12 w-12 rounded-full",
                "transition-all duration-300",
                "hover:shadow-lg hover:scale-110",
                "focus:ring-2 focus:ring-[#A97C51] focus:ring-offset-2"
              )}
              aria-label="Next service"
            />
          </div>
        </Carousel>
      </div>
    </section>
  )
}

// Alternative: Responsive Grid Layout (recommended for better performance on larger screens)
export function ServiceCardsGrid() {
  const serviceCards = React.useMemo(
    () => serviceData.map((service, index) => (
      <ServiceCard 
        key={service.id} 
        service={service} 
        priority={index === 0}
      />
    )),
    []
  )

  return (
    <section 
      className="py-16 md:py-20 bg-white"
      aria-labelledby="services-grid-heading"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 
            id="services-grid-heading"
            className={cn(
              "text-[#A97C51] font-[family-name:var(--font-playfair-display)]",
              "text-4xl sm:text-5xl md:text-6xl font-medium mb-4"
            )}
          >
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your needs
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center max-w-[1440px] mx-auto">
          {serviceCards}
        </div>
      </div>
    </section>
  )
}

// Enhanced hook with additional functionality for advanced carousel control
export function useServiceCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isAutoPlay, setIsAutoPlay] = React.useState(false)
  const totalItems = serviceData.length

  // Auto-play functionality
  React.useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalItems)
    }, 4000) // 4 seconds

    return () => clearInterval(interval)
  }, [isAutoPlay, totalItems])

  const nextSlide = React.useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalItems)
  }, [totalItems])

  const prevSlide = React.useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems)
  }, [totalItems])

  const goToSlide = React.useCallback((index: number) => {
    if (index >= 0 && index < totalItems) {
      setCurrentIndex(index)
    }
  }, [totalItems])

  const toggleAutoPlay = React.useCallback(() => {
    setIsAutoPlay(prev => !prev)
  }, [])

  return {
    currentIndex,
    totalItems,
    nextSlide,
    prevSlide,
    goToSlide,
    currentService: serviceData[currentIndex],
    isAutoPlay,
    toggleAutoPlay
  }
}
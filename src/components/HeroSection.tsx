import Image from 'next/image'
import { Instagram, Facebook, Twitter } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

const ServiceCard = () => {
  return (
    <div className="bg-primary/10 backdrop-blur-sm rounded-lg px-4 sm:px-6 py-4 text-white flex flex-col sm:flex-row items-start sm:space-x-4 space-y-4 sm:space-y-0 mt-8 md:mt-0">
      <Image src="/card.png" alt="Aceon Logo" width={60} height={60} className="flex-shrink-0" />
      <div className="flex flex-col space-y-2">
        <h3 className="text-xl font-bold">Furniture Design</h3>
        <p className="text-white/80 text-sm sm:text-base">Custom furniture solutions for your home or office — stylish, functional, and within your budget. Serving Varanasi with premium designs, on time.</p>
        <p className="text-accent text-lg font-semibold">Style Within Your ₹ Budget</p>
      </div>
    </div>
  )
}

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <Image
            src="/bg.png" 
            alt="Modern living room interior"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Social Icons - Right Side */}
      <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 flex flex-col space-y-3 sm:space-y-4 z-40">
        <a href="#" title="Instagram" className="w-10 h-10 sm:w-12 sm:h-12 bg-accent rounded-full flex items-center justify-center hover:bg-accent/90 transition-colors">
          <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
        </a>
        <a href="#" title="Facebook" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
          <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </a>
        <a href="#" title="Twitter" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
          <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </a>
      </div>

      {/* Main Content */}
      <div className="relative z-30 container-custom pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center w-full">
          {/* Left Content */}
          <div className="text-white space-y-4 sm:space-y-6 order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              creating comfort <span className="text-accent">with style</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-white/90 max-w-xl">
              Design smart, live smart, and always choose Aceon for interiors
            </p>
            <p className="text-sm sm:text-base text-white/70 max-w-lg">
              From cozy corners to luxury living, explore designs that match your taste.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Button className="btn-primary text-sm sm:text-base">
                Get Started
              </Button>
              <Button variant="outline" className="btn-secondary text-sm sm:text-base">
                Contact Us
              </Button>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="relative order-1 lg:order-2">
            <ServiceCard />
          </div>
        </div>
      </div>

      {/* Resolution Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        
      </div>
    </section>
  )
}

export default HeroSection
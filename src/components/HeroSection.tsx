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
        <a href="#" title="Instagram" className="w-9 h-9 sm:w-10 sm:h-10 bg-[#A97C51]/54 rounded-full flex items-center justify-center hover:bg-[#A97C51]/70 transition-colors">
          <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </a>
        <a href="#" title="Facebook" className="w-9 h-9 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
          <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </a>
        <a href="#" title="Twitter" className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
          <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </a>
      </div>

      {/* Main Content */}
      <div className="relative z-30 container-custom pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center w-full">
          {/* Left Content */}
          <div className="text-white space-y-4 sm:space-y-6 order-2 lg:order-1">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[90px] font-[family-name:var(--font-playfair-display)]">
              creating comfort <span className="text-accent">with style</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-2xl font-normal text-white font-[family-name:var(--font-prata)] max-w-xl leading-normal">
              Design smart, live smart, and always choose Aceon for interiors
            </p>
            <p className="text-sm sm:text-base text-white/70 max-w-lg font-[family-name:var(--font-prata)]">
              From cozy corners to luxury living, explore designs that match your taste.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Button className="bg-[#A97C51] hover:bg-[#A97C51]/90 text-white px-6 py-3 rounded-lg text-lg sm:text-xl font-medium font-[family-name:var(--font-inter)] border-0 h-[52px] w-[156px]">
                Get Started
              </Button>
              <Button className="bg-transparent hover:bg-white/10 text-[#DCDCDC] px-6 py-3 rounded-lg text-lg sm:text-xl font-medium font-[family-name:var(--font-inter)] border border-[#DCDCDC] h-[52px] w-[156px]">
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
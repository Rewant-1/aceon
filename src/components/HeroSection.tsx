"use client";
import Image from 'next/image'
import { Instagram, Facebook, Twitter } from 'lucide-react'

// ========== TYPES & INTERFACES ==========
interface ButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

// ========== COMPONENTS ==========

// Button Component
const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg px-6 py-3 font-medium transition-all duration-300 hover:scale-105 ${className}`}
    >
      {children}
    </button>
  )
}

// Service Card Component
const ServiceCard: React.FC = () => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white border border-white/20 shadow-2xl">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <Image
            src="/card.png"
            alt="Furniture Design"
            width={142}
            height={163}
            className="object-contain rounded-2xl"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2 font-[family-name:var(--font-playfair-display)]">
            Furniture Design
          </h3>
          <p className="text-white/90 text-sm leading-relaxed mb-3">
            &quot;Custom furniture solutions for your home or office — stylish, functional, and within your budget. Serving Varanasi with premium designs, on time.&quot;
          </p>
          <p className="text-[#A97C51] text-lg font-semibold font-[family-name:var(--font-inter)]">
            Style Within Your ₹ Budget
          </p>
        </div>
      </div>
    </div>
  )
}

// Hero Section Component
const HeroSectionComponent: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/bg.png"
          alt="Modern living room interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Social Icons */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-40">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-2xl">
          <div className="flex flex-col space-y-4">
            <a
              href="#"
              title="Instagram"
              className="w-12 h-12 bg-[#A97C51] rounded-full flex items-center justify-center hover:bg-[#A97C51]/80 transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              title="Facebook"
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <Facebook className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              title="Twitter"
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <Twitter className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-30 container mx-auto px-4 py-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center w-full max-w-7xl mx-auto">
          {/* Left Text Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-[family-name:var(--font-playfair-display)]">
                creating comfort{' '}
                <span className="text-[#fff] block">with style</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-light text-white/90 max-w-xl leading-relaxed font-[family-name:var(--font-prata)]">
                Design smart, live smart, and always choose Aceon for interiors
              </p>
            </div>
           
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Button className="bg-[#A97C51] hover:bg-[#A97C51]/90 text-white border-0 h-[52px] w-[156px] text-lg sm:text-xl font-inter">
                Get Started
              </Button>
              <Button className="bg-transparent hover:bg-white/10 text-[#DCDCDC] border border-[#DCDCDC] h-[52px] w-[156px] text-lg sm:text-xl font-inter">
                Contact Us
              </Button>
            </div>
          </div>

          {/* Right Card Content */}
          <div className="absolute bottom-8 right-8 z-30">
            <div className="w-140 max-w-screen-md">
              <ServiceCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ========== MAIN COMPONENT ==========
export default function HeroSection() {
  return <HeroSectionComponent />
}

"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function InspirationSection() {
  return (
    <section className="py-16 bg-white">
      <div className="px-8">
        <div className="mb-12 text-center">
          <h2 className="text-[#A97C51] font-[family-name:var(--font-playfair-display)] text-4xl sm:text-5xl md:text-6xl font-medium mb-4">
            Inspiration to Elevate Your Living
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            From cozy corners to luxury living, explore designs that match your taste.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[720px]">
          {/* False Ceiling - Top Left */}
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
            <Image
              src="/carousel1.png"
              alt="False Ceiling Design"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="absolute bottom-4 left-4">
              <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                False Ceiling
              </span>
            </div>
          </div>

          {/* Master Bedroom - Top Center (highlighted with blue border) */}
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer ">
            <Image
              src="/carousel2.jpg"
              alt="Master Bedroom Design"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="absolute bottom-4 left-4">
              <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                Master Bedroom
              </span>
            </div>
          </div>

          {/* Kitchen - Top Right */}
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
            <Image
              src="/carousel3.jpg"
              alt="Kitchen Design"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="absolute bottom-4 left-4">
              <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                Kitchen
              </span>
            </div>
          </div>

          {/* Wardrobe - Bottom Left */}
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
            <Image
              src="/carousel4.jpg"
              alt="Wardrobe Design"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="absolute bottom-4 left-4">
              <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                Wardrobe
              </span>
            </div>
          </div>

          {/* Bathroom - Bottom Center */}
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
            <Image
              src="/carousel5.png"
              alt="Bathroom Design"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="absolute bottom-4 left-4">
              <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                Bathroom
              </span>
            </div>
          </div>

          {/* Pooja Room - Bottom Right */}
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
            <Image
              src="/carousel6.png"
              alt="Pooja Room Design"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="absolute bottom-4 left-4">
              <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                Pooja room
              </span>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Button className="bg-[#A97C51] hover:bg-[#A97C51]/90 text-white px-8 py-3 rounded-lg text-lg font-normal h-[52px] w-[200px]">
            View All
          </Button>
        </div>
      </div>
    </section>
  );
}
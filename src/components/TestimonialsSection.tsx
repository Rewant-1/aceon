"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const testimonialData = [
  {
    id: "rohit-shweta",
    name: "Rohit & Shweta",
    location: "Mumbai",
    image: "/customer1.jpg",
    review: "The entire team was amazing. They understood our vision and made it even better. Project delivered on time!"
  },
  {
    id: "swati-gaurav",
    name: "Swati & Gaurav", 
    location: "Bangalore",
    image: "/customer2.jpg",
    review: "Such a smooth experience! The designers brought life to our ideas, and the project managers handled everything perfectly."
  },
  {
    id: "meera-rohan",
    name: "Meera & Rohan",
    location: "Pune", 
    image: "/customer3.jpg",
    review: "The designers really listened to what I wanted. The end result was beyond my expectations. So happy with my new interiors!"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className=" px-12">
        <div className="mb-12 text-center">
          <h2 className="text-[#A97C51] font-[family-name:var(--font-playfair-display)] text-4xl sm:text-5xl md:text-6xl font-medium mb-4">
            Why Homeowners Love Us
          </h2>
          <p className="text-gray-600 text-lg">
            Because every home we design tells a unique story.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mx-auto">
          {testimonialData.map((testimonial) => (
            <div key={testimonial.id} className="bg-[#A49A87] rounded-2xl overflow-hidden w-full h-[350px]">
              {/* Image Container - At top with padding */}
              <div className="relative h-[220px] w-full p-4">
                <div className="relative h-full w-full rounded-xl overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name} testimonial`}
                    fill
                    className="object-cover"
                  />
                  {/* Gradient overlay with names */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="absolute bottom-4 left-0 right-0 text-center">
                      <h3 className="text-white text-xl font-semibold mb-1">
                        {testimonial.name}
                      </h3>
                      <p className="text-white text-sm">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Review Content - At bottom */}
              <div className="p-6 flex items-center justify-center h-[110px]">
                <p className="text-[#E7E4E4] text-center text-base leading-relaxed">
                  {testimonial.review}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-12 text-center">
          <Button className="bg-[#A97C51] hover:bg-[#A97C51]/90 text-white px-8 py-3 rounded-lg text-lg h-[52px] w-[200px]">
            View More
          </Button>
        </div>
      </div>
    </section>
  );
}
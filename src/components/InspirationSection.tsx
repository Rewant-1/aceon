import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

interface InspirationItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

const inspirationData: InspirationItem[] = [
  {
    id: 1,
    image: '/carousel4.jpg',
    title: 'Modern Living Room',
    description: 'Clean lines and minimalist approach for urban apartments'
  },
  {
    id: 2,
    image: '/carousel1.png',
    title: 'Cozy Bedroom',
    description: 'Warm tones and soft textures for ultimate relaxation'
  },
  {
    id: 3,
    image: '/carousel2.jpg',
    title: 'Elegant Kitchen',
    description: 'Functional design with premium materials and finishes'
  },
  {
    id: 4,
    image: '/carousel3.jpg',
    title: 'Outdoor Space',
    description: 'Bringing interior comfort to your exterior living areas'
  },
];

export function InspirationSection() {
  return (
    <section className="py-10 sm:py-16 md:py-20 bg-background">
      <div className="container-custom px-4 sm:px-6">
        <div className="mb-6 sm:mb-8 md:mb-12 text-center sm:text-left">
          <h2 className="section-title">Get Inspired</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
            Browse our collection of stunning interior designs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {inspirationData.map((item) => (
            <div key={item.id} className="group overflow-hidden rounded-xl sm:rounded-2xl bg-primary/5 hover:bg-primary/10 transition-colors duration-300">
              <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70" />
              </div>
              
              <div className="p-3 sm:p-4 md:p-6">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">{item.description}</p>
                
                <div className="mt-2 sm:mt-3 md:mt-4 bg-accent/20 rounded-md sm:rounded-lg px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 self-start inline-block">
                  <button className="text-accent text-xs sm:text-sm font-medium hover:text-accent/80 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 sm:mt-8 md:mt-12 text-center">
          <Button className="btn-primary">
            View All Inspirations
          </Button>
        </div>
      </div>
    </section>
  );
}
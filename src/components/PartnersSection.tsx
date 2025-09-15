import React from 'react';
import Image from 'next/image';

interface Partner {
  id: number;
  name: string;
  logo: string;
}

const partnerData: Partner[] = [
  {
    id: 1,
    name: 'Partner 1',
    logo: '/images/partner1.svg'
  },
  {
    id: 2,
    name: 'Partner 2',
    logo: '/images/partner2.svg'
  },
  {
    id: 3,
    name: 'Partner 3',
    logo: '/images/partner3.svg'
  },
  {
    id: 4,
    name: 'Partner 4',
    logo: '/images/partner4.svg'
  },
  {
    id: 5,
    name: 'Partner 5',
    logo: '/images/partner5.svg'
  },
];

export function PartnersSection() {
  return (
    <section className="py-8 sm:py-10 md:py-16 bg-white">
      <div className="container-custom px-4 sm:px-6">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-[#A97C51] font-[family-name:var(--font-playfair-display)] text-4xl sm:text-5xl md:text-6xl font-medium mb-4">Our trusted partners</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            We collaborate with leading brands to bring you the best in interior design
          </p>
        </div>
        
        <div className="flex justify-center items-center mb-6">
          <div className="w-full max-w-3xl">
            <Image
              src="/comapnies.png"
              alt="Our partners"
              width={1200}
              height={300}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
        
        
      </div>
    </section>
  );
}
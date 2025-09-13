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
          <h2 className="section-title">Our Trusted Partners</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            We collaborate with leading brands to bring you the best in interior design
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-10 lg:gap-16">
          {partnerData.map((partner) => (
            <div 
              key={partner.id} 
              className="w-20 h-14 sm:w-24 sm:h-16 md:w-32 md:h-20 lg:w-40 lg:h-24 relative grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
        
        <div className="mt-6 sm:mt-8 md:mt-12 text-center">
          <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 md:mb-6">
            Interested in becoming a partner? Contact us today!
          </p>
          <button className="btn-secondary">
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  );
}
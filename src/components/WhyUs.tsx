import React from 'react';
import Image from 'next/image';

export function WhyUs() {
  return (
    <section className="py-8 sm:py-10 md:py-16 bg-white">
      <div className="container-custom px-4 sm:px-6">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-[#A97C51] font-[family-name:var(--font-playfair-display)] text-4xl sm:text-5xl md:text-6xl font-medium mb-4">Why People choose Us</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
           Trusted by families and businesses for quality, style, and value.
          </p>
        </div>
        
        <div className=" -mb-9">
          <div className="w-full ">
            <Image
              src="/whychooseus.png"
              alt="Our partners"
              width={1920}
              height={1080}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
        
        
      </div>
    </section>
  );
}
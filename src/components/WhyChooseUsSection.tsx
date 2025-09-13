import React from 'react';
import { CheckCircle } from 'lucide-react';

interface FeatureItem {
  id: number;
  title: string;
  description: string;
}

const featureData: FeatureItem[] = [
  {
    id: 1,
    title: 'Expert Designers',
    description: 'Our team consists of certified interior designers with years of experience in the industry.'
  },
  {
    id: 2,
    title: 'Affordable Pricing',
    description: 'We offer competitive pricing without compromising on quality or design excellence.'
  },
  {
    id: 3,
    title: 'Timely Delivery',
    description: 'We value your time and ensure that all projects are completed within the agreed timeframe.'
  },
  {
    id: 4,
    title: 'Quality Materials',
    description: 'We source only the highest quality materials to ensure durability and aesthetic appeal.'
  },
  {
    id: 5,
    title: 'Customer Satisfaction',
    description: 'Your satisfaction is our priority, and we work closely with you throughout the design process.'
  },
  {
    id: 6,
    title: 'After-Service Support',
    description: 'We provide ongoing support and maintenance services after project completion.'
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-10 sm:py-16 md:py-20 bg-primary/5">
      <div className="container-custom px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          {/* Left Content - Image */}
          <div className="relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent z-10" />
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ backgroundImage: "url('/images/why-choose-us.jpg')" }}
            />
          </div>
          
          {/* Right Content - Features */}
          <div className="px-2 sm:px-0">
            <h2 className="section-title mb-4 sm:mb-6 text-center lg:text-left">Why Choose Us</h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 text-center lg:text-left">
              We pride ourselves on delivering exceptional interior design services that transform your spaces into beautiful, functional environments that reflect your personal style and meet your specific needs.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {featureData.map((feature) => (
                <div key={feature.id} className="flex items-start space-x-2 sm:space-x-3">
                  <CheckCircle className="text-accent flex-shrink-0 mt-0.5 sm:mt-1" size={16} />
                  <div>
                    <h3 className="font-bold text-gray-800 text-sm sm:text-base mb-1">{feature.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 sm:mt-8 text-center lg:text-left">
              <button className="btn-primary text-sm sm:text-base">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-10 sm:pt-12 md:pt-16 pb-6 sm:pb-8">
      <div className="container-custom px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Interior Design Co.</h3>
            <p className="text-sm sm:text-base text-white/80 mb-4 sm:mb-6">
              Creating beautiful spaces that inspire and delight. Your vision, our expertise.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <Link href="#" className="bg-white/10 p-1.5 sm:p-2 rounded-full hover:bg-white/20 transition-colors">
                <Facebook size={16} className="sm:w-[18px] sm:h-[18px]" />
              </Link>
              <Link href="#" className="bg-white/10 p-1.5 sm:p-2 rounded-full hover:bg-white/20 transition-colors">
                <Twitter size={16} className="sm:w-[18px] sm:h-[18px]" />
              </Link>
              <Link href="#" className="bg-white/10 p-1.5 sm:p-2 rounded-full hover:bg-white/20 transition-colors">
                <Instagram size={16} className="sm:w-[18px] sm:h-[18px]" />
              </Link>
              <Link href="#" className="bg-white/10 p-1.5 sm:p-2 rounded-full hover:bg-white/20 transition-colors">
                <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
              </Link>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="#" className="text-sm sm:text-base text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm sm:text-base text-white/80 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm sm:text-base text-white/80 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm sm:text-base text-white/80 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm sm:text-base text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Our Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="#" className="text-sm sm:text-base text-white/80 hover:text-white transition-colors">
                  Residential Design
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm sm:text-base text-white/80 hover:text-white transition-colors">
                  Commercial Design
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm sm:text-base text-white/80 hover:text-white transition-colors">
                  Space Planning
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm sm:text-base text-white/80 hover:text-white transition-colors">
                  Furniture Selection
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm sm:text-base text-white/80 hover:text-white transition-colors">
                  Color Consultation
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Contact Us</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start space-x-2 sm:space-x-3">
                <MapPin size={16} className="flex-shrink-0 mt-1 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base text-white/80">123 Design Street, Creative City, 12345</span>
              </li>
              <li className="flex items-center space-x-2 sm:space-x-3">
                <Phone size={16} className="sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base text-white/80">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 sm:space-x-3">
                <Mail size={16} className="sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base text-white/80">info@interiordesign.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-white/60 text-xs sm:text-sm mb-4 sm:mb-0">
              © {new Date().getFullYear()} Interior Design Co. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6">
              <Link href="#" className="text-white/60 text-xs sm:text-sm hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/60 text-xs sm:text-sm hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-white/60 text-xs sm:text-sm hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/ContactDialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 sm:py-4">
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Aceon Logo" width={40} height={40} className="sm:w-[50px] sm:h-[50px]" />
          <div>
            <h1 className="text-white font-bold text-base sm:text-lg">ACEON</h1>
            <p className="text-white/80 text-[10px] sm:text-xs">INTERIORS</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link href="/about" className="text-accent font-medium text-sm lg:text-base hover:text-accent/80 transition-colors">
            About
          </Link>
          <Link href="/services" className="text-white font-medium text-sm lg:text-base hover:text-accent transition-colors">
            Services
          </Link>
          <ContactDialog />
        </nav>

        {/* Desktop CTA Button */}
        <Button variant="outline" className="hidden md:block bg-transparent border-white text-white hover:bg-white hover:text-black">
          Login/Register
        </Button>

        {/* Mobile Menu Sheet */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10">
              <Menu size={24} />
              <span className="sr-only">Toggle mobile menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-primary border-l-0">
            <SheetHeader className="text-left mb-6">
              <SheetTitle className="text-white text-xl">Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col space-y-4">
              <Link
                href="/about"
                className="text-accent font-medium text-lg hover:text-accent/80 transition-colors py-2 border-b border-white/10"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-white font-medium text-lg hover:text-accent transition-colors py-2 border-b border-white/10"
              >
                Services
              </Link>
              <div className="py-2">
                <ContactDialog />
              </div>
              <Button variant="outline" className="bg-transparent border border-white text-white hover:bg-white hover:text-black mt-4 w-full">
                Login/Register
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header
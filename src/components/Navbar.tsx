
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0">
              <span className="text-2xl font-bold text-saas-600">SaaS<span className="text-saas-800">Hub</span></span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#features" className="text-gray-700 hover:text-saas-600 px-3 py-2 rounded-md text-sm font-medium">Features</a>
              <a href="#testimonials" className="text-gray-700 hover:text-saas-600 px-3 py-2 rounded-md text-sm font-medium">Testimonials</a>
              <a href="#pricing" className="text-gray-700 hover:text-saas-600 px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
              <a href="#faq" className="text-gray-700 hover:text-saas-600 px-3 py-2 rounded-md text-sm font-medium">FAQ</a>
            </div>
          </div>
          <div className="hidden md:block">
            <Button variant="outline" className="mr-3">Sign In</Button>
            <Button className="bg-saas-600 hover:bg-saas-700">Get Started</Button>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a href="#features" className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">Features</a>
            <a href="#testimonials" className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">Testimonials</a>
            <a href="#pricing" className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">Pricing</a>
            <a href="#faq" className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">FAQ</a>
            <div className="mt-4 flex flex-col space-y-2">
              <Button variant="outline" className="w-full">Sign In</Button>
              <Button className="w-full bg-saas-600 hover:bg-saas-700">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

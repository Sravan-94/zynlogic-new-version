import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { 
  Menu as NavMenu, 
  MenuItem, 
  ProductItem, 
  HoveredLink 
} from "@/components/ui/navbar-menu";
import { Logo } from "@/components/logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="py-4 px-6 md:px-10 lg:px-16 fixed w-full top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="z-50">
            <Logo />
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden z-50">
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="relative z-50">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <NavMenu setActive={setActive}>
                <Link to="/" className="nav-link text-black px-3 py-2">
                  Home
                </Link>
                
                <MenuItem setActive={setActive} active={active} item="Services">
                  <div className="grid grid-cols-2 gap-4 p-4 w-[500px]">
                    <div className="flex flex-col space-y-2">
                      <HoveredLink to="/services#web">Web Design & Development</HoveredLink>
                      <HoveredLink to="/services#mobile">Mobile App Development</HoveredLink>
                      <HoveredLink to="/services#brand">Brand Identity & UI Systems</HoveredLink>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <HoveredLink to="/services#ux">UX Strategy</HoveredLink>
                      <HoveredLink to="/services#creative">Creative Tech</HoveredLink>
                      <HoveredLink to="/services#ai">AI Integrations</HoveredLink>
                    </div>
                    <div className="col-span-2 pt-2 mt-2 border-t">
                      <Link 
                        to="/services"
                        className="flex items-center justify-center w-full py-2 text-sm font-medium text-accent hover:underline"
                      >
                        View All Services
                        <MoveRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </MenuItem>
                
                <MenuItem setActive={setActive} active={active} item="Industries">
                  <div className="p-4 w-[400px]">
                    <div className="grid grid-cols-3 gap-3">
                      <HoveredLink to="/categories#ecommerce">E-commerce</HoveredLink>
                      <HoveredLink to="/categories#edtech">EdTech</HoveredLink>
                      <HoveredLink to="/categories#health">Health</HoveredLink>
                      <HoveredLink to="/categories#realestate">Real Estate</HoveredLink>
                      <HoveredLink to="/categories#food">Food Delivery</HoveredLink>
                      <HoveredLink to="/categories#travel">Travel</HoveredLink>
                      <HoveredLink to="/categories#interior">Interior</HoveredLink>
                      <HoveredLink to="/categories#crm">CRM</HoveredLink>
                      <HoveredLink to="/categories#jobs">Jobs</HoveredLink>
                    </div>
                    <div className="pt-4 mt-4 border-t">
                      <Link 
                        to="/categories"
                        className="flex items-center justify-center w-full py-2 text-sm font-medium text-accent hover:underline"
                      >
                        View All Industries
                        <MoveRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </MenuItem>
                
                <Link to="/our-work" className="nav-link text-black px-3 py-2">
                  Our Work
                </Link>
                
                <Link to="/about" className="nav-link text-black px-3 py-2">
                  About
                </Link>
                
                <Link to="/contact" className="nav-link text-black px-3 py-2">
                  Contact
                </Link>
              </NavMenu>
            </div>

            <Button asChild className="bg-accent text-white hover:bg-accent/90">
           <a 
            href="https://calendly.com/jaswanth-zynlogic/30min?share_attribution=expiring_link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Book a Call
          </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Separate from the nav element */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 md:hidden overflow-y-auto pt-20">
          <div className="flex flex-col p-6 space-y-6">
            <Link
              to="/"
              className="text-xl font-medium text-black"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            
            <div className="border rounded-lg p-4 bg-gray-50/50">
              <h3 className="text-xl font-medium text-primary mb-3">Services</h3>
              <div className="grid grid-cols-1 gap-2">
                <Link
                  to="/services#web"
                  className="text-sm text-gray-600 hover:text-accent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Web Design & Development
                </Link>
                <Link
                  to="/services#mobile"
                  className="text-sm text-gray-600 hover:text-accent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Mobile App Development
                </Link>
                <Link
                  to="/services#brand"
                  className="text-sm text-gray-600 hover:text-accent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Brand Identity & UI Systems
                </Link>
                <Link
                  to="/services#ux"
                  className="text-sm text-gray-600 hover:text-accent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  UX Strategy
                </Link>
                <Link
                  to="/services#creative"
                  className="text-sm text-gray-600 hover:text-accent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Creative Tech
                </Link>
                <Link
                  to="/services#ai"
                  className="text-sm text-gray-600 hover:text-accent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  AI Integrations
                </Link>
              </div>
            </div>
            
            <div className="border rounded-lg p-4 bg-gray-50/50">
              <h3 className="text-xl font-medium text-primary mb-3">Industries</h3>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  to="/categories#ecommerce"
                  className="text-sm text-gray-600 hover:text-accent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  E-commerce
                </Link>
                <Link
                  to="/categories#edtech"
                  className="text-sm text-gray-600 hover:text-accent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  EdTech
                </Link>
                <Link
                  to="/categories#health"
                  className="text-sm text-gray-600 hover:text-accent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Health
                </Link>
                <Link
                  to="/categories#realestate"
                  className="text-sm text-gray-600 hover:text-accent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Real Estate
                </Link>
                <Link
                  to="/categories#food"
                  className="text-sm text-gray-600 hover:text-accent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Food Delivery
                </Link>
                <Link
                  to="/categories#travel"
                  className="text-sm text-gray-600 hover:text-accent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Travel
                </Link>
              </div>
            </div>
            
            <Link
              to="/our-work"
              className="text-xl font-medium text-black"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Work
            </Link>
            
            <Link
              to="/about"
              className="text-xl font-medium text-black"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            
            <Link
              to="/contact"
              className="text-xl font-medium text-black"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            <Button asChild className="w-full bg-accent text-white hover:bg-accent/90 py-3 text-lg">
                <a 
                  href="https://calendly.com/jaswanth-zynlogic/30min?share_attribution=expiring_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)} // Close menu on click
                >
                  Book a Call
                </a>
              </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

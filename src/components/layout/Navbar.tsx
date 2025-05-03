
import React, { useState } from "react";
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

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-6 px-6 md:px-10 lg:px-16 fixed w-full top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-semibold tracking-tight">
          Lander<span className="text-accent">.</span>Studio
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="relative">
            <NavMenu setActive={setActive}>
              <Link to="/" className="nav-link text-primary px-3 py-2">
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
              
              <MenuItem setActive={setActive} active={active} item="Categories">
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
                      View All Categories
                      <MoveRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </MenuItem>
              
              <Link to="/showcase" className="nav-link text-primary px-3 py-2">
                Showcase
              </Link>
              
              <Link to="/about" className="nav-link text-primary px-3 py-2">
                About
              </Link>
              
              <Link to="/contact" className="nav-link text-primary px-3 py-2">
                Contact
              </Link>
            </NavMenu>
          </div>

          <Button className="bg-accent text-white hover:bg-accent/90">Book a Call</Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[73px] bg-white z-40 animate-fade-in overflow-auto">
          <div className="flex flex-col p-6 space-y-6">
            <Link
              to="/"
              className="text-xl font-medium text-primary"
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
              <h3 className="text-xl font-medium text-primary mb-3">Categories</h3>
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
                <Link
                  to="/categories#interior"
                  className="text-sm text-gray-600 hover:text-accent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Interior
                </Link>
                <Link
                  to="/categories#crm"
                  className="text-sm text-gray-600 hover:text-accent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CRM
                </Link>
                <Link
                  to="/categories#jobs"
                  className="text-sm text-gray-600 hover:text-accent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Jobs
                </Link>
              </div>
            </div>
            
            <Link
              to="/showcase"
              className="text-xl font-medium text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Showcase
            </Link>
            
            <Link
              to="/about"
              className="text-xl font-medium text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            
            <Link
              to="/contact"
              className="text-xl font-medium text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            <Button className="bg-accent text-white hover:bg-accent/90 w-full mt-4">
              Book a Call
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

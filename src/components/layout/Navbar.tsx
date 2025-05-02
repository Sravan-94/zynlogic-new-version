
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "Services", path: "/services" },
  { title: "Categories", path: "/categories" },
  { title: "Showcase", path: "/showcase" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-6 px-6 md:px-10 lg:px-16 fixed w-full top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-semibold tracking-tight">
          Lander<span className="text-primary">.</span>Studio
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-10 items-center">
          {navLinks.map((link) => (
            <Link key={link.title} to={link.path} className="nav-link text-primary">
              {link.title}
            </Link>
          ))}
        </div>

        {/* Contact Button - Desktop */}
        <div className="hidden md:block">
          <Button className="bg-accent text-white hover:bg-accent/90">Book a Call</Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[73px] bg-white z-40 animate-fade-in">
          <div className="flex flex-col p-10 space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                className="text-2xl font-medium text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <Button className="bg-accent text-white hover:bg-accent/90 w-full">
              Book a Call
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

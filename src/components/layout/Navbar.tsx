
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu, X, Grid3X3, Grid2X2 } from "lucide-react";

const servicesItems = [
  {
    title: "Web Design & Development",
    description: "Beautiful, functional websites with seamless UX",
    href: "/services#web"
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications",
    href: "/services#mobile"
  },
  {
    title: "Brand Identity & UI Systems",
    description: "Cohesive visual language across all touchpoints",
    href: "/services#brand"
  },
  {
    title: "UX Strategy",
    description: "User-centered design approach for optimal experiences",
    href: "/services#ux"
  },
  {
    title: "Creative Tech",
    description: "WebGL, 3D, and motion design implementations",
    href: "/services#creative"
  },
  {
    title: "AI Integrations",
    description: "Smart automation and intelligent features",
    href: "/services#ai"
  }
];

const categoriesItems = [
  { title: "E-commerce", href: "/categories#ecommerce" },
  { title: "EdTech", href: "/categories#edtech" },
  { title: "Health", href: "/categories#health" },
  { title: "Real Estate", href: "/categories#realestate" },
  { title: "Food Delivery", href: "/categories#food" },
  { title: "Travel", href: "/categories#travel" },
  { title: "Interior", href: "/categories#interior" },
  { title: "CRM", href: "/categories#crm" },
  { title: "Jobs", href: "/categories#jobs" }
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent focus:bg-accent/10 focus:text-accent",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-500">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className="nav-link text-primary px-3 py-2">
                  Home
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent group">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[600px] p-4">
                    <div className="grid grid-cols-2 gap-4">
                      {servicesItems.map((item) => (
                        <ListItem 
                          key={item.title} 
                          title={item.title} 
                          href={item.href}
                        >
                          {item.description}
                        </ListItem>
                      ))}
                    </div>
                    <div className="pt-4 mt-4 border-t">
                      <Link 
                        to="/services"
                        className="flex items-center justify-center w-full py-2 text-sm font-medium text-accent hover:underline"
                      >
                        View All Services
                        <Grid3X3 className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent group">
                  Categories
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-4">
                    <div className="grid grid-cols-3 gap-3">
                      {categoriesItems.map((item) => (
                        <Link 
                          key={item.title}
                          to={item.href}
                          className="flex items-center justify-center p-2 rounded-md text-sm font-medium text-primary hover:bg-accent/10 hover:text-accent transition-colors"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                    <div className="pt-4 mt-4 border-t">
                      <Link 
                        to="/categories"
                        className="flex items-center justify-center w-full py-2 text-sm font-medium text-accent hover:underline"
                      >
                        View All Categories
                        <Grid2X2 className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/showcase" className="nav-link text-primary px-3 py-2">
                  Showcase
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/about" className="nav-link text-primary px-3 py-2">
                  About
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/contact" className="nav-link text-primary px-3 py-2">
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

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
                {servicesItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="text-sm text-gray-600 hover:text-accent"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="border rounded-lg p-4 bg-gray-50/50">
              <h3 className="text-xl font-medium text-primary mb-3">Categories</h3>
              <div className="grid grid-cols-2 gap-2">
                {categoriesItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="text-sm text-gray-600 hover:text-accent"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
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

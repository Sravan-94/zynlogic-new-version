import React from "react";
import { ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  imageSrc: string;
  className?: string;
}

const ServiceCard = ({ title, imageSrc, className }: ServiceCardProps) => (
  <div className={cn("flex flex-col", className)}>
    <div className="mb-4 overflow-hidden rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 shadow-lg">
      <AspectRatio ratio={3/2} className="overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" 
        />
      </AspectRatio>
    </div>
    <div className="flex items-center gap-2 pl-1">
      <span className="text-foreground text-lg font-medium">{title}</span>
      <ArrowRight size={16} className="text-foreground ml-1" />
    </div>
  </div>
);

const services = [
  {
    title: "Moblie Applications",
    imageSrc: "/WhatsApp Image 2025-05-17 at 13.57.33_50f8aa3c.jpg",
  },
  {
    title: "Web Design & Development",
    imageSrc: "/services/web-design-development.jpg",
  },
  {
    title: "Brand Identity ",
    imageSrc: "/services/brand-identity.jpg",
  },
  {
    title: "AI Integrations",
    imageSrc: "/services/ai-integrations.jpg",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-white py-10 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Services</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 w-full max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Link to="/services" key={index}>
              <ServiceCard {...service} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;


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
      <span className="text-white text-lg font-medium">{title}</span>
      <ArrowRight size={16} className="text-white ml-1" />
    </div>
  </div>
);

const services = [
  {
    title: "Suitcase App",
    imageSrc: "/lovable-uploads/dca407e2-46f7-49b9-b3c9-b9fce2b4984a.png",
  },
  {
    title: "Exchango Dashboard",
    imageSrc: "/lovable-uploads/69feb3ce-f73b-406c-b179-080d75bfcb04.png",
  },
  {
    title: "Copay",
    imageSrc: "/lovable-uploads/14dcc525-6005-4635-b3d5-dc0666171b56.png",
  },
  {
    title: "Paws & Plans App",
    imageSrc: "/lovable-uploads/d36006bb-4131-42d7-af02-a12cfdd587e5.png",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-black py-20 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Services</h2>
        </div>

        <div className="grid grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
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

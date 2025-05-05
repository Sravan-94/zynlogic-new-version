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
    imageSrc: "https://media-hosting.imagekit.io/8848bf5602254ad1/WhatsApp%20Image%202025-05-05%20at%2019.09.47_64c56e6a.jpg?Expires=1841060419&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=IRZjRsulg83HUc1rOELDznaPabFCaWGVmNvTPh~MbXBXCaCFm8ig~uk~CzbHwlz4n9Bs9KCkbEVa4ppmyE~8bOADVwlCj54zMklROmhszmyty1iWYo10dftBToMbKfNu9fyAeuywWE9Y4eOy8pAeTjsJxR6mkqHH61NiLhM5cQAhRD8Ox2ZiNkOnk0vjo92GSHApTCl-CG9Er-7EJVgeVVsWtR8m03p8p26NfpVJ2Pg3Aw2W1jCCWhSOH9Z0tDH1rFjsK~gbhnQ6m5BBimfmjladhQSHhYLbD1yX3T8mdZy4I1aZh6wyxJzBcS57kGrhL00DYhXxcuyvtuIRRF8c2A__",
  },
  {
    title: "Web Design & Development",
    imageSrc: "/lovable-uploads/69feb3ce-f73b-406c-b179-080d75bfcb04.png",
  },
  {
    title: "Brand Identity ",
    imageSrc: "/lovable-uploads/14dcc525-6005-4635-b3d5-dc0666171b56.png",
  },
  {
    title: "AI Integrations",
    imageSrc: "/lovable-uploads/d36006bb-4131-42d7-af02-a12cfdd587e5.png",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-10 lg:px-16">
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


import React from "react";
import Layout from "@/components/layout/Layout";
import { ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

const ServiceCard = ({ title, description, icon, features }: ServiceCardProps) => (
  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="text-5xl mb-6">{icon}</div>
    <h3 className="text-3xl font-bold text-primary mb-4">{title}</h3>
    <p className="text-gray-600 mb-6">{description}</p>
    <ul className="space-y-3 mb-8">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-center">
          <span className="text-accent mr-2">•</span> {feature}
        </li>
      ))}
    </ul>
    <Button className="bg-accent text-white hover:bg-accent/90 flex items-center gap-2">
      Let's Talk About {title.split(" ")[0]}
      <ArrowRight size={16} />
    </Button>
  </div>
);

// Featured projects/services with consistent images matching the home page design
const featuredServices = [
  {
    id: 1,
    title: "Suitcase App",
    imageSrc: "/lovable-uploads/dca407e2-46f7-49b9-b3c9-b9fce2b4984a.png",
  },
  {
    id: 2,
    title: "Exchango Dashboard",
    imageSrc: "/lovable-uploads/69feb3ce-f73b-406c-b179-080d75bfcb04.png",
  },
  {
    id: 3,
    title: "Copay",
    imageSrc: "/lovable-uploads/14dcc525-6005-4635-b3d5-dc0666171b56.png",
  },
  {
    id: 4,
    title: "Paws & Plans App",
    imageSrc: "/lovable-uploads/d36006bb-4131-42d7-af02-a12cfdd587e5.png",
  },
];

// Detailed services information
const services = [
  {
    id: 1,
    title: "Web Design & Development",
    description: "We create immersive, responsive websites that engage users and drive conversions. Using the latest technologies and design principles, we deliver solutions that are both visually stunning and functionally seamless.",
    icon: "💻",
    features: [
      "Custom WordPress Development",
      "React & Next.js Applications",
      "E-commerce Solutions",
      "Content Management Systems",
      "Performance Optimization"
    ]
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "From concept to launch, we develop native and cross-platform mobile applications that deliver exceptional user experiences across all devices. Our focus is on creating intuitive interfaces with robust functionality.",
    icon: "📱",
    features: [
      "iOS & Android Development",
      "React Native Applications",
      "Flutter Solutions",
      "App Store Optimization",
      "Ongoing Maintenance & Support"
    ]
  },
  {
    id: 3,
    title: "Brand Identity & UI Systems",
    description: "We craft distinctive visual identities that express your brand's unique personality and values. Our comprehensive approach ensures consistency across all touchpoints, creating recognizable and impactful brand experiences.",
    icon: "✨",
    features: [
      "Logo & Identity Design",
      "Brand Strategy",
      "UI Design Systems",
      "Brand Guidelines",
      "Marketing Collateral"
    ]
  },
  {
    id: 4,
    title: "UX Strategy",
    description: "Through in-depth research and data-driven insights, we create strategic UX frameworks that guide the development of intuitive, engaging user experiences that meet both user needs and business objectives.",
    icon: "🔍",
    features: [
      "User Research & Persona Development",
      "Information Architecture",
      "User Flow Mapping",
      "Wireframing & Prototyping",
      "Usability Testing"
    ]
  },
  {
    id: 5,
    title: "Creative Tech",
    description: "We push the boundaries of digital experiences with cutting-edge creative technology. From immersive 3D environments to engaging interactions, we leverage advanced technologies to create memorable digital experiences.",
    icon: "🎮",
    features: [
      "WebGL & Three.js Development",
      "3D Modeling & Animation",
      "Motion Design",
      "Interactive Installations",
      "AR/VR Experiences"
    ]
  },
  {
    id: 6,
    title: "AI Integrations & Automations",
    description: "Harness the power of artificial intelligence to enhance your digital products and streamline operations. We implement intelligent solutions that improve user experiences and drive business efficiency.",
    icon: "🤖",
    features: [
      "Natural Language Processing",
      "Machine Learning Integration",
      "Chatbots & Virtual Assistants",
      "Data Analysis & Visualization",
      "Process Automation"
    ]
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              We offer a comprehensive range of digital services to help businesses 
              establish a strong online presence and achieve their goals.
            </p>
          </div>
          
          {/* Featured Projects Section */}
          <div className="bg-black py-16 px-6 md:px-10 lg:px-16 rounded-3xl mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Featured Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              {featuredServices.map((service) => (
                <div key={service.id} className="flex flex-col">
                  <div className="mb-4 overflow-hidden rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 shadow-lg">
                    <AspectRatio ratio={3/2} className="overflow-hidden">
                      <img 
                        src={service.imageSrc} 
                        alt={service.title} 
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" 
                      />
                    </AspectRatio>
                  </div>
                  <div className="flex items-center gap-2 pl-1">
                    <span className="text-white text-lg font-medium">{service.title}</span>
                    <ArrowRight size={16} className="text-white ml-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Services Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;

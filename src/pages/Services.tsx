import React from "react";
import Layout from "@/components/layout/Layout";
import { ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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
    icon: "",
    imageSrc: "/lovable-uploads/dca407e2-46f7-49b9-b3c9-b9fce2b4984a.png",
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
    icon: "",
    imageSrc: "/lovable-uploads/69feb3ce-f73b-406c-b179-080d75bfcb04.png",
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
    icon: "",
    imageSrc: "/lovable-uploads/14dcc525-6005-4635-b3d5-dc0666171b56.png",
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
    icon: "",
    imageSrc: "/lovable-uploads/d36006bb-4131-42d7-af02-a12cfdd587e5.png",
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
    icon: "",
    imageSrc: "/lovable-uploads/dca407e2-46f7-49b9-b3c9-b9fce2b4984a.png",
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
    icon: "",
    imageSrc: "/lovable-uploads/69feb3ce-f73b-406c-b179-080d75bfcb04.png",
    features: [
      "Natural Language Processing",
      "Machine Learning Integration",
      "Chatbots & Virtual Assistants",
      "Data Analysis & Visualization",
      "Process Automation"
    ]
  },
];

const ServiceSection = ({ service, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 py-16 border-b border-gray-100`}>
      <div className="md:w-1/2">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 shadow-lg">
          <AspectRatio ratio={16/9} className="overflow-hidden">
            <img 
              src={service.imageSrc} 
              alt={service.title} 
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" 
            />
          </AspectRatio>
        </div>
      </div>
      
      <div className="md:w-1/2 flex flex-col justify-center">
        <div className="text-4xl mb-4">{service.icon}</div>
        <h3 className="text-3xl font-bold text-foreground mb-4">{service.title}</h3>
        <p className="text-muted-foreground mb-6">{service.description}</p>
        
        <ul className="space-y-2 mb-8">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center">
              <span className="text-purple-500 mr-2">•</span> {feature}
            </li>
          ))}
        </ul>
        
        <Button className="bg-purple-600 text-white hover:bg-purple-700 flex items-center gap-2 w-fit">
          Let's Talk About {service.title.split(" ")[0]}
          <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-10 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              We offer a comprehensive range of digital services to help businesses 
              establish a strong online presence and achieve their goals.
            </p>
          </div>
          
          {/* Services Section with alternating layout */}
          <div className="mt-8">
            {services.map((service, index) => (
              <ServiceSection key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;

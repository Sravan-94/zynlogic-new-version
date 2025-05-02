
import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

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

          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16`}
              >
                <div className="lg:w-1/2">
                  <div className="text-5xl mb-6">{service.icon}</div>
                  <h2 className="text-3xl font-bold text-primary mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-accent mr-2">•</span> {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-accent text-white hover:bg-accent/90">
                    Let's Talk About {service.title.split(" ")[0]}
                  </Button>
                </div>
                <div className="lg:w-1/2 bg-gray-100 rounded-lg h-64 lg:h-auto flex items-center justify-center">
                  <p className="text-gray-500 italic">Service Image Placeholder</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;

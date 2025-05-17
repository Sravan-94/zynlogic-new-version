
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Web Design & Development",
    description: "Creating responsive, user-friendly websites with cutting-edge technology and sleek design.",
    icon: "💻",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Native and cross-platform app solutions that deliver seamless user experiences.",
    icon: "📱",
  },
  {
    id: 3,
    title: "Brand Identity & UI Systems",
    description: "Crafting distinctive visual languages that express your brand's unique personality.",
    icon: "✨",
  },
  {
    id: 4,
    title: "UX Strategy",
    description: "Research-driven approach to create intuitive, engaging user experiences.",
    icon: "🔍",
  },
  {
    id: 5,
    title: "Creative Tech",
    description: "Innovative WebGL, 3D, and motion design to create immersive digital experiences.",
    icon: "🎮",
  },
  {
    id: 6,
    title: "AI Integrations",
    description: "Leveraging artificial intelligence to enhance functionality and user experience.",
    icon: "🤖",
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-20 px-6 md:px-10 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Specialized in crafting brand-defining tech services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="service-card bg-white p-8 rounded-lg border border-gray-100"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link 
                to="/services" 
                className="flex items-center text-accent hover:underline"
              >
                Learn more <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/services" 
            className="inline-flex items-center text-primary border-b border-primary pb-1"
          >
            View all services <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;

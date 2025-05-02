
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Category } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  { id: 1, name: "E-commerce", icon: "🛍️", description: "Online shopping platforms and marketplaces for businesses." },
  { id: 2, name: "EdTech", icon: "🎓", description: "Educational technology solutions for modern learning." },
  { id: 3, name: "Health", icon: "⚕️", description: "Digital health platforms and patient management systems." },
  { id: 4, name: "Real Estate", icon: "🏢", description: "Property listing platforms and virtual tour solutions." },
  { id: 5, name: "Finance", icon: "💰", description: "Financial management and investment tracking systems." },
  { id: 6, name: "Travel", icon: "✈️", description: "Booking platforms and travel experience applications." },
];

const CategoriesPreview = () => {
  return (
    <section className="py-20 px-6 md:px-10 lg:px-16 bg-secondary-light/10">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card mb-16 p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Industry Expertise</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              We specialize in various sectors, delivering outstanding digital solutions tailored to your industry needs.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-button p-4 rounded-lg flex flex-col items-center justify-center text-center aspect-square">
              <Category size={32} className="text-accent mb-2" />
              <span className="font-medium">19+ Categories</span>
            </div>
            <div className="glass-button p-4 rounded-lg flex flex-col items-center justify-center text-center aspect-square">
              <span className="text-3xl mb-2">🌟</span>
              <span className="font-medium">Specialized Solutions</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="service-card glass-card p-8 rounded-lg"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-3">{category.name}</h3>
              <p className="text-gray-600 mb-6">{category.description}</p>
              <Link to="/categories" className="flex items-center text-accent hover:underline">
                Explore <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="glass-button">
            <Link to="/categories">View All Categories</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesPreview;

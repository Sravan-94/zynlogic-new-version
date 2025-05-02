
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  { id: 1, name: "E-commerce", icon: "🛍️" },
  { id: 2, name: "EdTech", icon: "🎓" },
  { id: 3, name: "Health", icon: "⚕️" },
  { id: 4, name: "Real Estate", icon: "🏢" },
  { id: 5, name: "Finance", icon: "💰" },
  { id: 6, name: "Travel", icon: "✈️" },
  { id: 7, name: "Food Delivery", icon: "🍔" },
  { id: 8, name: "Branding", icon: "✨" },
];

const CategoriesPreview = () => {
  return (
    <section className="py-20 px-6 md:px-10 lg:px-16 bg-secondary-light/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Winning Edge</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            We specialize in various sectors, delivering outstanding digital solutions
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="bg-white p-6 rounded-lg flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-3xl mb-3">{category.icon}</div>
              <h3 className="font-medium text-primary mb-3">{category.name}</h3>
              <Link to="/categories" className="text-accent text-sm flex items-center">
                Explore <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline">
            <Link to="/categories">View All Categories</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesPreview;

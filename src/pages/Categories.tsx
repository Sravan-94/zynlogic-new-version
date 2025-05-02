
import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  { id: 1, name: "E-commerce", icon: "🛍️", description: "Online shopping platforms and marketplaces for seamless digital retail experiences." },
  { id: 2, name: "EdTech", icon: "🎓", description: "Educational technology solutions that transform how we learn and teach." },
  { id: 3, name: "Health", icon: "⚕️", description: "Digital health platforms to improve healthcare delivery and patient outcomes." },
  { id: 4, name: "Real Estate", icon: "🏢", description: "Property listing platforms and virtual tour experiences for real estate." },
  { id: 5, name: "Food Delivery", icon: "🍔", description: "Food ordering systems and delivery management platforms." },
  { id: 6, name: "Travel", icon: "✈️", description: "Booking platforms and travel experience applications." },
  { id: 7, name: "Interior", icon: "🏠", description: "Interior design visualization and home decoration applications." },
  { id: 8, name: "CRM", icon: "👥", description: "Customer relationship management systems for business growth." },
  { id: 9, name: "Jobs", icon: "💼", description: "Job boards and recruitment platforms for connecting talent with opportunities." },
  { id: 10, name: "Legal", icon: "⚖️", description: "Legal service platforms and document management systems." },
  { id: 11, name: "NGOs", icon: "🌱", description: "Digital solutions for non-profit organizations to maximize their impact." },
  { id: 12, name: "Digital Agencies", icon: "💻", description: "Tools and platforms for creative agencies to manage projects and clients." },
  { id: 13, name: "Freelancers", icon: "🎨", description: "Portfolio websites and service management tools for independent professionals." },
  { id: 14, name: "Finance", icon: "💰", description: "Financial management and investment platforms for personal and business use." },
  { id: 15, name: "Hotels", icon: "🏨", description: "Booking systems and hospitality management solutions for accommodation businesses." },
  { id: 16, name: "Automobile", icon: "🚗", description: "Vehicle listing platforms and automotive service management systems." },
  { id: 17, name: "Fantasy Gaming", icon: "🎮", description: "Interactive gaming platforms focused on fantasy sports and entertainment." },
  { id: 18, name: "Auction", icon: "🔨", description: "Online auction platforms for various types of products and services." },
  { id: 19, name: "Branding", icon: "✨", description: "Visual identity development and brand management systems." },
];

const Categories = () => {
  return (
    <Layout>
      <section className="py-20 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Industry Expertise
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              We've developed specialized knowledge across a wide range of industries, 
              allowing us to create tailored solutions for different sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div 
                key={category.id}
                className="bg-white p-8 rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h2 className="text-2xl font-semibold text-primary mb-3">{category.name}</h2>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <Button 
                  asChild 
                  variant="ghost"
                  className="p-0 hover:bg-transparent text-accent hover:text-accent/80"
                >
                  <Link to="/showcase" className="flex items-center">
                    Explore Work <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Categories;

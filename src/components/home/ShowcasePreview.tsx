import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const featuredProjects = [{
  id: 1,
  title: "Rapha Cycling",
  category: "E-Commerce",
  description: "Premium cycling apparel online store with customized shopping experience",
  tech: "React, Shopify",
  link: "/showcase/rapha-cycling",
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
}, {
  id: 2,
  title: "Nomad Health",
  category: "Healthcare",
  description: "Mobile platform connecting healthcare professionals with medical facilities",
  tech: "React Native",
  link: "/showcase/nomad-health",
  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
}, {
  id: 3,
  title: "Horizon Finance",
  category: "FinTech",
  description: "Next-generation financial analytics dashboard with real-time data visualization",
  tech: "NextJS",
  link: "/showcase/horizon-finance",
  image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1"
}];

const ShowcasePreview = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our Work</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl mx-auto">
          {featuredProjects.map(project => (
            <Card key={project.id} className="overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden bg-gradient-to-br from-purple-400 to-purple-600">
                <div className="aspect-[4/3]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105" 
                    loading="lazy" 
                  />
                </div>
              </div>
              <CardContent className="p-5">
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                  <span className="text-sm text-muted-foreground">• {project.category}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-2 line-clamp-2">{project.description}</p>
                <p className="text-xs text-purple-600 mb-3">{project.tech}</p>
                <Link 
                  to={project.link} 
                  className="inline-flex items-center text-sm text-foreground hover:text-purple-600 transition-colors"
                >
                  View Case Study
                  <ArrowRight size={14} className="ml-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcasePreview;
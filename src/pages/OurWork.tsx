import React, { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const OurWork = () => {
  // Get unique categories from our projects
  const uniqueCategories = [...new Set(projects.map(project => project.category))];
  
  // Use these categories for filtering
  const categories = uniqueCategories.length > 0 ? uniqueCategories : [
    "Website",
    "Mobile App",
    "E-Commerce",
    "CRM",
    "Healthcare",
    "Educational",
    "Food & Delivery",
    "Retail",
    "Portfolio",
    "Finance"
  ];

  // Add state for the selected category
  const [selectedCategory, setSelectedCategory] = useState("All Work");

  // Current timestamp for cache busting
  const timestamp = Date.now();
  
  // Filter projects based on selected category
  const filteredProjects = selectedCategory === "All Work" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <Layout>
      <div className="py-16 px-6 md:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">Our Work</h1>
            <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
              Explore our portfolio of mobile apps and websites across various industries and categories.
            </p>
          </div>
          
          {/* Categories Filter */}
          <div className="flex justify-center mb-12 gap-4 flex-wrap">
            <Button 
              variant={selectedCategory === "All Work" ? "default" : "outline"} 
              className="rounded-full"
              onClick={() => setSelectedCategory("All Work")}
            >
              All Work
            </Button>
            {categories.map(category => (
              <Button 
                key={category} 
                variant={selectedCategory === category ? "default" : "outline"} 
                className="rounded-full whitespace-nowrap"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          
         
          
          {/* Project Grid - 3 cards per row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map(project => (
              <Link 
                key={project.id} 
                to={`/project/${project.id}`}
                className="block h-full"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg">
                  {/* Image with 3:2 aspect ratio */}
                  <div className="w-full">
                    <div className="aspect-[3/2] w-full overflow-hidden bg-gray-200">
                      <img 
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          // Fallback for image loading errors
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://images.unsplash.com/photo-1579621970795-87facc2f976d';
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge variant="outline" className="bg-purple-50 text-purple-800 hover:bg-purple-100 border-purple-200">
                        {project.category}
                      </Badge>
                       
                    </div>
                    <h3 className="font-medium text-zinc-900">{project.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* No results message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-zinc-600">No projects found in this category.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => setSelectedCategory("All Work")}
              >
                View all projects
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default OurWork;

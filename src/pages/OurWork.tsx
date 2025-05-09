import React, { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

// Image and project name configuration - EASILY CHANGE IMAGES AND NAMES HERE
// Add or modify image URLs and project names as needed

// Image configuration - ALL 40 PROJECTS
const projectImages = {
  // Project 1-20 images
  project1: "https://media-hosting.imagekit.io/2cd0f8c04e9c468b/original-438c01314162ba2f8862925.png?Expires=1841381485&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ikw017d209sRPSYRlOH6I9gApSaIb1j0RWe30hgVVvnj~-U9i-PHerYWjef8vMqfauM-MzXI9YDQwW~E0Iq1NY8k6akReQDClnYEJFek8TTYf0SfJr65gY~WJGHjnd~sy1O4G0dVRCe3o--ZX~QtSkjBW3E7TYTgnBdd2Q08aXa0ddw~uUYee2Kj4se3WfrKndnJerdeFjAPY~RnLV4vCpgMFD9aq~rqcvWnzwlQZQZfRGryYEeeQP-jxibvcxwuOpOnEmeYstpC6m1sN-r4I8wjwYcPQ3P6rTGrYgsrvkDjLAHZZsuR6HJDaa3cPdnizTC6zSsIcVX5rnSBqO6xDA__",
  project2: "https://media-hosting.imagekit.io/8182e50368f84796/WhatsApp%20Image%202025-05-05%20at%2017.15.02_4803d08d.jpg",
  project3: "https://media-hosting.imagekit.io/4f3ae5b3b3104423/WhatsApp%20Image%202025-05-06%20at%2014.38.35_532e64a7.jpg",
  project4: "https://media-hosting.imagekit.io/31faf635e4c74bf1/WhatsApp%20Image%202025-05-05%20at%2017.15.02_1ae5747d.jpg",
  project5: "https://media-hosting.imagekit.io/0a0313adf5f64705/WhatsApp%20Image%202025-05-06%20at%2014.38.38_f6c35d43.jpg",
  project6: "https://media-hosting.imagekit.io/32d50ffc149c4212/WhatsApp%20Image%202025-05-05%20at%2017.15.02_3bb14c20.jpg",
  project7: "https://media-hosting.imagekit.io/e1adb132f174409c/WhatsApp%20Image%202025-05-05%20at%2017.27.22_3a4645bd.jpg",
  project8: "https://media-hosting.imagekit.io/964f24a102a54989/WhatsApp%20Image%202025-05-05%20at%2017.15.05_c644755d.jpg",
  project9: "https://media-hosting.imagekit.io/942627dc3a9a4ac9/WhatsApp%20Image%202025-05-05%20at%2020.27.04_e45d455b.jpg",
  project10: "https://media-hosting.imagekit.io/e2d48f456e9e4dac/WhatsApp%20Image%202025-05-05%20at%2017.37.15_1768e148.jpg",
  project11: "https://media-hosting.imagekit.io/d33b2576b46c4fe0/WhatsApp%20Image%202025-05-05%20at%2017.27.23_f0fb89ab.jpg",
  project12: "https://media-hosting.imagekit.io/1d396a25b11e4984/WhatsApp%20Image%202025-05-05%20at%2020.26.36_48c9054b.jpg",
  project13: "https://media-hosting.imagekit.io/fe31d2bbeb7249fa/WhatsApp%20Image%202025-05-05%20at%2020.27.08_3162a3c5.jpg",
  project14: "https://media-hosting.imagekit.io/2d72900b96a5410d/WhatsApp%20Image%202025-05-05%20at%2017.29.51_2d914035.jpg",
  project15: "https://media-hosting.imagekit.io/49e933e5d78f4c0b/WhatsApp%20Image%202025-05-05%20at%2017.37.08_4b8320c0.jpg",
  project16: "https://media-hosting.imagekit.io/f685e0cd160a4064/WhatsApp%20Image%202025-05-05%20at%2017.29.54_cd957daf.jpg",
  project17: "https://media-hosting.imagekit.io/56b3b334f76748a9/WhatsApp%20Image%202025-05-05%20at%2017.37.08_54c80f6c.jpg",
  project18: "https://media-hosting.imagekit.io/9158e1b950464c74/WhatsApp%20Image%202025-05-05%20at%2017.29.54_21fd7ddd.jpg",
  project19: "https://media-hosting.imagekit.io/20e29cbdac5a478f/WhatsApp%20Image%202025-05-05%20at%2020.27.05_f00e979e.jpg",
  project20: "https://media-hosting.imagekit.io/04d88a578f63459b/WhatsApp%20Image%202025-05-05%20at%2018.07.17_32a7341a.jpg",
  
  // Project 21-40 images (reusing the same images for now, you can replace these with different images)
  project21: "https://media-hosting.imagekit.io/2cd0f8c04e9c468b/original-438c01314162ba2f8862925.png?Expires=1841381485&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ikw017d209sRPSYRlOH6I9gApSaIb1j0RWe30hgVVvnj~-U9i-PHerYWjef8vMqfauM-MzXI9YDQwW~E0Iq1NY8k6akReQDClnYEJFek8TTYf0SfJr65gY~WJGHjnd~sy1O4G0dVRCe3o--ZX~QtSkjBW3E7TYTgnBdd2Q08aXa0ddw~uUYee2Kj4se3WfrKndnJerdeFjAPY~RnLV4vCpgMFD9aq~rqcvWnzwlQZQZfRGryYEeeQP-jxibvcxwuOpOnEmeYstpC6m1sN-r4I8wjwYcPQ3P6rTGrYgsrvkDjLAHZZsuR6HJDaa3cPdnizTC6zSsIcVX5rnSBqO6xDA__",
  project22: "https://media-hosting.imagekit.io/8182e50368f84796/WhatsApp%20Image%202025-05-05%20at%2017.15.02_4803d08d.jpg",
  project23: "https://media-hosting.imagekit.io/4f3ae5b3b3104423/WhatsApp%20Image%202025-05-06%20at%2014.38.35_532e64a7.jpg",
  project24: "https://media-hosting.imagekit.io/31faf635e4c74bf1/WhatsApp%20Image%202025-05-05%20at%2017.15.02_1ae5747d.jpg",
  project25: "https://media-hosting.imagekit.io/0a0313adf5f64705/WhatsApp%20Image%202025-05-06%20at%2014.38.38_f6c35d43.jpg",
  project26: "https://media-hosting.imagekit.io/32d50ffc149c4212/WhatsApp%20Image%202025-05-05%20at%2017.15.02_3bb14c20.jpg",
  project27: "https://media-hosting.imagekit.io/e1adb132f174409c/WhatsApp%20Image%202025-05-05%20at%2017.27.22_3a4645bd.jpg",
  project28: "https://media-hosting.imagekit.io/964f24a102a54989/WhatsApp%20Image%202025-05-05%20at%2017.15.05_c644755d.jpg",
  project29: "https://media-hosting.imagekit.io/942627dc3a9a4ac9/WhatsApp%20Image%202025-05-05%20at%2020.27.04_e45d455b.jpg",
  project30: "https://media-hosting.imagekit.io/e2d48f456e9e4dac/WhatsApp%20Image%202025-05-05%20at%2017.37.15_1768e148.jpg",
  project31: "https://media-hosting.imagekit.io/d33b2576b46c4fe0/WhatsApp%20Image%202025-05-05%20at%2017.27.23_f0fb89ab.jpg",
  project32: "https://media-hosting.imagekit.io/1d396a25b11e4984/WhatsApp%20Image%202025-05-05%20at%2020.26.36_48c9054b.jpg",
  project33: "https://media-hosting.imagekit.io/fe31d2bbeb7249fa/WhatsApp%20Image%202025-05-05%20at%2020.27.08_3162a3c5.jpg",
  project34: "https://media-hosting.imagekit.io/2d72900b96a5410d/WhatsApp%20Image%202025-05-05%20at%2017.29.51_2d914035.jpg",
  project35: "https://media-hosting.imagekit.io/49e933e5d78f4c0b/WhatsApp%20Image%202025-05-05%20at%2017.37.08_4b8320c0.jpg",
  project36: "https://media-hosting.imagekit.io/f685e0cd160a4064/WhatsApp%20Image%202025-05-05%20at%2017.29.54_cd957daf.jpg",
  project37: "https://media-hosting.imagekit.io/56b3b334f76748a9/WhatsApp%20Image%202025-05-05%20at%2017.37.08_54c80f6c.jpg",
  project38: "https://media-hosting.imagekit.io/9158e1b950464c74/WhatsApp%20Image%202025-05-05%20at%2017.29.54_21fd7ddd.jpg",
  project39: "https://media-hosting.imagekit.io/20e29cbdac5a478f/WhatsApp%20Image%202025-05-05%20at%2020.27.05_f00e979e.jpg",
  project40: "https://media-hosting.imagekit.io/04d88a578f63459b/WhatsApp%20Image%202025-05-05%20at%2018.07.17_32a7341a.jpg",
};

// Project name configuration - ALL 40 PROJECTS
const projectNames = {
  // Project 1-20 names
  project1: "Juicy Chemistry",
  project2: "Uber",
  project3: "Chumbak",
  project4: "Ola",
  project5: "Zomato",
  project6: "PhonePe",
  project7: "Swiggy",
  project8: "Google Pay",
  project9: "Myntra",
  project10: "Paytm",
  project11: "Flipkart",
  project12: "Swiggy App",
  project13: "Amazon",
  project14: "Zomato App",
  project15: "Nykaa",
  project16: "Myntra App",
  project17: "Ajio",
  project18: "Amazon App",
  project19: "Tata CLiQ",
  project20: "Flipkart App",
  
  // Project 21-40 names
  project21: "Shopify",
  project22: "Rapido",
  project23: "Meesho",
  project24: "Dunzo",
  project25: "BigBasket",
  project26: "CRED",
  project27: "Grofers",
  project28: "Lenskart",
  project29: "Pepperfry",
  project30: "MakeMyTrip",
  project31: "Snapdeal",
  project32: "BookMyShow",
  project33: "FirstCry",
  project34: "Groww",
  project35: "Urban Company",
  project36: "Zerodha",
  project37: "1mg",
  project38: "Cult.fit",
  project39: "Cleartrip",
  project40: "Unacademy",
};

// Function to get the appropriate image for a project based on position in the filtered list
const getProjectImage = (project, index) => {
  // Use the project's position in the list to determine which image to use
  const projectNumber = index + 1; // Convert to 1-based index
  const imageKey = `project${projectNumber <= 40 ? projectNumber : projectNumber % 40 || 40}`;
  return projectImages[imageKey] || project.imageUrl;
};

// Function to get the project name based on position in the filtered list
const getProjectName = (project, index) => {
  // Use the project's position in the list to determine which name to use
  const projectNumber = index + 1; // Convert to 1-based index
  const nameKey = `project${projectNumber <= 40 ? projectNumber : projectNumber % 40 || 40}`;
  return projectNames[nameKey] || project.title;
};

const OurWork = () => {
  // Use only Website and Mobile App categories for filtering
  const categories = [
    "Website",
    "Mobile App"
  ];

  // Add state for the selected category
  const [selectedCategory, setSelectedCategory] = useState("All Work");

  // Current timestamp for cache busting
  const timestamp = Date.now();
  
  // Filter projects based on selected category
  let filteredProjects = projects.filter(project => {
    if (selectedCategory === "All Work") return true;
    return project.category === selectedCategory;
  });
  
  // Arrange projects to alternate between Website and Mobile App
  if (selectedCategory === "All Work") {
    // Create separate arrays for website and mobile app projects
    const websiteProjects = projects.filter(project => project.type === "Website");
    const mobileAppProjects = projects.filter(project => project.type === "Mobile App");
    
    // Create a new array with alternating projects
    const alternatingProjects = [];
    const maxLength = Math.max(websiteProjects.length, mobileAppProjects.length);
    
    for (let i = 0; i < maxLength; i++) {
      // Add a website project if available
      if (i < websiteProjects.length) {
        alternatingProjects.push(websiteProjects[i]);
      }
      
      // Add a mobile app project if available
      if (i < mobileAppProjects.length) {
        alternatingProjects.push(mobileAppProjects[i]);
      }
    }
    
    // Use the alternating projects array
    filteredProjects = alternatingProjects;
  }

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
            {filteredProjects.map((project, index) => (
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
                        src={getProjectImage(project, index)}
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
                        {project.type === "Mobile App" ? "Mobile App" : "Website"}
                      </Badge>
                       
                    </div>
                    <h3 className="font-medium text-zinc-900">{getProjectName(project, index)}</h3>
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

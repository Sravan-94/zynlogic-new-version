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
  project1: "/our_work_Img/e-comm web 1.jpg",
  project2: "/our_work_Img/e-comm web 2.jpg",
  project3: "/our_work_Img/crm web 1.jpg",
  project4: "/our_work_Img/crm web 2.jpg",
  project5: "/our_work_Img/food web 1.jpg",
  project6: "/our_work_Img/food web 2.jpg",
  project7: "/our_work_Img/tourism website.png",
  project8: "/our_work_Img/tourism website 2.png",
  project9: "/our_work_Img/healthcare web 1.jpg",
  project10: "/our_work_Img/healthcare web 2.jpg ",
  project11: "/our_work_Img/edu web 1.jpg",
  project12: "/our_work_Img/edu web 2.jpg",
  project13: "/our_work_Img/job website 1.jpg",
  project14: "/our_work_Img/job website 2.jpg",
  project15: "/our_work_Img/real estate website 1.jpg",
  project16: "/our_work_Img/real estate website 2.jpg",
  project17: "/our_work_Img/rental web 1.jpg",
  project18: "/our_work_Img/rental web 2.jpg",
  project19: "/our_work_Img/auction web 1.png",
  project20: "/our_work_Img/auction web 2.png",
  
  // Project 21-40 images (reusing the same images for now, you can replace these with different images)
  project21: "/our_work_Img/e-comm app 1.jpg",
  project22: "/our_work_Img/e-comm app 2.jpg",
  project23: "/our_work_Img/crm app 1.jpg",
  project24: "/our_work_Img/crm app 2.jpg",
  project25: "/our_work_Img/food app 1.jpg",
  project26: "/our_work_Img/food app 2.jpg",
  project27: "/our_work_Img/tourism app 1.jpg",
  project28: "/our_work_Img/tourism app 2.jpg",
  project29: "/our_work_Img/healthcare app 1.jpg",
  project30: "/our_work_Img/healthcare app 2.jpg",
  project31: "/our_work_Img/edu app 1.jpg",
  project32: "/our_work_Img/edu app 2.jpg",
  project33: "/our_work_Img/job app 1.png",
  project34: "/our_work_Img/job apps 2.jpg",
  project35: "/our_work_Img/real estate app 1.jpg",
  project36: "/our_work_Img/real estate app 2.jpg",
  project37: "/our_work_Img/rental app 1.jpg",
  project38: "/our_work_Img/rental app 2.jpg",
  project39: "/our_work_Img/auction app 1.png",
  project40: "/our_work_Img/auction app 2.png",
};

// Project name configuration - ALL 40 PROJECTS
const projectNames = {
  // Project 1-20 names
  project1: "Juicy Chemistry",
  project2: "Chumbak",
  project3: "Apptivo",
  project4: "Bitrix24",
  project5: "Hungrybox",
  project6: "Biryani by kilo",
  project7: "Travel Triangle",
  project8: "Kiomoi",
  project9: "Medmonks",
  project10: "Healcards",
  project11: "PearlsAcademy",
  project12: "Welinkar",
  project13: "JobVisit",
  project14: "Hiremee",
  project15: "SSVC Infra",
  project16: "Property Panther",
  project17: "Mychoize",
  project18: "Car Street India",
  project19: "SpotBid",
  project20: "Meta E-Bid Auction",
  
  
  // Project 21-40 names
  project21: "Bharathkart Seller",
  project22: "Trendsi",
  project23: "Automate Sales",
  project24: "Sales Mate",
  project25: "Cloud Kitechen",
  project26: "The Food Stop",
  project27: "Tourism Analytics",
  project28: "India Tourist Place",
  project29: "DocIndia",
  project30: "Medcart",
  project31: "The Personalize leaning app",
  project32: "Educate: Online leaning app",
  project33: "JobVisit",
  project34: "Virtual Jobs India",
  project35: "HexaHome",
  project36: "India Property Dheko",
  project37: "Auto Rentals",
  project38: "Vcars",
  project39: "Bidkaro",
  project40: "Cricket Auction",
};

// Function to get the appropriate image for a project based on its ID
const getProjectImage = (project, index) => {
  // First check if we have a direct image mapping for this project ID
  if (projectImages[project.id]) {
    return projectImages[project.id];
  }
  
  // If no direct mapping, try to use the project's own imageUrl from projects.ts data
  if (project.imageUrl && project.imageUrl.trim() !== '') {
    return project.imageUrl;
  }
  
  // If still no image, use a placeholder based on the project number
  const projectIdMatch = project.id.match(/^project(\d+)$/);
  const projectNum = projectIdMatch ? parseInt(projectIdMatch[1], 10) : 0;
  
  // Use a fallback using project1 for websites (1-20) or project21 for mobile apps (21-40)
  if (projectNum >= 1 && projectNum <= 20) {
    return projectImages['project1']; // Fallback to first website image
  } else if (projectNum >= 21 && projectNum <= 40) {
    return projectImages['project21']; // Fallback to first mobile app image
  }
  
  // Last resort - return the first image from our collection
  return projectImages['project1'];
};

// Function to determine if a project is a website based on ID
const isWebsite = (projectId) => {
  const num = parseInt(projectId.replace('project', ''), 10);
  return num >= 1 && num <= 20;
};

// Function to determine if a project is a mobile app based on ID
const isMobileApp = (projectId) => {
  const num = parseInt(projectId.replace('project', ''), 10);
  return num >= 21 && num <= 40;
};

// Function to get the project name based on position in the filtered list
const getProjectName = (project, index) => {
  // First check for a name in the projectNames mapping
  if (projectNames[project.id]) {
    return projectNames[project.id];
  }
  
  // If no mapped name, use the project title from projects.ts data
  if (project.title && project.title.trim() !== '') {
    return project.title;
  }
  
  // If no title, generate a name based on the project ID
  const projectIdMatch = project.id.match(/^project(\d+)$/);
  const projectNum = projectIdMatch ? parseInt(projectIdMatch[1], 10) : 0;
  
  if (projectNum >= 1 && projectNum <= 20) {
    return `Website Project ${projectNum}`;
  } else if (projectNum >= 21 && projectNum <= 40) {
    return `Mobile App ${projectNum - 20}`;
  }
  
  // Last resort
  return project.id;
};

const OurWork = () => {
  // Use only Website and Mobile App categories for filtering
  const categories = [
    "Website",
    "Mobile App"
  ];

  // Add state for the selected category and filtered projects
  const [selectedCategory, setSelectedCategory] = useState("All Work");
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    // Make sure we only process projects with valid IDs (project1 through project40)
    const validProjects = projects.filter(project => {
      const match = project.id.match(/^project(\d+)$/);
      if (!match) return false;
      
      const num = parseInt(match[1], 10);
      return num >= 1 && num <= 40; // Only include projects 1-40
    });
    
    // Limit to max 40 projects
    const limitedProjects = validProjects.slice(0, 40);
    
    let filtered = [];
    
    if (selectedCategory === "All Work") {
      // For All Work, we want to display projects alternately (website, mobile app, website, etc.)
      
      // Get websites (projects 1-20) and sort by ID
      const websites = limitedProjects.filter(project => isWebsite(project.id))
        .sort((a, b) => {
          const aNum = parseInt(a.id.replace('project', ''), 10);
          const bNum = parseInt(b.id.replace('project', ''), 10);
          return aNum - bNum;
        });
      
      // Get mobile apps (projects 21-40) and sort by ID
      const mobileApps = limitedProjects.filter(project => isMobileApp(project.id))
        .sort((a, b) => {
          const aNum = parseInt(a.id.replace('project', ''), 10);
          const bNum = parseInt(b.id.replace('project', ''), 10);
          return aNum - bNum;
        });
      
      // Interleave websites and mobile apps
      const maxLength = Math.max(websites.length, mobileApps.length);
      
      // Create alternating pattern
      for (let i = 0; i < maxLength; i++) {
        // Add website first if available
        if (i < websites.length) {
          filtered.push(websites[i]);
        }
        
        // Then add mobile app if available
        if (i < mobileApps.length) {
          filtered.push(mobileApps[i]);
        }
      }
    } 
    else if (selectedCategory === "Website") {
      // Show only website projects (IDs 1-20)
      filtered = limitedProjects.filter(project => isWebsite(project.id));
      
      // Sort by ID
      filtered.sort((a, b) => {
        const aNum = parseInt(a.id.replace('project', ''), 10);
        const bNum = parseInt(b.id.replace('project', ''), 10);
        return aNum - bNum;
      });
    } 
    else if (selectedCategory === "Mobile App") {
      // Show only mobile app projects (IDs 21-40)
      filtered = limitedProjects.filter(project => isMobileApp(project.id));
      
      // Sort by ID
      filtered.sort((a, b) => {
        const aNum = parseInt(a.id.replace('project', ''), 10);
        const bNum = parseInt(b.id.replace('project', ''), 10);
        return aNum - bNum;
      });
    }
    
    // Set filtered projects with the correct type
    setFilteredProjects(filtered.map(project => ({
      ...project,
      // Set type based on ID range
      type: isWebsite(project.id) ? "Website" : "Mobile App"
    })));
    
    console.log(`Showing ${filtered.length} projects for category: ${selectedCategory}`);
  }, [selectedCategory, projects]);

  
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
            
            <Button 
              key="Website"
              variant={selectedCategory === "Website" ? "default" : "outline"}
              className={`rounded-full whitespace-nowrap ${selectedCategory === "Website" ? "bg-purple-600 text-white" : "bg-purple-50 text-purple-800 border-purple-200 hover:bg-purple-100"}`}
              onClick={() => setSelectedCategory("Website")}
            >
              Website
            </Button>
            
            <Button 
              key="Mobile App"
              variant={selectedCategory === "Mobile App" ? "default" : "outline"}
              className={`rounded-full whitespace-nowrap ${selectedCategory === "Mobile App" ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-800 border-blue-200 hover:bg-blue-100"}`}
              onClick={() => setSelectedCategory("Mobile App")}
            >
              Mobile App
            </Button>
          </div>
          
         
          
          {/* Project Grid - 3 cards per row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <Link 
                key={project._uniqueKey || `${project.id}_${index}`} 
                to={`/project/${project.id}`}
                className="block h-full"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg">
                  {/* Image with 3:2 aspect ratio */}
                  <div className="w-full">
                    <div className="aspect-[3/2] w-full overflow-hidden bg-gray-200">
                      <img 
                        src={getProjectImage(project, index)}
                        alt={project.title || `Project ${project.id}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.type === "Mobile App" ? (
                        <Badge variant="outline" className="bg-blue-50 text-blue-800 hover:bg-blue-100 border-blue-200">
                          Mobile App
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="bg-purple-50 text-purple-800 hover:bg-purple-100 border-purple-200">
                          Website
                        </Badge>
                      )}
                    </div>
                    <h3 className="font-medium text-zinc-900 line-clamp-2">{getProjectName(project, index)}</h3>
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

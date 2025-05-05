import React, { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProgressiveImage } from "@/components/ui/progressive-image";
import { ShowcaseSkeletonGrid } from "@/components/ui/skeleton-loader";
import { ArrowRight } from "lucide-react";

// Project data remains the same
const projects = [
  // E-Commerce / Retail
  {
    id: 1,
    title: "Rapha Cycling",
    category: "E-Commerce",
    industry: "Retail",
    year: "2025",
    tags: ["React", "Shopify", "Branding"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    description: "Complete e-commerce platform redesign with custom product configurator."
  },
  {
    id: 1,
    title: "Rapha Cycling",
    category: "E-Commerce",
    industry: "Retail",
    year: "2025",
    tags: ["React", "Shopify", "Branding"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    description: "Complete e-commerce platform redesign with custom product configurator."
  },
  {
    id: 3,
    title: "Luxe Apparel",
    category: "E-Commerce",
    industry: "Retail",
    year: "2023",
    tags: ["Vue.js", "Shopify", "3D Product Viewer"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
    description: "High-end fashion store with 3D product visualization and virtual try-on features."
  },
  // Finance
  {
    id: 1,
    title: "Rapha Cycling",
    category: "E-Commerce",
    industry: "Retail",
    year: "2025",
    tags: ["React", "Shopify", "Branding"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    description: "Complete e-commerce platform redesign with custom product configurator."
  },
  {
    id: 1,
    title: "Rapha Cycling",
    category: "E-Commerce",
    industry: "Retail",
    year: "2025",
    tags: ["React", "Shopify", "Branding"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    description: "Complete e-commerce platform redesign with custom product configurator."
  },
  {
    id: 1,
    title: "Rapha Cycling",
    category: "E-Commerce",
    industry: "Retail",
    year: "2025",
    tags: ["React", "Shopify", "Branding"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    description: "Complete e-commerce platform redesign with custom product configurator."
  },

  // Home & Decor
  {
    id: 7,
    title: "Verde Living",
    category: "Interior Design",
    industry: "Home & Decor",
    year: "2024",
    tags: ["WordPress", "E-commerce", "Custom CMS"],
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    description: "Luxury interior design portfolio with integrated e-commerce functionality."
  },
  {
    id: 8,
    title: "Modern Habitat",
    category: "Architecture",
    industry: "Home & Decor",
    year: "2024",
    tags: ["Gatsby", "Three.js", "WebGL"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    description: "Architectural design studio website with interactive 3D models of projects."
  },
  {
    id: 9,
    title: "HomeVision AR",
    category: "Mobile App",
    industry: "Home & Decor",
    year: "2025",
    tags: ["AR", "Unity", "iOS/Android"],
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    description: "Augmented reality app for visualizing furniture and decor in your home before purchasing."
  },

  // Education
  {
    id: 10,
    title: "CodeCraft Academy",
    category: "EdTech",
    industry: "Education",
    year: "2024",
    tags: ["React", "Node.js", "GraphQL"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    description: "Online learning platform with interactive code editor and assessment system."
  },
  {
    id: 11,
    title: "LinguaLearn",
    category: "EdTech",
    industry: "Education",
    year: "2023",
    tags: ["Vue.js", "Express", "WebSockets"],
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d",
    description: "Language learning platform with real-time conversation practice and AI-powered feedback."
  },
  {
    id: 12,
    title: "StudyBuddy",
    category: "Mobile App",
    industry: "Education",
    year: "2025",
    tags: ["Flutter", "Firebase", "Machine Learning"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
    description: "Study companion app with flashcards, pomodoro timer, and personalized learning paths."
  },

  // Technology
  {
    id: 13,
    title: "Orbital Analytics",
    category: "SaaS",
    industry: "Technology",
    year: "2023",
    tags: ["Vue.js", "Python", "Data Visualization"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    description: "Business intelligence dashboard with customizable reports and analytics."
  },
  {
    id: 14,
    title: "CloudSync",
    category: "SaaS",
    industry: "Technology",
    year: "2024",
    tags: ["React", "AWS", "Microservices"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    description: "Cloud storage and synchronization platform with enterprise-grade security features."
  },
  {
    id: 15,
    title: "DevOpsHub",
    category: "Developer Tools",
    industry: "Technology",
    year: "2025",
    tags: ["Angular", "Node.js", "Docker"],
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3",
    description: "DevOps management platform for continuous integration and deployment workflows."
  },

  // Healthcare
  {
    id: 16,
    title: "Nomad Health",
    category: "Healthcare",
    industry: "Healthcare",
    year: "2024",
    tags: ["Mobile App", "React Native", "UI Design"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description: "Telemedicine platform connecting patients with healthcare providers."
  },
  {
    id: 17,
    title: "MediTrack",
    category: "Healthcare",
    industry: "Healthcare",
    year: "2023",
    tags: ["Web App", "React", "HIPAA Compliant"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    description: "Patient management system for clinics with appointment scheduling and medical records."
  },
  {
    id: 18,
    title: "VitalMonitor",
    category: "Mobile App",
    industry: "Healthcare",
    year: "2025",
    tags: ["iOS", "Swift", "HealthKit"],
    image: "https://images.unsplash.com/photo-1576089172869-4f5f6f315620",
    description: "Health monitoring app that integrates with wearable devices to track vital signs and activity."
  },

  // Food & Beverage
  {
    id: 19,
    title: "Urban Eats",
    category: "Food Delivery",
    industry: "Food & Beverage",
    year: "2023",
    tags: ["iOS", "Android", "UX Research"],
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    description: "Food delivery app with real-time order tracking and restaurant discovery."
  },
  {
    id: 20,
    title: "BrewMaster",
    category: "E-Commerce",
    industry: "Food & Beverage",
    year: "2024",
    tags: ["Shopify", "Custom Theme", "Subscription Model"],
    image: "https://images.unsplash.com/photo-1495616811223-14e5300c3a48",
    description: "Craft beer subscription service with personalized recommendations and tasting notes."
  },
  {
    id: 21,
    title: "TableReady",
    category: "Restaurant Tech",
    industry: "Food & Beverage",
    year: "2025",
    tags: ["React", "Node.js", "Twilio API"],
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
    description: "Restaurant reservation system with waitlist management and SMS notifications."
  },

  // Travel
  {
    id: 22,
    title: "Wander",
    category: "Travel",
    industry: "Travel",
    year: "2024",
    tags: ["Flutter", "Firebase", "Maps API"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    description: "Travel companion app featuring local recommendations and itinerary planning."
  },
  {
    id: 23,
    title: "AdventureSeeker",
    category: "Travel",
    industry: "Travel",
    year: "2023",
    tags: ["React", "MongoDB", "Mapbox"],
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
    description: "Adventure travel booking platform connecting travelers with local guides and experiences."
  },
  {
    id: 24,
    title: "JetSet",
    category: "Mobile App",
    industry: "Travel",
    year: "2025",
    tags: ["React Native", "GraphQL", "Stripe"],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
    description: "Flight booking app with price alerts, loyalty program, and travel expense tracking."
  },

  // Fitness
  {
    id: 25,
    title: "Finesse Fitness",
    category: "Health & Wellness",
    industry: "Fitness",
    year: "2024",
    tags: ["React", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    description: "Fitness tracking app with personalized workout plans and nutrition guidance."
  },
  {
    id: 26,
    title: "YogaFlow",
    category: "Health & Wellness",
    industry: "Fitness",
    year: "2023",
    tags: ["Vue.js", "Firebase", "Video Streaming"],
    image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b",
    description: "Online yoga platform with live and on-demand classes for all skill levels."
  },
  {
    id: 27,
    title: "GymBuddy",
    category: "Mobile App",
    industry: "Fitness",
    year: "2025",
    tags: ["Swift", "Kotlin", "Bluetooth Integration"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
    description: "Gym companion app that connects with fitness equipment and tracks workout progress."
  },
];

// Get unique industries
const industries = [...new Set(projects.map(project => project.industry))];

const Showcase = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [loading, setLoading] = useState(true);
  
  // Simulate loading delay for demonstration
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Filter projects based on active tab
  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => {
        if (activeTab === "web") {
          return !project.category.toLowerCase().includes("mobile");
        } else if (activeTab === "mobile") {
          return project.category.toLowerCase().includes("mobile");
        }
        return false;
      });

  // Group projects by industry
  const projectsByIndustry = {};
  
  filteredProjects.forEach(project => {
    if (!projectsByIndustry[project.industry]) {
      projectsByIndustry[project.industry] = [];
    }
    projectsByIndustry[project.industry].push(project);
  });

  return (
    <Layout>
      <section className="py-20 px-6 md:px-10 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">
              Our Work
            </h1>
            <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
              Explore our portfolio of projects that showcase our expertise in creating 
              exceptional digital experiences across various industries.
            </p>
          </div>

          {/* Tabs Navigation */}
          <Tabs defaultValue="all" className="mb-16" onValueChange={(value) => {
            setActiveTab(value);
            setLoading(true);
            setTimeout(() => setLoading(false), 600);
          }}>
            <div className="flex justify-center mb-12">
              <TabsList className="bg-zinc-100">
                <TabsTrigger value="all" className="text-sm font-medium">All Projects</TabsTrigger>
                <TabsTrigger value="web" className="text-sm font-medium">Websites</TabsTrigger>
                <TabsTrigger value="mobile" className="text-sm font-medium">Mobile Apps</TabsTrigger>
              </TabsList>
            </div>
            
            {/* Tab Content */}
            <TabsContent value="all" className="space-y-24">
              {loading ? (
                <ShowcaseSkeletonGrid />
              ) : (
                Object.keys(projectsByIndustry).map(industry => (
                  <div key={industry} className="space-y-8">
                    <div className="border-b border-zinc-200 pb-2">
                      <h2 className="text-2xl font-semibold text-zinc-900">{industry}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {projectsByIndustry[industry].map((project) => (
                        <ProjectCard key={project.id} project={project} />
                      ))}
                    </div>
                  </div>
                ))
              )}
            </TabsContent>
            
            {/* Duplicate the same structure for other tabs */}
            <TabsContent value="web" className="space-y-24">
              {loading ? (
                <ShowcaseSkeletonGrid />
              ) : (
                Object.keys(projectsByIndustry).map(industry => (
                  <div key={industry} className="space-y-8">
                    <div className="border-b border-zinc-200 pb-2">
                      <h2 className="text-2xl font-semibold text-zinc-900">{industry}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {projectsByIndustry[industry].map((project) => (
                        <ProjectCard key={project.id} project={project} />
                      ))}
                    </div>
                  </div>
                ))
              )}
            </TabsContent>
            
            <TabsContent value="mobile" className="space-y-24">
              {loading ? (
                <ShowcaseSkeletonGrid />
              ) : (
                Object.keys(projectsByIndustry).map(industry => (
                  <div key={industry} className="space-y-8">
                    <div className="border-b border-zinc-200 pb-2">
                      <h2 className="text-2xl font-semibold text-zinc-900">{industry}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {projectsByIndustry[industry].map((project) => (
                        <ProjectCard key={project.id} project={project} />
                      ))}
                    </div>
                  </div>
                ))
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="group overflow-hidden bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-100 h-full flex flex-col">
      {/* Image Section - Fixed rectangular shape with consistent aspect ratio */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-400 to-purple-600 w-full">
        <div className="aspect-[16/9] w-full">
          <ProgressiveImage 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            width={800}
            height={450}
          />
        </div>
      </div>
      
      {/* Content Section - Fixed height for consistency */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-2">
          <div className="flex items-baseline gap-2">
            <h3 className="text-lg font-semibold text-zinc-900 truncate">{project.title}</h3>
            <span className="text-sm text-zinc-500 whitespace-nowrap">• {project.category}</span>
          </div>
          <p className="text-zinc-700 text-sm mt-2 mb-3 line-clamp-2">{project.description}</p>
        </div>
        
        {/* Tech Tags */}
        <div className="mt-auto">
          <p className="text-xs text-purple-600 mb-4">{project.tags.join(', ')}</p>
          
          {/* CTA Button */}
          <Button 
            asChild
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 flex items-center justify-center gap-2"
          >
            <a href={`/showcase/${project.id}`}>
              View Case Study
              <ArrowRight size={16} className="ml-1" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Showcase;


import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const webProjects = [
  {
    id: 1,
    title: "Rapha Cycling",
    category: "E-Commerce",
    year: "2025",
    tags: ["React", "Shopify", "Branding"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    description: "Complete e-commerce platform redesign with custom product configurator."
  },
  {
    id: 2,
    title: "Horizon Finance",
    category: "FinTech",
    year: "2025",
    tags: ["Web App", "NextJS", "Motion Design"],
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    description: "Investment portfolio tracking application with real-time data visualization."
  },
  {
    id: 3,
    title: "Verde Living",
    category: "Interior Design",
    year: "2024",
    tags: ["WordPress", "E-commerce", "Custom CMS"],
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    description: "Luxury interior design portfolio with integrated e-commerce functionality."
  },
  {
    id: 4,
    title: "CodeCraft Academy",
    category: "EdTech",
    year: "2024",
    tags: ["React", "Node.js", "GraphQL"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    description: "Online learning platform with interactive code editor and assessment system."
  },
  {
    id: 5,
    title: "Orbital Analytics",
    category: "SaaS",
    year: "2023",
    tags: ["Vue.js", "Python", "Data Visualization"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    description: "Business intelligence dashboard with customizable reports and analytics."
  },
];

const mobileProjects = [
  {
    id: 6,
    title: "Nomad Health",
    category: "Healthcare",
    year: "2024",
    tags: ["Mobile App", "React Native", "UI Design"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description: "Telemedicine platform connecting patients with healthcare providers."
  },
  {
    id: 7,
    title: "Urban Eats",
    category: "Food Delivery",
    year: "2023",
    tags: ["iOS", "Android", "UX Research"],
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    description: "Food delivery app with real-time order tracking and restaurant discovery."
  },
  {
    id: 8,
    title: "Wander",
    category: "Travel",
    year: "2024",
    tags: ["Flutter", "Firebase", "Maps API"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    description: "Travel companion app featuring local recommendations and itinerary planning."
  },
];

const Showcase = () => {
  return (
    <Layout>
      <section className="py-20 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Our Work
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Explore our portfolio of projects that showcase our expertise in creating 
              exceptional digital experiences across various industries.
            </p>
          </div>

          <Tabs defaultValue="all" className="mb-12">
            <TabsList className="mb-8">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="web">Websites</TabsTrigger>
              <TabsTrigger value="mobile">Mobile Apps</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {[...webProjects, ...mobileProjects].map((project) => (
                  <div 
                    key={project.id}
                    className="group overflow-hidden"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden rounded-lg mb-6">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <h2 className="text-2xl font-semibold text-primary">{project.title}</h2>
                      <span className="text-sm text-gray-500">{project.year}</span>
                    </div>
                    <p className="text-gray-600 mb-3">{project.category}</p>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="text-xs py-1 px-2 bg-gray-100 text-gray-600 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button className="bg-accent text-white hover:bg-accent/90">
                      View Case Study
                    </Button>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="web">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {webProjects.map((project) => (
                  <div 
                    key={project.id}
                    className="group overflow-hidden"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden rounded-lg mb-6">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <h2 className="text-2xl font-semibold text-primary">{project.title}</h2>
                      <span className="text-sm text-gray-500">{project.year}</span>
                    </div>
                    <p className="text-gray-600 mb-3">{project.category}</p>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="text-xs py-1 px-2 bg-gray-100 text-gray-600 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button className="bg-accent text-white hover:bg-accent/90">
                      View Case Study
                    </Button>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="mobile">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {mobileProjects.map((project) => (
                  <div 
                    key={project.id}
                    className="group overflow-hidden"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden rounded-lg mb-6">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <h2 className="text-2xl font-semibold text-primary">{project.title}</h2>
                      <span className="text-sm text-gray-500">{project.year}</span>
                    </div>
                    <p className="text-gray-600 mb-3">{project.category}</p>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="text-xs py-1 px-2 bg-gray-100 text-gray-600 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button className="bg-accent text-white hover:bg-accent/90">
                      View Case Study
                    </Button>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Showcase;

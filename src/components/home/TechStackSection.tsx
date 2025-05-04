
import React from "react";
import { Code, Server, Palette } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TechIcon } from "@/components/logos";

// Define technology categories with their icons and proficiency levels
const techStacks = {
  frontend: [
    { name: "React", icon: "react", level: "Expert" },
    { name: "Next.js", icon: "next-js", level: "Expert" },
    { name: "TypeScript", icon: "typescript", level: "Expert" },
    { name: "Tailwind CSS", icon: "tailwind", level: "Expert" },
    { name: "Framer Motion", icon: "framer", level: "Advanced" },
    { name: "Three.js", icon: "three", level: "Advanced" },
    { name: "WebGL", icon: "webgl", level: "Advanced" }
  ],
  backend: [
    { name: "Node.js", icon: "node", level: "Expert" },
    { name: "Express", icon: "express", level: "Expert" },
    { name: "GraphQL", icon: "graphql", level: "Advanced" },
    { name: "PostgreSQL", icon: "postgres", level: "Advanced" },
    { name: "MongoDB", icon: "mongo", level: "Advanced" },
    { name: "Firebase", icon: "firebase", level: "Advanced" },
    { name: "Supabase", icon: "supabase", level: "Advanced" }
  ],
  design: [
    { name: "Figma", icon: "figma", level: "Expert" },
    { name: "Adobe XD", icon: "xd", level: "Expert" },
    { name: "Photoshop", icon: "photoshop", level: "Advanced" },
    { name: "Illustrator", icon: "illustrator", level: "Advanced" },
    { name: "After Effects", icon: "aftereffects", level: "Advanced" },
    { name: "Blender", icon: "blender", level: "Intermediate" },
    { name: "Cinema 4D", icon: "cinema4d", level: "Intermediate" }
  ]
};

const TechStackSection = () => {
  return (
    <section className="py-12 md:py-16 px-6 md:px-10 lg:px-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-950">Our Technology Stack</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We leverage cutting-edge technologies to deliver exceptional digital experiences that are both beautiful and functional.
          </p>
        </div>
        
        <Tabs defaultValue="frontend" className="w-full">
          <div className="flex justify-center mb-6">
            <TabsList className="grid grid-cols-3 w-full max-w-md backdrop-blur-sm bg-white/80 shadow-sm">
              <TabsTrigger value="frontend" className="flex items-center gap-2 py-3">
                <Code size={18} />
                <span className="hidden sm:inline">Frontend</span>
              </TabsTrigger>
              <TabsTrigger value="backend" className="flex items-center gap-2 py-3">
                <Server size={18} />
                <span className="hidden sm:inline">Backend</span>
              </TabsTrigger>
              <TabsTrigger value="design" className="flex items-center gap-2 py-3">
                <Palette size={18} />
                <span className="hidden sm:inline">Design</span>
              </TabsTrigger>
            </TabsList>
          </div>
          
          <div className="mt-4">
            <TabsContent value="frontend" className="mt-0">
              <Card className="border border-gray-100 shadow-md bg-white/70 backdrop-blur-lg">
                <CardHeader className="pb-2">
                  <CardTitle>Frontend Technologies</CardTitle>
                  <CardDescription>
                    Our frontend stack focuses on performance, aesthetics and user experience
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {techStacks.frontend.map(tech => (
                      <div 
                        key={tech.name} 
                        className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all"
                      >
                        <div className="mb-3 text-primary">
                          <TechIcon name={tech.icon} size={42} />
                        </div>
                        <span className="font-medium text-gray-800 mb-1">{tech.name}</span>
                        <Badge variant="outline" className="bg-accent/5">{tech.level}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="backend" className="mt-0">
              <Card className="border border-gray-100 shadow-md bg-white/70 backdrop-blur-lg">
                <CardHeader className="pb-2">
                  <CardTitle>Backend Technologies</CardTitle>
                  <CardDescription>
                    Powerful and scalable backend solutions for your digital products
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {techStacks.backend.map(tech => (
                      <div 
                        key={tech.name} 
                        className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all"
                      >
                        <div className="mb-3 text-primary">
                          <TechIcon name={tech.icon} size={42} />
                        </div>
                        <span className="font-medium text-gray-800 mb-1">{tech.name}</span>
                        <Badge variant="outline" className="bg-accent/5">{tech.level}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="design" className="mt-0">
              <Card className="border border-gray-100 shadow-md bg-white/70 backdrop-blur-lg">
                <CardHeader className="pb-2">
                  <CardTitle>Design Tools</CardTitle>
                  <CardDescription>
                    Advanced design capabilities for stunning visual experiences
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {techStacks.design.map(tech => (
                      <div 
                        key={tech.name} 
                        className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all"
                      >
                        <div className="mb-3 text-primary">
                          <TechIcon name={tech.icon} size={42} />
                        </div>
                        <span className="font-medium text-gray-800 mb-1">{tech.name}</span>
                        <Badge variant="outline" className="bg-accent/5">{tech.level}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default TechStackSection;

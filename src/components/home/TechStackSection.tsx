
import React from "react";
import { Code, FileText, Settings } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const techStacks = {
  frontend: [
    { name: "React", level: "Expert" },
    { name: "Next.js", level: "Expert" },
    { name: "TypeScript", level: "Expert" },
    { name: "Tailwind CSS", level: "Expert" },
    { name: "Framer Motion", level: "Advanced" },
    { name: "Three.js", level: "Advanced" },
    { name: "WebGL", level: "Advanced" },
  ],
  backend: [
    { name: "Node.js", level: "Expert" },
    { name: "Express", level: "Expert" },
    { name: "GraphQL", level: "Advanced" },
    { name: "PostgreSQL", level: "Advanced" },
    { name: "MongoDB", level: "Advanced" },
    { name: "Firebase", level: "Advanced" },
    { name: "Supabase", level: "Advanced" },
  ],
  design: [
    { name: "Figma", level: "Expert" },
    { name: "Adobe XD", level: "Expert" },
    { name: "Photoshop", level: "Advanced" },
    { name: "Illustrator", level: "Advanced" },
    { name: "After Effects", level: "Advanced" },
    { name: "Blender", level: "Intermediate" },
    { name: "Cinema 4D", level: "Intermediate" },
  ],
};

const TechStackSection = () => {
  return (
    <section className="py-24 px-6 md:px-10 lg:px-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Technology Stack</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We leverage cutting-edge technologies to deliver exceptional digital experiences that are both beautiful and functional.
          </p>
        </div>
        
        <Tabs defaultValue="frontend" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="frontend" className="flex items-center gap-2">
                <Code size={18} />
                <span className="hidden sm:inline">Frontend</span>
              </TabsTrigger>
              <TabsTrigger value="backend" className="flex items-center gap-2">
                <Settings size={18} />
                <span className="hidden sm:inline">Backend</span>
              </TabsTrigger>
              <TabsTrigger value="design" className="flex items-center gap-2">
                <FileText size={18} />
                <span className="hidden sm:inline">Design</span>
              </TabsTrigger>
            </TabsList>
          </div>
          
          <div className="mt-4">
            <TabsContent value="frontend" className="mt-0">
              <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-lg">
                <CardHeader>
                  <CardTitle>Frontend Technologies</CardTitle>
                  <CardDescription>
                    Our frontend stack focuses on performance, aesthetics and user experience.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {techStacks.frontend.map((tech) => (
                      <div key={tech.name} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all">
                        <span className="font-medium text-primary">{tech.name}</span>
                        <Badge variant="outline" className="mt-2">{tech.level}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="backend" className="mt-0">
              <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-lg">
                <CardHeader>
                  <CardTitle>Backend Technologies</CardTitle>
                  <CardDescription>
                    Powerful and scalable backend solutions for your digital products.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {techStacks.backend.map((tech) => (
                      <div key={tech.name} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all">
                        <span className="font-medium text-primary">{tech.name}</span>
                        <Badge variant="outline" className="mt-2">{tech.level}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="design" className="mt-0">
              <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-lg">
                <CardHeader>
                  <CardTitle>Design Tools</CardTitle>
                  <CardDescription>
                    Advanced design capabilities for stunning visual experiences.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {techStacks.design.map((tech) => (
                      <div key={tech.name} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all">
                        <span className="font-medium text-primary">{tech.name}</span>
                        <Badge variant="outline" className="mt-2">{tech.level}</Badge>
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

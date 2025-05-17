import React from "react";
import { Code, Server, Palette } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Define technology categories with their image URLs and proficiency levels
const techStacks = {
  frontend: [
    { name: "React", image: "techstack/reactjs.jpg", },
    { name: "Next.js", image: "/techstack/next.jpg",  },
    { name: "TypeScript", image: "/techstack/type.jpg",  },
    { name: "Tailwind CSS", image: "/techstack/tailwind.jpg", },
    { name: "Shadcn UI", image: "/techstack/prisma.jpg", },
    { name: "Frame motion", image: "/techstack/framer.jpg",  },
    { name: "Swift Ui", image: "/techstack/swiftui.jpg", },
    { name: "Vite", image: "/techstack/vite.jpg",  },
    { name: "Vue.js", image: "/techstack/vue.jpg", },
    { name: "Flutter", image: "/techstack/flutter.jpg",  },
  ],
  backend: [
    { name: "Node.js", image: "/techstack/nodejs.jpg",  },
    { name: "Prisma", image: "/techstack/prrrr.jpg", },
    { name: "MongoDB", image: "/techstack/mango.jpg",  },
    { name: "Superbase", image:"/techstack/supabase.jpg",  },
    { name: "Firebase", image: "/techstack/fir.jpg",  },
    { name: "Railway", image: "/techstack/railway.jpg",  },
    { name: "Clerk", image: "/techstack/clerk.jpg",  },
    { name: "Docker", image: "/techstack/docor.jpg",  },
    { name: "AWS", image: "/techstack/aws.jpg", },
    { name: "PostgreSQL", image: "/techstack/postgras.jpg",  },
  ],
  design: [
    { name: "Figma", image: "/techstack/figma.jpg",  },
    { name: "Framer Motion", image: "/techstack/framer.jpg",  },
    { name: "Webflow", image: "/techstack/webflow.jpg",  },
    { name: "Sketch", image: "/techstack/scketch.jpg",  },
    { name: "planetscale", image: "/techstack/planet.jpg",  },
    { name: "Redis", image: "/techstack/redis.jpg",  },
    { name: "Notion", image: "/techstack/notion.jpg",  },
    { name: "Stripe", image: "/techstack/strip.jpg",  },
    { name: "Jira", image: "/techstack/jira.jpg",  },
    { name: "vercel", image: "/techstack/vercel.jpg",  },
  ],
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
            <TabsList className="grid grid-cols-3 w-full max-w-md backdrop-blur-sm bg-purple-50/80 shadow-sm">
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
  {["frontend", "backend", "design"].map(category => (
    <TabsContent key={category} value={category} className="mt-0">
      <Card className="border border-gray-100 shadow-md bg-white/70 backdrop-blur-lg">
        <CardHeader className="pb-2">
          <CardTitle>
            {category.charAt(0).toUpperCase() + category.slice(1)} {category === "design" ? "Tools" : "Technologies"}
          </CardTitle>
          <CardDescription>
            {category === "frontend" && "Our frontend stack focuses on performance, aesthetics and user experience"}
            {category === "backend" && "Powerful and scalable backend solutions for your digital products"}
            {category === "design" && "Advanced design capabilities for stunning visual experiences"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {techStacks[category].slice(0, 10).map((tech, index) => {
              // Predefined Tailwind border colors for hover effect (simulating 10%, 20%, etc.)
              const borderColors = [
                'hover:border-purple-500',   // 10%
                'hover:border-purple-500', // 20%
                'hover:border-purple-500',    // 30%
                'hover:border-purple-500',  // 40%
                'hover:border-purple-500', // 50%
                'hover:border-purple-500',   // 60%
                'hover:border-purple-500',   // 70%
                'hover:border-purple-500', // 80%
                'hover:border-purple-500', // 90%
                'hover:border-purple-500',   // 100%
              ];
              // Select border color based on index, cycling through the array
              const hoverBorderClass = borderColors[index % borderColors.length];

              return (
                <div
                  key={tech.name}
                  className={`flex flex-col items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:scale-105 hover:shadow-md transition-all ${hoverBorderClass}`}
                >
                  <div className="mb-3 text-primary">
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="h-14 w-14 object-contain"
                    />
                  </div>
                  <span className="font-medium text-gray-800 mb-1">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  ))}
</div>
        </Tabs>
      </div>
    </section>
  );
};

export default TechStackSection;
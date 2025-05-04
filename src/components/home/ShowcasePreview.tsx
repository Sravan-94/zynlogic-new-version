import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const featuredProjects = [{
  id: 1,
  title: "Rapha Cycling",
  category: "E-Commerce",
  year: "2025",
  tags: ["React", "Shopify", "Branding"],
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
}, {
  id: 2,
  title: "Nomad Health",
  category: "Healthcare",
  year: "2024",
  tags: ["Mobile App", "React Native", "UI Design"],
  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
}, {
  id: 3,
  title: "Horizon Finance",
  category: "FinTech",
  year: "2025",
  tags: ["Web App", "NextJS", "Motion Design"],
  image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1"
}];
const ShowcasePreview = () => {
  return <section className="py-12 md:py-16 px-6 md:px-10 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-950">Selected Work</h2>
            <p className="mt-3 text-gray-600 max-w-2xl">
              A glimpse of our recent projects that showcase our expertise
            </p>
          </div>
          <Link to="/showcase" className="mt-4 md:mt-0">
            <Button variant="outline" className="hover:bg-gray-100">View All Projects</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredProjects.map(project => <Card key={project.id} className="overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="relative aspect-[4/3]">
                <img src={project.image} alt={project.title} className="object-cover w-full h-full" loading="lazy" />
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-zinc-950">{project.title}</h3>
                  <span className="text-sm text-gray-500">{project.year}</span>
                </div>
                <p className="text-gray-600 mb-2">{project.category}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, index) => <span key={index} className="text-xs py-1 px-2 bg-gray-100 text-gray-600 rounded">
                      {tag}
                    </span>)}
                </div>
                <Button asChild variant="ghost" className="w-full justify-start pl-0 hover:pl-2 transition-all">
                  <Link to="/showcase">View Case Study</Link>
                </Button>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default ShowcasePreview;
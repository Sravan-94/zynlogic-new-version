import React from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectDetail = () => {
  const { id } = useParams();
  const projectId = Number(id) || 1;
  
  // Current timestamp for cache busting
  const timestamp = Date.now();
  
  // Special case for Project 1 (Suitcase App)
  if (projectId === 1) {
    return (
      <Layout>
        <div className="py-16 px-6 md:px-10 bg-gray-50 min-h-screen">
          <div className="max-w-4xl mx-auto">
            {/* Back navigation */}
            <Link to="/our-work" className="inline-flex items-center text-sm text-zinc-600 hover:text-accent mb-8">
              <ArrowLeft size={16} className="mr-2" />
              Back to all projects
            </Link>
            
            {/* Project header */}
            <div className="mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Smart Luggage Tracker</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                  Travel
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                  Mobile App
                </span>
              </div>
            </div>
            
            {/* Project image */}
            <div className="w-full h-auto aspect-[16/9] rounded-lg overflow-hidden mb-10">
              <img 
                src={`/assets/images/suitcase-app.jpg?t=${timestamp}`}
                alt="Smart Luggage Tracker App"
                className="w-full h-full object-contain bg-gray-100"
              />
            </div>
            
            {/* Project details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="md:col-span-2">
                <h2 className="text-xl font-bold text-zinc-900 mb-4">Overview</h2>
                <p className="text-zinc-700 mb-6 leading-relaxed">
                  The Smart Luggage Tracker is a cutting-edge mobile application designed for travelers who want to keep track of their luggage. Using Bluetooth and GPS technology, the app connects to smart luggage tags, allowing users to monitor the location of their suitcases in real-time.
                </p>
                <p className="text-zinc-700 mb-6 leading-relaxed">
                  Beyond simple tracking, the app offers premium features including remote unlocking, proximity alerts, and even built-in weighing functionality to help travelers avoid overweight baggage fees. The clean, minimalist interface ensures ease of use even in stressful travel situations.
                </p>
                
                <h2 className="text-xl font-bold text-zinc-900 mb-4">Features</h2>
                <ul className="list-disc pl-5 text-zinc-700 space-y-2 mb-6">
                  <li>Real-time luggage tracking with GPS and Bluetooth</li>
                  <li>Remote locking and unlocking functionality</li>
                  <li>Built-in digital weighing system</li>
                  <li>Proximity alerts when luggage is approaching</li>
                  <li>Battery level indicators for smart tags</li>
                  <li>Travel history and statistics</li>
                  <li>Airline integration for flight information</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm h-fit">
                <h2 className="text-xl font-bold text-zinc-900 mb-4">Project Info</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-zinc-500">Client</h3>
                    <p className="text-zinc-900">TravelTech Innovations</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-zinc-500">Year</h3>
                    <p className="text-zinc-900">2023</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-zinc-500">Technologies</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">React Native</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">Bluetooth API</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">GPS Integration</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">Firebase</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">IoT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Call to action */}
            <div className="bg-purple-100 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-purple-900 mb-4">Ready to start your project?</h2>
              <p className="text-purple-800 mb-6 max-w-2xl mx-auto">
                Let's discuss how we can help bring your vision to life with our expertise in digital solutions.
              </p>
              <Button size="lg" className="bg-purple-700 hover:bg-purple-800">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
  
  // This would typically come from an API or database
  // Here we're just creating a mock project
  const project = {
    id: projectId,
    title: `Project ${projectId}`,
    category: "Sample Category",
    type: "Website",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    description: "This is a sample project showcasing our portfolio work. In a real application, this data would be fetched from a backend or CMS.",
    client: "Sample Client",
    year: 2023,
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    features: [
      "Responsive design",
      "Modern UI/UX",
      "Performance optimized",
      "Accessibility compliant"
    ]
  };

  return (
    <Layout>
      <div className="py-16 px-6 md:px-10 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto">
          {/* Back navigation */}
          <Link to="/our-work" className="inline-flex items-center text-sm text-zinc-600 hover:text-accent mb-8">
            <ArrowLeft size={16} className="mr-2" />
            Back to all projects
          </Link>
          
          {/* Project header */}
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                {project.category}
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                {project.type}
              </span>
            </div>
          </div>
          
          {/* Project image */}
          <div className="w-full h-auto aspect-[16/9] rounded-lg overflow-hidden mb-10">
            <img 
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Project details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <h2 className="text-xl font-bold text-zinc-900 mb-4">Overview</h2>
              <p className="text-zinc-700 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <h2 className="text-xl font-bold text-zinc-900 mb-4">Features</h2>
              <ul className="list-disc pl-5 text-zinc-700 space-y-2 mb-6">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm h-fit">
              <h2 className="text-xl font-bold text-zinc-900 mb-4">Project Info</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-zinc-500">Client</h3>
                  <p className="text-zinc-900">{project.client}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-zinc-500">Year</h3>
                  <p className="text-zinc-900">{project.year}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-zinc-500">Technologies</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to action */}
          <div className="bg-purple-100 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-purple-900 mb-4">Ready to start your project?</h2>
            <p className="text-purple-800 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life with our expertise in digital solutions.
            </p>
            <Button size="lg" className="bg-purple-700 hover:bg-purple-800">
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetail;

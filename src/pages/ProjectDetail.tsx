import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getProjectById, Project } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!id) {
    return (
      <Layout>
        <div className="container mx-auto py-12">
          <h1 className="text-3xl font-bold text-zinc-900">Project Not Found</h1>
          <p className="text-zinc-700 mt-4">No project ID was provided.</p>
          <Link to="/our-work" className="inline-block mt-6 text-primary hover:underline">
            ← Back to Our Work
          </Link>
        </div>
      </Layout>
    );
  }

  const project: Project | null = getProjectById(id);

  if (!project) {
    return (
      <Layout>
        <div className="container mx-auto py-12">
          <h1 className="text-3xl font-bold text-zinc-900">Project Not Found</h1>
          <p className="text-zinc-700 mt-4">No project was found with the ID: {id}</p>
          <Link to="/our-work" className="inline-block mt-6 text-primary hover:underline">
            ← Back to Our Work
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        {/* Header with back button */}
        <div className="container mx-auto py-6 px-4">
          <Link to="/our-work" className="inline-flex items-center text-zinc-600 hover:text-zinc-900 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to all projects
          </Link>
          
          <h1 className="text-4xl font-bold text-zinc-900 mt-6">{project.title}</h1>
          
          <div className="flex gap-2 mt-3">
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
              {project.category}
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
              {project.type}
            </span>
          </div>
        </div>

        {/* Main project content */}
        <div className="container mx-auto px-4 py-8">
          {/* Project image and details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Project image */}
            <div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <div className="aspect-[3/2] w-full relative">
                  <img 
                    src={project.detailImageUrl || project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
              </div>
            </div>
            
            {/* Project overview */}
            <div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-zinc-900 mb-4">{project.overview?.title || 'Overview'}</h2>
                <p className="text-zinc-700 mb-6">{project.overview?.content || project.description}</p>
                
                {project.overview?.additionalContent && (
                  <p className="text-zinc-700 mb-6">{project.overview.additionalContent}</p>
                )}
                
                {project.overview?.highlightPoints && project.overview.highlightPoints.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-zinc-500 mb-2">Key Highlights</h3>
                    <ul className="space-y-2">
                      {project.overview.highlightPoints.map((point, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-5 h-5 bg-primary rounded-full mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs mt-0.5">✓</span>
                          <span className="text-zinc-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <h3 className="text-sm font-medium text-zinc-500 mb-2">Features</h3>
                <ul className="space-y-2 mb-6">
                  {project.features && project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-5 h-5 bg-primary rounded-full mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs mt-0.5">✓</span>
                      <span className="text-zinc-700">{feature}</span>
                    </li>
                  ))}
                  {(!project.features || project.features.length === 0) && (
                    <li className="text-zinc-700">No features specified</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Three-column section: Project Info, Client Feedback, Project Video */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Project Info */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-zinc-900 mb-4">{project.projectInfo?.title || 'Project Info'}</h2>
              
              <div className="mb-4">
                <h3 className="text-sm font-medium text-zinc-500">Client</h3>
                <p className="text-zinc-900">{project.client || 'Not specified'}</p>
              </div>
              
              <div className="mb-4">
                <h3 className="text-sm font-medium text-zinc-500">Year</h3>
                <p className="text-zinc-900">{project.year}</p>
              </div>
              
              {project.projectInfo?.additionalDetails && project.projectInfo.additionalDetails.length > 0 && (
                <>
                  {project.projectInfo.additionalDetails.map((detail, index) => (
                    <div key={index} className="mb-4">
                      <h3 className="text-sm font-medium text-zinc-500">{detail.label}</h3>
                      <p className="text-zinc-900">{detail.value}</p>
                    </div>
                  ))}
                </>
              )}
              
              <div className="mb-4">
                <h3 className="text-sm font-medium text-zinc-500">Technologies</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies && project.technologies.map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                  {(!project.technologies || project.technologies.length === 0) && (
                    <p className="text-zinc-700">No technologies specified</p>
                  )}
                </div>
              </div>
            </div>
            
            {/* Client Feedback */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-zinc-900 mb-4">{project.clientFeedback?.title || 'Client Feedback'}</h2>
              
              {project.clientFeedback?.testimonials && project.clientFeedback.testimonials.length > 0 ? (
                <div className="space-y-6">
                  {project.clientFeedback.testimonials.map((testimonial, index) => (
                    <div key={index} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
                      <p className="text-zinc-700 italic mb-4">"{testimonial.message}"</p>
                      <div className="flex mb-3">
                        {Array.from({ length: testimonial.rating }).map((_, idx) => (
                          <span key={idx} className="text-yellow-400 text-xl">★</span>
                        ))}
                        {Array.from({ length: 5 - testimonial.rating }).map((_, idx) => (
                          <span key={idx} className="text-gray-300 text-xl">★</span>
                        ))}
                      </div>
                      <div className="flex items-center">
                        {testimonial.clientImage && (
                          <img 
                            src={testimonial.clientImage} 
                            alt={testimonial.clientName}
                            className="w-10 h-10 rounded-full mr-3 object-cover"
                          />
                        )}
                        <div>
                          <p className="font-medium text-zinc-900">{testimonial.clientName}</p>
                          <p className="text-sm text-zinc-500">{testimonial.clientRole}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : project.review ? (
                <>
                  <p className="text-zinc-700 italic mb-4">"{project.review.message}"</p>
                  <div className="flex mb-3">
                    {Array.from({ length: project.review.rating }).map((_, idx) => (
                      <span key={idx} className="text-yellow-400 text-xl">★</span>
                    ))}
                    {Array.from({ length: 5 - project.review.rating }).map((_, idx) => (
                      <span key={idx} className="text-gray-300 text-xl">★</span>
                    ))}
                  </div>
                  <div>
                    <p className="font-medium text-zinc-900">{project.review.clientName}</p>
                    <p className="text-sm text-zinc-500">{project.review.clientRole}</p>
                  </div>
                </>
              ) : (
                <p className="text-zinc-700">No client feedback available for this project.</p>
              )}
            </div>
            
            {/* Project Video */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-zinc-900 mb-4">{project.projectVideo?.title || 'Project Video'}</h2>
              
              {project.projectVideo?.description && (
                <p className="text-zinc-700 mb-4">{project.projectVideo.description}</p>
              )}
              
              {project.videoUrl ? (
                <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src={project.videoUrl}
                    title="Project Video"
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : project.projectVideo?.thumbnailUrl ? (
                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img 
                    src={project.projectVideo.thumbnailUrl} 
                    alt="Video thumbnail" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                      <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-zinc-900 ml-1"></div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-100 rounded-lg p-4 text-center">
                  <p className="text-zinc-700">No video available for this project.</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Additional project-specific sections */}
          {project.additionalSections && project.additionalSections.length > 0 && (
            <div className="mt-12 space-y-8">
              {project.additionalSections.map((section, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h2 className="text-xl font-bold text-zinc-900 mb-4">{section.title}</h2>
                  
                  <div className={`${section.imageUrl ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : ''}` }>
                    <div>
                      <p className="text-zinc-700">{section.content}</p>
                    </div>
                    
                    {section.imageUrl && (
                      <div className="rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src={section.imageUrl} 
                          alt={section.title} 
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Call to action section */}
          <div className="bg-purple-100 rounded-lg p-8 text-center mt-12">
            <h2 className="text-2xl font-bold text-purple-900 mb-4">Ready to start your project?</h2>
            <p className="text-purple-800 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life with our expertise in digital solutions.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-purple-700 hover:bg-purple-800">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetail;

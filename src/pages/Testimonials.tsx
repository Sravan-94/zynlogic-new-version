import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

// Get testimonials from projects with videoUrl
const generateTestimonials = () => {
  return projects
    .filter(project => project.videoUrl && project.review) // Only include projects with video URLs and reviews
    .map(project => ({
      id: project.id,
      name: project.review.clientName,
      company: project.client || '',
      role: project.review.clientRole,
      videoUrl: project.videoUrl,
      projectName: project.title,
      thumbnail: project.imageUrl || `https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3`, // Default thumbnail if none available
      quote: project.review.message
    }));
};

// Dynamic testimonials from project data
const testimonials = [
  ...generateTestimonials()
];

const TestimonialCard = ({ testimonial }) => {
  const [showVideo, setShowVideo] = React.useState(false);
  
  return (
    <div className="bg-gray-900/70 backdrop-blur-md rounded-lg border border-gray-800 overflow-hidden">
      <div className="relative aspect-video">
        {showVideo ? (
          <iframe 
            src={testimonial.videoUrl} 
            title={`Testimonial from ${testimonial.name}`}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div 
            className="relative w-full h-full cursor-pointer group"
            onClick={() => setShowVideo(true)}
          >
            <img 
              src={testimonial.thumbnail} 
              alt={testimonial.name} 
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback image if the thumbnail fails to load
                const target = e.target as HTMLImageElement;
                target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3';
              }}
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center group-hover:bg-black/70 transition-all">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-white text-sm font-medium">{testimonial.projectName}</span>
            </div>
          </div>
        )}
      </div>
      <div className="p-6">
        <blockquote className="text-gray-300 mb-4">"{testimonial.quote}"</blockquote>
        <div className="flex items-center">
          <div>
            <h3 className="font-medium text-white">{testimonial.name}</h3>
            <p className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  // Re-generate testimonials on component mount to ensure they're up to date
  const [clientTestimonials, setClientTestimonials] = React.useState(testimonials);
  
  React.useEffect(() => {
    // Update testimonials whenever the component mounts
    setClientTestimonials(generateTestimonials());
  }, []);
  
  return (
    <Layout>
      <section className="py-20 px-6 md:px-10 lg:px-16 bg-black/90 backdrop-blur-lg text-white">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Client Testimonials
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear directly from our clients about their experiences working with Zynlogic
              and the impact our solutions have had on their businesses.
            </p>
            <p className="text-md text-gray-400 mt-4">
              {testimonials.length} video testimonials from our valued clients
            </p>
          </div>

          {/* Video Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {clientTestimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to work with us?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our growing list of satisfied clients and let us help you achieve your digital goals.
            </p>
            <Button asChild className="bg-accent text-white hover:bg-accent/90">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
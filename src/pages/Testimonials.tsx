import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Mock data for testimonials
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "TechSolutions Inc.",
    role: "CTO",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URLs
    thumbnail: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    quote: "Zynlogic transformed our digital presence with their innovative approach and technical expertise."
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "GrowthHub",
    role: "CEO",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URLs
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    quote: "Working with Zynlogic was a game-changer for our business. Their team delivered beyond our expectations."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    company: "DesignCraft",
    role: "Creative Director",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URLs
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    quote: "The UI/UX design work from Zynlogic completely revolutionized our product's user experience."
  },
  {
    id: 4,
    name: "David Wilson",
    company: "EcommerceGiants",
    role: "Head of Digital",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URLs
    thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    quote: "Our conversion rates increased by 45% after implementing Zynlogic's recommendations and solutions."
  },
  {
    id: 5,
    name: "Priya Patel",
    company: "HealthTech Innovations",
    role: "Product Manager",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URLs
    thumbnail: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    quote: "The mobile app Zynlogic developed for us has been downloaded over 500,000 times with exceptional user ratings."
  },
  {
    id: 6,
    name: "James Thompson",
    company: "EdTech Solutions",
    role: "Founder",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URLs
    thumbnail: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    quote: "Zynlogic's team understood our educational goals and created a platform that truly engages students."
  }
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
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/70 transition-all">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
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
          </div>

          {/* Video Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map(testimonial => (
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
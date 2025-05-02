
import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Founder & Creative Director",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
    bio: "With 15+ years of experience in design and branding, Sarah leads the creative vision for all client projects."
  },
  {
    id: 2,
    name: "David Chen",
    role: "Technical Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    bio: "David brings 12+ years of software engineering expertise, specializing in web and mobile application architecture."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "UX Strategy Lead",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    bio: "Emily combines user research with strategic thinking to create intuitive and engaging user experiences."
  },
  {
    id: 4,
    name: "Marcus Peters",
    role: "Brand Identity Designer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    bio: "Marcus crafts distinctive visual identities that express the essence of each brand we work with."
  },
];

const About = () => {
  return (
    <Layout>
      <section className="py-20 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
                About Us
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Lander Studio is a premium tech and branding agency creating exceptional 
                digital experiences that combine functional technology with visual identity.
              </p>
              <p className="text-gray-600 mb-8">
                Founded in 2018, we've grown from a small design studio into a full-service 
                digital agency with a team of specialists who are passionate about crafting 
                digital experiences that elevate brands and drive business growth.
              </p>
              <Button asChild className="bg-accent text-white hover:bg-accent/90">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
                alt="Team Collaboration" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-primary mb-10 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-primary mb-4">Excellence</h3>
                <p className="text-gray-600">
                  We're committed to delivering exceptional quality in every aspect of our work, 
                  from design and development to client communication and project management.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-primary mb-4">Innovation</h3>
                <p className="text-gray-600">
                  We continuously explore new technologies and creative approaches to solve 
                  complex problems and create distinctive digital experiences.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-primary mb-4">Collaboration</h3>
                <p className="text-gray-600">
                  We believe in the power of teamwork—both within our agency and with our clients—to 
                  achieve results that exceed expectations.
                </p>
              </div>
            </div>
          </div>

          {/* Team Members */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-primary mb-10 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div key={member.id} className="bg-white p-6 rounded-lg border border-gray-100">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold text-primary">{member.name}</h3>
                  <p className="text-accent mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-10 text-center">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <div>
                <ol className="space-y-12">
                  <li className="relative pl-10">
                    <span className="absolute left-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white">1</span>
                    <h3 className="text-xl font-semibold text-primary mb-2">Discovery</h3>
                    <p className="text-gray-600">We start by understanding your business, audience, and objectives through in-depth consultation.</p>
                  </li>
                  <li className="relative pl-10">
                    <span className="absolute left-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white">2</span>
                    <h3 className="text-xl font-semibold text-primary mb-2">Strategy</h3>
                    <p className="text-gray-600">We develop a comprehensive strategy aligned with your goals and tailored to your specific needs.</p>
                  </li>
                  <li className="relative pl-10">
                    <span className="absolute left-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white">3</span>
                    <h3 className="text-xl font-semibold text-primary mb-2">Design & Development</h3>
                    <p className="text-gray-600">Our design and development teams collaborate to create visually stunning and functionally robust solutions.</p>
                  </li>
                  <li className="relative pl-10">
                    <span className="absolute left-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white">4</span>
                    <h3 className="text-xl font-semibold text-primary mb-2">Launch & Support</h3>
                    <p className="text-gray-600">We ensure a smooth launch and provide ongoing support to maximize the impact of your digital presence.</p>
                  </li>
                </ol>
              </div>
              <div className="bg-gray-100 rounded-lg h-64 lg:h-auto flex items-center justify-center">
                <p className="text-gray-500 italic">Process Illustration Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

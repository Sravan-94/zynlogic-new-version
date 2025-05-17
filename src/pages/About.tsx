
import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import RadialOrbitalTimelineDemo from "@/components/ui/radial-orbital-timeline-demo";

const About = () => {
  return (
    <Layout>
      <section className="py-20 px-6 md:px-10 lg:px-16 bg-black/90 backdrop-blur-lg text-white">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                About Us
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Zynlogic is a premium tech and solutions company creating exceptional 
                digital experiences that combine functional technology with visual identity.
              </p>
              <p className="text-gray-300 mb-8">
                Founded in 2018, we've grown from a small technology studio into a full-service 
                digital agency with a team of specialists who are passionate about crafting 
                digital experiences that elevate brands and drive business growth.
              </p>
              <Button asChild className="bg-accent text-white hover:bg-accent/90">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
            <div>
              <img 
                src="/services/team.jpg" 
                alt="Team Collaboration" 
                className="rounded-lg shadow-xl w-full border border-gray-800"
              />
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-900/70 backdrop-blur-md p-8 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold text-white mb-4">Excellence</h3>
                <p className="text-gray-300">
                  We're committed to delivering exceptional quality in every aspect of our work, 
                  from design and development to client communication and project management.
                </p>
              </div>
              <div className="bg-gray-900/70 backdrop-blur-md p-8 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold text-white mb-4">Innovation</h3>
                <p className="text-gray-300">
                  We continuously explore new technologies and creative approaches to solve 
                  complex problems and create distinctive digital experiences.
                </p>
              </div>
              <div className="bg-gray-900/70 backdrop-blur-md p-8 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold text-white mb-4">Collaboration</h3>
                <p className="text-gray-300">
                  We believe in the power of teamwork—both within our agency and with our clients—to 
                  achieve results that exceed expectations.
                </p>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">Our Process</h2>
            <div className="text-center mb-8">
              <p className="text-gray-300 max-w-3xl mx-auto">
                At Zynlogic, we follow a structured yet flexible process that ensures successful project delivery while 
                adapting to each client's unique needs. Our interactive timeline shows how we move from concept to completion.
              </p>
            </div>
            <div className="h-[600px] w-full">
              <RadialOrbitalTimelineDemo />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;


import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="pt-20 pb-32 px-6 md:px-10 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-primary">
              We build brands through code & creativity.
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-md">
              Premium tech & branding agency creating exceptional digital experiences that combine functional technology with visual identity.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-accent text-white hover:bg-accent/90">
                <Link to="/showcase">See Our Work</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/contact">Book a Call</Link>
              </Button>
            </div>
          </div>
          <div className="mt-12 md:mt-0 md:w-1/2 animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
              alt="Digital Experience" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import React from "react";
import { Hero } from "@/components/ui/animated-hero";

const HeroSection = () => {
  return (
    <section className="pt-2 pb-12 px-6 md:px-10 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <Hero />
      </div>
    </section>
  );
};

export default HeroSection;

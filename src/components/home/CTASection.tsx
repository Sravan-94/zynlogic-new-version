
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 px-6 md:px-10 lg:px-16 bg-primary text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to elevate your digital presence?
        </h2>
        <p className="text-xl mb-10 text-white/80 max-w-2xl mx-auto">
          Let's collaborate to create exceptional digital experiences that stand out.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="bg-accent text-white hover:bg-accent/90">
            <Link to="/contact">Book a Call</Link>
          </Button>
          <Button asChild variant="outline" className="text-black hover:bg-black/10">
  <Link to="/our-work">Explore Our Work</Link>
</Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

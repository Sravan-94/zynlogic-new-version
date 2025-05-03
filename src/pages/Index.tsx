
import React from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import TechStackSection from "@/components/home/TechStackSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import ShowcasePreview from "@/components/home/ShowcasePreview";
import CategoriesPreview from "@/components/home/CategoriesPreview";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TechStackSection />
      <FeaturesSection />
      <CategoriesPreview />
      <ShowcasePreview />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;

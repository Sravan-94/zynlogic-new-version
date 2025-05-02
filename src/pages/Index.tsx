
import React from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import ShowcasePreview from "@/components/home/ShowcasePreview";
import CategoriesPreview from "@/components/home/CategoriesPreview";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesPreview />
      <CategoriesPreview />
      <ShowcasePreview />
      <CTASection />
    </Layout>
  );
};

export default Index;

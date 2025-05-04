
import React from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import LogoCloud from "@/components/home/LogoCloud";
import TechStackSection from "@/components/home/TechStackSection";
import IntegrationsSection from "@/components/home/IntegrationsSection";
import ShowcasePreview from "@/components/home/ShowcasePreview";
import CategoriesPreview from "@/components/home/CategoriesPreview";
import StatsSection from "@/components/home/StatsSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";
import HomeTestimonialsSection from "@/components/home/TestimonialsSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <LogoCloud />
      <TechStackSection />
      <IntegrationsSection />
      <ShowcasePreview />
      <CategoriesPreview />
      <StatsSection />
      <HomeTestimonialsSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;

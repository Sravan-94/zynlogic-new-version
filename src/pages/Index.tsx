import React from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import LogoCloud from "@/components/home/LogoCloud";
import TechStackSection from "@/components/home/TechStackSection";
import CategoriesPreview from "@/components/home/CategoriesPreview";
import StatsSection from "@/components/home/StatsSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";
import HomeTestimonialsSection from "@/components/home/TestimonialsSection";
import ServicesSection from "@/components/home/ServicesSection";
import VideoCarousel from "@/components/home/LiveTestMonials";
const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <LogoCloud />
      <ServicesSection />
      <VideoCarousel />
      <TechStackSection />
      <CategoriesPreview />
      <StatsSection />
      <HomeTestimonialsSection />
      <FAQSection />
      <CTASection />
      
    </Layout>
  );
};

export default Index;

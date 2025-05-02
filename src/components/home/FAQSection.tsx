
import React from "react";
import { MessageSquareQuote } from "lucide-react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a comprehensive range of digital services including web design and development, mobile app development, brand identity creation, UX strategy, creative tech implementations using WebGL and 3D, as well as AI integrations and automations."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on scope and complexity. A typical website project may take 6-12 weeks, while a comprehensive branding and digital product can take 3-6 months. We'll provide a detailed timeline during our consultation."
  },
  {
    question: "What is your design process?",
    answer: "Our design process involves discovery and research, strategy development, wireframing and prototyping, visual design, development, testing, and launch. We emphasize collaboration throughout, ensuring your vision guides our work."
  },
  {
    question: "Do you work with startups or enterprise clients?",
    answer: "We work with both startups and enterprise clients. Our flexible approach allows us to tailor our services to meet the unique needs and budgets of organizations at any stage of growth."
  },
  {
    question: "How do you handle project management and communication?",
    answer: "We use agile methodologies and dedicated project managers to ensure smooth execution. Communication happens through regular meetings, a dedicated Slack channel, and project management tools that provide full transparency on progress."
  },
  {
    question: "What makes your agency different from others?",
    answer: "Our unique blend of technical excellence and design sophistication sets us apart. We don't just build digital products—we craft comprehensive brand experiences that resonate with users and drive business results."
  }
];

const FAQSection = () => {
  return (
    <section className="py-24 px-6 md:px-10 lg:px-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm z-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-white/30 backdrop-blur-md shadow-lg border border-white/40">
              <MessageSquareQuote size={32} className="text-accent" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Get answers to common questions about our services, process, and approach.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="border-b border-white/30 last:border-b-0"
                >
                  <AccordionTrigger className="text-lg font-medium text-primary py-6 hover:text-accent hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700">
            Still have questions? We're here to help.
          </p>
          <div className="mt-6">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium transition-colors bg-accent text-white hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

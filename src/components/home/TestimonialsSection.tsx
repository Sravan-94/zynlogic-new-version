
import { TestimonialsSection } from "@/components/ui/testimonials-section";

const testimonials = [
  {
    author: {
      name: "Irshad Khan",
      handle: "@irshadk",
      avatar: "/irshad.jpg"
    },
    text: "Zynlogic transformed our outdated website into a stunning, high-performance platform. Our engagement rates skyrocketed, and the site finally reflects our brand’s true potential. They nailed every detail — highly recommend!",
  
  },
  {
    author: {
      name: "David Park",
      handle: "@davidtech",
      avatar: "/david.jpg"
    },
    text: "Zynlogic completely transformed our online presence. The new website is fast, mobile-friendly, and exactly what we envisioned. Their team was responsive and delivered on time. Highly recommended!",
    href: "https://twitter.com/davidtech"
  },
  {
    author: {
      name: "Neha ",
      handle: "@nehaS",
      avatar: "/neha.jpg"
    },
    text: "The app Zynlogic built for us has been a game-changer. It's clean, intuitive, and bug-free. Their team went above and beyond during testing and iterations. Great experience overall."
  },
  {
    author: {
      name: "Sofia Rodriguez",
      handle: "@sofiaml",
      avatar: "/Sofia Rodriguez.jpg"
    },
    text: "Finally, an AI tool that actually understands context! The accuracy in natural language processing is impressive."
  },
  {
    author: {
      name: "Sameer Kulkarni",
      handle: "@kulkarni",
      avatar: "/Sameer Kulkarni.jpg"
    },
    text: "We needed complex API integration with some AI features like chatbot support and Zynlogic delivered it seamlessly. Their tech knowledge is solid and they handled everything with clarity and confidence"
  },
  {
    author: {
      name: "Priya Deshmukh",
      handle: "@pDeshmukh",
      avatar: "/priya.jpg"
    },
    text: "We saw a 70% increase in leads after Zynlogic took over our digital marketing. Their team’s strategy, ad creatives, and analytics work was very impressive. Value for money."
  }
];

const HomeTestimonialsSection = () => {
  return (
    <TestimonialsSection
      title="Trusted by 10+ countries"
      description="Hundreds of organizations have entrusted Zynlogic to successfully execute and deliver their critical projects."
      testimonials={testimonials}
    />
  );

};

export default HomeTestimonialsSection;

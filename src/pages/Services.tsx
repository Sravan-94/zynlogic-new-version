// import React from "react";
// import Layout from "@/components/layout/Layout";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Check } from "lucide-react";
// import { Link } from "react-router-dom";
// import { AspectRatio } from "@/components/ui/aspect-ratio";
// import { cn } from "@/lib/utils";

// // Featured projects/services with consistent images matching the home page design
// const featuredServices = [
//   {
//     id: 1,
//     title: "Suitcase App",
//     imageSrc: "/lovable-uploads/dca407e2-46f7-49b9-b3c9-b9fce2b4984a.png",
//   },
//   {
//     id: 2,
//     title: "Exchango Dashboard",
//     imageSrc: "/lovable-uploads/69feb3ce-f73b-406c-b179-080d75bfcb04.png",
//   },
//   {
//     id: 3,
//     title: "Copay",
//     imageSrc: "/lovable-uploads/14dcc525-6005-4635-b3d5-dc0666171b56.png",
//   },
//   {
//     id: 4,
//     title: "Paws & Plans App",
//     imageSrc: "/lovable-uploads/d36006bb-4131-42d7-af02-a12cfdd587e5.png",
//   },
// ];

// // Detailed services information
// const services = [
//   {
//     id: 1,
//     title: "Web Design & Development",
//     description: "We create immersive, responsive websites that engage users and drive conversions. Using the latest technologies and design principles, we deliver solutions that are both visually stunning and functionally seamless.",
//     icon: "",
//     imageSrc: "/WhatsApp Image 2025-05-17 at 14.00.08_86b40642.jpg",
//     features: [
//       "Full-Stack SaaS Solutions",
//       "Microservices Architecture",
//       "React & Next.js Applications",
//       "E-commerce Solutions",
//       "API Design & Integration",
//       "Performance Optimization"
//     ]
//   },
//   {
//     id: 2,
//     title: "Mobile App Development",
//     description: "From concept to launch, we develop native and cross-platform mobile applications that deliver exceptional user experiences across all devices. Our focus is on creating intuitive interfaces with robust functionality.",
//     icon: "",
//     imageSrc: "/WhatsApp Image 2025-05-17 at 13.57.33_50f8aa3c.jpg",
//     features: [
//       "iOS & Android Development",
//       "React Native Applications",
//       "Flutter Solutions",
//       "App Store Optimization",
//       "Ongoing Maintenance & Support"
//     ]
//   },
//   {
//     id: 3,
//     title: "Brand Identity",
//     description: "We craft distinctive visual identities that express your brand's unique personality and values. Our comprehensive approach ensures consistency across all touchpoints, creating recognizable and impactful brand experiences.",
//     icon: "",
//     imageSrc: "/services/brand-identity.jpg",
//     features: [
//       "Logo & Identity Design",
//       "Brand Strategy",
//       "UI Design Systems",
//       "Brand Guidelines",
//       "Marketing Collateral"
//     ]
//   },
//   {
//     id: 4,
//     title: "UI / UX Strategy",
//     description: "Through in-depth research and data-driven insights, we create strategic UX frameworks that guide the development of intuitive, engaging user experiences that meet both user needs and business objectives.",
//     icon: "",
//     imageSrc: "/WhatsApp Image 2025-05-17 at 13.57.34_e45e333e.jpg",
//     features: [
//       "User Research & Persona Development",
//       "Information Architecture",
//       "User Flow Mapping",
//       "Wireframing & Prototyping",
//       "Usability Testing"
//     ]
//   },
//   {
//     id: 5,
//     title: "Entraprise",
//     description: "We push the boundaries of digital experiences with cutting-edge creative technology. From immersive 3D environments to engaging interactions, we leverage advanced technologies to create memorable digital experiences.",
//     icon: "",
//     imageSrc: "/services/enterprise.jpg",
//     features: [
//       "Custom Enterprise Software Development ",
//       "Maintenance and Support Services",
//       "Cloud and Infrastructure",
//       "Interactive Installations",
      
//     ]
//   },
//   {
//     id: 6,
//     title: "AI Integrations & Automations",
//     description: "Harness the power of artificial intelligence to enhance your digital products and streamline operations. We implement intelligent solutions that improve user experiences and drive business efficiency.",
//     icon: "",
//     imageSrc: "/services/ai-integrations.jpg",
//     features: [
//       "Natural Language Processing",
//       "Machine Learning Integration",
//       "Chatbots & Virtual Assistants",
//       "Data Analysis & Visualization",
//       "Process Automation"
//     ]
//   },
// ];

// const ServiceSection = ({ service, index }) => {
//   const isEven = index % 2 === 0;
  
//   return (
//     <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 py-16 border-b border-gray-100`}>
//       <div className="md:w-1/2">
//         <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 shadow-lg">
//           <AspectRatio ratio={16/9} className="overflow-hidden">
//             <img 
//               src={service.imageSrc} 
//               alt={service.title} 
//               className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" 
//             />
//           </AspectRatio>
//         </div>
//       </div>
      
//       <div className="md:w-1/2 flex flex-col justify-center">
//         <div className="text-4xl mb-4">{service.icon}</div>
//         <h3 className="text-3xl font-bold text-foreground mb-4">{service.title}</h3>
//         <p className="text-muted-foreground mb-6">{service.description}</p>
        
//         <ul className="space-y-2 mb-8">
//           {service.features.map((feature, idx) => (
//             <li key={idx} className="flex items-center">
//               <span className="text-purple-500 mr-2">•</span> {feature}
//             </li>
//           ))}
//         </ul>
        
//         <Button 
//           asChild 
//           className="bg-purple-600 text-white hover:bg-purple-700 flex items-center gap-2 w-fit"
//         >
//           <Link to="/contact">
//             Let's Talk About {service.title.split(" ")[0]}
//             <ArrowRight size={16} />
//           </Link>
//         </Button>
//       </div>
//     </div>
//   );
// };

// const Services = () => {
//   return (
//     <Layout>
//       {/* Hero Section */}
//       <section className="py-20 px-6 md:px-10 lg:px-16 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="max-w-3xl">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
//               Our Services
//             </h1>
//             <p className="text-xl text-muted-foreground mb-12">
//               We offer a comprehensive range of digital services to help businesses 
//               establish a strong online presence and achieve their goals.
//             </p>
//           </div>
          
//           {/* Services Section with alternating layout */}
//           <div className="mt-8">
//             {services.map((service, index) => (
//               <ServiceSection key={service.id} service={service} index={index} />
//             ))}
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default Services;



import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

// Detailed services information with accent colors
const services = [
  {
    id: 1,
    title: "Web Design & Development",
    description:
      "We create immersive, responsive websites that engage users and drive conversions. Using the latest technologies and design principles, we deliver solutions that are both visually stunning and functionally seamless.",
    icon: "",
    imageSrc: "/WhatsApp Image 2025-05-17 at 14.00.08_86b40642.jpg",
    accentColor: "purple-600", // Tailwind color for buttons and bullets
    features: [
      "Full-Stack SaaS Solutions",
      "Microservices Architecture",
      "React & Next.js Applications",
      "E-commerce Solutions",
      "API Design & Integration",
      "Performance Optimization",
    ],
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "From concept to launch, we develop native and cross-platform mobile applications that deliver exceptional user experiences across all devices. Our focus is on creating intuitive interfaces with robust functionality.",
    icon: "",
    imageSrc: "/WhatsApp Image 2025-05-17 at 13.57.33_50f8aa3c.jpg",
    accentColor: "blue-600",
    features: [
      "iOS & Android Development",
      "React Native Applications",
      "Flutter Solutions",
      "App Store Optimization",
      "Ongoing Maintenance & Support",
    ],
  },
  {
    id: 3,
    title: "Brand Identity",
    description:
      "We craft distinctive visual identities that express your brand's unique personality and values. Our comprehensive approach ensures consistency across all touchpoints, creating recognizable and impactful brand experiences.",
    icon: "",
    imageSrc: "/services/brand-identity.jpg",
    accentColor: "pink-600",
    features: [
      "Logo & Identity Design",
      "Brand Strategy",
      "UI Design Systems",
      "Brand Guidelines",
      "Marketing Collateral",
    ],
  },
  {
    id: 4,
    title: "UI / UX Strategy",
    description:
      "Through in-depth research and data-driven insights, we create strategic UX frameworks that guide the development of intuitive, engaging user experiences that meet both user needs and business objectives.",
    icon: "",
    imageSrc: "/WhatsApp Image 2025-05-17 at 13.57.34_e45e333e.jpg",
    accentColor: "green-600",
    features: [
      "User Research & Persona Development",
      "Information Architecture",
      "User Flow Mapping",
      "Wireframing & Prototyping",
      "Usability Testing",
    ],
  },
  {
    id: 5,
    title: "Enterprise",
    description:
      "We push the boundaries of digital experiences with cutting-edge creative technology. From immersive 3D environments to engaging interactions, we leverage advanced technologies to create memorable digital experiences.",
    icon: "",
    imageSrc: "/services/enterprise.jpg",
    accentColor: "yellow-600",
    features: [
      "Custom Enterprise Software Development",
      "Maintenance and Support Services",
      "Cloud and Infrastructure",
      "Interactive Installations",
    ],
  },
  {
    id: 6,
    title: "AI Integrations & Automations",
    description:
      "Harness the power of artificial intelligence to enhance your digital products and streamline operations. We implement intelligent solutions that improve user experiences and drive business efficiency.",
    icon: "",
    imageSrc: "/services/ai-integrations.jpg",
    accentColor: "red-600",
    features: [
      "Natural Language Processing",
      "Machine Learning Integration",
      "Chatbots & Virtual Assistants",
      "Data Analysis & Visualization",
      "Process Automation",
    ],
  },
];

// Animation variants
const heroVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const heroChildVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const imageVariants = (isEven) => ({
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotateY: isEven ? 20 : -20, // 3D tilt
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: "easeOut",
      type: "spring",
      stiffness: 80,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    rotateY: isEven ? -20 : 20,
    filter: "blur(5px)",
    transition: { duration: 0.4 },
  },
  hover: {
    rotateY: isEven ? 5 : -5, // Subtle tilt on hover
    transition: { duration: 0.3 },
  },
});

const contentVariants = (isEven) => ({
  hidden: {
    opacity: 0,
    x: isEven ? -50 : 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
    },
  },
  exit: {
    opacity: 0,
    x: isEven ? 50 : -50,
    transition: { duration: 0.4 },
  },
});

const featureVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.1 + Math.random() * 0.2, // Randomized micro-delay
      ease: "easeOut",
    },
  }),
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.3 },
  },
  pulse: {
    scale: [1, 1.03, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const ServiceSection = ({ service, index }) => {
  const isEven = index % 2 === 0;
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "flex flex-col",
        isEven ? "md:flex-row" : "md:flex-row-reverse",
        "gap-8 py-16 border-b border-gray-100"
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={shouldReduceMotion ? {} : { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
    >
      {/* Image */}
      <motion.div
        className="md:w-1/2"
        variants={shouldReduceMotion ? {} : imageVariants(isEven)}
        whileHover={shouldReduceMotion ? {} : "hover"}
      >
        <div className={cn("overflow-hidden rounded-2xl shadow-lg", `bg-gradient-to-br from-${service.accentColor} to-${service.accentColor}/80`)}>
          <AspectRatio ratio={16 / 9} className="overflow-hidden">
            <img
              src={service.imageSrc}
              alt={service.title}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </AspectRatio>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="md:w-1/2 flex flex-col justify-center"
        variants={shouldReduceMotion ? {} : contentVariants(isEven)}
      >
        <div className="text-4xl mb-4">{service.icon}</div>
        <h3 className="text-3xl font-bold text-foreground mb-4">{service.title}</h3>
        <p className="text-muted-foreground mb-6">{service.description}</p>

        <ul className="space-y-2 mb-8">
          {service.features.map((feature, idx) => (
            <motion.li
              key={idx}
              className="flex items-center"
              custom={idx}
              variants={shouldReduceMotion ? {} : featureVariants}
            >
              <span className={cn("mr-2", `text-${service.accentColor}`)}>•</span> {feature}
            </motion.li>
          ))}
        </ul>

        <motion.div
          variants={shouldReduceMotion ? {} : buttonVariants}
          whileHover={shouldReduceMotion ? {} : "hover"}
          animate={shouldReduceMotion ? {} : ["visible", "pulse"]}
        >
          <Button
            asChild
            className={cn(
              `bg-${service.accentColor} text-white hover:bg-${service.accentColor}/90 flex items-center gap-2 w-fit`
            )}
          >
            <Link to="/contact">
              Let's Talk About {service.title.split(" ")[0]}
              <ArrowRight size={16} />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-10 lg:px-16 bg-gradient-to-b from-white to-gray-50">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={shouldReduceMotion ? {} : heroVariants}
        >
          <motion.div className="max-w-3xl" variants={shouldReduceMotion ? {} : heroChildVariants}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              We offer a comprehensive range of digital services to help businesses establish a strong
              online presence and achieve their goals.
            </p>
          </motion.div>

          {/* Services Section */}
          <div className="mt-8">
            <AnimatePresence>
              {services.map((service, index) => (
                <ServiceSection key={service.id} service={service} index={index} />
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Services;

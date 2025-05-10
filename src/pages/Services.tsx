import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

// Featured projects/services with consistent images matching the home page design
const featuredServices = [
  {
    id: 1,
    title: "Suitcase App",
    imageSrc: "/lovable-uploads/dca407e2-46f7-49b9-b3c9-b9fce2b4984a.png",
  },
  {
    id: 2,
    title: "Exchango Dashboard",
    imageSrc: "/lovable-uploads/69feb3ce-f73b-406c-b179-080d75bfcb04.png",
  },
  {
    id: 3,
    title: "Copay",
    imageSrc: "/lovable-uploads/14dcc525-6005-4635-b3d5-dc0666171b56.png",
  },
  {
    id: 4,
    title: "Paws & Plans App",
    imageSrc: "/lovable-uploads/d36006bb-4131-42d7-af02-a12cfdd587e5.png",
  },
];

// Detailed services information
const services = [
  {
    id: 1,
    title: "Web Design & Development",
    description: "We create immersive, responsive websites that engage users and drive conversions. Using the latest technologies and design principles, we deliver solutions that are both visually stunning and functionally seamless.",
    icon: "",
    imageSrc: "https://media-hosting.imagekit.io/a4e2b2dd3e964d94/WhatsApp%20Image%202025-05-05%20at%2015.33.38_cc192496.jpg?Expires=1841230524&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=g2rq1KyjUXD9foOYkvGlqzAf1hkCLjFhjUIo8rIJjWI2qb5xR8pyFDEZSLxpQFLxhp1j8pZ3N00ph73HrS9ok86I6Lp5n1uBBgfdvbtdsekHJnOg3Izq3kMZoqMFOcVqjcVSbGfN748QEodlJozBQUxZf6aD0VujpRhT6rmQd0UzcA2bHgBdgjnmygf8N4qWWmaYF~aar3HBie3UArrYdreJeg-zZ81bkLDRipUPl8mo0a-16ggFWG5uwRfU35qI4mOKWkwHoHOfg-mid2smimTNzTNdR8fkRP~B1nrKWO1xeB0tYuk292A3mYSiiMzMBpm3fGa-HIydefgewxNQZg__",
    features: [
      "Custom WordPress Development",
      "Custom Shopify Development",
      "React & Next.js Applications",
      "E-commerce Solutions",
      "Content Management Systems",
      "Performance Optimization"
    ]
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "From concept to launch, we develop native and cross-platform mobile applications that deliver exceptional user experiences across all devices. Our focus is on creating intuitive interfaces with robust functionality.",
    icon: "",
    imageSrc: "https://media-hosting.imagekit.io/b4274be39c8e4913/WhatsApp%20Image%202025-05-05%20at%2019.09.48_1fbe244e.jpg?Expires=1841230182&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=IpePMm9iu5W4w5QHtkn-~LOk~hgbDA6XolFRRAKVbtdMwZO7WsEG9E6ZjQrGWw5ZlYK8Wk0ha3BpltthPTRCNW0w0Yoi~RurfMM2ozUyGlOBXNTv~Wm4k4YLe3WoTlPAFLF-lbvRPoE3WUA3lXsBspeWmtvzle5yRPBOyDL5gG7eM7by6ovktypEfrbnb2VRGuuj~94VvIOqL70BeQ9q-0qevppLfsWjxJTWI9J0QopL8tDnsMORATomIJNvAwirot1ZE9RihTnHKAnKjwGxjDGG1Lv~x4dg~MhjnQN-X~vaRs~StIgbXbWE8bV0d6Gjq7DjeAJyjL9vtsJyzFwOvw__",
    features: [
      "iOS & Android Development",
      "React Native Applications",
      "Flutter Solutions",
      "App Store Optimization",
      "Ongoing Maintenance & Support"
    ]
  },
  {
    id: 3,
    title: "Brand Identity & UI Systems",
    description: "We craft distinctive visual identities that express your brand's unique personality and values. Our comprehensive approach ensures consistency across all touchpoints, creating recognizable and impactful brand experiences.",
    icon: "",
    imageSrc: "https://media-hosting.imagekit.io/6594e0888a5a4209/WhatsApp%20Image%202025-05-06%20at%2015.46.28_0c92b6a6.jpg?Expires=1841230611&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Q84LK5DB4BuGQbud0nbJpDKJihNqibg9kodbbVMQTAdQXeze1RMckWynTDvKbfGD3VA5J6VTjyhGCzcV2kP6TNMFb3bhHN7OC~WTPl28UpzOO-fMCleY7SOAxXjUpKpLGLTJjrX8LuYhr3EcrnjFs8wkq4qZSn0f40DbTmAuZLhXX91UshuJpokeUjFKXc2XkBDFn85t5ymw5vlJ7RjTp7wcZt~nNt6C8ZTDXHj-nHNkHL4gGdv-J8kSrKKB6q3oqc0wA4FsP1iABlJI~SmGUglPylPMVhPMhCcrKG9HTvjnEHtfCzqSe3F0LQPjLGbg9aWID8koUYPLB4le2WTizw__",
    features: [
      "Logo & Identity Design",
      "Brand Strategy",
      "UI Design Systems",
      "Brand Guidelines",
      "Marketing Collateral"
    ]
  },
  {
    id: 4,
    title: "UX Strategy",
    description: "Through in-depth research and data-driven insights, we create strategic UX frameworks that guide the development of intuitive, engaging user experiences that meet both user needs and business objectives.",
    icon: "",
    imageSrc: "https://media-hosting.imagekit.io/43aa434be9ab4383/WhatsApp%20Image%202025-05-07%20at%2020.12.11_38671e77.jpg?Expires=1841237029&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=X~ZXSx5bFI~GGo8YZI7nM08ZP8zxtDflUBawOAxMynzZc79XMBMBXfI~tuWjpJFZsIf~rBgG6r4DwX-A580ZJhhuns4W202LSG7HfxVJU06LGbeWTG63SV1bMfZu-eKtISGsCdF0rw15GopDry41F7ztgDGoJIPgPjFENRVA3vOIIdYSBGVW7GcCoyhWpfJveI2eQE4bxHOIxqHToRC4rA0ulJ1SQVHtmW-hlXQ-Er76H-MC7tDZy9J9piP7ZcvN8DK0IfKwVoKQletyGN7xPNs8HSkYUPDFEVgTjnpr01bFJ03sRLUrMDBs9H7uX294S0X5AoGmF0UYj7MHtWU6BQ__",
    features: [
      "User Research & Persona Development",
      "Information Architecture",
      "User Flow Mapping",
      "Wireframing & Prototyping",
      "Usability Testing"
    ]
  },
  {
    id: 5,
    title: "Entraprise",
    description: "We push the boundaries of digital experiences with cutting-edge creative technology. From immersive 3D environments to engaging interactions, we leverage advanced technologies to create memorable digital experiences.",
    icon: "",
    imageSrc: "https://media-hosting.imagekit.io/804ac59336a647ac/WhatsApp%20Image%202025-05-07%20at%2020.14.02_7d034e15.jpg?Expires=1841237154&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Z5qUwAe7dxcHa1rXVkd--TBhyl71527hEPh~~8uOs1Thl8ZuR7YxOwKR9bPHURFX1XqTeUJmltQYqgFw1oo7Fp2MMEpEYIcxFoGBLRpvho4Q6Brhjc3CmYf7pEejgsb0907d6gCdhG2LkQg~pgYga-uuTI-5FtSGh9UrnYVjAlBSDIH7aO8oSJEO0X3LSlp5mLUe07ylTBi1DYhjUPuqD6ORF~FHNtrsGdh6lrUrAZVOYF3tKQZbNgg-dckgJzR4ANy1CUNghh3clsDo7tNAdzwFWc4ovr523K5OeRjR5FgMtKBcTU0i6KqqTgOMQMMVqFRXcv0Yey3o~DqQMh0xzQ__",
    features: [
      "Custom Enterprise Software Development ",
      "Maintenance and Support Services",
      "Cloud and Infrastructure",
      "Interactive Installations",
      
    ]
  },
  {
    id: 6,
    title: "AI Integrations & Automations",
    description: "Harness the power of artificial intelligence to enhance your digital products and streamline operations. We implement intelligent solutions that improve user experiences and drive business efficiency.",
    icon: "",
    imageSrc: "https://media-hosting.imagekit.io/a71ac695bb9d4f59/WhatsApp%20Image%202025-05-07%20at%2018.31.57_7ab3969a.jpg?Expires=1841230993&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=uMoYTlB27rPeL8yH7yGaMDMs5uLO2w~x0fAU4U1NLxd36uCRp5sl2tJ53XMec7rqBMwz0xS336hIgnwecTovIWeZ0ygxBsB9l6UiQfWEQOKIWisKFfn9gc9oPqIEK2wF~EUAnPJyDZvMzC0A8YvItTqrV9ZRNbCztzXPEgZ13rfTHKW4F1vgaUlgPkzSQPOYUfyEZNiX9p98unhlzWBfhtY5kUMhekccxq0uTVlffS9zEih3HHbU~~VKes-aCLO-IhWuXTvHcTjUYa7cyZheLgciGcIRNW5du0jaRKt4QKq-hvlTywDAul~X18ospDoCyY-DFCKjbwLJ1uM5A9TaaA__",
    features: [
      "Natural Language Processing",
      "Machine Learning Integration",
      "Chatbots & Virtual Assistants",
      "Data Analysis & Visualization",
      "Process Automation"
    ]
  },
];

const ServiceSection = ({ service, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 py-16 border-b border-gray-100`}>
      <div className="md:w-1/2">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 shadow-lg">
          <AspectRatio ratio={16/9} className="overflow-hidden">
            <img 
              src={service.imageSrc} 
              alt={service.title} 
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" 
            />
          </AspectRatio>
        </div>
      </div>
      
      <div className="md:w-1/2 flex flex-col justify-center">
        <div className="text-4xl mb-4">{service.icon}</div>
        <h3 className="text-3xl font-bold text-foreground mb-4">{service.title}</h3>
        <p className="text-muted-foreground mb-6">{service.description}</p>
        
        <ul className="space-y-2 mb-8">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center">
              <span className="text-purple-500 mr-2">•</span> {feature}
            </li>
          ))}
        </ul>
        
        <Button 
          asChild 
          className="bg-purple-600 text-white hover:bg-purple-700 flex items-center gap-2 w-fit"
        >
          <Link to="/contact">
            Let's Talk About {service.title.split(" ")[0]}
            <ArrowRight size={16} />
          </Link>
        </Button>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-10 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              We offer a comprehensive range of digital services to help businesses 
              establish a strong online presence and achieve their goals.
            </p>
          </div>
          
          {/* Services Section with alternating layout */}
          <div className="mt-8">
            {services.map((service, index) => (
              <ServiceSection key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;

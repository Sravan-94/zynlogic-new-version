import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  ShoppingCart, 
  GraduationCap, 
  Stethoscope, 
  Building2, 
  Utensils, 
  Plane,
  Home, 
  Users, 
  Briefcase, 
  Scale, 
  Leaf, 
  Laptop, 
  Palette, 
  DollarSign, 
  Hotel, 
  Car, 
  Gamepad2, 
  Gavel,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  { 
    id: 1, 
    name: "E-commerce", 
    icon: <ShoppingCart className="h-8 w-8 text-blue-500" />, 
    description: "Online shopping platforms and marketplaces for seamless digital retail experiences." 
  },
  { 
    id: 2, 
    name: "EdTech", 
    icon: <GraduationCap className="h-8 w-8 text-purple-500" />, 
    description: "Educational technology solutions that transform how we learn and teach." 
  },
  { 
    id: 3, 
    name: "Health", 
    icon: <Stethoscope className="h-8 w-8 text-cyan-500" />, 
    description: "Digital health platforms to improve healthcare delivery and patient outcomes." 
  },
  { 
    id: 4, 
    name: "Real Estate", 
    icon: <Building2 className="h-8 w-8 text-gray-500" />, 
    description: "Property listing platforms and virtual tour experiences for real estate." 
  },
  { 
    id: 5, 
    name: "Food Delivery", 
    icon: <Utensils className="h-8 w-8 text-red-500" />, 
    description: "Food ordering systems and delivery management platforms." 
  },
  { 
    id: 6, 
    name: "Travel", 
    icon: <Plane className="h-8 w-8 text-amber-500" />, 
    description: "Booking platforms and travel experience applications." 
  },
  { 
    id: 7, 
    name: "Interior", 
    icon: <Home className="h-8 w-8 text-emerald-500" />, 
    description: "Interior design visualization and home decoration applications." 
  },
  { 
    id: 8, 
    name: "CRM", 
    icon: <Users className="h-8 w-8 text-indigo-500" />, 
    description: "Customer relationship management systems for business growth." 
  },
  { 
    id: 9, 
    name: "Jobs", 
    icon: <Briefcase className="h-8 w-8 text-orange-500" />, 
    description: "Job boards and recruitment platforms for connecting talent with opportunities." 
  },
  
  { 
    id: 11, 
    name: "NGOs", 
    icon: <Leaf className="h-8 w-8 text-green-500" />, 
    description: "Digital solutions for non-profit organizations to maximize their impact." 
  },
  { 
    id: 12, 
    name: "Digital Agencies", 
    icon: <Laptop className="h-8 w-8 text-sky-500" />, 
    description: "Tools and platforms for creative agencies to manage projects and clients." 
  },
  { 
    id: 13, 
    name: "Freelancers", 
    icon: <Palette className="h-8 w-8 text-pink-500" />, 
    description: "Portfolio websites and service management tools for independent professionals." 
  },
  { 
    id: 14, 
    name: "Finance", 
    icon: <DollarSign className="h-8 w-8 text-green-500" />, 
    description: "Financial management and investment platforms for personal and business use." 
  },
  { 
    id: 15, 
    name: "Hotels", 
    icon: <Hotel className="h-8 w-8 text-amber-600" />, 
    description: "Booking systems and hospitality management solutions for accommodation businesses." 
  },
  { 
    id: 16, 
    name: "Automobile", 
    icon: <Car className="h-8 w-8 text-blue-600" />, 
    description: "Vehicle listing platforms and automotive service management systems." 
  },
  { 
    id: 17, 
    name: "Fantasy Gaming", 
    icon: <Gamepad2 className="h-8 w-8 text-violet-500" />, 
    description: "Interactive gaming platforms focused on fantasy sports and entertainment." 
  },
  { 
    id: 18, 
    name: "Auction", 
    icon: <Gavel className="h-8 w-8 text-amber-800" />, 
    description: "Online auction platforms for various types of products and services." 
  },
  { 
    id: 19, 
    name: "Branding", 
    icon: <Sparkles className="h-8 w-8 text-yellow-500" />, 
    description: "Visual identity development and brand management systems." 
  },
];

const Categories = () => {
  return (
    <Layout>
      <section className="py-20 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
              Industry Expertise
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              We've developed specialized knowledge across a wide range of industries, 
              allowing us to create tailored solutions for different sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {categories.map((category, index) => {
    // Predefined Tailwind border colors for hover effect (simulating 10%, 20%, etc.)
    const borderColors = [
      'hover:border-purple-500',   // 10%
      'hover:border-purple-500', // 20%
      'hover:border-purple-500',    // 30%
      'hover:border-purple-500',  // 40%
      'hover:border-purple-500', // 50%
      'hover:border-purple-500',   // 60%
      'hover:border-purple-500',   // 70%
      'hover:border-purple-500', // 80%
      'hover:border-purple-500', // 90%
      'hover:border-purple-500',   // 100%
    ];
    // Select border color based on index, cycling through the array
    const hoverBorderClass = borderColors[index % borderColors.length];

    return (
      <div
        key={category.id}
        className={`bg-white p-8 rounded-lg border border-gray-100 hover:shadow-lg transition-all hover:scale-105 duration-300 ${hoverBorderClass}`}
      >
        <div className="mb-4">{category.icon}</div>
        <h2 className="text-2xl font-semibold text-black mb-3">{category.name}</h2>
        <p className="text-gray-600 mb-6">{category.description}</p>
        <Button
          asChild
          variant="ghost"
          className="p-0 hover:bg-transparent text-accent hover:text-accent/80"
        >
          <Link to="/our-work" className="flex items-center">
            Explore Work <ArrowRight size={16} className="ml-2" />
          </Link>
        </Button>
      </div>
    );
  })}
</div>
        </div>
      </section>
    </Layout>
  );
};

export default Categories;

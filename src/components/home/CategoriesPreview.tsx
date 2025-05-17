import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from '@/components/ui/card';
import { 
    ChevronRight, 
    ShoppingBag, 
    Stethoscope, 
    Landmark, 
    Lightbulb, 
    Gamepad2, 
    Utensils, 
    Plane 
} from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";

const industries = [
  {
    id: 1,
    name: 'E-commerce',
    icon: <ShoppingBag className="text-blue-500" />,
    description: 'Online shopping platforms and marketplaces that connect buyers and sellers.',
  },
  {
    id: 2,
    name: 'Healthcare',
    icon: <Stethoscope className="text-green-500" />,
    description: 'Digital solutions for hospitals, clinics, and healthcare providers.',
  },
  {
    id: 3,
    name: 'Finance',
    icon: <Landmark className="text-purple-500" />,
    description: 'Banking, investment, and financial technology applications.',
  },
  {
    id: 4,
    name: 'Education',
    icon: <Lightbulb className="text-yellow-500" />,
    description: 'Learning platforms, educational tools, and knowledge sharing systems.',
  },
  {
    id: 5,
    name: 'Gaming',
    icon: <Gamepad2 className="text-red-500" />,
    description: 'Interactive entertainment, gaming platforms, and immersive experiences.',
  },
  {
    id: 6,
    name: 'Food & Beverage',
    icon: <Utensils className="text-orange-500" />,
    description: 'Restaurant management, food delivery, and culinary experiences.',
  },
];

const CategoriesPreview = () => {
    const navigate = useNavigate();
    
    const handleViewAllIndustries = () => {
        // Navigate to categories page and scroll to top
        navigate('/categories');
        window.scrollTo(0, 0);
    };
    return (
        <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center mb-8">
                    <h2 className="text-balance text-3xl font-semibold md:text-4xl">Industry Expertise</h2>
                    <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                        We specialize in creating tailored digital solutions for various industries
                    </p>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {industries.map((industry) => (
                        <IndustryCard
                            key={industry.id}
                            name={industry.name}
                            description={industry.description}
                            icon={industry.icon}
                        />
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <Button 
                        variant="outline" 
                        className="gap-1"
                        onClick={handleViewAllIndustries}
                    >
                        View All Industries
                        <ChevronRight className="ml-1 size-4" />
                    </Button>
                </div>
            </div>
        </section>
    )
}

const IndustryCard = ({
    name,
    description,
    icon,
    link = '/industries',
}: {
    name: string;
    description: string;
    icon: React.ReactNode;
    link?: string;
}) => {
    const navigate = useNavigate();
    
    const handleLearnMore = () => {
        // Navigate to our-work page and scroll to top
        navigate('/our-work');
        window.scrollTo(0, 0);
    };

    return (
        <Card className="p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="relative">
                <div className="size-10 flex items-center justify-center">{icon}</div>

                <div className="space-y-2 py-3">
                    <h3 className="text-base font-medium">{name}</h3>
                    <p className="text-muted-foreground line-clamp-2 text-sm">{description}</p>
                </div>

                <div className="flex gap-3 border-t border-dashed pt-3">
                    <Button
                        variant="secondary"
                        size="sm"
                        className="gap-1 pr-2 shadow-none hover:bg-gray-100"
                        onClick={handleLearnMore}
                    >
                        Learn More
                        <ChevronRight className="ml-0 !size-3.5 opacity-50" />
                    </Button>
                </div>
            </div>
        </Card>
    )
}

export default CategoriesPreview;

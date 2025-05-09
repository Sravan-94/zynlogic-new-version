import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { projects, getProjectById } from "@/data/projects";


// We're now using the shared projects data from @/data/projects
// This array is just for reference, we'll use the imported data
// IMPORTANT: Project IDs now use the format 'project1', 'project2', etc. to match OurWork page cards
const projectsReference = [
  {
    id: "project1", // Card 1 in OurWork page - Juicy Chemistry
    title: "Juicy Chemistry",
    category: "E-Commerce",
    type: "Website",
    imageUrl: "https://media-hosting.imagekit.io/2cd0f8c04e9c468b/original-438c01314162ba2f8862925.png?Expires=1841381485&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ikw017d209sRPSYRlOH6I9gApSaIb1j0RWe30hgVVvnj~-U9i-PHerYWjef8vMqfauM-MzXI9YDQwW~E0Iq1NY8k6akReQDClnYEJFek8TTYf0SfJr65gY~WJGHjnd~sy1O4G0dVRCe3o--ZX~QtSkjBW3E7TYTgnBdd2Q08aXa0ddw~uUYee2Kj4se3WfrKndnJerdeFjAPY~RnLV4vCpgMFD9aq~rqcvWnzwlQZQZfRGryYEeeQP-jxibvcxwuOpOnEmeYstpC6m1sN-r4I8wjwYcPQ3P6rTGrYgsrvkDjLAHZZsuR6HJDaa3cPdnizTC6zSsIcVX5rnSBqO6xDA__",
    description: "A modern e-commerce website for organic products.",
    client: "Juicy Chemistry",
    year: 2023,
    technologies: ["Next.js", "Tailwind CSS", "Stripe API"],
    features: [
      "Product listing and search",
      "Cart and checkout system",
      "Secure payment integration",
      "User account management"
    ],
    review: {
      clientName: "John Doe",
      clientRole: "CEO, Juicy Chemistry",
      message: "Amazing website development services. Highly satisfied!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project2", // Card 2 in OurWork page - Chumbak
    title: "Chumbak",
    category: "Portfolio",
    type: "Website",
    imageUrl: "https://media-hosting.imagekit.io/4f3ae5b3b3104423/WhatsApp%20Image%202025-05-06%20at%2014.38.35_532e64a7.jpg",
    description: "A clean and modern portfolio website.",
    client: "Chumbak",
    year: 2024,
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    features: [
      "Responsive design",
      "SEO optimized",
      "Performance enhanced"
    ],
    review: {
      clientName: "Jane Smith",
      clientRole: "Founder, Chumvak",
      message: "They delivered exactly what I imagined. Great experience!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project3", // Card 3 in OurWork page - Retail E-Commerce
    title: "Retail E-Commerce",
    category: "Retail",
    type: "Website",
    imageUrl: "https://media-hosting.imagekit.io/0a0313adf5f64705/WhatsApp%20Image%202025-05-06%20at%2014.38.38_f6c35d43.jpg",
    description: "A powerful retail shopping platform.",
    client: "Retail Co.",
    year: 2024,
    technologies: ["Next.js", "Stripe", "Vercel"],
    features: [
      "Product filtering",
      "Payment gateway integration",
      "Mobile optimized"
    ],
    review: {
      clientName: "Sarah Lee",
      clientRole: "Project Manager",
      message: "Professional work, delivered on time.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  // From here continue adding projects up to id: 40
  {
    id: "project4", // Card 4 in OurWork page
    title: "Another Project",
    category: "E-Commerce",
    type: "Website",
    imageUrl: "https://your-link-4.jpg",
    description: "Another e-commerce site project example.",
    client: "Another Client",
    year: 2025,
    technologies: ["Next.js", "Stripe", "Tailwind CSS"],
    features: [
      "User Authentication",
      "Payment Integration",
      "Live Chat"
    ],
    review: {
      clientName: "Client Name",
      clientRole: "CEO",
      message: "Highly recommend this amazing work!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 5,
    title: "Yet Another Project",
    category: "Portfolio",
    type: "Website",
    imageUrl: "https://your-link-5.jpg",
    description: "Portfolio sample for designers.",
    client: "Freelance Designer",
    year: 2025,
    technologies: ["React", "Framer Motion", "Tailwind"],
    features: [
      "Animations",
      "Smooth transitions",
      "Portfolio showcase"
    ],
    review: {
      clientName: "Another Client",
      clientRole: "Designer",
      message: "Loved the creativity and execution!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project6", // Card 6 in OurWork page
    title: "Yet Another Project",
    category: "Portfolio",
    type: "Website",
    imageUrl: "https://your-link-5.jpg",
    description: "Portfolio sample for designers.",
    client: "Freelance Designer",
    year: 2025,
    technologies: ["React", "Framer Motion", "Tailwind"],
    features: [
      "Animations",
      "Smooth transitions",
      "Portfolio showcase"
    ],
    review: {
      clientName: "Another Client",
      clientRole: "Designer",
      message: "Loved the creativity and execution!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 7,
    title: "Yet Another Project",
    category: "Portfolio",
    type: "Website",
    imageUrl: "https://your-link-5.jpg",
    description: "Portfolio sample for designers.",
    client: "Freelance Designer",
    year: 2025,
    technologies: ["React", "Framer Motion", "Tailwind"],
    features: [
      "Animations",
      "Smooth transitions",
      "Portfolio showcase"
    ],
    review: {
      clientName: "Another Client",
      clientRole: "Designer",
      message: "Loved the creativity and execution!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project8", // Card 8 in OurWork page
    title: "Yet Another Project",
    category: "Portfolio",
    type: "Website",
    imageUrl: "https://your-link-5.jpg",
    description: "Portfolio sample for designers.",
    client: "Freelance Designer",
    year: 2025,
    technologies: ["React", "Framer Motion", "Tailwind"],
    features: [
      "Animations",
      "Smooth transitions",
      "Portfolio showcase"
    ],
    review: {
      clientName: "Another Client",
      clientRole: "Designer",
      message: "Loved the creativity and execution!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 9,
    title: "Yet Another Project",
    category: "Portfolio",
    type: "Website",
    imageUrl: "https://your-link-5.jpg",
    description: "Portfolio sample for designers.",
    client: "Freelance Designer",
    year: 2025,
    technologies: ["React", "Framer Motion", "Tailwind"],
    features: [
      "Animations",
      "Smooth transitions",
      "Portfolio showcase"
    ],
    review: {
      clientName: "Another Client",
      clientRole: "Designer",
      message: "Loved the creativity and execution!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project10", // Card 10 in OurWork page
    title: "Yet Another Project",
    category: "Portfolio",
    type: "Website",
    imageUrl: "https://your-link-5.jpg",
    description: "Portfolio sample for designers.",
    client: "Freelance Designer",
    year: 2025,
    technologies: ["React", "Framer Motion", "Tailwind"],
    features: [
      "Animations",
      "Smooth transitions",
      "Portfolio showcase"
    ],
    review: {
      clientName: "Another Client",
      clientRole: "Designer",
      message: "Loved the creativity and execution!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project11", // Card 11 in OurWork page - Educate Online learning app
    title: "Educate Online learning app",
    category: "Education",
    type: "Website",
    imageUrl: "https://media-hosting.imagekit.io/6c35a831e48d4378/education%20app%201.png?Expires=1841397645&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=h0o6TQXRObc3-B94LwyAHT1x7ChgEyYqdpA0v4YVMZ~zrrDeA6tzvCWCGj4nCd2s~E1YMiKAFcLH~E9JUi~ugai4MZ2ew2MB5GEd4cBiecVacmCAVXxKQLGWHSXycrMAuh~7cuHoazHx6VLTHidDYXvxufRRyNS2XZjOye8mQUi1l2mOCQRUc8G1zdlvnVUFvaPbLRRs9HGxo-LM3VosVxdPsXvAluIowUy108SEZLYETkCEd2OJSovtVIZ4VKw7nbqRFTfnnLz0VH8RuKeshtjA~D99upvl9vZSfMHFx-WdIewdhJjP99WkftgmruIBFXseK5kKP4GvX8LRoNrQDg__",
    description: "Portfolio sample for designers.",
    client: "Freelance Designer",
    year: 2025,
    technologies: ["React", "Framer Motion", "Tailwind"],
    features: [
      "Animations",
      "Smooth transitions",
      "Portfolio showcase"
    ],
    review: {
      clientName: "Another Client",
      clientRole: "Designer",
      message: "Loved the creativity and execution!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project12", // Card 12 in OurWork page
    title: "Yet Another Project",
    category: "Portfolio",
    type: "Website",
    imageUrl: "https://your-link-5.jpg",
    description: "Portfolio sample for designers.",
    client: "Freelance Designer",
    year: 2025,
    technologies: ["React", "Framer Motion", "Tailwind"],
    features: [
      "Animations",
      "Smooth transitions",
      "Portfolio showcase"
    ],
    review: {
      clientName: "Another Client",
      clientRole: "Designer",
      message: "Loved the creativity and execution!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 13,
    title: "Yet Another Project",
    category: "Portfolio",
    type: "Website",
    imageUrl: "https://your-link-5.jpg",
    description: "Portfolio sample for designers.",
    client: "Freelance Designer",
    year: 2025,
    technologies: ["React", "Framer Motion", "Tailwind"],
    features: [
      "Animations",
      "Smooth transitions",
      "Portfolio showcase"
    ],
    review: {
      clientName: "Another Client",
      clientRole: "Designer",
      message: "Loved the creativity and execution!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project14", // Card 14 in OurWork page
    title: "Yet Another Project",
    category: "Portfolio",
    type: "Website",
    imageUrl: "https://your-link-5.jpg",
    description: "Portfolio sample for designers.",
    client: "Freelance Designer",
    year: 2025,
    technologies: ["React", "Framer Motion", "Tailwind"],
    features: [
      "Animations",
      "Smooth transitions",
      "Portfolio showcase"
    ],
    review: {
      clientName: "Another Client",
      clientRole: "Designer",
      message: "Loved the creativity and execution!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 15,
    title: "Yet Another Project",
    category: "Portfolio",
    type: "Website",
    imageUrl: "https://your-link-5.jpg",
    description: "Portfolio sample for designers.",
    client: "Freelance Designer",
    year: 2025,
    technologies: ["React", "Framer Motion", "Tailwind"],
    features: [
      "Animations",
      "Smooth transitions",
      "Portfolio showcase"
    ],
    review: {
      clientName: "Another Client",
      clientRole: "Designer",
      message: "Loved the creativity and execution!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project16", // Card 16 in OurWork page
    title: "Yet Another Project",
    category: "Portfolio",
    type: "Website",
    imageUrl: "https://your-link-5.jpg",
    description: "Portfolio sample for designers.",
    client: "Freelance Designer",
    year: 2025,
    technologies: ["React", "Framer Motion", "Tailwind"],
    features: [
      "Animations",
      "Smooth transitions",
      "Portfolio showcase"
    ],
    review: {
      clientName: "Another Client",
      clientRole: "Designer",
      message: "Loved the creativity and execution!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 17,
    title: "Yet Another Project",
    category: "Portfolio",
    type: "Website",
    imageUrl: "https://your-link-5.jpg",
    description: "Portfolio sample for designers.",
    client: "Freelance Designer",
    year: 2025,
    technologies: ["React", "Framer Motion", "Tailwind"],
    features: [
      "Animations",
      "Smooth transitions",
      "Portfolio showcase"
    ],
    review: {
      clientName: "Another Client",
      clientRole: "Designer",
      message: "Loved the creativity and execution!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project18", // Card 18 in OurWork page
    title: "Yet Another Project",
    category: "Portfolio",
    type: "Website",
    imageUrl: "https://your-link-5.jpg",
    description: "Portfolio sample for designers.",
    client: "Freelance Designer",
    year: 2025,
    technologies: ["React", "Framer Motion", "Tailwind"],
    features: [
      "Animations",
      "Smooth transitions",
      "Portfolio showcase"
    ],
    review: {
      clientName: "Another Client",
      clientRole: "Designer",
      message: "Loved the creativity and execution!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 19,
    title: "Yet Another Project",
    category: "Portfolio",
    type: "Website",
    imageUrl: "https://your-link-5.jpg",
    description: "Portfolio sample for designers.",
    client: "Freelance Designer",
    year: 2025,
    technologies: ["React", "Framer Motion", "Tailwind"],
    features: [
      "Animations",
      "Smooth transitions",
      "Portfolio showcase"
    ],
    review: {
      clientName: "Another Client",
      clientRole: "Designer",
      message: "Loved the creativity and execution!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project20", // Card 20 in OurWork page
    title: "Yet Another Project",
    category: "Portfolio",
    type: "Website",
    imageUrl: "https://your-link-5.jpg",
    description: "Portfolio sample for designers.",
    client: "Freelance Designer",
    year: 2025,
    technologies: ["React", "Framer Motion", "Tailwind"],
    features: [
      "Animations",
      "Smooth transitions",
      "Portfolio showcase"
    ],
    review: {
      clientName: "Another Client",
      clientRole: "Designer",
      message: "Loved the creativity and execution!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 21,
    title: "Yet Another Project",
    category: "Portfolio",
    type: "Website",
    imageUrl: "https://your-link-5.jpg",
    description: "Portfolio sample for designers.",
    client: "Freelance Designer",
    year: 2025,
    technologies: ["React", "Framer Motion", "Tailwind"],
    features: [
      "Animations",
      "Smooth transitions",
      "Portfolio showcase"
    ],
    review: {
      clientName: "Another Client",
      clientRole: "Designer",
      message: "Loved the creativity and execution!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project22", // Card 22 in OurWork page - Mobile App
    title: "Yet Another Project",
    category: "Portfolio",
    type: "Website",
    imageUrl: "https://your-link-5.jpg",
    description: "Portfolio sample for designers.",
    client: "Freelance Designer",
    year: 2025,
    technologies: ["React", "Framer Motion", "Tailwind"],
    features: [
      "Animations",
      "Smooth transitions",
      "Portfolio showcase"
    ],
    review: {
      clientName: "Another Client",
      clientRole: "Designer",
      message: "Loved the creativity and execution!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 23,
    title: "Yet Another Project",
    category: "Portfolio",
    type: "Website",
    imageUrl: "https://your-link-5.jpg",
    description: "Portfolio sample for designers.",
    client: "Freelance Designer",
    year: 2025,
    technologies: ["React", "Framer Motion", "Tailwind"],
    features: [
      "Animations",
      "Smooth transitions",
      "Portfolio showcase"
    ],
    review: {
      clientName: "Another Client",
      clientRole: "Designer",
      message: "Loved the creativity and execution!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project24", // Card 24 in OurWork page - Mobile App
    title: "Yet Another Project",
    category: "Portfolio",
    type: "Website",
    imageUrl: "https://your-link-5.jpg",
    description: "Portfolio sample for designers.",
    client: "Freelance Designer",
    year: 2025,
    technologies: ["React", "Framer Motion", "Tailwind"],
    features: [
      "Animations",
      "Smooth transitions",
      "Portfolio showcase"
    ],
    review: {
      clientName: "Another Client",
      clientRole: "Designer",
      message: "Loved the creativity and execution!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 25,
    title: "Yet Another Project",
    category: "Portfolio",
    type: "Website",
    imageUrl: "https://your-link-5.jpg",
    description: "Portfolio sample for designers.",
    client: "Freelance Designer",
    year: 2025,
    technologies: ["React", "Framer Motion", "Tailwind"],
    features: [
      "Animations",
      "Smooth transitions",
      "Portfolio showcase"
    ],
    review: {
      clientName: "Another Client",
      clientRole: "Designer",
      message: "Loved the creativity and execution!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project26", // Card 26 in OurWork page - Mobile App
    title: "Yet Another Project",
    category: "Portfolio",
    type: "Website",
    imageUrl: "https://your-link-5.jpg",
    description: "Portfolio sample for designers.",
    client: "Freelance Designer",
    year: 2025,
    technologies: ["React", "Framer Motion", "Tailwind"],
    features: [
      "Animations",
      "Smooth transitions",
      "Portfolio showcase"
    ],
    review: {
      clientName: "Another Client",
      clientRole: "Designer",
      message: "Loved the creativity and execution!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 27,
    title: "Yet Another Project",
    category: "Portfolio",
    type: "Website",
    imageUrl: "https://your-link-5.jpg",
    description: "Portfolio sample for designers.",
    client: "Freelance Designer",
    year: 2025,
    technologies: ["React", "Framer Motion", "Tailwind"],
    features: [
      "Animations",
      "Smooth transitions",
      "Portfolio showcase"
    ],
    review: {
      clientName: "Another Client",
      clientRole: "Designer",
      message: "Loved the creativity and execution!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project28", // Card 28 in OurWork page - Mobile App
    title: "Yet Another Project",
    category: "Portfolio",
    type: "Website",
    imageUrl: "https://your-link-5.jpg",
    description: "Portfolio sample for designers.",
    client: "Freelance Designer",
    year: 2025,
    technologies: ["React", "Framer Motion", "Tailwind"],
    features: [
      "Animations",
      "Smooth transitions",
      "Portfolio showcase"
    ],
    review: {
      clientName: "Another Client",
      clientRole: "Designer",
      message: "Loved the creativity and execution!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 29,
    title: "Yet Another Project",
    category: "Portfolio",
    type: "Website",
    imageUrl: "https://your-link-5.jpg",
    description: "Portfolio sample for designers.",
    client: "Freelance Designer",
    year: 2025,
    technologies: ["React", "Framer Motion", "Tailwind"],
    features: [
      "Animations",
      "Smooth transitions",
      "Portfolio showcase"
    ],
    review: {
      clientName: "Another Client",
      clientRole: "Designer",
      message: "Loved the creativity and execution!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project30", // Card 30 in OurWork page - Mobile App
    title: "Yet Another Project",
    category: "Portfolio",
    type: "Website",
    imageUrl: "https://your-link-5.jpg",
    description: "Portfolio sample for designers.",
    client: "Freelance Designer",
    year: 2025,
    technologies: ["React", "Framer Motion", "Tailwind"],
    features: [
      "Animations",
      "Smooth transitions",
      "Portfolio showcase"
    ],
    review: {
      clientName: "Another Client",
      clientRole: "Designer",
      message: "Loved the creativity and execution!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 31,
    title: "Educate: Online Learning App",
    category: "Portfolio",
    type: "Website",
    imageUrl: "https://your-link-5.jpg",
    description: "Portfolio sample for designers.",
    client: "Freelance Designer",
    year: 2025,
    technologies: ["React", "Framer Motion", "Tailwind"],
    features: [
      "Animations",
      "Smooth transitions",
      "Portfolio showcase"
    ],
    review: {
      clientName: "Another Client",
      clientRole: "Designer",
      message: "Loved the creativity and execution!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project32", // Card 32 in OurWork page - Mobile App
    title: "Yet Another Project",
    category: "Portfolio",
    type: "Website",
    imageUrl: "https://your-link-5.jpg",
    description: "Portfolio sample for designers.",
    client: "Freelance Designer",
    year: 2025,
    technologies: ["React", "Framer Motion", "Tailwind"],
    features: [
      "Animations",
      "Smooth transitions",
      "Portfolio showcase"
    ],
    review: {
      clientName: "Another Client",
      clientRole: "Designer",
      message: "Loved the creativity and execution!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 33,
    title: "Yet Another Project",
    category: "Portfolio",
    type: "Website",
    imageUrl: "https://your-link-5.jpg",
    description: "Portfolio sample for designers.",
    client: "Freelance Designer",
    year: 2025,
    technologies: ["React", "Framer Motion", "Tailwind"],
    features: [
      "Animations",
      "Smooth transitions",
      "Portfolio showcase"
    ],
    review: {
      clientName: "Another Client",
      clientRole: "Designer",
      message: "Loved the creativity and execution!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project34", // Card 34 in OurWork page - Mobile App
    title: "Yet Another Project",
    category: "Portfolio",
    type: "Website",
    imageUrl: "https://your-link-5.jpg",
    description: "Portfolio sample for designers.",
    client: "Freelance Designer",
    year: 2025,
    technologies: ["React", "Framer Motion", "Tailwind"],
    features: [
      "Animations",
      "Smooth transitions",
      "Portfolio showcase"
    ],
    review: {
      clientName: "Another Client",
      clientRole: "Designer",
      message: "Loved the creativity and execution!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 35,
    title: "Yet Another Project",
    category: "Portfolio",
    type: "Website",
    imageUrl: "https://your-link-5.jpg",
    description: "Portfolio sample for designers.",
    client: "Freelance Designer",
    year: 2025,
    technologies: ["React", "Framer Motion", "Tailwind"],
    features: [
      "Animations",
      "Smooth transitions",
      "Portfolio showcase"
    ],
    review: {
      clientName: "Another Client",
      clientRole: "Designer",
      message: "Loved the creativity and execution!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project36", // Card 36 in OurWork page - Mobile App
    title: "Yet Another Project",
    category: "Portfolio",
    type: "Website",
    imageUrl: "https://your-link-5.jpg",
    description: "Portfolio sample for designers.",
    client: "Freelance Designer",
    year: 2025,
    technologies: ["React", "Framer Motion", "Tailwind"],
    features: [
      "Animations",
      "Smooth transitions",
      "Portfolio showcase"
    ],
    review: {
      clientName: "Another Client",
      clientRole: "Designer",
      message: "Loved the creativity and execution!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 37,
    title: "Yet Another Project",
    category: "Portfolio",
    type: "Website",
    imageUrl: "https://your-link-5.jpg",
    description: "Portfolio sample for designers.",
    client: "Freelance Designer",
    year: 2025,
    technologies: ["React", "Framer Motion", "Tailwind"],
    features: [
      "Animations",
      "Smooth transitions",
      "Portfolio showcase"
    ],
    review: {
      clientName: "Another Client",
      clientRole: "Designer",
      message: "Loved the creativity and execution!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project38", // Card 38 in OurWork page - Mobile App
    title: "Yet Another Project",
    category: "Portfolio",
    type: "Website",
    imageUrl: "https://your-link-5.jpg",
    description: "Portfolio sample for designers.",
    client: "Freelance Designer",
    year: 2025,
    technologies: ["React", "Framer Motion", "Tailwind"],
    features: [
      "Animations",
      "Smooth transitions",
      "Portfolio showcase"
    ],
    review: {
      clientName: "Another Client",
      clientRole: "Designer",
      message: "Loved the creativity and execution!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 39,
    title: "Yet Another Project",
    category: "Portfolio",
    type: "Website",
    imageUrl: "https://your-link-5.jpg",
    description: "Portfolio sample for designers.",
    client: "Freelance Designer",
    year: 2025,
    technologies: ["React", "Framer Motion", "Tailwind"],
    features: [
      "Animations",
      "Smooth transitions",
      "Portfolio showcase"
    ],
    review: {
      clientName: "Another Client",
      clientRole: "Designer",
      message: "Loved the creativity and execution!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project40", // Card 40 in OurWork page - Mobile App
    title: "Yet Another Project",
    category: "Portfolio",
    type: "Website",
    imageUrl: "https://your-link-5.jpg",
    description: "Portfolio sample for designers.",
    client: "Freelance Designer",
    year: 2025,
    technologies: ["React", "Framer Motion", "Tailwind"],
    features: [
      "Animations",
      "Smooth transitions",
      "Portfolio showcase"
    ],
    review: {
      clientName: "Another Client",
      clientRole: "Designer",
      message: "Loved the creativity and execution!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  console.log('Project ID from params:', id);
  
  // Use the ID directly as a string to match our project data structure
  let projectId = id || 'project1'; // Default to project1 if no ID is provided
  
  // If the ID doesn't have the 'project' prefix, add it
  if (!projectId.startsWith('project')) {
    projectId = `project${projectId}`;
  }
  
  console.log('Project ID to use:', projectId);
  
  // Find the project with the matching ID using the helper function
  const project = getProjectById(projectId);
  console.log('Found project:', project);
  
  // Add default values for optional properties to prevent runtime errors
  if (project) {
    project.features = project.features || [];
    project.technologies = project.technologies || [];
    project.client = project.client || 'Unknown Client';
  }

  if (!project) {
    return (
      <Layout>
        <div className="py-16 px-6 md:px-10 min-h-screen flex items-center justify-center">
          <p className="text-zinc-700 text-xl">Project not found.</p>
        </div>
      </Layout>
    );
  }

 
  return (
    <Layout>
      <div className="py-16 px-6 md:px-10 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <Link to="/our-work" className="inline-flex items-center text-sm text-zinc-600 hover:text-accent mb-8">
            <ArrowLeft size={16} className="mr-2" />
            Back to all projects
          </Link>

          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                {project.category}
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                {project.type}
              </span>
            </div>
          </div>

          {/* Main content area - Image on left, Overview/Features on right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Image on the left side */}
            <div className="h-full">
              <div className="w-full h-auto aspect-[3/2] rounded-lg overflow-hidden">
                <img 
                  src={project.detailImageUrl || project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Overview and Features stacked on the right side */}
            <div className="flex flex-col">
              <div>
                <h2 className="text-xl font-bold text-zinc-900 mb-4">Overview</h2>
                <p className="text-zinc-700 mb-6 leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              {project.features && project.features.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-zinc-900 mb-4">Features</h2>
                  <ul className="list-disc pl-5 text-zinc-700 space-y-2 mb-6">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Project Info, Testimonials, and Video Section - All in the same row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Project Info Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-zinc-100">
              <h2 className="text-xl font-bold text-zinc-900 mb-4">Project Info</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-zinc-500">Client</h3>
                  <p className="text-zinc-900">{project.client}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-500">Year</h3>
                  <p className="text-zinc-900">{project.year}</p>
                </div>

                {project.technologies && project.technologies.length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium text-zinc-500">Technologies</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-zinc-100 text-zinc-800 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Testimonials Section */}
            {project.review ? (
              <div className="bg-white p-6 rounded-lg shadow-sm border border-zinc-100">
                <h2 className="text-xl font-bold text-zinc-900 mb-4">Client Feedback</h2>
                <p className="text-zinc-700 italic mb-4">"{project.review.message}"</p>
                <div className="flex justify-center">
                  {Array.from({ length: project.review.rating }).map((_, idx) => (
                    <span key={idx} className="text-yellow-400 text-xl">★</span>
                  ))}
                  {Array.from({ length: 5 - project.review.rating }).map((_, idx) => (
                    <span key={idx} className="text-gray-300 text-xl">★</span>
                  ))}
                </div>
                <div className="mt-4">
                  <p className="font-medium text-zinc-900">{project.review.clientName}</p>
                  <p className="text-sm text-zinc-500">{project.review.clientRole}</p>
                </div>
              </div>
            ) : (
              <div className="bg-white p-6 rounded-lg shadow-sm border border-zinc-100">
                <h2 className="text-xl font-bold text-zinc-900 mb-4">Client Feedback</h2>
                <p className="text-zinc-700 mb-4">This project was completed to the client's satisfaction.</p>
                <div className="mt-4">
                  <p className="font-medium text-zinc-900">Want to be our next success story?</p>
                  <Link to="/contact" className="inline-block mt-3 text-primary hover:underline">
                    Contact us →
                  </Link>
                </div>
              </div>
            )}

            {/* Video Section */}
            {project.videoUrl ? (
              <div className="bg-white p-6 rounded-lg shadow-sm border border-zinc-100">
                <h2 className="text-xl font-bold text-zinc-900 mb-4">Project Video</h2>
                <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src={project.videoUrl}
                    title="Project Video"
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ) : (
              <div className="bg-white p-6 rounded-lg shadow-sm border border-zinc-100">
                <h2 className="text-xl font-bold text-zinc-900 mb-4">Project Highlights</h2>
                <ul className="list-disc list-inside text-zinc-700 space-y-2">
                  <li>Completed on time and within budget</li>
                  <li>Met all client requirements and specifications</li>
                  <li>Implemented using industry best practices</li>
                  <li>Ongoing support and maintenance available</li>
                </ul>
                <div className="mt-4">
                  <p className="font-medium text-zinc-900">Need a similar solution?</p>
                  <Link to="/contact" className="inline-block mt-3 text-primary hover:underline">
                    Let's discuss your project →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Call to action section */}
          <div className="bg-purple-100 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-purple-900 mb-4">Ready to start your project?</h2>
            <p className="text-purple-800 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life with our expertise in digital solutions.
            </p>
            <Button size="lg" className="bg-purple-700 hover:bg-purple-800">
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetail;

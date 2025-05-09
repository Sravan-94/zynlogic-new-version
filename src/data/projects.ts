// Shared project data for consistent access across components

export interface Project {
  id: string; // Changed from number to string to match OurWork page format
  title: string;
  category: string;
  type: string;
  imageUrl: string; // Used in OurWork page (card view)
  detailImageUrl?: string; // Used in ProjectDetail page
  description: string;
  client?: string;
  year: number;
  technologies?: string[];
  features?: string[];
  review?: {
    clientName: string;
    clientRole: string;
    message: string;
    rating: number;
  };
  videoUrl?: string;
  
  // Enhanced project detail sections
  overview?: {
    title?: string; // Default: "Overview"
    content?: string; // Default: project.description
    additionalContent?: string; // Additional content for the overview section
    highlightPoints?: string[]; // Key points to highlight in the overview
  };
  
  projectInfo?: {
    title?: string; // Default: "Project Info"
    additionalDetails?: {
      label: string;
      value: string;
    }[];
  };
  
  clientFeedback?: {
    title?: string; // Default: "Client Feedback"
    testimonials?: {
      clientName: string;
      clientRole: string;
      message: string;
      rating: number;
      clientImage?: string;
    }[];
  };
  
  projectVideo?: {
    title?: string; // Default: "Project Video"
    description?: string;
    thumbnailUrl?: string;
  };
  
  // Additional sections unique to each project
  additionalSections?: {
    title: string;
    content: string;
    position: 'top' | 'middle' | 'bottom';
    imageUrl?: string;
  }[];
}

// Collection of project image URLs
const imageUrls = [
  // E-Commerce
  "https://media-hosting.imagekit.io/8182e50368f84796/WhatsApp%20Image%202025-05-05%20at%2017.15.02_4803d08d.jpg?Expires=1841053606&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ohAWfIcJR518DR-XT~hCNLUDGatag16BwPwXlF8A4OPmMyAzyRJJm4fcRueRLd1BT1Vd-hwEp8Mtq8NzwsTAru1BM-35VHZLu2p9Vf-UcocmErHWY8bkmv3GzLXJk283ELVSwVtIa5K46FtiYktRqMG4Ql0pd8rZDT~Ni32T8X3~jXjumYnzJibPTKRkd0o7TeROMqNZPoosvMJ5Ia5CJdZFHxjU6KLp3rhXGWB8zVO8e5X9rMUzLOy1FjAcNlbze2EXlL36wxHN8Gx1iQly0UOgsd~N1NocfKjdIbx2t8cO4sRNcN6QDUH4M-Q5q1ZwNErbs223ehk652fXT614aA__",
  "https://media-hosting.imagekit.io/31faf635e4c74bf1/WhatsApp%20Image%202025-05-05%20at%2017.15.02_1ae5747d.jpg?Expires=1841053733&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=oUoM4K2F4ewXfmsPCOpXSo6qAD~WsOFju4YIGMsCB6bwrXojeJxs1pM1AF93~l3QLfRp-pq01TRqmMaaB6aiTS8z1FfIrmyi9MrVSdgVRbTd2yghr3TClWMXET308l71bB~kwawBZkArXbLgeih-o13bEjZ0j2RsvJv8KgTsDYKWolRqe3~KNgHgoZw3d4r1PXqhUoQdAtREY8MmrXJK4sXSLQK5a1NSFQgAlT2wD2cQ5uSkNZCJGIAt05S3oJASSePWVN~lWLvZQwNwbooW8pqSzW8Uehuyx4VogMNDSjuNZ5iMWDBvtU1rcbQP30Aeynt9FkzDwNixR4GvlsKiYQ__",
  // Add more image URLs as needed
];

// Sample project data
export const projects: Project[] = [
  {
    id: "project1",
    title: "Juicy Chemistry",
    category: "E-Commerce",
    type: "Website",
    imageUrl: "https://media-hosting.imagekit.io/2f589ed679fb4ee3/WhatsApp%20Image%202025-05-06%20at%2017.22.21_20eaa8f2.jpg",
    detailImageUrl: "https://media-hosting.imagekit.io/2cd0f8c04e9c468b/original-438c01314162ba2f8862925.png?Expires=1841381485&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ikw017d209sRPSYRlOH6I9gApSaIb1j0RWe30hgVVvnj~-U9i-PHerYWjef8vMqfauM-MzXI9YDQwW~E0Iq1NY8k6akReQDClnYEJFek8TTYf0SfJr65gY~WJGHjnd~sy1O4G0dVRCe3o--ZX~QtSkjBW3E7TYTgnBdd2Q08aXa0ddw~uUYee2Kj4se3WfrKndnJerdeFjAPY~RnLV4vCpgMFD9aq~rqcvWnzwlQZQZfRGryYEeeQP-jxibvcxwuOpOnEmeYstpC6m1sN-r4I8wjwYcPQ3P6rTGrYgsrvkDjLAHZZsuR6HJDaa3cPdnizTC6zSsIcVX5rnSBqO6xDA__",
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
    id: "project2",
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
    id: "project3",
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
  // Generate more projects with different categories
  ...Array.from({ length: 37 }).map((_, i) => {
    const categories = [
      "E-Commerce", "CRM", "Healthcare", 
      "Educational", "Food & Delivery", "Retail", "Portfolio", "Finance"
    ];
    
    // Determine type based on project ID
    // Projects 1-20 are Websites, Projects 21-40 are Mobile Apps
    const projectId = i + 4;
    const type = projectId <= 20 ? "Website" : "Mobile App";
    
    const category = categories[i % categories.length];
    
    // Special case for project11 - Educate Online learning app
    if (projectId === 11) {
      return {
        id: `project${projectId}`,
        title: "Educate: Online learning app",
        category: "Education",
        type: "Website",
        imageUrl: "https://media-hosting.imagekit.io/6c35a831e48d4378/education%20app%201.png?Expires=1841397645&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=h0o6TQXRObc3-B94LwyAHT1x7ChgEyYqdpA0v4YVMZ~zrrDeA6tzvCWCGj4nCd2s~E1YMiKAFcLH~E9JUi~ugai4MZ2ew2MB5GEd4cBiecVacmCAVXxKQLGWHSXycrMAuh~7cuHoazHx6VLTHidDYXvxufRRyNS2XZjOye8mQUi1l2mOCQRUc8G1zdlvnVUFvaPbLRRs9HGxo-LM3VosVxdPsXvAluIowUy108SEZLYETkCEd2OJSovtVIZ4VKw7nbqRFTfnnLz0VH8RuKeshtjA~D99upvl9vZSfMHFx-WdIewdhJjP99WkftgmruIBFXseK5kKP4GvX8LRoNrQDg__",
        description: "An interactive online learning platform for students of all ages.",
        client: "Educate Inc.",
        year: 2024,
        technologies: ["React", "Node.js", "MongoDB"],
        features: [
          "Interactive lessons",
          "Progress tracking",
          "Live tutoring sessions",
          "Mobile-friendly interface"
        ],
        review: {
          clientName: "Sarah Johnson",
          clientRole: "CEO, Educate Inc.",
          message: "The platform exceeded our expectations. Our students love the interactive features!",
          rating: 5
        },
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      };
    }
    
    // Special case for project28 - Make sure it's a Mobile App as indicated in comments
    if (projectId === 28) {
      return {
        id: `project${projectId}`,
        title: `Mobile App Project ${projectId}`,
        category: category,
        type: "Mobile App", // Ensure this is Mobile App as indicated in comments
        imageUrl: imageUrls[i % imageUrls.length] || "https://images.unsplash.com/photo-1579621970795-87facc2f976d",
        description: `This is a mobile application in the ${category} category.`,
        client: `Client ${projectId}`,
        year: 2023,
        technologies: ["React Native", "Firebase", "Redux"],
        features: [
          "Offline functionality",
          "Push notifications",
          "User authentication"
        ],
        review: {
          clientName: `Client ${projectId}`,
          clientRole: "Product Manager",
          message: "The mobile app has significantly improved our customer engagement!",
          rating: 5
        },
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      };
    }
    
    // Default case for all other projects
    return {
      id: `project${projectId}`,  // Changed to string format to match OurWork page
      title: `Project ${projectId}`,
      category: category,
      type: type,
      imageUrl: imageUrls[i % imageUrls.length] || "https://images.unsplash.com/photo-1579621970795-87facc2f976d",
      description: `This is an example project in the ${category} category.`,
      client: `Client ${projectId}`,
      year: 2020 + (i % 5),
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      features: [
        "Responsive design",
        "User-friendly interface",
        "Performance optimized"
      ],
      review: {
        clientName: `Client ${projectId}`,
        clientRole: "Project Manager",
        message: "Great work and excellent service!",
        rating: 4 + (i % 2)
      },
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    };
  })
];

// Function to get a project by ID
export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

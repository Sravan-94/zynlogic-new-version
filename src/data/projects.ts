// Shared project data for consistent access across components

export interface Project {
  id: string; // Changed from number to string to match OurWork page format
  title: string;
  category: string; // Allowed categories include: E-Commerce, CRM, Healthcare, Educational, Food & Delivery, Retail, Portfolio, Finance, Fashion
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
    detailImageUrl: "https://media-hosting.imagekit.io/57874a9b05534692/WhatsApp%20Image%202025-05-06%20at%2017.22.22_40ec6352.jpg?Expires=1841405156&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=VqBleHuXHjcd7LCCV052suyIj9Va3NLcdiBT3I1jIFTrN7krhVOE8o~03Ho6YYZSbHCZHGMiW2QYJaLNHlVbnp~xyIbIhBumUveJ5752GZi-Tw6zeWSXCLoQSv7RmiPddJ1LZhzlBissXZcCDK7uM6jLSNH7sSGLvvu9JRKxQOhy0L~mjfmFaYXS8kW4dNw3ONEUEctxZ-eOld4gcn9IpPCOf8Eo7fvg9NN53Nj0TXJpxsyZaHwqiYbXwlVHvfSbzp6dsujKCWGQhw4fI8PDQYoLZEse22AaW9h7hM3XgzepuIiZtNOGnLvB1igP5tMjrM3YPA8C9yypZEx-Bo--vA__",
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
    imageUrl: "https://media-hosting.imagekit.io/25d455fc6576409f/WhatsApp%20Image%202025-05-06%20at%2014.38.36_d771d972.jpg?Expires=1841405128&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=UFMJyQP8kDCUEafE1H3jfOYf077oDD~FHvW~UPH~Cs36NT38-VgahDv1ZwkN-Lv940KJjURzMwpZxPzALl9hX6KbbHp85kL8nhrn6XxWJgBHNMjP48~C2jTManFzPlrt90R~loHBfU20q39SLYm0NIL2cH7d6F9lH~z1hmmRmtsIWcS2e-0o1wb8VDhhf2h7J65gAUs5efPK2c4Vfj-z9UseSJRPnW9t-Aq7KeeAx6Ry6urZfyQaQ4~Vu9ki-MGQDHf~TzakpJZdQRMfcnEzOhDGrwVc4wLZYoSm1w-yKbZmuKZlv-5zLDZQG23N-huT8lFFj89F2WIChi36Gi97zw__",
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
    title: "Apptivo",
    category: "CRM",
    type: "Website",
    imageUrl: "https://media-hosting.imagekit.io/ae480e6896a547a2/WhatsApp%20Image%202025-05-06%20at%2017.51.44_bc6618f9.jpg?Expires=1841405335&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=OH~grjpfUUau1j0u7uis1qq5--hl74e-thfhhkS2fSaK10VtP0VAdMv8xm6PoicKLEWwE~KkWJzCFVSqG5tXnKVCGziAbjQt-VHRC8b41qJc0eODdZsn312cgjA1Lv1gwJ7mCu2Tv~XR3yx5NAAClFFrjSuSX3DHfCDUOX0vF9-6VIr7Msj8cVhsGy3NK42JL-QXUczdr~DuIMlkfIEIcD6cNrHehNju5K5vj2apKK5aVesDD~pDddYwP4JsR7mBAGRAhPA1khkB5Nli4AzGz9G3hbSvlRGcBLv83d7kqSXauYtH0KB7Zann2SspP29uZ~tCDyla9H4GqZTwyN9XBg__",
    description: "A powerful retail shopping platform.",
    client: "Apptivo",
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
  {
    id: "project4",
    title: "Bitrix24",
    category: "CRM",
    type: "Website",
    imageUrl: "https://media-hosting.imagekit.io/b3f08712c0804330/WhatsApp%20Image%202025-05-06%20at%2017.22.22_40ec6352.jpg?Expires=1841405316&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=XlI5tGlWOAcp-OH2xNpDgPLLCZxBWGYhsT~7xSZdwi2y4H4Armtma9V-EK8rgIJd84gCQeci2jiSWcs8Rdy-HHuez9wJ5epH28frxjrcwlhfmyO4F8kj3MnH7x7DXXCd1065-RvB9Gzck2lxNSeWBl3MPGmZzLqX3bV8vVfl2~aQ7OQjKaZa2c4onkPGzSOmxvYp9EZnVwhijNPvLNeUYdA~FfZaYA8zmGgfLhoSExIkPhjRZeLJgw7dvT5hH5nCu1L7WJracyH3NgzRMrdUyyuOkd4jaHLi8-zfA-pjkzSgmYblQv9HwNkdZuinngBkg2Q4SfW5skYgfpkTRJE8ug__",
    description: "A powerful retail shopping platform.",
    client: "Bitrix24",
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
  {
    id: "project5",
    title: "Zomato",
    category: "Food & Delivery",
    type: "Website",
    imageUrl: "https://media-hosting.imagekit.io/0a0313adf5f64705/WhatsApp%20Image%202025-05-06%20at%2014.38.38_f6c35d43.jpg",
    description: "A food delivery platform connecting users with restaurants.",
    client: "Zomato",
    year: 2024,
    technologies: ["React", "Node.js", "MongoDB"],
    features: [
      "Restaurant search and filtering",
      "Online ordering",
      "Delivery tracking",
      "User reviews and ratings"
    ],
    review: {
      clientName: "Deepinder Goyal",
      clientRole: "CEO, Zomato",
      message: "Excellent work on our platform. The user experience has improved significantly.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project6",
    title: "PhonePe",
    category: "Finance",
    type: "Website",
    imageUrl: "https://media-hosting.imagekit.io/8db41e1f0ae549c4/WhatsApp%20Image%202025-05-05%20at%2018.07.32_aad7af30.jpg",
    description: "A digital payment platform for seamless financial transactions.",
    client: "PhonePe",
    year: 2024,
    technologies: ["React", "Node.js", "PostgreSQL"],
    features: [
      "UPI payments",
      "Bill payments",
      "Money transfers",
      "Investment options"
    ],
    review: {
      clientName: "Sameer Nigam",
      clientRole: "CEO, PhonePe",
      message: "The platform has exceeded our expectations in terms of performance and security.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project7",
    title: "Swiggy",
    category: "Food & Delivery",
    type: "Website",
    imageUrl: "https://media-hosting.imagekit.io/0a0313adf5f64705/WhatsApp%20Image%202025-05-06%20at%2014.38.38_f6c35d43.jpg",
    description: "A food delivery service connecting users with local restaurants.",
    client: "Swiggy",
    year: 2024,
    technologies: ["React", "Express", "MongoDB"],
    features: [
      "Restaurant discovery",
      "Real-time order tracking",
      "Multiple payment options",
      "Subscription plans"
    ],
    review: {
      clientName: "Sriharsha Majety",
      clientRole: "CEO, Swiggy",
      message: "The platform has helped us scale our operations efficiently.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project8",
    title: "Google Pay",
    category: "Finance",
    type: "Website",
    imageUrl: "https://media-hosting.imagekit.io/0a0313adf5f64705/WhatsApp%20Image%202025-05-06%20at%2014.38.38_f6c35d43.jpg",
    description: "A digital payment app for fast and secure transactions.",
    client: "Google",
    year: 2024,
    technologies: ["Angular", "Firebase", "Cloud Functions"],
    features: [
      "UPI payments",
      "Contactless payments",
      "Bill splitting",
      "Rewards program"
    ],
    review: {
      clientName: "John Smith",
      clientRole: "Product Manager, Google Pay",
      message: "The implementation was smooth and the platform has been performing excellently.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project9",
    title: "Myntra",
    category: "Fashion",
    type: "Website",
    imageUrl: "https://media-hosting.imagekit.io/0a0313adf5f64705/WhatsApp%20Image%202025-05-06%20at%2014.38.38_f6c35d43.jpg",
    description: "A fashion e-commerce platform offering a wide range of clothing and accessories.",
    client: "Myntra",
    year: 2024,
    technologies: ["React", "Node.js", "MongoDB"],
    features: [
      "Personalized recommendations",
      "Virtual try-on",
      "Size guide",
      "Wishlist functionality"
    ],
    review: {
      clientName: "Amar Nagaram",
      clientRole: "CEO, Myntra",
      message: "The platform has significantly improved our conversion rates and user engagement.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project10",
    title: "Paytm",
    category: "Finance",
    type: "Website",
    imageUrl: "https://media-hosting.imagekit.io/0a0313adf5f64705/WhatsApp%20Image%202025-05-06%20at%2014.38.38_f6c35d43.jpg",
    description: "A digital payment and financial services platform.",
    client: "Paytm",
    year: 2024,
    technologies: ["React", "Node.js", "PostgreSQL"],
    features: [
      "UPI payments",
      "Wallet services",
      "Bill payments",
      "Banking services"
    ],
    review: {
      clientName: "Vijay Shekhar Sharma",
      clientRole: "CEO, Paytm",
      message: "The platform has been instrumental in our digital transformation journey.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project11",
    title: "Flipkart",
    category: "E-Commerce",
    type: "Website",
    imageUrl: "https://media-hosting.imagekit.io/0a0313adf5f64705/WhatsApp%20Image%202025-05-06%20at%2014.38.38_f6c35d43.jpg",
    description: "A comprehensive e-commerce platform for various product categories.",
    client: "Flipkart",
    year: 2024,
    technologies: ["React", "Node.js", "MySQL"],
    features: [
      "Product search and filtering",
      "User reviews and ratings",
      "Secure checkout",
      "Order tracking"
    ],
    review: {
      clientName: "Kalyan Krishnamurthy",
      clientRole: "CEO, Flipkart",
      message: "The platform has significantly improved our user engagement and conversion rates.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project12",
    title: "Swiggy App",
    category: "Food & Delivery",
    type: "Mobile App",
    imageUrl: "https://media-hosting.imagekit.io/0a0313adf5f64705/WhatsApp%20Image%202025-05-06%20at%2014.38.38_f6c35d43.jpg",
    description: "A mobile application for food delivery services.",
    client: "Swiggy",
    year: 2024,
    technologies: ["React Native", "Node.js", "MongoDB"],
    features: [
      "Restaurant discovery",
      "Real-time order tracking",
      "In-app payments",
      "Delivery partner tracking"
    ],
    review: {
      clientName: "Sriharsha Majety",
      clientRole: "CEO, Swiggy",
      message: "The mobile app has significantly improved our user engagement and order frequency.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project13",
    title: "Amazon",
    category: "E-Commerce",
    type: "Website",
    imageUrl: "https://media-hosting.imagekit.io/0a0313adf5f64705/WhatsApp%20Image%202025-05-06%20at%2014.38.38_f6c35d43.jpg",
    description: "A global e-commerce platform for various product categories.",
    client: "Amazon",
    year: 2024,
    technologies: ["React", "Java", "AWS"],
    features: [
      "Product search and filtering",
      "Personalized recommendations",
      "Prime membership",
      "Multiple payment options"
    ],
    review: {
      clientName: "Andy Jassy",
      clientRole: "CEO, Amazon",
      message: "The platform has helped us scale our operations and improve user experience.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project14",
    title: "Zomato App",
    category: "Food & Delivery",
    type: "Mobile App",
    imageUrl: "https://media-hosting.imagekit.io/0a0313adf5f64705/WhatsApp%20Image%202025-05-06%20at%2014.38.38_f6c35d43.jpg",
    description: "A mobile application for food delivery and restaurant discovery.",
    client: "Zomato",
    year: 2024,
    technologies: ["React Native", "Node.js", "MongoDB"],
    features: [
      "Restaurant discovery",
      "Real-time order tracking",
      "In-app payments",
      "User reviews and ratings"
    ],
    review: {
      clientName: "Deepinder Goyal",
      clientRole: "CEO, Zomato",
      message: "The mobile app has significantly improved our user engagement and order frequency.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project15",
    title: "Nykaa",
    category: "Fashion",
    type: "Website",
    imageUrl: "https://media-hosting.imagekit.io/0a0313adf5f64705/WhatsApp%20Image%202025-05-06%20at%2014.38.38_f6c35d43.jpg",
    description: "A beauty and personal care e-commerce platform.",
    client: "Nykaa",
    year: 2024,
    technologies: ["React", "Node.js", "MySQL"],
    features: [
      "Product search and filtering",
      "Beauty advice and tutorials",
      "User reviews and ratings",
      "Personalized recommendations"
    ],
    review: {
      clientName: "Falguni Nayar",
      clientRole: "CEO, Nykaa",
      message: "The platform has significantly improved our user engagement and conversion rates.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project16",
    title: "Myntra App",
    category: "Fashion",
    type: "Website",
    imageUrl: "https://media-hosting.imagekit.io/3f8597c685b64fa6/original-32be5e984093054360bf86a4415ad244.webp",
    description: "A leading fashion e-commerce platform with a wide range of brands.",
    client: "Myntra",
    year: 2024,
    technologies: ["React", "Node.js", "MongoDB"],
    features: [
      "Personalized recommendations",
      "Size guide",
      "Wishlist functionality",
      "Flash sales"
    ],
    review: {
      clientName: "Amar Nagaram",
      clientRole: "CEO, Myntra",
      message: "The website has significantly improved our user engagement and conversion rates.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project17",
    title: "Ajio",
    category: "Fashion",
    type: "Website",
    imageUrl: "https://media-hosting.imagekit.io/049a00b0a87b4015/original-0521ffb927e909ac58f6b2f1e688c50b.webp",
    description: "A premium online fashion store offering curated collections from multiple brands.",
    client: "Ajio",
    year: 2024,
    technologies: ["React", "Express", "PostgreSQL"],
    features: [
      "Designer collections",
      "Brand focus",
      "Seasonal sales",
      "Fashion blog"
    ],
    review: {
      clientName: "Vineeth Nair",
      clientRole: "CTO, Ajio",
      message: "The website has helped us establish our unique brand identity in the market.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project18",
    title: "Amazon App",
    category: "E-Commerce",
    type: "Website",
    imageUrl: "https://media-hosting.imagekit.io/bb9615e784a9411f/original-fa5f62adaa5e47dd11353d97d8d0b132.webp",
    description: "A comprehensive e-commerce platform with extensive product selection and fast delivery.",
    client: "Amazon",
    year: 2024,
    technologies: ["React", "Java", "AWS"],
    features: [
      "Amazon Prime integration",
      "One-day delivery",
      "Customer reviews",
      "Deal of the day"
    ],
    review: {
      clientName: "Andy Jassy",
      clientRole: "CEO, Amazon",
      message: "The website has helped us scale our operations globally and provide better customer service.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project20",
    title: "Flipkart App",
    category: "E-Commerce",
    type: "Website",
    imageUrl: "https://media-hosting.imagekit.io/a4c523011d8d4875/WhatsApp%20Image%202025-05-09%20at%2016.22.33_652a0caf.jpg",
    description: "A comprehensive e-commerce platform offering a wide range of products across all categories.",
    client: "Flipkart",
    year: 2024,
    technologies: ["React", "Node.js", "MySQL"],
    features: [
      "Personalized recommendations",
      "Flash sales",
      "Plus membership benefits",
      "Quick delivery options"
    ],
    review: {
      clientName: "Kalyan Krishnamurthy",
      clientRole: "CEO, Flipkart",
      message: "This platform has transformed our online presence and significantly boosted our sales.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project21",
    title: "app 1",
    category: "E-Commerce",
    type: "Mobile App",
    imageUrl: "https://media-hosting.imagekit.io/7ab5c2dacaf8465e/WhatsApp%20Image%202025-05-05%20at%2020.27.10_6714b0fd.jpg",
    description: "A feature-rich mobile application for seamless shopping experiences.",
    client: "App Innovations",
    year: 2024,
    technologies: ["React Native", "Firebase", "Redux"],
    features: [
      "Voice search",
      "AR product view",
      "Offline catalog browsing",
      "Social sharing"
    ],
    review: {
      clientName: "Michael Chen",
      clientRole: "CTO, App Innovations",
      message: "The mobile app has exceeded our expectations in both design and functionality.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project22",
    title: "app 2",
    category: "Productivity",
    type: "Mobile App",
    imageUrl: "https://media-hosting.imagekit.io/fff3fd4ead144d2b/WhatsApp%20Image%202025-05-05%20at%2020.27.12_77247ef7.jpg",
    description: "A comprehensive productivity application for professionals and teams.",
    client: "Productivity Plus",
    year: 2024,
    technologies: ["Flutter", "Firebase", "Google Cloud"],
    features: [
      "Task management",
      "Calendar integration",
      "Team collaboration",
      "Document sharing"
    ],
    review: {
      clientName: "Jennifer Wong",
      clientRole: "Product Director, Productivity Plus",
      message: "This app has transformed our workflow and boosted team productivity significantly.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project23",
    title: "crm app 1",
    category: "CRM",
    type: "Mobile App",
    imageUrl: "https://media-hosting.imagekit.io/65b2b5daf2e04f32/WhatsApp%20Image%202025-05-05%20at%2018.17.23_f45317c9.jpg",
    description: "A comprehensive CRM mobile application for sales teams on the go.",
    client: "CRM Solutions",
    year: 2024,
    technologies: ["React Native", "AWS", "GraphQL"],
    features: [
      "Lead management",
      "Pipeline visualization",
      "Task assignment",
      "Performance analytics"
    ],
    review: {
      clientName: "Robert Johnson",
      clientRole: "Sales Director, CRM Solutions",
      message: "This mobile CRM has transformed how our sales team operates in the field.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project24",
    title: "crm app 2",
    category: "CRM",
    type: "Mobile App",
    imageUrl: "https://media-hosting.imagekit.io/2bdb2eaba9314bc1/WhatsApp%20Image%202025-05-05%20at%2017.27.25_f87c9d53.jpg",
    description: "An advanced customer relationship management app for enterprise teams.",
    client: "Enterprise Solutions Inc.",
    year: 2024,
    technologies: ["Flutter", "Firebase", "AI Analytics"],
    features: [
      "AI-powered insights",
      "Customer journey mapping",
      "Automated follow-ups",
      "Integration with email and calling"
    ],
    review: {
      clientName: "Amanda Peters",
      clientRole: "CIO, Enterprise Solutions",
      message: "This CRM app has revolutionized how we handle customer relationships and boosted conversion rates.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project25",
    title: "food 1",
    category: "Food & Delivery",
    type: "Mobile App",
    imageUrl: "https://media-hosting.imagekit.io/9c8607d8375a4f55/WhatsApp%20Image%202025-05-05%20at%2018.07.19_59df7558.jpg",
    description: "A food delivery application connecting users with their favorite restaurants.",
    client: "Food Connect",
    year: 2024,
    technologies: ["React Native", "Node.js", "MongoDB"],
    features: [
      "Real-time order tracking",
      "Restaurant discovery",
      "Personalized recommendations",
      "Contactless delivery options"
    ],
    review: {
      clientName: "Lisa Wang",
      clientRole: "CEO, Food Connect",
      message: "This app has transformed our food delivery service and significantly increased our customer base.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project26",
    title: "food 2",
    category: "Food & Delivery",
    type: "Mobile App",
    imageUrl: "https://media-hosting.imagekit.io/6fcfb7daec10440b/WhatsApp%20Image%202025-05-05%20at%2020.27.07_d8c5b4ca.jpg",
    description: "A premium food delivery app for gourmet restaurants and specialized cuisines.",
    client: "Gourmet Eats",
    year: 2024,
    technologies: ["React Native", "Express", "MongoDB"],
    features: [
      "Cuisine specialization",
      "Chef profiles",
      "Ingredient transparency",
      "Special dietary options"
    ],
    review: {
      clientName: "Thomas Reynolds",
      clientRole: "Founder, Gourmet Eats",
      message: "This app has helped us reach a niche market of food enthusiasts and elevated our service.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project27",
    title: "Grofers",
    category: "Food & Delivery",
    type: "Mobile App",
    imageUrl: "https://media-hosting.imagekit.io/2d83437c09034324/WhatsApp%20Image%202025-05-05%20at%2020.27.11_e0d09124.jpg",
    description: "A grocery delivery application that brings fresh produce and essentials to your doorstep.",
    client: "Grofers",
    year: 2024,
    technologies: ["React Native", "Node.js", "MongoDB"],
    features: [
      "Scheduled delivery",
      "Express delivery options",
      "Loyalty program",
      "Subscription service"
    ],
    review: {
      clientName: "Albinder Dhindsa",
      clientRole: "CEO, Grofers",
      message: "This app has revolutionized our grocery delivery service and significantly improved user retention.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project28",
    title: "Lenskart",
    category: "Retail",
    type: "Mobile App",
    imageUrl: "https://media-hosting.imagekit.io/69106931396b4338/WhatsApp%20Image%202025-05-05%20at%2018.22.02_7a48302d.jpg",
    description: "An eyewear shopping application with virtual try-on technology.",
    client: "Lenskart",
    year: 2024,
    technologies: ["Flutter", "Firebase", "AR Kit"],
    features: [
      "Virtual try-on",
      "Frame size recommendation",
      "Prescription management",
      "Home eye test booking"
    ],
    review: {
      clientName: "Peyush Bansal",
      clientRole: "Founder, Lenskart",
      message: "This application has transformed the eyewear shopping experience and increased our conversion rates.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project29",
    title: "Pepperfry",
    category: "Retail",
    type: "Mobile App",
    imageUrl: "https://media-hosting.imagekit.io/c389708161ed4163/WhatsApp%20Image%202025-05-05%20at%2020.27.07_65aa4078.jpg",
    description: "A furniture and home decor shopping app with 3D visualization features.",
    client: "Pepperfry",
    year: 2024,
    technologies: ["React Native", "Node.js", "AR Framework"],
    features: [
      "AR furniture placement",
      "Room planning tool",
      "Interior design consultation",
      "EMI options"
    ],
    review: {
      clientName: "Ambareesh Murty",
      clientRole: "CEO, Pepperfry",
      message: "This application has revolutionized how customers shop for furniture and significantly reduced returns.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project30",
    title: "MakeMyTrip",
    category: "Travel",
    type: "Mobile App",
    imageUrl: "https://media-hosting.imagekit.io/176737cc179b4376/original-f1e2b34a8a8030e12f2a83625ecac051.webp",
    description: "A comprehensive travel booking application for flights, hotels, and holiday packages.",
    client: "MakeMyTrip",
    year: 2024,
    technologies: ["React Native", "Node.js", "MongoDB"],
    features: [
      "Multi-city flight booking",
      "Hotel comparison",
      "Trip reviews",
      "Last-minute deals"
    ],
    review: {
      clientName: "Deep Kalra",
      clientRole: "Founder, MakeMyTrip",
      message: "This application has streamlined our booking process and significantly improved user experience.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project31",
    title: "Snapdeal",
    category: "E-Commerce",
    type: "Mobile App",
    imageUrl: "https://media-hosting.imagekit.io/2754ebafe0214d06/WhatsApp%20Image%202025-05-05%20at%2020.26.38_218488e8.jpg",
    description: "A value-focused e-commerce platform offering a wide range of products at competitive prices.",
    client: "Snapdeal",
    year: 2024,
    technologies: ["React Native", "Node.js", "MongoDB"],
    features: [
      "Deal of the day",
      "Flash sales",
      "Budget filtering",
      "Comparison shopping"
    ],
    review: {
      clientName: "Kunal Bahl",
      clientRole: "Co-founder, Snapdeal",
      message: "This application has significantly improved our mobile user engagement and conversion rates.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project32",
    title: "BookMyShow",
    category: "Entertainment",
    type: "Mobile App",
    imageUrl: "https://media-hosting.imagekit.io/97d565499025469f/WhatsApp%20Image%202025-05-05%20at%2020.27.12_f46d2e07.jpg",
    description: "An entertainment ticketing platform for movies, events, and experiences.",
    client: "BookMyShow",
    year: 2024,
    technologies: ["React Native", "Node.js", "MySQL"],
    features: [
      "Seat selection",
      "Food pre-ordering",
      "Event recommendations",
      "M-ticket functionality"
    ],
    review: {
      clientName: "Ashish Hemrajani",
      clientRole: "Founder, BookMyShow",
      message: "This application has transformed our ticketing process and significantly improved user experience.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project33",
    title: "FirstCry",
    category: "Retail",
    type: "Mobile App",
    imageUrl: "https://media-hosting.imagekit.io/76f13343a8874ae5/WhatsApp%20Image%202025-05-05%20at%2020.27.09_2ef24b7d.jpg",
    description: "A baby and kids products shopping application with parenting guidance.",
    client: "FirstCry",
    year: 2024,
    technologies: ["React Native", "Node.js", "MongoDB"],
    features: [
      "Age-based recommendations",
      "Parenting articles",
      "Baby registry",
      "Club membership"
    ],
    review: {
      clientName: "Supam Maheshwari",
      clientRole: "Founder, FirstCry",
      message: "This application has helped us connect with parents and provide tailored shopping experiences.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project34",
    title: "Groww",
    category: "Finance",
    type: "Mobile App",
    imageUrl: "https://media-hosting.imagekit.io/c0843e9ded804015/WhatsApp%20Image%202025-05-05%20at%2020.27.11_29a4fa4c.jpg",
    description: "An investment platform application for stocks, mutual funds, and digital gold.",
    client: "Groww",
    year: 2024,
    technologies: ["React Native", "Node.js", "PostgreSQL"],
    features: [
      "Portfolio tracking",
      "SIP investments",
      "Market insights",
      "Educational content"
    ],
    review: {
      clientName: "Lalit Keshre",
      clientRole: "CEO, Groww",
      message: "This application has democratized investing and made it accessible to millions of users.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project35",
    title: "Urban Company",
    category: "Services",
    type: "Mobile App",
    imageUrl: "https://media-hosting.imagekit.io/e2f9de24290b498a/WhatsApp%20Image%202025-05-05%20at%2018.31.55_3d5e0f55.jpg",
    description: "A home services application connecting users with professional service providers.",
    client: "Urban Company",
    year: 2024,
    technologies: ["React Native", "Node.js", "MongoDB"],
    features: [
      "Service booking",
      "Professional profiles",
      "Real-time tracking",
      "Subscription plans"
    ],
    review: {
      clientName: "Abhiraj Bhal",
      clientRole: "Co-founder, Urban Company",
      message: "This application has transformed the home services industry and improved service quality standards.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project36",
    title: "Zerodha",
    category: "Finance",
    type: "Mobile App",
    imageUrl: "https://media-hosting.imagekit.io/ad3b8c84693747fb/original-f1e2b34a8a8030e12f2a83625ecac051.webp",
    description: "A discount broking platform application for stock trading and investments.",
    client: "Zerodha",
    year: 2024,
    technologies: ["React Native", "Java", "PostgreSQL"],
    features: [
      "Real-time market data",
      "Advanced charting",
      "Paperless account opening",
      "F&O trading"
    ],
    review: {
      clientName: "Nithin Kamath",
      clientRole: "Founder, Zerodha",
      message: "This application has revolutionized the stock trading experience in India with its simplicity and performance.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project37",
    title: "1mg",
    category: "Healthcare",
    type: "Mobile App",
    imageUrl: "https://media-hosting.imagekit.io/67fb377a0d5e4b59/WhatsApp%20Image%202025-05-05%20at%2020.27.09_2775ac77.jpg",
    description: "A healthcare platform for medicine delivery and online consultations.",
    client: "1mg",
    year: 2024,
    technologies: ["React Native", "Node.js", "MongoDB"],
    features: [
      "Medicine delivery",
      "Online doctor consultation",
      "Health records",
      "Lab test booking"
    ],
    review: {
      clientName: "Prashant Tandon",
      clientRole: "Founder, 1mg",
      message: "This application has transformed healthcare accessibility and simplified medicine purchases for millions.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project38",
    title: "Cult.fit",
    category: "Healthcare",
    type: "Mobile App",
    imageUrl: "https://media-hosting.imagekit.io/ec0cb6c707a2424f/original-cd739778d99a850a4ded174d188bdbb5.webp",
    description: "A fitness and wellness application for workouts, meditation, and healthy meals.",
    client: "Cult.fit",
    year: 2024,
    technologies: ["React Native", "Node.js", "MongoDB"],
    features: [
      "Live fitness classes",
      "Workout tracking",
      "Meditation sessions",
      "Healthy meal delivery"
    ],
    review: {
      clientName: "Mukesh Bansal",
      clientRole: "Founder, Cult.fit",
      message: "This application has transformed the fitness industry with its holistic approach to wellness.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project39",
    title: "Cleartrip",
    category: "Travel",
    type: "Mobile App",
    imageUrl: "https://media-hosting.imagekit.io/11c927eed8384c8f/original-d0050409c3a61b4125176ec94fc1b5d6.webp",
    description: "A travel booking application with a focus on simplicity and transparency.",
    client: "Cleartrip",
    year: 2024,
    technologies: ["React Native", "Node.js", "PostgreSQL"],
    features: [
      "Flight booking",
      "Hotel reservation",
      "Holiday packages",
      "Local experiences"
    ],
    review: {
      clientName: "Stuart Crighton",
      clientRole: "Founder, Cleartrip",
      message: "This application has simplified the travel booking process and increased our customer satisfaction rates.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project40",
    title: "Unacademy",
    category: "Educational",
    type: "Mobile App",
    imageUrl: "https://media-hosting.imagekit.io/11c927eed8384c8f/original-d0050409c3a61b4125176ec94fc1b5d6.webp",
    description: "An educational platform application offering courses for competitive exams and skill development.",
    client: "Unacademy",
    year: 2024,
    technologies: ["React Native", "Node.js", "MongoDB"],
    features: [
      "Live classes",
      "Recorded sessions",
      "Practice tests",
      "Personalized study plans"
    ],
    review: {
      clientName: "Gaurav Munjal",
      clientRole: "Co-founder, Unacademy",
      message: "This application has democratized education and helped millions of students achieve their goals.",
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

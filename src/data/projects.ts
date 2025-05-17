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
    imageUrl: "/e-comm website 1.jpg",
    detailImageUrl: "/e-comm website 1.jpg",
    description: "A certified organic personal care brand with a focus on sustainability and clean beauty.",
    client: "Juicy Chemistry",
    year: 2023,
    technologies: ["Next.js", "Tailwind CSS", "Stripe API"],
    features: [
      "Organic skincare product catalog",
      "Seamless cart and checkout flow",
      "Subscription-based product ordering",
      "Eco-friendly brand storytelling"
    ],
    review: {
      clientName: "Megha Asher",
      clientRole: "Co-Founder, Juicy Chemistry",
      message: "Zynlogic understood our brand ethos perfectly and delivered a clean, high-performing site. We’re thrilled!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed"
  },
  {
    id: "project2",
    title: "Chumbak",
    category: "Portfolio",
    type: "Website",
    imageUrl: "/e-comm website 1.jpg",
    description: "A vibrant lifestyle brand with quirky designs across fashion and home.",
    client: "Chumbak",
    year: 2024,
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    features: [
      "Stylish product showcases",
      "Smooth shopping experience",
      "Mobile-first responsive design",
      "Easy returns and support"
    ],
    review: {
      clientName: "Vivek Prabhakar",
      clientRole: "Co-Founder, Chumbak",
      message: "Zynlogic captured our brand’s personality flawlessly. The new site is fun, fast, and customer-friendly!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed"
  },
  {
    id: "project3",
    title: "Apptivo",
    category: "CRM",
    type: "Website",
    imageUrl: "/crm website 2.jpg",
    description: "A comprehensive cloud-based suite for business CRM and ERP needs.",
    client: "Apptivo",
    year: 2024,
    technologies: ["Next.js", "Stripe", "Vercel"],
    features: [
      "Custom CRM workflows",
      "Integrated invoicing tools",
      "Role-based user access",
      "Real-time analytics dashboard"
    ],
    review: {
      clientName: "Bastin Gerald",
      clientRole: "Founder & CEO, Apptivo",
      message: "Zynlogic streamlined our platform’s UX and performance. A dependable and skilled tech partner.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed"
  },
  {
    id: "project4",
    title: "Bitrix24",
    category: "CRM",
    type: "Website",
    imageUrl: "/crm website 1.jpg",
    description: "An all-in-one collaboration platform for CRM, communication, and project management.",
    client: "Bitrix24",
    year: 2024,
    technologies: ["Next.js", "Stripe", "Vercel"],
    features: [
      "Unified communication tools",
      "Custom CRM automation",
      "Task and project tracking",
      "Team collaboration dashboard"
    ],
    review: {
      clientName: "Dmitry Valyanov",
      clientRole: "President, Bitrix24",
      message: "Zynlogic brought clarity and structure to our complex platform. Outstanding execution and support!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed"
  },
  {
    id: "project5",
    title: "hungerybox",
    category: "Food & Delivery",
    type: "Website",
    imageUrl: "/food website 1.png",
    description: "A smart food ordering platform for corporate cafeterias and large institutions.",
    client: "hungerybox",
    year: 2024,
    technologies: ["React", "Node.js", "MongoDB"],
    features: [
      "Real-time cafeteria menus",
      "Contactless QR ordering",
      "Wallet and payment integration",
      "Admin analytics panel"
    ],
    review: {
      clientName: "Sandipan Mitra",
      clientRole: "CEO, HungerBox",
      message: "Zynlogic transformed our food tech experience with intuitive design and flawless functionality.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed"
  },
  {
    id: "project6",
    title: "Biryanibykilo",
    category: "Food & Delivery",
    type: "Website",
    imageUrl: "/food website 2.png",
    description: "A premium biryani delivery brand offering authentic, handi-cooked meals.",
    client: "Biryanibykilo",
    year: 2024,
    technologies: ["React", "Node.js", "PostgreSQL"],
    features: [
      "Menu-based food ordering",
      "Handi cooking time tracker",
      "Integrated delivery logistics",
      "Loyalty and referral programs"
    ],
    review: {
      clientName: "Kaushik Roy",
      clientRole: "Co-Founder, Biryani By Kilo",
      message: "Zynlogic delivered a high-performance platform that matches our premium food experience. Highly recommended!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed"
  },
  {
    id: "project7",
    title: "Traveltriangle",
    category: "Tourism",
    type: "Website",
    imageUrl: "/tourism website 1.png",
    description: "A marketplace connecting travelers with curated holiday packages from verified agents.",
    client: "Traveltriangle",
    year: 2024,
    technologies: ["React", "Express", "MongoDB"],
    features: [
      "Custom trip planning tool",
      "Agent comparison interface",
      "Secure booking system",
      "Traveler reviews and ratings"
    ],
    review: {
      clientName: "Sanchit Garg",
      clientRole: "Co-Founder, TravelTriangle",
      message: "Zynlogic built a travel platform that balances usability and scale. Excellent delivery and support!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed"
  },
  {
    id: "project8",
    title: "kiomoi",
    category: "Tourism & Travel",
    type: "Website",
    imageUrl: "/tourism website 2.png",
    description: "A travel platform offering customized tour planning and booking solutions.",
    client: "kiomoi",
    year: 2024,
    technologies: ["Angular", "Firebase", "Cloud Functions"],
    features: [
      "Dynamic itinerary builder",
      "Secure online payments",
      "Tour package management",
      "Real-time booking engine"
    ],
    review: {
      clientName: "Amit Sharma",
      clientRole: "CEO, Kiomoi",
      message:"Zynlogic delivered a seamless travel booking platform beyond expectations. Truly impressive work!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed"
  },
  {
    id: "project9",
    title: "Medmonks",
    category: "Healthcare",
    type: "Website",
    imageUrl: "/healthcare website 2.png",
    description: "Medmonks connects global patients with trusted healthcare providers in India for affordable and high-quality medical treatments.",
    client: "Medmonks",
    year: 2024,
    technologies: ["React", "Node.js", "MongoDB"],
    features: [
      "AI-Driven Doctor Matching",
      "Verified Hospital Profiles",
      "24-Hour Cost Estimates",
      "Multilingual Support"
    ],
    review: {
      clientName: "Sanchit Sharma",
      clientRole: "CEO, Medmonks",
      message: "Medmonks revolutionized our approach to medical tourism. Their seamless service and expert support made everything easy.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed"
  },
  {
    id: "project10",
    title: "Healcard",
    category: "Healthcare",
    type: "Website",
    imageUrl: "/healthcare website 3.png",
    description: "A cloud-based healthcare platform for patients, doctors, and pharmacies.",
    client: "Healcard",
    year: 2024,
    technologies: ["React", "Node.js", "PostgreSQL"],
    features: [
      "AI-powered EMR system",
      "Online appointment scheduling",
      "Telemedicine and e-prescriptions",
      "Secure medical record management"
    ],
    review: {
      clientName: "Dr. Jane Smith",
      clientRole: "CEO, Healcard",
      message: "Zynlogic delivered a robust healthcare solution with excellent support!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed"
  },
  {
    id: "project11",
    title: "Pearlacademy",
    category: "Education",
    type: "Website",
    imageUrl: "/education website 1.png",
    description: "A premier institute offering globally recognized degrees in design, fashion, and creative business.",
    client: "Pearlacademy",
    year: 2024,
    technologies: ["React", "Node.js", "MySQL"],
    features: [
      "Virtual avatar builder integration",
      "Online portfolio showcase platform",
      "Interactive course preview system",
      "Real-time lecture streaming"
    ],
    review: {
      clientName: "Priya Sharma",
      clientRole: "Director, Pearl Academy",
      message: "Zynlogic created a dynamic, user-centric platform for creative education. Truly exceptional!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed"
  },
  {
    id: "project12",
    title: "Welingkar",
    category: "Education",
    type: "Mobile App",
    imageUrl: "/education website 2.png",
    description: "A premier B-school fostering innovative management education and industry-ready leaders.",
    client: "WeSchool",
    year: 2024,
    technologies: ["React Native", "Node.js", "MongoDB"],
    features: [
      "Immersive design thinking workshops",
      "Virtual experiential learning platform",
      "Global faculty collaboration portal",
      "Real-time industry project tracker"
    ],
    review: {
      clientName: "Dr. Uday Salunkhe",
      clientRole: "Group Director, WeSchool",
      message: "Zynlogic developed a transformative platform for modern management education. Exceptional work!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed"
  },
  {
    id: "project13",
    title: "Jobvisit",
    category: "Job Portal",
    type: "Website",
    imageUrl: "/job website 1.png",
    description: "An AI-driven recruitment platform connecting employers with top talent efficiently.",
    client: "Jobvisit",
    year: 2024,
    technologies: ["React", "Java", "AWS"],
    features: [
      "AI-powered candidate matching system",
      "Automated job posting tool",
      "Profile-based job recommendation engine",
      "Streamlined application tracking interface"
    ],
    review: {
      clientName: "Sarah Johnson",
      clientRole: "CEO, JobVisit.ai",
      message: "Zynlogic created a smart, efficient recruitment platform. Outstanding results!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed"
  },
  {
    id: "project14",
    title: "Hiremee",
    category: "Job Portal",
    type: "Website",
    imageUrl: "/job website 2.png",
    description: "An AI-driven platform connecting students and recruiters with skill assessments.",
    client: "Hiremee",
    year: 2024,
    technologies: ["React Native", "Node.js", "MongoDB"],
    features: [
      "AI-powered skill assessment system",
      "Video profile showcasing tool",
      "Pre-assessed candidate database",
      "Detailed skill-gap analysis reports"
    ],
    review: {
      clientName: "Ravi Kumar",
      clientRole: "CEO, HireMee",
      message: "Zynlogic enhanced our recruitment platform with seamless AI integration. Highly impressive!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed"
  },
  {
    id: "project15",
    title: "ssvcinfra",
    category: "Real Estate",
    type: "Website",
    imageUrl: "/real estate website 1.png",
    description: "A leading construction firm delivering turnkey solutions for residential and commercial projects.",
    client: "SSVC & Infrastructure Pvt. Ltd.",
    year: 2024,
    technologies: ["React", "Node.js", "MySQL"],
    features: [
      "Customizable project design tool",
      "Real-time construction progress dashboard",
      "Integrated budget tracking system",
      "Virtual 3D structure preview"
    ],
    review: {
      clientName: "Mr. Jeevan C",
      clientRole: "Director, SSVC & Infrastructure Pvt. Ltd.",
      message:"Zynlogic created an innovative platform that streamlined our construction process. Highly efficient!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed"
  },
  {
    id: "project16",
    title: "PropertyPanther",
    category: "Real Estate",
    type: "Website",
    imageUrl: "/real estate website 2.png",
    description: "A real estate consultancy connecting buyers with properties in Ahmedabad.",
    client: "PropertyPanther",
    year: 2024,
    technologies: ["React", "Node.js", "MongoDB"],
    features: [
      "Personalized property matching system",
      "24/7 expert consultation portal",
      "Virtual property tour integration",
      "Market trend analysis dashboard"
    ],
    review: {
      clientName: "Sandeep Pandya",
      clientRole: "Founder, Property Panther",
      message: "Zynlogic delivered a seamless platform for property solutions. Highly professional!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed"
  },
  {
    id: "project17",
    title: "mychoize",
    category: "Car Rental",
    type: "Website",
    imageUrl: "/car rental 1.png",
    description: "A self-drive car rental service offering flexibility across India.",
    client: "mychoize",
    year: 2024,
    technologies: ["React", "Express", "PostgreSQL"],
    features: [
      "Unlimited kilometers rental option",
      "24/7 roadside assistance support",
      "Flexible pick-up/drop-off locations",
      "Wide vehicle selection range"
    ],
    review: {
      clientName: "Ravi Sharma ",
      clientRole: "CEO, mychoize",
      message:"Zynlogic built a seamless, user-friendly car rental platform. Highly reliable!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed"
  },
  {
    id: "project18",
    title: "Carstreetindia",
    category: "Car Rental",
    type: "Website",
    imageUrl: "/car rental 2.png",
    description: "A premier dealership offering certified pre-owned luxury cars in Delhi.",
    client: "Carstreetindia",
    year: 2024,
    technologies: ["React", "Java", "AWS"],
    features: [
      "Rigorous multi-point quality checks",
      "Fixed price no-negotiation policy",
      "6-month warranty period",
      "Pan-India delivery service"
    ],
    review: {
      clientName: "Ravinder Singh Batra",
      clientRole: "Co-Founder, Car Street India",
      message: "Zynlogic crafted a seamless platform for luxury car buying. Exceptional service!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed"
  }, {
    id: "project19",
    title: "Spotbid",
    category: "Auction",
    type: "Website",
    imageUrl: "/auction website 1.png",
    description: "An e-auction platform revolutionizing procurement and disposal processes.",
    client: "Spotbid Solutions LLP",
    year: 2024,
    technologies: ["React", "Java", "AWS"],
    features: [
      "Customizable auction setup options",
      "Real-time bidding transparency dashboard",
      "Secure data protection system",
      "Post-auction analytics tool"
    ],
    review: {
      clientName: "Balaram R K",
      clientRole: "CEO, CEO, Spotbid Solutions LLP",
      message: "Zynlogic transformed our auction process with efficiency and transparency. Highly recommended!",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed"
  },
  {
    id: "project20",
    title: "Meta E-Auction",
    category: "auction",
    type: "Website",
    imageUrl: "/auction website 2.png",
    description: "An advanced e-auction platform for seamless bidding and procurement.",
    client: "Star enterprises",
    year: 2024,
    technologies: ["React", "Node.js", "MySQL"],
    features: [
      "Real-time bidding interface",
      "Secure transaction processing",
      "Custom auction configuration tool",
      "Automated bid escalation system"
    ],
    review: {
      clientName: "Ahmed Raza Khan",
      clientRole: "CEO, Star enterprises",
      message: "This platform has transformed our online presence and significantly boosted our sales.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed"
  },
  {
    id: "project21",
    title: "Bharatkart Seller",
    category: "E-Commerce",
    type: "Mobile App",
    imageUrl: "/e-comm app 2.jpg",
    description: "Bharatkart Seller is a feature-rich mobile application for seamless shopping experiences.",
    client: "Bharatkart",
    year: 2024,
    technologies: ["React Native", "Firebase", "Redux"],
    features: [
      "Buy directly from trusted Indian manufacturers and suppliers.",
      "Post custom product needs and get matched sellers.",
      "Explore thousands of products across multiple industries.",
      "Smooth, user-friendly app for easy browsing and buying."
    ],
    review: {
      clientName: "Michael Chen",
      clientRole: "CTO, App Innovations",
      message: "The mobile app has exceeded our expectations in both design and functionality.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed"
  },
  {
    id: "project22",
    title: "Trendsi - Fashion Dropshipping",
    category: "Productivity",
    type: "Mobile App",
    imageUrl: "/e-comm app 1.jpg",
    description: "Trendsi is a comprehensive fashion dropshipping application for professionals and teams.",
    client: "Trendsi",
    year: 2024,
    technologies: ["Flutter", "Firebase", "Google Cloud"],
    features: [
      "One-click product import with ready-to-use media.",
      "Flexible wholesale with low minimum order quantities.",
      "Custom manufacturing with full design ownership.",
      "Private labeling and customized packaging options."
    ],
    review: {
      clientName: "Jennifer Wong",
      clientRole: "Product Director, Productivity Plus",
      message: "This app has transformed our workflow and boosted team productivity significantly.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed"
  },
  {
    id: "project23",
    title: "Automate Sales",
    category: "CRM",
    type: "Mobile App",
    imageUrl: "/crm app 1.jpg",
    description: "Automate Sales is a CRM mobile application for sales teams on the go.",
    client: "Automate Sales",
    year: 2024,
    technologies: ["React Native", "AWS", "GraphQL"],
    features: [
      "Assign tasks with voice notes and attachments.",
      "Automated WhatsApp and email task reminders.",
      "Real-time dashboard for team performance tracking.",
      "Recurring tasks and smart follow-up automation."
    ],
    review: {
      clientName: "Robert Johnson",
      clientRole: "Sales Director, CRM Solutions",
      message: "This mobile CRM has transformed how our sales team operates in the field.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed"
  },
  {
    id: "project24",
    title: "Salesmate - Sales CRM",
    category: "CRM",
    type: "Mobile App",
    imageUrl: "/crm app 2.jpg",
    description: "Salesmate is an AI-powered CRM platform that streamlines sales, marketing, and support processes for teams.",
    client: "Salesmate",
    year: 2024,
    technologies: ["Flutter", "Firebase", "AI Analytics"],
    features: [
      "Manage deals with customizable sales pipelines.",
      "Automate emails using personalized templates.",
      "Built-in calling with activity logging.",
      "Real-time sync across mobile and desktop."
    ],
    review: {
      clientName: "Amanda Peters",
      clientRole: "CIO, Enterprise Solutions",
      message: "This CRM app has revolutionized how we handle customer relationships and boosted conversion rates.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed"
  },
  {
    id: "project25",
    title: "Cloud Kitchen - Dine Delicious",
    category: "Food & Delivery",
    type: "Mobile App",
    imageUrl: "/cloud kitechen.png",
    description: "Dine Delicious is a food delivery application connecting users with their favorite restaurants.",
    client: "Dine Delicious",
    year: 2024,
    technologies: ["React Native", "Node.js", "MongoDB"],
    features: [
      "Order history and delivery tracking",
      "Restaurant ratings and reviews",
      "Contactless payment options",
      "Push notifications for order updates"
    ],
    review: {
      clientName: "Lisa Wang",
      clientRole: "CEO, Food Connect",
      message: "This app has transformed our food delivery service and significantly increased our customer base.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed"
  },
  {
    id: "project26",
    title: "Kitchen - The Food Stop",
    category: "Food & Delivery",
    type: "Mobile App",
    imageUrl: "/food app 1.png",
    description: "Kitchen - The Food Stop is a premium food delivery app for gourmet restaurants and specialized cuisines.",
    client: "Kitchen - The Food Stop",
    year: 2024,
    technologies: ["React Native", "Express", "MongoDB"],
    features: [
      "Order pure vegetarian meals online with ease.",
      "Fast doorstep delivery across Lucknow city.",
      "User-friendly interface for seamless navigation.",
      "Regular updates with performance enhancements."
    ],
    review: {
      clientName: "Thomas Reynolds",
      clientRole: "Founder, Gourmet Eats",
      message: "This app has helped us reach a niche market of food enthusiasts and elevated our service.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed"
  },
  {
    id: "project27",
    title: "Tourism Analytics",
    category: "Travel",
    type: "Mobile App",
    imageUrl: "/tourism app 1.jpg",
    description: "Tourism Analytics is a travel analytics application that helps users plan and book their trips.",
    client: "Tourism Analytics",
    year: 2024,
    technologies: ["React Native", "Node.js", "MongoDB"],
    features: [
      "Explore 400+ destinations with detailed information.",
      "View high-quality photos of each tourist spot.",
      "Create personalized itineraries and save favorite places.",
      "Access travel tips, entry fees, and nearby attractions."
    ],
    review: {
      clientName: "Albinder Dhindsa",
      clientRole: "CEO, Grofers",
      message: "This app has revolutionized our grocery delivery service and significantly improved user retention.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed"
  },
  {
    id: "project28",
    title: "India Tourist Places",
    category: "Retail",
    type: "Mobile App",
    imageUrl: "/tourism app 2.jpg",
    description: "India Tourist Places is an the country's most iconic destinations, cultural wonders, and hidden gems for unforgettable travel experiences..",
    client: "India Tourist Places",
    year: 2024,
    technologies: ["Flutter", "Firebase", "AR Kit"],
    features: [
      "Real-time tourism performance data and insights.",
      "Comprehensive macroeconomic and supply pipeline analysis.",
      "Access to global travel trends and brand affinity.",
      "Secure, open data platform for stakeholders."
    ],
    review: {
      clientName: "Peyush Bansal",
      clientRole: "Founder, Lenskart",
      message: "This application has transformed the eyewear shopping experience and increased our conversion rates.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed"
  },
  {
    id: "project29",
    title: "DocIndia",
    category: "Health",
    type: "Mobile App",
    imageUrl: "/docindia.png",
    description: "DocIndia is a furniture and home decor shopping app with 3D visualization features.",
    client: "DocIndia",
    year: 2024,
    technologies: ["React Native", "Node.js", "AR Framework"],
    features: [
      "Connect with over 4,600 verified doctors nationwide.",
      "Book in-person or online consultations seamlessly.",
       "Access doctor credentials, reviews, and clinic details.",
      "Free, user-friendly platform for all patients."
    ],
    review: {
      clientName: "Ambareesh Murty",
      clientRole: "CEO, Pepperfry",
      message: "This application has revolutionized how customers shop for furniture and significantly reduced returns.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed"
  },
  {
    id: "project30",
    title: "MedCart",
    category: "Health",
    type: "Mobile App",
    imageUrl: "/healthcare app 1.jpg",
    description: "MedCart is a pharmacy application for medicines and healthcare products.",
    client: "MedCart",
    year: 2024,
    technologies: ["React Native", "Node.js", "MongoDB"],
    features: [
      "Over 100,000 medicines and healthcare products available.",
       "Express delivery within 2 hours across India.",
      "Real-time order tracking from pharmacy to doorstep.",
      "24/7 customer support for assistance anytime."
    ],
    review: {
      clientName: "Deep Kalra",
      clientRole: "Founder, MakeMyTrip",
      message: "This application has streamlined our booking process and significantly improved user experience.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed"
  },
  {
    id: "project31",
    title: "The Personalised Learning App",
    category: "Education",
    type: "Mobile App",
    imageUrl: "/education app 1.jpg",
    description: "The Personalised Learning App is an application for education.",
    client: "The Personalised Learning App",
    year: 2024,
    technologies: ["React Native", "Node.js", "MongoDB"],
    features: [
      "Hybrid learning: in-class or live online classes",
      "Recorded lectures and digital study materials available.",
      "AI-powered assessments, quizzes, and mock exams",
      "Integrated attendance and performance analytics dashboard."
    ],
    review: {
      clientName: "Kunal Bahl",
      clientRole: "Co-founder, Snapdeal",
      message: "This application has significantly improved our mobile user engagement and conversion rates.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed"
  },
  {
    id: "project32",
    title: "Educate : Online Learning App",
    category: "Education",
    type: "Mobile App",
    imageUrl: "/education app 2.jpg",
    description: "Educate is an online learning app that provides personalized education to students.",
    client: "Educate Online Learning App",
    year: 2024,
    technologies: ["React Native", "Node.js", "MySQL"],
    features: [
      "Instant 1-on-1 live video tutoring sessions.",
      "AI-generated study materials, assignments, and tests.",  
       "Interactive whiteboard for real-time collaboration.",
      "Seamless scheduling and batch management.",


    ],
    review: {
      clientName: "Ashish Hemrajani",
      clientRole: "Founder, BookMyShow",
      message: "This application has transformed our ticketing process and significantly improved user experience.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed"
  },
  {
    id: "project33",
    title: "Jobvisit",
    category: "Job Portal",
    type: "Mobile App",
    imageUrl: "/jobvisit.png",
    description: "JobVisit is a job platform connecting seekers with employers",
    client: "Jobvisit",
    year: 2024,
    technologies: ["React Native", "Node.js", "MongoDB"],
    features: [
      "Connect with top employers across various industries.",
      "Streamlined application process for job seekers.",
      "Access to a wide range of job listings.",
     "User-friendly interface for easy navigation"
    ],
    review: {
      clientName: "Supam Maheshwari",
      clientRole: "Founder, FirstCry",
      message: "This application has helped us connect with parents and provide tailored shopping experiences.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed"
  },
  {
    id: "project34",
    title: "Vital Jobs India - Employer",
    category: "Job Portal",
    type: "Mobile App",
    imageUrl: "/job app 2.png",
    description: "Vital Jobs India – Employer simplifies recruitment with efficient tools",
    client: "Vital Jobs India",
    year: 2024,
    technologies: ["React Native", "Node.js", "PostgreSQL"],
    features: [
      "Post unlimited job vacancies at no cost.",
      "Three-step manual verification ensures job authenticity.",
      "Streamlined candidate application tracking and management.",
      "Integrated interview scheduling and onboarding tools."
    ],
    review: {
      clientName: "Lalit Keshre",
      clientRole: "CEO, Groww",
      message: "This application has democratized investing and made it accessible to millions of users.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed"
  },
  {
    id: "project35",
    title: "HexaHome: Buy, Rent, Sell & PG",
    category: "Real Estate",
    type: "Mobile App",
    imageUrl: "/hexa home.png",
    description: "HexaHome is a comprehensive real estate platform for buying, selling, and renting properties.",
    client: "HexaHome",
    year: 2024,
    technologies: ["React Native", "Node.js", "MongoDB"],
    features: [
      "Zero brokerage listings directly from property owners.",
      "Advanced filters for location, budget, and amenities.",
      "PG and co-living accommodations across major cities.",
      "Real-time alerts and seller tools for listings."
    ],
    review: {
      clientName: "Abhiraj Bhal",
      clientRole: "Co-founder, Urban Company",
      message: "This application has transformed the home services industry and improved service quality standards.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed"
  },
  {
    id: "project36",
    title: "India Property Dekho",
    category: "Real Estate",
    type: "Mobile App",
    imageUrl: "/job app 2.png",
    description: "India Property Dekho simplifies property searches with verified listings and advanced filters.",
    client: "India Property Dekho",
    year: 2024,
    technologies: ["React Native", "Java", "PostgreSQL"],
    features: [
      "Over 100,000 verified residential and commercial listings.",
      "Advanced filters for budget, location, and amenities.",
      "High-quality images, floor plans, and virtual tours.",
      "Free ad posting for property owners and agents."
    ],
    review: {
      clientName: "Nithin Kamath",
      clientRole: "Founder, Zerodha",
      message: "This application has revolutionized the stock trading experience in India with its simplicity and performance.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed"
  },
  {
    id: "project37",
    title: "Auto Rentals・Car Rentals App",
    category: "Auto Rentals・Car Rentals App",
    type: "Mobile App",
    imageUrl: "/car rental app 1.png",
    description: "Auto Rentals・Car Rentals App offers global vehicle bookings with transparent pricing",
    client: "Auto Rentals",
    year: 2024,
    technologies: ["React Native", "Node.js", "MongoDB"],
    features: [
      "Access to over 50,000 global rental locations.",
      "Wide selection: economy, SUV, luxury, minivan, 4x4.",
      "Monthly, weekly, and electric car rental options.",
      "Real-time booking with no hidden charges." 
    ],
    review: {
      clientName: "Prashant Tandon",
      clientRole: "Founder, 1mg",
      message: "This application has transformed healthcare accessibility and simplified medicine purchases for millions.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed"
  },
  {
    id: "project38",
    title: "VCars - Self Drive Car Rental",
    category: "Auto Rentals・Car Rentals App",
    type: "Mobile App",
    imageUrl: "/vc cars app.png",
    description: "VCars - Self Drive Car Rental offers a seamless car rental experience with transparent pricing and flexible options.",
    client: "VCars",
    year: 2024,
    technologies: ["React Native", "Node.js", "MongoDB"],
    features: [
      "Choose from 40+ car models across 5 cities.",
      "Flexible rental durations: hourly, daily, weekly, monthly.",
      "Zero down payment with subscription plans.",
      "24/7 roadside assistance and minimal paperwork." 
    ],
    review: {
      clientName: "Mukesh Bansal",
      clientRole: "Founder, Cult.fit",
      message: "This application has transformed the fitness industry with its holistic approach to wellness.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed"
  },
  {
    id: "project39",
    title: "Bidkaro",
    category: "Auction",
    type: "Mobile App",
    imageUrl: "/bid caro app.png",
    description: "Bidkaro is an auction platform connecting buyers and sellers for various assets.",
    client: "Bidkaro",
    year: 2024,
    technologies: ["React Native", "Node.js", "PostgreSQL"],
    features: [
      "Access inventory from banks, NBFCs, and insurance companies.",
      "Browse listings for two-wheelers, four-wheelers, and commercial vehicles.",
      "Find construction and farm equipment for sale.",
      "User-friendly interface for seamless browsing and purchasing." 
    ],
    review: {
      clientName: "Stuart Crighton",
      clientRole: "Founder, Cleartrip",
      message: "This application has simplified the travel booking process and increased our customer satisfaction rates.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed"
  },
  {
    id: "project40",
    title: "Cricket Auction",
    category: "Auction",
    type: "Mobile App",
    imageUrl: "/kricket auction.png",
    description: "Cricket Auction is a mobile app that allows users to host live cricket and sports auctions seamlessly.",
    client: "Cricket Auction",
    year: 2024,
    technologies: ["React Native", "Node.js", "MongoDB"],
    features: [
      "Host live cricket and sports auctions seamlessly.",
      "Customize bidding rules and set team budgets.",
      "Import/export player lists via Excel or PDF.",
      "Stream auctions with live overlays and themes." 
    ],
    review: {
      clientName: "Gaurav Munjal",
      clientRole: "Co-founder, Unacademy",
      message: "This application has democratized education and helped millions of students achieve their goals.",
      rating: 5
    },
    videoUrl: "https://www.youtube.com/embed"
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

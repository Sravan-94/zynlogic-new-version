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
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project2",
    title: "Chumbak",
    category: "Portfolio",
    type: "Website",
    imageUrl: "https://media-hosting.imagekit.io/25d455fc6576409f/WhatsApp%20Image%202025-05-06%20at%2014.38.36_d771d972.jpg?Expires=1841405128&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=UFMJyQP8kDCUEafE1H3jfOYf077oDD~FHvW~UPH~Cs36NT38-VgahDv1ZwkN-Lv940KJjURzMwpZxPzALl9hX6KbbHp85kL8nhrn6XxWJgBHNMjP48~C2jTManFzPlrt90R~loHBfU20q39SLYm0NIL2cH7d6F9lH~z1hmmRmtsIWcS2e-0o1wb8VDhhf2h7J65gAUs5efPK2c4Vfj-z9UseSJRPnW9t-Aq7KeeAx6Ry6urZfyQaQ4~Vu9ki-MGQDHf~TzakpJZdQRMfcnEzOhDGrwVc4wLZYoSm1w-yKbZmuKZlv-5zLDZQG23N-huT8lFFj89F2WIChi36Gi97zw__",
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
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project3",
    title: "Apptivo",
    category: "CRM",
    type: "Website",
    imageUrl: "https://media-hosting.imagekit.io/ae480e6896a547a2/WhatsApp%20Image%202025-05-06%20at%2017.51.44_bc6618f9.jpg?Expires=1841405335&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=OH~grjpfUUau1j0u7uis1qq5--hl74e-thfhhkS2fSaK10VtP0VAdMv8xm6PoicKLEWwE~KkWJzCFVSqG5tXnKVCGziAbjQt-VHRC8b41qJc0eODdZsn312cgjA1Lv1gwJ7mCu2Tv~XR3yx5NAAClFFrjSuSX3DHfCDUOX0vF9-6VIr7Msj8cVhsGy3NK42JL-QXUczdr~DuIMlkfIEIcD6cNrHehNju5K5vj2apKK5aVesDD~pDddYwP4JsR7mBAGRAhPA1khkB5Nli4AzGz9G3hbSvlRGcBLv83d7kqSXauYtH0KB7Zann2SspP29uZ~tCDyla9H4GqZTwyN9XBg__",
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
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project4",
    title: "Bitrix24",
    category: "CRM",
    type: "Website",
    imageUrl: "https://media-hosting.imagekit.io/b3f08712c0804330/WhatsApp%20Image%202025-05-06%20at%2017.22.22_40ec6352.jpg?Expires=1841405316&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=XlI5tGlWOAcp-OH2xNpDgPLLCZxBWGYhsT~7xSZdwi2y4H4Armtma9V-EK8rgIJd84gCQeci2jiSWcs8Rdy-HHuez9wJ5epH28frxjrcwlhfmyO4F8kj3MnH7x7DXXCd1065-RvB9Gzck2lxNSeWBl3MPGmZzLqX3bV8vVfl2~aQ7OQjKaZa2c4onkPGzSOmxvYp9EZnVwhijNPvLNeUYdA~FfZaYA8zmGgfLhoSExIkPhjRZeLJgw7dvT5hH5nCu1L7WJracyH3NgzRMrdUyyuOkd4jaHLi8-zfA-pjkzSgmYblQv9HwNkdZuinngBkg2Q4SfW5skYgfpkTRJE8ug__",
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
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project5",
    title: "hungerbox",
    category: "Food & Delivery",
    type: "Website",
    imageUrl: "https://media-hosting.imagekit.io/6e99c6bcfd184f73/food%20website%201.png?Expires=1841475303&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=tZJ9T4zlY9JisLIXKlQ~97DTVmRUSwSLiRXfX2bnjn0~IcOqnu6vzvfsuLNdi6Gu~9w-xTT9vm98yiCpR1Ulmbh3DlvGbYN9WGg~hEYE-KzSXEogmPdqspZyrxWIY4TmrredeMuE7AeIYCfiVGuxAuFulNzY1Qp-X-UPR7chv0mBMI9MKmwm~BPdj~R52qE4MZeu6m-Sn2TprwcI5Oup4bbY3tCbd0740kHF5tSAdgzbzKD4ob~y-fDLPSXuAH0MC78oIcueFIaaTPxAsxTxln8KlCnHArs~01RV7EyEE01yG3LyC-Hv0boeDBFg-dPv4SKwoBn-kaErV-3fq7iM~w__",
    description: "A smart food ordering platform for corporate cafeterias and large institutions.",
    client: "hungerbox",
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
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project6",
    title: "Biryanibykilo",
    category: "Food & Delivery",
    type: "Website",
    imageUrl: "https://media-hosting.imagekit.io/1bceb9cd8c0048d5/food%20website%202.png?Expires=1841475303&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=zW7kXw07zvzikECfamj7M5lPPuGlV4M9Q-ej4v7exsbCQk64Us4am58rPzrFyN-jcgLPO9esuzy3RK4jhzxOAiJjB9QYVNGluh7g1gW7qpckQpjS15bn4kYTOoM4-vUIEflGNOrXJzDFUtXU7SZhNXRQJvsQFAZzYrtOwwUnbVkOvKeMCzf5smsoPiuy-M25K3vekAb4ktI64BXDJ4oxp8LBNPKSTowdmzD3XbWh4c9w6PuByB82648Gnld7oSgd3x3E9m~fJIUwBUZ5mqDFEG9xR92Yh5E3LecTORubdttcUGUOSIkarhigWMDOmtv4TYABaM-Aymk7AjWlBnbCrg__",
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
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project7",
    title: "Traveltriangle",
    category: "Tourism",
    type: "Website",
    imageUrl: "https://media-hosting.imagekit.io/bd99e486328645c6/tourism%20website%201.png?Expires=1841397646&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=JzullprwseKQE5-uBYqO5TS64o7v5TGpMubWQkQc2OmKQM90GXRkZmY~QpuAEwS91XCnLvYQpZiN3A6~D62BjQQmtazunEw7BITrdmouLmBhkvY5Am5Bu4lMHrp3cSOXZpIcSEMe3Qu~yKtx~wQIRd6ItiqsHn20reZfb3lNX1-Tb98XbZ7jGVMLTE6Zym81SDVT2cl7DFPpoVwfpgwFkzD5RcUsPP3u9L7g97aTrKkq1RIThwAyt2-M8NEVd3NIrHoywAWXfFDho51lTwsx7AbOZq~javh6NHYAJ5qNZoJSy9osdfjmsam7r46L75nQEiF7dQCEasgfDHi2qNIruw__",
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
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project8",
    title: "kiomoi",
    category: "Tourism & Travel",
    type: "Website",
    imageUrl: "https://media-hosting.imagekit.io/27191b89377e4e6a/tourism%20website%202.png?Expires=1841397646&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=SxZTPc~kXKbOBbaojk~l7ZUmZ6AvfckOeSRBsSlum-QoqWk46TAIiKfY51obPAm6StwxPVU7e3GC8hTc4zywkrqqgWZHvZSfzvQvMuBl5DoDPjl5tEjhRkhpowxWUgyY0b0SjBEf6ABUyC2Dtofbybr1qthGeL0YL~I2swBgM-cs5aHaPevZBuxcltHPi8OXr0oPD2vZ~8YaoOiXkV4MGD2hhobR2370GN1WXwSZgVMr4HerlWfHEOp16BctK9K~K0tRTbo3pyh8jWgnslzm7qbqn3gI37pP9WtmW-QT0MHu~BoZ5~PBL9T7ftQfAoVUE3R93G5Zot1aoR60NfrPdA__",
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
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project9",
    title: "Medmonks",
    category: "Healthcare",
    type: "Website",
    imageUrl: "https://media-hosting.imagekit.io/3ba7d0c0a777410d/healthcare%20website%202.png?Expires=1841397646&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=VUn~2odmD5wPLAdKaCbxQlveSGxjnAdBOEYc2xb75y4byD94F3j6VSj5uradtItK6jjglvCCIqrhTDJAPwiZO8dBE2XMS6K2Nifm7Cnv7xIYIU7QRQ36QMf~gYCnqRH~zAdPagYih6SpHRzgQqAuz3G8AxvnOO6kzkeODhjbnVGzTQnclrWgqA0B6KlILZUpUSb2BwW5MPBpN6bLVwwdlANtS7bcQMfwvhmeIthcY0VJeyANMKys0WSRVRAjmCC8fWskX0Dtk096yiSiyxQXIF9w6kWS7PC3Q282lnHjAO7YENRfNXBIM~Qz5qhrAoVzk2IaDuce3OWrptlpk4ucXg__",
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
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project10",
    title: "Healcard",
    category: "Healthcare",
    type: "Website",
    imageUrl: "https://media-hosting.imagekit.io/13f4c493714946b3/healthcare%20website%203.png?Expires=1841397646&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=yMnLDluuIWkszCnaOxSvFBuBwjyUPhzQXWl9~KC4FSO2nwuHoEBi~MjEEaQBcHNl~Sw~2nN6QWTrWc0~lPFqZb~M0LJzFmMB2S73KxesV-a~DA7O25aHOkS8V6i~bn7J-q~X9ksqlm2AbM-tTf9w08Qpsv4AlZ1x2Rbz636ZtJdBzhoU0VuTFjL7ss4SRqvGroSnjcjFgLEjLhA6hEMdUelip5MuV0OEaRLqdak5FluyMB5uMKgTa~9OExbe2-RV09U6PVBcOnA95srNVIVTUjsjJdWvyBBANmUR4N91at9djjYIBRACnkg9pzDf9Njt4q1BoJsHhIoCBBq-3xKEWQ__",
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
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project11",
    title: "Pearlacademy",
    category: "Education",
    type: "Website",
    imageUrl: "https://media-hosting.imagekit.io/40a74932c8ca4a20/education%20website%201.png?Expires=1841397645&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=TigXwqlcxkmvWaGV~7c6czGv3ZhH2yEIOpxQsOHUVXycenBZ2aVvqj9k0CKxu6oQhfK9bDQnkMU9un3gtMrgRKnlpgf1kNZlGoDYQM5-OaskYuDom296pM4UFEBLY7HhTwGqn5AoRpnD5qW~koBflnumNxSJj1pMYgEK1Dgp3oBv-YxujfenJTq0yQWJgKJxx~oXZhxk2LIvSC~UsSNPmIAzIFTHjL3omMN8WDYLtrqpfGNpSd7v9lpC8v-QZ7ZTJNgX1Q16P9pAqovWGKpzsXdLZLNMLp4w7xHONXaGmsesuM-En-QrhlcNdkvpHnIJ0VtfiUDKw9SQL8INrEZH4w__",
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
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project12",
    title: "Welingkar",
    category: "Education",
    type: "Mobile App",
    imageUrl: "https://media-hosting.imagekit.io/2b91069da4764c2c/education%20website%202.png?Expires=1841397645&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=gEB81XICdS1JkM4sJ0Gp-m4hwqbeVf-zchDAMQBBkQ6cFikiE3JmDk-1qm3h1Vcm8WBmR2Mc1HF74mvOc~7Ik8iaXip8Jfe1LKpWGZzWFfx17lHpAxuMTMyR31YQX6ZtQDbl7AhMrIGv3CXTVsSM2OHpm1oDf-YUpF7q~Vv7IOdpTr-MEBR4QBx8fdDFX3Jom0S3B9oilrmsGHnkaU5i9F-r1vIreRhsMHeYnQDEANtQCoD-j2FY64xunLSgq75urx4abpcmUtP3mEcLAAUUcBKdj37EGsBilBzVo7ptdIDMD7Xr51iCzpxLIIMuIddB4oTUabewb3I5nKL1~xa2Mw__",
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
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project13",
    title: "Jobvisit",
    category: "Job Portal",
    type: "Website",
    imageUrl: "https://media-hosting.imagekit.io/eac444de48504390/job%20website%201.png?Expires=1841475303&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=WGlar605Kf8oI9xpK4fx~Of7nM7EACNsHDsDBTndcIr3TOhS0MsWvNjtTCTA-64heKSWmkn5d7OCWgyhSxE28XwAoh~jII2tcAe7IAe0VkQe1tRb~fE8LQ8XV-WcWsLqQrTNeE7odPhoABdczjvL468sF4dp8pLnBfxHPparo02D5WqSZS3umbz0Nz0jinMZquooDVIA1FhDRerOWX4vrUprSUprBgwhytmJc8wQzvd3eJSY0ha34QaSPqZgox-UpgdyoyXrWjW6IL2PTxuvw8~EbMU37tQJ-QIrqIGUMZ~CqAO9lJdtbJAK0ITVfEy0eeiv9lETlRRsX2AR9VZbPw__",
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
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project14",
    title: "Hiremee",
    category: "Job Portal",
    type: "Website",
    imageUrl: "https://media-hosting.imagekit.io/4a0c59a835fd4d5f/job%20website%202.png?Expires=1841475303&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=vmPSMP6mBgXvP0vQ98IjST3jVNx2z2AVhcxJkXZE2ofqkxORI2YGp~XQAFAi70rM25abysrHRXXD13urm8vUJ78xNCJYIc50d~g7W5mtUNDmd3dyjHls8cq2yMncAqfcvIYH4sFCeX4r4wQ78QSd-MMs-hPzztI2eE5rh8oCbOpiDeeKGQjmcf-Amk5S6H4lPBwB1XSYDEixuBrj5tV-DF5tLRU7TLwJsRLUdrTbxID-zDpacWjSPSaH2xwEyFCYAWc5jZLaKeeayVypVv0BT~rbIbPeIE~AWnKjtHfkVv1-DjLNkdeP~kDjc-tGHws3XrmnB5d~I4vOZmmM-yEgww__",
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
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project15",
    title: "ssvcinfra",
    category: "Real Estate",
    type: "Website",
    imageUrl: "https://media-hosting.imagekit.io/c2ab25f962f0487e/real%20estate%20website%201.png?Expires=1841475303&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=jGT5n02LulgQh6sRqEvM7KgJE3flUto~~cYErOnhKgZEPj7Zl1fSbWx-e~6V4Qdd6Vv5vV9ghVysPKXoMP0A6vt8fJjndkGoeUtOb6ZJhR-aBG1zHl3MTYt4hxvx3266uvWEtaWwX76ksdYzR0sm7D3lxRftfo~aRD-FLaS6S-rgL-F-0zFKl~kpWPrDYSCS9Gr39vePl5Aw5vJrIFsPVzhn~CEJvYVDfJ5~dtG-Jac9MerGjrz3fV5gf--~dx5kSm3-yTsmUydOXsifNnehYoZuQjo3AgyUpFbQiqFjTcZYJIvowulmAG2lFrC0Wvzf~NrLa0773q~IpZQP9-DY5A__",
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
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project16",
    title: "PropertyPanther",
    category: "Real Estate",
    type: "Website",
    imageUrl: "https://media-hosting.imagekit.io/9f8e2f6495d645c3/real%20estate%20website%202.png?Expires=1841475303&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Mw9ok6CqOPTL6fnR1FtuSLOBGOzM8Dg0jTAClPlk6PfIllXH8WgICC7YKPd8IPFyniMHrroHhfWO1NsElrfpkLN7WT5p7QV~6BGskHoWwFtgIVyv0ujehV~nWaBfqkyWRSNLLJBUTJwqEb5Xclpx0tT1MDP8tO3KBLSpy0r0~Cck0pDylVceDKYjZE65jLy-qPZofP5Ifa7ogxFeRzpc6UsfqOzlixXpNnhe7t1i5ZVNDQbiCOM6lgGH3iKmYWElOo0vuuezJI35I3hwL7RQAFDM~ZV25sFqM-siCvm2dlIJqwhUrN~X4jtpQg1cynmJP~H95Piw7aMDmPXQPZ-z1Q__",
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
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project17",
    title: "mychoize",
    category: "Car Rental",
    type: "Website",
    imageUrl: "https://media-hosting.imagekit.io/01d0a123d5c84636/car%20rental%201.png?Expires=1841475303&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=leX7L53vkNCaE3DArbNX-D4a59BVRE-xeAreiirFM8I~rhwsJ44R3NGWaTZG8a65rkN18vhEzOeOdpf76~17ZeDMQM7vwNB5zRaeCIHKmmAaEg~N2XKLJhsD1sfDw8blCcqxnlmKubSq4h1qywEwoV0oez0-NnU7cQQexnHNYak5Xz2-NdnsWBZHwxk5XugrVYFbJ~sVz4S3VqK0EKX7z5J8ITtqxroODza0TwjGwCsryuTQbp34UXinP1tWlRHVxdqH7Uw9E8UGTNAs0qfIo8uHXHid7OQSvgirZWTVV0UcFFxqulVRWlFEn7VgDaNoveB8td~vzxszbBZQN5v1Iw__",
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
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project18",
    title: "Carstreetindia",
    category: "Car Rental",
    type: "Website",
    imageUrl: "https://media-hosting.imagekit.io/95047f278ea74c8e/car%20rental%202.png?Expires=1841475303&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=V~cFAU~uhA02FEtAvRiA2eqYdcMdgax3IIRT5Ht-4UJIo-KDnKqy655HVZmaDKvZOMyFk0RpfhkFNvFhxlwN2c69BDvA8feR2HJeu8~FA6~tJiEi6ei~4BoZZBhpyA-luscg1dTvlNv2OuiWU5UPKnk7~Jwj-n84~eaetbkb7WDooIzoyIxGPdC8kLjQf9csEwc2HAsFJyfldEiGZUnY52AhQUekqcFmrbO5xzpRtraelR2n-uVRGybecpm4I-G9Nt16pKA8EvAq0lbF0gvjoFpxHRA6GQO3ejUkL8vtGM8cBstzFvq8P6wMAFM6DhGgX~7V~dDpkPZsERPd6NOwAg__",
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
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }, {
    id: "project19",
    title: "Spotbid",
    category: "Auction",
    type: "Website",
    imageUrl: "https://media-hosting.imagekit.io/442b1db181bf4ee0/auction%20website%201.png?Expires=1841475303&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=lb3GdwWrXYorMA2sfnf9tCp1Jz5qIMY5GqrSGOK10aHg~M~nsQjibYjbx-7Ju-Kmhvu85FAT4H6p0NaApeiNYAK5oLRZ89vcyma4Eu90cdh4S-4YIEMb0WUNeTvqSxgjjbGZAt2AbxYAiAPM4rpMpRykJJkPZ3yz~Rc-PHTI1pHfaeP9WWxwRXhrvQ1kua2nUlO4C3VRFeTeK9KpDLpe-RimHBdlZSegAgz02TRVgCIVQkf8JVyNWK4Og~9jxMe1zZA-r4jiU4eaSsowltgvOpoo98Aoc0lrRMxHUDgYc08NgaOP8JJxtLRVMYG9bdVJ9pJkmsu03Mu0OGPBp8F6tw__",
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
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project20",
    title: "Meta E-Auction",
    category: "auction",
    type: "Website",
    imageUrl: "https://media-hosting.imagekit.io/fa5ce7da9da24d61/auction%20website%202.png?Expires=1841475303&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=NsFqb6a4dbAqaAuJ1A8vHGbQeLpWvoZoeBl2PYXFEUph6pQ0Vx5fAvzfNruTAJR5M6OFFziqjDmAFIe2EbMJOUON-LqtqrEhiIW5Fb4B24W0t6jJW6XCLyIu8JxUe8g~ZkRDcJWnLCPquFlmxGq2ZOyjOXsyDjiXPjTimB~l9MdovpBKK~Fbujoow2fNGwqYbtDPVJJBmiUgWCZpKYg-x7AVd821ivnIhQ6MuJaRP~NjNuReF7g5QtZ4ybdwfZ2n6o4rgjOgnh-6s5mcB-x-nj7D4sM2VomVd3cMGdODYfQIGM6i0WQ4Mtb~FcrOwKATAN6fBnJYCZMEhQ3GakiBvQ__",
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

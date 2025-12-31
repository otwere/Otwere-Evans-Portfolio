import type { Project, Currency } from "../types/project";

export const currencies: Currency[] = [
  { code: "KES", symbol: "KES", name: "Kenyan Shilling", flag: "🇰🇪" },
  { code: "USD", symbol: "$", name: "US Dollar", flag: "🇺🇸" },
  { code: "EUR", symbol: "€", name: "Euro", flag: "🇪🇺" },
  { code: "GBP", symbol: "£", name: "British Pound", flag: "🇬🇧" },
];

export const projects: Project[] = [
  {
    title: "Hospital Website & Booking System",
    description:
      "Developed a user-friendly hospital website for MedicarePlus featuring a seamless booking management system.\n\nKey Features:\n• Streamlines appointment scheduling\n• Enhances overall patient experience\n• Supports secure payment methods (Insurance, M-pesa)\n• Improves accessibility and supports efficient hospital operations",
    image: "/img/medicare.png",
    link: "https://medicarepluske.netlify.app",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    category: "Healthcare",
  },
  {
    title: "EPR-POS & Human Resource System",
    description:
      "Empower your business with a powerful, integrated system designed to streamline operations and optimize workforce management.\n\nKey Benefits:\n• Combines Point-of-Sale (POS) and HR tools\n• Eliminates inefficiencies\n• Enhances customer experiences\n• Drives business growth through a single, intuitive platform",
    image: "/img/EPR_HRM.png",
    link: "",
    technologies: ["React", "TypeScript", "MongoDB", "Express"],
    category: "Enterprise",
  },
  {
    title: "e-Bursary Management System",
    description:
      "Integrated platform for students to apply for Bursary and Scholarship opportunities.\n\nCore Functions:\n• Streamlines Application, Vetting, Approval, and Disbursement\n• Connects institutions and funding bodies\n• Ensures transparency and real-time tracking",
    image: "/img/ebursary.png",
    link: "",
    technologies: ["Vite", "React", "TypeScript", "Tailwind"],
    category: "Education",
  },
  {
    title: "HopeWorks NGO Website",
    description:
      "Modern, high-performance web platform designed to amplify the impact of Non-Governmental Organizations.\n\nHighlights:\n• Fast, responsive, and user-friendly experience\n• Secure donation options (Mobile Payments, Credit Cards)\n• Easy-to-manage platform to share missions and drive community involvement",
    image: "/img/ngo_website.png",
    link: "",
    technologies: ["Next.js", "React", "Stripe", "Tailwind"],
    category: "Non-Profit",
  },
  {
    title: "School Website & Information  System",
    description:
      "Modern, efficient School Information System designed to enhance school operations.\n\nModules:\n• Online Admissions Application\n• Reports and communication\n• Academic management and administrative workflows\n• Seamless reporting for teachers, staff, students, and parents",
    image: "/img/School Web-App.png",
    link: "",
    technologies: ["Vite", "React", "TypeScript", "Tailwind"],
    category: "Education",
  },
  {
    title: "Marketing Consultancy Agency Website",
    description:
      "Sleek and professional website for Back Street Concepts to showcase services and drive engagement.\n\nFeatures:\n• Fast, responsive, and visually compelling user experience\n• Builds brand authority\n• Ideal for marketing professionals looking to make a lasting impression online",
    image: "/img/back_street.png",
    link: "https://backstreetconceptltd.co.ke/",
    external: true,
    technologies: ["React", "Next.js", "Tailwind"],
    category: "Marketing",
  },
  {
    title: "Water & Climate Change Data-driven System",
    description:
      "Pioneering data-driven solution for sustainable water resource management across Africa.\n\nCapabilities:\n• Actionable insights on water and climate change\n• Smart analytics and real-time data integration\n• Intuitive interface for informed decision-making\n• Supports climate resilience and sustainable development",
    image: "/img/africa-water.png",
    link: "",
    technologies: ["Next.js", "D3.js", "Mapbox", "TypeScript"],
    category: "Sustainability",
  },
  {
    title: "Farewell Management System",
    description:
      "Comprehensive digital solution to streamline and automate farewell operations.\n\nKey Features:\n• Manages deceased records, storage, and autopsy details\n• Handles transportation, billing, and reporting\n• Secure data handling and seamless workflow integration\n• Ideal for Non-Hospital Private Farewell Service",
    image: "/img/fmis.png",
    link: "",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    category: "Enterprise",
  },
  {
    title: "Real Estate Management System",
    description:
      "End-to-end real estate platform simplifying property rental operations for Admins, Agents, and Tenants.\n\nIncludes:\n• Role-based access control\n• Real-time listings and tenant applications\n• Lease management, rent tracking, and maintenance requests\n• Detailed reporting tools and secure architecture",
    image: "/img/rental.png",
    link: "",
    technologies: ["React", "TypeScript", "PostgreSQL", "NestJS"],
    category: "Real Estate",
  },
];

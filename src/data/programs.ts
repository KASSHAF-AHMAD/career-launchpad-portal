
export interface Program {
  id: number;
  title: string;
  description: string;
  duration: string;
  topics: string[];
  priceRange: string;
  image: string;
  slug: string;
}

export const programs: Program[] = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    description: "Become a proficient full-stack developer with our comprehensive program covering front-end, back-end, and database technologies. Learn to build complete web applications from scratch.",
    duration: "12 Weeks",
    topics: ["HTML/CSS/JavaScript", "React", "Node.js", "Express", "MongoDB", "API Development", "Git/GitHub"],
    priceRange: "$4,999 - $5,999",
    image: "/placeholder.svg",
    slug: "full-stack-web-development"
  },
  {
    id: 2,
    title: "Data Science & Analytics",
    description: "Master the skills needed to analyze complex data sets and derive actionable insights. Learn to use industry-standard tools and programming languages for data science.",
    duration: "10 Weeks",
    topics: ["Python", "SQL", "Data Visualization", "Statistical Analysis", "Machine Learning Basics", "Business Intelligence", "Tableau"],
    priceRange: "$4,499 - $5,499",
    image: "/placeholder.svg",
    slug: "data-science-analytics"
  },
  {
    id: 3,
    title: "UX/UI Design Essentials",
    description: "Develop your design skills and learn to create beautiful, functional user interfaces. This program covers the entire design process from research to prototyping.",
    duration: "8 Weeks",
    topics: ["User Research", "Wireframing", "Prototyping", "Visual Design", "User Testing", "Design Systems", "Figma/Adobe XD"],
    priceRange: "$3,999 - $4,999",
    image: "/placeholder.svg",
    slug: "ux-ui-design"
  },
  {
    id: 4,
    title: "Accounting",
    description: "Gain expertise in accounting principles, financial reporting, and industry-standard software. Learn to manage business finances and prepare for professional certification.",
    duration: "6 Weeks",
    topics: ["Financial Accounting", "Tax Preparation", "QuickBooks", "Payroll Management", "Business Finance", "Audit Basics", "Excel for Accounting"],
    priceRange: "$2,999 - $3,999",
    image: "/placeholder.svg",
    slug: "accounting"
  }
];


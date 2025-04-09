
export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Remote";
  salary: string;
  description: string;
  requirements: string[];
  postedDate: string;
  category: "Development" | "Design" | "Marketing" | "Data" | "Management";
}

export const jobs: Job[] = [
  {
    id: 1,
    title: "Front-End Developer",
    company: "TechSolutions Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$90,000 - $120,000",
    description: "We're looking for a talented Front-End Developer to create responsive and user-friendly web applications. You'll collaborate with our design and back-end teams to implement seamless user experiences.",
    requirements: [
      "3+ years experience with HTML, CSS, and JavaScript",
      "Proficiency with React or similar frameworks",
      "Experience with responsive design and cross-browser compatibility",
      "Understanding of UI/UX principles"
    ],
    postedDate: "2025-03-25",
    category: "Development"
  },
  {
    id: 2,
    title: "UX Designer",
    company: "Creative Interfaces",
    location: "Remote",
    type: "Full-time",
    salary: "$85,000 - $110,000",
    description: "Join our design team to create intuitive and engaging user experiences for our clients. You'll conduct user research, create wireframes, and collaborate with developers to implement designs.",
    requirements: [
      "Portfolio showcasing strong UI/UX work",
      "Experience with user research and testing",
      "Proficiency with Figma, Sketch, or similar tools",
      "Understanding of accessibility standards"
    ],
    postedDate: "2025-04-02",
    category: "Design"
  },
  {
    id: 3,
    title: "Data Analyst",
    company: "Insight Analytics",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$75,000 - $95,000",
    description: "We're seeking a detail-oriented Data Analyst to interpret complex data sets and provide actionable business insights. You'll create reports, dashboards, and visualizations to support decision-making.",
    requirements: [
      "Experience with SQL and data visualization tools",
      "Proficiency with Excel and statistical analysis",
      "Strong analytical and problem-solving skills",
      "Excellent communication abilities"
    ],
    postedDate: "2025-04-05",
    category: "Data"
  },
  {
    id: 4,
    title: "Digital Marketing Specialist",
    company: "GrowthBoost",
    location: "Remote",
    type: "Full-time",
    salary: "$65,000 - $85,000",
    description: "Drive digital marketing strategies across multiple channels to increase brand awareness and lead generation. You'll manage campaigns, analyze performance metrics, and optimize for maximum ROI.",
    requirements: [
      "Experience with SEO, SEM, and social media marketing",
      "Knowledge of Google Analytics and advertising platforms",
      "Content creation and email marketing skills",
      "Data-driven approach to campaign optimization"
    ],
    postedDate: "2025-03-30",
    category: "Marketing"
  },
  {
    id: 5,
    title: "Back-End Developer",
    company: "ServerStack",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$100,000 - $130,000",
    description: "Design and implement scalable, secure back-end systems using modern technologies. You'll work on API development, database optimization, and server infrastructure.",
    requirements: [
      "Strong experience with Node.js, Python, or similar",
      "Database design and optimization skills",
      "Knowledge of RESTful API development",
      "Understanding of cloud services (AWS, GCP, or Azure)"
    ],
    postedDate: "2025-04-01",
    category: "Development"
  },
  {
    id: 6,
    title: "Project Manager",
    company: "Delivery Masters",
    location: "New York, NY",
    type: "Full-time",
    salary: "$90,000 - $120,000",
    description: "Lead cross-functional teams to deliver high-quality projects on time and within budget. You'll create project plans, manage resources, and communicate with stakeholders.",
    requirements: [
      "PMP certification or equivalent experience",
      "Track record of successful project delivery",
      "Strong leadership and communication skills",
      "Experience with Agile methodologies"
    ],
    postedDate: "2025-03-28",
    category: "Management"
  }
];

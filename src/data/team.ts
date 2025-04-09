
export interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Alexandra Reynolds",
    position: "Founder & CEO",
    bio: "With over 15 years in tech recruitment and workforce development, Alex founded Career Launchpad to bridge the gap between education and employment. She has helped place over 500 professionals in their dream roles.",
    image: "/placeholder.svg",
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: 2,
    name: "Marcus Chen",
    position: "Lead Technical Instructor",
    bio: "Marcus brings 10+ years of software engineering experience from companies like Google and Amazon. He specializes in full-stack development and has a passion for mentoring new developers.",
    image: "/placeholder.svg",
    socialLinks: {
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    id: 3,
    name: "Sophia Williams",
    position: "Career Coach",
    bio: "Sophia is a certified career coach with expertise in resume building, interview preparation, and professional development. She has helped hundreds of clients successfully transition to new careers.",
    image: "/placeholder.svg",
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: 4,
    name: "David Rodriguez",
    position: "Employer Relations Manager",
    bio: "David maintains our network of employer partnerships and ensures our graduates connect with the best opportunities. His background in HR and recruitment spans over 12 years across various industries.",
    image: "/placeholder.svg",
    socialLinks: {
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: 5,
    name: "Jasmine Patel",
    position: "UX/UI Design Instructor",
    bio: "Jasmine has led design teams at several tech startups and brings real-world experience to her classes. Her focus on practical, portfolio-building projects helps students showcase their skills effectively.",
    image: "/placeholder.svg",
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: 6,
    name: "Robert Kim",
    position: "Data Science Instructor",
    bio: "Robert's background in data science and machine learning includes work at financial institutions and tech companies. He specializes in making complex concepts accessible to learners at all levels.",
    image: "/placeholder.svg",
    socialLinks: {
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  }
];

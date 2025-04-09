
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorImage: string;
  category: string;
  coverImage: string;
  publishDate: string;
  slug: string;
  readTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "5 In-Demand Skills for Tech Careers in 2025",
    excerpt: "Discover the top technical skills employers are looking for and how to develop them effectively.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer a ligula euismod, consectetur felis sed, posuere ligula. Sed aliquet eleifend mauris, vel posuere lacus tincidunt et. Donec ultrices finibus purus non pellentesque. Duis molestie placerat velit, ut faucibus odio dictum id. Cras in erat a nunc venenatis fringilla ut eu dui. Curabitur rutrum libero at orci finibus, eu luctus massa euismod. Morbi et turpis non justo lacinia lacinia. Nullam vel dui vel libero vestibulum ornare. Etiam lacinia porta lacus, vel viverra dui pulvinar vel. Etiam hendrerit aliquam lorem at tristique. Nulla facilisi. Mauris a quam facilisis, finibus ante eget, pellentesque diam. Sed elementum consequat velit, vel semper ligula faucibus in. Aliquam cursus lacus in massa tincidunt blandit. Nunc vitae neque id enim dictum malesuada id sed lectus.",
    author: "Marcus Chen",
    authorImage: "/placeholder.svg",
    category: "Career Development",
    coverImage: "/placeholder.svg",
    publishDate: "2025-03-20",
    slug: "in-demand-skills-tech-careers-2025",
    readTime: 7
  },
  {
    id: 2,
    title: "How to Ace Your Technical Interview: Tips from Hiring Managers",
    excerpt: "Learn what hiring managers are really looking for and how to prepare for technical assessments.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer a ligula euismod, consectetur felis sed, posuere ligula. Sed aliquet eleifend mauris, vel posuere lacus tincidunt et. Donec ultrices finibus purus non pellentesque. Duis molestie placerat velit, ut faucibus odio dictum id. Cras in erat a nunc venenatis fringilla ut eu dui. Curabitur rutrum libero at orci finibus, eu luctus massa euismod. Morbi et turpis non justo lacinia lacinia. Nullam vel dui vel libero vestibulum ornare. Etiam lacinia porta lacus, vel viverra dui pulvinar vel. Etiam hendrerit aliquam lorem at tristique. Nulla facilisi. Mauris a quam facilisis, finibus ante eget, pellentesque diam. Sed elementum consequat velit, vel semper ligula faucibus in. Aliquam cursus lacus in massa tincidunt blandit. Nunc vitae neque id enim dictum malesuada id sed lectus.",
    author: "Sophia Williams",
    authorImage: "/placeholder.svg",
    category: "Interview Prep",
    coverImage: "/placeholder.svg",
    publishDate: "2025-03-28",
    slug: "ace-your-technical-interview",
    readTime: 9
  },
  {
    id: 3,
    title: "Building a Portfolio That Gets You Hired",
    excerpt: "Create a standout portfolio that showcases your skills and helps you land your dream job.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer a ligula euismod, consectetur felis sed, posuere ligula. Sed aliquet eleifend mauris, vel posuere lacus tincidunt et. Donec ultrices finibus purus non pellentesque. Duis molestie placerat velit, ut faucibus odio dictum id. Cras in erat a nunc venenatis fringilla ut eu dui. Curabitur rutrum libero at orci finibus, eu luctus massa euismod. Morbi et turpis non justo lacinia lacinia. Nullam vel dui vel libero vestibulum ornare. Etiam lacinia porta lacus, vel viverra dui pulvinar vel. Etiam hendrerit aliquam lorem at tristique. Nulla facilisi. Mauris a quam facilisis, finibus ante eget, pellentesque diam. Sed elementum consequat velit, vel semper ligula faucibus in. Aliquam cursus lacus in massa tincidunt blandit. Nunc vitae neque id enim dictum malesuada id sed lectus.",
    author: "Jasmine Patel",
    authorImage: "/placeholder.svg",
    category: "Portfolio Development",
    coverImage: "/placeholder.svg",
    publishDate: "2025-04-03",
    slug: "building-portfolio-gets-you-hired",
    readTime: 6
  },
  {
    id: 4,
    title: "Transitioning Careers: From Traditional Industries to Tech",
    excerpt: "A step-by-step guide for professionals looking to make the leap into the technology sector.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer a ligula euismod, consectetur felis sed, posuere ligula. Sed aliquet eleifend mauris, vel posuere lacus tincidunt et. Donec ultrices finibus purus non pellentesque. Duis molestie placerat velit, ut faucibus odio dictum id. Cras in erat a nunc venenatis fringilla ut eu dui. Curabitur rutrum libero at orci finibus, eu luctus massa euismod. Morbi et turpis non justo lacinia lacinia. Nullam vel dui vel libero vestibulum ornare. Etiam lacinia porta lacus, vel viverra dui pulvinar vel. Etiam hendrerit aliquam lorem at tristique. Nulla facilisi. Mauris a quam facilisis, finibus ante eget, pellentesque diam. Sed elementum consequat velit, vel semper ligula faucibus in. Aliquam cursus lacus in massa tincidunt blandit. Nunc vitae neque id enim dictum malesuada id sed lectus.",
    author: "Alexandra Reynolds",
    authorImage: "/placeholder.svg",
    category: "Career Transitions",
    coverImage: "/placeholder.svg",
    publishDate: "2025-04-08",
    slug: "transitioning-careers-to-tech",
    readTime: 8
  },
  {
    id: 5,
    title: "The Future of Remote Work in Tech Industries",
    excerpt: "How remote work is reshaping tech careers and what skills you need to thrive in distributed teams.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer a ligula euismod, consectetur felis sed, posuere ligula. Sed aliquet eleifend mauris, vel posuere lacus tincidunt et. Donec ultrices finibus purus non pellentesque. Duis molestie placerat velit, ut faucibus odio dictum id. Cras in erat a nunc venenatis fringilla ut eu dui. Curabitur rutrum libero at orci finibus, eu luctus massa euismod. Morbi et turpis non justo lacinia lacinia. Nullam vel dui vel libero vestibulum ornare. Etiam lacinia porta lacus, vel viverra dui pulvinar vel. Etiam hendrerit aliquam lorem at tristique. Nulla facilisi. Mauris a quam facilisis, finibus ante eget, pellentesque diam. Sed elementum consequat velit, vel semper ligula faucibus in. Aliquam cursus lacus in massa tincidunt blandit. Nunc vitae neque id enim dictum malesuada id sed lectus.",
    author: "David Rodriguez",
    authorImage: "/placeholder.svg",
    category: "Workplace Trends",
    coverImage: "/placeholder.svg",
    publishDate: "2025-03-15",
    slug: "future-remote-work-tech",
    readTime: 10
  },
  {
    id: 6,
    title: "Negotiating Your Tech Salary: A Complete Guide",
    excerpt: "Learn effective strategies for salary negotiation to ensure you're paid what you're worth.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer a ligula euismod, consectetur felis sed, posuere ligula. Sed aliquet eleifend mauris, vel posuere lacus tincidunt et. Donec ultrices finibus purus non pellentesque. Duis molestie placerat velit, ut faucibus odio dictum id. Cras in erat a nunc venenatis fringilla ut eu dui. Curabitur rutrum libero at orci finibus, eu luctus massa euismod. Morbi et turpis non justo lacinia lacinia. Nullam vel dui vel libero vestibulum ornare. Etiam lacinia porta lacus, vel viverra dui pulvinar vel. Etiam hendrerit aliquam lorem at tristique. Nulla facilisi. Mauris a quam facilisis, finibus ante eget, pellentesque diam. Sed elementum consequat velit, vel semper ligula faucibus in. Aliquam cursus lacus in massa tincidunt blandit. Nunc vitae neque id enim dictum malesuada id sed lectus.",
    author: "Sophia Williams",
    authorImage: "/placeholder.svg",
    category: "Career Development",
    coverImage: "/placeholder.svg",
    publishDate: "2025-04-05",
    slug: "negotiating-tech-salary-guide",
    readTime: 8
  }
];

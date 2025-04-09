
export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Software Developer",
    company: "TechCorp Inc.",
    image: "/placeholder.svg",
    quote: "The career boot camp transformed my job prospects completely. Within two months of completing the program, I landed a position that doubled my previous salary!",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Data Analyst",
    company: "Analytics Pro",
    image: "/placeholder.svg",
    quote: "As someone transitioning careers, I was worried about my prospects. This program provided me with both the technical skills and the confidence to make the leap successfully.",
    rating: 5
  },
  {
    id: 3,
    name: "Priya Patel",
    position: "UX Designer",
    company: "Creative Solutions",
    image: "/placeholder.svg",
    quote: "The personalized coaching and direct connections to employers made all the difference. I received three job offers within weeks of completing the program!",
    rating: 5
  },
  {
    id: 4,
    name: "James Wilson",
    position: "Project Manager",
    company: "Global Innovations",
    image: "/placeholder.svg",
    quote: "What sets this boot camp apart is the ongoing support and job placement assistance. They genuinely care about your long-term success.",
    rating: 4
  }
];

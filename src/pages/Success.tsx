
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "@/components/shared/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Quote, Play, ArrowRight, CheckCircle } from "lucide-react";

const Success = () => {
  // Featured success stories with extended content
  const featuredStories = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Software Developer",
      company: "TechCorp Inc.",
      image: "/placeholder.svg",
      story: "Before joining Career Launchpad, I was stuck in a retail job with limited growth potential. I always had an interest in technology but wasn't sure how to break into the field without a traditional computer science degree.\n\nThe Full-Stack Web Development bootcamp was intense but incredibly rewarding. The hands-on approach and real-world projects gave me confidence in my abilities, and the career coaching helped me create a portfolio that showcased my skills effectively.\n\nWithin two months of completing the program, I had three job offers and accepted a position at TechCorp that doubled my previous salary. I'm now working on exciting projects and have a clear path for advancement in my new career.",
      videoUrl: "#",
      beforeCareer: "Retail Associate",
      afterCareer: "Software Developer",
      salaryCHange: "105% increase"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Data Analyst",
      company: "Analytics Pro",
      image: "/placeholder.svg",
      story: "I was working in customer service but felt my analytical abilities weren't being utilized. I had a business degree but lacked the technical skills needed for data-focused roles.\n\nCareer Launchpad's Data Science program filled those gaps perfectly. The curriculum was challenging but well-structured, and the instructors were always available to provide additional support when needed. The most valuable aspect was learning directly from industry professionals who shared real-world applications of the concepts we were studying.\n\nThe job placement team connected me with several companies looking for my exact skill set. I'm now working as a Data Analyst at Analytics Pro, where I help businesses make data-driven decisions. My salary increased by 70%, but more importantly, I'm finally in a role that leverages my strengths and offers continuous learning opportunities.",
      videoUrl: "#",
      beforeCareer: "Customer Service Representative",
      afterCareer: "Data Analyst",
      salaryCHange: "70% increase"
    },
    {
      id: 3,
      name: "Priya Patel",
      position: "UX Designer",
      company: "Creative Solutions",
      image: "/placeholder.svg",
      story: "I had a background in graphic design but wanted to transition into UX design. I was struggling to break into the field because I lacked formal training in user research and interaction design principles.\n\nThe UX/UI Design program at Career Launchpad was exactly what I needed. The curriculum covered everything from user research and wireframing to prototyping and usability testing. I especially appreciated the opportunity to work on projects for real clients, which gave me practical experience and portfolio pieces.\n\nThe personalized coaching helped me position my previous design experience effectively while highlighting my new UX skills. Through Career Launchpad's employer network, I connected with Creative Solutions and received an offer before I even completed the program. I now lead user experience projects for major clients and have increased my income by 65%.",
      videoUrl: "#",
      beforeCareer: "Graphic Designer",
      afterCareer: "UX Designer",
      salaryCHange: "65% increase"
    }
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Real stories from real graduates who transformed their careers through our programs and job placement services.
            </p>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl md:text-4xl font-bold text-brand-blue mb-2">93%</div>
              <p className="text-gray-700">Job Placement Rate</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl md:text-4xl font-bold text-brand-blue mb-2">45%</div>
              <p className="text-gray-700">Average Salary Increase</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl md:text-4xl font-bold text-brand-blue mb-2">89%</div>
              <p className="text-gray-700">Industry Retention Rate</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl md:text-4xl font-bold text-brand-blue mb-2">2,500+</div>
              <p className="text-gray-700">Successful Graduates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed stories of career transformation from our graduates.
            </p>
          </div>
          
          <div className="space-y-12">
            {featuredStories.map((story, index) => (
              <div 
                key={story.id} 
                className={`bg-white rounded-lg shadow-md overflow-hidden
                  ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} 
                  flex flex-col md:flex-row`}
              >
                <div className="md:w-1/3 bg-gray-100">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-brand-blue mr-3" />
                    <div>
                      <h3 className="text-2xl font-bold">{story.name}</h3>
                      <p className="text-brand-blue">
                        {story.position} at {story.company}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-6 text-gray-700 whitespace-pre-line">
                    {story.story}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-500">Previous Role</p>
                      <p className="font-semibold">{story.beforeCareer}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-500">Current Role</p>
                      <p className="font-semibold">{story.afterCareer}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-500">Salary Change</p>
                      <p className="font-semibold text-brand-teal">{story.salaryCHange}</p>
                    </div>
                  </div>
                  
                  <a 
                    href={story.videoUrl}
                    className="inline-flex items-center text-brand-blue hover:text-brand-blue/80 font-medium"
                  >
                    <Play className="h-5 w-5 mr-2" />
                    Watch Video Interview
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Graduates Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear directly from the people who have gone through our programs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Employer Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Employers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Feedback from the companies who have hired our graduates.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <img
                  src="/placeholder.svg"
                  alt="TechCorp Logo"
                  className="h-16 w-16 rounded mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold">TechCorp Inc.</h3>
                  <p className="text-gray-600">Technology Company</p>
                </div>
              </div>
              <blockquote className="text-gray-700 mb-6">
                "Career Launchpad graduates come to us with both the technical skills and professional mindset needed to contribute immediately. They're well-prepared for real-world challenges and have a strong foundation that allows them to grow quickly within our organization."
              </blockquote>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">James Wilson</p>
                  <p className="text-gray-600 text-sm">VP of Engineering</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-brand-teal">15+ hires</p>
                  <p className="text-gray-600 text-sm">from Career Launchpad</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <img
                  src="/placeholder.svg"
                  alt="DataFocus Logo"
                  className="h-16 w-16 rounded mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold">DataFocus Analytics</h3>
                  <p className="text-gray-600">Data Analysis Firm</p>
                </div>
              </div>
              <blockquote className="text-gray-700 mb-6">
                "We've hired multiple graduates from Career Launchpad's Data Science program, and they consistently exceed our expectations. Their curriculum clearly emphasizes practical applications alongside theory, producing analysts who can derive meaningful insights from day one."
              </blockquote>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">Elena Rodriguez</p>
                  <p className="text-gray-600 text-sm">Director of Analytics</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-brand-teal">8+ hires</p>
                  <p className="text-gray-600 text-sm">from Career Launchpad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Career Paths */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Career Transitions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our programs have helped people transform their careers across various industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Tech Transitions</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0" />
                  <span>Teaching → Software Development</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0" />
                  <span>Customer Service → UX Design</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0" />
                  <span>Retail → Web Development</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0" />
                  <span>Administrative → Product Management</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0" />
                  <span>Sales → Technical Project Management</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Data Careers</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0" />
                  <span>Finance → Data Science</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0" />
                  <span>Research Assistant → Data Analyst</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0" />
                  <span>Marketing → Business Intelligence</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0" />
                  <span>Logistics → Supply Chain Analytics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0" />
                  <span>Healthcare → Healthcare Data Analysis</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Digital Marketing</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0" />
                  <span>Traditional Marketing → Digital Marketing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0" />
                  <span>Journalism → Content Marketing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0" />
                  <span>Public Relations → Social Media Management</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0" />
                  <span>Customer Service → Email Marketing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0" />
                  <span>General Business → SEO Specialist</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of professionals who have transformed their careers with Career Launchpad.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/programs">
              <Button 
                size="lg" 
                className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8"
              >
                Explore Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 px-8"
              >
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Success;

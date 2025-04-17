import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { programs } from "@/data/programs";
import ProgramCard from "@/components/shared/ProgramCard";
import JobCard from "@/components/shared/JobCard";
import { jobs } from "@/data/jobs";
import { blogPosts } from "@/data/blogPosts";
import BlogPostCard from "@/components/shared/BlogPostCard";
import { ArrowRight, Briefcase, Target, UserCheck } from "lucide-react";

const Index = () => {
  const featuredPrograms = programs.slice(0, 3);
  const featuredJobs = jobs.slice(0, 3);
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <div>
      <Hero />
      <ServicesOverview />

      {/* Featured Programs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Bootcamps Tailored for Career Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-aligned curriculums designed to transform your career trajectory.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/programs">
              <Button variant="outline" className="px-6">
                Explore All Bootcamps
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Unique Value Proposition Section */}
      <section className="py-16 bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-white/20 p-4 rounded-full inline-block mb-4">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">End-to-End Support</h3>
              <p>From skills training to direct job placement</p>
            </div>
            <div>
              <div className="bg-white/20 p-4 rounded-full inline-block mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Strategic Partnerships</h3>
              <p>Connections with top employers in key industries</p>
            </div>
            <div>
              <div className="bg-white/20 p-4 rounded-full inline-block mb-4">
                <UserCheck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Coaching</h3>
              <p>1:1 career guidance and skill development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">93%</div>
              <p className="text-lg">Job Placement Rate</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <p className="text-lg">Hiring Partners</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">45%</div>
              <p className="text-lg">Average Salary Increase</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">2,500+</div>
              <p className="text-lg">Successful Graduates</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Jobs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Job Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Exclusive job listings from our network of hiring partners.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/jobs">
              <Button variant="outline" className="px-6">
                Browse All Jobs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our graduates who have transformed their careers through our programs.
            </p>
          </div>
          
          <TestimonialCarousel />
          
          <div className="mt-12 text-center">
            <Link to="/success">
              <Button variant="outline" className="px-6">
                Read More Success Stories
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Blog Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Career Resources & Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert advice to help you navigate your career journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/blog">
              <Button variant="outline" className="px-6">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Launch Your Dream Career?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Take the first step toward transforming your future. Join our community of successful graduates.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8">
              Enroll Today
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

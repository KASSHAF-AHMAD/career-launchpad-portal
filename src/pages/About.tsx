
import { teamMembers } from "@/data/team";
import TeamMemberCard from "@/components/shared/TeamMemberCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Target, Users, Award, Briefcase } from "lucide-react";

const About = () => {
  return (
    <div>
      {/* Header */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Career Launchpad
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We're on a mission to transform careers and connect talented professionals with their dream jobs through specialized training and direct employer connections.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Career Launchpad was founded in 2020 by Alexandra Reynolds, who saw a critical gap between traditional education and the actual skills needed in today's job market. With over 15 years in tech recruitment and workforce development, Alex built Career Launchpad to bridge this gap.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                What began as a small workshop series has grown into a comprehensive career acceleration platform that has helped thousands of professionals transition into fulfilling, high-growth careers through specialized training programs and direct connections to employment opportunities.
              </p>
              <p className="text-lg text-gray-700">
                Today, we partner with hundreds of leading employers to create training programs specifically designed to meet their hiring needs, resulting in our industry-leading job placement rates.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <img
                src="/placeholder.svg"
                alt="Career Launchpad founders"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're guided by a commitment to career transformation and professional excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-4">
                <Target className="h-10 w-10 text-brand-blue" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To empower individuals to reach their full professional potential through specialized training, personalized coaching, and direct connections to meaningful employment opportunities.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-4">
                <Users className="h-10 w-10 text-brand-blue" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700">
                A world where everyone has access to the skills, knowledge, and connections they need to build fulfilling careers in high-growth industries.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <CheckCircle className="h-5 w-5 text-brand-teal mr-2" />
                Excellence
              </h3>
              <p className="text-gray-700">
                We are committed to delivering the highest quality education and career services that lead to real-world results.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <CheckCircle className="h-5 w-5 text-brand-teal mr-2" />
                Innovation
              </h3>
              <p className="text-gray-700">
                We constantly evolve our curriculum and approaches to stay ahead of industry trends and employer needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <CheckCircle className="h-5 w-5 text-brand-teal mr-2" />
                Integrity
              </h3>
              <p className="text-gray-700">
                We operate with transparency, honesty, and ethical practices in all aspects of our business.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <CheckCircle className="h-5 w-5 text-brand-teal mr-2" />
                Accessibility
              </h3>
              <p className="text-gray-700">
                We strive to make quality career education and services available to people from all backgrounds.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <CheckCircle className="h-5 w-5 text-brand-teal mr-2" />
                Community
              </h3>
              <p className="text-gray-700">
                We foster a supportive environment where students, alumni, and employers can connect and grow together.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <CheckCircle className="h-5 w-5 text-brand-teal mr-2" />
                Results-Driven
              </h3>
              <p className="text-gray-700">
                We measure our success by the career outcomes of our graduates and the satisfaction of our employer partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our unique approach combines specialized education with direct employment pathways.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="mb-4 bg-brand-blue/10 p-3 rounded-full inline-block">
                <Award className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">Industry-Leading Curriculum</h3>
              <p className="text-gray-700">
                Our programs are designed in collaboration with top employers to focus on the skills they actually need. Our curriculum evolves continuously based on industry feedback.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="mb-4 bg-brand-blue/10 p-3 rounded-full inline-block">
                <Users className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">Personalized Coaching</h3>
              <p className="text-gray-700">
                Each student receives one-on-one career coaching tailored to their specific goals and needs. Our coaches work with you throughout the program and job search process.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="mb-4 bg-brand-blue/10 p-3 rounded-full inline-block">
                <Briefcase className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">Direct Employment Pathways</h3>
              <p className="text-gray-700">
                Our exclusive network of over 500 hiring partners gives graduates direct access to job opportunities that aren't available elsewhere, resulting in our 93% placement rate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team of industry experts and career specialists are dedicated to your success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Community
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Take the first step toward transforming your career with Career Launchpad.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/programs">
              <Button 
                size="lg" 
                className="bg-white text-brand-blue hover:bg-gray-100 px-8"
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
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

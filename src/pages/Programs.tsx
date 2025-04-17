
import { Button } from "@/components/ui/button";
import { programs } from "@/data/programs";
import ProgramCard from "@/components/shared/ProgramCard";
import { Link } from "react-router-dom";
import { Calendar, Clock, Award, Users, Briefcase, Target, FileText, PenLine, ClipboardCheck } from "lucide-react";

const Programs = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-gray-900 to-brand-blue text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Launch Your Career with Job-Focused Training
            </h1>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Our programs are specifically designed to prepare you for real jobs. Learn in-demand skills and get placed directly with our hiring partners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-6 text-lg">
                Apply Now
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                Browse Programs
              </Button>
            </div>
            <div className="mt-10 flex items-center text-gray-200">
              <Briefcase className="h-5 w-5 mr-2" />
              <span className="text-lg">93% job placement rate within 6 months of graduation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Job Guarantee Banner */}
      <section className="bg-brand-orange text-white py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Our Job Guarantee: Land a job within 6 months or get your money back
          </h2>
          <p className="mt-4 text-xl">
            We're confident in our training and job placement services
          </p>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Training Designed for Career Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our programs focus on practical skills that employers are actively looking for right now.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center text-center">
              <div className="bg-brand-blue/10 p-4 rounded-full mb-5">
                <Briefcase className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Job-Focused Curriculum</h3>
              <p className="text-gray-600">Courses created with input from hiring managers to ensure relevant skills.</p>
            </div>
            
            <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center text-center">
              <div className="bg-brand-blue/10 p-4 rounded-full mb-5">
                <Target className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Direct Job Placement</h3>
              <p className="text-gray-600">Our network of 500+ employer partners actively recruit from our graduate pool.</p>
            </div>
            
            <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center text-center">
              <div className="bg-brand-blue/10 p-4 rounded-full mb-5">
                <Clock className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast-Track Learning</h3>
              <p className="text-gray-600">Accelerated programs get you job-ready in weeks, not years.</p>
            </div>
            
            <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center text-center">
              <div className="bg-brand-blue/10 p-4 rounded-full mb-5">
                <Award className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Industry-Recognized</h3>
              <p className="text-gray-600">Certifications and credentials valued by top employers.</p>
            </div>
            
            <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center text-center">
              <div className="bg-brand-blue/10 p-4 rounded-full mb-5">
                <Users className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">1-on-1 Career Coaching</h3>
              <p className="text-gray-600">Personalized career planning, interview preparation, and resume building.</p>
            </div>
            
            <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center text-center">
              <div className="bg-brand-blue/10 p-4 rounded-full mb-5">
                <BarChart className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Salary Boost</h3>
              <p className="text-gray-600">Our graduates see an average 45% increase in salary after completing our programs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Success Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-5xl font-bold text-brand-blue mb-4">93%</div>
              <p className="text-xl">Job Placement Rate</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-5xl font-bold text-brand-blue mb-4">45%</div>
              <p className="text-xl">Average Salary Increase</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-5xl font-bold text-brand-blue mb-4">500+</div>
              <p className="text-xl">Hiring Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* All Programs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Industry-Focused Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized training designed to prepare you for real jobs with high demand.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {programs.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>

      {/* Career Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Career Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our end-to-end support ensures you're fully prepared for your career transition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Resume Revamp */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center mb-6">
                <div className="bg-brand-blue/10 p-4 rounded-full inline-block mb-4">
                  <FileText className="h-8 w-8 text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">Resume Revamp</h3>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-brand-teal mr-2">•</span>
                  <span>Professional resume writing and optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-teal mr-2">•</span>
                  <span>ATS-friendly formatting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-teal mr-2">•</span>
                  <span>LinkedIn profile optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-teal mr-2">•</span>
                  <span>Cover letter templates and guidance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-teal mr-2">•</span>
                  <span>Personal branding strategy</span>
                </li>
              </ul>
            </div>

            {/* Mock Interviews */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center mb-6">
                <div className="bg-brand-blue/10 p-4 rounded-full inline-block mb-4">
                  <PenLine className="h-8 w-8 text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">Mock Interviews</h3>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-brand-teal mr-2">•</span>
                  <span>Industry-specific interview preparation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-teal mr-2">•</span>
                  <span>Technical interview simulation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-teal mr-2">•</span>
                  <span>Behavioral question practice</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-teal mr-2">•</span>
                  <span>Real-time feedback and coaching</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-teal mr-2">•</span>
                  <span>Salary negotiation training</span>
                </li>
              </ul>
            </div>

            {/* Career Coaching */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center mb-6">
                <div className="bg-brand-blue/10 p-4 rounded-full inline-block mb-4">
                  <ClipboardCheck className="h-8 w-8 text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">Career Coaching</h3>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-brand-teal mr-2">•</span>
                  <span>1:1 career strategy sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-teal mr-2">•</span>
                  <span>Job search strategy development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-teal mr-2">•</span>
                  <span>Professional networking guidance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-teal mr-2">•</span>
                  <span>Career path planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-teal mr-2">•</span>
                  <span>Industry insights and mentorship</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-teal text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Launch Your New Career?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Join the thousands of graduates who have transformed their careers through our programs and job placement services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button size="lg" className="bg-white text-brand-teal hover:bg-gray-100 px-10 py-6 text-lg">
              Apply Now
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-10 py-6 text-lg">
                Request Information
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;


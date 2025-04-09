
import { Button } from "@/components/ui/button";
import { programs } from "@/data/programs";
import ProgramCard from "@/components/shared/ProgramCard";
import { Link } from "react-router-dom";
import { Calendar, Clock, Award, Users, Briefcase, Target, BarChart } from "lucide-react";

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
              Choose Your Career Path
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialized programs are designed to prepare you for specific career paths with high demand.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {programs.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>

      {/* Employer Partners */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Hiring Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our programs and gain access to career opportunities with these leading employers.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center items-center">
            {/* Placeholder logos - Replace with actual partner logos */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
              <div key={item} className="h-16 w-32 bg-gray-200 rounded-md flex items-center justify-center">
                <span className="text-gray-500 font-medium">Partner {item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our programs and job placement services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">How does your job placement service work?</h3>
              <p className="text-gray-700 leading-relaxed">
                Upon program completion, our career services team works directly with you to match your skills and career goals with our network of hiring partners. We help with resume optimization, interview preparation, and directly recommend you to hiring managers at companies seeking your specific skill set.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Do I need prior experience to join a program?</h3>
              <p className="text-gray-700 leading-relaxed">
                Most of our programs are designed for beginners and require no prior experience. However, some advanced courses may have prerequisites. Each program page specifies any necessary background knowledge.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">What payment options are available?</h3>
              <p className="text-gray-700 leading-relaxed">
                We offer several payment options including upfront payment, monthly installments, and income share agreements for qualified students. We also have scholarship opportunities for eligible candidates.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">What kind of job placement assistance do you provide?</h3>
              <p className="text-gray-700 leading-relaxed">
                Our career services include resume review, interview preparation, portfolio development, networking events, and direct connections with our hiring partners. We work with you until you secure a position.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Can I attend part-time while working?</h3>
              <p className="text-gray-700 leading-relaxed">
                Yes, many of our programs offer part-time and evening schedules specifically designed for working professionals. These typically run longer than our full-time programs to accommodate work schedules.
              </p>
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

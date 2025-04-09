
import { Button } from "@/components/ui/button";
import { programs } from "@/data/programs";
import ProgramCard from "@/components/shared/ProgramCard";
import { Link } from "react-router-dom";
import { Calendar, Clock, Award, Users } from "lucide-react";

const Programs = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gray-900 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              Training Programs & Courses
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Comprehensive, industry-leading curriculum designed to quickly build in-demand skills and prepare you for career success.
            </p>
            <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-3 text-lg">
              Apply Now
            </Button>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="bg-gray-50 p-8 rounded-lg flex flex-col items-center text-center">
              <div className="bg-brand-blue/10 p-4 rounded-full mb-5">
                <Calendar className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Flexible Schedules</h3>
              <p className="text-gray-600">Full-time, part-time, and weekend options to fit your life.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg flex flex-col items-center text-center">
              <div className="bg-brand-blue/10 p-4 rounded-full mb-5">
                <Clock className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Accelerated Learning</h3>
              <p className="text-gray-600">Focused curriculum to get you job-ready in weeks, not years.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg flex flex-col items-center text-center">
              <div className="bg-brand-blue/10 p-4 rounded-full mb-5">
                <Award className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Industry-Recognized</h3>
              <p className="text-gray-600">Programs designed with input from top hiring companies.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg flex flex-col items-center text-center">
              <div className="bg-brand-blue/10 p-4 rounded-full mb-5">
                <Users className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Instructors</h3>
              <p className="text-gray-600">Learn from professionals with real-world industry experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* All Programs */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Program Offerings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the program that aligns with your career goals and interests.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {programs.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our programs.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Do I need prior experience to join a program?</h3>
              <p className="text-gray-700 leading-relaxed">
                Most of our programs are designed for beginners and require no prior experience. However, some advanced courses may have prerequisites. Each program page specifies any necessary background knowledge.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">What payment options are available?</h3>
              <p className="text-gray-700 leading-relaxed">
                We offer several payment options including upfront payment, monthly installments, and income share agreements for qualified students. We also have scholarship opportunities for eligible candidates.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">What kind of job placement assistance do you provide?</h3>
              <p className="text-gray-700 leading-relaxed">
                Our career services include resume review, interview preparation, portfolio development, networking events, and direct connections with our hiring partners. We work with you until you secure a position.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
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
            Ready to Advance Your Career?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Take the first step toward building in-demand skills and securing your dream job.
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


import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Launch Your Dream Career Today
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Specialized training and direct job placement to transform your career path and future earnings potential.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              size="lg" 
              className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold text-lg"
            >
              Enroll Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link to="/programs">
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-gray-900 font-semibold text-lg"
              >
                Explore Programs
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center text-sm text-gray-300">
            <div className="flex items-center mb-4 sm:mb-0 sm:mr-8">
              <div className="mr-2 bg-brand-teal rounded-full p-1">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>93% Job Placement Rate</span>
            </div>
            <div className="flex items-center mb-4 sm:mb-0 sm:mr-8">
              <div className="mr-2 bg-brand-teal rounded-full p-1">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Industry-Leading Curriculum</span>
            </div>
            <div className="flex items-center">
              <div className="mr-2 bg-brand-teal rounded-full p-1">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>1-on-1 Career Coaching</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

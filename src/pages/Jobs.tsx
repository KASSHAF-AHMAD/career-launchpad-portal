
import { useState } from "react";
import { jobs } from "@/data/jobs";
import JobCard from "@/components/shared/JobCard";
import { Button } from "@/components/ui/button";
import { Check, Search, Briefcase, Upload } from "lucide-react";

const Jobs = () => {
  // State for filters
  const [filters, setFilters] = useState({
    category: "",
    type: "",
    location: "",
    search: "",
  });

  // All possible job categories
  const categories = ["Development", "Design", "Marketing", "Data", "Management"];
  
  // All possible job types
  const types = ["Full-time", "Part-time", "Contract", "Remote"];
  
  // All possible locations (extract unique locations from jobs)
  const locations = Array.from(new Set(jobs.map(job => job.location)));

  // Handle filter changes
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  // Filter jobs based on current filters
  const filteredJobs = jobs.filter(job => {
    // Check if job matches all selected filters
    return (
      (filters.category === "" || job.category === filters.category) &&
      (filters.type === "" || job.type === filters.type) &&
      (filters.location === "" || job.location === filters.location) &&
      (filters.search === "" ||
        job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        job.company.toLowerCase().includes(filters.search.toLowerCase()) ||
        job.description.toLowerCase().includes(filters.search.toLowerCase()))
    );
  });

  return (
    <div>
      {/* Header */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Job Listings & Opportunities
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Exclusive job opportunities from our network of hiring partners, curated for our program graduates and qualified professionals.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white">
                <Upload className="mr-2 h-5 w-5" />
                Upload Your Resume
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                <Briefcase className="mr-2 h-5 w-5" />
                Job Alert Signup
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            {/* Search */}
            <div className="flex-grow relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                name="search"
                placeholder="Search jobs, companies, or keywords"
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                value={filters.search}
                onChange={handleFilterChange}
              />
            </div>
            
            {/* Category Filter */}
            <div className="w-full md:w-48">
              <select
                name="category"
                value={filters.category}
                onChange={handleFilterChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Job Type Filter */}
            <div className="w-full md:w-48">
              <select
                name="type"
                value={filters.type}
                onChange={handleFilterChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                <option value="">All Job Types</option>
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Location Filter */}
            <div className="w-full md:w-48">
              <select
                name="location"
                value={filters.location}
                onChange={handleFilterChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                <option value="">All Locations</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Listing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredJobs.length} Jobs Available
            </h2>
          </div>
          
          {filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-lg">
              <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No jobs found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria to find more results.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Our Job Placement Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make it easy to find and apply for your ideal position.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-brand-blue text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Create Your Profile</h3>
              <p className="text-gray-600">
                Upload your resume, highlight your skills, and set your job preferences so we can match you with the perfect opportunities.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-brand-blue text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Apply to Positions</h3>
              <p className="text-gray-600">
                Browse our curated job listings and apply directly through our platform with personalized application materials.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-brand-blue text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Hired</h3>
              <p className="text-gray-600">
                Our career coaches help you prepare for interviews and negotiate offers to land your dream job with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-16 bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">93%</div>
              <p className="text-lg">Of our graduates find employment within 3 months</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">45%</div>
              <p className="text-lg">Average salary increase after our programs</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <p className="text-lg">Hiring partners in our exclusive network</p>
            </div>
          </div>
        </div>
      </section>

      {/* Employer Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              For Employers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with our pool of highly skilled, job-ready candidates.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Partner With Us</h3>
              <p className="text-gray-700 mb-6">
                Join our network of hiring partners to access pre-vetted candidates with the exact skills you need. Our candidates are thoroughly trained and ready to hit the ground running.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>Access to pre-screened, qualified candidates</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>Reduced hiring costs and time-to-hire</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>Customized talent pipeline for your specific needs</span>
                </li>
              </ul>
              <Button className="bg-brand-blue hover:bg-brand-blue/90">
                Become a Hiring Partner
              </Button>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Post a Job</h3>
              <p className="text-gray-700 mb-6">
                Looking to fill a specific position? Post your job directly to our platform and reach qualified candidates immediately.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>Simple, streamlined job posting process</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>Targeted distribution to relevant candidates</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>Applicant tracking and management tools</span>
                </li>
              </ul>
              <Button className="bg-brand-teal hover:bg-brand-teal/90">
                Post a Job
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Help Finding the Right Job?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let our career coaches work with you to identify the perfect opportunities and prepare you to land them.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-3 text-lg">
              Schedule Career Consultation
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
              View Success Stories
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Jobs;

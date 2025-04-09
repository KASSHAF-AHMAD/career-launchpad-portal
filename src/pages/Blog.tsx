
import { useState } from "react";
import { blogPosts } from "@/data/blogPosts";
import BlogPostCard from "@/components/shared/BlogPostCard";
import { Button } from "@/components/ui/button";
import { Search, Filter, ChevronDown } from "lucide-react";

const Blog = () => {
  // State for filters and search
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showFilters, setShowFilters] = useState<boolean>(false);
  
  // All unique categories from blog posts
  const categories = ["All", ...Array.from(new Set(blogPosts.map(post => post.category)))];
  
  // Filter posts based on active category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = 
      searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Header */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Career Resources & Insights
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Expert advice, industry trends, and career tips to help you navigate your professional journey.
            </p>
            
            {/* Search Bar */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-3 w-full rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="hidden md:flex space-x-1">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "ghost"}
                  className={activeCategory === category ? "bg-brand-blue text-white" : "text-gray-700"}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
            
            {/* Mobile filter toggle */}
            <Button
              variant="outline"
              className="md:hidden flex items-center"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-4 w-4 mr-2" />
              Filter
              <ChevronDown className={`h-4 w-4 ml-2 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </Button>
            
            <div className="text-gray-600 text-sm">
              {filteredPosts.length} articles
            </div>
          </div>
          
          {/* Mobile filters dropdown */}
          {showFilters && (
            <div className="md:hidden mt-4 grid grid-cols-2 gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  className={activeCategory === category ? "bg-brand-blue text-white" : "text-gray-700"}
                  onClick={() => {
                    setActiveCategory(category);
                    setShowFilters(false);
                  }}
                >
                  {category}
                </Button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-lg">
              <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search or category filters.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter to receive the latest career advice, industry insights, and job market updates.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-l-md sm:rounded-r-none border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
            <Button className="sm:rounded-l-none bg-brand-blue hover:bg-brand-blue/90">
              Subscribe
            </Button>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Free Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Free Career Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download these guides to help you in your career journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Resume Guide"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Ultimate Resume Guide</h3>
                <p className="text-gray-700 mb-4">
                  Learn how to craft a resume that stands out to recruiters and hiring managers.
                </p>
                <Button className="w-full bg-brand-teal hover:bg-brand-teal/90">
                  Download Free Guide
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Interview Preparation"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Interview Preparation</h3>
                <p className="text-gray-700 mb-4">
                  Master the art of interviewing with our comprehensive preparation guide.
                </p>
                <Button className="w-full bg-brand-teal hover:bg-brand-teal/90">
                  Download Free Guide
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Salary Negotiation"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Salary Negotiation</h3>
                <p className="text-gray-700 mb-4">
                  Learn effective strategies to negotiate your salary and benefits package.
                </p>
                <Button className="w-full bg-brand-teal hover:bg-brand-teal/90">
                  Download Free Guide
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Personalized Career Guidance?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our career coaches are ready to help you navigate your professional journey with expert advice tailored to your goals.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-brand-blue hover:bg-gray-100 px-8 py-3 text-lg"
          >
            Schedule a Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Blog;

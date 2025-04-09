
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "@/components/shared/TestimonialCard";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex * testimonialsPerPage,
    (currentIndex + 1) * testimonialsPerPage
  );

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleTestimonials.map((testimonial) => (
          <div key={testimonial.id} className="animate-fade-in">
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>
      
      {/* Navigation buttons */}
      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={goToPrevSlide}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
          aria-label="Previous testimonials"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-brand-blue" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial page ${index + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={goToNextSlide}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
          aria-label="Next testimonials"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;

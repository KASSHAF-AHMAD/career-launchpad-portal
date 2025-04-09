
import { Star } from "lucide-react";
import { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-lg">{testimonial.name}</h4>
          <p className="text-gray-600 text-sm">
            {testimonial.position} at {testimonial.company}
          </p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < testimonial.rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
      
      <blockquote className="italic text-gray-700 mb-4 flex-grow">
        "{testimonial.quote}"
      </blockquote>
    </div>
  );
};

export default TestimonialCard;


import { Program } from "@/data/programs";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, CheckCircle } from "lucide-react";

interface ProgramCardProps {
  program: Program;
}

const ProgramCard = ({ program }: ProgramCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={program.image}
        alt={program.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{program.title}</h3>
        
        <div className="flex items-center text-gray-600 mb-4">
          <Clock className="h-4 w-4 mr-2" />
          <span>{program.duration}</span>
          <span className="mx-2">•</span>
          <span>{program.priceRange}</span>
        </div>
        
        <p className="text-gray-700 mb-4">{program.description}</p>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 mb-2">Key Topics:</h4>
          <ul className="space-y-1">
            {program.topics.slice(0, 4).map((topic, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-4 w-4 text-brand-teal mr-2 mt-1 flex-shrink-0" />
                <span>{topic}</span>
              </li>
            ))}
            {program.topics.length > 4 && (
              <li className="text-brand-blue text-sm">
                +{program.topics.length - 4} more topics
              </li>
            )}
          </ul>
        </div>
        
        <div className="flex flex-col space-y-2">
          <Link to={`/programs/${program.slug}`}>
            <Button className="w-full bg-brand-blue hover:bg-brand-blue/90">
              Learn More
            </Button>
          </Link>
          <Button variant="outline" className="w-full">
            Request Syllabus
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;

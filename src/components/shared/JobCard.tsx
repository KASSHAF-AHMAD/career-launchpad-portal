
import { Job } from "@/data/jobs";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, DollarSign, Building } from "lucide-react";
import { format, parseISO } from "date-fns";

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  // Format the posted date
  const formattedDate = format(parseISO(job.postedDate), "MMM d, yyyy");
  
  // Get days ago
  const postedDaysAgo = Math.floor(
    (new Date().getTime() - parseISO(job.postedDate).getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-xl font-bold mb-1">{job.title}</h3>
          <div className="flex items-center text-gray-600 mb-4">
            <Building className="h-4 w-4 mr-1" />
            <span className="mr-3">{job.company}</span>
            <MapPin className="h-4 w-4 mr-1" />
            <span>{job.location}</span>
          </div>
        </div>
        
        <div className="mb-4 md:mb-0">
          <span 
            className={`inline-block px-3 py-1 rounded-full text-sm font-medium
              ${job.category === "Development" ? "bg-blue-100 text-blue-800" : 
                job.category === "Design" ? "bg-purple-100 text-purple-800" :
                job.category === "Marketing" ? "bg-green-100 text-green-800" :
                job.category === "Data" ? "bg-yellow-100 text-yellow-800" :
                "bg-gray-100 text-gray-800"
              }`}
          >
            {job.category}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          <span>{job.type}</span>
        </div>
        
        <div className="flex items-center">
          <DollarSign className="h-4 w-4 mr-1" />
          <span>{job.salary}</span>
        </div>
        
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-1" />
          <span>Posted {postedDaysAgo} days ago</span>
        </div>
      </div>

      <p className="text-gray-700 mb-4 line-clamp-2">{job.description}</p>
      
      <div className="mb-6">
        <h4 className="font-semibold text-gray-800 mb-2">Requirements:</h4>
        <ul className="list-disc pl-5 space-y-1">
          {job.requirements.slice(0, 2).map((req, index) => (
            <li key={index} className="text-gray-600">{req}</li>
          ))}
          {job.requirements.length > 2 && (
            <li className="text-brand-blue">
              +{job.requirements.length - 2} more requirements
            </li>
          )}
        </ul>
      </div>
      
      <div className="flex space-x-3">
        <Button className="flex-1 bg-brand-blue hover:bg-brand-blue/90">
          Apply Now
        </Button>
        <Button variant="outline" className="flex-1">
          Save Job
        </Button>
      </div>
    </div>
  );
};

export default JobCard;

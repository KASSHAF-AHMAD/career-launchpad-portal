
import { TeamMember } from "@/data/team";
import { Linkedin, Twitter, Github } from "lucide-react";

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard = ({ member }: TeamMemberCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
        <p className="text-brand-blue mb-4">{member.position}</p>
        <p className="text-gray-700 mb-6">{member.bio}</p>
        
        <div className="flex space-x-3">
          {member.socialLinks.linkedin && (
            <a 
              href={member.socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-brand-blue transition-colors"
              aria-label={`${member.name}'s LinkedIn profile`}
            >
              <Linkedin />
            </a>
          )}
          
          {member.socialLinks.twitter && (
            <a 
              href={member.socialLinks.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-brand-blue transition-colors"
              aria-label={`${member.name}'s Twitter profile`}
            >
              <Twitter />
            </a>
          )}
          
          {member.socialLinks.github && (
            <a 
              href={member.socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-brand-blue transition-colors"
              aria-label={`${member.name}'s GitHub profile`}
            >
              <Github />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;

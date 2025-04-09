
import { ArrowRight, MonitorPlay, Users, Briefcase, Award } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesOverview = () => {
  const services = [
    {
      title: "Specialized Training Programs",
      description: "Immersive, hands-on curriculum designed by industry experts to build in-demand skills for today's job market.",
      icon: <MonitorPlay className="h-10 w-10 text-brand-blue" />,
      link: "/programs"
    },
    {
      title: "Personalized Career Coaching",
      description: "One-on-one guidance for resume building, interview preparation, and personal brand development.",
      icon: <Users className="h-10 w-10 text-brand-blue" />,
      link: "/about"
    },
    {
      title: "Direct Job Placement",
      description: "Connections with our exclusive network of hiring partners and personalized job matching services.",
      icon: <Briefcase className="h-10 w-10 text-brand-blue" />,
      link: "/jobs"
    },
    {
      title: "Ongoing Support",
      description: "Continued career development resources and networking opportunities for alumni.",
      icon: <Award className="h-10 w-10 text-brand-blue" />,
      link: "/success"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Path to Career Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine specialized training, personalized coaching, and direct employer connections to transform your career prospects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
              <Link 
                to={service.link} 
                className="text-brand-blue font-medium inline-flex items-center group"
              >
                Learn more 
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Career?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Take the first step toward a more rewarding professional future with our proven career acceleration programs.
          </p>
          <Link 
            to="/programs" 
            className="inline-block bg-brand-blue text-white font-semibold px-8 py-3 rounded-md hover:bg-brand-blue/90 transition-colors"
          >
            View All Programs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;

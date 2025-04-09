
import ContactForm from "@/components/shared/ContactForm";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <div>
      {/* Header */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300">
              Have questions about our programs, career services, or anything else? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-brand-blue/10 p-3 rounded-full mr-4 flex-shrink-0">
                      <MapPin className="h-6 w-6 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                      <p className="text-gray-700">
                        123 Innovation Drive, Suite 400<br />
                        San Francisco, CA 94103
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-brand-blue/10 p-3 rounded-full mr-4 flex-shrink-0">
                      <Phone className="h-6 w-6 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                      <p className="text-gray-700">
                        Main Office: (415) 555-0123<br />
                        Admissions: (415) 555-0124
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-brand-blue/10 p-3 rounded-full mr-4 flex-shrink-0">
                      <Mail className="h-6 w-6 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                      <p className="text-gray-700">
                        General Inquiries: info@careerlaunchpad.com<br />
                        Admissions: admissions@careerlaunchpad.com<br />
                        Career Services: careers@careerlaunchpad.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-brand-blue/10 p-3 rounded-full mr-4 flex-shrink-0">
                      <Clock className="h-6 w-6 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Office Hours</h3>
                      <p className="text-gray-700">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-brand-blue/10 p-3 rounded-full mr-4 flex-shrink-0">
                      <MessageSquare className="h-6 w-6 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Live Chat</h3>
                      <p className="text-gray-700">
                        Chat with our admissions team during business hours through the chat icon in the bottom right corner of our website.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="mt-8 bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <p className="text-gray-500">Map would be embedded here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about our programs and services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">How do I apply for a program?</h3>
              <p className="text-gray-700">
                You can apply directly through our website by visiting the program page of your choice and clicking the "Apply Now" button. The application process includes a brief questionnaire and scheduling an admissions interview.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">What are the payment options?</h3>
              <p className="text-gray-700">
                We offer several payment options including upfront payment, monthly installments, and income share agreements for qualified students. We also have scholarship opportunities for eligible candidates. Contact our admissions team for details.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Do I need prior experience for your programs?</h3>
              <p className="text-gray-700">
                Most of our programs are designed for beginners and require no prior experience. However, some advanced courses may have prerequisites. Each program page specifies any necessary background knowledge.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">How does job placement work?</h3>
              <p className="text-gray-700">
                Our career services include resume review, interview preparation, portfolio development, networking events, and direct connections with our hiring partners. We work with you until you secure a position that matches your career goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-teal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Career Journey?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Take the first step by scheduling a free consultation with our admissions team.
          </p>
          <button className="bg-white text-brand-teal hover:bg-gray-100 font-semibold px-8 py-3 rounded-md text-lg">
            Schedule Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;

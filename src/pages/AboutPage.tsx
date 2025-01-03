import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { services } from '../data/Data';
const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 ">
      <h1 className="text-4xl font-bold text-center mb-8 mt-[8rem]">About Giant Star Events</h1>

      {/* Main Description */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">Who We Are</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Giant Star Events is a premier event planning and management company based in Imo State, Nigeria. 
          Since our establishment, we have been transforming ordinary occasions into extraordinary experiences. 
          Our team of dedicated professionals specializes in creating memorable events, from intimate 
          gatherings to grand celebrations.
        </p>
        <p className="text-gray-700 leading-relaxed">
          We pride ourselves on our attention to detail, creative approach, and commitment to excellence. 
          Whether it's a wedding, corporate event, or special celebration, we handle every aspect with 
          professionalism and precision, ensuring your event exceeds expectations.
        </p>
      </div>

      {/* Services Overview */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">Our Services</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          We offer a comprehensive range of event services including:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          {services.map((service) => (
            <li className="flex items-center gap-2" key={service.title}>
            <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
           {service.title}
          </li>
          ))}
        </ul>
      </div>

      {/* Contact Information */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-purple-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-purple-600">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <MapPin className="text-purple-600" />
              <p className="text-gray-700">No 4 Tetlow Road, Owerri, Imo State, Nigeria</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-purple-600" />
              <p className="text-gray-700">+234 803 307 3197</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-purple-600" />
              <p className="text-gray-700">giantstarevents@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="text-purple-600" />
              <p className="text-gray-700">Monday - Saturday: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-purple-600">Why Choose Us</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              Years of experience in event management
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              Dedicated team of professionals
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              Customized solutions for every event
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              Attention to detail and quality service
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              Competitive pricing and packages
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media */}
      {/* <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">Connect With Us</h2>
        <div className="flex justify-center gap-6">
          <a href="#" className="text-purple-600 hover:text-purple-700 transition-colors">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-purple-600 hover:text-purple-700 transition-colors">
            <Facebook size={24} />
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default AboutPage;
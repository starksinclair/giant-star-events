import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Cake, Crown, Church, Home, Gift } from "lucide-react";
import ImageWithFallback from '../components/ImageWithFallback';
import traditionalBeeds from '../assets/images/services/1024px-Traditional_beeds.jpg';
import Suya from "../assets/images/services/Suya.jpg"
import Birthday from "../assets/images/services/birthday.jpeg"
import Memorial from "../assets/images/services/memorial.jpeg"
import Suprise from "../assets/images/services/Suprise.jpg"
import Wedding from "../assets/images/services/wedding.jpg"
import { services } from "../data/Data";
import { Link, useParams } from "react-router-dom";

const serviceItems = [
  {
    id: 1,
    category: "Wedding Planning",
    title: "Wedding Planning Services",
    description: "Comprehensive wedding planning services tailored to your dream day.",
    image: Wedding,
    features: [
      "Hall and tent rentals",
      "Canopy, seats and table arrangements",
      "Stage setup and lighting design",
      "Decoration and floral arrangements",
      "Catering services with exquisite dishes",
      "Cakes and pastries",
      "Live band performances and DJ",
      "MC and event anchoring",
      "Photography and video coverage",
      "Drone photography",
      "Makeup artists and styling",
      "Invitation cards and branding",
      "Professional ushers and servers",
      "Security and car park management"
    ],
    icon: Heart
  },
  {
    id: 2,
    category: "Anniversary & Birthday Events",
    title: "Anniversary & Birthday Events",
    description: "Memorable celebrations for your special milestones and birthdays.",
    image: Birthday,
    features: [
      "Venue selection and setup",
      "Decoration and lighting",
      "Catering services",
      "Cakes and pastries",
      "Suya and barbecue stations",
      "Cooling van services",
      "DJ and entertainment",
      "Photography and videography",
      "Souvenir distribution",
      "Event coordination",
      "Professional servers",
      "Security services"
    ],
    icon: Cake
  },
  {
    id: 3,
    category: "Traditional Ceremonies",
    title: "Traditional Ceremonies",
    description: "Expert planning for coronations, chieftaincy, and traditional ceremonies.",
    image: traditionalBeeds,
    features: [
      "Traditional venue setup",
      "Cultural decoration themes",
      "Traditional catering services",
      "Live band and cultural performances",
      "Choir and coral groups",
      "Photography and documentation",
      "Billboard and banner arrangements",
      "Traditional costume coordination",
      "Security and crowd management",
      "Professional ushers",
      "Parking management"
    ],
    icon: Crown
  },
  {
    id: 4,
    category: "Funeral Services",
    title: "Funeral Services",
    description: "Dignified arrangements for funerals, memorials, and thanksgiving services.",
    image: Memorial,
    features: [
      "Ambulance arrangements",
      "Funeral parlor services",
      "Professional pallbearers/undertakers",
      "Parade band and trumpeters",
      "Memorial decoration",
      "Catering services",
      "Photography and documentation",
      "Posters and banners",
      "Security arrangements",
      "Choir arrangements",
      "Event coordination",
      "Memorial booklets"
    ],
    icon: Church
  },
  {
    id: 5,
    category: "Home Celebrations",
    title: "Home Celebrations",
    description: "Beautiful house warming parties and home-based events.",
    image: Suya,
    features: [
      "Indoor/outdoor setup",
      "Tent and canopy arrangements",
      "Furniture rentals",
      "Decoration services",
      "Catering and refreshments",
      "Entertainment setup",
      "Photography services",
      "Lighting arrangements",
      "Professional servers",
      "Cleanup services"
    ],
    icon: Home
  },
  {
    id: 6,
    category: "Surprise Events",
    title: "Surprise Events",
    description: "Carefully planned surprise parties and special celebrations.",
    image: Suprise,
    features: [
      "Secret venue preparation",
      "Decoration and setup",
      "Catering arrangements",
      "Entertainment coordination",
      "Photography and video coverage",
      "Guest coordination",
      "Gift arrangements",
      "Timeline management",
      "Professional coordination"
    ],
    icon: Gift
  }
];


const ServicesPage: React.FC = () => {
    const { serviceId } = useParams<string>();
    console.log(serviceId);
    
    const [activeCategory, setActiveCategory] = useState(
        serviceId ? serviceId.replace(/\s+/g, '-').toLowerCase() : "wedding-planning"
    );

    const selectedService = serviceItems.find((item) => item.category.toLowerCase().replace(/\s+/g, '-') === activeCategory);

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-12 mt-[8rem]">Our Services</h1>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {services.map((category) => (
              <button
                key={category.title}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeCategory === category.title.replace(/\s+/g, '-').toLowerCase()
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
                onClick={() => setActiveCategory(category.title.replace(/\s+/g, '-').toLowerCase())}
              >
                {category.title}
              </button>
            ))}
          </div>

          {selectedService && (
            <motion.div 
              layout
              key={selectedService.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
               <Link to="/gallery">
               <div className="relative h-[300px] w-full">
                  <ImageWithFallback
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                    <div className="flex items-center gap-4 mb-2">
                      <selectedService.icon className="w-8 h-8" />
                      <h2 className="text-3xl font-bold">{selectedService.title}</h2>
                    </div>
                    <p className="text-xl text-gray-100">{selectedService.description}</p>
                  </div>
                </div>
               </Link>

                <div className="p-8">
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">What's Included:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedService.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <svg className="w-5 h-5 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
    );
};

export default ServicesPage;

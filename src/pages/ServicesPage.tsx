import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Palette, Cake, Camera, Star, Shield } from "lucide-react";

const serviceItems = [
  {
    id: 1,
    category: "Wedding Planning",
    title: "Wedding Planning Services",
    description: "Comprehensive wedding planning services tailored to your dream day.",
    features: [
      "Full wedding planning and coordination",
      "Vendor selection and management",
      "Budget planning and tracking",
      "Timeline creation and management",
      "On-site wedding day coordination"
    ],
    priceRange: "₦500,000 - ₦2,000,000",
    icon: Heart
  },
  {
    id: 2,
    category: "Makeup",
    title: "Professional Makeup Services",
    description: "Professional makeup artists for your special occasions.",
    features: [
      "Bridal makeup",
      "Special occasion makeup",
      "Group makeup services",
      "Touch-up services",
      "Premium beauty products"
    ],
    priceRange: "₦25,000 - ₦150,000",
    icon: Palette
  },
  {
    id: 3,
    category: "Catering",
    title: "Exquisite Catering Services",
    description: "Exquisite culinary experiences for all types of events.",
    features: [
      "Customized menu planning",
      "Multiple cuisine options",
      "Live cooking stations",
      "Professional service staff",
      "Dietary accommodation"
    ],
    priceRange: "₦15,000 - ₦50,000 per person",
    icon: Cake
  },
  {
    id: 4,
    category: "Photography",
    title: "Event Photography",
    description: "Capture your precious moments with our professional photographers.",
    features: [
      "Professional photography coverage",
      "Same-day photo previews",
      "Digital and printed albums",
      "Drone photography",
      "Video coverage options"
    ],
    priceRange: "₦200,000 - ₦800,000",
    icon: Camera
  },
  {
    id: 5,
    category: "Decoration",
    title: "Creative Decoration Services",
    description: "Transform spaces with our creative decoration services.",
    features: [
      "Custom theme design",
      "Floral arrangements",
      "Lighting setup",
      "Furniture rental",
      "Stage and backdrop design"
    ],
    priceRange: "₦300,000 - ₦1,500,000",
    icon: Star
  },
  {
    id: 6,
    category: "Security",
    title: "Event Security Services",
    description: "Professional security personnel to ensure your event's safety and peace of mind.",
    features: [
      "Trained security personnel",
      "Crowd management",
      "VIP protection",
      "Access control",
      "Emergency response"
    ],
    priceRange: "₦150,000 - ₦500,000",
    icon: Shield
  }
];

const categories = ["Wedding Planning", "Makeup", "Catering", "Photography", "Decoration", "Security"];

const ServicesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const selectedService = serviceItems.find((item) => item.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 mt-[8rem]">Our Services</h1>
      
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-6 py-2 rounded-full transition-all ${
              activeCategory === category
                ? "bg-purple-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
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
          <div className="bg-white rounded-xl shadow-lg overflow-hidden p-8">
            <div className="flex items-center gap-4 mb-6">
              <selectedService.icon className="w-8 h-8 text-purple-600" />
              <h2 className="text-3xl font-bold">{selectedService.title}</h2>
            </div>
            
            <p className="text-xl text-gray-600 mb-8">{selectedService.description}</p>
            
            <div className="bg-purple-50 rounded-lg p-6 mb-8">
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
            
            <div className="text-center">
              <p className="text-gray-600 mb-2">Investment Starting From</p>
              <p className="text-3xl font-bold text-purple-600">{selectedService.priceRange}</p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ServicesPage;

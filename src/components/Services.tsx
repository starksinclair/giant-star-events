import { motion } from 'framer-motion';
import {  Star, Heart, Users, Cake, Camera, Palette,  } from 'lucide-react';

const services = [
    {
      title: "Wedding Planning",
      icon: Heart,
      description: "Comprehensive wedding planning services tailored to your dream day."
    },
    {
      title: "Makeup Artists",
      icon: Palette,
      description: "Professional makeup artists for your special occasions."
    },
    {
      title: "Catering",
      icon: Cake,
      description: "Exquisite culinary experiences for all types of events."
    },
    {
      title: "Event Photography",
      icon: Camera,
      description: "Capture your precious moments with our professional photographers."
    },
    {
      title: "Decoration",
      icon: Star,
      description: "Transform spaces with our creative decoration services."
    },
    {
      title: "Security",
      icon: Users,
      description: "Expert event security/bouncers to ensure everything runs smoothly."
    }
  ];
  
  const Services = () => (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-gray-800"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <service.icon className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
export default Services;
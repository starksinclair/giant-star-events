import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Map } from 'lucide-react';

const Contact = () => (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-gray-800"
        >
          Get in Touch
        </motion.h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-800">Contact Information</h3>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-purple-600" />
              <a 
                href="tel:+2349164902923" 
                className="text-purple-600 hover:text-purple-800 underline decoration-dotted transition-colors"
              >
                +234 916 490 2923
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-purple-600" />
              <a 
                href="mailto:contact@greatgiantevents.com"
                className="text-purple-600 hover:text-purple-800 underline decoration-dotted transition-colors"
              >
               contact@matureeventplanners.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-purple-600" />
              <span className="text-gray-600">67 Okigwe Road, Opposite Coisco Fuel Station, Owerri</span>
            </div>
            <div className="flex items-center space-x-4">
              <Map className="w-6 h-6 text-purple-600" />
              <span className="text-gray-600">We cover events in Southeastern states, Port Harcourt, Asaba and surrounding areas</span>
            </div>
            <a
              href="https://wa.me/2349164902923"
              className="inline-flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
            >
              <span>Discuss on WhatsApp</span>
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e"
              alt="Contact Us - Scrabble tiles spelling out contact"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
  export default Contact;
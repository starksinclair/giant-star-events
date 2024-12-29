import { motion } from 'framer-motion';

const Misssion = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {/* Mission Statement */}
          <h2 className="text-4xl font-bold mb-6 text-gray-800 text-center">Our Mission</h2>
          <div className="text-gray-600 mb-16 space-y-4">
            <p>
              Events and ceremonies don't happen always, some events like weddings, funerals, coronations are experienced once in a lifetime which makes it impossible to redeem any errors or bad image created by poor planning and implementations at such events.
            </p>
            <p>
              We want to help people make good impressions in their events from the beginning to the last minute of the show. We put smiles on the faces of both our clients and their guests.
            </p>
          </div>

          {/* Our Approach */}
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Our Approach</h3>
          <p className="text-gray-600 mb-4">We stand out in the following ways:</p>
          <ul className="list-disc pl-6 mb-16 text-gray-600 space-y-2">
            <li>Effectively listening to understand what our clients need</li>
            <li>Proper guidance to give directions to our clients</li>
            <li>Precisely estimating the cost</li>
            <li>We work closely with our client's budget</li>
          </ul>

          {/* Aim */}
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Our Aim</h3>
          <div className="text-gray-600 mb-12 space-y-4">
            <p>To make your events exciting and memorable.</p>
            <p>We minimize your costs and maximize your output and enjoyment benefits.</p>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-purple-50 p-8 rounded-lg text-center"
          >
            <p className="text-lg text-purple-800 font-medium">
              Allow us to think and plan that occasion for you to give you and your guests a relishing and exquisite experience
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Misssion;
